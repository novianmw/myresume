const hamburgerMenu = document.querySelector("#hamburgerMenu");
const isiHamburger = document.querySelector("#isiHamburger");
const overLay = document.querySelector("#overLay");
const closeMenu = document.querySelector("closeMenu");

hamburgerMenu.addEventListener("click", function () {

  isiHamburger.classList.toggle("hidden");
  overLay.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
});

// overlay.addEventListener("click", function () {
//   isiHamburger.classList.toggle("hidden");
//   overLay.classList.toggle("hidden");
// });
