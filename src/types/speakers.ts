export interface SpeakerSocials {
  linkedin?: string;
  x?: string;
  instagram?: string;
}

export interface Speaker {
  id: number;
  name: string;
  lastName: string;
  role: string;
  Empresa: string;
  image: string;
  talkTitle?: string;
  talkDescription?: string;
  description?: string;
  socials?: SpeakerSocials;
}
