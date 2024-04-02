const header= document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 60)
});
let menu = document.querySelector('#menu-icon');
let navegar = document.querySelector('.navegar');
menu.onclick=( ) => {
    menu.classList.toggle('bx-x');
    navegar.classList.toggle('open');
};

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

// Selecciona el elemento con la clase "submenu-trigger"
const submenuTrigger = document.querySelector(".submenu-trigger");

// Selecciona el submenú
const submenuContent = document.querySelector(".submenu-content");

// Agrega un evento de clic al elemento "submenu-trigger"
submenuTrigger.addEventListener("click", () => {
    // Toggle (alternar) la clase "active" en el submenú para mostrar u ocultar el submenú
    submenuContent.classList.toggle("active");
});

