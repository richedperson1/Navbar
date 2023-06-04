const toggleSwitch = document.querySelector(".menu-switch i");

const menuCards = document.querySelector("div.menu-cards-details");
const navBarCards = document.querySelector(".nav-bar");

toggleSwitch.addEventListener("click", () => {
  toggleSwitch.classList.toggle("rotate-180");
  menuCards.classList.toggle("show-height");
});
