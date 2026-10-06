import type { Copy } from "./types";

/** Links to goal pages get " (EN)" automatically while those pages exist in English only. */
const linkLabel = "გაიგე მეტი →";

export default {
  meta: {
    title: "შენი მიზანი — ჩვენი საქმე | გრანდ ფიტნესი ბათუმი",
    description:
      "რა მიზნითაც არ უნდა მოხვიდე — ძალა, კუნთი, წონის კლება, კრივი, ქალთა ფიტნესი თუ უბრალოდ დაწყება — გრანდ ფიტნესს აქვს გეგმა, ვარჯიშები და მწვრთნელი შენთვის.",
  },
  hero: {
    image: "about-main.jpg",
    eyebrow: "რა მიზნით მოხვედი?",
    title: 'შენი მიზანი.<br><span class="text-gold">ჩვენი საქმე.</span>',
    lead: "ყველა თავისი მიზეზით შემოდის — და ყველა მიზეზი კარგია. აირჩიე შენი, და ჩვენ გაჩვენებთ, როგორ მიგიყვანს გრანდ ფიტნესი მიზნამდე.",
  },
  goals: [
    {
      href: "/goals/get-stronger/",
      image: "space/free-weights.jpg",
      alt: "გახდი უფრო ძლიერი — გრანდ ფიტნესი ბათუმი",
      tag: "ძალა",
      title: "გახდი უფრო ძლიერი",
      text: "შტანგები, დგარები და მწვრთნელები, რომლებმაც ძალის მეცნიერება იციან.",
      linkLabel,
    },
    {
      href: "/goals/build-muscle/",
      image: "mag/slow-success.jpg",
      alt: "ააშენე კუნთი — გრანდ ფიტნესი ბათუმი",
      tag: "კუნთის ზრდა",
      title: "ააშენე კუნთი",
      text: "სტრუქტურირებული პროგრამები და ხილული შედეგები — გამეორება გამეორებაზე.",
      linkLabel,
    },
    {
      href: "/goals/feel-great/",
      image: "space/cardio-zone.jpg",
      alt: "იგრძენი თავი შესანიშნავად — გრანდ ფიტნესი ბათუმი",
      tag: "წონის კლება",
      title: "იგრძენი თავი შესანიშნავად",
      text: "კარდიო ხედით, ჯგუფური ვარჯიშები კარგი მუსიკით და გეგმა, რომელიც ბოლოს და ბოლოს მუშაობს.",
      linkLabel,
    },
    {
      href: "/goals/learn-to-box/",
      image: "classes/boxing.jpg",
      alt: "ისწავლე კრივი — გრანდ ფიტნესი ბათუმი",
      tag: "კრივი",
      title: "ისწავლე კრივი",
      text: "ნამდვილი ტექნიკა, ნამდვილი ძალა — სპარინგის გარეშე.",
      linkLabel,
    },
    {
      href: "/goals/womens-fitness/",
      image: "classes/pilates.jpg",
      alt: "ქალთა ფიტნესი — გრანდ ფიტნესი ბათუმი",
      tag: "ქალებისთვის",
      title: "ქალთა ფიტნესი",
      text: "ძალა და თავდაჯერებულობა ვარჯიშებზე, რომლებიც ქალებისთვის შეიქმნა — მწვრთნელ სალომესთან ერთად.",
      linkLabel,
    },
    {
      href: "/goals/get-started/",
      image: "space/studio.jpg",
      alt: "უბრალოდ დაიწყე — გრანდ ფიტნესი ბათუმი",
      tag: "პირველად?",
      title: "უბრალოდ დაიწყე",
      text: "დარბაზში პირველად ხარ? შესანიშნავია. განსჯის გარეშე — კონტრაქტის გარეშე. ზეწოლის გარეშე.",
      linkLabel,
    },
  ],
  note: 'დეტალური გვერდები ამჟამად ინგლისურ ენაზეა — ქართული ვერსიები მალე დაემატება. ვერ გადაწყვიტე? მოდი და მწვრთნელთან ერთად აირჩიე — <a class="font-semibold tracking-[0.04em] text-gold hover:underline" href="/ka/contact/">დაჯავშნე აქ</a>.',
  cta: {
    eyebrow: "როგორიც არ უნდა იყოს შენი მიზანი",
    title: 'მზად ხარ<br><span class="text-gold">დასაწყებად?</span>',
    lead: "შემოდი, გაიცანი მწვრთნელი და გადადგი პირველი ნაბიჯი.",
    buttons: [
      { label: "დაჯავშნე პირველი ვარჯიში", href: "/contact/" },
      { label: "გაიცანი მწვრთნელები", href: "/coaches/", style: "outline" },
    ],
  },
} satisfies Copy;
