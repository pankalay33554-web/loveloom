document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("foryouMenu");
  const navLinks = document.getElementById("foryouNavLinks");

  const surpriseButton = document.getElementById("foryouSurpriseButton");
  const popup = document.getElementById("foryouPopup");
  const popupClose = document.getElementById("foryouPopupClose");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      navLinks.classList.toggle("foryou-menu-open");
    });
  }

  if (surpriseButton && popup) {
    surpriseButton.addEventListener("click", function () {
      popup.classList.add("foryou-popup-show");
      document.body.style.overflow = "hidden";
    });
  }

  if (popupClose) {
    popupClose.addEventListener("click", function () {
      closePopup();
    });
  }

  if (popup) {
    popup.addEventListener("click", function (event) {
      if (event.target === popup) {
        closePopup();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closePopup();
    }
  });

  function closePopup() {
    if (!popup) {
      return;
    }

    popup.classList.remove("foryou-popup-show");
    document.body.style.overflow = "";
  }
});
