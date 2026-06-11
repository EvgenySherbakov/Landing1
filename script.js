// Шапка: тень и граница при прокрутке
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('header--scrolled', window.scrollY > 16);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Мобильное меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

const closeMenu = () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
};

burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('active');
    nav.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
});

nav.querySelectorAll('.nav__link').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

// Анимация появления секций при прокрутке
const revealEls = document.querySelectorAll(
    '.service-card, .price-card, .advantage, .review-card, .section__head, .contacts__info, .form'
);
revealEls.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => observer.observe(el));
} else {
    revealEls.forEach((el) => el.classList.add('visible'));
}

// Маска телефона +7 (___) ___-__-__
const phoneInput = document.querySelector('input[name="phone"]');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.startsWith('8')) value = '7' + value.slice(1);
        if (value.startsWith('7')) value = value.slice(1);
        value = value.slice(0, 10);

        let formatted = '+7';
        if (value.length > 0) formatted += ' (' + value.slice(0, 3);
        if (value.length >= 3) formatted += ') ' + value.slice(3, 6);
        if (value.length >= 6) formatted += '-' + value.slice(6, 8);
        if (value.length >= 8) formatted += '-' + value.slice(8, 10);
        e.target.value = formatted;
    });
}

// Отправка формы записи
const form = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.elements.name;
        const phone = form.elements.phone;
        let valid = true;

        // Простая валидация с фокусом на первое некорректное поле
        [name, phone].forEach((field) => field.removeAttribute('aria-invalid'));
        if (!name.value.trim()) {
            name.setAttribute('aria-invalid', 'true');
            valid = false;
        }
        if (phone.value.replace(/\D/g, '').length < 11) {
            phone.setAttribute('aria-invalid', 'true');
            if (valid) valid = false;
        }
        if (!valid) {
            form.querySelector('[aria-invalid="true"]').focus();
            return;
        }

        // Индикатор загрузки (имитация запроса; здесь подключите ваш backend/CRM)
        const submitBtn = form.querySelector('button[type="submit"]');
        const original = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Отправляем…';

        setTimeout(() => {
            formSuccess.classList.add('show');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = original;
            setTimeout(() => formSuccess.classList.remove('show'), 5000);
        }, 700);
    });
}
