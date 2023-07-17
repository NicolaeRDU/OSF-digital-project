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
