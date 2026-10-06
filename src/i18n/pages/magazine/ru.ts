import type { Copy } from "./types";

export default {
  meta: {
    title: "Журнал — тренировки, питание и восстановление | Grand Fitness Батуми",
    description:
      "Журнал Grand Fitness: практичные статьи о тренировках, питании и восстановлении от команды тренеров из Батуми. Новые статьи, чтобы ты становился лучше, чем вчера.",
  },
  hero: {
    image: "about-main.jpg",
    eyebrow: "Журнал Grand Fitness",
    title: 'Свежие<br><span class="text-gold">статьи.</span>',
    lead: "Практические знания от нашей команды тренеров — тренировки, питание, восстановление и всё, что делает тебя лучше, чем вчера.",
  },
  readMore: "Читать статью →",
  note: 'Новые статьи выходят регулярно — подписывайся на нас в <a class="font-semibold tracking-[0.04em] text-gold hover:underline" href="https://www.instagram.com/grand_fitness_batumi/" target="_blank" rel="noopener">Instagram</a>, чтобы не пропустить ни одной.',
  cta: {
    eyebrow: "Начитался?",
    title: 'Пора<br><span class="text-gold">тренироваться.</span>',
    lead: "Знания имеют значение, только когда ты их применяешь. Приходи и попробуй на практике.",
    buttons: [
      { label: "Запишись на первую тренировку", href: "/contact/" },
      { label: "Смотреть тренировки", href: "/classes/", style: "outline" },
    ],
  },

  article: {
    titleSuffix: " | Журнал Grand Fitness",
    allArticles: "← Все статьи",
    keepReading: { eyebrow: "Читай дальше", title: "Ещё из<br>журнала." },
    cta: {
      eyebrow: "Примени на практике",
      title: 'Готов к первой<br><span class="text-gold">тренировке?</span>',
      lead: "Чтение даёт знания. Тренировки дают всё остальное.",
      buttons: [
        { label: "Запишись на первую тренировку", href: "/contact/" },
        { label: "Познакомься с тренерами", href: "/coaches/", style: "outline" },
      ],
    },
    jsonLd: { author: "Grand Fitness Batumi", publisher: "Grand Fitness", publisherUrl: "https://grandfitness.ge" },
  },
} satisfies Copy;
