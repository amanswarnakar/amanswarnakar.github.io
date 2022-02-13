const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if(window.scrollY > 200){
    nav.classList.add('nav-black');
  } else {
    nav.classList.remove('nav-black');
  }
});
