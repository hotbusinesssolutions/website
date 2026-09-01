/* =========================================================
   HOT BUSINESS SOLUTIONS
   Global JavaScript
========================================================= */


document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-menu");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        /* Close menu after selecting a page */

        navigation
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    navigation.classList.remove("open");

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });


        /* Close mobile menu with Escape key */

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.focus();

            }

        });

    }


    /* =====================================================
       ACTIVE NAVIGATION PAGE
    ===================================================== */

    const navigationLinks =
        document.querySelectorAll(".nav-menu a");


    let currentPage =
        window.location.pathname.split("/").pop();


    /*
       GitHub Pages may serve the homepage as:
       /website/
       instead of:
       /website/index.html
    */

    if (!currentPage) {
        currentPage = "index.html";
    }


    navigationLinks.forEach((link) => {

        const linkPage =
            link.getAttribute("href");


        if (linkPage === currentPage) {

            link.classList.add("active");

            link.setAttribute(
                "aria-current",
                "page"
            );

        }

    });


    /* =====================================================
       COPYRIGHT YEAR
    ===================================================== */

    const yearElement =
        document.querySelector("#current-year");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});
