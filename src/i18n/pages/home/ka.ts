import type { Copy } from "./types";

export default {
  meta: {
    title: "ფიტნეს კლუბი ბათუმში | გრანდ ფიტნესი — Better Than Yesterday",
    description:
      "გრანდ ფიტნესი, ბაგრატიონის ქ. 196, ბათუმი. ღიაა ყოველდღე 08:00–24:00. ერთჯერადი ვიზიტი 25 ლარი, თვიური 140 ლარი — საუნა ყველა ფასში შედის.",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: "Grand Fitness",
    slogan: "Better Than Yesterday",
    url: "https://grandfitness.ge",
    telephone: "+995557192727",
    email: "info@grandfitness.ge",
    priceRange: "25–1320 GEL",
    address: {
      "@type": "PostalAddress",
      streetAddress: "196 Bagrationi St",
      addressLocality: "Batumi",
      postalCode: "6000",
      addressCountry: "GE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "23:59",
    },
    sameAs: ["https://www.instagram.com/grand_fitness_batumi/", "https://www.facebook.com/61585147224532/"],
  },
  hero: {
    title: 'BETTER<br>THAN<span class="block text-gold">YESTERDAY.</span>',
    lead: "გრანდ ფიტნესი — დარბაზი ბათუმში, ბაგრატიონის ქუჩაზე. ღიაა ყოველდღე 08:00-დან 24:00-მდე. საუნა ყველა ფასში შედის.",
    primary: { label: "ნახე ფასები", href: "/#prices" },
    secondary: { label: "როგორ მოგვაგნო", href: "/#contact" },
  },
  prices: {
    title: "ფასები",
    lead: "ნებისმიერი ვარიანტით სარგებლობ მთელი დარბაზითა და საუნით.",
    currency: "₾",
    plans: [
      { name: "ერთჯერადი ვიზიტი", amount: "25" },
      { name: "1 კვირა", amount: "60" },
      { name: "2 კვირა", amount: "90" },
      { name: "1 თვე", amount: "140" },
      { name: "3 თვე", amount: "390" },
      { name: "6 თვე", amount: "700" },
      { name: "1 წელი", amount: "1320" },
    ],
    sauna: {
      title: "საუნა შედის ფასში",
      text: "ყველა ფასში, ერთჯერად ვიზიტშიც. დამატებითი გადასახადის გარეშე.",
    },
    offersTitle: "ფასდაკლებები",
    offers: [
      {
        name: "სამეგობრო",
        amount: "120",
        was: "140",
        text: "იყიდეთ ერთთვიანი აბონემენტი ოთხმა ერთად და თითოეული 120 ლარს გადაიხდის.",
      },
      {
        name: "სტუდენტური",
        amount: "120",
        was: "140",
        text: "ერთთვიანი აბონემენტი სტუდენტებისთვის.",
      },
    ],
    accessItem: {
      title: "საშვი",
      text: "აბონემენტს (ერთჯერადი ვიზიტის გარდა) სჭირდება პირადი საშვი შესასვლელისთვის. ყიდულობ ერთხელ და შენთან რჩება.",
      options: [
        { price: "10 ₾", label: "ბარათი" },
        { price: "20 ₾", label: "სამაჯური" },
        { price: "20 ₾", label: "სტიკერი" },
      ],
    },
    note: "ფასები ლარშია. აბონემენტის შეძენა შესაძლებელია მიღებაზე.",
  },
  coaches: {
    title: "მწვრთნელები",
    lead: "მიღებაზე გეტყვიან, რომელი მწვრთნელი მოერგება შენს მიზანს.",
    items: [
      { image: "coaches/gurgen.jpg", name: "გურგენი", alt: "მწვრთნელი გურგენი" },
      { image: "coaches/mariam.jpg", name: "მარიამი", alt: "მწვრთნელი მარიამი" },
      { image: "coaches/nika.jpg", name: "ნიკა", alt: "მწვრთნელი ნიკა" },
      { image: "coaches/rezo.jpg", name: "რეზო", alt: "მწვრთნელი რეზო" },
      { image: "coaches/joni.jpg", name: "ჯონი", alt: "მწვრთნელი ჯონი" },
      { image: "coaches/salome.jpg", name: "სალომე", alt: "მწვრთნელი სალომე" },
    ],
  },
  space: {
    title: "დარბაზი",
    lead: "ტრენაჟორები, დგარები, თავისუფალი წონები, კარდიო ზონა, გასახდელები და საუნა.",
    photos: [
      { src: "space/training-floor.jpg", caption: "სავარჯიშო დარბაზი", alt: "გრანდ ფიტნესის მთავარი სავარჯიშო დარბაზი" },
      { src: "space/free-weights.jpg", caption: "თავისუფალი წონები", alt: "თავისუფალი წონების ზონა" },
      { src: "space/cardio-zone.jpg", caption: "კარდიო ზონა", alt: "კარდიო ტრენაჟორები" },
      { src: "space/lockers.jpg", caption: "გასახდელები", alt: "გასახდელი" },
      { src: "space/sauna.jpg", caption: "საუნა", alt: "საუნა გრანდ ფიტნესში" },
    ],
  },
  contact: {
    title: "კონტაქტი",
    lead: "შემოგვიარე ნებისმიერ დღეს, დაგვირეკე ან მოგვწერე Instagram-ზე ან Facebook-ზე.",
    items: [
      {
        tag: "მისამართი",
        value: "ბაგრატიონის ქ. 196",
        note: "ბათუმი 6000, საქართველო",
        link: { label: "მარშრუტის ნახვა", href: "https://maps.google.com/?q=Grand+Fitness+196+Bagrationi+St+Batumi" },
      },
      { tag: "სამუშაო საათები", value: "08:00 – 24:00", note: "ყოველდღე, ორშაბათიდან კვირამდე" },
      { tag: "ტელეფონი", value: "+995 557 19 27 27", href: "tel:+995557192727" },
      { tag: "ელ-ფოსტა", value: "info@grandfitness.ge", href: "mailto:info@grandfitness.ge" },
    ],
    socialsTitle: "სოციალური ქსელები",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/grand_fitness_batumi/" },
      { label: "Facebook", href: "https://www.facebook.com/61585147224532/" },
    ],
    image: { src: "space/reception.jpg", alt: "გრანდ ფიტნესის მიღება, ბაგრატიონის ქ. 196, ბათუმი" },
  },
} satisfies Copy;
