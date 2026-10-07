/** Shared interface text (nav, footer, consent). English is the reference; other languages must match its shape. */
const en = {
  skipToContent: "Skip to content",
  menu: "Menu",
  closeMenu: "Close menu",
  /** Screen-reader name of the main navigation. */
  navLabel: "Main",
  nav: [
    { href: "/about/", label: "About" },
    { href: "/goals/", label: "Goals" },
    { href: "/coaches/", label: "Coaches" },
    { href: "/classes/", label: "Classes" },
    { href: "/pricing/", label: "Pricing" },
    { href: "/magazine/", label: "Magazine" },
  ],
  navHome: "Home",
  navCta: { href: "/contact/", label: "Join Now" },
  /** Label of the link that switches *to* this language. */
  switchTo: "English version",
  footer: {
    slogan: "Better Than Yesterday",
    about:
      "Batumi's premier fitness club — 9 expert coaches, 5 group classes, and a community built around one shared goal: becoming better every single day.",
    navTitle: "Navigation",
    nav: [
      { href: "/about/", label: "About Us" },
      { href: "/coaches/", label: "Coaches" },
      { href: "/classes/", label: "Classes" },
      { href: "/pricing/", label: "Pricing" },
      { href: "/magazine/", label: "Magazine" },
    ],
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
    title: "Your privacy, plainly.",
    text: "No tracking cookies on this site — only technically necessary storage. Fonts are hosted on our own servers.",
    ok: "Got it",
    details: "Details",
  },
};

export type UiStrings = typeof en;
export default en;
