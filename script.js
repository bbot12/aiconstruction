document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');
    
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
}); 