import type { Copy } from "./types";

export default {
  meta: {
    title: "Страница не найдена | Grand Fitness",
    description: "Такой страницы не существует. Вернитесь на главную страницу Grand Fitness Батуми.",
  },
  eyebrow: "404 — Страница не найдена",
  title: 'Не туда свернули.<br><span class="text-gold">Но зал — тот самый.</span>',
  lead: "Такой страницы не существует. Пожалуйста, вернитесь на главную или посмотрите наши цены.",
  buttons: [
    { label: "На главную", href: "/" },
    { label: "Смотреть цены", href: "/#prices", style: "outline" },
  ],
} satisfies Copy;
