const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-menu");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}


const year = document.querySelector("#current-year");

if (year) {
    year.textContent = new Date().getFullYear();
}
