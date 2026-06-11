import { Star } from "lucide-react";
import { reviews } from "../data";
import { Reveal } from "./Reveal";

export function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__tag">Отзывы клиентов</p>
          <h2 className="section__title">Нам доверяют</h2>
          <p className="section__desc">Средняя оценка 4.9 из 5 по более чем 2 000 отзывов</p>
        </Reveal>

        <div className="reviews">
          {reviews.map((r, i) => (
            <Reveal key={r.name} as="article" delay={i * 80} className="glass review-card">
              <div className="review-card__stars" aria-label="Оценка 5 из 5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="review-card__text">«{r.text}»</p>
              <div className="review-card__author">
                <span className="review-card__avatar">{r.initial}</span>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.car}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
