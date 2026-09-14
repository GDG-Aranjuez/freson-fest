import type { IconName } from "@/types/icon";

export type SocialNetworkKey = Extract<
  IconName,
  "linkedin" | "x" | "instagram"
>;

export type SocialHrefs = Partial<Record<SocialNetworkKey, string>>;

export const SOCIAL_NETWORKS = [
  { key: "linkedin", label: "LinkedIn" },
  { key: "x", label: "X" },
  { key: "instagram", label: "Instagram" },
] as const satisfies readonly { key: SocialNetworkKey; label: string }[];

export function mapSocialItems(socials?: SocialHrefs) {
  return SOCIAL_NETWORKS.map(({ key, label }) => ({
    href: socials?.[key],
    label,
    icon: key,
  }));
}
