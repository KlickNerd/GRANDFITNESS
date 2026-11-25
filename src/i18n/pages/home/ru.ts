import type { Copy } from "./types";

export default {
  meta: {
    title: "Тренажёрный зал в Батуми с сауной | Grand Fitness",
    description:
      "Grand Fitness — тренажёрный зал в Батуми, ул. Багратиони, 196и. Ежедневно 08:00–24:00. Разовое посещение 25 лари, месяц 140, студентам 120. Сауна включена.",
  },
  hero: {
    heading: "Тренажёрный зал и сауна в Батуми",
    slogan: "BETTER<br>THAN<br>YESTERDAY",
  },
  facts: {
    items: [
      { tag: "Часы работы", value: "08:00 – 24:00", note: "Ежедневно" },
      { tag: "Адрес", value: "Багратиони,\u00a0196и", note: "Батуми. Построить маршрут", href: "https://www.google.com/maps/dir/?api=1&destination=Grand+Fitness+196i+Bagrationi+St+Batumi" },
      { tag: "Разовое посещение", value: "25 ₾", note: "Смотреть все цены", href: "/#prices" },
      { tag: "Телефон", value: "+995 557 19 27 27", note: "Позвонить", href: "tel:+995557192727" },
    ],
    status: { open: "Сейчас открыто, до 24:00", closed: "Сейчас закрыто, откроемся в 08:00" },
  },
  prices: {
    title: "Цены",
    currency: "₾",
    plans: [
      { name: "Разовое посещение", amount: "25" },
      { name: "1 неделя", amount: "60" },
      { name: "2 недели", amount: "90" },
      { name: "1 месяц", amount: "140" },
      { name: "3 месяца", amount: "390", note: "130\u00a0₾ в месяц" },
      { name: "6 месяцев", amount: "700", note: "около 117\u00a0₾ в месяц" },
      { name: "1 год", amount: "1320", note: "110\u00a0₾ в месяц" },
    ],
    sauna: {
      title: "Сауна включена",
      text: "В любой абонемент и в разовое посещение. Без доплаты.",
    },
    offersTitle: "Скидки",
    offers: [
      {
        name: "Для друзей",
        amount: "120",
        was: "140",
        text: "Купите абонементы на месяц вчетвером, и каждый заплатит 120 лари.",
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
      text: "К любому абонементу нужен личный пропуск для входа (для разового посещения он не требуется). Вы покупаете его один раз, и он остаётся у вас.",
      options: [
        { price: "10 ₾", label: "Карта" },
        { price: "20 ₾", label: "Браслет" },
        { price: "20 ₾", label: "Стикер" },
      ],
    },
  },
  coaches: {
    title: "Тренеры",
    items: [
      { image: "coaches/gurgen.jpg", name: "Гурген", alt: "Тренер Гурген" },
      { image: "coaches/salome.jpg", name: "Саломе", alt: "Тренер Саломе" },
      { image: "coaches/mariam.jpg", name: "Мариам", alt: "Тренер Мариам" },
      { image: "coaches/nika.jpg", name: "Ника", alt: "Тренер Ника" },
      { image: "coaches/rezo.jpg", name: "Резо", alt: "Тренер Резо" },
      { image: "coaches/joni.jpg", name: "Джони", alt: "Тренер Джони" },
    ],
  },
  space: {
    title: "Зал",
    close: "Закрыть фото",
    photos: [
      { src: "space/training-floor.jpg", caption: "Простор для тренировок", alt: "Тренажёрный зал Grand Fitness в Батуми" },
      { src: "space/sauna.jpg", caption: "Сауна", alt: "Сауна в Grand Fitness" },
      { src: "space/floor-corridor.jpg", caption: "Создано для силы", alt: "Силовые тренажёры в зале" },
      { src: "space/free-weights.jpg", caption: "Выберите свой вес", alt: "Зона свободных весов" },
      { src: "space/cardio-zone.jpg", caption: "Найдите свой темп", alt: "Кардиотренажёры" },
      { src: "space/lockers.jpg", caption: "Шкафчик для ваших вещей", alt: "Раздевалка" },
    ],
  },
  faq: {
    title: "Вопросы",
    items: [
      {
        q: "Можно ли прийти всего на один день?",
        a: "Да, можно. Разовое посещение стоит 25 лари, сауна включена. Абонемент для этого не нужен.",
      },
      {
        q: "Сколько стоит абонемент на месяц?",
        a: "Абонемент на месяц стоит 140 лари. Абонементы на более длительный срок: 3 месяца — 390 лари, 6 месяцев — 700 лари, 1 год — 1320 лари.",
      },
      {
        q: "Входит ли сауна в стоимость?",
        a: "Да, сауна входит в стоимость любого абонемента и разового посещения.",
      },
      {
        q: "Есть ли скидка для студентов?",
        a: "Да. Для студентов абонемент на месяц стоит 120 лари вместо 140.",
      },
      {
        q: "Есть ли скидка для друзей?",
        a: "Да. Если абонементы на месяц покупают вместе четыре человека, каждый платит 120 лари вместо 140.",
      },
      {
        q: "Что нужно для входа?",
        a: "К любому абонементу нужен личный пропуск, который покупается один раз: карта за 10 лари, браслет или стикер за 20 лари. Для разового посещения пропуск не требуется.",
      },
      {
        q: "Когда работает зал?",
        a: "Зал работает ежедневно, с понедельника по воскресенье, с 08:00 до 24:00.",
      },
      {
        q: "Где находится Grand Fitness?",
        a: "Наш адрес: Батуми, ул. Багратиони, 196и. Звоните по телефону +995 557 19 27 27 или пишите нам в Instagram.",
      },
    ],
  },
  contact: {
    title: "Свяжитесь с нами",
    items: [
      {
        tag: "Адрес",
        value: "ул. Багратиони, 196и",
        note: "Батуми 6000, Грузия",
        link: { label: "Построить маршрут", href: "https://www.google.com/maps/dir/?api=1&destination=Grand+Fitness+196i+Bagrationi+St+Batumi" },
      },
      { tag: "Часы работы", value: "08:00 – 24:00", note: "Ежедневно" },
      { tag: "Телефон", value: "+995 557 19 27 27", href: "tel:+995557192727" },
      { tag: "Эл. почта", value: "info@grandfitness.ge", href: "mailto:info@grandfitness.ge" },
    ],
    socialsTitle: "Социальные сети",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/grand_fitness_batumi/" },
      { label: "Facebook", href: "https://www.facebook.com/61585147224532/" },
    ],
    image: { src: "hero-bg.jpg", alt: "Ресепшен Grand Fitness, ул. Багратиони, 196и, Батуми" },
  },
} satisfies Copy;
