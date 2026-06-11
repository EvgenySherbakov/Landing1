import { Star, ArrowRight } from "lucide-react";

const stats = [
  { num: "15 000+", label: "довольных клиентов" },
  { num: "20 мин", label: "средняя мойка" },
  { num: "4.9 / 5", label: "рейтинг сервиса" },
];

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__content">
        <p className="badge">
          <Star size={15} />
          Работаем с 2010 года · рейтинг 4.9
        </p>
        <h1 className="hero__title">
          Идеальная чистота<br />
          вашего <span className="text-gradient">автомобиля</span>
        </h1>
        <p className="hero__subtitle">
          Бесконтактная мойка и детейлинг за 20 минут. Современное оборудование,
          безопасная химия и команда профессионалов.
        </p>
        <div className="hero__actions">
          <a href="#contacts" className="btn btn--primary">
            Записаться онлайн
            <ArrowRight size={18} />
          </a>
          <a href="#services" className="btn btn--glass">
            Наши услуги
          </a>
        </div>

        <dl className="hero__stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt className="stat__num">{s.num}</dt>
              <dd className="stat__label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
