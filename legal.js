
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

