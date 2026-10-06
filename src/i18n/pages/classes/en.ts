import type { Copy } from "./types";

const pillsAll = (minutes: string) => ["All Levels", minutes, "Included in All Plans"];
const link = (slug: string) => ({ label: "Full class page →", href: `/classes/${slug}/` });

export default {
  meta: {
    title: "Boxing, CrossFit & Armwrestling Classes in Batumi | Grand Fitness",
    description:
      "5 group classes included in every membership: Boxing, CrossFit, Aerobic, Armwrestling and Group Exercise. Daily schedule, expert coaches.",
  },
  hero: {
    image: "space/floor-corridor.jpg",
    eyebrow: "Grand Fitness · Group Classes",
    title: 'Find your<br><span class="text-gold">Class.</span>',
    pills: [
      { label: "Combat Sports", href: "#boxing" },
      { label: "Group Training", href: "#group-exercise" },
      { label: "Cardio & Endurance", href: "#aerobic" },
      { label: "Unique to Grand Fitness", href: "#armwrestling" },
      { label: "Functional Fitness", href: "#crossfit" },
    ],
  },
  classes: [
    {
      id: "boxing",
      num: "01",
      category: "Combat Sports",
      title: "Boxing",
      text: "No sparring, no getting hit — just pure technique, power, and full-body conditioning. Our boxing classes are built around movement, combinations, and bag work that'll push you harder than any cardio machine ever could.",
      pills: pillsAll("50 Min"),
      link: link("boxing"),
      coachLabel: "Your Coach",
      coach: { name: "Goga", href: "/coaches/goga/" },
      image: "classes/boxing.jpg",
    },
    {
      id: "group-exercise",
      num: "02",
      category: "Group Training",
      title: "Group Exercise",
      text: "High-energy group sessions that combine strength, cardio, and functional movement — all in one class. No two sessions are the same, which means no two sessions are ever boring. Train with people who make you push harder just by being in the room.",
      pills: pillsAll("45 Min"),
      link: link("group-exercise"),
      coachLabel: "Your Coach",
      coach: { name: "Joni", href: "/coaches/joni/" },
      image: "classes/group.jpg",
    },
    {
      id: "aerobic",
      num: "03",
      category: "Cardio & Endurance",
      title: "Aerobic",
      text: "Classic aerobic training done right — great music, great energy, and a coach who keeps you moving from start to finish. Perfect for building cardiovascular fitness, burning fat, and walking out feeling genuinely great about yourself.",
      pills: pillsAll("45 Min"),
      link: link("aerobic"),
      coachLabel: "Your Coach",
      coach: { name: "Joni", href: "/coaches/joni/" },
      image: "classes/aerobic.jpg",
    },
    {
      id: "armwrestling",
      num: "04",
      category: "Unique to Grand Fitness",
      title: "Arm Wrestling",
      text: "You won't find this anywhere else in Batumi. Armwrestling is a real sport — one that demands grip strength, technique, leverage, and explosive power. Whether you want to compete or just want the strongest handshake in the room, Rezo will get you there.",
      pills: pillsAll("60 Min"),
      link: link("armwrestling"),
      coachLabel: "Your Coach",
      coach: { name: "Rezo", href: "/coaches/rezo/" },
      image: "classes/armwrestling.jpg",
    },
    {
      id: "crossfit",
      num: "05",
      category: "Functional Fitness",
      title: "Cross Fit",
      text: "Constantly varied, high-intensity functional movements. CrossFit is the most comprehensive fitness methodology ever developed — building strength, speed, endurance, coordination and mental toughness simultaneously. The sessions are hard. That's the point.",
      pills: ["Intermediate", "60 Min", "Included in All Plans"],
      link: link("crossfit"),
      coachLabel: "Your Coach",
      coach: { name: "Coaching Team" },
      image: "classes/crossfit.jpg",
    },
  ],
  schedule: {
    eyebrow: "Weekly Schedule",
    title: "When we<br>train.",
    lead: "Example schedule — exact times available at reception. Subject to change.",
    days: [
      {
        day: "Mon",
        slots: [
          { time: "08:00", name: "Aerobic", who: "Joni" },
          { time: "10:00", name: "Boxing", who: "Goga" },
          { time: "20:00", name: "CrossFit", who: "Team" },
        ],
      },
      {
        day: "Tue",
        slots: [
          { time: "09:00", name: "Group Exercise", who: "Joni" },
          { time: "11:00", name: "Armwrestling", who: "Rezo" },
          { time: "19:00", name: "Boxing", who: "Goga" },
        ],
      },
      {
        day: "Wed",
        slots: [
          { time: "08:00", name: "Aerobic", who: "Joni" },
          { time: "18:00", name: "CrossFit", who: "Team" },
          { time: "20:00", name: "Group Exercise", who: "Joni" },
        ],
      },
      {
        day: "Thu",
        slots: [
          { time: "09:00", name: "Boxing", who: "Goga" },
          { time: "11:00", name: "Armwrestling", who: "Rezo" },
        ],
      },
      {
        day: "Fri",
        slots: [
          { time: "08:00", name: "Aerobic", who: "Joni" },
          { time: "10:00", name: "CrossFit", who: "Team" },
          { time: "18:00", name: "Boxing", who: "Goga" },
          { time: "20:00", name: "Group Exercise", who: "Joni" },
        ],
      },
      {
        day: "Sat",
        slots: [
          { time: "10:00", name: "Armwrestling", who: "Rezo" },
          { time: "14:00", name: "CrossFit", who: "Team" },
        ],
      },
      {
        day: "Sun",
        slots: [
          { time: "10:00", name: "Group Exercise", who: "Joni" },
          { time: "12:00", name: "Aerobic", who: "Joni" },
        ],
      },
    ],
    note: "⚡ All classes are included in every membership plan — no extra booking fee.",
  },
  faq: {
    eyebrow: "Questions &amp; Answers",
    title: "Good to<br>know.",
    items: [
      {
        q: "Do I need experience to join a class?",
        a: "Most of our classes are open to all levels — the only exception is CrossFit, which we recommend for people who already have some fitness base. For everything else, show up and your coach will take care of the rest.",
      },
      {
        q: "Are all classes included in my membership?",
        a: "Yes — every single class is included in every membership plan. No extra fees, no class credits, no limitations.",
      },
      {
        q: "Do I need to book in advance?",
        a: "For most classes you can just walk in. We recommend checking in at reception before your first session so your coach knows you're coming.",
      },
      {
        q: "What should I bring?",
        a: "Just yourself, comfortable training clothes, and a water bottle. We recommend bringing your own towel. Lockers are available for all members.",
      },
      {
        q: "Can I do multiple classes in one day?",
        a: "Absolutely — as long as your body is up for it. Some of our members do a strength session in the morning and a group class in the evening. Your coaches can help you plan what makes sense.",
      },
    ],
  },
  cta: {
    eyebrow: "Not sure which class is right for you?",
    title: 'Try any class<br><span class="text-gold">today.</span>',
    lead: "Come in, try it, and decide.",
    buttons: [
      { label: "Book Your First Session", href: "/contact/" },
      { label: "View Memberships", href: "/pricing/", style: "outline" },
    ],
  },
} satisfies Copy;
