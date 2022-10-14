const burger = document.querySelector(".burger-button");
const navMenu = document.querySelector(".burger-nav");

burger.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.addEventListener("click", () => {
  burger.classList.remove("active");
  navMenu.classList.remove("active");
});
