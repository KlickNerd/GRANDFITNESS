import type { UiStrings } from "./en";

const ru = {
  skipToContent: "Перейти к содержанию",
  menu: "Меню",
  closeMenu: "Закрыть меню",
  navLabel: "Основная навигация",
  nav: [
    { href: "/#prices", label: "Цены" },
    { href: "/#coaches", label: "Тренеры" },
    { href: "/#gym", label: "Зал" },
    { href: "/#faq", label: "Вопросы" },
    { href: "/#contact", label: "Контакты" },
  ],
  navHome: "Главная",
  navCta: { href: "tel:+995557192727", label: "Позвонить" },
  switchTo: "Русская версия",
  footer: {
    slogan: "Better Than Yesterday",
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
