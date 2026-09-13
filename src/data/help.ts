import { site } from "@/data/site";

export interface HelpContactForm {
  nameLabel: string;
  companyLabel: string;
  emailLabel: string;
  messageLabel: string;
  requiredFootnote: string;
  submitButton: string;
}

export const hero = {
  eyebrow: "Ayuda",
  title: "¿Necesitas ayuda?",
  subtitle: "Encuentra toda la información que necesitas.",
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
  } satisfies HelpContactForm,
} as const;
