let menu = document.getElementById('menu-icon');
let navbar = document.getElementsByClassName('nav-layout')[0];

menu.onclick = () =>{
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}