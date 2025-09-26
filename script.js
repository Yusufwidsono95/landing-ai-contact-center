window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
  document.body.classList.add("loaded");
});

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(anchor.getAttribute("href"));
    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;

    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });

    if (window.innerWidth < 768) {
      nav.style.display = "none";
    }
  });
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
});

