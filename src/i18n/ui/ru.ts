import type { UiStrings } from "./en";

const ru = {
  skipToContent: "Перейти к содержанию",
  menu: "Меню",
  closeMenu: "Закрыть меню",
  navLabel: "Основная навигация",
  nav: [
    { href: "/about/", label: "О нас" },
    { href: "/goals/", label: "Цели" },
    { href: "/coaches/", label: "Тренеры" },
    { href: "/classes/", label: "Тренировки" },
    { href: "/pricing/", label: "Цены" },
    { href: "/magazine/", label: "Журнал" },
  ],
  navHome: "Главная",
  navCta: { href: "/contact/", label: "Присоединиться" },
  switchTo: "Русская версия",
  footer: {
    slogan: "Better Than Yesterday",
    about:
      "Премиальный фитнес-клуб Батуми — 9 опытных тренеров, 5 групповых тренировок и сообщество с одной общей целью: становиться лучше каждый день.",
    navTitle: "Навигация",
    nav: [
      { href: "/about/", label: "О нас" },
      { href: "/coaches/", label: "Тренеры" },
      { href: "/classes/", label: "Тренировки" },
      { href: "/pricing/", label: "Цены" },
      { href: "/magazine/", label: "Журнал" },
    ],
    hoursTitle: "Часы работы",
    hours: ["Понедельник – воскресенье", "08:00 – 24:00", "Открыто каждый день"],
    contactTitle: "Контакты",
    address: ["Grand Fitness", "ул. Багратиони, 196", "Батуми 6000, Грузия"],
    copyright: "© 2026 Grand Fitness Батуми. Все права защищены.",
    privacy: "Политика конфиденциальности",
    imprint: "Реквизиты",
  },
  consent: {
    lang: "ru",
    label: "Уведомление о конфиденциальности",
    title: "Твоя приватность — просто и честно.",
    text: "Никаких отслеживающих cookie на этом сайте — только технически необходимое хранилище. Шрифты размещены на наших собственных серверах.",
    ok: "Понятно",
    details: "Подробнее",
  },
} satisfies UiStrings;

export default ru;
