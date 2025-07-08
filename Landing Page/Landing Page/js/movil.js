// JavaScript para el menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('.nav__menu');
    const navLink = document.querySelector('.nav__link');
    const navExit = document.querySelector('.nav__exit');

    // Abrir menú
    navMenu.addEventListener('click', () => {
        navLink.classList.add('nav__link--show');
    });

    // Cerrar menú
    navExit.addEventListener('click', () => {
        navLink.classList.remove('nav__link--show');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav__links').forEach(link => {
        link.addEventListener('click', () => {
            navLink.classList.remove('nav__link--show');
        });
    });
});