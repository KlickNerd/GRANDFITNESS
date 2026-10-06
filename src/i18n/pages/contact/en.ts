import type { Copy } from "./types";

export default {
  meta: {
    title: "Contact | Grand Fitness Batumi",
    description:
      "Get in touch with Grand Fitness Batumi: contact form, phone, email, Instagram & Facebook. 196 Bagrationi St, open daily 08:00–24:00.",
  },
  hero: {
    image: "space/reception.jpg",
    eyebrow: "Grand Fitness · Get In Touch",
    title: 'Talk<br><span class="text-gold">to us.</span>',
    lead: "Question about memberships? Your first visit? Message us, call us, DM us — or just walk in. We usually reply the same day.",
  },
  form: {
    eyebrow: "Send us a message",
    title: "We reply<br>fast.",
    name: { label: "Your Name *", placeholder: "Giorgi Beridze" },
    email: { label: "Email *", placeholder: "you@example.com" },
    phone: { label: "Phone (optional)", placeholder: "+995 5XX XX XX XX" },
    topic: {
      label: "I'm interested in",
      options: ["My first visit", "Memberships & pricing", "Personal training", "Group classes", "Something else"],
    },
    message: {
      label: "Your Message *",
      placeholder: "Tell us what you're looking for — goals, questions, preferred times…",
    },
    submit: "Send Message",
    note: "We usually reply the same day. Prefer it faster? Call us or send a DM on Instagram — we're quick there too.",
  },
  channels: {
    eyebrow: "All the ways to reach us",
    title: "Pick your<br>channel.",
    items: [
      { tag: "Phone", value: "+995 557 19 27 27", href: "tel:+995557192727", note: "Call or message us anytime" },
      {
        tag: "Email",
        value: "info@grandfitness.ge",
        href: "mailto:info@grandfitness.ge",
        small: true,
        note: "We usually reply the same day",
      },
      {
        tag: "Address",
        value: "196 Bagrationi St",
        note: "Batumi 6000, Georgia",
        link: { label: "Get Directions →", href: "https://maps.google.com/?q=Grand+Fitness+196+Bagrationi+St+Batumi" },
      },
      { tag: "Opening Hours", value: "08:00 – 24:00", note: "Monday – Sunday, every day" },
    ],
  },
  social: {
    tag: "Social · DMs open",
    title: "We're on Instagram & Facebook",
    text: "Daily gym life, class updates and the fastest DMs in Batumi — follow us, message us, tag us. We answer there just like here.",
    links: [
      { icon: "IG", label: "@grand_fitness_batumi", href: "https://www.instagram.com/grand_fitness_batumi/" },
      { icon: "FB", label: "Grand Fitness Batumi", href: "https://www.facebook.com/61585147224532/" },
    ],
  },
  walkIn: {
    image: "space/reception.jpg",
    imageAlt: "Grand Fitness reception, 196 Bagrationi St, Batumi",
    eyebrow: "Walk In Any Day",
    title: "Or skip the typing<br>and just walk in.",
    lead: "Honestly? The best way to get to know Grand Fitness is through the front door. Walk in any day between 08:00 and 24:00 and our team will take care of everything:",
    items: [
      "No judgment — every level is welcome, from complete beginners to competitive athletes",
      "Personal coach match — we'll introduce you to the coach that fits your goals best",
      "Full access on day one — try any class, use all equipment, finish in the sauna",
      "Zero obligation — love it and join, or don't — no pressure either way",
    ],
  },
} satisfies Copy;
