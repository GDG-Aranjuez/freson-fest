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
      question: "¿Qué es FresON Fest?",
      answer:
        "FresON Fest es un DevFest organizado por GDG Aranjuez para aprender, compartir conocimiento y conectar con la comunidad. Durante el día podrás disfrutar de charlas y talleres sobre desarrollo de software, IA, cloud y otras tecnologías, de la mano de profesionales de la comunidad.",
    },
    {
      question: "¿Necesito ser desarrollador/a para asistir?",
      answer:
        "Para nada. FresON Fest está abierto a cualquier persona interesada en la tecnología, independientemente de su nivel de experiencia. Tanto si eres profesional, estudiante, estás empezando en el sector o simplemente tienes curiosidad por la tecnología, eres bienvenido/a.",
    },
    {
      question: "¿En qué idioma serán las sesiones?",
      answer:
        "La mayoría de las sesiones serán en español. En caso de que alguna charla o taller se imparta en inglés, estará indicado en la agenda.",
    },
    {
      question: "¿Necesito registrarme para asistir?",
      answer:
        "Sí. Para asistir a FresON Fest necesitas adquirir previamente tu entrada a través de Eventbrite. El aforo es limitado, así que te recomendamos conseguir la tuya con antelación.",
    },
    {
      question: "¿Cuánto cuesta la entrada?",
      answer:
        "La entrada tiene un precio de 8 €. Además, FresON Fest tiene un componente solidario: todo el dinero recaudado con las entradas será destinado a la Asociación Brego Ciudad Animal.",
    },
    {
      question: "¿Qué incluye mi entrada?",
      answer:
        "Tu entrada te da acceso durante toda la jornada a las charlas y talleres de FresON Fest. Además, el desayuno y la comida están incluidos en el precio de la entrada, para que puedas disfrutar del evento durante todo el día.",
    },
    {
      question: "Tengo entrada pero finalmente no puedo asistir, ¿qué hago?",
      answer:
        "Si finalmente no puedes asistir, puedes solicitar la devolución de tu entrada a través de Eventbrite. Las entradas tienen una política de devolución de hasta 7 días antes del evento. Te recomendamos gestionar la devolución cuanto antes para que tu plaza pueda quedar disponible para otra persona.",
    },
    {
      question: "¿Tengo que llevar mi entrada impresa?",
      answer:
        "No es necesario. Puedes llevar tu entrada en el móvil y mostrar el código QR durante la acreditación.",
    },
    {
      question: "¿A qué hora debería llegar?",
      answer:
        "El registro de asistentes comienza a las 09:00. Te recomendamos llegar con algo de antelación para realizar la acreditación tranquilamente y estar listo/a para el comienzo de las primeras sesiones.",
    },
    {
      question: "¿Puedo llegar una vez haya comenzado el evento?",
      answer:
        "Sí. Si no puedes llegar a primera hora, podrás acceder al evento más tarde. Eso sí, intenta entrar y salir de las salas entre sesiones para evitar interrumpir las charlas o talleres que ya hayan comenzado.",
    },
    {
      question: "¿Necesito llevar portátil?",
      answer:
        "Para asistir a las charlas no necesitas llevar portátil. Si quieres participar en alguno de los talleres prácticos, es posible que necesites el tuyo. Consulta los requisitos de cada taller en la agenda antes del evento.",
    },
    {
      question: "¿Puedo cambiar de track durante el evento?",
      answer:
        "Sí. Puedes organizarte el día como prefieras y cambiar entre los diferentes tracks para asistir a las sesiones que más te interesen. Te recomendamos consultar previamente la agenda para montarte tu propio recorrido por FresON Fest.",
    },
    {
      question: "¿Se grabarán las charlas?",
      answer:
        "Está todavía por confirmar, pero tenemos previsto grabar algunas de las sesiones para poder publicarlas posteriormente. Cuando tengamos todos los detalles cerrados, indicaremos qué sesiones serán grabadas.",
    },
    {
      question: "¿Habrá comida y bebida?",
      answer:
        "Sí. Tanto el desayuno como la comida estarán incluidos con tu entrada. Así podrás disfrutar de toda la jornada sin tener que preocuparte por salir del recinto para comer.",
    },
    {
      question:
        "¿Qué ocurre si tengo una alergia, intolerancia o dieta especial?",
      answer:
        "Si tienes alguna alergia, intolerancia o necesidad alimentaria especial, podrás indicarlo durante el proceso de registro en Eventbrite. Esta opción estará disponible próximamente. Si ya has adquirido tu entrada y no pudiste indicarlo durante el registro, puedes ponerte en contacto con nosotros a través de gdg.aranjuez@gmail.com para que podamos tenerlo en cuenta.",
    },
    {
      question:
        "¿El recinto es accesible para personas con movilidad reducida?",
      answer:
        "Sí. El Centro Cultural Isabel de Farnesio es accesible para personas con movilidad reducida. Si necesitas alguna adaptación o asistencia adicional durante el evento, puedes ponerte en contacto con la organización antes del evento.",
    },
    {
      question: "Tengo otra duda, ¿cómo puedo contactar con la organización?",
      answer:
        "Si tu pregunta no aparece aquí, puedes ponerte en contacto con el equipo de GDG Aranjuez a través de gdg.aranjuez@gmail.com, LinkedIn o enviarnos un mensaje directo por Instagram. Estaremos encantados de ayudarte.",
    },
  ] satisfies HelpFaqItem[],
  more: { href: "#contacto", label: "Ir al formulario de contacto" },
} as const;

export const helpContact = {
  title: "¿No encuentras lo que estás buscando? Hablemos",
  subtitle:
    "Completa el formulario y nuestro equipo se pondrá en contacto contigo.",
  emailLabel: "Email:",
  email: "gdg.aranjuez@gmail.com",
  form: {
    nameLabel: "Nombre",
    companyLabel: "Compañía (opcional)",
    emailLabel: "Email",
    messageLabel: "¿Quieres comentarnos algo?",
    requiredFootnote: "* Campo obligatorio",
    submitButton: "Contacta con nosotros",
  } satisfies HelpContactForm,
} as const;
