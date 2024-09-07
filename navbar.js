document.addEventListener("DOMContentLoaded", function () {
  // Desktop dropdown menu
  const dropdownButton = document.querySelector("button[aria-expanded]");
  const dropdownMenu = document.querySelector(".absolute.top-full");
  const dropdownContainer = dropdownButton.closest(".relative");
  const dropdown = document.querySelector(".relative");
  const menu = dropdown.querySelector('div[aria-expanded="false"] + div');


  let timeoutId;

  function showDropdown() {
    clearTimeout(timeoutId);
    dropdownButton.setAttribute("aria-expanded", "true");
    dropdownMenu.classList.remove("hidden");
  }

  function hideDropdown() {
    timeoutId = setTimeout(() => {
      dropdownButton.setAttribute("aria-expanded", "false");
      dropdownMenu.classList.add("hidden");
    }, 100); // Small delay to allow moving to the menu
  }

  dropdownContainer.addEventListener("mouseenter", showDropdown);
  dropdownContainer.addEventListener("mouseleave", hideDropdown);

  dropdownMenu.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
  });

  dropdownMenu.addEventListener("mouseleave", hideDropdown);

  // Mobile menu
  const mobileMenuButton = document.querySelector('button[aria-controls="mobile-menu"]');
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMobileMenuButton = mobileMenu.querySelector("button");

  function toggleMobileMenu() {
    mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  }

  mobileMenuButton.addEventListener("click", toggleMobileMenu);
  closeMobileMenuButton.addEventListener("click", toggleMobileMenu);

  // Mobile dropdown
  const mobileDropdownButton = document.querySelector('button[aria-controls="disclosure-1"]');
  const mobileDropdownMenu = document.getElementById("disclosure-1");

  mobileDropdownButton.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    mobileDropdownMenu.classList.toggle("hidden");
    this.querySelector("svg").classList.toggle("rotate-180");
  });
});
