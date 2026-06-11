// Шапка: тень при прокрутке
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 20);
});

// Мобильное меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Закрытие меню при клике по ссылке
nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Анимация появления секций при прокрутке
const revealEls = document.querySelectorAll(
    '.service-card, .price-card, .advantage, .review-card, .section__head, .contacts__info, .form'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// Маска телефона
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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Здесь можно отправить данные на сервер (fetch / API)
    formSuccess.classList.add('show');
    form.reset();
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
});
