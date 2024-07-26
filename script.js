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
