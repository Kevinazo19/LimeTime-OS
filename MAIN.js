document.addEventListener('DOMContentLoaded', function() {
const contenedores = document.querySelectorAll('.contenedor');

function verificarDesplazamiento() {
        contenedores.forEach(contenedor => {
            const contenedorArriba = contenedor.getBoundingClientRect().top;
            const contenedorAbajo = contenedor.getBoundingClientRect().bottom;

            if (contenedorArriba < window.innerHeight * 0.75 && contenedorAbajo > 0) {
                contenedor.style.opacity = '1';
                contenedor.style.transform = 'translateY(0)';
            } else {
                contenedor.style.opacity = '0';
                contenedor.style.transform = 'translateY(50px)';
            }
        });
    }

contenedores.forEach(contenedor => {
        contenedor.style.opacity = '0';
        contenedor.style.transform = 'translateY(50px)';
        contenedor.style.transition = 'opacity 0.5s, transform 0.5s';
    });

window.addEventListener('scroll', verificarDesplazamiento);
    verificarDesplazamiento();
});
