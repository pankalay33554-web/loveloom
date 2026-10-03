document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("memoriesMenu");
  const navLinks = document.getElementById("memoriesNavLinks");

  const filterButtons = document.querySelectorAll(".memories-filter");
  const cards = Array.from(document.querySelectorAll(".memories-card"));

  const viewer = document.getElementById("memoriesViewer");
  const viewerImage = document.getElementById("memoriesViewerImage");
  const viewerVideo = document.getElementById("memoriesViewerVideo");

  const viewerTitle = document.getElementById("memoriesViewerTitle");
  const viewerDate = document.getElementById("memoriesViewerDate");
  const viewerCount = document.getElementById("memoriesViewerCount");

  const closeButton = document.getElementById("memoriesViewerClose");
  const previousButton = document.getElementById("memoriesViewerPrev");
  const nextButton = document.getElementById("memoriesViewerNext");

  let filteredCards = cards.slice();
  let currentIndex = 0;

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      navLinks.classList.toggle("memories-menu-open");
    });
  }

  function updateFilter(selectedFilter) {
    filteredCards = [];

    cards.forEach(function (card) {
      const category = card.dataset.category;

      if (selectedFilter === "all" || category === selectedFilter) {
        card.classList.remove("memories-hidden");
        filteredCards.push(card);
      } else {
        card.classList.add("memories-hidden");
      }
    });
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterButtons.forEach(function (filter) {
        filter.classList.remove("memories-filter-active");
      });

      button.classList.add("memories-filter-active");

      updateFilter(button.dataset.filter);
    });
  });

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      const index = filteredCards.indexOf(card);

      if (index === -1) {
        return;
      }

      currentIndex = index;

      openViewer();
    });
  });

  function openViewer() {
    const card = filteredCards[currentIndex];

    if (!card) {
      return;
    }

    const type = card.dataset.type;
    const source = card.dataset.source;
    const title = card.dataset.title;
    const date = card.dataset.date;

    viewerTitle.textContent = title;
    viewerDate.textContent = date;

    viewerCount.textContent = currentIndex + 1 + " / " + filteredCards.length;

    viewerImage.classList.remove("memories-viewer-image-active");

    viewerVideo.classList.remove("memories-viewer-video-active");

    viewerVideo.pause();
    viewerVideo.removeAttribute("src");
    viewerVideo.load();

    if (type === "video") {
      viewerVideo.src = source;

      viewerVideo.classList.add("memories-viewer-video-active");
    } else {
      viewerImage.src = source;
      viewerImage.alt = title;

      viewerImage.classList.add("memories-viewer-image-active");
    }

    viewer.classList.add("memories-viewer-show");

    document.body.style.overflow = "hidden";

    if (type === "video") {
      viewerVideo.play().catch(function () {});
    }
  }

  function closeViewer() {
    viewer.classList.remove("memories-viewer-show");

    viewerVideo.pause();
    viewerVideo.removeAttribute("src");
    viewerVideo.load();

    viewerImage.removeAttribute("src");

    document.body.style.overflow = "";
  }

  function showPrevious() {
    if (filteredCards.length === 0) {
      return;
    }

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = filteredCards.length - 1;
    }

    openViewer();
  }

  function showNext() {
    if (filteredCards.length === 0) {
      return;
    }

    currentIndex++;

    if (currentIndex >= filteredCards.length) {
      currentIndex = 0;
    }

    openViewer();
  }

  closeButton.addEventListener("click", function () {
    closeViewer();
  });

  previousButton.addEventListener("click", function () {
    showPrevious();
  });

  nextButton.addEventListener("click", function () {
    showNext();
  });

  viewer.addEventListener("click", function (event) {
    if (event.target === viewer) {
      closeViewer();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (!viewer.classList.contains("memories-viewer-show")) {
      return;
    }

    if (event.key === "Escape") {
      closeViewer();
    }

    if (event.key === "ArrowLeft") {
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      showNext();
    }
  });

  updateFilter("all");
});
