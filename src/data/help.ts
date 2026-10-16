import { site } from "@/data/site";

export interface HelpContactForm {
  nameLabel: string;
  companyLabel: string;
  emailLabel: string;
  messageLabel: string;
  requiredFootnote: string;
  submitButton: string;
  subject: string;
  successMessage: string;
  formError: string;
  fieldError: string;
}

export const hero = {
  eyebrow: "Ayuda",
  title: "Encuentra la información que necesitas",
} as const;

export const contact = {
  title: "¿No encuentras lo que estás buscando? Hablemos",
  subtitle:
    "Completa el formulario y nuestro equipo se pondrá en contacto contigo.",
  emailLabel: "Email:",
  email: site.contactEmail,
  form: {
    nameLabel: "Nombre",
    companyLabel: "Compañía (opcional)",
    emailLabel: "Email",
    messageLabel: "¿Quieres comentarnos algo?",
    requiredFootnote: "* Campo obligatorio",
    submitButton: "Contacta con nosotros",
    subject: "Ayuda FresON Fest",
    successMessage:
      "Gracias. Hemos recibido tu mensaje y te responderemos pronto.",
    formError: "No se ha podido enviar el formulario. Inténtalo de nuevo.",
    fieldError: "Revisa este campo.",
  } satisfies HelpContactForm,
} as const;
