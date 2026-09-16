import type { IconName } from "@/types/icon";

export type SocialNetworkKey = Extract<
  IconName,
  "linkedin" | "x" | "instagram" | "behance" | "github"
>;

export type SocialHrefs = Partial<Record<SocialNetworkKey, string>>;

export const SOCIAL_NETWORKS = [
  { key: "linkedin", label: "LinkedIn" },
  { key: "x", label: "X" },
  { key: "instagram", label: "Instagram" },
  { key: "behance", label: "Behance" },
  { key: "github", label: "GitHub" },
] as const satisfies readonly { key: SocialNetworkKey; label: string }[];

export function mapSocialItems(socials?: SocialHrefs) {
  return SOCIAL_NETWORKS.flatMap(({ key, label }) => {
    const href = socials?.[key];

    return href ? [{ href, label, icon: key }] : [];
  });
}
