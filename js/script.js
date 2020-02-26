const mainNav = document.querySelector('.main-nav');
// const navList = document.querySelector('.nav-list');
const hamMenu = document.querySelector('.ham-menu');

hamMenu.addEventListener('click', function() {
    mainNav.classList.toggle('open');
});

gsap.fromTo('.hero-clipped', {scaleX: 0}, {duration: 2, scaleX: 1});
gsap.fromTo('.logo', {x: -1500, opacity: 0}, {duration: 2, delay: .5, x: 0, opacity: 1});
gsap.fromTo('.ham-menu', {x: 200, opacity: 0}, {duration: 2, delay: .8, x: 0, opacity: 1});
gsap.fromTo('.hero-textbox', {yPercent: 40, opacity: 0}, {duration: 2, delay: 1.3, yPercent: -50, opacity: 1});