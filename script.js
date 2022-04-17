const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__li');
const brands = document.querySelectorAll('.nav--brand');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    close();
})

navLinks.forEach((element, index) => {
    navLinks[index].addEventListener('click', () => {
        brands[index].classList.toggle('active');
    });
});

function close(){
    brands.forEach((element, index) => {
        brands[index].classList.remove('active');
    });
}