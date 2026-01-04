export type ContactCardType = 'email' | 'phone' | 'social';

export interface ContactCard {
  type: ContactCardType;
  title: string;
  value: string;
  helper?: string;
  icon: string;
  href: string;
  targetBlank?: boolean;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}
