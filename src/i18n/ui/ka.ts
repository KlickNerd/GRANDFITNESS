import type { UiStrings } from "./en";

const ka = {
  skipToContent: "გადასვლა შინაარსზე",
  menu: "მენიუ",
  nav: [
    { href: "/about/", label: "ჩვენ შესახებ" },
    { href: "/goals/", label: "მიზნები" },
    { href: "/coaches/", label: "მწვრთნელები" },
    { href: "/classes/", label: "ვარჯიშები" },
    { href: "/pricing/", label: "ფასები" },
  ],
  navHome: "მთავარი",
  navCta: { href: "/contact/", label: "შემოგვიერთდი" },
  switchTo: "ქართული ვერსია",
  footer: {
    slogan: "Better Than Yesterday",
    about:
      "ბათუმის პრემიუმ ფიტნეს კლუბი — 9 მწვრთნელი, 5 ჯგუფური ვარჯიში და საზოგადოება ერთი საერთო მიზნით: ყოველდღე გახდე უკეთესი.",
    navTitle: "ნავიგაცია",
    nav: [
      { href: "/about/", label: "ჩვენ შესახებ" },
      { href: "/coaches/", label: "მწვრთნელები" },
      { href: "/classes/", label: "ვარჯიშები" },
      { href: "/pricing/", label: "ფასები" },
      { href: "/magazine/", label: "ჟურნალი (EN)" },
    ],
    hoursTitle: "სამუშაო საათები",
    hours: ["ორშაბათი – კვირა", "08:00 – 24:00", "ღიაა ყოველდღე"],
    contactTitle: "კონტაქტი",
    address: ["Grand Fitness", "ბაგრატიონის ქ. 196", "ბათუმი 6000, საქართველო"],
    copyright: "© 2026 Grand Fitness · ბათუმი, საქართველო",
    privacy: "Privacy Policy",
    imprint: "Imprint",
  },
  // Not translated yet: the original banner was English on every page.
  consent: {
    lang: "en",
    label: "Privacy notice",
    title: "Your privacy, plainly.",
    text: "No tracking cookies on this site — only technically necessary storage and external services like Google Fonts.",
    ok: "Got it",
    details: "Details",
  },
} satisfies UiStrings;

export default ka;
