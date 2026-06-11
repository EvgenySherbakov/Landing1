<div align="center">

# 💧 АкваБлеск — Car Wash Landing Page

**A modern single-page landing for a car wash & detailing studio, built with React + TypeScript + Vite.**

[English](#-english) · [Русский](#-русский)

</div>

---

## 🇬🇧 English

### Overview

**АкваБлеск** ("AquaShine") is a production-ready, single-page marketing site for a car wash and
auto-detailing business. It is a fully static React application — no backend required — designed to be
deployed anywhere (GitHub Pages, Netlify, Vercel, any static host) and wired to a CRM or messenger
whenever you need lead capture.

The visual design follows the **ui-ux-pro-max** design-intelligence methodology: a *Modern Dark /
Liquid Glass* style with a *Bento Grid* layout, accessible color contrast, motion that respects user
preferences, and SVG icons throughout.

> **Live demo:** https://evgenysherbakov.github.io/Landing1/

### Features

- ⚡️ **Fast & static** — pure client-side React, instant loads, deployable to any static host.
- 🎨 **Modern dark UI** — glassmorphism surfaces, animated ambient light blobs, gradient accents.
- 🧩 **Bento-grid services** — scannable, high-density layout for the service catalog.
- 📱 **Fully responsive** — mobile-first, tested at 375 / 768 / 992 / 1200 px breakpoints.
- ♿️ **Accessible** — visible focus states, ARIA labels, `prefers-reduced-motion` support, 4.5:1 contrast.
- ✨ **Scroll reveal animations** — content fades in on scroll via `IntersectionObserver`.
- 📝 **Smart booking form** — phone-mask, client-side validation, pluggable submit endpoint.
- 🔌 **Zero-config deploy** — GitHub Actions workflow builds and publishes to GitHub Pages on push.

### Sections

| Section | Description |
|---------|-------------|
| **Header** | Sticky glass navbar, mobile burger menu, click-to-call phone. |
| **Hero** | Headline, gradient accent, animated blobs, CTA buttons, key stats. |
| **Services** | Bento grid of six services (each with an SVG icon). |
| **Pricing** | Three tariff cards (Эконом / Стандарт / Премиум), featured plan highlighted. |
| **Advantages** | Four reasons to choose the studio. |
| **Reviews** | Customer testimonials with star ratings. |
| **Contacts** | Address, hours, phone, email + an online booking form. |
| **Footer** | Brand, navigation, contacts. |
| **Floating button** | WhatsApp quick-contact button. |

### Design System (ui-ux-pro-max)

| Token | Value |
|-------|-------|
| **Style** | Modern Dark / Liquid Glass |
| **Pattern** | Bento Grid Showcase |
| **Accent** | Aqua `#22D3EE` → Indigo `#6366F1` gradient |
| **Background** | Deep `#050507` / Base `#0A0A10` |
| **Foreground** | `#EDEDF2` (primary), `#9AA0AD` (muted) |
| **Typography** | Inter (300–800) |
| **Icons** | `lucide-react` (SVG only — no emoji) |
| **Radius** | 22px (cards), 14px (inputs) |
| **Easing** | `cubic-bezier(0.16, 1, 0.3, 1)` |

### Tech Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite 5** (build tooling & dev server)
- **lucide-react** (icon set)
- No backend, no CSS framework — hand-written CSS with design tokens.

### Project Structure

```
Landing1/
├─ .github/workflows/pages.yml   # CI: build + deploy to GitHub Pages
├─ frontend/
│  ├─ index.html                 # HTML entry, fonts
│  ├─ package.json
│  ├─ vite.config.ts             # base path + dev API proxy
│  ├─ tsconfig*.json
│  └─ src/
│     ├─ main.tsx                # React entry point
│     ├─ App.tsx                 # page composition
│     ├─ index.css               # design tokens + all styles
│     ├─ data.ts                 # services, plans, reviews (content)
│     ├─ hooks/useReveal.ts      # scroll-reveal hook
│     └─ components/
│        ├─ Header.tsx
│        ├─ Hero.tsx
│        ├─ Services.tsx         # bento grid
│        ├─ Pricing.tsx
│        ├─ Advantages.tsx
│        ├─ Reviews.tsx
│        ├─ Contact.tsx          # booking form
│        ├─ Footer.tsx
│        └─ Reveal.tsx           # reveal wrapper component
└─ README.md
```

### Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Clone and switch to the branch
git clone https://github.com/evgenysherbakov/landing1.git
cd landing1/frontend

# 2. Install dependencies
npm install

# 3. Start the dev server (http://localhost:5173)
npm run dev
```

**Production build:**

```bash
npm run build      # outputs to frontend/dist
npm run preview    # preview the production build locally
```

### Configuration

#### Booking form endpoint

The form works out of the box: with no endpoint configured it validates input and shows a success
message client-side. To deliver leads to your system (CRM, Telegram bot, Formspree, etc.), set an
environment variable at build time:

```bash
VITE_BOOKING_ENDPOINT="https://your-service.example/booking" npm run build
```

The form will `POST` JSON `{ name, phone, service }` to that URL.

#### Base path

For project-style GitHub Pages the site is served from `/<repo>/`. The build reads `VITE_BASE`:

```bash
VITE_BASE="/Landing1/" npm run build   # for GitHub Pages
VITE_BASE="/" npm run build            # for a root domain
```

The CI workflow sets this automatically from the repository name.

### Deployment

Pushing to the working branch triggers **`.github/workflows/pages.yml`**, which:

1. Installs dependencies (`npm ci`).
2. Builds the app with the correct base path.
3. Uploads `frontend/dist` and deploys it to **GitHub Pages**.

> **One-time setup:** in the repo go to **Settings → Pages → Build and deployment → Source** and select
> **GitHub Actions**. After that every push redeploys automatically.

You can also deploy `frontend/dist` to any static host (Netlify, Vercel, Cloudflare Pages, S3, Nginx).

### Customization

- **Text & content** — edit `src/data.ts` (services, plans, reviews) and the section components.
- **Brand name / logo** — `Header.tsx`, `Footer.tsx` (the `Droplets` icon + "АкваБлеск").
- **Contacts** — phone, email, address in `Contact.tsx` and `Footer.tsx`.
- **WhatsApp link** — `App.tsx`.
- **Colors / fonts / spacing** — CSS variables at the top of `src/index.css`.

### Accessibility

- Color contrast ≥ 4.5:1 for text.
- Visible keyboard focus rings on all interactive elements.
- ARIA labels for icon-only controls.
- `prefers-reduced-motion` disables animations for users who request it.
- Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`).

