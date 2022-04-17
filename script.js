const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav__links');
const navLinks = document.querySelector('.nav__li');
const brands = document.querySelector('.nav--brand');

hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('active');
})

navLinks.addEventListener('click', ()=>{
    brands.classList.toggle('active');
})