window.onload = function() {
const navbar = document.querySelector('#navbar');
const toggleNavbar = document.querySelector('#toggle-button');

toggleNavbar.onclick = () => {
    navbar.classList.toggle('collapsed');
};}