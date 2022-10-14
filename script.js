const burger = document.querySelector(".burger-button");
const navMenu = document.querySelector(".burger-nav");

burger.addEventListener("click", () => {
  console.log("click");
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
