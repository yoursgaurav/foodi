// JavaScript for toggling navigation menu 

let menuToggler = document.querySelector("#menu-toggler");
let navMenu = document.querySelector("#nav-menu");

menuToggler.addEventListener("click", toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle("hidden");
}
