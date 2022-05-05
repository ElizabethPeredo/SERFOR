let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar__items");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

