import type { Copy } from "./types";

export default {
  meta: {
    title: "Magazine — Training, Nutrition & Recovery | Grand Fitness Batumi",
    description:
      "The Grand Fitness Magazine: practical articles on training, nutrition and recovery from Batumi's coaching team. New reads to make you better than yesterday.",
  },
  hero: {
    image: "about-main.jpg",
    eyebrow: "Grand Fitness Magazine",
    title: 'Latest<br><span class="text-gold">Reads.</span>',
    lead: "Practical knowledge from our coaching team — training, nutrition, recovery, and everything that makes you better than yesterday.",
  },
  readMore: "Read article →",
  note: 'New articles are published regularly — follow us on <a class="font-semibold tracking-[0.04em] text-gold hover:underline" href="https://www.instagram.com/grand_fitness_batumi/" target="_blank" rel="noopener">Instagram</a> to catch every new read.',
  cta: {
    eyebrow: "Read enough?",
    title: 'Time to<br><span class="text-gold">train.</span>',
    lead: "Knowledge only counts when you use it. Come put it into practice.",
    buttons: [
      { label: "Book Your First Session", href: "/contact/" },
      { label: "View Classes", href: "/classes/", style: "outline" },
    ],
  },

  article: {
    titleSuffix: " | Grand Fitness Magazine",
    allArticles: "← All articles",
    keepReading: { eyebrow: "Keep Reading", title: "More from the<br>magazine." },
    cta: {
      eyebrow: "Put it into practice",
      title: 'Ready for your<br>first <span class="text-gold">session?</span>',
      lead: "Reading builds knowledge. Training builds everything else.",
      buttons: [
        { label: "Book Your First Session", href: "/contact/" },
        { label: "Meet the Coaches", href: "/coaches/", style: "outline" },
      ],
    },
    jsonLd: { author: "Grand Fitness Batumi", publisher: "Grand Fitness", publisherUrl: "https://grandfitness.ge" },
  },
} satisfies Copy;
