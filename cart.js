"use strict";

const menuBar = document.querySelector("#btn-menu");
const menu = document.querySelector(".nav-menu");

const password = document.querySelector("#password");
const eyeImage = document.querySelector(".eye--img");
let passwordShown = 0;

const btn = document.querySelector("#btn");
const loginModal = document.querySelector(".login-modal");
const overlay = document.querySelector(".overlay");

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

// INCREASE THE QUANTITY CODE
const quantity = document.querySelector(".quantity");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

// INCREASE THE PRICE WHEN THE QUANTITY IS INCREASED
const price = document.querySelector(".price");

let firstPrice = 100;
let sum = 1;

plus.addEventListener("click", function () {
  sum++;
  firstPrice = firstPrice + 100;
  quantity.textContent = sum;
  price.textContent = `$ ${firstPrice}`;
});

minus.addEventListener("click", function () {
  if (sum === 0) {
    quantity.textContent = 0;
    price.textContent = `$ 0`;
  } else {
    firstPrice = firstPrice - 100;
    sum--;
    quantity.textContent = sum;
    price.textContent = `$ ${firstPrice}`;
  }
});
