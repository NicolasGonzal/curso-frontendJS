const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


navEmail.addEventListener('click', toggleDesktopMenu);
btnMobile.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive'); 
}