document.body.classList.remove("no-js");

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

function setMenuState(isOpen, returnFocus = false) {
  if (!menuButton || !mobileMenu) return;

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  mobileMenu.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);

  if (returnFocus) menuButton.focus();
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuState(false, true);
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".mobile-nav") && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) setMenuState(false);
  });
}

const searchInput = document.querySelector("#command-search-input");
const searchStatus = document.querySelector("#search-status");
const searchClear = document.querySelector(".search-clear");
const noResults = document.querySelector(".no-results");
const noResultsClear = noResults?.querySelector("button");
const commandCards = [...document.querySelectorAll(".command-card")];
const commandCategories = [...document.querySelectorAll(".command-category")];

function normalizeText(value) {
  return value
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function filterCommands() {
  if (!searchInput || !searchStatus || !noResults) return;

  const query = normalizeText(searchInput.value);
  let visibleCount = 0;

  commandCards.forEach((card) => {
    const matches = !query || normalizeText(card.textContent).includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  commandCategories.forEach((category) => {
    const hasVisibleCards = [...category.querySelectorAll(".command-card")].some((card) => !card.hidden);
    category.hidden = !hasVisibleCards;
  });

  noResults.hidden = visibleCount !== 0;
  if (searchClear) searchClear.hidden = !query;
  searchStatus.textContent = query
    ? `${visibleCount} ${visibleCount === 1 ? "comando encontrado" : "comandos encontrados"}`
    : "18 comandos disponíveis";
}

function clearSearch() {
  if (!searchInput) return;
  searchInput.value = "";
  filterCommands();
  searchInput.focus();
}

if (searchInput) {
  searchInput.addEventListener("input", filterCommands);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && searchInput.value) clearSearch();
  });
  searchClear?.addEventListener("click", clearSearch);
  noResultsClear?.addEventListener("click", clearSearch);
}

document.querySelectorAll("[data-current-year]").forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});
