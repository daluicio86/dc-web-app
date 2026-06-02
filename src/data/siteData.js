import {
  BatteryCharging,
  Cable,
  Camera,
  CheckCircle2,
  Clock3,
  Droplets,
  Headphones,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  TabletSmartphone,
  Wrench,
  Zap
} from "lucide-react";

export const whatsappNumber = "593987777779";

export const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cotizar", href: "#diagnostico" },
  { label: "Accesorios", href: "#accesorios" },
  { label: "Sucursales", href: "#sucursales" }
];

export const trustItems = [
  { label: "Repuestos premium", icon: ShieldCheck },
  { label: "Entrega rápida", icon: Clock3 },
  { label: "Garantía por escrito", icon: CheckCircle2 }
];

export const diagnostics = [
  { icon: Smartphone, title: "Pantalla rota", text: "Vidrio, touch, display o manchas en pantalla." },
  { icon: Cable, title: "No carga", text: "Pin de carga, batería o carga intermitente." },
  { icon: Camera, title: "Cámara o audio", text: "Cámara, parlante, micrófono o sensores." },
  { icon: Droplets, title: "Se mojó", text: "Diagnóstico por humedad y limpieza técnica." },
  { icon: BatteryCharging, title: "Batería", text: "Se descarga rápido, se apaga o se recalienta." },
  { icon: MonitorSmartphone, title: "Software", text: "Lento, bloqueado, errores o actualización." },
  { icon: TabletSmartphone, title: "Tablet / iWatch", text: "Revisión para tablets y relojes inteligentes." },
  { icon: MessageCircle, title: "Otro problema", text: "Cuéntanos qué ocurre con tu equipo." }
];

export const services = [
  {
    icon: Smartphone,
    title: "Cambio de pantalla",
    text: "Pantallas compatibles y originales según disponibilidad, instalación técnica y prueba final."
  },
  {
    icon: Zap,
    title: "Batería y carga",
    text: "Reemplazo de baterías, pines de carga, diagnóstico de consumo y carga rápida."
  },
  {
    icon: Camera,
    title: "Cámara y audio",
    text: "Revisión de cámaras, parlantes, micrófonos, sensores y conectores internos."
  },
  {
    icon: MonitorSmartphone,
    title: "Software",
    text: "Restauración, respaldos, optimización y actualización del sistema."
  },
  {
    icon: Wrench,
    title: "Microsoldadura",
    text: "Intervenciones avanzadas para fallas de placa, humedad y componentes críticos."
  },
  {
    icon: TabletSmartphone,
    title: "Tablets y smartwatch",
    text: "Soporte técnico para iPad, tablets Android, iWatch y relojes inteligentes."
  }
];

export const guaranteeItems = [
  { label: "Diagnóstico transparente", icon: CheckCircle2 },
  { label: "Repuestos de calidad", icon: ShieldCheck },
  { label: "Pruebas antes de entregar", icon: Sparkles },
  { label: "Atención personalizada", icon: MessageCircle }
];

export const accessories = [
  {
    icon: Zap,
    title: "Cargadores rápidos",
    text: "Potencia estable para uso diario.",
    artClass: "art-blue"
  },
  {
    icon: Headphones,
    title: "AirPods y audífonos",
    text: "Audio inalámbrico para llamadas y música.",
    artClass: "art-green"
  },
  {
    icon: Cable,
    title: "Cables resistentes",
    text: "Carga y datos para iPhone, USB-C y micro USB.",
    artClass: "art-amber"
  },
  {
    icon: ShoppingBag,
    title: "Micas y protectores",
    text: "Protección precisa para pantalla y cámara.",
    artClass: "art-violet"
  }
];

export const testimonials = [
  {
    name: "Jhoana Colina",
    text: "La atención fue excelente, muy amables y profesionales. Los recomiendo.",
    branch: "Sucursal Quito"
  },
  {
    name: "Johnathan Doe",
    text: "Me resolvieron un problema grave con el teléfono. Buen servicio.",
    branch: "Servicio técnico"
  },
  {
    name: "Juan Morejon",
    text: "Mi pantalla quedó impecable, con garantía y atención muy amable.",
    branch: "Cambio de pantalla"
  }
];

export const branches = [
  { name: "Matriz", address: "Prensa y Río Arajuno", icon: MapPin },
  { name: "Sucursal Colón", address: "Colón y Juan León Mera", icon: MapPin },
  { name: "Sucursal Shyris", address: "Shyris y Gaspar de Villarroel", icon: MapPin },
  { name: "Sucursal Prensa", address: "Prensa y Vaca de Castro", icon: MapPin }
];

export const quickStats = [
  { value: "15+", label: "años de experiencia" },
  { value: "4", label: "sucursales en Quito" },
  { value: "100%", label: "reparaciones con prueba final" }
];
