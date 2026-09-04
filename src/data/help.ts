import type { HelpContactForm, HelpFaqItem } from "@/types/help";

export const helpHero = {
  eyebrow: "Ayuda",
  title: "¿Necesitas ayuda?",
  subtitle: "Encuentra toda la información que necesitas.",
} as const;

export const helpFaqs = {
  heading: "Preguntas Frecuentes",
  items: [
    {
      question: "¿Cuándo y dónde se celebra Fresón Fest?",
      answer:
        "Fresón Fest se celebra en Aranjuez. Consulta la fecha y el lugar exactos en la sección de Ubicación.",
    },
    {
      question: "¿Cómo consigo mi entrada?",
      answer:
        "Las entradas se publican en la sección Entradas de la web. Te avisaremos por redes sociales en cuanto se abra el registro.",
    },
    {
      question: "¿Puedo proponer una charla?",
      answer:
        "Sí, abrimos un Call for Papers antes del evento. Encontrarás el formulario en la sección CFP.",
    },
    {
      question: "¿Cómo puedo patrocinar el evento?",
      answer:
        "Escríbenos desde el formulario de contacto o en la sección Patrocinadores y te enviaremos toda la información.",
    },
    {
      question: "¿Hay código de conducta?",
      answer:
        "Sí, todo el público, ponentes y organización deben seguir nuestro código de conducta, disponible en el footer del sitio.",
    },
    {
      question: "No he encontrado respuesta a mi duda, ¿qué hago?",
      answer:
        "Rellena el formulario de contacto de esta página y nuestro equipo te responderá lo antes posible.",
    },
  ] satisfies HelpFaqItem[],
  more: { href: "/ayuda#contacto", label: "Ir al formulario de contacto" },
} as const;

export const helpContact = {
  title: "¿No encuentras lo que estás buscando? Hablemos",
  subtitle:
    "Completa el formulario y nuestro equipo se pondrá en contacto contigo.",
  emailLabel: "Email:",
  email: "contacto@gdgaranjuez.com",
  form: {
    nameLabel: "Nombre",
    companyLabel: "Compañía (opcional)",
    emailLabel: "Email",
    messageLabel: "¿Quieres comentarnos algo?",
    requiredFootnote: "* Campo obligatorio",
    submitButton: "Contacta con nosotros",
  } satisfies HelpContactForm,
} as const;
