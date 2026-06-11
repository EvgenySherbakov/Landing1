import { useState, type FormEvent } from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { planNames } from "../data";
import { Reveal } from "./Reveal";

// Если задан VITE_BOOKING_ENDPOINT — заявка уйдёт туда (CRM/Telegram/Formspree).
// Иначе показываем подтверждение на клиенте (готово к подключению позже).
const ENDPOINT = import.meta.env.VITE_BOOKING_ENDPOINT as string | undefined;

const contacts = [
  { icon: MapPin, node: "г. Москва, ул. Автомобильная, 15" },
  { icon: Clock, node: "Ежедневно с 8:00 до 22:00" },
  { icon: Phone, node: <a href="tel:+74951234567">+7 (495) 123-45-67</a> },
  { icon: Mail, node: <a href="mailto:info@aquablesk.ru">info@aquablesk.ru</a> },
];

function formatPhone(raw: string): string {
  let v = raw.replace(/\D/g, "");
  if (v.startsWith("8")) v = "7" + v.slice(1);
  if (v.startsWith("7")) v = v.slice(1);
  v = v.slice(0, 10);
  let out = "+7";
  if (v.length > 0) out += " (" + v.slice(0, 3);
  if (v.length >= 3) out += ") " + v.slice(3, 6);
  if (v.length >= 6) out += "-" + v.slice(6, 8);
  if (v.length >= 8) out += "-" + v.slice(8, 10);
  return out;
}

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(planNames[1]);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const phoneValid = phone.replace(/\D/g, "").length === 11;
  const nameValid = name.trim().length > 1;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nameValid || !phoneValid) return;
    setStatus("loading");
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, service }),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        await new Promise((r) => setTimeout(r, 600));
      }
      setStatus("done");
      setName("");
      setPhone("");
      setService(planNames[1]);
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section" id="contacts">
      <div className="container contacts">
        <Reveal className="contacts__info">
          <p className="section__tag">Онлайн-запись</p>
          <h2 className="section__title">Запишитесь на мойку</h2>
          <p className="section__desc">
            Оставьте заявку — перезвоним в течение 5 минут и подберём удобное время.
          </p>
          <ul className="contacts__list">
            {contacts.map((c, i) => (
              <li key={i}>
                <c.icon size={20} />
                {c.node}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" delay={100}>
          <form className="glass form" onSubmit={onSubmit} noValidate>
            <h3 className="form__title">Запись за 1 минуту</h3>

            <label className="form__field">
              <span className="form__label">Ваше имя *</span>
              <input
                className="form__input"
                type="text"
                placeholder="Иван"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="form__field">
              <span className="form__label">Телефон *</span>
              <input
                className="form__input"
                type="tel"
                inputMode="tel"
                placeholder="+7 (___) ___-__-__"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
              />
            </label>

            <label className="form__field">
              <span className="form__label">Услуга</span>
              <select
                className="form__input"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                {[...planNames, "Химчистка салона", "Нанокерамика"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="btn btn--primary btn--block"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Отправляем…" : "Записаться"}
            </button>

            <p className="form__note">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>

            {status === "done" && (
              <p className="form__alert form__alert--ok" role="status" aria-live="polite">
                Спасибо! Мы свяжемся с вами в ближайшее время.
              </p>
            )}
            {status === "error" && (
              <p className="form__alert form__alert--err" role="status" aria-live="polite">
                Не удалось отправить. Позвоните нам по телефону выше.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
