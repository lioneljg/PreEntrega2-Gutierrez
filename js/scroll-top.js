// Mostrar u ocultar botón al hacer scroll
window.addEventListener("scroll", function () {
    const scrollBtn = document.querySelector(".btn-scroll-top");
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});
