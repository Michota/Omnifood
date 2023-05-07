"use strict";

const btnMenu = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const html = document.querySelector("html");

btnMenu.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  html.style.overflow = html.style.overflow === "hidden" ? "" : "hidden";
});
