import { appendFile, mkdir, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { randomUUID } from "node:crypto";

const QUEUE_FILE = resolve(process.env.FOLLOWUPS_FILE || "data/followups.ndjson");
const EVENTS_FILE = resolve(process.env.LEAD_EVENTS_FILE || "data/lead-events.ndjson");
const DAY = 24 * 60 * 60 * 1000;

const clean = (value, max = 300) => typeof value === "string" ? value.trim().slice(0, max) : "";
const job = (lead, type, dueAt) => ({
  id: randomUUID(), caseId: lead.caseId, type, dueAt: new Date(dueAt).toISOString(),
  contact: lead.contact, location: lead.location, device: [lead.brand, lead.model].filter(Boolean).join(" "),
  status: "pending", createdAt: new Date().toISOString()
});

async function append(file, value) {
  await mkdir(dirname(file), { recursive: true });
  await appendFile(file, `${JSON.stringify(value)}\n`, { encoding: "utf8", mode: 0o600 });
}

export async function scheduleNewLeadFollowups(lead) {
  const created = new Date(lead.createdAt).getTime();
  await append(QUEUE_FILE, job(lead, "quote_followup_24h", created + DAY));
  await append(QUEUE_FILE, job(lead, "quote_followup_72h", created + 3 * DAY));
}

export async function recordLifecycleEvent(caseId, payload) {
  const type = clean(payload?.type, 50);
  const allowed = ["appointment_confirmed", "service_completed", "lead_won", "lead_lost"];
  if (!allowed.includes(type)) return { status: 400, body: { error: "Evento no válido." } };
  const event = { id: randomUUID(), caseId: clean(caseId, 40), type, occurredAt: new Date().toISOString(), appointmentAt: clean(payload.appointmentAt, 40), contact: clean(payload.contact, 160), marketingConsent: payload.marketingConsent === true };
  await append(EVENTS_FILE, event);

  if (type === "appointment_confirmed" && event.appointmentAt && event.contact) {
    const appointment = Date.parse(event.appointmentAt);
    if (Number.isFinite(appointment)) await append(QUEUE_FILE, job(event, "appointment_reminder_2h", Math.max(Date.now(), appointment - 2 * 60 * 60 * 1000)));
  }
  if (type === "service_completed" && event.contact) {
    await append(QUEUE_FILE, job(event, "review_request_24h", Date.now() + DAY));
    if (event.marketingConsent) await append(QUEUE_FILE, job(event, "maintenance_reminder_90d", Date.now() + 90 * DAY));
  }
  return { status: 201, body: { ok: true, eventId: event.id } };
}

async function readRows(file) {
  try { return (await readFile(file, "utf8")).trim().split("\n").filter(Boolean).map(JSON.parse); }
  catch (error) { if (error.code === "ENOENT") return []; throw error; }
}

export async function dispatchDueFollowups() {
  const url = process.env.FOLLOWUP_WEBHOOK_URL;
  if (!url) return { sent: 0, skipped: true };
  const jobs = await readRows(QUEUE_FILE);
  const events = await readRows(EVENTS_FILE);
  const completed = new Set(events.filter((event) => event.type === "followup_sent").map((event) => event.jobId));
  const closedCases = new Set(events.filter((event) => ["appointment_confirmed", "service_completed", "lead_won", "lead_lost"].includes(event.type)).map((event) => event.caseId));
  const due = jobs.filter((item) => item.status === "pending" && Date.parse(item.dueAt) <= Date.now() && !completed.has(item.id) && !(item.type.startsWith("quote_followup_") && closedCases.has(item.caseId))).slice(0, 25);
  let sent = 0;
  for (const item of due) {
    try {
      const response = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(item), signal: AbortSignal.timeout(8000) });
      if (!response.ok) throw new Error(`Webhook respondió ${response.status}`);
      await append(EVENTS_FILE, { id: randomUUID(), type: "followup_sent", jobId: item.id, caseId: item.caseId, occurredAt: new Date().toISOString() });
      sent += 1;
    } catch (error) { console.error(`No se pudo enviar seguimiento ${item.id}:`, error.message); }
  }
  return { sent, skipped: false };
}
