import { advantages } from "../data";
import { Reveal } from "./Reveal";

export function Advantages() {
  return (
    <section className="section" id="advantages">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__tag">Почему выбирают нас</p>
          <h2 className="section__title">Наши преимущества</h2>
        </Reveal>

        <div className="advantages">
          {advantages.map((a, i) => (
            <Reveal key={a.title} delay={i * 70} className="glass advantage">
              <div className="advantage__icon">
                <a.icon size={26} />
              </div>
              <h3 className="advantage__title">{a.title}</h3>
              <p className="advantage__text">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