### License

MIT — free to use and modify. Replace the placeholder business data before going live.

---

## 🇷🇺 Русский

### Обзор

**АкваБлеск** — готовый к публикации одностраничный сайт для автомойки и детейлинг-студии.
Это полностью статическое React-приложение — **бэкенд не нужен**. Сайт можно развернуть где угодно
(GitHub Pages, Netlify, Vercel, любой статический хостинг) и при необходимости подключить к CRM или
мессенджеру для приёма заявок.

Дизайн построен по методологии **ui-ux-pro-max**: стиль *Modern Dark / Liquid Glass* с раскладкой
*Bento Grid*, доступным контрастом, анимациями, уважающими настройки пользователя, и SVG-иконками.

> **Демо:** https://evgenysherbakov.github.io/Landing1/

### Возможности

- ⚡️ **Быстрый и статичный** — чистый клиентский React, мгновенная загрузка, любой статический хостинг.
- 🎨 **Современный тёмный UI** — стеклянные поверхности, анимированные световые блобы, градиентные акценты.
- 🧩 **Услуги в bento-сетке** — наглядная, информативная раскладка каталога.
- 📱 **Адаптивность** — mobile-first, проверено на 375 / 768 / 992 / 1200 px.
- ♿️ **Доступность** — видимый фокус, ARIA-метки, поддержка `prefers-reduced-motion`, контраст 4.5:1.
- ✨ **Анимации появления** — контент плавно проявляется при прокрутке (`IntersectionObserver`).
- 📝 **Умная форма записи** — маска телефона, валидация, подключаемый endpoint.
- 🔌 **Деплой без настройки** — GitHub Actions собирает и публикует на GitHub Pages при пуше.

### Разделы

| Раздел | Описание |
|--------|----------|
| **Шапка** | Залипающая стеклянная навигация, бургер-меню на мобильных, клик-звонок. |
| **Hero** | Заголовок, градиентный акцент, анимированные блобы, кнопки CTA, статистика. |
| **Услуги** | Bento-сетка из шести услуг (у каждой — SVG-иконка). |
| **Тарифы** | Три карточки (Эконом / Стандарт / Премиум), популярный выделен. |
| **Преимущества** | Четыре причины выбрать студию. |
| **Отзывы** | Отзывы клиентов со звёздным рейтингом. |
| **Контакты** | Адрес, часы, телефон, e-mail + форма онлайн-записи. |
| **Подвал** | Бренд, навигация, контакты. |
| **Плавающая кнопка** | Быстрая связь через WhatsApp. |

### Дизайн-система (ui-ux-pro-max)

