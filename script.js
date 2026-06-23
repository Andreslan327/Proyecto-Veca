document.addEventListener("DOMContentLoaded", () => {
  
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ==========================
     INTERSECTION OBSERVER (REVEAL ANIMATION)
     ========================== */
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,             // Se activa un poco antes para mayor fluidez en móvil
    rootMargin: "0px 0px -8% 0px"
  });

  reveals.forEach(element => {
    revealObserver.observe(element);
  });

  /* ==========================
     CARD GLOW EFFECT
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
     BARRA DE PROGRESO DE LECTURA
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
    if (docHeight > 0) {
      const percentage = (scrollTop / docHeight) * 100;
      progress.style.width = `${percentage}%`;
    }
  });
});