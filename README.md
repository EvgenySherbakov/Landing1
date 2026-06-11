# АкваБлеск — лендинг автомойки (React)

Современный одностраничный лендинг для автомойки и детейлинга на **React + TypeScript + Vite**.
Дизайн построен по методологии скилла **ui-ux-pro-max**.

## Дизайн-система

- **Стиль** — Modern Dark / Liquid Glass: тёмная тема, glassmorphism, ambient-блобы, мягкое свечение.
- **Паттерн** — Bento Grid для блока услуг.
- **Палитра** — глубокий тёмный фон + акценты aqua `#22D3EE` → indigo `#6366F1` (градиент, под бренд «АкваБлеск»).
- **Типографика** — Inter.
- **Иконки** — `lucide-react` (SVG, без эмодзи).
- **Доступность** — focus-states, `aria`-метки, поддержка `prefers-reduced-motion`, адаптив 375 / 768 / 992 / 1200 px.

## Технологии

- React 18 + TypeScript
- Vite 5
- lucide-react (иконки)
- Без бэкенда — чистый статический сайт

## Структура

```
frontend/
  index.html
  src/
    main.tsx
    App.tsx
    index.css          # дизайн-токены и все стили
    data.ts            # услуги, тарифы, отзывы
    hooks/useReveal.ts # появление при скролле
    components/        # Header, Hero, Services, Pricing, Advantages, Reviews, Contact, Footer
```

## Запуск локально

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
```

Сборка production:

```bash
npm run build    # результат в frontend/dist
npm run preview  # предпросмотр сборки
```

## Деплой

Публикуется на **GitHub Pages** автоматически через GitHub Actions
(`.github/workflows/pages.yml`) при пуше в ветку. Сборка идёт с `base=/<repo>/`.

Адрес: **https://evgenysherbakov.github.io/Landing1/**

## Форма записи

Форма работает без бэкенда. Чтобы заявки уходили в вашу систему
(CRM, Telegram-бот, Formspree и т. п.), задайте переменную окружения при сборке:

```bash
VITE_BOOKING_ENDPOINT="https://example.com/booking" npm run build
```

Если переменная не задана — форма показывает подтверждение на клиенте.

## Что заменить перед публикацией

- Название/логотип, телефон, e-mail, адрес
- Ссылку WhatsApp (`src/App.tsx`)
- Цены и услуги (`src/data.ts`)
- Endpoint формы (`VITE_BOOKING_ENDPOINT`)
