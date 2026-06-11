import { Droplets } from "lucide-react";

const menu = [
  { href: "#services", label: "Услуги" },
  { href: "#pricing", label: "Цены" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#hero" className="logo" aria-label="АкваБлеск — на главную">
            <Droplets size={26} className="logo__mark" />
            <span>
              Аква<span className="logo__accent">Блеск</span>
            </span>
          </a>
          <p>
            Автомойка и детейлинг премиум-класса в Москве. Чистота, скорость и забота
            о вашем авто.
          </p>
        </div>

        <nav className="footer__col" aria-label="Меню в подвале">
          <h4>Меню</h4>
          {menu.map((m) => (
            <a key={m.href} href={m.href}>
              {m.label}
            </a>
          ))}
        </nav>

        <div className="footer__col">
          <h4>Контакты</h4>
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
          <a href="mailto:info@aquablesk.ru">info@aquablesk.ru</a>
          <span>г. Москва, ул. Автомобильная, 15</span>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>© 2026 АкваБлеск. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
