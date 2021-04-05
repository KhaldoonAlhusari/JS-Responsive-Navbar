const btn = document.getElementById("btn");
const navItems = document.getElementById("nav-items");

btn.addEventListener("click", () => {
    navItems.classList.toggle("hidden-mobile")
});