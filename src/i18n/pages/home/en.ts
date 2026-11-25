import type { Copy } from "./types";

export default {
  meta: {
    title: "Gym in Batumi with Sauna | Grand Fitness",
    description:
      "Grand Fitness is a gym in Batumi at 196i Bagrationi St, open daily 08:00–24:00. Single visit 25 GEL, monthly 140 GEL, students 120 GEL. Sauna included in every price.",
  },
  hero: {
    heading: "Gym and sauna in Batumi",
    slogan: "BETTER<br>THAN<br>YESTERDAY",
  },
  facts: {
    items: [
      { tag: "Opening hours", value: "08:00 – 24:00", note: "Every day" },
      { tag: "Address", value: "196i Bagrationi St", note: "Batumi. Get directions", href: "https://www.google.com/maps/dir/?api=1&destination=Grand+Fitness+196i+Bagrationi+St+Batumi" },
      { tag: "Single visit", value: "25 ₾", note: "See all prices", href: "/#prices" },
      { tag: "Phone", value: "+995 557 19 27 27", note: "Call us", href: "tel:+995557192727" },
    ],
    status: { open: "Open now, until 24:00", closed: "Closed now, opens at 08:00" },
  },
  prices: {
    title: "Prices",
    currency: "₾",
    plans: [
      { name: "Single visit", amount: "25" },
      { name: "1 week", amount: "60" },
      { name: "2 weeks", amount: "90" },
      { name: "1 month", amount: "140" },
      { name: "3 months", amount: "390", note: "130\u00a0₾ a month" },
      { name: "6 months", amount: "700", note: "about 117\u00a0₾ a month" },
      { name: "1 year", amount: "1320", note: "110\u00a0₾ a month" },
    ],
    sauna: {
      title: "Sauna included",
      text: "Included in every price, including the single visit. No extra charge.",
    },
    offersTitle: "Discounts",
    offers: [
      {
        name: "Friends",
        amount: "120",
        was: "140",
        text: "When four people buy a one-month membership together, each pays 120 GEL.",
      },
      {
        name: "Students",
        amount: "120",
        was: "140",
        text: "A one-month membership for students.",
      },
    ],
    accessItem: {
      title: "Entry card or wristband",
      text: "Every membership requires a personal entry card, wristband or sticker to enter the gym. A single visit does not. You buy it once and keep it.",
      options: [
        { price: "10 ₾", label: "Card" },
        { price: "20 ₾", label: "Wristband" },
        { price: "20 ₾", label: "Sticker" },
      ],
    },
  },
  coaches: {
    title: "Coaches",
    items: [
      { image: "coaches/gurgen.jpg", name: "Gurgen", alt: "Coach Gurgen" },
      { image: "coaches/salome.jpg", name: "Salome", alt: "Coach Salome" },
      { image: "coaches/mariam.jpg", name: "Mariam", alt: "Coach Mariam" },
      { image: "coaches/nika.jpg", name: "Nika", alt: "Coach Nika" },
      { image: "coaches/rezo.jpg", name: "Rezo", alt: "Coach Rezo" },
      { image: "coaches/joni.jpg", name: "Joni", alt: "Coach Joni" },
    ],
  },
  space: {
    title: "The gym",
    close: "Close photo",
    photos: [
      { src: "space/training-floor.jpg", caption: "Room to train", alt: "Training floor of the Grand Fitness gym in Batumi" },
      { src: "space/sauna.jpg", caption: "Sauna", alt: "The sauna at Grand Fitness" },
      { src: "space/floor-corridor.jpg", caption: "Built for strength", alt: "Strength machines on the training floor" },
      { src: "space/free-weights.jpg", caption: "Pick your weight", alt: "Free weights area" },
      { src: "space/cardio-zone.jpg", caption: "Find your pace", alt: "Cardio machines" },
      { src: "space/lockers.jpg", caption: "A locker for your things", alt: "Locker room" },
    ],
  },
  faq: {
    title: "Questions",
    items: [
      {
        q: "Can I visit for just one day?",
        a: "Yes. A single visit costs 25 GEL and includes the sauna. No membership is required.",
      },
      {
        q: "How much is a monthly gym membership?",
        a: "One month costs 140 GEL. Longer memberships: 3 months for 390 GEL, 6 months for 700 GEL and 1 year for 1320 GEL.",
      },
      {
        q: "Is the sauna included?",
        a: "Yes. The sauna is included in every price, including the single visit.",
      },
      {
        q: "Is there a student discount?",
        a: "Yes. Students pay 120 GEL for one month instead of 140 GEL.",
      },
      {
        q: "Is there a discount for friends?",
        a: "Yes. When four people buy a one-month membership together, each pays 120 GEL instead of 140 GEL.",
      },
      {
        q: "What do I need to enter the gym?",
        a: "Every membership requires a personal entry card, wristband or sticker, bought once: a card for 10 GEL, or a wristband or sticker for 20 GEL. A single visit does not require one.",
      },
      {
        q: "When is the gym open?",
        a: "The gym is open every day, Monday to Sunday, from 08:00 to 24:00.",
      },
      {
        q: "Where is Grand Fitness?",
        a: "Grand Fitness is at 196i Bagrationi St, Batumi. You can call +995 557 19 27 27 or message us on Instagram.",
      },
    ],
  },
  contact: {
    title: "Contact us",
    items: [
      {
        tag: "Address",
        value: "196i Bagrationi St",
        note: "Batumi 6000, Georgia",
        link: { label: "Get directions", href: "https://www.google.com/maps/dir/?api=1&destination=Grand+Fitness+196i+Bagrationi+St+Batumi" },
      },
      { tag: "Opening hours", value: "08:00 – 24:00", note: "Every day" },
      { tag: "Phone", value: "+995 557 19 27 27", href: "tel:+995557192727" },
      { tag: "Email", value: "info@grandfitness.ge", href: "mailto:info@grandfitness.ge" },
    ],
    socialsTitle: "Social media",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/grand_fitness_batumi/" },
      { label: "Facebook", href: "https://www.facebook.com/61585147224532/" },
    ],
    image: { src: "hero-bg.jpg", alt: "Grand Fitness reception, 196i Bagrationi St, Batumi" },
  },
} satisfies Copy;
