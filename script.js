document.addEventListener("DOMContentLoaded", () => {

const prefersReducedMotion =
window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ==========================
REVEAL ANIMATIONS
========================== */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
(entries, observer) => {

```
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);

    }

  });

},
{
  threshold: 0.15,
  rootMargin: "0px 0px -10% 0px"
}
```

);

reveals.forEach(element => {
revealObserver.observe(element);
});

/* ==========================
HERO PARALLAX
========================== */

const hero = document.querySelector(".hero");

if (!prefersReducedMotion && hero) {

```
let ticking = false;

window.addEventListener("scroll", () => {

  if (!ticking) {

    requestAnimationFrame(() => {

      const scroll = window.scrollY;

      hero.style.transform =
        `translateY(${scroll * 0.12}px)`;

      ticking = false;

    });

    ticking = true;

  }

});
```

}

/* ==========================
SMOOTH SCROLL
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(link => {

```
  link.addEventListener("click", e => {

    const target = document.querySelector(
      link.getAttribute("href")
    );

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});
```

/* ==========================
CARD GLOW EFFECT
========================== */

const cards = document.querySelectorAll(".section-box");

cards.forEach(card => {

```
card.addEventListener("mousemove", e => {

  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);

});
```

});

/* ==========================
SCROLL PROGRESS BAR
========================== */

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "3px";
progress.style.width = "0%";
progress.style.zIndex = "9999";
progress.style.background =
"linear-gradient(90deg,#7a121d,#ff7a1a)";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

```
const scrollTop =
  window.scrollY;

const docHeight =
  document.documentElement.scrollHeight -
  window.innerHeight;

const percentage =
  (scrollTop / docHeight) * 100;

progress.style.width =
  percentage + "%";
```

});

/* ==========================
ACTIVE SECTION
========================== */

const sections = document.querySelectorAll(".panel");

const sectionObserver = new IntersectionObserver(
entries => {

```
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      document
        .querySelectorAll(".panel")
        .forEach(panel =>
          panel.classList.remove("active")
        );

      entry.target.classList.add("active");

    }

  });

},
{
  threshold: 0.4
}
```

);

sections.forEach(section => {
sectionObserver.observe(section);
});

/* ==========================
CONSOLE SIGNATURE
========================== */

console.log(
"%cGalaxy A36 5G Review",
"color:#ff7a1a;font-size:18px;font-weight:bold;"
);

});
