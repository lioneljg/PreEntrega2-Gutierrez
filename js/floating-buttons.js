window.addEventListener("DOMContentLoaded", () => {
    // --- Selección de Elementos ---
    const scrollTopButton = document.querySelector(".btn-scroll-top");
    const whatsappButton = document.querySelector(".btn-whatsapp");
    const whatsappTooltip = document.querySelector(".tooltip-ayuda");
    const footer = document.querySelector(".footer-observado");

    // --- Verificación robusta de elementos ---
    if (!scrollTopButton || !whatsappButton || !footer) {
        console.error("Error Crítico: Falta un elemento principal (botón de scroll, whatsapp o footer).");
        return;
    }

    const scrollTopIcon = scrollTopButton.querySelector("i");
    const scrollTopText = scrollTopButton.querySelector("span");

    if (!scrollTopIcon || !scrollTopText) {
        console.error("Error Crítico: El botón de scroll no tiene la estructura interna esperada (falta <i> o <span>). Revisa el HTML.");
        // Ocultar el botón si está mal formado para evitar errores.
        scrollTopButton.style.display = 'none';
        return;
    }

    let isFooterVisible = false;

    // --- Función Principal ---
    const updateButtonVisibility = () => {
        // Esta línea obtiene el valor de la propiedad que esté disponible, asegurando compatibilidad.
        const currentScroll = window.scrollY || document.documentElement.scrollTop;

        // Si el footer está visible, ocultar ambos botones
        if (isFooterVisible) {
            whatsappButton.classList.remove("is-visible");
            whatsappTooltip.classList.remove("is-active"); // Ocultar también el tooltip
            scrollTopButton.classList.remove("is-visible");
            return;
        }

        // Si el footer no es visible, los botones se muestran.
        whatsappButton.classList.add("is-visible");
        scrollTopButton.classList.add("is-visible");

        // --- LÓGICA: Cambiar texto y función del botón de scroll ---
        if (currentScroll < 100) {
            // Estamos en la parte superior de la página
            scrollTopIcon.classList.remove("bi-chevron-up");
            scrollTopIcon.classList.add("bi-chevron-down");
            scrollTopText.textContent = "Ir abajo";
            scrollTopButton.dataset.action = "down";
        } else {
            // Hemos hecho scroll hacia abajo
            scrollTopIcon.classList.remove("bi-chevron-down");
            scrollTopIcon.classList.add("bi-chevron-up");
            scrollTopText.textContent = "Volver arriba";
            scrollTopButton.dataset.action = "up";
        }
    };

    // --- Detectores de Eventos ---
    window.addEventListener("scroll", updateButtonVisibility, { passive: true });

    const footerObserver = new IntersectionObserver((entries) => {
        isFooterVisible = entries[0].isIntersecting;
        updateButtonVisibility();
    }, { threshold: 0.1 });

    footerObserver.observe(footer);

    scrollTopButton.addEventListener("click", (event) => {
        event.preventDefault();
        const action = event.currentTarget.dataset.action;

        if (action === "down") {
            // Scroll suave hasta justo antes del footer
            footer.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            // Scroll suave hacia arriba
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

    // --- Ejecución inicial ---
    updateButtonVisibility();

    // --- Lógica del Tooltip dinámico de WhatsApp ---
    if (whatsappTooltip) {
        const tooltipMessages = [
            "¿Tenés una consulta?",
            "¡Chateá con nosotros!",
            "Presupuesto sin cargo",
            "Estamos para ayudarte"
        ];
        let messageIndex = 0;

        const cycleTooltip = () => {
            // No mostrar si el botón principal está oculto
            if (!whatsappButton.classList.contains('is-visible')) return;

            // Cambiar y mostrar
            messageIndex = (messageIndex + 1) % tooltipMessages.length;
            whatsappTooltip.textContent = tooltipMessages[messageIndex];
            whatsappTooltip.classList.add('is-active');

            // Ocultar después de un tiempo
            setTimeout(() => whatsappTooltip.classList.remove('is-active'), 4000); // visible por 4s
        };

        // Iniciar el ciclo después de unos segundos y repetirlo
        setTimeout(() => setInterval(cycleTooltip, 10000), 6000); // Inicia tras 6s, repite cada 10s
    }
});