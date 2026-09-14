export type ContactMailtoFields = {
  to: string;
  name: string;
  company?: string;
  email: string;
  message: string;
};

/** Build a mailto URL with the contact form fields as subject and body. */
export function buildContactMailto({
  to,
  name,
  company,
  email,
  message,
}: ContactMailtoFields): string {
  const trimmedName = name.trim();
  const trimmedCompany = company?.trim() ?? "";
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  const subject = trimmedName
    ? `Contacto FresON Fest — ${trimmedName}`
    : "Contacto FresON Fest";
  const body = [
    trimmedName && `Nombre: ${trimmedName}`,
    trimmedCompany && `Compañía: ${trimmedCompany}`,
    trimmedEmail && `Email: ${trimmedEmail}`,
    trimmedMessage && `Mensaje:\n${trimmedMessage}`,
  ]
    .filter(Boolean)
    .join("\n");

  const params = [
    `subject=${encodeURIComponent(subject)}`,
    body ? `body=${encodeURIComponent(body)}` : "",
  ]
    .filter(Boolean)
    .join("&");

  return `mailto:${to}?${params}`;
}
