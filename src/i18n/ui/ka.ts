import type { UiStrings } from "./en";

const ka = {
  skipToContent: "გადასვლა შინაარსზე",
  menu: "მენიუ",
  closeMenu: "მენიუს დახურვა",
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
      { href: "/magazine/", label: "ჟურნალი" },
    ],
    hoursTitle: "სამუშაო საათები",
    hours: ["ორშაბათი – კვირა", "08:00 – 24:00", "ღიაა ყოველდღე"],
    contactTitle: "კონტაქტი",
    address: ["Grand Fitness", "ბაგრატიონის ქ. 196", "ბათუმი 6000, საქართველო"],
    copyright: "© 2026 Grand Fitness · ბათუმი, საქართველო",
    privacy: "კონფიდენციალურობის პოლიტიკა",
    imprint: "რეკვიზიტები",
  },
  consent: {
    lang: "ka",
    label: "კონფიდენციალურობის შეტყობინება",
    title: "შენი კონფიდენციალურობა, მარტივად.",
    text: "ამ საიტზე თვალთვალის ქუქი-ფაილები არ გამოიყენება — მხოლოდ ტექნიკურად აუცილებელი მეხსიერება. შრიფტები ჩვენს საკუთარ სერვერებზეა განთავსებული.",
    ok: "გასაგებია",
    details: "დეტალები",
  },
} satisfies UiStrings;

export default ka;
