document.addEventListener("DOMContentLoaded", () => {
  
  // Detectar si el usuario prefiere reducir las animaciones por hardware
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ==========================
     ANIMACIONES DE APARICIÓN (REVEAL)
     ========================== */
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Detiene la observación una vez se muestra
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -5% 0px"
  });

  reveals.forEach(element => {
    revealObserver.observe(element);
  });

  /* ==========================
     EFECTO GLOW INTERACTIVO EN TARJETAS
     ========================== */
  const cards = document.querySelectorAll(".section-box");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  /* ==========================
     BARRA DE PROGRESO DE LECTURA SUPERIOR
     ========================== */
  const progress = document.createElement("div");
  progress.style.position = "fixed";
  progress.style.top = "0";
  progress.style.left = "0";
  progress.style.height = "3px";
  progress.style.width = "0%";
  progress.style.zIndex = "9999";
  progress.style.background = "linear-gradient(90deg, #7a121d, #ff7a1a)";
  progress.style.transition = "width 0.1s ease-out";
  document.body.appendChild(progress);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollTop / docHeight) * 100;
    progress.style.width = `${percentage}%`;
  });

  /* ==========================
     DETECTOR DE SECCIÓN ACTIVA
     ========================== */
  const sections = document.querySelectorAll(".panel");

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sections.forEach(panel => panel.classList.remove("active"));
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  console.log("%cGalaxy A36 5G Review - Cargada correctamente", "color:#ff7a1a; font-size:14px; font-weight:bold;");
});