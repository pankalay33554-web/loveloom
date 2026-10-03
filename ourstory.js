const storyMenuBtn = document.getElementById("storyMenuBtn");
const storyNavLinks = document.querySelector(".story-nav-links");

const storyPhotoModal = document.getElementById("storyPhotoModal");
const storyModalClose = document.getElementById("storyModalClose");
const storyModalPhoto = document.getElementById("storyModalPhoto");
const storyModalTitle = document.getElementById("storyModalTitle");
const storyModalText = document.getElementById("storyModalText");

const storyViewButtons = document.querySelectorAll(".story-view-btn");

storyMenuBtn.addEventListener("click", () => {
  storyNavLinks.classList.toggle("story-menu-open");
});

storyViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.dataset.image;
    const title = button.dataset.title;
    const text = button.dataset.text;

    storyModalPhoto.src = image;
    storyModalTitle.textContent = title;
    storyModalText.textContent = text;

    storyPhotoModal.classList.add("story-modal-show");
    document.body.style.overflow = "hidden";
  });
});

storyModalClose.addEventListener("click", closeStoryModal);

storyPhotoModal.addEventListener("click", (event) => {
  if (event.target === storyPhotoModal) {
    closeStoryModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeStoryModal();
  }
});

function closeStoryModal() {
  storyPhotoModal.classList.remove("story-modal-show");
  document.body.style.overflow = "";
}

const storyCards = document.querySelectorAll(".story-card");

const storyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        storyObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

storyCards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(35px)";
  card.style.transition = "opacity 0.7s ease, transform 0.7s ease";
  storyObserver.observe(card);
});
