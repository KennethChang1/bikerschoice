const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__li');
const brands = document.querySelectorAll('.nav--brand');
const links = document.querySelectorAll('.nav__sub');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    close();
    displayLink();
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

function displayLink(){
    navLinks.forEach((element)=>{
        if(element.style.animation){
            element.style.animation = "";
        } else{
            element.style.cssText = 'animation: link 0s forwards; animation-delay: 0.2s;';
        }
    });

    // links.forEach((element)=>{
    //     if(element.style.animation){
    //         element.style.animation = "";
    //     } else{
    //         element.style.cssText = 'animation: link 1s forwards; animation-delay: 0.2s;';
    //     }
    // });
}