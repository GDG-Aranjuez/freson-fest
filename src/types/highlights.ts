export type HighlightTextPart = {
  type: "text";
  value: string;
};

export type HighlightLinkPart = {
  type: "link";
  value: string;
  href: string;
};

export type HighlightDescriptionPart = HighlightTextPart | HighlightLinkPart;

export interface HighlightItem {
  number: string;
  title: string;
  description: string | HighlightDescriptionPart[];
}

export interface HighlightImage {
  src: string;
  alt: string;
}
