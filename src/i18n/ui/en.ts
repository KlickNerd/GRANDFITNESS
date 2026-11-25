/** Shared interface text (nav, footer, consent). English is the reference; other languages must match its shape. */
const en = {
  skipToContent: "Skip to content",
  menu: "Menu",
  closeMenu: "Close menu",
  /** Screen-reader name of the main navigation. */
  navLabel: "Main",
  nav: [
    { href: "/#prices", label: "Prices" },
    { href: "/#coaches", label: "Coaches" },
    { href: "/#gym", label: "The gym" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact us" },
  ],
  navHome: "Home",
  /** Label of the link that switches *to* this language. */
  switchTo: "English version",
  footer: {
    slogan: "Better Than Yesterday",
    hoursTitle: "Opening Hours",
    hours: ["Monday – Sunday", "08:00 – 24:00", "Open every day"],
    contactTitle: "Contact",
    address: ["Grand Fitness", "196 Bagrationi St", "Batumi 6000, Georgia"],
    copyright: "© 2026 Grand Fitness Batumi. All rights reserved.",
    privacy: "Privacy Policy",
    imprint: "Imprint",
  },
  consent: {
    /** Language the banner text is written in (lets a not-yet-translated banner keep English styling). */
    lang: "en",
    label: "Privacy notice",
    title: "Your privacy",
    text: "This site uses no tracking cookies, only technically necessary storage. Fonts are hosted on our own servers.",
    ok: "OK",
    details: "Details",
  },
};

export type UiStrings = typeof en;
export default en;
