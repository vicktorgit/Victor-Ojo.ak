let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('home');
};
menuIcon.classList.remove('bx-x');
  navbar.classList.remove('home');



  document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('home');
  })
    ) 


    