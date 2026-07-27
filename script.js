const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 3) * 90}ms`;
  observer.observe(item);
});

const heroPhoto = document.querySelector(".hero-photo");

window.addEventListener(
  "scroll",
  () => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 820px)").matches
    ) {
      heroPhoto.style.transform = "";
      return;
    }
    const shift = Math.min(window.scrollY * 0.035, 18);
    heroPhoto.style.transform = `translateY(${shift}px)`;
  },
  { passive: true }
);
