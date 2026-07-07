const SESSION_KEY = "doctorcell-lead-session";

function sessionId() {
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export async function captureChatbotLead(answers) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...answers, sessionId: sessionId(), consent: true })
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || "No pudimos registrar el caso.");
  return result;
}

