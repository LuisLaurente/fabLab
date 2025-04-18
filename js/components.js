// Función para cargar componentes HTML
document.addEventListener('DOMContentLoaded', function() {
    // Cargar la barra de navegación
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            
            // Una vez cargado el navbar, inicializar su funcionalidad
            if (typeof initNavbar === 'function') {
                initNavbar();
            }
        })
        .catch(error => console.error('Error cargando navbar:', error));

    // Cargar el footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error cargando footer:', error));
});