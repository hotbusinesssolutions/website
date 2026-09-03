/* =========================================================
   HOT BUSINESS SOLUTIONS
   GLOBAL JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- MOBILE NAVIGATION ---------- */

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-menu");

    if (menuButton && navigation) {
        const closeMenu = () => {
            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        };

        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
        });

        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key !== "Escape") return;

            closeMenu();
            menuButton.focus();
        });
    }


    /* ---------- ACTIVE PAGE ---------- */

    const currentPage =
        window.location.pathname.split("/").pop() ||
        "index.html";

    document.querySelectorAll(".nav-menu a").forEach((link) => {
        if (link.getAttribute("href") !== currentPage) return;

        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    });


    /* ---------- COPYRIGHT ---------- */

    const year = document.querySelector("#current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ---------- WORD REVEAL ---------- */

    document.querySelectorAll("[data-word-reveal]")
        .forEach((element) => {
            let wordIndex = 0;

            const processNode = (node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const fragment =
                        document.createDocumentFragment();

                    node.textContent
                        .split(/(\s+)/)
                        .forEach((part) => {
                            if (!part) return;

                            if (/^\s+$/.test(part)) {
                                fragment.append(
                                    document.createTextNode(part)
                                );
                                return;
                            }

                            const mask =
                                document.createElement("span");

                            const word =
                                document.createElement("span");

                            mask.className = "reveal-word-mask";
                            word.className = "reveal-word";
                            word.textContent = part;

                            word.style.setProperty(
                                "--word-index",
                                wordIndex++
                            );

                            mask.append(word);
                            fragment.append(mask);
                        });

                    node.replaceWith(fragment);
                    return;
                }

                [...node.childNodes].forEach(processNode);
            };

            [...element.childNodes].forEach(processNode);
        });


    /* ---------- SCROLL REVEAL ---------- */

 const revealElements =
    document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add(
                    "is-visible"
                );

                observer.unobserve(
                    entry.target
                );
            });
        },
        { threshold: 0.15 }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("is-visible");
    });
}

    /* ---------- SERVICES EXPLORER ---------- */

const serviceTabs =
    document.querySelectorAll(".service-tab");

const servicePanel =
    document.querySelector("#service-panel");

const serviceNumber =
    document.querySelector("#service-number");

const serviceTitle =
    document.querySelector("#service-title");

const serviceDescription =
    document.querySelector("#service-description");

const serviceCopy =
    document.querySelector(".service-copy");

const services = {
    recruitment: {
        number: "01",
        title: "Talent Sourcing & Recruitment",
        description:
            "Access experienced, travel-trained and " +
            "service-oriented professionals from our " +
            "specialised talent network in the Philippines."
    },

    eor: {
        number: "02",
        title: "Employer of Record",
        description:
            "We support employment requirements while " +
            "you maintain full control over your team's " +
            "day-to-day work."
    },

    hr: {
        number: "03",
        title: "HR, Payroll & Compliance",
        description:
            "End-to-end employee lifecycle support " +
            "including onboarding, contracts, payroll, " +
            "benefits and government compliance."
    },

    workspace: {
        number: "04",
        title: "Office & Workspace",
        description:
            "Your team works from our secure, " +
            "well-equipped workspace in BGC with " +
            "managed facilities and IT support."
    },

    experience: {
        number: "05",
        title: "Employee Experience & Well-Being",
        description:
            "We support a positive workplace culture " +
            "through employee engagement, competitive " +
            "benefits and continuous people support."
    }
};

if (
    serviceTabs.length &&
    servicePanel &&
    serviceNumber &&
    serviceTitle &&
    serviceDescription &&
    serviceCopy
) {
    serviceTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const service =
                services[tab.dataset.service];

            if (!service) return;

            serviceTabs.forEach((item) => {
                item.classList.remove("active");
                item.setAttribute(
                    "aria-selected",
                    "false"
                );
            });

            tab.classList.add("active");

            tab.setAttribute(
                "aria-selected",
                "true"
            );

            servicePanel.setAttribute(
                "aria-labelledby",
                tab.id
            );

            serviceNumber.textContent =
                service.number;

            serviceTitle.textContent =
                service.title;

            serviceDescription.textContent =
                service.description;

            serviceCopy.classList.remove(
                "is-changing"
            );

            void serviceCopy.offsetWidth;

            serviceCopy.classList.add(
                "is-changing"
            );
        });
    });
}

});