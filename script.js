const homeMobileButton = document.getElementById("homeMobileButton");
const homeNav = document.querySelector(".home-nav");

homeMobileButton.addEventListener("click", () => {
  homeNav.classList.toggle("home-mobile-open");
});

const homeSearchButton = document.getElementById("homeSearchButton");
const homeSearchPopup = document.getElementById("homeSearchPopup");
const homeSearchClose = document.getElementById("homeSearchClose");
const homeSearchInput = document.getElementById("homeSearchInput");
const homeSearchSubmit = document.getElementById("homeSearchSubmit");
const homeSearchResult = document.getElementById("homeSearchResult");

homeSearchButton.addEventListener("click", () => {
  homeSearchPopup.classList.add("home-popup-show");
  homeSearchInput.focus();
});

homeSearchClose.addEventListener("click", () => {
  homeSearchPopup.classList.remove("home-popup-show");
});

homeSearchPopup.addEventListener("click", (event) => {
  if (event.target === homeSearchPopup) {
    homeSearchPopup.classList.remove("home-popup-show");
  }
});

homeSearchSubmit.addEventListener("click", () => {
  const searchValue = homeSearchInput.value.trim();

  if (searchValue === "") {
    homeSearchResult.textContent = "Please type something to search.";
    return;
  }

  homeSearchResult.textContent = `Searching for "${searchValue}"...`;
});

homeSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    homeSearchSubmit.click();
  }
});

const homeHeartButton = document.getElementById("homeHeartButton");
const homeHeartMessage = document.getElementById("homeHeartMessage");

homeHeartButton.addEventListener("click", () => {
  homeHeartMessage.classList.add("home-message-show");

  setTimeout(() => {
    homeHeartMessage.classList.remove("home-message-show");
  }, 3000);
});
