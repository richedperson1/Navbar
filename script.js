const toggleSwitch = document.querySelector(".toggleSwitch i");

const menuCards = document.querySelector("div.menu-cards-details");
const navBarCards = document.querySelector(".nav-bar");

toggleSwitch.addEventListener("click", () => {
  toggleSwitch.classList.toggle("rotate-180");

  menuCards.classList.toggle("toggleFun4Menu");
});
