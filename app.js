(function(){
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BRAND = {
  name: 'Jumping.Ge',
  tagline: 'The power of official jumping',
  instagram: 'https://www.instagram.com/jumping_ge/',
  instagramHandle: '@jumping_ge',
  rating: '5,0',
  ratingCount: 308,
  phone: null
};
const CITIES = {
  batumi: {
    id: 'batumi',
    name: 'Батуми',
    address: 'ул. Горгиладзе, 91, 4 этаж',
    map: 'https://www.google.com/maps/search/?api=1&query=Gorgiladze+St+91,+Batumi',
    route: ['Вход со двора: сверните между кофейней и шаурмой', 'Пройдите через большую парковку налево', 'Неприметный подъезд — поднимитесь на 4 этаж', 'Единственная дверь слева, с вывеской Jumping.Ge'],
    landmark: 'Рядом с Batumi Mall, 3 минуты пешком'
  },
  tbilisi: {
    id: 'tbilisi',
    name: 'Тбилиси',
    address: 'ул. Гурама Панджикидзе, 22, 2 этаж',
    map: 'https://www.google.com/maps/search/?api=1&query=Guram+Panjikidze+St+22,+Tbilisi',
    route: ['Дом GREEN Budapest, ориентир — магазин Nikora', 'Подъезд C со двора', 'Поднимитесь на 2 этаж', 'Дверь слева с табличкой Aero.GE'],
    landmark: 'Дом GREEN Budapest'
  }
};
const DIRECTIONS = [{
  id: 'jumping',
  name: 'Jumping Fitness',
  short: 'Джампинг',
  icon: 'Zap',
  tone: 'grad',
  main: true,
  lead: 'Тренировка на профессиональных мини-батутах под музыку.',
  text: 'Разминка, разогрев, интенсив, силовая часть full body и растяжка. Перед занятием — инструктаж по технике и безопасности. Укрепляет ноги, пресс и спину, тренирует выносливость. Батут смягчает ударную нагрузку по сравнению с бегом по асфальту.',
  forWho: ['Подготовка не нужна', 'Нагрузка под твой уровень', 'Тренер следит за техникой'],
  bring: 'Чистые кроссовки и удобная форма',
  trainers: ['yana', 'anna', 'lena']
}, {
  id: 'strength',
  name: 'Силовые / Full body',
  short: 'Силовые',
  icon: 'Dumbbell',
  tone: 'violet',
  lead: 'Ягодицы, ноги, спина, руки и пресс.',
  text: 'Неважно, начинаешь ты или возвращаешься после перерыва: тренер подберёт нагрузку и покажет технику. Для новых клиентов — 3 тренировки за 30 GEL.',
  forWho: ['Для новичков и возвращающихся', 'Работа со всем телом', '3 тренировки за 30 GEL для новых'],
  bring: 'Кроссовки и форма',
  trainers: ['tamila', 'yana']
}, {
  id: 'zumba',
  name: 'Zumba',
  short: 'Zumba',
  icon: 'Music',
  tone: 'fuchsia',
  lead: 'Танцевальная тренировка под громкую музыку.',
  text: 'Тело работает, голова отдыхает. Уметь танцевать не нужно, есть и афро-стиль.',
  forWho: ['Уметь танцевать не нужно', 'Снимает стресс', 'Весёлая компания'],
  bring: 'Кроссовки и форма',
  trainers: ['aleksey', 'kristina']
}, {
  id: 'dancehall',
  name: 'Female Dancehall',
  short: 'Dancehall',
  icon: 'Sparkles',
  tone: 'teal',
  badge: 'Набор',
  lead: 'Пластика, координация и уверенность в себе.',
  text: 'Акцент на движения бёдрами и корпусом. Уметь танцевать не нужно — достаточно желания пробовать новое.',
  forWho: ['Новая группа — идёт набор', 'Без танцевального опыта', 'Про уверенность в себе'],
  bring: 'Удобная одежда и обувь',
  trainers: []
}, {
  id: 'glutes',
  name: '«Здоровые ягодицы»',
  short: 'Ягодицы',
  icon: 'HeartPulse',
  tone: 'violet',
  sub: 'по технике Романова',
  lead: 'Авторская программа Яны Бутенко.',
  text: null,
  forWho: [],
  bring: null,
  trainers: ['yana']
}, {
  id: 'slide',
  name: 'Slide fitness',
  short: 'Slide',
  icon: 'MoveHorizontal',
  tone: 'fuchsia',
  lead: 'Тренировка на слайд-доске.',
  text: null,
  forWho: [],
  bring: null,
  trainers: ['yana']
}, {
  id: 'pilates',
  name: 'Pilates + Stretching + Mobility',
  short: 'Пилатес',
  icon: 'Flower2',
  tone: 'teal',
  lead: 'Пилатес, растяжка и мобильность.',
  text: null,
  forWho: [],
  bring: null,
  trainers: ['tamila']
}, {
  id: 'personal',
  name: 'Индивидуальная тренировка',
  short: 'Персонально',
  icon: 'UserRound',
  tone: 'plum',
  wide: true,
  lead: '1 час один на один с тренером.',
  text: 'В Батуми или Тбилиси. Программа под твою цель и уровень.',
  forWho: ['Батуми и Тбилиси', '1 час', 'от 50 GEL'],
  bring: 'Кроссовки и форма',
  trainers: [],
  price: 'от 50 GEL'
}];
const TRAINERS = [{
  id: 'yana',
  name: 'Яна Бутенко',
  role: 'Основатель студий',
  dirs: 'Jumping, Slide, силовые, «Здоровые ягодицы», full body, cross training',
  rating: '5,0',
  votes: 31,
  note: 'Обучает тренеров джампинга'
}, {
  id: 'anna',
  name: 'Анна Горелова',
  role: 'Тренер',
  dirs: 'Jumping',
  rating: '5,0',
  votes: 25
}, {
  id: 'kristina',
  name: 'Кристина Петрицкая',
  role: 'Инструктор Zumba',
  dirs: 'Zumba',
  rating: '5,0',
  votes: 10
}, {
  id: 'lena',
  name: 'Елена Шолохова',
  role: 'Тренер',
  dirs: 'Jumping, Kangoo',
  rating: '5,0',
  votes: 3
}, {
  id: 'tamila',
  name: 'Тамила',
  role: 'Тренер',
  dirs: 'Full body, силовые, Pilates + Stretching + Mobility'
}, {
  id: 'aleksey',
  name: 'Алексей',
  role: 'Новый тренер',
  dirs: 'Zumba'
}];
const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const DAYS_FULL = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const SCHEDULE = {
  batumi: [{
    d: 0,
    t: '09:00',
    dir: 'strength',
    tr: 'tamila'
  }, {
    d: 0,
    t: '10:00',
    dir: 'jumping',
    tr: 'yana'
  }, {
    d: 0,
    t: '11:00',
    dir: 'glutes',
    tr: 'yana'
  }, {
    d: 0,
    t: '14:30',
    dir: 'jumping',
    tr: 'anna'
  }, {
    d: 0,
    t: '20:00',
    dir: 'jumping',
    tr: 'yana'
  }, {
    d: 1,
    t: '09:00',
    dir: 'jumping',
    tr: 'yana'
  }, {
    d: 1,
    t: '11:00',
    dir: 'zumba',
    tr: 'aleksey'
  }, {
    d: 1,
    t: '15:00',
    dir: 'pilates',
    tr: 'tamila'
  }, {
    d: 1,
    t: '21:00',
    dir: 'glutes',
    tr: 'yana'
  }, {
    d: 1,
    t: '21:00',
    dir: 'dancehall',
    tr: null,
    note: 'набор'
  }, {
    d: 2,
    t: '09:00',
    dir: 'slide',
    tr: 'yana'
  }, {
    d: 2,
    t: '10:00',
    dir: 'jumping',
    tr: 'yana'
  }, {
    d: 2,
    t: '11:00',
    dir: 'slide',
    tr: 'yana'
  }, {
    d: 2,
    t: '14:30',
    dir: 'jumping',
    tr: 'anna'
  }, {
    d: 2,
    t: '20:00',
    dir: 'jumping',
    tr: 'lena'
  }, {
    d: 3,
    t: '09:00',
    dir: 'jumping',
    tr: 'yana'
  }, {
    d: 3,
    t: '11:00',
    dir: 'zumba',
    tr: 'aleksey'
  }, {
    d: 3,
    t: '15:00',
    dir: 'pilates',
    tr: 'tamila'
  }, {
    d: 3,
    t: '21:00',
    dir: 'strength',
    tr: 'yana'
  }, {
    d: 3,
    t: '21:00',
    dir: 'dancehall',
    tr: null,
    note: 'набор'
  }, {
    d: 4,
    t: '09:00',
    dir: 'strength',
    tr: 'tamila'
  }, {
    d: 4,
    t: '10:00',
    dir: 'jumping',
    tr: 'yana'
  }, {
    d: 4,
    t: '11:00',
    dir: 'strength',
    tr: 'yana',
    note: 'спина / руки'
  }, {
    d: 4,
    t: '14:30',
    dir: 'jumping',
    tr: 'anna'
  }, {
    d: 4,
    t: '20:00',
    dir: 'jumping',
    tr: 'lena'
  }, {
    d: 5,
    t: '10:00',
    dir: 'jumping',
    tr: 'yana',
    note: '1,5 часа'
  }, {
    d: 6,
    t: '12:00',
    dir: 'jumping',
    tr: 'lena'
  }],
  tbilisi: []
};
const PRICES = [{
  id: 'trial',
  name: 'Пробная',
  price: '10',
  unit: 'тренировка',
  desc: 'Первое знакомство со студией и тренером',
  accent: true,
  cta: 'Записаться на пробную'
}, {
  id: 'single',
  name: 'Разовая',
  price: '35',
  unit: 'тренировка',
  desc: 'Когда хочется прийти без абонемента'
}, {
  id: 'pack8',
  name: '8 занятий',
  price: '200',
  unit: 'в месяц',
  desc: '7 дней бесплатной заморозки',
  popular: true
}, {
  id: 'pack12',
  name: '12 занятий',
  price: '260',
  unit: 'в месяц',
  desc: '7 дней бесплатной заморозки'
}, {
  id: 'unlim',
  name: 'Безлимит',
  price: '300',
  unit: 'в месяц',
  desc: 'Все направления: джампинг, силовые, Zumba и другие',
  dark: true
}];
const PRICES_EXTRA = [{
  name: 'Абонемент 4 занятия',
  price: '110',
  todo: true
}, {
  name: 'Силовые для новых клиентов',
  price: '3 тренировки за 30'
}, {
  name: 'Индивидуальная тренировка, 1 ч',
  price: 'от 50'
}, {
  name: 'Детская разовая (до 11 лет)',
  price: '20',
  todo: true
}, {
  name: 'Аренда зала 90 м²',
  price: 'от 30 / час'
}, {
  name: 'Доп. неделя заморозки',
  price: '10'
}];
const DISCOUNTS = [{
  t: 'Семейная',
  v: '−10%'
}, {
  t: 'Ранняя покупка',
  v: '−5%'
}, {
  t: 'В день рождения',
  v: '−10%'
}, {
  t: 'Приведи подругу',
  v: '+1 тренировка'
}];
const ADVANTAGES = [{
  icon: 'BadgeCheck',
  title: 'Официальная студия Jumping Fitness',
  text: 'Методика и оборудование бренда',
  todo: true
}, {
  icon: 'ShieldCheck',
  title: 'Техника прежде всего',
  text: 'Инструктаж перед каждой тренировкой'
}, {
  icon: 'Sprout',
  title: 'Можно с нуля',
  text: 'Нагрузку подбираем под твой уровень'
}, {
  icon: 'MapPinned',
  title: 'Два города — один абонемент',
  text: 'Тренируйся в Батуми и Тбилиси'
}, {
  icon: 'Infinity',
  title: 'Всё в одном безлимите',
  text: 'Джампинг, силовые, Zumba и другие направления — 300 GEL в месяц'
}, {
  icon: 'PartyPopper',
  title: 'Команда и события',
  text: 'Вечеринки, ретриты, хайкинг и девушки, которые поддержат'
}];
const STEPS = [{
  t: 'Запишись',
  d: 'Онлайн или через администратора в Instagram — можно даже за 5 минут до начала'
}, {
  t: 'Приходи за 5–7 минут',
  d: 'Переоденься в чистые кроссовки и форму'
}, {
  t: 'Инструктаж',
  d: 'Тренер покажет технику прыжка и правила безопасности'
}, {
  t: 'Прыгаем!',
  d: 'Разминка, интенсив, силовой блок и растяжка под музыку'
}];
const REVIEW_THEMES = [{
  icon: 'Flame',
  t: 'Энергия тренера',
  d: 'Чаще всего хвалят энергию и внимание тренеров'
}, {
  icon: 'Users',
  t: 'Атмосфера и сообщество',
  d: 'Пишут про девушек вокруг и «маленький островок счастья»'
}, {
  icon: 'Smile',
  t: 'Минус стресс',
  d: 'Тренировка как способ переключиться и отдохнуть головой'
}, {
  icon: 'Shirt',
  t: 'Первые результаты',
  d: 'Делятся, что джинсы стали свободнее после нескольких занятий'
}];
const FAQ = [{
  q: 'Я никогда не занималась спортом. Мне подойдёт?',
  a: 'Да. Подготовка не нужна: технику изучаем постепенно, а тренер подстраивает нагрузку под каждую.'
}, {
  q: 'Что взять с собой?',
  a: 'Чистые кроссовки — на батуте прыгаем только в них — и форму. Пожалуйста, без резких духов.',
  todo: 'Вода, полотенце, раздевалка, душ — уточнить'
}, {
  q: 'За сколько приходить?',
  a: 'За 5–7 минут: переодеться и послушать инструктаж. При опоздании больше 7 минут тренер может не допустить к занятию.'
}, {
  q: 'Джампинг не вреден для коленей?',
  a: 'Батут смягчает ударную нагрузку, а тренер следит за техникой. При проблемах с суставами проверь список противопоказаний и посоветуйся с врачом.'
}, {
  q: 'Сколько раз в неделю ходить?',
  a: 'По нашему опыту, при 2–3 тренировках в неделю большинство замечает изменения. Главное — регулярность.'
}, {
  q: 'Как записаться и как отменить?',
  a: 'Через онлайн-запись или у администратора — минимум за 5 минут до начала. Отмена не позднее чем за 4 часа, иначе занятие спишется. Если мест нет, запишем в лист ожидания.'
}, {
  q: 'Можно ли заморозить абонемент?',
  a: 'В абонементах на 8 и 12 занятий есть 7 дней бесплатной заморозки. Дополнительная неделя — 10 GEL. Абонемент действует и в Батуми, и в Тбилиси.'
}, {
  q: 'Можно прийти с ребёнком?',
  a: 'В прайсе есть детские разовые тренировки до 11 лет и занятия с ребёнком.',
  todo: 'Уточнить актуальность'
}];
const RULES = {
  'Абонемент': ['Действует во всех филиалах — в Батуми и Тбилиси', 'Срок — 1 месяц с даты первой тренировки по нему; пробная в него не входит', 'Абонементы на 8 и 12 занятий включают 7 дней бесплатной заморозки; дополнительная неделя — 10 GEL', 'Именной, передача третьим лицам запрещена; деньги не возвращаются'],
  'Запись и посещение': ['Запись обязательна, с именем и фамилией — за месяц или за 5 минут до начала', 'Если батутов нет — лист ожидания с уведомлением', 'Отмена не позднее чем за 4 часа, иначе занятие списывается', 'Пропущенную можно отработать в тот же день при наличии мест', 'Тренировка состоится от 3 человек', 'При опоздании более 7 минут тренер вправе не допустить'],
  'Правила клуба': ['Чистые кроссовки — прыгаем только в них', 'Без резких духов', 'Оборудование вернуть на место']
};
const CONTRA = ['Острые воспаления', 'Инфекционные болезни', 'Расстройства нервной системы, в т.ч. эпилепсия', 'Опухоли', 'Патологии сердца, сосудов и органов дыхания', 'Любые заболевания в обострении', 'Глаукома', 'Болезненные нарушения опорно-двигательного аппарата', 'Сахарный диабет', 'Беременность', 'Травмы шеи и спины'];
const EVENTS = [{
  icon: 'Disc3',
  t: 'Тематические вечеринки',
  d: 'Вечеринка 90-х, гавайская тренировка, Halloween-конкурс',
  tone: 'fuchsia'
}, {
  icon: 'Mountain',
  t: 'Хайкинг',
  d: 'Выезды на природу всей командой',
  tone: 'teal'
}, {
  icon: 'TreePalm',
  t: 'Ретрит в Капровани',
  d: '#letsjumpretreatgeorgia — тренировки у моря',
  tone: 'violet'
}, {
  icon: 'HeartHandshake',
  t: 'Благотворительный день',
  d: 'Тренировки, сборы от которых идут на добрые дела',
  tone: 'plum'
}, {
  icon: 'Shield',
  t: 'Самооборона для девушек',
  d: '3 часа: срывы захватов, безопасные падения, оценка ситуации',
  tone: 'violet'
}, {
  icon: 'Star',
  t: 'Гостевые мастер-классы',
  d: 'Приглашённые тренеры Jumping Fitness',
  tone: 'fuchsia'
}];
const NAV = [{
  href: '#/directions',
  label: 'Направления'
}, {
  href: '#/schedule',
  label: 'Расписание и цены'
}, {
  href: '#/about',
  label: 'О студии'
}, {
  href: '#/academy',
  label: 'Обучение'
}, {
  href: '#/events',
  label: 'События и зал'
}, {
  href: '#/faq',
  label: 'FAQ'
}, {
  href: '#/contacts',
  label: 'Контакты'
}];
const {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
  useMemo
} = React;
const L = window.LucideReact;
const Icon = ({
  name,
  ...p
}) => {
  const C = L[name] || L[name + 'Icon'] || L.Circle;
  return React.createElement(C, p);
};
const cx = (...a) => a.filter(Boolean).join(' ');
const dirById = Object.fromEntries(DIRECTIONS.map(d => [d.id, d]));
const trById = Object.fromEntries(TRAINERS.map(t => [t.id, t]));
function useRoute() {
  const get = () => (location.hash.replace(/^#/, '') || '/').split('?')[0];
  const [r, setR] = useState(get);
  useEffect(() => {
    const f = () => setR(get());
    addEventListener('hashchange', f);
    return () => removeEventListener('hashchange', f);
  }, []);
  return r;
}
const Ctx = createContext(null);
const useApp = () => useContext(Ctx);
function Btn({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  children,
  icon = 'ArrowRight',
  external
}) {
  const v = {
    primary: 'grad text-white shadow-[0_10px_30px_-10px_rgba(194,24,126,.7)] hover:shadow-[0_16px_40px_-10px_rgba(194,24,126,.8)]',
    lime: 'bg-lime text-plum hover:bg-lime-300 shadow-[0_10px_30px_-12px_rgba(141,198,63,.8)]',
    light: 'bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20 backdrop-blur',
    dark: 'bg-plum text-white hover:bg-plum-700',
    outline: 'ring-1 ring-plum/20 text-plum hover:bg-plum hover:text-white'
  }[variant];
  const s = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6 text-[15px]',
    lg: 'h-14 px-7 text-base'
  }[size];
  const cls = cx('btn-spring group inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap', v, s, className);
  const inner = React.createElement(React.Fragment, null, children, icon && React.createElement(Icon, {
    name: icon,
    className: "w-4 h-4 transition-transform group-hover:translate-x-0.5"
  }));
  if (href) return React.createElement("a", _extends({
    href: href,
    className: cls
  }, external ? {
    target: '_blank',
    rel: 'noopener'
  } : {}), inner);
  return React.createElement("button", {
    type: "button",
    onClick: onClick,
    className: cls
  }, inner);
}
function Todo({
  children = 'уточняется',
  className
}) {
  return React.createElement("span", {
    title: "\u0414\u0435\u043C\u043E: \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0443 \u0441\u0442\u0443\u0434\u0438\u0438",
    className: cx('inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold px-2 py-0.5 align-middle', className)
  }, React.createElement(Icon, {
    name: "CircleDashed",
    className: "w-3 h-3"
  }), children);
}
function Ph({
  label,
  icon = 'Camera',
  tone = 'grad',
  className,
  children,
  noTag
}) {
  const bg = {
    grad: 'grad',
    violet: 'bg-violet',
    fuchsia: 'bg-fuchsia',
    teal: 'bg-teal',
    plum: 'bg-plum',
    lime: 'bg-lime'
  }[tone] || 'grad';
  return React.createElement("div", {
    className: cx('relative overflow-hidden', bg, className)
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern"
  }), React.createElement("div", {
    className: "absolute -right-10 -bottom-10 w-48 h-48 hex bg-white/10"
  }), React.createElement("div", {
    className: "absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/90 p-4 text-center"
  }, children || React.createElement(React.Fragment, null, React.createElement(Icon, {
    name: icon,
    className: "w-8 h-8",
    strokeWidth: 1.5
  }), label && React.createElement("span", {
    className: "text-xs font-semibold opacity-80"
  }, label))), !noTag && React.createElement("span", {
    className: "absolute left-3 top-3 rounded-full bg-black/25 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 backdrop-blur"
  }, "\u0444\u043E\u0442\u043E \u2014 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C"));
}
function Eyebrow({
  children,
  light
}) {
  return React.createElement("div", {
    className: cx('inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.2em]', light ? 'text-lime' : 'text-fuchsia')
  }, React.createElement("span", {
    className: cx('w-2.5 h-2.5 hex', light ? 'bg-lime' : 'grad')
  }), children);
}
function H2({
  children,
  light,
  className
}) {
  return React.createElement("h2", {
    className: cx('font-display font-extrabold text-[30px] leading-[1.08] sm:text-4xl lg:text-5xl tracking-tight mt-3', light ? 'text-white' : 'text-plum', className)
  }, children);
}
const Wrap = ({
  children,
  className
}) => React.createElement("div", {
  className: cx('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)
}, children);
function Logo({
  light = true,
  small
}) {
  return React.createElement("a", {
    href: "#/",
    className: "relative inline-flex flex-col leading-none select-none",
    "aria-label": "Jumping.Ge \u2014 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"
  }, React.createElement("span", {
    className: cx('font-script grad-text', small ? 'text-[26px]' : 'text-[30px]'),
    style: {
      paddingRight: 4
    }
  }, "Jump.ge"), React.createElement("svg", {
    className: "pulse-line -mt-1",
    width: small ? 92 : 104,
    height: "10",
    viewBox: "0 0 104 10",
    fill: "none"
  }, React.createElement("path", {
    d: "M1 6h30l5-5 6 8 5-6 4 3h52",
    stroke: "#2EC4C6",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !small && React.createElement("span", {
    className: cx('text-[8px] font-bold tracking-[.18em] uppercase mt-0.5', light ? 'text-white/50' : 'text-plum/50')
  }, BRAND.tagline));
}
function CitySwitch({
  dark = true,
  className
}) {
  const {
    city,
    setCity
  } = useApp();
  return React.createElement("div", {
    className: cx('inline-flex p-1 rounded-full', dark ? 'bg-white/10 ring-1 ring-white/15' : 'bg-plum/5 ring-1 ring-plum/10', className),
    role: "tablist",
    "aria-label": "\u0413\u043E\u0440\u043E\u0434"
  }, Object.values(CITIES).map(c => React.createElement("button", {
    key: c.id,
    type: "button",
    role: "tab",
    "aria-selected": city === c.id,
    onClick: () => setCity(c.id),
    className: cx('px-4 h-9 rounded-full text-sm font-bold transition-all', city === c.id ? dark ? 'bg-white text-plum' : 'bg-plum text-white' : dark ? 'text-white/70 hover:text-white' : 'text-plum/60 hover:text-plum')
  }, c.name)));
}
function Header({
  route
}) {
  const {
    openBooking
  } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(scrollY > 20);
    f();
    addEventListener('scroll', f);
    return () => removeEventListener('scroll', f);
  }, []);
  useEffect(() => setOpen(false), [route]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);
  return React.createElement(React.Fragment, null, React.createElement("header", {
    className: cx('fixed inset-x-0 top-0 z-40 transition-all duration-300', scrolled ? 'bg-plum/90 backdrop-blur-lg shadow-lg shadow-plum/20' : 'bg-transparent')
  }, React.createElement(Wrap, {
    className: "flex items-center justify-between h-[72px] gap-4"
  }, React.createElement(Logo, {
    small: true
  }), React.createElement("nav", {
    className: "hidden xl:flex items-center gap-1"
  }, NAV.map(n => {
    const active = route.startsWith(n.href.slice(1));
    return React.createElement("a", {
      key: n.href,
      href: n.href,
      className: cx('px-3 py-2 rounded-full text-[14px] font-semibold transition-colors', active ? 'text-white bg-white/10' : 'text-white/70 hover:text-white')
    }, n.label);
  })), React.createElement("div", {
    className: "flex items-center gap-2"
  }, React.createElement("a", {
    href: BRAND.instagram,
    target: "_blank",
    rel: "noopener",
    "aria-label": "Instagram",
    className: "hidden sm:grid place-items-center w-10 h-10 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
  }, React.createElement(Icon, {
    name: "Instagram",
    className: "w-5 h-5"
  })), React.createElement(Btn, {
    size: "sm",
    onClick: () => openBooking(),
    className: "hidden sm:inline-flex",
    icon: "Zap"
  }, "\u041F\u0440\u043E\u0431\u043D\u0430\u044F \xB7 10 GEL"), React.createElement("button", {
    type: "button",
    onClick: () => setOpen(true),
    className: "xl:hidden grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white",
    "aria-label": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"
  }, React.createElement(Icon, {
    name: "Menu",
    className: "w-5 h-5"
  }))))), open && React.createElement("div", {
    className: "fixed inset-0 z-50 bg-plum-900 text-white flex flex-col pop"
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern pointer-events-none"
  }), React.createElement(Wrap, {
    className: "relative flex items-center justify-between h-[72px] w-full"
  }, React.createElement(Logo, {
    small: true
  }), React.createElement("button", {
    type: "button",
    onClick: () => setOpen(false),
    className: "grid place-items-center w-11 h-11 rounded-full bg-white/10",
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"
  }, React.createElement(Icon, {
    name: "X",
    className: "w-5 h-5"
  }))), React.createElement(Wrap, {
    className: "relative flex-1 flex flex-col gap-1 pt-6 overflow-y-auto w-full"
  }, React.createElement("a", {
    href: "#/",
    className: "font-display text-2xl font-bold py-2.5"
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"), NAV.map((n, i) => React.createElement("a", {
    key: n.href,
    href: n.href,
    className: "font-display text-2xl font-bold py-2.5 flex items-center justify-between border-t border-white/10",
    style: {
      animationDelay: i * 30 + 'ms'
    }
  }, n.label, React.createElement(Icon, {
    name: "ArrowUpRight",
    className: "w-5 h-5 text-lime"
  }))), React.createElement("div", {
    className: "mt-6 mb-8 flex flex-col gap-3"
  }, React.createElement(CitySwitch, null), React.createElement(Btn, {
    onClick: () => {
      setOpen(false);
      openBooking();
    },
    size: "lg",
    icon: "Zap"
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0431\u043D\u0443\u044E"), React.createElement(Btn, {
    href: BRAND.instagram,
    external: true,
    variant: "light",
    icon: "Instagram"
  }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Instagram")))));
}
function Floating() {
  const {
    openBooking,
    toast
  } = useApp();
  const [open, setOpen] = useState(false);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "sm:hidden fixed inset-x-0 bottom-0 z-30 p-3 pb-[max(12px,env(safe-area-inset-bottom))] bg-gradient-to-t from-plum/95 to-plum/0"
  }, React.createElement("div", {
    className: "flex gap-2"
  }, React.createElement(Btn, {
    onClick: () => openBooking(),
    className: "flex-1",
    icon: "Zap"
  }, "\u041F\u0440\u043E\u0431\u043D\u0430\u044F \u0437\u0430 10 GEL"), React.createElement("a", {
    href: BRAND.instagram,
    target: "_blank",
    rel: "noopener",
    "aria-label": "Instagram",
    className: "btn-spring grid place-items-center w-12 h-12 rounded-full bg-white text-fuchsia shadow-lg"
  }, React.createElement(Icon, {
    name: "Instagram",
    className: "w-5 h-5"
  })))), React.createElement("div", {
    className: "hidden sm:block fixed right-5 bottom-5 z-30"
  }, open && React.createElement("div", {
    className: "pop absolute right-0 bottom-16 w-72 rounded-3xl bg-white shadow-2xl shadow-plum/25 ring-1 ring-plum/5 p-3"
  }, React.createElement("p", {
    className: "px-3 pt-2 pb-3 text-sm text-plum/70"
  }, "\u041D\u0430\u043F\u0438\u0448\u0438 \u043D\u0430\u043C \u2014 \u043F\u043E\u0434\u0431\u0435\u0440\u0451\u043C \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443 \u0438 \u0437\u0430\u043F\u0438\u0448\u0435\u043C \uD83D\uDC9C"), [{
    n: 'Instagram Direct',
    i: 'Instagram',
    c: 'grad text-white',
    href: BRAND.instagram
  }, {
    n: 'WhatsApp',
    i: 'MessageCircle',
    c: 'bg-[#25D366] text-white',
    demo: true
  }, {
    n: 'Telegram',
    i: 'Send',
    c: 'bg-[#2AABEE] text-white',
    demo: true
  }].map(m => React.createElement("a", {
    key: m.n,
    href: m.href || '#',
    target: m.href ? '_blank' : undefined,
    rel: "noopener",
    onClick: e => {
      if (m.demo) {
        e.preventDefault();
        toast(`${m.n}: номер добавим после согласования`);
      }
    },
    className: "flex items-center gap-3 p-2 rounded-2xl hover:bg-lilac-50 transition"
  }, React.createElement("span", {
    className: cx('grid place-items-center w-10 h-10 rounded-xl', m.c)
  }, React.createElement(Icon, {
    name: m.i,
    className: "w-5 h-5"
  })), React.createElement("span", {
    className: "font-bold text-sm"
  }, m.n), m.demo && React.createElement(Todo, {
    className: "ml-auto"
  }, "\u0434\u0435\u043C\u043E")))), React.createElement("button", {
    type: "button",
    onClick: () => setOpen(!open),
    "aria-label": "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438",
    className: "btn-spring grid place-items-center w-14 h-14 rounded-full grad text-white shadow-xl shadow-fuchsia/40"
  }, React.createElement(Icon, {
    name: open ? 'X' : 'MessageCircleHeart',
    className: "w-6 h-6"
  }))));
}
function Footer() {
  const {
    openBooking,
    toast
  } = useApp();
  return React.createElement("footer", {
    className: "relative bg-plum-900 text-white pt-16 pb-28 sm:pb-12 overflow-hidden"
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern opacity-60"
  }), React.createElement(Wrap, {
    className: "relative"
  }, React.createElement("div", {
    className: "grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]"
  }, React.createElement("div", null, React.createElement(Logo, null), React.createElement("p", {
    className: "mt-5 text-white/60 text-sm max-w-xs leading-relaxed"
  }, "\u0421\u0442\u0443\u0434\u0438\u0438 \u0434\u0436\u0430\u043C\u043F\u0438\u043D\u0433\u0430 \u0432 \u0411\u0430\u0442\u0443\u043C\u0438 \u0438 \u0422\u0431\u0438\u043B\u0438\u0441\u0438. \u041E\u0434\u0438\u043D \u0430\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442 \u2014 \u043E\u0431\u0430 \u0433\u043E\u0440\u043E\u0434\u0430."), React.createElement("div", {
    className: "mt-5 flex gap-2"
  }, React.createElement("a", {
    href: BRAND.instagram,
    target: "_blank",
    rel: "noopener",
    "aria-label": "Instagram",
    className: "btn-spring grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20"
  }, React.createElement(Icon, {
    name: "Instagram",
    className: "w-5 h-5"
  })), ['Send', 'MessageCircle', 'Facebook'].map(i => React.createElement("button", {
    key: i,
    type: "button",
    "aria-label": i,
    onClick: () => toast('Ссылку добавим после согласования'),
    className: "btn-spring grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20"
  }, React.createElement(Icon, {
    name: i,
    className: "w-5 h-5"
  }))))), React.createElement("div", null, React.createElement("h4", {
    className: "font-display font-bold text-sm uppercase tracking-wider text-lime"
  }, "\u0421\u0442\u0443\u0434\u0438\u044F"), React.createElement("ul", {
    className: "mt-4 space-y-2.5 text-sm text-white/70"
  }, NAV.slice(0, 4).map(n => React.createElement("li", {
    key: n.href
  }, React.createElement("a", {
    className: "hover:text-white",
    href: n.href
  }, n.label))))), React.createElement("div", null, React.createElement("h4", {
    className: "font-display font-bold text-sm uppercase tracking-wider text-lime"
  }, "\u0415\u0449\u0451"), React.createElement("ul", {
    className: "mt-4 space-y-2.5 text-sm text-white/70"
  }, NAV.slice(4).map(n => React.createElement("li", {
    key: n.href
  }, React.createElement("a", {
    className: "hover:text-white",
    href: n.href
  }, n.label))), React.createElement("li", null, React.createElement("a", {
    className: "hover:text-white",
    href: "#/faq"
  }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043A\u043B\u0443\u0431\u0430")))), React.createElement("div", {
    className: "space-y-4 text-sm"
  }, React.createElement("h4", {
    className: "font-display font-bold text-sm uppercase tracking-wider text-lime"
  }, "\u0410\u0434\u0440\u0435\u0441\u0430"), Object.values(CITIES).map(c => React.createElement("a", {
    key: c.id,
    href: c.map,
    target: "_blank",
    rel: "noopener",
    className: "block text-white/70 hover:text-white"
  }, React.createElement("b", {
    className: "text-white"
  }, c.name), React.createElement("br", null), c.address)), React.createElement(Btn, {
    size: "sm",
    onClick: () => openBooking(),
    icon: "Zap"
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"))), React.createElement("div", {
    className: "mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/40"
  }, React.createElement("span", null, "\xA9 2026 Jumping.Ge \xB7 \u0414\u0435\u043C\u043E-\u0432\u0435\u0440\u0441\u0438\u044F \u0441\u0430\u0439\u0442\u0430 \u0434\u043B\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044F"), React.createElement("button", {
    type: "button",
    onClick: () => toast('Политика конфиденциальности появится в рабочей версии'),
    className: "text-left hover:text-white/70"
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"))));
}
const MODAL_TYPES = {
  trial: {
    title: 'Запись на пробную',
    sub: 'Первая тренировка — 10 GEL. Оставь контакты, администратор подтвердит время.',
    btn: 'Записаться'
  },
  academy: {
    title: 'Заявка на обучение',
    sub: 'Мастер-класс по технике Jumping Fitness от Яны Бутенко.',
    btn: 'Отправить заявку'
  },
  rent: {
    title: 'Бронь зала',
    sub: 'Зал 90 м² — от 30 GEL в час. Расскажи, что планируешь.',
    btn: 'Забронировать'
  },
  question: {
    title: 'Задать вопрос',
    sub: 'Ответим, подберём тренировку и запишем.',
    btn: 'Отправить'
  },
  event: {
    title: 'Запись на событие',
    sub: 'Сообщим о ближайшей дате и деталях.',
    btn: 'Хочу участвовать'
  }
};
function BookingModal({
  preset,
  onClose
}) {
  const {
    city
  } = useApp();
  const type = MODAL_TYPES[preset.type || 'trial'];
  const [f, setF] = useState({
    name: '',
    contact: '',
    city: preset.city || city,
    dir: preset.dir || 'jumping',
    msg: ''
  });
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);
  useEffect(() => {
    const k = e => e.key === 'Escape' && onClose();
    addEventListener('keydown', k);
    document.body.style.overflow = 'hidden';
    return () => {
      removeEventListener('keydown', k);
      document.body.style.overflow = '';
    };
  }, []);
  const set = k => e => setF({
    ...f,
    [k]: e.target.value
  });
  const submit = e => {
    e.preventDefault();
    const er = {};
    if (f.name.trim().length < 2) er.name = 'Как к тебе обращаться?';
    if (f.contact.trim().length < 5) er.contact = 'Телефон или ник в Instagram';
    setErr(er);
    if (!Object.keys(er).length) setDone(true);
  };
  const inp = 'w-full h-12 rounded-2xl bg-lilac-50 ring-1 ring-plum/10 px-4 text-[15px] outline-none focus:ring-2 focus:ring-fuchsia transition';
  return React.createElement("div", {
    className: "fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": type.title
  }, React.createElement("div", {
    className: "absolute inset-0 bg-plum-900/70 backdrop-blur-sm",
    onClick: onClose
  }), React.createElement("div", {
    className: "pop relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-t-[32px] sm:rounded-[32px] shadow-2xl"
  }, React.createElement("div", {
    className: "relative grad text-white px-6 sm:px-8 pt-7 pb-6 overflow-hidden"
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern"
  }), React.createElement("button", {
    type: "button",
    onClick: onClose,
    className: "absolute right-4 top-4 grid place-items-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/25",
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
  }, React.createElement(Icon, {
    name: "X",
    className: "w-5 h-5"
  })), React.createElement("h3", {
    className: "relative font-display font-extrabold text-2xl pr-10"
  }, type.title), React.createElement("p", {
    className: "relative mt-2 text-white/85 text-sm"
  }, type.sub), preset.slot && React.createElement("div", {
    className: "relative mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-bold"
  }, React.createElement(Icon, {
    name: "CalendarClock",
    className: "w-4 h-4"
  }), preset.slot)), done ? React.createElement("div", {
    className: "px-6 sm:px-8 py-10 text-center"
  }, React.createElement("div", {
    className: "mx-auto w-20 h-20 hex grad grid place-items-center text-white"
  }, React.createElement(Icon, {
    name: "Check",
    className: "w-9 h-9",
    strokeWidth: 3
  })), React.createElement("h4", {
    className: "mt-5 font-display font-bold text-xl"
  }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E, ", f.name.split(' ')[0], "!"), React.createElement("p", {
    className: "mt-2 text-plum/70 text-sm"
  }, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0442\u043E\u0431\u043E\u0439 \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442 \u0437\u0430\u043F\u0438\u0441\u044C."), React.createElement("p", {
    className: "mt-4 text-xs rounded-2xl bg-amber-50 text-amber-800 p-3"
  }, "\u0414\u0435\u043C\u043E-\u0440\u0435\u0436\u0438\u043C: \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0438\u043A\u0443\u0434\u0430 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430. \u0412 \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u2014 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 DIKIDI \u0438\u043B\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443 \u0432 Telegram."), React.createElement(Btn, {
    onClick: onClose,
    variant: "dark",
    className: "mt-6",
    icon: "Check"
  }, "\u0413\u043E\u0442\u043E\u0432\u043E")) : React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    className: "px-6 sm:px-8 py-6 space-y-4"
  }, React.createElement("label", {
    className: "block"
  }, React.createElement("span", {
    className: "text-sm font-bold"
  }, "\u0418\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F"), React.createElement("input", {
    className: cx(inp, 'mt-1.5', err.name && 'ring-2 ring-red-400'),
    value: f.name,
    onChange: set('name'),
    placeholder: "\u0410\u043D\u043D\u0430 \u0418\u0432\u0430\u043D\u043E\u0432\u0430",
    autoComplete: "name"
  }), err.name && React.createElement("span", {
    className: "text-xs text-red-500 mt-1 block"
  }, err.name)), React.createElement("label", {
    className: "block"
  }, React.createElement("span", {
    className: "text-sm font-bold"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0438\u043B\u0438 Instagram"), React.createElement("input", {
    className: cx(inp, 'mt-1.5', err.contact && 'ring-2 ring-red-400'),
    value: f.contact,
    onChange: set('contact'),
    placeholder: "+995 \u2026 \u0438\u043B\u0438 @nickname"
  }), err.contact && React.createElement("span", {
    className: "text-xs text-red-500 mt-1 block"
  }, err.contact)), React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, React.createElement("label", {
    className: "block"
  }, React.createElement("span", {
    className: "text-sm font-bold"
  }, "\u0413\u043E\u0440\u043E\u0434"), React.createElement("select", {
    className: cx(inp, 'mt-1.5'),
    value: f.city,
    onChange: set('city')
  }, Object.values(CITIES).map(c => React.createElement("option", {
    key: c.id,
    value: c.id
  }, c.name)))), (preset.type || 'trial') === 'trial' && React.createElement("label", {
    className: "block"
  }, React.createElement("span", {
    className: "text-sm font-bold"
  }, "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"), React.createElement("select", {
    className: cx(inp, 'mt-1.5'),
    value: f.dir,
    onChange: set('dir')
  }, DIRECTIONS.map(d => React.createElement("option", {
    key: d.id,
    value: d.id
  }, d.short))))), preset.type && preset.type !== 'trial' && React.createElement("label", {
    className: "block"
  }, React.createElement("span", {
    className: "text-sm font-bold"
  }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), React.createElement("textarea", {
    rows: 3,
    className: cx(inp, 'mt-1.5 h-auto py-3 resize-none'),
    value: f.msg,
    onChange: set('msg'),
    placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0443\u0434\u043E\u0431\u043D\u044B\u0435 \u0434\u0430\u0442\u044B"
  })), React.createElement(Btn, {
    className: "w-full",
    size: "lg",
    icon: "ArrowRight",
    onClick: submit
  }, type.btn), React.createElement("p", {
    className: "text-[11px] text-plum/50 text-center"
  }, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443, \u0442\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0448\u044C\u0441\u044F \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u043A\u043B\u0443\u0431\u0430 \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u0434\u0430\u043D\u043D\u044B\u0445."))));
}
function PageHero({
  eyebrow,
  title,
  text,
  children,
  img
}) {
  return React.createElement("section", {
    className: "relative bg-plum text-white pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden"
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern"
  }), React.createElement("div", {
    className: "absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-fuchsia/30 blur-[120px]"
  }), React.createElement("div", {
    className: "absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-violet/40 blur-[120px]"
  }), React.createElement(Wrap, {
    className: "relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end"
  }, React.createElement("div", null, React.createElement(Eyebrow, {
    light: true
  }, eyebrow), React.createElement("h1", {
    className: "mt-4 font-display font-black text-[38px] leading-[1.02] sm:text-6xl lg:text-7xl tracking-tight"
  }, title), text && React.createElement("p", {
    className: "mt-6 max-w-xl text-lg text-white/75 leading-relaxed"
  }, text), children), img));
}
function DirectionCard({
  d,
  i = 0
}) {
  const bg = {
    grad: 'grad',
    violet: 'bg-violet',
    fuchsia: 'bg-fuchsia',
    teal: 'bg-teal',
    plum: 'bg-plum'
  }[d.tone];
  return React.createElement("a", {
    href: `#/directions/${d.id}`,
    className: cx('reveal bounce-hover group relative overflow-hidden rounded-[28px] p-6 sm:p-7 text-white flex flex-col min-h-[260px] hover:shadow-2xl hover:shadow-plum/30', bg, d.main && 'sm:col-span-2 lg:row-span-2 lg:min-h-[540px]', d.wide && 'sm:col-span-2'),
    style: {
      animationDelay: i % 4 * 60 + 'ms'
    }
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern"
  }), React.createElement("div", {
    className: "absolute -right-14 -bottom-14 w-56 h-56 hex bg-white/10 transition-transform duration-700 group-hover:rotate-[30deg] group-hover:scale-110"
  }), React.createElement("div", {
    className: "relative flex items-start justify-between"
  }, React.createElement("span", {
    className: "grid place-items-center w-14 h-14 hex bg-white/15"
  }, React.createElement(Icon, {
    name: d.icon,
    className: "w-6 h-6"
  })), d.badge ? React.createElement("span", {
    className: "rounded-full bg-lime text-plum text-xs font-extrabold px-3 py-1"
  }, d.badge) : React.createElement(Icon, {
    name: "ArrowUpRight",
    className: "w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition"
  })), React.createElement("div", {
    className: "relative mt-auto pt-10"
  }, d.main && React.createElement("span", {
    className: "inline-block mb-3 rounded-full bg-lime text-plum text-xs font-extrabold px-3 py-1"
  }, "\u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"), React.createElement("h3", {
    className: cx('font-display font-extrabold leading-tight', d.main ? 'text-3xl sm:text-5xl' : 'text-2xl')
  }, d.name), d.sub && React.createElement("p", {
    className: "text-white/70 text-sm mt-1"
  }, d.sub), React.createElement("p", {
    className: cx('mt-3 text-white/85 leading-relaxed', d.main ? 'text-lg max-w-md' : 'text-[15px]')
  }, d.lead), d.main && React.createElement("p", {
    className: "mt-3 text-white/70 max-w-md hidden sm:block"
  }, d.text)));
}
function TrainerCard({
  t,
  i = 0
}) {
  const initials = t.name.split(' ').map(w => w[0]).join('').slice(0, 2);
  const tones = ['grad', 'violet', 'fuchsia', 'teal'];
  return React.createElement("div", {
    className: "reveal group text-center",
    style: {
      animationDelay: i % 4 * 70 + 'ms'
    }
  }, React.createElement("div", {
    className: "relative mx-auto w-full max-w-[240px] aspect-square"
  }, React.createElement("div", {
    className: "absolute inset-0 hex bg-lime/80 scale-[1.04] rotate-[30deg] transition-transform duration-700 group-hover:rotate-[60deg]"
  }), React.createElement("div", {
    className: "absolute inset-0"
  }, React.createElement(Ph, {
    noTag: true,
    tone: tones[i % 4],
    className: "w-full h-full hex"
  }, React.createElement("span", {
    className: "font-display font-black text-5xl text-white/90"
  }, initials), React.createElement("span", {
    className: "text-[10px] font-bold uppercase tracking-wider opacity-80"
  }, "\u043F\u043E\u0440\u0442\u0440\u0435\u0442 \xB7 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C")))), React.createElement("h3", {
    className: "mt-5 font-display font-bold text-lg"
  }, t.name), React.createElement("p", {
    className: "text-fuchsia text-sm font-bold"
  }, t.role), React.createElement("p", {
    className: "mt-1.5 text-sm text-plum/60 leading-snug max-w-[260px] mx-auto"
  }, t.dirs), t.rating && React.createElement("p", {
    className: "mt-2 inline-flex items-center gap-1 text-xs font-bold text-plum/70"
  }, React.createElement(Icon, {
    name: "Star",
    className: "w-3.5 h-3.5 fill-lime text-lime"
  }), t.rating, " \xB7 ", t.votes, " \u043E\u0446\u0435\u043D\u043E\u043A DIKIDI"));
}
function PriceCards({
  compact
}) {
  const {
    openBooking
  } = useApp();
  const list = compact ? PRICES.filter(p => ['trial', 'pack8', 'unlim'].includes(p.id)) : PRICES;
  return React.createElement("div", {
    className: cx('grid gap-4 sm:grid-cols-2', compact ? 'lg:grid-cols-3' : 'lg:grid-cols-5')
  }, list.map((p, i) => React.createElement("div", {
    key: p.id,
    className: cx('reveal bounce-hover relative rounded-[28px] p-6 flex flex-col overflow-hidden', p.dark ? 'bg-plum text-white' : p.accent ? 'grad text-white' : 'bg-white ring-1 ring-plum/10 hover:shadow-xl hover:shadow-plum/10'),
    style: {
      animationDelay: i * 60 + 'ms'
    }
  }, (p.dark || p.accent) && React.createElement("div", {
    className: "absolute inset-0 hex-pattern"
  }), p.popular && React.createElement("span", {
    className: "absolute right-4 top-4 rounded-full bg-lime text-plum text-[11px] font-extrabold px-2.5 py-1"
  }, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0439"), React.createElement("div", {
    className: "relative"
  }, React.createElement("div", {
    className: cx('text-sm font-bold uppercase tracking-wider', p.dark || p.accent ? 'text-white/70' : 'text-fuchsia')
  }, p.name), React.createElement("div", {
    className: "mt-4 flex items-baseline gap-1.5"
  }, React.createElement("span", {
    className: "font-display font-black text-5xl"
  }, p.price), React.createElement("span", {
    className: "font-bold opacity-80"
  }, "GEL")), React.createElement("div", {
    className: cx('text-sm', p.dark || p.accent ? 'text-white/60' : 'text-plum/50')
  }, p.unit), React.createElement("p", {
    className: cx('mt-4 text-sm leading-relaxed', p.dark || p.accent ? 'text-white/85' : 'text-plum/70')
  }, p.desc)), React.createElement("div", {
    className: "relative mt-auto pt-6"
  }, React.createElement(Btn, {
    size: "sm",
    variant: p.accent ? 'lime' : p.dark ? 'primary' : 'outline',
    className: "w-full",
    onClick: () => openBooking({
      dir: 'jumping'
    })
  }, p.cta || 'Выбрать')))));
}
function FaqList({
  items
}) {
  return React.createElement("div", {
    className: "divide-y divide-plum/10 rounded-[28px] bg-white ring-1 ring-plum/10 overflow-hidden"
  }, items.map((f, i) => React.createElement("details", {
    key: i,
    className: "group",
    open: i === 0
  }, React.createElement("summary", {
    className: "flex items-center justify-between gap-4 cursor-pointer px-5 sm:px-7 py-5 font-bold text-[15px] sm:text-base hover:bg-lilac-50 transition"
  }, f.q, React.createElement("span", {
    className: "shrink-0 grid place-items-center w-9 h-9 rounded-full bg-lilac group-open:bg-fuchsia group-open:text-white transition"
  }, React.createElement(Icon, {
    name: "Plus",
    className: "w-4 h-4 transition-transform group-open:rotate-45"
  }))), React.createElement("div", {
    className: "px-5 sm:px-7 pb-6 -mt-1 text-plum/70 leading-relaxed"
  }, f.a, " ", f.todo && React.createElement(Todo, null, f.todo)))));
}
function FinalCta() {
  const {
    openBooking
  } = useApp();
  return React.createElement("section", {
    className: "px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
  }, React.createElement("div", {
    className: "reveal relative max-w-7xl mx-auto rounded-[36px] sm:rounded-[48px] grad text-white overflow-hidden px-6 py-14 sm:p-16 lg:p-20"
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern"
  }), React.createElement("div", {
    className: "absolute -right-24 -top-24 w-96 h-96 hex bg-white/10 floaty",
    style: {
      '--r': '12deg'
    }
  }), React.createElement("div", {
    className: "absolute right-[18%] bottom-10 w-24 h-24 hex bg-lime/90 floaty hidden md:block",
    style: {
      '--r': '-8deg',
      animationDelay: '1s'
    }
  }), React.createElement("div", {
    className: "relative max-w-2xl"
  }, React.createElement("h2", {
    className: "font-display font-black text-4xl sm:text-6xl leading-[1.02] tracking-tight"
  }, "\u041D\u0430\u0447\u043D\u0438 \u0441 \u043E\u0434\u043D\u043E\u0439 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438"), React.createElement("p", {
    className: "mt-5 text-lg text-white/85 max-w-lg"
  }, "\u0411\u0435\u0437 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438, \u0441 \u0442\u0440\u0435\u043D\u0435\u0440\u043E\u043C \u0440\u044F\u0434\u043E\u043C \u0438 \u0434\u0435\u0432\u0443\u0448\u043A\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442. \u041F\u0440\u043E\u0431\u043D\u0430\u044F \u2014 10 GEL."), React.createElement("div", {
    className: "mt-8 flex flex-col sm:flex-row gap-3"
  }, React.createElement(Btn, {
    size: "lg",
    variant: "lime",
    onClick: () => openBooking(),
    icon: "Zap"
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0431\u043D\u0443\u044E"), React.createElement(Btn, {
    size: "lg",
    variant: "light",
    href: BRAND.instagram,
    external: true,
    icon: "Instagram"
  }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \xAB\u0421\u0422\u0410\u0420\u0422\xBB \u0432 Direct")))));
}
function Home() {
  const {
    openBooking,
    city,
    toast
  } = useApp();
  const c = CITIES[city];
  const [slide, setSlide] = useState(0);
  const sliderRef = useRef(null);
  const scrollTrainers = dir => {
    const el = sliderRef.current;
    if (el) el.scrollBy({
      left: dir * el.clientWidth * 0.8,
      behavior: 'smooth'
    });
  };
  return React.createElement(React.Fragment, null, React.createElement("section", {
    className: "relative min-h-[100svh] bg-plum text-white overflow-hidden flex items-center pt-24 pb-24 lg:pb-16"
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern"
  }), React.createElement("div", {
    className: "absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-fuchsia/35 blur-[140px]"
  }), React.createElement("div", {
    className: "absolute bottom-[-30%] left-[-15%] w-[600px] h-[600px] rounded-full bg-violet/50 blur-[140px]"
  }), React.createElement(Wrap, {
    className: "relative w-full grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-8 items-center"
  }, React.createElement("div", null, React.createElement("div", {
    className: "flex flex-wrap items-center gap-3"
  }, React.createElement(CitySwitch, null), React.createElement("span", {
    className: "inline-flex items-center gap-1.5 text-sm text-white/70"
  }, React.createElement(Icon, {
    name: "MapPin",
    className: "w-4 h-4 text-lime"
  }), c.address)), React.createElement("h1", {
    className: "mt-8 font-display font-black tracking-tight text-[40px] leading-[1] sm:text-7xl xl:text-[88px]"
  }, "\u041F\u0440\u0435\u0432\u0440\u0430\u0442\u0438 ", React.createElement("span", {
    className: "whitespace-nowrap"
  }, "\xAB\u0437\u0430\u0432\u0442\u0440\u0430"), " ", React.createElement("span", {
    className: "grad-text"
  }, "\u043D\u0430\u0447\u043D\u0443\xBB"), " \u0432\xA0\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"), React.createElement("p", {
    className: "mt-6 max-w-xl text-lg sm:text-xl text-white/75 leading-relaxed"
  }, "\u0421\u0442\u0443\u0434\u0438\u044F Jumping Fitness \u0432 \u0413\u0440\u0443\u0437\u0438\u0438 ", React.createElement(Todo, {
    className: "!text-[10px]"
  }, "\xAB\u043F\u0435\u0440\u0432\u0430\u044F \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F\xBB \u2014 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"), ". \u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438 \u043D\u0430 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0431\u0430\u0442\u0443\u0442\u0430\u0445, \u0441\u0438\u043B\u043E\u0432\u044B\u0435, Zumba \u0438 \u0442\u0430\u043D\u0446\u044B \u2014 \u0432 \u0411\u0430\u0442\u0443\u043C\u0438 \u0438 \u0422\u0431\u0438\u043B\u0438\u0441\u0438."), React.createElement("div", {
    className: "mt-9 flex flex-col sm:flex-row gap-3"
  }, React.createElement(Btn, {
    size: "lg",
    onClick: () => openBooking(),
    icon: "Zap"
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0431\u043D\u0443\u044E \u0437\u0430 10 GEL"), React.createElement(Btn, {
    size: "lg",
    variant: "light",
    href: "#/schedule",
    icon: "CalendarDays"
  }, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438 \u0446\u0435\u043D\u044B")), React.createElement("div", {
    className: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
  }, React.createElement("div", {
    className: "flex items-center gap-3"
  }, React.createElement("div", {
    className: "font-display font-black text-4xl text-lime"
  }, "5,0"), React.createElement("div", {
    className: "text-sm leading-tight text-white/70"
  }, React.createElement("div", {
    className: "flex gap-0.5"
  }, [...Array(5)].map((_, i) => React.createElement(Icon, {
    key: i,
    name: "Star",
    className: "w-3.5 h-3.5 fill-lime text-lime"
  }))), "308 \u043E\u0446\u0435\u043D\u043E\u043A \u043D\u0430 DIKIDI")), React.createElement("div", {
    className: "h-10 w-px bg-white/15 hidden sm:block"
  }), React.createElement("div", {
    className: "flex items-center gap-3"
  }, React.createElement(Icon, {
    name: "Award",
    className: "w-8 h-8 text-lime"
  }), React.createElement("div", {
    className: "text-sm leading-tight text-white/70"
  }, "DIKIDI", React.createElement("br", null), "Awards \u201925")), React.createElement("div", {
    className: "h-10 w-px bg-white/15 hidden sm:block"
  }), React.createElement("div", {
    className: "flex items-center gap-3"
  }, React.createElement(Icon, {
    name: "MapPinned",
    className: "w-8 h-8 text-lime"
  }), React.createElement("div", {
    className: "text-sm leading-tight text-white/70"
  }, "2 \u0433\u043E\u0440\u043E\u0434\u0430", React.createElement("br", null), "1 \u0430\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442")))), React.createElement("div", {
    className: "relative mx-auto w-full max-w-[520px] aspect-[4/5]"
  }, React.createElement("div", {
    className: "absolute inset-[6%] hex-v grad opacity-70 rotate-6 floaty",
    style: {
      '--r': '6deg'
    }
  }), React.createElement("div", {
    className: "absolute inset-[3%] hex-v overflow-hidden bg-plum-700"
  }, React.createElement("img", {
    src: "img/group-tv.webp",
    alt: "\u0422\u0440\u0435\u043D\u0435\u0440\u044B Jumping.Ge \u043D\u0430 \u0441\u044A\u0451\u043C\u043A\u0430\u0445 \u0422\u0412",
    className: "w-full h-full object-cover object-[50%_30%]"
  }), React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent"
  })), React.createElement("div", {
    className: "absolute -left-2 sm:-left-8 top-[18%] rounded-2xl bg-lime text-plum px-4 py-3 shadow-xl floaty rotate-[-6deg]",
    style: {
      '--r': '-6deg'
    }
  }, React.createElement("div", {
    className: "text-[11px] font-extrabold uppercase tracking-wider"
  }, "\u041F\u0440\u043E\u0431\u043D\u0430\u044F"), React.createElement("div", {
    className: "font-display font-black text-2xl leading-none"
  }, "10 GEL")), React.createElement("div", {
    className: "absolute -right-1 sm:-right-6 bottom-[16%] rounded-2xl bg-white text-plum px-4 py-3 shadow-xl floaty",
    style: {
      '--r': '4deg',
      animationDelay: '1.2s'
    }
  }, React.createElement("div", {
    className: "flex items-center gap-2"
  }, React.createElement("span", {
    className: "grid place-items-center w-9 h-9 rounded-full grad text-white"
  }, React.createElement(Icon, {
    name: "Tv",
    className: "w-4 h-4"
  })), React.createElement("div", {
    className: "text-sm font-bold leading-tight"
  }, "\u041C\u044B \u043D\u0430", React.createElement("br", null), "\u0433\u0440\u0443\u0437\u0438\u043D\u0441\u043A\u043E\u043C \u0422\u0412"))))), React.createElement("a", {
    href: "#what",
    onClick: e => {
      e.preventDefault();
      document.getElementById('what').scrollIntoView({
        behavior: 'smooth'
      });
    },
    className: "hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest"
  }, "\u041B\u0438\u0441\u0442\u0430\u0439", React.createElement(Icon, {
    name: "ChevronDown",
    className: "w-5 h-5 animate-bounce"
  }))), React.createElement("div", {
    className: "bg-lime text-plum overflow-hidden py-4 -rotate-1 relative z-10 shadow-lg"
  }, React.createElement("div", {
    className: "marquee flex w-max gap-8 font-display font-extrabold text-xl sm:text-2xl uppercase whitespace-nowrap"
  }, [0, 1].map(k => React.createElement("div", {
    key: k,
    className: "flex gap-8 items-center"
  }, ['Jumping', 'Full body', 'Zumba', 'Female Dancehall', 'Slide', 'Pilates', 'Stretching', 'Вечеринки', 'Ретриты'].map(w => React.createElement("span", {
    key: w,
    className: "flex items-center gap-8"
  }, w, React.createElement("span", {
    className: "w-3 h-3 hex bg-plum"
  }))))))), React.createElement("section", {
    id: "what",
    className: "py-20 sm:py-28 scroll-mt-20"
  }, React.createElement(Wrap, {
    className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
  }, React.createElement("div", {
    className: "reveal relative order-2 lg:order-1"
  }, React.createElement(Ph, {
    className: "rounded-[36px] aspect-[4/3]",
    tone: "grad"
  }, React.createElement("button", {
    type: "button",
    onClick: () => toast('Видео тренировки добавим из исходников студии'),
    className: "btn-spring grid place-items-center w-20 h-20 rounded-full bg-white text-fuchsia shadow-2xl",
    "aria-label": "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0438\u0434\u0435\u043E"
  }, React.createElement(Icon, {
    name: "Play",
    className: "w-8 h-8 ml-1 fill-fuchsia"
  })), React.createElement("span", {
    className: "mt-3 text-sm font-bold"
  }, "\u0412\u0438\u0434\u0435\u043E \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438 \xB7 20 \u0441\u0435\u043A")), React.createElement("div", {
    className: "absolute -bottom-6 -right-2 sm:-right-6 w-28 h-28 sm:w-36 sm:h-36 hex bg-plum text-white grid place-items-center text-center p-4"
  }, React.createElement("div", null, React.createElement("div", {
    className: "font-display font-black text-3xl sm:text-4xl text-lime"
  }, "4"), React.createElement("div", {
    className: "text-[11px] font-bold leading-tight"
  }, "\u0431\u043B\u043E\u043A\u0430", React.createElement("br", null), "\u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438")))), React.createElement("div", {
    className: "order-1 lg:order-2"
  }, React.createElement(Eyebrow, null, "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0434\u0436\u0430\u043C\u043F\u0438\u043D\u0433"), React.createElement(H2, null, "\u042D\u0442\u043E \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u043E\u043F\u0440\u044B\u0433\u0430\u0442\u044C \u043D\u0430 \u0431\u0430\u0442\u0443\u0442\u0435"), React.createElement("p", {
    className: "mt-5 text-lg text-plum/70 leading-relaxed"
  }, "\u042D\u0442\u043E \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430, \u0433\u0434\u0435 \u0432\u0430\u0436\u043D\u044B \u0442\u0435\u0445\u043D\u0438\u043A\u0430 \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0442\u0440\u0435\u043D\u0435\u0440\u0430. \u041F\u0435\u0440\u0435\u0434 \u043A\u0430\u0436\u0434\u044B\u043C \u0437\u0430\u043D\u044F\u0442\u0438\u0435\u043C \u2014 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0430\u0436, \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u043C \u043F\u043E\u0434 \u0442\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C. \u0410 \u0435\u0449\u0451 \u0437\u0434\u0435\u0441\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0434\u0435\u0432\u0443\u0448\u0435\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442 \u0438 \u043F\u043E\u0440\u0430\u0434\u0443\u044E\u0442\u0441\u044F \u0442\u0432\u043E\u0438\u043C \u0443\u0441\u043F\u0435\u0445\u0430\u043C."), React.createElement("div", {
    className: "mt-8 grid sm:grid-cols-2 gap-3"
  }, [['Music', 'Под музыку', 'Разминка, интенсив, силовой блок, растяжка'], ['Feather', 'Мягко для суставов', 'Батут смягчает удар по сравнению с бегом по асфальту'], ['Target', 'Всё тело', 'Ноги, пресс, спина и выносливость'], ['Sprout', 'С нуля', 'Спортивная подготовка не нужна']].map(([i, t, d], k) => React.createElement("div", {
    key: t,
    className: "reveal bounce-hover rounded-3xl bg-white ring-1 ring-plum/10 p-5",
    style: {
      animationDelay: k * 60 + 'ms'
    }
  }, React.createElement("span", {
    className: "grid place-items-center w-11 h-11 hex grad text-white"
  }, React.createElement(Icon, {
    name: i,
    className: "w-5 h-5"
  })), React.createElement("h3", {
    className: "mt-3 font-bold"
  }, t), React.createElement("p", {
    className: "text-sm text-plum/60 mt-1"
  }, d))))))), React.createElement("section", {
    className: "pb-20 sm:pb-28"
  }, React.createElement(Wrap, null, React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
  }, React.createElement("div", null, React.createElement(Eyebrow, null, "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"), React.createElement(H2, null, "\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u0432\u043E\u0439 \u0440\u0438\u0442\u043C")), React.createElement(Btn, {
    variant: "outline",
    href: "#/directions"
  }, "\u0412\u0441\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F")), React.createElement("div", {
    className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
  }, DIRECTIONS.map((d, i) => React.createElement(DirectionCard, {
    key: d.id,
    d: d,
    i: i
  }))))), React.createElement("section", {
    className: "relative bg-plum text-white py-20 sm:py-28 overflow-hidden"
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern"
  }), React.createElement("div", {
    className: "absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full bg-violet/40 blur-[130px]"
  }), React.createElement(Wrap, {
    className: "relative"
  }, React.createElement("div", {
    className: "max-w-2xl"
  }, React.createElement(Eyebrow, {
    light: true
  }, "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B"), React.createElement(H2, {
    light: true
  }, "\u0421\u0442\u0443\u0434\u0438\u044F, \u043A\u0443\u0434\u0430 \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F")), React.createElement("div", {
    className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
  }, ADVANTAGES.map((a, i) => React.createElement("div", {
    key: a.title,
    className: "reveal bounce-hover group rounded-[28px] bg-white/[.06] ring-1 ring-white/10 p-7 hover:bg-white/[.1]",
    style: {
      animationDelay: i % 3 * 70 + 'ms'
    }
  }, React.createElement("div", {
    className: "flex items-center justify-between"
  }, React.createElement("span", {
    className: "grid place-items-center w-14 h-14 hex grad transition-transform duration-500 group-hover:rotate-[30deg]"
  }, React.createElement(Icon, {
    name: a.icon,
    className: "w-6 h-6"
  })), React.createElement("span", {
    className: "font-display font-black text-4xl text-white/10"
  }, "0", i + 1)), React.createElement("h3", {
    className: "mt-6 font-display font-bold text-xl leading-snug"
  }, a.title), React.createElement("p", {
    className: "mt-2 text-white/65"
  }, a.text), a.todo && React.createElement(Todo, {
    className: "mt-3"
  }, "\u0441\u0442\u0430\u0442\u0443\u0441 \u2014 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043C")))))), React.createElement("section", {
    className: "py-20 sm:py-28"
  }, React.createElement(Wrap, null, React.createElement("div", {
    className: "text-center max-w-2xl mx-auto"
  }, React.createElement(Eyebrow, null, "\u041F\u0435\u0440\u0432\u0430\u044F \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430"), React.createElement(H2, null, "\u041A\u0430\u043A \u0432\u0441\u0451 \u043F\u0440\u043E\u0439\u0434\u0451\u0442"), React.createElement("p", {
    className: "mt-4 text-plum/60 text-lg"
  }, "\u0427\u0435\u0442\u044B\u0440\u0435 \u0448\u0430\u0433\u0430 \u2014 \u0438 \u0442\u044B \u0443\u0436\u0435 \u0432 \u043F\u0440\u044B\u0436\u043A\u0435.")), React.createElement("div", {
    className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative"
  }, React.createElement("div", {
    className: "hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-fuchsia/30"
  }), STEPS.map((s, i) => React.createElement("div", {
    key: s.t,
    className: "reveal relative text-center",
    style: {
      animationDelay: i * 90 + 'ms'
    }
  }, React.createElement("div", {
    className: cx('relative mx-auto w-20 h-20 hex grid place-items-center font-display font-black text-3xl', i === 3 ? 'bg-lime text-plum' : 'grad text-white')
  }, i + 1), React.createElement("h3", {
    className: "mt-5 font-display font-bold text-lg"
  }, s.t), React.createElement("p", {
    className: "mt-2 text-plum/60 text-[15px] max-w-[240px] mx-auto"
  }, s.d)))), React.createElement("div", {
    className: "mt-12 text-center"
  }, React.createElement(Btn, {
    onClick: () => openBooking(),
    icon: "Zap"
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0431\u043D\u0443\u044E")))), React.createElement("section", {
    className: "py-20 sm:py-28 bg-lilac hex-pattern-dark"
  }, React.createElement(Wrap, null, React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-end justify-between gap-6"
  }, React.createElement("div", null, React.createElement(Eyebrow, null, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430"), React.createElement(H2, null, "\u0422\u0440\u0435\u043D\u0435\u0440\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0440\u044F\u0434\u043E\u043C")), React.createElement("div", {
    className: "flex gap-2"
  }, React.createElement("button", {
    type: "button",
    onClick: () => scrollTrainers(-1),
    "aria-label": "\u041D\u0430\u0437\u0430\u0434",
    className: "btn-spring grid place-items-center w-12 h-12 rounded-full bg-white ring-1 ring-plum/10 hover:bg-plum hover:text-white"
  }, React.createElement(Icon, {
    name: "ArrowLeft",
    className: "w-5 h-5"
  })), React.createElement("button", {
    type: "button",
    onClick: () => scrollTrainers(1),
    "aria-label": "\u0412\u043F\u0435\u0440\u0451\u0434",
    className: "btn-spring grid place-items-center w-12 h-12 rounded-full bg-plum text-white hover:bg-fuchsia"
  }, React.createElement(Icon, {
    name: "ArrowRight",
    className: "w-5 h-5"
  })))), React.createElement("div", {
    ref: sliderRef,
    className: "mt-12 -mx-4 px-4 flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
  }, TRAINERS.map((t, i) => React.createElement("div", {
    key: t.id,
    className: "snap-start shrink-0 w-[72%] sm:w-[42%] lg:w-[23%]"
  }, React.createElement(TrainerCard, {
    t: t,
    i: i
  })))), React.createElement("div", {
    className: "mt-6 text-center"
  }, React.createElement(Btn, {
    variant: "outline",
    href: "#/about"
  }, "\u041E \u0441\u0442\u0443\u0434\u0438\u0438 \u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0435")))), React.createElement("section", {
    className: "py-20 sm:py-28"
  }, React.createElement(Wrap, {
    className: "grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16"
  }, React.createElement("div", null, React.createElement(Eyebrow, null, "\u041E\u0442\u0437\u044B\u0432\u044B"), React.createElement(H2, null, "\u0427\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0434\u0435\u0432\u0443\u0448\u043A\u0438"), React.createElement("div", {
    className: "reveal mt-8 rounded-[32px] grad text-white p-8 relative overflow-hidden"
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern"
  }), React.createElement("div", {
    className: "relative"
  }, React.createElement("div", {
    className: "font-display font-black text-7xl"
  }, "5,0"), React.createElement("div", {
    className: "flex gap-1 mt-2"
  }, [...Array(5)].map((_, i) => React.createElement(Icon, {
    key: i,
    name: "Star",
    className: "w-6 h-6 fill-lime text-lime"
  }))), React.createElement("p", {
    className: "mt-3 text-white/85"
  }, "308 \u043E\u0446\u0435\u043D\u043E\u043A \u0438 21 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0439 \u043E\u0442\u0437\u044B\u0432 \u043D\u0430 DIKIDI"), React.createElement("div", {
    className: "mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-bold"
  }, React.createElement(Icon, {
    name: "Award",
    className: "w-4 h-4 text-lime"
  }), "DIKIDI Awards \u201925"))), React.createElement(Btn, {
    variant: "outline",
    className: "mt-6",
    onClick: () => toast('Ссылка на отзывы DIKIDI появится в рабочей версии'),
    icon: "ArrowUpRight"
  }, "\u0412\u0441\u0435 \u043E\u0442\u0437\u044B\u0432\u044B \u043D\u0430 DIKIDI")), React.createElement("div", null, React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-4"
  }, REVIEW_THEMES.map((r, i) => React.createElement("div", {
    key: r.t,
    className: "reveal bounce-hover rounded-[28px] bg-white ring-1 ring-plum/10 p-6",
    style: {
      animationDelay: i * 60 + 'ms'
    }
  }, React.createElement(Icon, {
    name: r.icon,
    className: "w-7 h-7 text-fuchsia"
  }), React.createElement("h3", {
    className: "mt-4 font-display font-bold text-lg"
  }, r.t), React.createElement("p", {
    className: "mt-1.5 text-plum/60 text-[15px]"
  }, r.d)))), React.createElement("div", {
    className: "reveal mt-4 rounded-[28px] border-2 border-dashed border-plum/15 p-6 flex flex-col sm:flex-row gap-4 sm:items-center"
  }, React.createElement("span", {
    className: "grid place-items-center w-12 h-12 shrink-0 rounded-2xl bg-lilac text-violet"
  }, React.createElement(Icon, {
    name: "Quote",
    className: "w-6 h-6"
  })), React.createElement("p", {
    className: "text-sm text-plum/60"
  }, React.createElement("b", {
    className: "text-plum"
  }, "\u0417\u0434\u0435\u0441\u044C \u0431\u0443\u0434\u0443\u0442 \u0436\u0438\u0432\u044B\u0435 \u043E\u0442\u0437\u044B\u0432\u044B \u0438 \u043A\u0435\u0439\u0441\u044B \xAB\u0434\u043E/\u043F\u043E\u0441\u043B\u0435\xBB"), " \u2014 \u0441\u0432\u0435\u0436\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B \u0441 DIKIDI \u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043A (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u0435\u0439\u0441 \u0418\u043D\u043D\u044B) \u043F\u043E\u0441\u043B\u0435 \u0438\u0445 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043D\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E."))))), React.createElement("section", {
    className: "py-20 sm:py-28 bg-white"
  }, React.createElement(Wrap, null, React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
  }, React.createElement("div", null, React.createElement(Eyebrow, null, "\u0426\u0435\u043D\u044B"), React.createElement(H2, null, "\u041D\u0430\u0447\u0430\u0442\u044C \u2014 \u043F\u0440\u043E\u0449\u0435 \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E"), React.createElement("p", {
    className: "mt-3 text-plum/60"
  }, "\u0410\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0411\u0430\u0442\u0443\u043C\u0438 \u0438 \u0422\u0431\u0438\u043B\u0438\u0441\u0438")), React.createElement(Btn, {
    variant: "outline",
    href: "#/schedule"
  }, "\u041F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0430\u0439\u0441 \u0438 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435")), React.createElement(PriceCards, {
    compact: true
  }))), React.createElement("section", {
    className: "py-20 sm:py-28"
  }, React.createElement(Wrap, null, React.createElement(Eyebrow, null, "\u0424\u0438\u043B\u0438\u0430\u043B\u044B"), React.createElement(H2, null, "\u0414\u0432\u0430 \u0433\u043E\u0440\u043E\u0434\u0430 \u2014 \u043E\u0434\u043D\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430"), React.createElement("div", {
    className: "mt-10 grid md:grid-cols-2 gap-5"
  }, Object.values(CITIES).map((b, i) => React.createElement("div", {
    key: b.id,
    className: cx('reveal bounce-hover rounded-[32px] overflow-hidden ring-1', city === b.id ? 'ring-fuchsia/40 shadow-xl shadow-fuchsia/10' : 'ring-plum/10', 'bg-white')
  }, b.id === 'batumi' ? React.createElement("div", {
    className: "relative h-56 overflow-hidden"
  }, React.createElement("img", {
    src: "img/route-building.webp",
    alt: "\u0417\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0413\u043E\u0440\u0433\u0438\u043B\u0430\u0434\u0437\u0435, 91",
    className: "w-full h-full object-cover object-[50%_35%]"
  }), React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-plum/70 to-transparent"
  }), React.createElement("span", {
    className: "absolute left-5 bottom-4 font-display font-black text-3xl text-white"
  }, b.name)) : React.createElement(Ph, {
    tone: "violet",
    className: "h-56",
    label: "\u0424\u043E\u0442\u043E \u0437\u0430\u043B\u0430 \u0432 \u0422\u0431\u0438\u043B\u0438\u0441\u0438"
  }, React.createElement("span", {
    className: "font-display font-black text-3xl text-white absolute left-5 bottom-4"
  }, b.name)), React.createElement("div", {
    className: "p-6 sm:p-7"
  }, React.createElement("p", {
    className: "flex gap-2 font-bold"
  }, React.createElement(Icon, {
    name: "MapPin",
    className: "w-5 h-5 text-fuchsia shrink-0"
  }), b.address), React.createElement("p", {
    className: "mt-2 text-sm text-plum/60 pl-7"
  }, b.landmark), React.createElement("div", {
    className: "mt-5 flex flex-wrap gap-2"
  }, React.createElement(Btn, {
    size: "sm",
    href: b.map,
    external: true,
    icon: "Navigation"
  }, "\u041F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442"), React.createElement(Btn, {
    size: "sm",
    variant: "outline",
    href: "#/contacts",
    icon: "ArrowRight"
  }, "\u041A\u0430\u043A \u043D\u0430\u0439\u0442\u0438 \u0432\u0445\u043E\u0434")))))))), React.createElement("section", {
    className: "pb-8 sm:pb-12"
  }, React.createElement(Wrap, {
    className: "grid lg:grid-cols-[1fr_1.6fr] gap-10"
  }, React.createElement("div", null, React.createElement(Eyebrow, null, "FAQ"), React.createElement(H2, null, "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"), React.createElement("p", {
    className: "mt-4 text-plum/60"
  }, "\u041D\u0435 \u043D\u0430\u0448\u043B\u0430 \u043E\u0442\u0432\u0435\u0442? \u041D\u0430\u043F\u0438\u0448\u0438 \u043D\u0430\u043C \u0432 Direct \u2014 \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u0438 \u043F\u043E\u0434\u0431\u0435\u0440\u0451\u043C \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443."), React.createElement(Btn, {
    variant: "outline",
    className: "mt-6",
    href: "#/faq"
  }, "\u0412\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430")), React.createElement(FaqList, {
    items: FAQ.slice(0, 6)
  }))), React.createElement(FinalCta, null));
}
function DirectionsPage() {
  return React.createElement(React.Fragment, null, React.createElement(PageHero, {
    eyebrow: "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",
    title: React.createElement(React.Fragment, null, "\u0412\u043E\u0441\u0435\u043C\u044C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u0432 ", React.createElement("span", {
      className: "grad-text"
    }, "\u043F\u043E\u043B\u044E\u0431\u0438\u0442\u044C"), " \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438"),
    text: "\u0414\u0436\u0430\u043C\u043F\u0438\u043D\u0433 \u2014 \u043D\u0430\u0448\u0435 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435. \u0410 \u0435\u0449\u0451 \u0441\u0438\u043B\u043E\u0432\u044B\u0435, Zumba, \u0442\u0430\u043D\u0446\u044B, \u043F\u0438\u043B\u0430\u0442\u0435\u0441 \u2014 \u0432\u0441\u0451 \u043F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0431\u0435\u0437\u043B\u0438\u043C\u0438\u0442\u0443 \u0437\u0430 300 GEL \u0432 \u043C\u0435\u0441\u044F\u0446."
  }), React.createElement("section", {
    className: "py-16 sm:py-24"
  }, React.createElement(Wrap, null, React.createElement("div", {
    className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
  }, DIRECTIONS.map((d, i) => React.createElement(DirectionCard, {
    key: d.id,
    d: d,
    i: i
  }))))), React.createElement(FinalCta, null));
}
function DirectionPage({
  id
}) {
  const {
    openBooking
  } = useApp();
  const d = dirById[id];
  if (!d) return React.createElement(NotFound, null);
  const slots = SCHEDULE.batumi.filter(s => s.dir === id);
  const trainers = d.trainers.map(t => trById[t]).filter(Boolean);
  return React.createElement(React.Fragment, null, React.createElement(PageHero, {
    eyebrow: React.createElement("a", {
      href: "#/directions",
      className: "hover:underline"
    }, "\u2190 \u0412\u0441\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"),
    title: d.name,
    text: d.lead,
    img: React.createElement(Ph, {
      tone: d.tone === 'plum' ? 'violet' : d.tone,
      className: "hidden lg:block hex-v aspect-square max-w-[380px] w-full ml-auto",
      label: `Фото: ${d.short}`
    })
  }, React.createElement("div", {
    className: "mt-8 flex flex-wrap gap-3"
  }, React.createElement(Btn, {
    size: "lg",
    onClick: () => openBooking({
      dir: d.id
    }),
    icon: "Zap"
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 ", d.short.toLowerCase()), d.price && React.createElement("span", {
    className: "inline-flex items-center rounded-full bg-lime text-plum font-extrabold px-5 h-14"
  }, d.price))), React.createElement("section", {
    className: "py-16 sm:py-24"
  }, React.createElement(Wrap, {
    className: "grid lg:grid-cols-[1.5fr_1fr] gap-10"
  }, React.createElement("div", null, React.createElement(H2, {
    className: "!text-3xl"
  }, "\u0427\u0442\u043E \u044D\u0442\u043E"), d.text ? React.createElement("p", {
    className: "mt-4 text-lg text-plum/70 leading-relaxed"
  }, d.text) : React.createElement("div", {
    className: "mt-4 rounded-3xl border-2 border-dashed border-plum/15 p-6 text-plum/60"
  }, React.createElement(Todo, null, "\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442 \u0442\u0440\u0435\u043D\u0435\u0440\u0430"), React.createElement("p", {
    className: "mt-3"
  }, "\u0417\u0434\u0435\u0441\u044C \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: \u0447\u0442\u043E \u044D\u0442\u043E \u0437\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430, \u043A\u043E\u043C\u0443 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442, \u043A\u0430\u043A\u0430\u044F \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438 \u0447\u0442\u043E \u0432\u0437\u044F\u0442\u044C \u0441 \u0441\u043E\u0431\u043E\u0439.")), d.forWho.length > 0 && React.createElement("div", {
    className: "mt-8 grid sm:grid-cols-3 gap-3"
  }, d.forWho.map(w => React.createElement("div", {
    key: w,
    className: "rounded-3xl bg-white ring-1 ring-plum/10 p-5 flex gap-3"
  }, React.createElement(Icon, {
    name: "Check",
    className: "w-5 h-5 text-fuchsia shrink-0"
  }), React.createElement("span", {
    className: "font-semibold text-[15px]"
  }, w)))), d.bring && React.createElement("p", {
    className: "mt-6 inline-flex items-center gap-2 rounded-full bg-lilac px-4 py-2 text-sm font-bold"
  }, React.createElement(Icon, {
    name: "Backpack",
    className: "w-4 h-4 text-violet"
  }), "\u0412\u0437\u044F\u0442\u044C \u0441 \u0441\u043E\u0431\u043E\u0439: ", d.bring), React.createElement("div", {
    className: "mt-10 grid sm:grid-cols-3 gap-3"
  }, [0, 1, 2].map(k => React.createElement(Ph, {
    key: k,
    tone: ['grad', 'violet', 'fuchsia'][k],
    className: "rounded-3xl aspect-[4/5]",
    label: k === 0 ? 'Видео' : 'Фото',
    icon: k === 0 ? 'Play' : 'Camera'
  })))), React.createElement("aside", {
    className: "space-y-5"
  }, React.createElement("div", {
    className: "rounded-[28px] bg-plum text-white p-6 relative overflow-hidden"
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern"
  }), React.createElement("h3", {
    className: "relative font-display font-bold text-lg flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "CalendarDays",
    className: "w-5 h-5 text-lime"
  }), "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \xB7 \u0411\u0430\u0442\u0443\u043C\u0438"), React.createElement("ul", {
    className: "relative mt-4 space-y-2"
  }, slots.length ? slots.map((s, i) => React.createElement("li", {
    key: i
  }, React.createElement("button", {
    type: "button",
    onClick: () => openBooking({
      dir: d.id,
      slot: `${DAYS_FULL[s.d]}, ${s.t}`
    }),
    className: "w-full flex items-center justify-between gap-3 rounded-2xl bg-white/[.07] hover:bg-white/15 px-4 py-3 text-left transition"
  }, React.createElement("span", null, React.createElement("b", null, DAYS[s.d], " ", s.t), s.note && React.createElement("span", {
    className: "text-white/60 text-sm"
  }, " \xB7 ", s.note)), React.createElement("span", {
    className: "text-sm text-white/60"
  }, s.tr ? trById[s.tr].name.split(' ')[0] : 'тренер — уточн.')))) : React.createElement("li", {
    className: "text-white/60 text-sm"
  }, "\u041F\u043E \u0437\u0430\u043F\u0438\u0441\u0438 \u2014 \u0432\u0440\u0435\u043C\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u0443\u0435\u043C \u0441 \u0442\u0440\u0435\u043D\u0435\u0440\u043E\u043C.")), React.createElement("a", {
    href: "#/schedule",
    className: "relative mt-4 inline-flex items-center gap-1 text-sm font-bold text-lime hover:underline"
  }, "\u0412\u0441\u0451 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ", React.createElement(Icon, {
    name: "ArrowRight",
    className: "w-4 h-4"
  }))), trainers.length > 0 && React.createElement("div", {
    className: "rounded-[28px] bg-white ring-1 ring-plum/10 p-6"
  }, React.createElement("h3", {
    className: "font-display font-bold text-lg"
  }, "\u0422\u0440\u0435\u043D\u0435\u0440\u044B"), React.createElement("ul", {
    className: "mt-4 space-y-3"
  }, trainers.map((t, i) => React.createElement("li", {
    key: t.id,
    className: "flex items-center gap-3"
  }, React.createElement("span", {
    className: cx('grid place-items-center w-12 h-12 hex text-white font-bold', ['grad', 'bg-violet', 'bg-teal'][i % 3])
  }, t.name[0]), React.createElement("div", null, React.createElement("div", {
    className: "font-bold"
  }, t.name), React.createElement("div", {
    className: "text-xs text-plum/50"
  }, t.rating ? `★ ${t.rating} · ${t.votes} оценок` : t.role))))))))), React.createElement(FinalCta, null));
}
function SchedulePage() {
  const {
    city,
    openBooking
  } = useApp();
  const [dir, setDir] = useState('all');
  const today = (new Date().getDay() + 6) % 7;
  const [day, setDay] = useState(today);
  const data = SCHEDULE[city].filter(s => dir === 'all' || s.dir === dir);
  const dirsInSchedule = [...new Set(SCHEDULE.batumi.map(s => s.dir))];
  const color = {
    jumping: 'border-fuchsia',
    strength: 'border-violet',
    zumba: 'border-lime',
    dancehall: 'border-teal',
    glutes: 'border-violet',
    slide: 'border-fuchsia',
    pilates: 'border-teal'
  };
  const Slot = ({
    s
  }) => React.createElement("button", {
    type: "button",
    onClick: () => openBooking({
      dir: s.dir,
      slot: `${DAYS_FULL[s.d]}, ${s.t} · ${dirById[s.dir].short}`
    }),
    className: cx('group w-full text-left rounded-2xl bg-white ring-1 ring-plum/10 border-l-4 p-3.5 hover:shadow-lg hover:shadow-plum/10 hover:-translate-y-0.5 transition', color[s.dir])
  }, React.createElement("div", {
    className: "flex items-center justify-between"
  }, React.createElement("span", {
    className: "font-display font-bold"
  }, s.t), s.note && React.createElement("span", {
    className: "text-[10px] font-bold uppercase text-fuchsia"
  }, s.note)), React.createElement("div", {
    className: "mt-1 font-bold text-sm leading-tight"
  }, dirById[s.dir].short), React.createElement("div", {
    className: "text-xs text-plum/50 mt-0.5"
  }, s.tr ? trById[s.tr].name.split(' ')[0] : 'тренер уточняется'), React.createElement("div", {
    className: "mt-2 text-xs font-bold text-fuchsia opacity-0 group-hover:opacity-100 transition flex items-center gap-1"
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F ", React.createElement(Icon, {
    name: "ArrowRight",
    className: "w-3 h-3"
  })));
  return React.createElement(React.Fragment, null, React.createElement(PageHero, {
    eyebrow: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438 \u0446\u0435\u043D\u044B",
    title: React.createElement(React.Fragment, null, "\u041A\u043E\u0433\u0434\u0430 \u0438 ", React.createElement("span", {
      className: "grad-text"
    }, "\u0441\u043A\u043E\u043B\u044C\u043A\u043E")),
    text: "\u0412\u044B\u0431\u0435\u0440\u0438 \u0433\u043E\u0440\u043E\u0434 \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u2014 \u043D\u0430\u0436\u043C\u0438 \u043D\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F."
  }, React.createElement("div", {
    className: "mt-8"
  }, React.createElement(CitySwitch, null))), React.createElement("section", {
    className: "py-14 sm:py-20"
  }, React.createElement(Wrap, null, React.createElement("div", {
    className: "flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 pb-2"
  }, ['all', ...dirsInSchedule].map(id => React.createElement("button", {
    key: id,
    type: "button",
    "aria-pressed": dir === id,
    onClick: () => setDir(id),
    className: cx('shrink-0 h-10 px-4 rounded-full text-sm font-bold transition', dir === id ? 'bg-plum text-white' : 'bg-white ring-1 ring-plum/10 hover:ring-plum/30')
  }, id === 'all' ? 'Все направления' : dirById[id].short))), city === 'tbilisi' ? React.createElement("div", {
    className: "mt-8 rounded-[32px] border-2 border-dashed border-plum/15 p-10 text-center"
  }, React.createElement(Icon, {
    name: "CalendarClock",
    className: "w-10 h-10 mx-auto text-violet"
  }), React.createElement("h3", {
    className: "mt-4 font-display font-bold text-2xl"
  }, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0422\u0431\u0438\u043B\u0438\u0441\u0438 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C"), React.createElement("p", {
    className: "mt-2 text-plum/60 max-w-md mx-auto"
  }, "\u041F\u043E\u043A\u0430 \u0443\u0442\u043E\u0447\u043D\u044F\u0435\u043C \u2014 \u043D\u0430\u043F\u0438\u0448\u0438 \u043D\u0430\u043C, \u043F\u043E\u0434\u0431\u0435\u0440\u0451\u043C \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F. ", React.createElement(Todo, null, "\u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438 \u0442\u0440\u0435\u043D\u0435\u0440\u044B \u0422\u0431\u0438\u043B\u0438\u0441\u0438")), React.createElement("div", {
    className: "mt-6 flex flex-wrap justify-center gap-3"
  }, React.createElement(Btn, {
    onClick: () => openBooking({
      city: 'tbilisi'
    })
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"), React.createElement(Btn, {
    variant: "outline",
    href: BRAND.instagram,
    external: true,
    icon: "Instagram"
  }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Direct"))) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "lg:hidden mt-6"
  }, React.createElement("div", {
    className: "grid grid-cols-7 gap-1.5"
  }, DAYS.map((d, i) => React.createElement("button", {
    key: d,
    type: "button",
    "aria-pressed": day === i,
    onClick: () => setDay(i),
    className: cx('h-12 rounded-2xl font-bold text-sm transition relative', day === i ? 'grad text-white' : 'bg-white ring-1 ring-plum/10')
  }, d, i === today && React.createElement("span", {
    className: "absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-lime"
  })))), React.createElement("h3", {
    className: "mt-6 font-display font-bold text-xl"
  }, DAYS_FULL[day]), React.createElement("div", {
    className: "mt-3 grid sm:grid-cols-2 gap-2.5"
  }, data.filter(s => s.d === day).sort((a, b) => a.t.localeCompare(b.t)).map((s, i) => React.createElement(Slot, {
    key: i,
    s: s
  })), !data.some(s => s.d === day) && React.createElement("p", {
    className: "text-plum/50 py-6"
  }, "\u0412 \u044D\u0442\u043E\u0442 \u0434\u0435\u043D\u044C \u043D\u0435\u0442 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u043F\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C\u0443 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E."))), React.createElement("div", {
    className: "hidden lg:grid grid-cols-7 gap-3 mt-8"
  }, DAYS.map((d, i) => React.createElement("div", {
    key: d
  }, React.createElement("div", {
    className: cx('rounded-2xl text-center py-3 font-display font-bold', i === today ? 'grad text-white' : 'bg-plum text-white')
  }, DAYS_FULL[i]), React.createElement("div", {
    className: "mt-3 space-y-2.5"
  }, data.filter(s => s.d === i).sort((a, b) => a.t.localeCompare(b.t)).map((s, k) => React.createElement(Slot, {
    key: k,
    s: s
  })))))), React.createElement("p", {
    className: "mt-6 text-xs text-plum/50"
  }, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u043E \u0441\u0442\u043E\u0440\u0438\u0441 Schedule, \u043D\u043E\u044F\u0431\u0440\u044C 2026. ", React.createElement(Todo, null, "\u0441\u0432\u0435\u0440\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F \u0441\u0438\u043B\u043E\u0432\u044B\u0445 \u0438 Dancehall"))))), React.createElement("section", {
    className: "py-16 sm:py-24 bg-white"
  }, React.createElement(Wrap, null, React.createElement(Eyebrow, null, "\u0426\u0435\u043D\u044B"), React.createElement(H2, null, "\u0410\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442\u044B"), React.createElement("p", {
    className: "mt-3 text-plum/60"
  }, "\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0442 \u0432 \u0411\u0430\u0442\u0443\u043C\u0438 \u0438 \u0422\u0431\u0438\u043B\u0438\u0441\u0438 \xB7 \u0426\u0435\u043D\u044B \u0432 GEL ", React.createElement(Todo, null, "\u0444\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u0430\u0439\u0441 \u2014 \u0443\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C")), React.createElement("div", {
    className: "mt-10"
  }, React.createElement(PriceCards, null)), React.createElement("div", {
    className: "mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-5"
  }, React.createElement("div", {
    className: "rounded-[28px] ring-1 ring-plum/10 p-6 sm:p-8"
  }, React.createElement("h3", {
    className: "font-display font-bold text-xl"
  }, "\u0414\u0440\u0443\u0433\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438"), React.createElement("ul", {
    className: "mt-4 divide-y divide-plum/10"
  }, PRICES_EXTRA.map(p => React.createElement("li", {
    key: p.name,
    className: "flex items-center justify-between gap-4 py-3.5"
  }, React.createElement("span", {
    className: "font-semibold"
  }, p.name, " ", p.todo && React.createElement(Todo, null)), React.createElement("span", {
    className: "font-display font-bold whitespace-nowrap"
  }, p.price, " ", React.createElement("span", {
    className: "text-plum/40 text-sm"
  }, "GEL")))))), React.createElement("div", {
    className: "rounded-[28px] bg-lilac p-6 sm:p-8"
  }, React.createElement("h3", {
    className: "font-display font-bold text-xl"
  }, "\u0421\u043A\u0438\u0434\u043A\u0438 ", React.createElement(Todo, null, "\u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C")), React.createElement("div", {
    className: "mt-5 grid grid-cols-2 gap-3"
  }, DISCOUNTS.map(d => React.createElement("div", {
    key: d.t,
    className: "rounded-2xl bg-white p-4"
  }, React.createElement("div", {
    className: "font-display font-black text-2xl text-fuchsia"
  }, d.v), React.createElement("div", {
    className: "text-sm font-semibold mt-1"
  }, d.t)))), React.createElement("a", {
    href: "#/faq",
    className: "mt-5 inline-flex items-center gap-1 text-sm font-bold text-violet hover:underline"
  }, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442\u0430 \u0438 \u0437\u0430\u043C\u043E\u0440\u043E\u0437\u043A\u0438 ", React.createElement(Icon, {
    name: "ArrowRight",
    className: "w-4 h-4"
  })))))), React.createElement(FinalCta, null));
}
function AboutPage() {
  const {
    openBooking
  } = useApp();
  return React.createElement(React.Fragment, null, React.createElement(PageHero, {
    eyebrow: "\u041E \u0441\u0442\u0443\u0434\u0438\u0438",
    title: React.createElement(React.Fragment, null, "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043E\u0441\u0442\u0440\u043E\u0432\u043E\u043A ", React.createElement("span", {
      className: "grad-text"
    }, "\u0441\u0447\u0430\u0441\u0442\u044C\u044F")),
    text: "Jumping.Ge \u2014 \u0441\u0442\u0443\u0434\u0438\u0438 \u0434\u0436\u0430\u043C\u043F\u0438\u043D\u0433\u0430 \u0432 \u0411\u0430\u0442\u0443\u043C\u0438 \u0438 \u0422\u0431\u0438\u043B\u0438\u0441\u0438. \u041C\u0438\u0441\u0441\u0438\u044F \u2014 \u0434\u0435\u043B\u0430\u0442\u044C \u043C\u0438\u0440 \u044F\u0440\u0447\u0435, \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u2014 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435 \u0438 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u043F\u0440\u044B\u0436\u043A\u0435.",
    img: React.createElement("div", {
      className: "hidden lg:block relative ml-auto w-full max-w-[360px] aspect-[3/4] hex-v overflow-hidden"
    }, React.createElement("img", {
      src: "img/group-tv.webp",
      alt: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 Jumping.Ge",
      className: "w-full h-full object-cover"
    }))
  }), React.createElement("section", {
    className: "py-16 sm:py-24"
  }, React.createElement(Wrap, {
    className: "grid lg:grid-cols-2 gap-12 items-center"
  }, React.createElement("div", null, React.createElement(Eyebrow, null, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"), React.createElement(H2, null, "\u0421 \u043A\u043E\u043D\u0446\u0430 2022 \u0433\u043E\u0434\u0430 ", React.createElement(Todo, null, "\u0434\u0430\u0442\u0430")), React.createElement("p", {
    className: "mt-5 text-lg text-plum/70 leading-relaxed"
  }, "\u0421\u0442\u0443\u0434\u0438\u0435\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442 \u042F\u043D\u0430 \u0411\u0443\u0442\u0435\u043D\u043A\u043E \u2014 \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0438 ", React.createElement("span", {
    className: "whitespace-nowrap"
  }, "[\u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C Jumping Fitness \u0432 \u0413\u0440\u0443\u0437\u0438\u0438]"), ", \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u0430\u043C\u0430 \u043E\u0431\u0443\u0447\u0430\u0435\u0442 \u0442\u0440\u0435\u043D\u0435\u0440\u043E\u0432. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0431\u044B\u043B \u0411\u0430\u0442\u0443\u043C\u0438, \u043F\u043E\u0442\u043E\u043C \u2014 \u0422\u0431\u0438\u043B\u0438\u0441\u0438. \u041E\u0434\u0438\u043D \u0430\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043E\u0431\u043E\u0438\u0445 \u0433\u043E\u0440\u043E\u0434\u0430\u0445."), React.createElement("p", {
    className: "mt-4 text-lg text-plum/70 leading-relaxed"
  }, "\u0414\u0436\u0430\u043C\u043F\u0438\u043D\u0433 \u2014 \u044D\u0442\u043E \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u043E\u043F\u0440\u044B\u0433\u0430\u0442\u044C \u043D\u0430 \u0431\u0430\u0442\u0443\u0442\u0435. \u041C\u044B \u0434\u0435\u043B\u0430\u0435\u043C \u0443\u043F\u043E\u0440 \u043D\u0430 \u0442\u0435\u0445\u043D\u0438\u043A\u0443: \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0430\u0436 \u043F\u0435\u0440\u0435\u0434 \u043A\u0430\u0436\u0434\u044B\u043C \u0437\u0430\u043D\u044F\u0442\u0438\u0435\u043C \u0438 \u0442\u0440\u0435\u043D\u0435\u0440 \u0440\u044F\u0434\u043E\u043C."), React.createElement("div", {
    className: "mt-8 grid grid-cols-3 gap-3"
  }, [['2', 'города'], ['8', 'направлений'], ['5,0', 'на DIKIDI']].map(([n, t]) => React.createElement("div", {
    key: t,
    className: "rounded-3xl bg-white ring-1 ring-plum/10 p-5 text-center"
  }, React.createElement("div", {
    className: "font-display font-black text-3xl sm:text-4xl grad-text"
  }, n), React.createElement("div", {
    className: "text-sm text-plum/60 mt-1"
  }, t))))), React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, React.createElement(Ph, {
    className: "rounded-[28px] aspect-[3/4] mt-10",
    tone: "grad",
    label: "\u0417\u0430\u043B \u0432 \u0411\u0430\u0442\u0443\u043C\u0438"
  }), React.createElement(Ph, {
    className: "rounded-[28px] aspect-[3/4]",
    tone: "violet",
    label: "\u0413\u0440\u0443\u043F\u043F\u0430 \u043D\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0435"
  })))), React.createElement("section", {
    className: "py-16 sm:py-24 bg-lilac hex-pattern-dark"
  }, React.createElement(Wrap, null, React.createElement("div", {
    className: "text-center max-w-2xl mx-auto"
  }, React.createElement(Eyebrow, null, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430"), React.createElement(H2, null, "\u041D\u0430\u0448\u0438 \u0442\u0440\u0435\u043D\u0435\u0440\u044B")), React.createElement("div", {
    className: "mt-14 grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12"
  }, TRAINERS.map((t, i) => React.createElement(TrainerCard, {
    key: t.id,
    t: t,
    i: i
  }))))), React.createElement("section", {
    className: "py-16 sm:py-24"
  }, React.createElement(Wrap, {
    className: "grid md:grid-cols-3 gap-4"
  }, [['Tv', 'Нас показали на ТВ', 'Выступление команды на грузинском телевидении', 'канал и выпуск'], ['HeartHandshake', 'Благотворительность', 'Благотворительный день тренировок'], ['Users', 'Сообщество', 'Вечеринки, хайкинг, ретрит и WhatsApp-группа клиенток']].map(([i, t, d, todo]) => React.createElement("div", {
    key: t,
    className: "reveal bounce-hover rounded-[28px] bg-white ring-1 ring-plum/10 p-7"
  }, React.createElement("span", {
    className: "grid place-items-center w-14 h-14 hex grad text-white"
  }, React.createElement(Icon, {
    name: i,
    className: "w-6 h-6"
  })), React.createElement("h3", {
    className: "mt-5 font-display font-bold text-xl"
  }, t), React.createElement("p", {
    className: "mt-2 text-plum/60"
  }, d), todo && React.createElement(Todo, {
    className: "mt-3"
  }, todo)))), React.createElement(Wrap, {
    className: "mt-10 text-center"
  }, React.createElement(Btn, {
    onClick: () => openBooking()
  }, "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F"))));
}
function AcademyPage() {
  const {
    openBooking
  } = useApp();
  return React.createElement(React.Fragment, null, React.createElement(PageHero, {
    eyebrow: "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0442\u0440\u0435\u043D\u0435\u0440\u043E\u0432",
    title: React.createElement(React.Fragment, null, "\u0421\u0442\u0430\u043D\u044C \u0442\u0440\u0435\u043D\u0435\u0440\u043E\u043C ", React.createElement("span", {
      className: "grad-text"
    }, "\u0434\u0436\u0430\u043C\u043F\u0438\u043D\u0433\u0430")),
    text: "\u041C\u0430\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441\u0441 \u043F\u043E \u0442\u0435\u0445\u043D\u0438\u043A\u0435 Jumping Fitness \u043E\u0442 \u042F\u043D\u044B \u0411\u0443\u0442\u0435\u043D\u043A\u043E. \u041F\u043E\u0434\u043E\u0439\u0434\u0451\u0442 \u0438 \u043D\u043E\u0432\u0438\u0447\u043A\u0430\u043C, \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0442\u0440\u0435\u043D\u0435\u0440\u0430\u043C."
  }, React.createElement("div", {
    className: "mt-8 flex flex-wrap gap-3"
  }, React.createElement(Btn, {
    size: "lg",
    variant: "lime",
    onClick: () => openBooking({
      type: 'academy'
    }),
    icon: "GraduationCap"
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435"))), React.createElement("section", {
    className: "py-16 sm:py-24"
  }, React.createElement(Wrap, null, React.createElement("div", {
    className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
  }, [['Clock', '4 часа', 'практики'], ['Bone', 'Анатомия', 'и биомеханика прыжка'], ['Award', 'Сертификат', 'по окончании'], ['UserRound', 'Яна Бутенко', 'ведёт мастер-класс']].map(([i, t, d], k) => React.createElement("div", {
    key: t,
    className: "reveal bounce-hover rounded-[28px] bg-white ring-1 ring-plum/10 p-7",
    style: {
      animationDelay: k * 60 + 'ms'
    }
  }, React.createElement(Icon, {
    name: i,
    className: "w-8 h-8 text-fuchsia"
  }), React.createElement("div", {
    className: "mt-5 font-display font-black text-2xl"
  }, t), React.createElement("div", {
    className: "text-plum/60"
  }, d)))), React.createElement("div", {
    className: "mt-12 grid lg:grid-cols-2 gap-8 items-center"
  }, React.createElement("div", {
    className: "rounded-[32px] bg-plum text-white p-8 sm:p-10 relative overflow-hidden"
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern"
  }), React.createElement("div", {
    className: "relative"
  }, React.createElement(Icon, {
    name: "Quote",
    className: "w-10 h-10 text-lime"
  }), React.createElement("p", {
    className: "mt-4 font-display text-xl sm:text-2xl leading-snug"
  }, "\u0412\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u0446\u0430 \u043C\u0430\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441\u0441\u0430 \u043E\u0442\u043A\u0440\u044B\u043B\u0430 \u0441\u0432\u043E\u044E \u0441\u0442\u0443\u0434\u0438\u044E \u0434\u0436\u0430\u043C\u043F\u0438\u043D\u0433\u0430 \u0432 \u0419\u043E\u0448\u043A\u0430\u0440-\u041E\u043B\u0435."), React.createElement("p", {
    className: "mt-4 text-white/60 text-sm"
  }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437 Instagram \u0441\u0442\u0443\u0434\u0438\u0438"))), React.createElement("div", null, React.createElement("h3", {
    className: "font-display font-bold text-2xl"
  }, "\u0427\u0442\u043E \u0443\u0442\u043E\u0447\u043D\u0438\u043C \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u043C"), React.createElement("ul", {
    className: "mt-5 space-y-3"
  }, ['Программа по блокам', 'Цена и формат', 'Ближайшие даты', 'Образец сертификата'].map(t => React.createElement("li", {
    key: t,
    className: "flex items-center gap-3"
  }, React.createElement(Icon, {
    name: "CircleDashed",
    className: "w-5 h-5 text-amber-500"
  }), React.createElement("span", {
    className: "font-semibold"
  }, t)))), React.createElement(Btn, {
    className: "mt-8",
    onClick: () => openBooking({
      type: 'academy'
    })
  }, "\u0425\u043E\u0447\u0443 \u043D\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435"))))));
}
function EventsPage() {
  const {
    openBooking
  } = useApp();
  return React.createElement(React.Fragment, null, React.createElement(PageHero, {
    eyebrow: "\u0421\u043E\u0431\u044B\u0442\u0438\u044F \u0438 \u0430\u0440\u0435\u043D\u0434\u0430",
    title: React.createElement(React.Fragment, null, "\u041D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E ", React.createElement("span", {
      className: "grad-text"
    }, "\u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438")),
    text: "\u0412\u0435\u0447\u0435\u0440\u0438\u043D\u043A\u0438, \u0445\u0430\u0439\u043A\u0438\u043D\u0433, \u0440\u0435\u0442\u0440\u0438\u0442\u044B \u0438 \u043C\u0430\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441\u0441\u044B \u2014 \u0430 \u0435\u0449\u0451 \u0437\u0430\u043B 90 \u043C\xB2 \u0434\u043B\u044F \u0442\u0432\u043E\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432."
  }), React.createElement("section", {
    className: "py-16 sm:py-24"
  }, React.createElement(Wrap, null, React.createElement(Eyebrow, null, "\u0421\u043E\u0431\u044B\u0442\u0438\u044F"), React.createElement(H2, null, "\u0416\u0438\u0437\u043D\u044C \u0441\u0442\u0443\u0434\u0438\u0438"), React.createElement("div", {
    className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
  }, EVENTS.map((e, i) => React.createElement("div", {
    key: e.t,
    className: "reveal bounce-hover group rounded-[28px] overflow-hidden bg-white ring-1 ring-plum/10 hover:shadow-xl hover:shadow-plum/10",
    style: {
      animationDelay: i % 3 * 60 + 'ms'
    }
  }, React.createElement(Ph, {
    tone: e.tone,
    className: "aspect-[16/10]",
    icon: e.icon,
    label: e.t
  }), React.createElement("div", {
    className: "p-6"
  }, React.createElement("h3", {
    className: "font-display font-bold text-xl"
  }, e.t), React.createElement("p", {
    className: "mt-2 text-plum/60"
  }, e.d), React.createElement("button", {
    type: "button",
    onClick: () => openBooking({
      type: 'event'
    }),
    className: "mt-4 inline-flex items-center gap-1 font-bold text-fuchsia text-sm hover:gap-2 transition-all"
  }, "\u0425\u043E\u0447\u0443 \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 ", React.createElement(Icon, {
    name: "ArrowRight",
    className: "w-4 h-4"
  })))))))), React.createElement("section", {
    className: "py-16 sm:py-24 bg-plum text-white relative overflow-hidden"
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern"
  }), React.createElement(Wrap, {
    className: "relative grid lg:grid-cols-2 gap-12 items-center"
  }, React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, React.createElement(Ph, {
    tone: "grad",
    className: "rounded-[28px] aspect-square col-span-2 sm:col-span-1",
    label: "\u0417\u0430\u043B 90 \u043C\xB2"
  }), React.createElement(Ph, {
    tone: "violet",
    className: "rounded-[28px] aspect-square hidden sm:block",
    label: "\u0417\u0435\u0440\u043A\u0430\u043B\u0430 \u0438 \u0441\u0432\u0435\u0442"
  })), React.createElement("div", null, React.createElement(Eyebrow, {
    light: true
  }, "\u0410\u0440\u0435\u043D\u0434\u0430 \u0437\u0430\u043B\u0430"), React.createElement(H2, {
    light: true
  }, "\u0421\u0432\u0435\u0442\u043B\u044B\u0439 \u0437\u0430\u043B-\u043B\u043E\u0444\u0442 \u0434\u043B\u044F \u0442\u0432\u043E\u0438\u0445 \u0438\u0434\u0435\u0439"), React.createElement("p", {
    className: "mt-5 text-white/70 text-lg"
  }, "\u0411\u0435\u043B\u044B\u0435 \u0441\u0442\u0435\u043D\u044B, \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u043E\u043A\u043D\u0430, \u0437\u0435\u0440\u043A\u0430\u043B\u0430. \u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0441\u044A\u0451\u043C\u043E\u043A, \u043C\u0430\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441\u0441\u043E\u0432, \u0439\u043E\u0433\u0438, \u0442\u0430\u043D\u0446\u0435\u0432 \u0438 \u0440\u0435\u043F\u0435\u0442\u0438\u0446\u0438\u0439."), React.createElement("div", {
    className: "mt-8 flex gap-6"
  }, React.createElement("div", null, React.createElement("div", {
    className: "font-display font-black text-4xl text-lime"
  }, "90 \u043C\xB2"), React.createElement("div", {
    className: "text-white/60 text-sm"
  }, "\u043F\u043B\u043E\u0449\u0430\u0434\u044C")), React.createElement("div", null, React.createElement("div", {
    className: "font-display font-black text-4xl text-lime"
  }, "\u043E\u0442 30"), React.createElement("div", {
    className: "text-white/60 text-sm"
  }, "GEL \u0432 \u0447\u0430\u0441"))), React.createElement("p", {
    className: "mt-6"
  }, React.createElement(Todo, null, "\u0447\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442, \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u0444\u0438\u043B\u0438\u0430\u043B")), React.createElement(Btn, {
    className: "mt-6",
    variant: "lime",
    onClick: () => openBooking({
      type: 'rent'
    }),
    icon: "CalendarCheck"
  }, "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043B")))), React.createElement(FinalCta, null));
}
function FaqPage() {
  return React.createElement(React.Fragment, null, React.createElement(PageHero, {
    eyebrow: "FAQ \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430",
    title: React.createElement(React.Fragment, null, "\u0412\u0441\u0451, \u0447\u0442\u043E \u0432\u0430\u0436\u043D\u043E ", React.createElement("span", {
      className: "grad-text"
    }, "\u0437\u043D\u0430\u0442\u044C")),
    text: "\u041E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u0447\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043A\u043B\u0443\u0431\u0430 \u0438 \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F."
  }), React.createElement("section", {
    className: "py-16 sm:py-24"
  }, React.createElement(Wrap, {
    className: "max-w-4xl"
  }, React.createElement(FaqList, {
    items: FAQ
  }))), React.createElement("section", {
    className: "pb-16 sm:pb-24"
  }, React.createElement(Wrap, {
    className: "grid lg:grid-cols-3 gap-4"
  }, Object.entries(RULES).map(([t, list]) => React.createElement("div", {
    key: t,
    className: "rounded-[28px] bg-white ring-1 ring-plum/10 p-7"
  }, React.createElement("h3", {
    className: "font-display font-bold text-xl"
  }, t), React.createElement("ul", {
    className: "mt-4 space-y-3"
  }, list.map(r => React.createElement("li", {
    key: r,
    className: "flex gap-3 text-[15px] text-plum/75"
  }, React.createElement("span", {
    className: "mt-1.5 w-2 h-2 hex grad shrink-0"
  }), r)))))), React.createElement(Wrap, {
    className: "mt-6"
  }, React.createElement("div", {
    className: "rounded-[28px] bg-lilac p-7 sm:p-10"
  }, React.createElement("div", {
    className: "flex items-center gap-3"
  }, React.createElement(Icon, {
    name: "TriangleAlert",
    className: "w-7 h-7 text-fuchsia"
  }), React.createElement("h3", {
    className: "font-display font-bold text-xl"
  }, "\u041F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F")), React.createElement("p", {
    className: "mt-3 text-plum/60"
  }, "\u0415\u0441\u043B\u0438 \u0447\u0442\u043E-\u0442\u043E \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u0430\u0441\u0430\u0435\u0442\u0441\u044F \u0442\u0435\u0431\u044F \u2014 \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u0443\u0439\u0441\u044F \u0441 \u0432\u0440\u0430\u0447\u043E\u043C \u043F\u0435\u0440\u0435\u0434 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u043E\u0439."), React.createElement("div", {
    className: "mt-5 flex flex-wrap gap-2"
  }, CONTRA.map(c => React.createElement("span", {
    key: c,
    className: "rounded-full bg-white px-4 py-2 text-sm font-semibold"
  }, c)))))), React.createElement(FinalCta, null));
}
function ContactsPage() {
  const {
    openBooking,
    city,
    toast
  } = useApp();
  return React.createElement(React.Fragment, null, React.createElement(PageHero, {
    eyebrow: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
    title: React.createElement(React.Fragment, null, "\u041A\u0430\u043A \u043D\u0430\u0441 ", React.createElement("span", {
      className: "grad-text"
    }, "\u043D\u0430\u0439\u0442\u0438")),
    text: "\u0412\u0445\u043E\u0434 \u0432 \u043E\u0431\u043E\u0438\u0445 \u0444\u0438\u043B\u0438\u0430\u043B\u0430\u0445 \u043D\u0435\u043E\u0447\u0435\u0432\u0438\u0434\u043D\u044B\u0439 \u2014 \u043C\u044B \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043B\u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442 \u043F\u043E \u0448\u0430\u0433\u0430\u043C."
  }, React.createElement("div", {
    className: "mt-8 flex flex-wrap gap-3"
  }, React.createElement(Btn, {
    href: BRAND.instagram,
    external: true,
    icon: "Instagram"
  }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Instagram"), React.createElement(Btn, {
    variant: "light",
    onClick: () => toast('Номер телефона добавим после согласования'),
    icon: "Phone"
  }, "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C"))), React.createElement("section", {
    className: "py-16 sm:py-24"
  }, React.createElement(Wrap, {
    className: "space-y-8"
  }, Object.values(CITIES).map(c => React.createElement("div", {
    key: c.id,
    className: cx('rounded-[36px] bg-white ring-1 overflow-hidden grid lg:grid-cols-[1fr_1.1fr]', city === c.id ? 'ring-fuchsia/40 shadow-xl shadow-fuchsia/10' : 'ring-plum/10')
  }, React.createElement("div", {
    className: "p-7 sm:p-10"
  }, React.createElement("div", {
    className: "inline-flex items-center gap-2 rounded-full bg-lilac px-3 py-1 text-sm font-bold text-violet"
  }, React.createElement(Icon, {
    name: "MapPin",
    className: "w-4 h-4"
  }), "\u0424\u0438\u043B\u0438\u0430\u043B"), React.createElement("h2", {
    className: "mt-4 font-display font-black text-4xl"
  }, c.name), React.createElement("p", {
    className: "mt-2 text-lg font-bold"
  }, c.address), React.createElement("ol", {
    className: "mt-6 space-y-4"
  }, c.route.map((r, i) => React.createElement("li", {
    key: r,
    className: "flex gap-4"
  }, React.createElement("span", {
    className: "grid place-items-center w-9 h-9 shrink-0 hex grad text-white font-bold text-sm"
  }, i + 1), React.createElement("span", {
    className: "pt-1.5 text-plum/75"
  }, r)))), React.createElement("div", {
    className: "mt-6 space-y-2 text-sm"
  }, React.createElement("p", {
    className: "flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "Phone",
    className: "w-4 h-4 text-fuchsia"
  }), "+995 (59) 791-\u2026 ", React.createElement(Todo, null, "\u043F\u043E\u043B\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440")), React.createElement("p", {
    className: "flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "Clock",
    className: "w-4 h-4 text-fuchsia"
  }), "\u0427\u0430\u0441\u044B \u0440\u0430\u0431\u043E\u0442\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 ", React.createElement(Todo, null))), React.createElement("div", {
    className: "mt-7 flex flex-wrap gap-2"
  }, React.createElement(Btn, {
    size: "sm",
    href: c.map,
    external: true,
    icon: "Navigation"
  }, "\u041F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442"), React.createElement(Btn, {
    size: "sm",
    variant: "outline",
    onClick: () => openBooking({
      city: c.id
    }),
    icon: "Zap"
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"))), c.id === 'batumi' ? React.createElement("div", {
    className: "grid grid-cols-2 gap-1 bg-lilac min-h-[320px]"
  }, React.createElement("img", {
    src: "img/route-map.webp",
    alt: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u043E\u0442 Batumi Mall \u0434\u043E \u0441\u0442\u0443\u0434\u0438\u0438",
    className: "w-full h-full object-cover"
  }), React.createElement("img", {
    src: "img/route-building.webp",
    alt: "\u0417\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0413\u043E\u0440\u0433\u0438\u043B\u0430\u0434\u0437\u0435, 91",
    className: "w-full h-full object-cover"
  })) : React.createElement(Ph, {
    tone: "violet",
    className: "min-h-[320px]",
    icon: "Map",
    label: "\u0424\u043E\u0442\u043E \u0432\u0445\u043E\u0434\u0430 \u0438 \u043F\u043E\u0434\u044A\u0435\u0437\u0434\u0430 \u2014 \u0441\u043D\u044F\u0442\u044C"
  }))))), React.createElement("section", {
    className: "pb-8"
  }, React.createElement(Wrap, null, React.createElement("div", {
    className: "rounded-[36px] bg-plum text-white p-8 sm:p-12 relative overflow-hidden grid lg:grid-cols-2 gap-8 items-center"
  }, React.createElement("div", {
    className: "absolute inset-0 hex-pattern"
  }), React.createElement("div", {
    className: "relative"
  }, React.createElement(H2, {
    light: true
  }, "\u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B?"), React.createElement("p", {
    className: "mt-3 text-white/70"
  }, "\u041E\u0441\u0442\u0430\u0432\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u2014 \u043E\u0442\u0432\u0435\u0442\u0438\u043C, \u043F\u043E\u0434\u0431\u0435\u0440\u0451\u043C \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443 \u0438 \u0437\u0430\u043F\u0438\u0448\u0435\u043C.")), React.createElement("div", {
    className: "relative flex flex-wrap gap-3 lg:justify-end"
  }, React.createElement(Btn, {
    variant: "lime",
    onClick: () => openBooking({
      type: 'question'
    }),
    icon: "MessageCircle"
  }, "\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441"), React.createElement(Btn, {
    variant: "light",
    href: "#/faq"
  }, "FAQ"))))), React.createElement("div", {
    className: "h-16"
  }));
}
function NotFound() {
  return React.createElement(PageHero, {
    eyebrow: "404",
    title: "\u041A\u0430\u0436\u0435\u0442\u0441\u044F, \u043C\u044B \u043F\u0435\u0440\u0435\u043F\u0440\u044B\u0433\u043D\u0443\u043B\u0438 \u044D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
    text: "\u0422\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435\u0442 \u2014 \u043D\u043E \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435."
  }, React.createElement("div", {
    className: "mt-8 flex flex-wrap gap-3"
  }, React.createElement(Btn, {
    href: "#/"
  }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"), React.createElement(Btn, {
    variant: "light",
    href: "#/schedule"
  }, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435")));
}
function App() {
  const route = useRoute();
  const [city, setCityState] = useState(() => {
    try {
      return localStorage.getItem('jg-city') || 'batumi';
    } catch (e) {
      return 'batumi';
    }
  });
  const setCity = c => {
    setCityState(c);
    try {
      localStorage.setItem('jg-city', c);
    } catch (e) {}
  };
  const [modal, setModal] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);
  const tRef = useRef();
  const toast = m => {
    setToastMsg({
      m,
      k: Date.now()
    });
    clearTimeout(tRef.current);
    tRef.current = setTimeout(() => setToastMsg(null), 3200);
  };
  const ctx = useMemo(() => ({
    city,
    setCity,
    openBooking: (p = {}) => setModal(p),
    toast
  }), [city]);
  useEffect(() => {
    scrollTo(0, 0);
  }, [route]);
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }), {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });
    const t = setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el)), 30);
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, [route, city]);
  let page;
  const parts = route.split('/').filter(Boolean);
  switch (parts[0]) {
    case undefined:
      page = React.createElement(Home, null);
      break;
    case 'directions':
      page = parts[1] ? React.createElement(DirectionPage, {
        id: parts[1],
        key: parts[1]
      }) : React.createElement(DirectionsPage, null);
      break;
    case 'schedule':
      page = React.createElement(SchedulePage, null);
      break;
    case 'about':
      page = React.createElement(AboutPage, null);
      break;
    case 'academy':
      page = React.createElement(AcademyPage, null);
      break;
    case 'events':
      page = React.createElement(EventsPage, null);
      break;
    case 'faq':
      page = React.createElement(FaqPage, null);
      break;
    case 'contacts':
      page = React.createElement(ContactsPage, null);
      break;
    default:
      page = React.createElement(NotFound, null);
  }
  return React.createElement(Ctx.Provider, {
    value: ctx
  }, React.createElement(Header, {
    route: route
  }), React.createElement("main", null, page), React.createElement(Footer, null), React.createElement(Floating, null), modal && React.createElement(BookingModal, {
    preset: modal,
    onClose: () => setModal(null)
  }), toastMsg && React.createElement("div", {
    key: toastMsg.k,
    className: "pop fixed left-1/2 -translate-x-1/2 bottom-24 sm:bottom-8 z-[70] max-w-[92vw] rounded-full bg-plum text-white text-sm font-semibold px-5 py-3 shadow-2xl flex items-center gap-2"
  }, React.createElement(Icon, {
    name: "Info",
    className: "w-4 h-4 text-lime shrink-0"
  }), toastMsg.m));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
})();
