import { useEffect, useState } from "react";
import { Droplets, Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#pricing", label: "Цены" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#hero" className="logo" aria-label="АкваБлеск — на главную">
          <Droplets size={26} className="logo__mark" />
          <span>
            Аква<span className="logo__accent">Блеск</span>
          </span>
        </a>

        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Основная навигация">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="tel:+74951234567" className="header__phone">
          <Phone size={18} />
          <span>+7 (495) 123-45-67</span>
        </a>

        <button
          className="burger"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
