document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("loveletterMenuBtn");
  const navLinks = document.querySelector(".loveletter-nav-links");

  const envelope = document.getElementById("loveletterEnvelope");
  const heartButton = document.getElementById("loveletterHeartButton");
  const hint = document.getElementById("loveletterHint");

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      navLinks.classList.toggle("loveletter-menu-open");
    });
  }

  if (heartButton) {
    heartButton.addEventListener("click", function () {
      envelope.classList.add("loveletter-open");

      if (hint) {
        hint.textContent = "A little letter from my heart ♡";
      }
    });
  }
});
