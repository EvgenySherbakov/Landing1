import {
  Droplets,
  Sparkles,
  ShieldCheck,
  Armchair,
  Gauge,
  Wind,
  Clock,
  Leaf,
  Users,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  text: string;
  /** размер плитки в bento-сетке */
  span: "lg" | "md" | "sm";
}

export const services: Service[] = [
  {
    icon: Droplets,
    title: "Бесконтактная мойка",
    text: "Мойка кузова без контакта с поверхностью — бережно удаляем грязь, не царапая лак.",
    span: "lg",
  },
  {
    icon: ShieldCheck,
    title: "Нанокерамика",
    text: "Защитное покрытие с гидрофобным эффектом и блеском до 12 месяцев.",
    span: "md",
  },
  {
    icon: Armchair,
    title: "Химчистка салона",
    text: "Глубокая очистка сидений, ковров и пластика. Убираем пятна и запахи.",
    span: "md",
  },
  {
    icon: Sparkles,
    title: "Полировка кузова",
    text: "Восстанавливаем блеск и убираем мелкие царапины.",
    span: "sm",
  },
  {
    icon: Gauge,
    title: "Мойка двигателя",
    text: "Безопасная очистка моторного отсека.",
    span: "sm",
  },
  {
    icon: Wind,
    title: "Комплекс «Премиум»",
    text: "Всё включено: мойка, химчистка, полировка и обработка салона.",
    span: "lg",
  },
];

export interface Plan {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    name: "Эконом",
    price: "500",
    features: ["Мойка кузова", "Сушка", "Очистка стёкол", "Чистка ковриков"],
  },
  {
    name: "Стандарт",
    price: "1 200",
    featured: true,
    features: [
      "Всё из «Эконом»",
      "Чернение шин",
      "Полировка воском",
      "Чистка салона пылесосом",
      "Ароматизация",
    ],
  },
  {
    name: "Премиум",
    price: "2 800",
    features: [
      "Всё из «Стандарт»",
      "Химчистка салона",
      "Глубокая полировка",
      "Защитное покрытие",
      "Мойка двигателя",
    ],
  },
];

export interface Advantage {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const advantages: Advantage[] = [
  { icon: Clock, title: "Быстро", text: "Средняя мойка — 20 минут. Ценим ваше время." },
  { icon: Leaf, title: "Экологично", text: "Безопасная химия и оборотное водоснабжение." },
  { icon: Users, title: "Профессионалы", text: "Опытная команда с многолетним стажем." },
  { icon: CreditCard, title: "Удобная оплата", text: "Наличные, карты, СБП и онлайн." },
];

export interface Review {
  name: string;
  car: string;
  text: string;
  initial: string;
}

export const reviews: Review[] = [
  {
    name: "Алексей М.",
    car: "Toyota Camry",
    initial: "А",
    text: "Машину помыли идеально, салон как новый. Быстро и недорого. Теперь только сюда!",
  },
  {
    name: "Елена К.",
    car: "Kia Sportage",
    initial: "Е",
    text: "Делала химчистку после поездки с детьми. Результат превзошёл ожидания, ни следа от пятен.",
  },
  {
    name: "Дмитрий В.",
    car: "BMW X5",
    initial: "Д",
    text: "Нанесли керамику — кузов блестит уже полгода, грязь почти не липнет. Рекомендую!",
  },
];

export const planNames = plans.map((p) => p.name);
