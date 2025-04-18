// Función para inicializar la navegación responsiva
function initNavbar() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navbarToggle && navMenu) {
        navbarToggle.addEventListener('click', function() {
            navbarToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace (en móviles)
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Marcar el enlace de la página actual como activo
        highlightCurrentPage();
    }
}

// Función para destacar la página actual en el menú
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}