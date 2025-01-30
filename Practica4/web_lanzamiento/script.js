// Contador regresivo
const countdown = () => {
  const endDate = new Date("January 31, 2025 23:59:59 GMT+0000").getTime();
  const now = new Date().getTime();
  const difference = endDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  } else {
    document.getElementById("timer").innerText = "¡Ya está disponible!";
  }
};

setInterval(countdown, 1000);

// Lógica para el scroll de página completa
let currentSectionIndex = 0;
const sections = document.querySelectorAll(".fullpage");

const showSection = (index) => {
  sections.forEach((section, i) => {
    if (i === index) {
      section.classList.add("visible");
      section.classList.remove("hide-up", "hide-down");
    } else if (i < index) {
      section.classList.remove("visible");
      section.classList.add("hide-up");
    } else {
      section.classList.remove("visible");
      section.classList.add("hide-down");
    }
  });
};

const handleScroll = (event) => {
  event.preventDefault(); // Evita el scroll nativo

  if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
    // Scroll hacia abajo
    currentSectionIndex++;
  } else if (event.deltaY < 0 && currentSectionIndex > 0) {
    // Scroll hacia arriba
    currentSectionIndex--;
  }

  showSection(currentSectionIndex);
};

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  showSection(currentSectionIndex); // Mostrar la primera sección
  window.addEventListener("wheel", handleScroll, { passive: false }); // Escuchar el scroll
});