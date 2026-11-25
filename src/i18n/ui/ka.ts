import type { UiStrings } from "./en";

const ka = {
  skipToContent: "შინაარსზე გადასვლა",
  menu: "მენიუ",
  navLabel: "მთავარი ნავიგაცია",
  closeMenu: "მენიუს დახურვა",
  nav: [
    { href: "/#prices", label: "ფასები" },
    { href: "/#coaches", label: "მწვრთნელები" },
    { href: "/#gym", label: "დარბაზი" },
    { href: "/#faq", label: "კითხვები" },
    { href: "/#contact", label: "დაგვიკავშირდით" },
  ],
  navHome: "მთავარი",
  switchTo: "ქართული ვერსია",
  footer: {
    slogan: "Better Than Yesterday",
    hoursTitle: "სამუშაო საათები",
    hours: ["ორშაბათი – კვირა", "08:00 – 24:00", "ღიაა ყოველდღე"],
    contactTitle: "კონტაქტი",
    address: ["Grand Fitness", "ბაგრატიონის ქ. 196ი", "ბათუმი 6000, საქართველო"],
    copyright: "© 2026 Grand Fitness · ბათუმი, საქართველო",
    privacy: "კონფიდენციალურობის პოლიტიკა",
    imprint: "რეკვიზიტები",
  },
  consent: {
    lang: "ka",
    label: "კონფიდენციალურობის შეტყობინება",
    title: "თქვენი კონფიდენციალურობა",
    text: "ეს საიტი არ იყენებს თვალთვალის ქუქი-ფაილებს, მხოლოდ ტექნიკურად აუცილებელ მეხსიერებას. შრიფტები ჩვენს საკუთარ სერვერებზეა განთავსებული.",
    ok: "გასაგებია",
    details: "დეტალები",
  },
} satisfies UiStrings;

export default ka;
