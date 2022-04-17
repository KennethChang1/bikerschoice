const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav__links');

hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('hidden');
})