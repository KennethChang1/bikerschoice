const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const close = document.querySelector('.close');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    nav.classList.add('nav-links-active');
    body.style.position = 'fixed';
    body.style.width = `100%`;
})

close.addEventListener('click', () => {
    nav.classList.remove('nav-links-active');
    body.classList.remove('no-scroll');
    body.style.position = '';
    body.style.width = ``;
})