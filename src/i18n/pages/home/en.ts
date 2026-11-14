import type { Copy } from "./types";

export default {
  meta: {
    title: "Gym in Batumi | Grand Fitness — Better Than Yesterday",
    description:
      "Grand Fitness, 196 Bagrationi St, Batumi. Open daily 08:00–24:00. Single visit 25 GEL, monthly 140 GEL — sauna included in every price.",
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
    lead: "Grand Fitness is a gym on Bagrationi Street in Batumi, open every day from 08:00 to 24:00. The sauna is included in every price.",
    primary: { label: "See prices", href: "/#prices" },
    secondary: { label: "Find us", href: "/#contact" },
  },
  prices: {
    title: "Prices",
    lead: "Every option gives you the whole gym and the sauna.",
    currency: "₾",
    plans: [
      { name: "Single visit", amount: "25" },
      { name: "1 week", amount: "60" },
      { name: "2 weeks", amount: "90" },
      { name: "1 month", amount: "140" },
      { name: "3 months", amount: "390" },
      { name: "6 months", amount: "700" },
      { name: "1 year", amount: "1320" },
    ],
    sauna: {
      title: "Sauna included",
      text: "In every price, the single visit too. No extra charge.",
    },
    offersTitle: "Discounts",
    offers: [
      {
        name: "Friends",
        amount: "120",
        was: "140",
        text: "Buy a month together as a group of four and each of you pays 120 GEL.",
      },
      {
        name: "Students",
        amount: "120",
        was: "140",
        text: "A one-month membership for students.",
      },
    ],
    accessItem: {
      title: "Access item",
      text: "Memberships (all except the single visit) need a personal access item for the entrance. You buy it once and keep it.",
      options: [
        { price: "10 ₾", label: "Card" },
        { price: "20 ₾", label: "Wristband" },
        { price: "20 ₾", label: "Sticker" },
      ],
    },
    note: "Prices in Georgian lari. Memberships are sold at reception.",
  },
  coaches: {
    title: "Coaches",
    lead: "Ask at reception which coach suits your goal.",
    items: [
      { image: "coaches/gurgen.jpg", name: "Gurgen", alt: "Coach Gurgen" },
      { image: "coaches/mariam.jpg", name: "Mariam", alt: "Coach Mariam" },
      { image: "coaches/nika.jpg", name: "Nika", alt: "Coach Nika" },
      { image: "coaches/rezo.jpg", name: "Rezo", alt: "Coach Rezo" },
      { image: "coaches/joni.jpg", name: "Joni", alt: "Coach Joni" },
      { image: "coaches/salome.jpg", name: "Salome", alt: "Coach Salome" },
    ],
  },
  space: {
    title: "The gym",
    lead: "Machines, racks, free weights, a cardio zone, locker rooms and a sauna.",
    photos: [
      { src: "space/training-floor.jpg", caption: "Training floor", alt: "The main training floor at Grand Fitness" },
      { src: "space/free-weights.jpg", caption: "Free weights", alt: "Free weights area" },
      { src: "space/cardio-zone.jpg", caption: "Cardio zone", alt: "Cardio machines" },
      { src: "space/lockers.jpg", caption: "Locker rooms", alt: "Locker room" },
      { src: "space/sauna.jpg", caption: "Sauna", alt: "The sauna at Grand Fitness" },
    ],
  },
  contact: {
    title: "Contact",
    lead: "Come by any day, call us, or message us on Instagram or Facebook.",
    items: [
      {
        tag: "Address",
        value: "196 Bagrationi St",
        note: "Batumi 6000, Georgia",
        link: { label: "Get directions", href: "https://maps.google.com/?q=Grand+Fitness+196+Bagrationi+St+Batumi" },
      },
      { tag: "Opening hours", value: "08:00 – 24:00", note: "Every day, Monday to Sunday" },
      { tag: "Phone", value: "+995 557 19 27 27", href: "tel:+995557192727" },
      { tag: "Email", value: "info@grandfitness.ge", href: "mailto:info@grandfitness.ge" },
    ],
    socialsTitle: "Social media",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/grand_fitness_batumi/" },
      { label: "Facebook", href: "https://www.facebook.com/61585147224532/" },
    ],
    image: { src: "space/reception.jpg", alt: "Grand Fitness reception, 196 Bagrationi St, Batumi" },
  },
} satisfies Copy;
