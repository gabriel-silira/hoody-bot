const menuButton = document.getElementById("menuButton");
const menu = document.querySelector(".dropdown-menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});