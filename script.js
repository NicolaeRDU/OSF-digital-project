"use strict";

const menuBar = document.querySelector("#btn-menu");
const menu = document.querySelector(".nav-menu");

const password = document.querySelector("#password");
const eyeImage = document.querySelector(".eye--img");
let passwordShown = 0;

const btn = document.querySelector("#btn");
const loginModal = document.querySelector(".login-modal");
const overlay = document.querySelector(".overlay");

const modalTile1 = document.querySelector(".one");
const modalTile2 = document.querySelector(".two");
const modalTile3 = document.querySelector(".three");
const modalTile4 = document.querySelector(".four");

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");
const item5 = document.querySelector(".item5");
const item6 = document.querySelector(".item6");
const item7 = document.querySelector(".item7");

// MENU BAR CODE

menuBar.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

// LOGIN MODAL CODE

btn.addEventListener("click", function () {
  if (loginModal.classList.contains("hidden")) {
    loginModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else {
    loginModal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

overlay.addEventListener("click", function () {
  loginModal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !loginModal.classList.contains("hidden")) {
    loginModal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

// SHOW THE PASSWORD CODE

eyeImage.addEventListener("click", function () {
  if (password.type == "text") {
    password.type = "password";
  } else {
    password.type = "text";
  }
});

// SWITCH THE MODAL TILE CODE

// Collapse info in footer

const contact = document.querySelector(".contact__title");
const contactInfo = document.querySelector(".contact__info");

const categoriest = document.querySelector(".categoriest__title");
const categoriestInfo = document.querySelector(".categoriest__info");

const about = document.querySelector(".about");
const aboutInfo = document.querySelector(".about__info");

// contact.addEventListener("click", function () {
//   if (contactInfo.classList.contains("hidden")) {
//     contactInfo.classList.remove("hidden");
//   } else {
//     contactInfo.classList.add("hidden");
//   }
// });

// categoriest.addEventListener("click", function () {
//   if (categoriestInfo.classList.contains("hidden")) {
//     categoriestInfo.classList.remove("hidden");
//   } else {
//     categoriestInfo.classList.add("hidden");
//   }
// });

// about.addEventListener("click", function () {
//   if (aboutInfo.classList.contains("hidden")) {
//     aboutInfo.classList.remove("hidden");
//   } else {
//     aboutInfo.classList.add("hidden");
//   }
// });

// Remove item from footer

const remove = document.querySelector(".btn__remove");
const item = document.querySelector(".item1");
const minus1 = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const quantity = document.querySelector(".quantity");
const price = document.querySelector(".price");

let sum = 1;

// remove.addEventListener("click", function () {
//   item.classList.add("hidden");
// });

// minus1.addEventListener("click", function () {
//   if (sum === 0) {
//     sum = 0;
//   } else {
//     sum--;
//   }
//   quantity.textContent = sum;
// });

// SWIPER

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
