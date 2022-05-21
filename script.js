const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const close = document.querySelector('.close');
const body = document.querySelector('body');

hamburger.addEventListener('click', ()=>{
    nav.classList.add('nav-links-active');
    body.classList.add('no-scroll');
})

close.addEventListener('click', ()=>{
    nav.classList.remove('nav-links-active');
    body.classList.remove('no-scroll');
})