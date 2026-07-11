// ==========================================
// 4. CONTROL DE TARJETAS DE SUBSERVICIOS
// ==========================================
const subservicioCards = document.querySelectorAll('.subservicio-card');

// Solo se ejecuta si el navegador encuentra tarjetas en la página actual
if (subservicioCards.length > 0) {
    subservicioCards.forEach(card => {
        const toggleBtn = card.querySelector('.subservicio-btn-toggle');

        // Verificamos que el botón exista dentro de la tarjeta antes de asignarle el evento
        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation(); 

                // Conmutamos la clase 'open' en la tarjeta seleccionada
                const isOpen = card.classList.toggle('open');

                // Si está abierta muestra la flecha hacia arriba, si no, muestra el (+)
                toggleBtn.textContent = isOpen ? "ʌ" : "+";
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Configuración del detector
    const opciones = {
        root: null, // Usa la pantalla del navegador como referencia
        rootMargin: "0px",
        threshold: 0.15 // Se activa cuando el 15% de la tarjeta ya es visible en pantalla
    };

    const aparecerAlScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si la tarjeta entra en la pantalla
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Deja de vigilarla para que la animación solo ocurra una vez
            }
        });
    }, opciones);

    // Selecciona todas tus tarjetas de subservicio y empieza a vigilarlas
    const tarjetas = document.querySelectorAll(".subservicio-card");
    tarjetas.forEach(tarjeta => {
        aparecerAlScroll.observe(tarjeta);
    });
});