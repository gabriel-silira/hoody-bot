const menuButton = document.getElementById("menuButton");
const menu = document.querySelector(".conteudo-header-right");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});
