
        
        
        window.addEventListener("load", () => {
    const preloader = document.getElementById("pantalla-carga");
    
    // Le añade la clase para desvanecerlo suavemente
    preloader.classList.add("oculto");
    
    // Opcional: Remueve el div del HTML después de la animación para limpiar el código
    setTimeout(() => {
        preloader.remove();
    }, 500); 
});
        
        
        const openTerminos = document.getElementById('open-terminos');
        const openPrivacidad = document.getElementById('open-privacidad');
        const modalTerminos = document.getElementById('modal-terminos');
        const modalPrivacidad = document.getElementById('modal-privacidad');
        const closeTerminos = document.getElementById('close-terminos');
        const closePrivacidad = document.getElementById('close-privacidad');

        openTerminos.addEventListener('click', function(e) {
            e.preventDefault();
            modalTerminos.style.display = 'flex';
        });

        closeTerminos.addEventListener('click', function() {
            modalTerminos.style.display = 'none';
        });

        openPrivacidad.addEventListener('click', function(e) {
            e.preventDefault();
            modalPrivacidad.style.display = 'flex';
        });

        closePrivacidad.addEventListener('click', function() {
            modalPrivacidad.style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            if (e.target === modalTerminos) {
                modalTerminos.style.display = 'none';
            }
            if (e.target === modalPrivacidad) {
                modalPrivacidad.style.display = 'none';
            }
        });



// ==========================================
// CONTROL DEL MENÚ HAMBURGUESA (MÓVIL)
// ==========================================
const hamburgerToggle = document.getElementById('hamburger-toggle');
const navMenu = document.getElementById('nav-menu');

if (hamburgerToggle && navMenu) {
    hamburgerToggle.addEventListener('click', function() {
        // Conmutamos la clase active en el botón (para animar la X)
        hamburgerToggle.classList.toggle('active');
        // Conmutamos la clase active en el menú (para mostrarlo/ocultarlo)
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú si el usuario hace clic en una pestaña
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}



document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let ultimaPosicionScroll = window.scrollY || document.documentElement.scrollTop;

    window.addEventListener('scroll', () => {
        const posicionScrollActual = window.scrollY || document.documentElement.scrollTop;

        // Si estás cerca del inicio (menos de 60px), mantén la barra visible
        if (posicionScrollActual <= 60) {
            navbar.classList.remove('scroll-abajo');
            return;
        }

        // Oculta al bajar
        if (posicionScrollActual > ultimaPosicionScroll && !navbar.classList.contains('scroll-abajo')) {
            navbar.classList.add('scroll-abajo');
        } 
        // Muestra al subir
        else if (posicionScrollActual < ultimaPosicionScroll && navbar.classList.contains('scroll-abajo')) {
            navbar.classList.remove('scroll-abajo');
        }

        ultimaPosicionScroll = posicionScrollActual;
    }, { passive: true });
});