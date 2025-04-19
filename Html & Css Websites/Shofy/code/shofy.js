document.addEventListener("DOMContentLoaded", () => {
  const topLang = document.querySelector(".top-language span");
  const topCurr = document.querySelector(".top-currency span");
  const topSettings = document.querySelector(".top-settings span");

  const moreLang = document.querySelector(".more-lang");
  const moreCurr = document.querySelector(".more-curr");
  const moreSettings = document.querySelector(".more-settings");

  const allDropdowns = [moreLang, moreCurr, moreSettings];

  function toggleDropdown(selectedDropdown) {
    allDropdowns.forEach((dropdown) => {
      if (dropdown !== selectedDropdown) {
        dropdown.style.display = "none";
      }
    });

    if (selectedDropdown) {
      selectedDropdown.style.display =
        selectedDropdown.style.display === "block" ? "none" : "block";
    }
  }

  topLang.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown(moreLang);
  });

  topCurr.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown(moreCurr);
  });

  topSettings.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown(moreSettings);
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    allDropdowns.forEach((dropdown) => (dropdown.style.display = "none"));
  });
});
