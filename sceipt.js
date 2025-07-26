let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.meltiple-text', {
      strings: ['Frontend Developer', 'Backend Developer','Blockchain Developer','Web Designer','YouTuber'],
      typeSpeed: 80,
      backspeed: 80,
      backDeay: 1200,
      loop: true,
    })