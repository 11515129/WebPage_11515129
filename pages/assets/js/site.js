const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNavigation = document.querySelector("#site-navigation");

if (menuToggle && siteNavigation) {
  document.documentElement.classList.add("menu-ready");

  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "關閉導覽選單" : "開啟導覽選單");
    siteNavigation.classList.toggle("is-open", isOpen);
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  siteNavigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  window.matchMedia("(min-width: 761px)").addEventListener("change", () => setMenuOpen(false));
}