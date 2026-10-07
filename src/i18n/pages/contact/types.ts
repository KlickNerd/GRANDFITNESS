import type { Meta } from "@/i18n/shared-types";

interface Field {
  label: string;
  placeholder?: string;
}

/** One contact channel card ("Phone", "Email", …). */
interface Channel {
  tag: string;
  /** Large gold value; a link when `href` is set. */
  value: string;
  href?: string;
  /** Smaller value text, e.g. a long email address. */
  small?: boolean;
  note: string;
  /** External link under the note, e.g. Google Maps directions. */
  link?: { label: string; href: string };
}

/** Contact page text. */
export interface Copy {
  meta: Meta;
  hero: { image: string; eyebrow: string; /** html */ title: string; lead: string };
  form: {
    eyebrow: string;
    /** html */
    title: string;
    name: Field;
    email: Field;
    phone: Field;
    /** The option text is also the submitted value. */
    topic: { label: string; options: string[] };
    message: Field;
    submit: string;
    note: string;
    /** Shown above the form after FormSubmit sends the visitor back (/contact/?sent). */
    sent: string;
  };
  channels: {
    eyebrow: string;
    /** html */
    title: string;
    items: Channel[];
  };
  social: {
    tag: string;
    title: string;
    text: string;
    /** `icon` is the short label in the gold box ("IG"). */
    links: { icon: string; label: string; href: string }[];
  };
  walkIn: {
    image: string;
    imageAlt: string;
    eyebrow: string;
    /** html */
    title: string;
    lead: string;
    /** html */
    items: string[];
  };
}
