"use strict";

const menuBar = document.querySelector("#menu-bar");
const menu = document.querySelector(".nav-menu");

menuBar.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
