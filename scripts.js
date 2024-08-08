// scripts.js


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario
    alert('Gracias por contactarnos. Responderemos a la brevedad.');
    event.target.reset(); // Reinicia el formulario
});
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('show');
});

