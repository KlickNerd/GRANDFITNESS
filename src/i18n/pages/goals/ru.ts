import type { Copy } from "./types";

const linkLabel = "Подробнее об этой цели →";

export default {
  meta: {
    title: "Твоя цель, наша работа — цели тренировок | Grand Fitness Батуми",
    description:
      "Что бы ни привело тебя в зал — сила, мышцы, похудение, бокс, женский фитнес или просто желание начать, — в Grand Fitness Батуми есть для этого план, тренировки и тренер.",
  },
  hero: {
    image: "about-main.jpg",
    eyebrow: "Что привело тебя сюда?",
    title: 'Твоя цель.<br><span class="text-gold">Наша работа.</span>',
    lead: "Каждый приходит сюда по своей причине — и каждая причина хороша. Выбери свою, и мы покажем, как именно Grand Fitness приведёт тебя к цели.",
  },
  goals: [
    {
      href: "/goals/get-stronger/",
      image: "space/free-weights.jpg",
      alt: "Стань сильнее в Grand Fitness Батуми",
      tag: "Сила",
      title: "Стать сильнее",
      text: "Стойки, штанги и тренеры, которые знают науку силы. Твои веса вот-вот поползут вверх.",
      linkLabel,
    },
    {
      href: "/goals/build-muscle/",
      image: "mag/slow-success.jpg",
      alt: "Набери мышечную массу в Grand Fitness Батуми",
      tag: "Гипертрофия",
      title: "Набрать мышцы",
      text: "Продуманные программы, честная работа и видимый результат — повтор за повтором, неделя за неделей.",
      linkLabel,
    },
    {
      href: "/goals/feel-great/",
      image: "space/cardio-zone.jpg",
      alt: "Снова почувствуй себя отлично в Grand Fitness Батуми",
      tag: "Похудение и форма",
      title: "Снова чувствовать себя отлично",
      text: "Кардио с видом, тренировки под отличную музыку и план, которого наконец получится придерживаться.",
      linkLabel,
    },
    {
      href: "/goals/learn-to-box/",
      image: "classes/boxing.jpg",
      alt: "Научись боксу в Grand Fitness Батуми",
      tag: "Единоборства",
      title: "Научиться боксу",
      text: "Настоящая техника, настоящая сила и лучшая тренировка на выносливость в Батуми — без спаррингов.",
      linkLabel,
    },
    {
      href: "/goals/womens-fitness/",
      image: "classes/pilates.jpg",
      alt: "Женский фитнес в Grand Fitness Батуми",
      tag: "Для женщин",
      title: "Женский фитнес",
      text: "Сила и уверенность на тренировках, созданных специально для женщин, — с тренером Саломе.",
      linkLabel,
    },
    {
      href: "/goals/get-started/",
      image: "space/studio.jpg",
      alt: "Просто начни в Grand Fitness Батуми",
      tag: "Впервые?",
      title: "Просто начни",
      text: "Впервые в зале? Отлично. Без осуждения, без давления — просто приходи: твой тренер уже ждёт.",
      linkLabel,
    },
  ],
  note: 'Не знаешь, что подходит именно тебе? Приходи и разберись вместе с тренером — <a class="font-semibold tracking-[0.04em] text-gold hover:underline" href="/ru/contact/">запишись здесь</a>.',
  cta: {
    eyebrow: "Какой бы ни была твоя цель",
    title: 'Готов к первой<br><span class="text-gold">тренировке?</span>',
    lead: "Приходи, познакомься со своим тренером и сделай первый шаг.",
    buttons: [
      { label: "Запишись на первую тренировку", href: "/contact/" },
      { label: "Познакомься с тренерами", href: "/coaches/", style: "outline" },
    ],
  },
} satisfies Copy;
