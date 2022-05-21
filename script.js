const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const close = document.querySelector('.close');

hamburger.addEventListener('click', ()=>{
    nav.classList.add('nav-links-active');
})

close.addEventListener('click', ()=>{
    nav.classList.remove('nav-links-active');
})