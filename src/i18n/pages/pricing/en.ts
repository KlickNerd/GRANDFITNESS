import type { Copy } from "./types";

const features = ["Full gym access", "All group classes included", "Locker room &amp; sauna", "08:00 – 24:00 daily"];

export default {
  meta: {
    title: "Gym Membership Prices in Batumi | Grand Fitness",
    description:
      "Transparent gym pricing in GEL: single visit 25 GEL, monthly 140 GEL, annual 1320 GEL. All group classes and sauna included in every plan.",
  },
  hero: {
    image: "about-accent.jpg",
    eyebrow: "Grand Fitness · Memberships &amp; Pricing",
    title: 'Invest in<br><span class="text-gold">Yourself.</span>',
    lead: "No hidden fees, no fine print. Just straightforward pricing for world-class training.",
  },
  banner: {
    title: "1 MONTH MEMBERSHIP",
    details: "Full access · All classes · Sauna · 08:00 – 24:00",
    amount: "140 GEL",
    cta: { label: "Join Now", href: "/contact/" },
  },
  plansHead: { eyebrow: "Membership Plans", title: "Choose your<br>commitment." },
  plans: [
    {
      code: "1x",
      name: "No Commitment · Single Visit",
      amount: "25",
      currency: "GEL",
      perDay: "Pay once, train once — no strings attached",
      features,
      cta: { label: "Walk In", href: "/contact/", style: "outline" },
    },
    {
      code: "1W",
      name: "1 Week",
      amount: "60",
      currency: "GEL",
      perDay: "&asymp; <strong>8.6 GEL</strong> per day",
      features,
      cta: { label: "Get Started", href: "/contact/", style: "outline" },
    },
    {
      code: "2W",
      name: "2 Weeks · Trial",
      amount: "90",
      currency: "GEL",
      perDay: "&asymp; <strong>6.4 GEL</strong> per day",
      features,
      cta: { label: "Get Started", href: "/contact/", style: "outline" },
    },
    {
      code: "1M",
      name: "1 Month · Monthly",
      amount: "140",
      currency: "GEL",
      perDay: "&asymp; <strong>4.7 GEL</strong> per day",
      features,
      cta: { label: "Get Started", href: "/contact/", style: "outline" },
    },
    {
      code: "3M",
      name: "3 Months · Quarterly",
      amount: "390",
      currency: "GEL",
      perDay: "&asymp; <strong>4.3 GEL</strong> per day · save 30 GEL vs monthly",
      features: [...features, "Priority class booking"],
      badge: "Most Popular",
      featured: true,
      cta: { label: "Get Started", href: "/contact/", style: "outline" },
    },
    {
      code: "6M",
      name: "6 Months · Half Year",
      amount: "700",
      currency: "GEL",
      perDay: "&asymp; <strong>3.9 GEL</strong> per day · save 140 GEL vs monthly",
      features: [...features, "Priority class booking", "1 personal training session included"],
      cta: { label: "Get Started", href: "/contact/", style: "outline" },
    },
    {
      code: "1Y",
      name: "1 Year · Annual",
      amount: "1320",
      currency: "GEL",
      perDay: "&asymp; <strong>3.6 GEL</strong> per day · save 360 GEL vs monthly",
      features: [
        ...features,
        "Priority class booking",
        "2 personal training sessions included",
        "Fitness assessment included",
      ],
      badge: "Best Value",
      featured: true,
      cta: { label: "Get Started", href: "/contact/", style: "outline" },
    },
  ],
  accessItem: {
    tag: "First purchase · One-time",
    title: "Your access item",
    text: "With your first membership purchase (one week or longer), you'll also pick your personal access item for the entrance — pay once, it's yours to keep. Day passes don't need one.",
    options: [
      { price: "10 GEL", label: "Membership Card" },
      { price: "20 GEL", label: "Wristband" },
      { price: "20 GEL", label: "Sticker" },
    ],
  },
  note: "All prices in GEL. Memberships can be bought at reception — by card or cash.",
  includes: {
    eyebrow: "Every Membership Includes",
    title: "Everything<br>you need.",
    items: [
      {
        image: "space/training-floor.jpg",
        title: "Full Gym Access",
        text: "Every machine, every rack, every piece of equipment — all yours. No restricted zones, no tiers.",
      },
      {
        image: "space/studio.jpg",
        title: "All Group Classes",
        text: "Boxing, CrossFit, Aerobic, Armwrestling, Group Exercise — all included in every plan.",
      },
      {
        image: "space/sauna.jpg",
        title: "Sauna Access",
        text: "Recover the right way. Our sauna is included with every membership — no extra charge.",
      },
      {
        image: "space/reception.jpg",
        title: "08:00 – 24:00",
        text: "Train on your schedule. We're open every single day of the year, from morning to midnight.",
      },
    ],
  },
  faq: {
    eyebrow: "Questions &amp; Answers",
    title: "Good to<br>know.",
    items: [
      {
        q: "What is the access item?",
        a: "Your personal key to the club, needed once with your first membership of one week or longer: choose a membership card (10 GEL), a wristband (20 GEL) or a sticker (20 GEL). It's a one-time purchase — after that, you just scan and train.",
      },
      {
        q: "Can I freeze my membership?",
        a: "Yes — members can freeze their membership for medical reasons or travel. Speak to our team at the reception desk and we'll sort it out.",
      },
      {
        q: "How does the first session work?",
        a: "Simple: book your intro session, come in, train, and decide if Grand Fitness is right for you.",
      },
      {
        q: "Are group classes really included?",
        a: "Yes — all group classes (Boxing, CrossFit, Aerobic, Armwrestling, Group Exercise) are included in every membership at no extra cost.",
      },
      {
        q: "Can I upgrade my plan later?",
        a: "Of course. You can upgrade to a longer plan at any time and we'll adjust the price accordingly. Just come to reception.",
      },
      {
        q: "Do I need to bring my own towel?",
        a: "We recommend bringing your own towel for training. Locker rooms are modern and well-equipped — lockers are available for all members.",
      },
      {
        q: "How do I book personal training?",
        a: "Personal training sessions can be booked directly with any of our coaches or at reception. New members always start with a guided session with a coach.",
      },
    ],
  },
  cta: {
    eyebrow: "No contract. No commitment.",
    title: 'Start<br><span class="text-gold">today.</span>',
    lead: "Come in, meet our coaches, and train with us. No contract, no commitment — just find out what you're capable of.",
    buttons: [
      { label: "Book Your First Session", href: "/contact/" },
      { label: "Meet the Coaches", href: "/coaches/", style: "outline" },
    ],
  },
} satisfies Copy;
