import type { Copy } from "./types";

export default {
  meta: {
    title: "Фитнес-клуб в Батуми | Grand Fitness — Better Than Yesterday",
    description:
      "Grand Fitness, ул. Багратиони, 196, Батуми. Открыто каждый день 08:00–24:00. Разовое посещение 25 лари, месяц 140 лари — сауна включена в любую цену.",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: "Grand Fitness",
    slogan: "Better Than Yesterday",
    url: "https://grandfitness.ge",
    telephone: "+995557192727",
    email: "info@grandfitness.ge",
    priceRange: "25–1320 GEL",
    address: {
      "@type": "PostalAddress",
      streetAddress: "196 Bagrationi St",
      addressLocality: "Batumi",
      postalCode: "6000",
      addressCountry: "GE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "23:59",
    },
    sameAs: ["https://www.instagram.com/grand_fitness_batumi/", "https://www.facebook.com/61585147224532/"],
  },
  hero: {
    title: 'BETTER<br>THAN<span class="block text-gold">YESTERDAY.</span>',
    lead: "Grand Fitness — тренажёрный зал на улице Багратиони в Батуми, открыт каждый день с 08:00 до 24:00. Сауна включена в любую цену.",
    primary: { label: "Смотреть цены", href: "/#prices" },
    secondary: { label: "Как нас найти", href: "/#contact" },
  },
  prices: {
    title: "Цены",
    lead: "В любом варианте тебе доступны весь зал и сауна.",
    currency: "₾",
    plans: [
      { name: "Разовое посещение", amount: "25" },
      { name: "1 неделя", amount: "60" },
      { name: "2 недели", amount: "90" },
      { name: "1 месяц", amount: "140" },
      { name: "3 месяца", amount: "390" },
      { name: "6 месяцев", amount: "700" },
      { name: "1 год", amount: "1320" },
    ],
    sauna: {
      title: "Сауна включена",
      text: "В любую цену, и в разовое посещение тоже. Без доплаты.",
    },
    offersTitle: "Скидки",
    offers: [
      {
        name: "Для друзей",
        amount: "120",
        was: "140",
        text: "Купите абонемент на месяц вчетвером, и каждый заплатит 120 лари.",
      },
      {
        name: "Студенческий",
        amount: "120",
        was: "140",
        text: "Абонемент на месяц для студентов.",
      },
    ],
    accessItem: {
      title: "Пропуск",
      text: "Для абонемента (кроме разового посещения) нужен личный пропуск для входа. Покупаешь его один раз, и он остаётся у тебя.",
      options: [
        { price: "10 ₾", label: "Карта" },
        { price: "20 ₾", label: "Браслет" },
        { price: "20 ₾", label: "Стикер" },
      ],
    },
    note: "Цены в грузинских лари. Абонементы продаются на ресепшене.",
  },
  coaches: {
    title: "Тренеры",
    lead: "На ресепшене подскажут, какой тренер подойдёт под твою цель.",
    items: [
      { image: "coaches/gurgen.jpg", name: "Гурген", alt: "Тренер Гурген" },
      { image: "coaches/mariam.jpg", name: "Мариам", alt: "Тренер Мариам" },
      { image: "coaches/nika.jpg", name: "Ника", alt: "Тренер Ника" },
      { image: "coaches/rezo.jpg", name: "Резо", alt: "Тренер Резо" },
      { image: "coaches/joni.jpg", name: "Джони", alt: "Тренер Джони" },
      { image: "coaches/salome.jpg", name: "Саломе", alt: "Тренер Саломе" },
    ],
  },
  space: {
    title: "Зал",
    lead: "Тренажёры, стойки, свободные веса, кардиозона, раздевалки и сауна.",
    photos: [
      { src: "space/training-floor.jpg", caption: "Тренажёрный зал", alt: "Основной тренажёрный зал Grand Fitness" },
      { src: "space/free-weights.jpg", caption: "Свободные веса", alt: "Зона свободных весов" },
      { src: "space/cardio-zone.jpg", caption: "Кардиозона", alt: "Кардиотренажёры" },
      { src: "space/lockers.jpg", caption: "Раздевалки", alt: "Раздевалка" },
      { src: "space/sauna.jpg", caption: "Сауна", alt: "Сауна в Grand Fitness" },
    ],
  },
  contact: {
    title: "Контакты",
    lead: "Заходи в любой день, звони или пиши нам в Instagram или Facebook.",
    items: [
      {
        tag: "Адрес",
        value: "ул. Багратиони, 196",
        note: "Батуми 6000, Грузия",
        link: { label: "Построить маршрут", href: "https://maps.google.com/?q=Grand+Fitness+196+Bagrationi+St+Batumi" },
      },
      { tag: "Часы работы", value: "08:00 – 24:00", note: "Каждый день, с понедельника по воскресенье" },
      { tag: "Телефон", value: "+995 557 19 27 27", href: "tel:+995557192727" },
      { tag: "Email", value: "info@grandfitness.ge", href: "mailto:info@grandfitness.ge" },
    ],
    socialsTitle: "Соцсети",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/grand_fitness_batumi/" },
      { label: "Facebook", href: "https://www.facebook.com/61585147224532/" },
    ],
    image: { src: "space/reception.jpg", alt: "Ресепшен Grand Fitness, ул. Багратиони, 196, Батуми" },
  },
} satisfies Copy;
