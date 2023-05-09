"use strict";

// Make mobile navigation work
const btnMenu = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const html = document.querySelector("html");

btnMenu.addEventListener("click", () => toggleNav());

function toggleNav() {
  header.classList.toggle("nav-open");
  html.style.overflow = html.style.overflow === "hidden" ? "" : "hidden";
}

////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // If link is clicked in mobile navigation, then close this navigation and scroll to choosen section
    if (header.classList.contains("nav-open")) toggleNav();

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const scrollEl = document.querySelector(href);
      scrollEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Make navigation sticky after leaving first section
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
