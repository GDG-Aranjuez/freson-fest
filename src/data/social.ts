import type { IconName } from "@/types/icon";

export const socialLinks = [
  {
    href: "https://www.linkedin.com/company/gdg-aranjuez",
    label: "LinkedIn",
    icon: "linkedin" satisfies IconName,
  },
  {
    href: "https://twitter.com/gdgaranjuez",
    label: "X (Twitter)",
    icon: "x" satisfies IconName,
  },
  {
    href: "https://www.instagram.com/gdgaranjuez/",
    label: "Instagram",
    icon: "instagram" satisfies IconName,
  },
] as const;
