const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const menuDisplay = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
  if (menuDisplay.classList.contains("active") === true) {
    menuDisplay.classList.remove("active");
  } else {
    setTimeout(() => {
      menuDisplay.classList.add("active");
    }, 250);
  }
});
