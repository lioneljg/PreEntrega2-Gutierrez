// js/whatsapp.js
document.addEventListener("DOMContentLoaded", () => {
  const btnWhatsapp = document.querySelector(".btn-whatsapp");
  const footer = document.querySelector(".footer-observado");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          btnWhatsapp.style.opacity = "0";
          btnWhatsapp.style.visibility = "hidden";
        } else {
          btnWhatsapp.style.opacity = "1";
          btnWhatsapp.style.visibility = "visible";
        }
      });
    },
    { threshold: 0.1 }
  );

  if (footer) {
    observer.observe(footer);
  }
});
