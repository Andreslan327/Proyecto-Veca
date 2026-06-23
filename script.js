document.addEventListener("DOMContentLoaded", () => {

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
(entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("visible");
}
});
},
{
threshold: 0.12,
rootMargin: "0px 0px -8% 0px"
}
);

reveals.forEach(el => observer.observe(el));

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
if (!hero) return;

```
const offset = window.scrollY * 0.15;

hero.style.transform = `translateY(${offset}px)`;
```

});

document.querySelectorAll("a[href^='#']").forEach(link => {

```
link.addEventListener("click", e => {

  e.preventDefault();

  const target = document.querySelector(
    link.getAttribute("href")
  );

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

});
```

});

});
