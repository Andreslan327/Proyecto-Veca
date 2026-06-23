// script.js

// Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  // Configuración del observador
  const options = {
    threshold: 0.15, // porcentaje visible para activar
    rootMargin: "0px 0px -10% 0px" // margen para anticipar la animación
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target); // deja de observar una vez visible
      }
    });
  }, options);

  // Aplica el observador a cada sección con .reveal
  reveals.forEach(section => {
    observer.observe(section);
  });

  // Extra: efecto suave en los enlaces internos
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
