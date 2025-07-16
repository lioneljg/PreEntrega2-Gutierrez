document.addEventListener("DOMContentLoaded", () => {
    const metricsSection = document.querySelector('#metrics-section');
    if (!metricsSection) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si la sección es visible
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');

                counters.forEach(counter => {
                    const animate = () => {
                        const target = +counter.dataset.target;
                        const duration = 2000; // Duración de la animación en milisegundos
                        const interval = 15;   // Frecuencia de actualización
                        const increment = target / (duration / interval);
                        let current = 0;

                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                clearInterval(timer);
                                counter.innerText = '+' + target;
                            } else {
                                counter.innerText = '+' + Math.ceil(current);
                            }
                        }, interval);
                    };
                    animate();
                });

                // Dejar de observar la sección para que la animación no se repita
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // La animación se dispara cuando el 50% de la sección es visible
    });

    observer.observe(metricsSection);
});