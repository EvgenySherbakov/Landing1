import { services } from "../data";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__tag">Что мы предлагаем</p>
          <h2 className="section__title">Наши услуги</h2>
          <p className="section__desc">
            Полный спектр ухода за автомобилем — от экспресс-мойки до детейлинга
          </p>
        </Reveal>

        <div className="bento">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={i * 60}
              className={`glass bento__item bento__item--${s.span}`}
            >
              <div className="bento__icon">
                <s.icon size={24} />
              </div>
              <h3 className="bento__title">{s.title}</h3>
              <p className="bento__text">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
