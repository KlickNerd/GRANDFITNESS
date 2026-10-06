import type { Copy } from "./types";

const linkLabel = "Explore this goal →";

export default {
  meta: {
    title: "Your Goal, Our Job — Training Goals | Grand Fitness Batumi",
    description:
      "Whatever brings you to the gym — strength, muscle, fat loss, boxing, women's fitness or just getting started — Grand Fitness Batumi has the plan, the classes and the coach for it.",
  },
  hero: {
    image: "about-main.jpg",
    eyebrow: "What brings you here?",
    title: 'Your Goal.<br><span class="text-gold">Our Job.</span>',
    lead: "Everyone walks in here for a different reason — and every reason is a good one. Pick yours, and we'll show you exactly how Grand Fitness gets you there.",
  },
  goals: [
    {
      href: "/goals/get-stronger/",
      image: "space/free-weights.jpg",
      alt: "Get Stronger at Grand Fitness Batumi",
      tag: "Strength",
      title: "Get Stronger",
      text: "Racks, barbells, and coaches who know the science of strength. Your numbers are about to go up.",
      linkLabel,
    },
    {
      href: "/goals/build-muscle/",
      image: "mag/slow-success.jpg",
      alt: "Build Muscle at Grand Fitness Batumi",
      tag: "Hypertrophy",
      title: "Build Muscle",
      text: "Structured programs, honest work, and visible results — built rep by rep, week by week.",
      linkLabel,
    },
    {
      href: "/goals/feel-great/",
      image: "space/cardio-zone.jpg",
      alt: "Feel Great Again at Grand Fitness Batumi",
      tag: "Fat Loss & Fitness",
      title: "Feel Great Again",
      text: "Cardio with a view, classes with great music, and a plan that finally sticks.",
      linkLabel,
    },
    {
      href: "/goals/learn-to-box/",
      image: "classes/boxing.jpg",
      alt: "Learn to Box at Grand Fitness Batumi",
      tag: "Combat Sports",
      title: "Learn to Box",
      text: "Real technique, real power, and the best conditioning workout in Batumi — no sparring required.",
      linkLabel,
    },
    {
      href: "/goals/womens-fitness/",
      image: "classes/pilates.jpg",
      alt: "Women's Fitness at Grand Fitness Batumi",
      tag: "For Women",
      title: "Women's Fitness",
      text: "Strength and confidence in sessions built around women, for women — led by Coach Salome.",
      linkLabel,
    },
    {
      href: "/goals/get-started/",
      image: "space/studio.jpg",
      alt: "Just Get Started at Grand Fitness Batumi",
      tag: "First Time?",
      title: "Just Get Started",
      text: "New to the gym? Perfect. No judgment, no pressure — just walk in — your coach is waiting.",
      linkLabel,
    },
  ],
  note: 'Not sure which one fits? Come by and figure it out together with a coach — <a class="font-semibold tracking-[0.04em] text-gold hover:underline" href="/contact/">book it here</a>.',
  cta: {
    eyebrow: "Whatever your goal",
    title: 'Ready for your<br>first <span class="text-gold">session?</span>',
    lead: "Walk in, meet your coach, and take the first step — on us.",
    buttons: [
      { label: "Book Your First Session", href: "/contact/" },
      { label: "Meet the Coaches", href: "/coaches/", style: "outline" },
    ],
  },
} satisfies Copy;
