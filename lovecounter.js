document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("lovecounterMenu");
  const navLinks = document.getElementById("lovecounterNavLinks");

  const daysElement = document.getElementById("lovecounterDays");
  const hoursElement = document.getElementById("lovecounterHours");
  const minutesElement = document.getElementById("lovecounterMinutes");
  const secondsElement = document.getElementById("lovecounterSeconds");

  const totalDaysElement = document.getElementById("lovecounterTotalDays");
  const totalHoursElement = document.getElementById("lovecounterTotalHours");
  const totalMinutesElement = document.getElementById(
    "lovecounterTotalMinutes",
  );

  const startDateElement = document.getElementById("lovecounterStartDate");

  const startDate = new Date("2025-01-06T00:00:00");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      navLinks.classList.toggle("lovecounter-menu-open");
    });
  }

  function formatNumber(number) {
    return String(number).padStart(2, "0");
  }

  function updateCounter() {
    const now = new Date();
    const difference = now.getTime() - startDate.getTime();

    if (difference <= 0) {
      daysElement.textContent = "0";
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";

      totalDaysElement.textContent = "0";
      totalHoursElement.textContent = "0";
      totalMinutesElement.textContent = "0";

      return;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    daysElement.textContent = totalDays;
    hoursElement.textContent = formatNumber(hours);
    minutesElement.textContent = formatNumber(minutes);
    secondsElement.textContent = formatNumber(seconds);

    totalDaysElement.textContent = totalDays.toLocaleString();
    totalHoursElement.textContent = totalHours.toLocaleString();
    totalMinutesElement.textContent = totalMinutes.toLocaleString();
  }

  if (startDateElement) {
    startDateElement.textContent = startDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  updateCounter();

  setInterval(updateCounter, 1000);
});
