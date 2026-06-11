import { Check } from "lucide-react";
import { plans } from "../data";
import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__tag">Прозрачные цены</p>
          <h2 className="section__title">Тарифы</h2>
          <p className="section__desc">Выберите подходящий пакет — без скрытых доплат</p>
        </Reveal>

        <div className="pricing">
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className={`glass price-card ${p.featured ? "price-card--featured" : ""}`}
            >
              {p.featured && <span className="price-card__badge">Популярный</span>}
              <h3 className="price-card__name">{p.name}</h3>
              <div className="price-card__price">
                от {p.price} <span>₽</span>
              </div>
              <ul className="price-card__list">
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contacts"
                className={`btn btn--block ${p.featured ? "btn--primary" : "btn--glass"}`}
              >
                Выбрать
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
