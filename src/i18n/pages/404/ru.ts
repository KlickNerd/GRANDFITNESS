import type { Copy } from "./types";

export default {
  meta: {
    title: "Страница не найдена | Grand Fitness",
    description: "Такой страницы нет — а вот путь к твоей лучшей форме есть. Возвращайся в Grand Fitness Батуми.",
  },
  eyebrow: "404 — Страница не найдена",
  title: 'Не туда свернул.<br><span class="text-gold">Но зал — тот самый.</span>',
  lead: "Такой страницы не существует — а вот тренажёрный зал точно есть.",
  buttons: [
    { label: "На главную", href: "/" },
    { label: "Смотреть тренировки", href: "/classes/", style: "outline" },
  ],
} satisfies Copy;
