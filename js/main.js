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

                if (pageName === "about") {
                    return `
                        <li class="nav-item nav-item-dropdown">
                            <button
                                class="nav-dropdown-toggle"
                                type="button"
                                aria-label="Toggle About submenu"
                                aria-expanded="false"
                                aria-controls="about-submenu"
                                ${currentAttribute}
                            >
                                About
                            </button>

                            <ul
                                class="nav-submenu"
                                id="about-submenu"
                            >
                                <li>
                                    <a href="${rootPath}about.html#who">
                                        Who we are
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}about.html#story">
                                        Our story
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}about.html#leadership">
                                        Leadership
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}about.html#group">
                                        House of Travel
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}about.html#manila">
                                        Manila operations
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}about.html#culture">
                                        Culture
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}about.html#corporate">
                                        Corporate information
                                    </a>
                                </li>
                            </ul>
                        </li>
                    `;
                }

                return `
                    <li class="nav-item">
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
            <a
                class="skip-link"
                href="#main-content"
            >
                Skip to content
            </a>

            <header class="site-header">
                <div class="container nav-shell">
                    <a
                        class="brand"
                        href="${rootPath}index.html"
                        aria-label="HOT Business Solutions home"
                    >
                        <img
                            class="brand-logo"
                            src="${rootPath}images/company-logo.png"
                            alt="HOT Business Solutions"
                        />
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
                                <li>
                                    <a href="${rootPath}about.html">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}services.html">
                                        Services
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}how-we-work.html">
                                        How we work
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}careers.html">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p class="footer-title">Connect</p>

                            <ul class="footer-links">
                                <li>
                                    <a href="${rootPath}contact.html">
                                        Build your team
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}contact.html#careers">
                                        Careers enquiry
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}contact.html#office">
                                        Manila office
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p class="footer-title">Legal</p>

                            <ul class="footer-links">
                                <li>
                                    <a href="${rootPath}legal/privacy.html">
                                        Privacy
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}legal/terms.html">
                                        Terms
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}legal/cookies.html">
                                        Cookies
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="${rootPath}legal/data-protection.html"
                                    >
                                        Data protection
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="${rootPath}legal/accessibility.html"
                                    >
                                        Accessibility
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}legal/security.html">
                                        Security
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <span>
                            © <span data-year></span>
                            HOT Business Solutions Inc.
                        </span>

                        <span>
                            BGC, Metro Manila, Philippines
                        </span>
                    </div>
                </div>
            </footer>
        `;
    }

    document.querySelectorAll("[data-year]").forEach((yearElement) => {
        yearElement.textContent = new Date().getFullYear();
    });

    /* =========================================================
       MOBILE MENU AND ABOUT DROPDOWN
       ========================================================= */

    const menuButton = document.querySelector(".menu-toggle");
    const navigationList = document.querySelector(".nav-list");
    const aboutDropdown = document.querySelector(".nav-item-dropdown");
    const aboutDropdownButton = document.querySelector(
        ".nav-dropdown-toggle",
    );

    const closeAboutDropdown = () => {
        aboutDropdown?.classList.remove("is-open");

        aboutDropdownButton?.setAttribute(
            "aria-expanded",
            "false",
        );
    };

    if (aboutDropdown && aboutDropdownButton) {
        aboutDropdownButton.addEventListener("click", (event) => {
            event.stopPropagation();

            const isOpen = aboutDropdown.classList.toggle("is-open");

            aboutDropdownButton.setAttribute(
                "aria-expanded",
                String(isOpen),
            );
        });

        document.addEventListener("click", (event) => {
            if (!aboutDropdown.contains(event.target)) {
                closeAboutDropdown();
            }
        });
    }

    if (menuButton && navigationList) {
        const closeMenu = () => {
            navigationList.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            document.body.classList.remove("menu-open");

            closeAboutDropdown();
        };

        menuButton.addEventListener("click", () => {
            const isOpen = navigationList.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen),
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen,
            );
        });

        navigationList
            .querySelectorAll("a")
            .forEach((link) => {
                link.addEventListener("click", closeMenu);
            });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 980) {
                closeMenu();
            }
        });
    }

    /* =========================================================
       HEADER SCROLL STATE
       ========================================================= */

    const siteHeader = document.querySelector(".site-header");

    const updateHeader = () => {
        siteHeader?.classList.toggle(
            "scrolled",
            window.scrollY > 30,
        );
    };

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true },
    );

    /* =========================================================
       SCROLL REVEALS
       ========================================================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

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
       MANILA OPERATING MODEL
       ========================================================= */

    const operationsScroll = document.querySelector(
        "[data-operations-scroll]",
    );

    const operationPanels = [
        ...document.querySelectorAll("[data-operation-panel]"),
    ];

    const simpleOperationsLayout = window.matchMedia(
        "(max-width: 900px)",
    );

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    );

    let operationsFrame;

    const clamp = (value) => {
        return Math.min(Math.max(value, 0), 1);
    };

    const smooth = (value) => {
        return 1 - Math.pow(1 - value, 3);
    };

    const resetOperations = () => {
        operationsScroll?.classList.remove("is-enhanced");

        operationPanels.forEach((panel) => {
            panel.style.removeProperty("--panel-index");
            panel.style.removeProperty("--card-y");
            panel.style.removeProperty("--card-scale");
        });

        operationsScroll?.style.setProperty(
            "--operations-progress",
            "0%",
        );
    };

    const updateOperations = () => {
        operationsFrame = null;

        if (!operationsScroll || !operationPanels.length) {
            return;
        }

        if (
            simpleOperationsLayout.matches ||
            reducedMotion.matches
        ) {
            resetOperations();
            return;
        }

        operationsScroll.classList.add("is-enhanced");

        const bounds = operationsScroll.getBoundingClientRect();

        const scrollDistance = Math.max(
            bounds.height - window.innerHeight,
            1,
        );

        const stickyTop = 96;

        const progress = clamp(
            (stickyTop - bounds.top) / scrollDistance,
        );

        /*
         * The first 82% of the section builds the panel stack.
         * The remaining 18% briefly holds the completed stack.
         */
        const stackProgress = clamp(progress / 0.86);
        const transitions = operationPanels.length - 1;

        const cardHeight =
            operationPanels[0].getBoundingClientRect().height;

        const cardGap = Math.max(
            window.innerHeight * 0.055,
            36,
        );

        const travelUnit = cardHeight + cardGap;
        const timeline = stackProgress * transitions;
        const scaleStep = transitions > 0 ? 0.2 / transitions : 0;

        operationPanels.forEach((panel, index) => {
            /* All following panels rise together during each phase. */
            const travelledUnits = Math.min(index, timeline);
            const arrivalProgress = index === 0
                ? 1
                : smooth(clamp(timeline - (index - 1)));
            const layerOffset = index * 38 * arrivalProgress;
            const translateY =
                index * travelUnit -
                travelledUnits * travelUnit +
                layerOffset;

            /* A covered panel gradually falls back toward the stack. */
            const exposure = Math.max(0, timeline - index);
            const completedCovers = Math.max(
                0,
                Math.min(transitions - index, Math.floor(exposure)),
            );
            const partialCover = clamp(exposure - completedCovers);
            const scale = 1 -
                scaleStep * (completedCovers + smooth(partialCover));

            panel.style.setProperty(
                "--panel-index",
                index,
            );

            panel.style.setProperty(
                "--card-y",
                `${translateY.toFixed(2)}px`,
            );

            panel.style.setProperty(
                "--card-scale",
                scale.toFixed(4),
            );
        });

        operationsScroll.style.setProperty(
            "--operations-progress",
            `${progress * 100}%`,
        );
    };

    const requestOperationsUpdate = () => {
        if (operationsFrame) {
            return;
        }

        operationsFrame =
            window.requestAnimationFrame(updateOperations);
    };

    if (operationsScroll) {
        updateOperations();

        window.addEventListener(
            "scroll",
            requestOperationsUpdate,
            { passive: true },
        );

        window.addEventListener(
            "resize",
            requestOperationsUpdate,
        );

        simpleOperationsLayout.addEventListener?.(
            "change",
            requestOperationsUpdate,
        );

        reducedMotion.addEventListener?.(
            "change",
            requestOperationsUpdate,
        );
    }

    /* =========================================================
       WORD-REVEAL ANIMATION
       ========================================================= */

    document
        .querySelectorAll("[data-word-reveal]")
        .forEach((element) => {
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
                const fragment =
                    document.createDocumentFragment();

                textNode.textContent
                    .split(/(\s+)/)
                    .forEach((part) => {
                        if (!part) {
                            return;
                        }

                        if (/^\s+$/.test(part)) {
                            fragment.append(part);
                            return;
                        }

                        const mask =
                            document.createElement("span");

                        const word =
                            document.createElement("span");

                        mask.className = "word";

                        word.style.setProperty(
                            "--i",
                            wordIndex,
                        );

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

    const supportsFinePointer = window.matchMedia(
        "(pointer: fine)",
    );

    document
        .querySelectorAll("[data-magnetic]")
        .forEach((button) => {
            button.addEventListener(
                "pointermove",
                (event) => {
                    if (!supportsFinePointer.matches) {
                        return;
                    }

                    const bounds =
                        button.getBoundingClientRect();

                    const horizontalOffset =
                        (
                            event.clientX -
                            bounds.left -
                            bounds.width / 2
                        ) * 0.12;

                    const verticalOffset =
                        (
                            event.clientY -
                            bounds.top -
                            bounds.height / 2
                        ) * 0.12;

                    button.style.transform = `
                        translate(
                            ${horizontalOffset}px,
                            ${verticalOffset}px
                        )
                    `;
                },
            );

            button.addEventListener(
                "pointerleave",
                () => {
                    button.style.transform = "";
                },
            );
        });

    /* =========================================================
       CORE SERVICE PILLARS
       ========================================================= */

    const serviceTabs = [
        ...document.querySelectorAll(".service-tab"),
    ];

    const servicePanel =
        document.querySelector(".service-panel");

    const serviceTitle =
        document.querySelector("[data-service-title]");

    const serviceCopy =
        document.querySelector("[data-service-copy]");

    const serviceFlow =
        document.querySelector("[data-service-flow]");

    const services = {
        talent: {
            title: "Build Your Offshore Team",
            description:
                "Sourcing, screening, recruitment, onboarding and ongoing people support from Manila.",
            flow: [
                "Calibrate",
                "Select",
                "Onboard",
                "Support",
            ],
        },

        travel: {
            title: "Travel Operations",
            description:
                "GDS-based ticketing, reissuance, refunds, itinerary management and travel administration.",
            flow: [
                "GDS",
                "Ticket",
                "Manage",
                "Resolve",
            ],
        },

        cx: {
            title: "Customer Experience",
            description:
                "Dependable voice, email and chat support for customers, agents and sales teams.",
            flow: [
                "Connect",
                "Assist",
                "Resolve",
                "Learn",
            ],
        },

        finance: {
            title: "Finance & Back Office",
            description:
                "AR/AP, reconciliation, invoicing, financial reporting and administrative support.",
            flow: [
                "Process",
                "Check",
                "Report",
                "Improve",
            ],
        },

        shared: {
            title: "HR & Shared Services",
            description:
                "Employee lifecycle support spanning HR administration, payroll coordination, attendance, benefits and offboarding.",
            flow: [
                "Employ",
                "Care",
                "Comply",
                "Retain",
            ],
        },

        workplace: {
            title: "Managed Workplace",
            description:
                "Secure BGC workspaces, IT support, system security, equipment and continuity support.",
            flow: [
                "Equip",
                "Secure",
                "Operate",
                "Continue",
            ],
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

        const selectedService =
            services[selectedTab.dataset.service];

        if (!selectedService) {
            return;
        }

        serviceTabs.forEach((tab) => {
            const isActive = tab === selectedTab;

            tab.classList.toggle(
                "active",
                isActive,
            );

            tab.setAttribute(
                "aria-selected",
                String(isActive),
            );
        });

        window.clearTimeout(serviceTransitionTimer);

        servicePanel.classList.remove("is-entering");
        servicePanel.classList.add("is-changing");

        serviceTransitionTimer =
            window.setTimeout(() => {
                serviceTitle.textContent =
                    selectedService.title;

                serviceCopy.textContent =
                    selectedService.description;

                serviceFlow.innerHTML =
                    selectedService.flow
                        .map((step) => {
                            return `<span>${step}</span>`;
                        })
                        .join("");

                servicePanel.classList.remove(
                    "is-changing",
                );

                /*
                 * Force the browser to calculate the updated
                 * layout before restarting the entrance effect.
                 */
                void servicePanel.offsetWidth;

                servicePanel.classList.add(
                    "is-entering",
                );

                window.setTimeout(() => {
                    servicePanel.classList.remove(
                        "is-entering",
                    );
                }, 650);
            }, 220);
    };

    serviceTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            activateService(tab);
        });

        tab.addEventListener(
            "keydown",
            (event) => {
                if (
                    event.key !== "ArrowDown" &&
                    event.key !== "ArrowUp"
                ) {
                    return;
                }

                event.preventDefault();

                const currentIndex =
                    serviceTabs.indexOf(tab);

                const direction =
                    event.key === "ArrowDown"
                        ? 1
                        : -1;

                const nextIndex =
                    (
                        currentIndex +
                        direction +
                        serviceTabs.length
                    ) % serviceTabs.length;

                const nextTab =
                    serviceTabs[nextIndex];

                nextTab.focus();
                activateService(nextTab);
            },
        );
    });
});
