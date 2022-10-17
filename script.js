
let menu = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
  menu.classList.toggle('active');
  search.classList.remove('active');
}

// Sakriven meni bna scroll
window.onscroll = () => {
  menu.classList.remove('active');
}