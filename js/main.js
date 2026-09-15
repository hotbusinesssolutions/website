document.addEventListener("DOMContentLoaded", () => {
    /* =========================================================
       PAGE PATHS
       ========================================================= */

    const currentPage = (
        window.location.pathname.split("/").pop() || "index.html"
    ).replace(".html", "");

    const rootPath = window.location.pathname.includes("/legal/")
        ? "../"
        : "";

    const navigationItems = [
        ["index", "Home"],
        ["about", "About"],
        ["services", "Services"],
        ["industries", "Industries"],
        ["how-we-work", "How We Work"],
        ["insights", "Insights"],
        ["careers", "Careers"],
        ["contact", "Contact"],
    ];

    /* =========================================================
       SHARED HEADER
       ========================================================= */

    const headerContainer = document.querySelector("[data-site-header]");

    if (headerContainer) {
        const navigationLinks = navigationItems
            .map(([pageName, pageLabel]) => {
                const currentAttribute =
                    currentPage === pageName
                        ? 'aria-current="page"'
                        : "";

                return `
                    <li>
                        <a
                            href="${rootPath}${pageName}.html"
                            ${currentAttribute}
                        >
                            ${pageLabel}
                        </a>
                    </li>
                `;
            })
            .join("");

        headerContainer.innerHTML = `
            <a class="skip-link" href="#main-content">
                Skip to content
            </a>

            <header class="site-header">
                <div class="container nav-shell">
                    <a class="brand" href="${rootPath}index.html">
                        HOT <span>Business</span> Solutions
                    </a>

                    <button
                        class="menu-toggle"
                        type="button"
                        aria-label="Open menu"
                        aria-expanded="false"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav aria-label="Main navigation">
                        <ul class="nav-list">
                            ${navigationLinks}
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }

    /* =========================================================
       SHARED FOOTER
       ========================================================= */

    const footerContainer = document.querySelector("[data-site-footer]");

    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="site-footer">
                <div class="container">
                    <div class="footer-grid">
                        <div>
                            <h3>
                                Global talent.<br>
                                <span class="gold">Real impact.</span>
                            </h3>

                            <p class="footer-description">
                                A House of Travel company supporting Australia,
                                New Zealand and international partners.
                            </p>
                        </div>

                        <div>
                            <p class="footer-title">Explore</p>
                            <ul class="footer-links">
                                <li><a href="${rootPath}about.html">About</a></li>
                                <li><a href="${rootPath}services.html">Services</a></li>
                                <li><a href="${rootPath}how-we-work.html">How we work</a></li>
                                <li><a href="${rootPath}careers.html">Careers</a></li>
                            </ul>
                        </div>

                        <div>
                            <p class="footer-title">Connect</p>
                            <ul class="footer-links">
                                <li><a href="${rootPath}contact.html">Build your team</a></li>
                                <li><a href="${rootPath}contact.html#careers">Careers enquiry</a></li>
                                <li><a href="${rootPath}contact.html#office">Manila office</a></li>
                            </ul>
                        </div>

                        <div>
                            <p class="footer-title">Legal</p>
                            <ul class="footer-links">
                                <li><a href="${rootPath}legal/privacy.html">Privacy</a></li>
                                <li><a href="${rootPath}legal/terms.html">Terms</a></li>
                                <li><a href="${rootPath}legal/cookies.html">Cookies</a></li>
                                <li><a href="${rootPath}legal/data-protection.html">Data protection</a></li>
                                <li><a href="${rootPath}legal/accessibility.html">Accessibility</a></li>
                                <li><a href="${rootPath}legal/security.html">Security</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <span>
                            © <span data-year></span>
                            HOT Business Solutions Inc.
                        </span>

                        <span>BGC, Metro Manila, Philippines</span>
                    </div>
                </div>
            </footer>
        `;
    }

    document.querySelectorAll("[data-year]").forEach((yearElement) => {
        yearElement.textContent = new Date().getFullYear();
    });

    /* =========================================================
       MOBILE MENU
       ========================================================= */

    const menuButton = document.querySelector(".menu-toggle");
    const navigationList = document.querySelector(".nav-list");

    if (menuButton && navigationList) {
        const closeMenu = () => {
            navigationList.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            document.body.classList.remove("menu-open");
        };

        menuButton.addEventListener("click", () => {
            const isOpen = navigationList.classList.toggle("open");

            menuButton.setAttribute("aria-expanded", String(isOpen));
            document.body.classList.toggle("menu-open", isOpen);
        });

        navigationList.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeMenu();
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 980) closeMenu();
        });
    }

    /* =========================================================
       HEADER SCROLL STATE
       ========================================================= */

    const siteHeader = document.querySelector(".site-header");

    const updateHeader = () => {
        siteHeader?.classList.toggle("scrolled", window.scrollY > 30);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    /* =========================================================
       SCROLL REVEALS
       ========================================================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("in-view");
                    revealObserver.unobserve(entry.target);
                });
            },
            {
                threshold: 0.14,
            },
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach((element) => {
            element.classList.add("in-view");
        });
    }

    /* =========================================================
       WORD-REVEAL ANIMATION
       ========================================================= */

    document.querySelectorAll("[data-word-reveal]").forEach((element) => {
        let wordIndex = 0;
        const textNodes = [];
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
        );

        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        textNodes.forEach((textNode) => {
            const fragment = document.createDocumentFragment();

            textNode.textContent.split(/(\s+)/).forEach((part) => {
                if (!part) return;

                if (/^\s+$/.test(part)) {
                    fragment.append(part);
                    return;
                }

                const mask = document.createElement("span");
                const word = document.createElement("span");

                mask.className = "word";
                word.style.setProperty("--i", wordIndex);
                word.textContent = part;

                wordIndex += 1;
                mask.append(word);
                fragment.append(mask);
            });

            textNode.replaceWith(fragment);
        });
    });

    /* =========================================================
       MAGNETIC BUTTONS
       ========================================================= */

    const supportsFinePointer = window.matchMedia("(pointer: fine)");

    document.querySelectorAll("[data-magnetic]").forEach((button) => {
        button.addEventListener("pointermove", (event) => {
            if (!supportsFinePointer.matches) return;

            const bounds = button.getBoundingClientRect();
            const horizontalOffset =
                (event.clientX - bounds.left - bounds.width / 2) * 0.12;
            const verticalOffset =
                (event.clientY - bounds.top - bounds.height / 2) * 0.12;

            button.style.transform = `translate(
                ${horizontalOffset}px,
                ${verticalOffset}px
            )`;
        });

        button.addEventListener("pointerleave", () => {
            button.style.transform = "";
        });
    });

    /* =========================================================
       CORE SERVICE PILLARS
       ========================================================= */

    const serviceTabs = [...document.querySelectorAll(".service-tab")];
    const servicePanel = document.querySelector(".service-panel");
    const serviceTitle = document.querySelector("[data-service-title]");
    const serviceCopy = document.querySelector("[data-service-copy]");
    const serviceFlow = document.querySelector("[data-service-flow]");

    const services = {
        talent: {
            title: "Build Your Offshore Team",
            description:
                "Sourcing, screening, recruitment, onboarding and ongoing people support from Manila.",
            flow: ["Calibrate", "Select", "Onboard", "Support"],
        },
        travel: {
            title: "Travel Operations",
            description:
                "GDS-based ticketing, reissuance, refunds, itinerary management and travel administration.",
            flow: ["GDS", "Ticket", "Manage", "Resolve"],
        },
        cx: {
            title: "Customer Experience",
            description:
                "Dependable voice, email and chat support for customers, agents and sales teams.",
            flow: ["Connect", "Assist", "Resolve", "Learn"],
        },
        finance: {
            title: "Finance & Back Office",
            description:
                "AR/AP, reconciliation, invoicing, financial reporting and administrative support.",
            flow: ["Process", "Check", "Report", "Improve"],
        },
        shared: {
            title: "HR & Shared Services",
            description:
                "Employee lifecycle support spanning HR administration, payroll coordination, attendance, benefits and offboarding.",
            flow: ["Employ", "Care", "Comply", "Retain"],
        },
        workplace: {
            title: "Managed Workplace",
            description:
                "Secure BGC workspaces, IT support, system security, equipment and continuity support.",
            flow: ["Equip", "Secure", "Operate", "Continue"],
        },
    };

    let serviceTransitionTimer;

    const activateService = (selectedTab) => {
        if (
            selectedTab.classList.contains("active") ||
            !servicePanel ||
            !serviceTitle ||
            !serviceCopy ||
            !serviceFlow
        ) {
            return;
        }

        const selectedService = services[selectedTab.dataset.service];

        if (!selectedService) return;

        serviceTabs.forEach((tab) => {
            const isActive = tab === selectedTab;

            tab.classList.toggle("active", isActive);
            tab.setAttribute("aria-selected", String(isActive));
        });

        window.clearTimeout(serviceTransitionTimer);
        servicePanel.classList.remove("is-entering");
        servicePanel.classList.add("is-changing");

        serviceTransitionTimer = window.setTimeout(() => {
            serviceTitle.textContent = selectedService.title;
            serviceCopy.textContent = selectedService.description;
            serviceFlow.innerHTML = selectedService.flow
                .map((step) => `<span>${step}</span>`)
                .join("");

            servicePanel.classList.remove("is-changing");

            /* Restart the entrance animation after updating the content. */
            void servicePanel.offsetWidth;

            servicePanel.classList.add("is-entering");

            window.setTimeout(() => {
                servicePanel.classList.remove("is-entering");
            }, 650);
        }, 220);
    };

    serviceTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            activateService(tab);
        });

        tab.addEventListener("keydown", (event) => {
            if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
                return;
            }

            event.preventDefault();

            const currentIndex = serviceTabs.indexOf(tab);
            const direction = event.key === "ArrowDown" ? 1 : -1;
            const nextIndex =
                (currentIndex + direction + serviceTabs.length) %
                serviceTabs.length;
            const nextTab = serviceTabs[nextIndex];

            nextTab.focus();
            activateService(nextTab);
        });
    });
});
