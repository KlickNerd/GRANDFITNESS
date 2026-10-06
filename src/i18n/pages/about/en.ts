import type { Copy } from "./types";

export default {
  meta: {
    title: "About Us — Batumi's Most Ambitious Gym | Grand Fitness",
    description:
      "The story behind Grand Fitness: opened 2026 in Batumi with 9 certified coaches, a full boxing ring, sauna and class studio. Built on one principle — better than yesterday.",
  },
  hero: {
    eyebrow: "Grand Fitness · Batumi · 2026",
    title: 'Our<br><span class="text-gold">Story.</span>',
    lead: "We didn't just open a gym. We built a place where Batumi comes to become better — every single day.",
  },
  story: {
    eyebrow: "How It Started",
    title: "Better than<br>yesterday.",
    paragraphs: [
      "Grand Fitness was born from a simple frustration: Batumi didn't have the kind of gym its people deserved. A place with real equipment, real coaches, and a real community — somewhere you'd actually want to come back to, day after day.",
      "So we built it. From the ground up, with one guiding principle at the heart of every decision: how do we help the people walking through these doors become better than they were yesterday? Not just physically — but in discipline, in confidence, in how they carry themselves through life.",
      "We opened in 2026 as Batumi's most ambitious fitness club, and we're just getting started. Our team of 9 certified coaches brings expertise across strength, combat sports, group fitness, mobility, and more — covering every dimension of what it means to be fit.",
    ],
    link: { label: "Meet the team →", href: "/coaches/" },
    image: "gym-interior.jpg",
    imageAlt: "Grand Fitness training floor in Batumi",
  },
  stats: [
    { num: "9", label: "Expert Coaches", sub: "Certified professionals" },
    { num: "5", label: "Group Classes", sub: "Boxing, CrossFit &amp; more" },
    { num: "16h", label: "Open Every Day", sub: "08:00 – 24:00, 365 days" },
    { num: "25₾", label: "Day Pass", sub: "No commitment needed" },
  ],
  space: {
    eyebrow: "The Space",
    title: "Built for<br>performance.",
    photos: [
      { image: "space/training-floor.jpg", alt: "Main training floor" },
      { image: "space/cardio-zone.jpg", alt: "Cardio zone" },
      { image: "space/free-weights.jpg", alt: "Free weights area" },
    ],
    areas: [
      { image: "space/boxing.jpg", tag: "Full-size bag station", title: "Boxing Zone" },
      { image: "space/studio.jpg", tag: "Aerobic & CrossFit", title: "Class Studio" },
      { image: "space/sauna.jpg", tag: "Recovery & relaxation", title: "Sauna" },
      { image: "space/lockers.jpg", tag: "Modern, clean, spacious", title: "Locker Rooms" },
    ],
  },
  values: {
    eyebrow: "What We Stand For",
    title: "Our values.",
    items: [
      {
        title: "Progress over Perfection",
        text: "We don't expect perfection — we expect effort. Every session you show up is a win, and every rep gets you closer to the person you're becoming. Progress is the only metric that matters here.",
      },
      {
        title: "Community is Everything",
        text: "The people around you in the gym make all the difference. We've built a culture where everyone belongs — from day-one beginners to competitive athletes. Ego stays at the door.",
      },
      {
        title: "Expertise You Can Trust",
        text: "Every coach on our team is certified, experienced, and genuinely invested in your results. We don't just watch you train — we train with you, guide you, and hold you accountable.",
      },
      {
        title: "Energy That's Contagious",
        text: "Walk into Grand Fitness and you feel it immediately. The music, the movement, the people — there's an energy here that makes it easier to push harder than you would alone.",
      },
      {
        title: "Science-Backed Training",
        text: "Our programs aren't based on trends or guesswork. Everything we teach is grounded in exercise science — progressive overload, recovery, nutrition, mobility. Real methods, real results.",
      },
      {
        title: "Proudly from Batumi",
        text: "This city deserves world-class fitness. We're not copying a formula from somewhere else — we're building something new, something that belongs here, and something this city can be proud of.",
      },
    ],
  },
  team: {
    eyebrow: "The People Behind It",
    title: "9 coaches.<br>One mission.",
    link: { label: "View all coach profiles →", href: "/coaches/" },
    image: "space/floor-wide.jpg",
    imageAlt: "The Grand Fitness training floor",
  },
  cta: {
    eyebrow: "Come see it for yourself",
    title: 'Ready for your<br>first <span class="text-gold">session?</span>',
    lead: "No contract, no commitment. Just come in, train with our coaches, and decide for yourself.",
    buttons: [
      { label: "Book Your First Session", href: "/contact/" },
      { label: "View Memberships", href: "/pricing/", style: "outline" },
    ],
  },
} satisfies Copy;
