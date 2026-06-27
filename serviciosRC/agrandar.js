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