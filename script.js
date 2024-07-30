// JavaScript para aplicar el efecto de scroll
document.addEventListener('DOMContentLoaded', function () {
    const scrollElements = document.querySelectorAll('.scroll-effect');

    const elementInView = (element, percentageScroll = 100) => {
        const elementTop = element.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
        );
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((element) => {
            if (elementInView(element, 75)) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
});

document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const contentElements = document.querySelectorAll('p, h3, h4'); // Elementos donde buscar
    let found = false; // Bandera para saber si se encontró la palabra

    contentElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (query && text.includes(query)) {
            // Usar expresión regular para encontrar y envolver las coincidencias
            const regex = new RegExp(`(${query})`, 'gi');
            element.innerHTML = element.textContent.replace(regex, `<span class="highlight">$1</span>`);
            found = true; // Se encontró la palabra
        } else {
            element.innerHTML = element.textContent; // Resetear a texto original
        }
    });

    // Mostrar el mensaje si no se encontró la palabra
    const messageElement = document.getElementById('search-message');
    if (!found && query !== "") {
        messageElement.textContent = "No se ha encontrado la palabra buscada.";
        messageElement.style.display = "block"; // Mostrar el mensaje
    } else {
        messageElement.style.display = "none"; // Ocultar el mensaje
    }
});