| Токен | Значение |
|-------|----------|
| **Стиль** | Modern Dark / Liquid Glass |
| **Паттерн** | Bento Grid |
| **Акцент** | Градиент aqua `#22D3EE` → indigo `#6366F1` |
| **Фон** | Глубокий `#050507` / базовый `#0A0A10` |
| **Текст** | `#EDEDF2` (основной), `#9AA0AD` (приглушённый) |
| **Типографика** | Inter (300–800) |
| **Иконки** | `lucide-react` (только SVG, без эмодзи) |
| **Скругление** | 22px (карточки), 14px (поля) |
| **Easing** | `cubic-bezier(0.16, 1, 0.3, 1)` |

### Технологии

- **React 18** + **TypeScript** (strict-режим)
- **Vite 5** (сборка и dev-сервер)
- **lucide-react** (иконки)
- Без бэкенда и CSS-фреймворков — собственный CSS на дизайн-токенах.

### Структура проекта

```
Landing1/
├─ .github/workflows/pages.yml   # CI: сборка + публикация на GitHub Pages
├─ frontend/
│  ├─ index.html                 # HTML-вход, шрифты
│  ├─ package.json
│  ├─ vite.config.ts             # base-путь + dev-прокси API
│  ├─ tsconfig*.json
│  └─ src/
│     ├─ main.tsx                # точка входа React
│     ├─ App.tsx                 # сборка страницы
│     ├─ index.css               # дизайн-токены + все стили
│     ├─ data.ts                 # услуги, тарифы, отзывы (контент)
│     ├─ hooks/useReveal.ts      # хук появления при скролле
│     └─ components/
│        ├─ Header.tsx
│        ├─ Hero.tsx
│        ├─ Services.tsx         # bento-сетка
│        ├─ Pricing.tsx
│        ├─ Advantages.tsx
│        ├─ Reviews.tsx
│        ├─ Contact.tsx          # форма записи
│        ├─ Footer.tsx
│        └─ Reveal.tsx           # обёртка анимации появления
└─ README.md
```

### Запуск

**Требования:** Node.js 18+ и npm.

```bash
# 1. Клонировать и перейти в проект
git clone https://github.com/evgenysherbakov/landing1.git
cd landing1/frontend

# 2. Установить зависимости
npm install

# 3. Запустить dev-сервер (http://localhost:5173)
npm run dev
```

**Production-сборка:**

```bash
npm run build      # результат в frontend/dist
npm run preview    # локальный предпросмотр сборки
```

### Настройка

#### Endpoint формы записи

Форма работает «из коробки»: если endpoint не задан, она валидирует ввод и показывает подтверждение
на клиенте. Чтобы заявки уходили в вашу систему (CRM, Telegram-бот, Formspree и т. п.), задайте
переменную окружения при сборке:

```bash
VITE_BOOKING_ENDPOINT="https://your-service.example/booking" npm run build
```

Форма отправит `POST` с JSON `{ name, phone, service }` на этот адрес.

#### Base-путь

Для project-страницы GitHub Pages сайт отдаётся из `/<repo>/`. Сборка читает `VITE_BASE`:

```bash
VITE_BASE="/Landing1/" npm run build   # для GitHub Pages
VITE_BASE="/" npm run build            # для корневого домена
```

В CI-workflow это значение подставляется автоматически из имени репозитория.

### Деплой

Пуш в рабочую ветку запускает **`.github/workflows/pages.yml`**, который:

1. Устанавливает зависимости (`npm ci`).
2. Собирает приложение с правильным base-путём.
3. Загружает `frontend/dist` и публикует на **GitHub Pages**.

> **Разовая настройка:** в репозитории откройте **Settings → Pages → Build and deployment → Source** и
> выберите **GitHub Actions**. После этого каждый пуш будет публиковаться автоматически.

Папку `frontend/dist` также можно развернуть на любом статическом хостинге (Netlify, Vercel,
Cloudflare Pages, S3, Nginx).

### Кастомизация

- **Тексты и контент** — `src/data.ts` (услуги, тарифы, отзывы) и компоненты разделов.
- **Название / логотип** — `Header.tsx`, `Footer.tsx` (иконка `Droplets` + «АкваБлеск»).
- **Контакты** — телефон, e-mail, адрес в `Contact.tsx` и `Footer.tsx`.
- **Ссылка WhatsApp** — `App.tsx`.
- **Цвета / шрифты / отступы** — CSS-переменные в начале `src/index.css`.

### Доступность

- Контраст текста ≥ 4.5:1.
- Видимая фокус-обводка на всех интерактивных элементах.
- ARIA-метки для иконочных кнопок.
- `prefers-reduced-motion` отключает анимации по запросу пользователя.
- Семантическая вёрстка (`header`, `nav`, `main`, `section`, `article`, `footer`).

### Лицензия

MIT — свободно используйте и изменяйте. Перед публикацией замените тестовые данные на реальные.
