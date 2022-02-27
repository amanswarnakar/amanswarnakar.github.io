const nav_sm = document.getElementById("nav-sm");
const nav_lg = document.getElementById("nav-lg");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    nav_lg.classList.add("nav-black");
    nav_sm.classList.add("nav-black");
  } else {
    nav_sm.classList.remove("nav-black");
    nav_lg.classList.remove("nav-black");
  }
});

const menuToggle = document.querySelector(".toggle");
const menuDisplay = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  if (menuDisplay.classList.contains("active") === true) {
    menuDisplay.classList.remove("active");
  } else {
    setTimeout(() => {
      menuDisplay.classList.add("active");
    }, 100);
  }
});
