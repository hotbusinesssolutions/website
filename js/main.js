document.addEventListener("DOMContentLoaded", () => {
    /* =========================================================
       PAGE PATHS
       ========================================================= */

    const currentPage = (
        window.location.pathname.split("/").pop() ||
        "index.html"
    ).replace(".html", "");

    const rootPath =
        window.location.pathname.includes("/legal/")
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
       HEADER
       ========================================================= */

    const headerContainer = document.querySelector(
        "[data-site-header]"
    );

    if (headerContainer) {
        const navigationLinks = navigationItems
            .map(([pageName, pageLabel]) => {
                const isCurrentPage =
                    currentPage === pageName;

                if (pageName === "about") {
                    return `
                        <li class="nav-item nav-item-dropdown">
                            <button
                                class="nav-dropdown-toggle"
                                type="button"
                                aria-label="Open About menu"
                                aria-expanded="false"
                                aria-controls="about-submenu"
                                ${
                                    isCurrentPage
                                        ? 'aria-current="page"'
                                        : ""
                                }
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
                            ${
                                isCurrentPage
                                    ? 'aria-current="page"'
                                    : ""
                            }
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
                    <a
                        class="brand"
                        href="${rootPath}index.html"
                        aria-label="HOT Business Solutions home"
                    >
                        <img
                            class="brand-logo"
                            src="${rootPath}images/company-logo.png"
                            alt="HOT Business Solutions"
                        >
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
       FOOTER
       ========================================================= */

    const footerContainer = document.querySelector(
        "[data-site-footer]"
    );

    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="site-footer">
                <div class="container">
                    <div class="footer-grid">
                        <div>
                            <h3>
                                Global talent.<br>
                                <span class="gold">
                                    Real impact.
                                </span>
                            </h3>

                            <p class="footer-description">
                                A House of Travel company supporting
                                Australia, New Zealand and international
                                partners.
                            </p>
                        </div>

                        <div>
                            <p class="footer-title">
                                Explore
                            </p>

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
                            <p class="footer-title">
                                Connect
                            </p>

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
                            <p class="footer-title">
                                Legal
                            </p>

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
                                    <a href="${rootPath}legal/data-protection.html">
                                        Data protection
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}legal/accessibility.html">
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

    document
        .querySelectorAll("[data-year]")
        .forEach((element) => {
            element.textContent =
                new Date().getFullYear();
        });


    /* =========================================================
       MOBILE MENU AND ABOUT DROPDOWN
       ========================================================= */

    const menuButton =
        document.querySelector(".menu-toggle");

    const navigationList =
        document.querySelector(".nav-list");

    const aboutDropdown =
        document.querySelector(".nav-item-dropdown");

    const aboutDropdownButton =
        document.querySelector(
            ".nav-dropdown-toggle"
        );

    const closeAboutDropdown = () => {
        if (!aboutDropdown || !aboutDropdownButton) {
            return;
        }

        aboutDropdown.classList.remove("is-open");

        aboutDropdownButton.setAttribute(
            "aria-expanded",
            "false"
        );
    };

    if (aboutDropdown && aboutDropdownButton) {
        aboutDropdownButton.addEventListener(
            "click",
            (event) => {
                event.stopPropagation();

                const isOpen =
                    aboutDropdown.classList.toggle(
                        "is-open"
                    );

                aboutDropdownButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );
            }
        );

        document.addEventListener(
            "click",
            (event) => {
                if (
                    event.target instanceof Node &&
                    !aboutDropdown.contains(event.target)
                ) {
                    closeAboutDropdown();
                }
            }
        );
    }

    if (menuButton && navigationList) {
        const closeMenu = () => {
            navigationList.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

            closeAboutDropdown();
        };

        menuButton.addEventListener(
            "click",
            () => {
                const isOpen =
                    navigationList.classList.toggle(
                        "open"
                    );

                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                document.body.classList.toggle(
                    "menu-open",
                    isOpen
                );
            }
        );

        navigationList
            .querySelectorAll("a")
            .forEach((link) => {
                link.addEventListener(
                    "click",
                    closeMenu
                );
            });

        document.addEventListener(
            "keydown",
            (event) => {
                if (event.key === "Escape") {
                    closeMenu();
                }
            }
        );

        window.addEventListener(
            "resize",
            () => {
                if (window.innerWidth > 980) {
                    closeMenu();
                }
            }
        );
    }


    /* =========================================================
       HEADER SCROLL STATE
       ========================================================= */

    const siteHeader =
        document.querySelector(".site-header");

    const updateHeader = () => {
        if (!siteHeader) return;

        siteHeader.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );
    };

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    /* =========================================================
       GENERAL SCROLL REVEALS
       ========================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const revealObserver =
            new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add(
                            "in-view"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );
                    });
                },
                {
                    threshold: 0.14,
                }
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

    const operationsScroll =
        document.querySelector(
            "[data-operations-scroll]"
        );

    const operationPanels = [
        ...document.querySelectorAll(
            "[data-operation-panel]"
        ),
    ];

    const simpleOperationsLayout =
        window.matchMedia(
            "(max-width: 900px)"
        );

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    let operationsFrame = null;

    const clamp = (value) => {
        return Math.min(
            Math.max(value, 0),
            1
        );
    };

    const smooth = (value) => {
        return 1 - Math.pow(1 - value, 3);
    };

    const resetOperations = () => {
        if (!operationsScroll) return;

        operationsScroll.classList.remove(
            "is-enhanced"
        );

        operationsScroll.style.setProperty(
            "--operations-progress",
            "0%"
        );

        operationPanels.forEach((panel) => {
            panel.style.removeProperty(
                "--panel-index"
            );

            panel.style.removeProperty(
                "--card-y"
            );

            panel.style.removeProperty(
                "--card-scale"
            );

            panel.style.removeProperty(
                "--card-opacity"
            );

            panel.style.removeProperty(
                "z-index"
            );
        });
    };

    const updateOperations = () => {
        operationsFrame = null;

        if (
            !operationsScroll ||
            !operationPanels.length
        ) {
            return;
        }

        /*
         * Use the normal vertical layout on mobile
         * and when reduced motion is enabled.
         */
        if (
            simpleOperationsLayout.matches ||
            reducedMotion.matches
        ) {
            resetOperations();
            return;
        }

        operationsScroll.classList.add(
            "is-enhanced"
        );

        const bounds =
            operationsScroll.getBoundingClientRect();

        const scrollDistance = Math.max(
            bounds.height - window.innerHeight,
            1
        );

        const progress = clamp(
            -bounds.top / scrollDistance
        );

        /*
         * Complete the card animation at 82%.
         * The remaining 18% holds the finished stack.
         */
        const stackProgress = clamp(
            progress / 0.82
        );

        const transitionCount =
            operationPanels.length - 1;

        const entryDistance = Math.max(
            window.innerHeight * 0.72,
            520
        );

        operationPanels.forEach(
            (panel, index) => {
                /*
                 * Panel 1 starts visible.
                 * Other panels enter sequentially.
                 */
                const rawArrival =
                    index === 0
                        ? 1
                        : clamp(
                            stackProgress *
                                transitionCount -
                            (index - 1)
                        );

                const arrival =
                    index === 0
                        ? 1
                        : smooth(rawArrival);

                /*
                 * Older panels shrink while
                 * the next panel enters.
                 */
                const compression = smooth(
                    clamp(
                        stackProgress *
                            transitionCount -
                        index
                    )
                );

                const finalScale =
                    1 -
                    (
                        transitionCount -
                        index
                    ) *
                        0.05;

                const scale =
                    1 +
                    (
                        finalScale - 1
                    ) *
                        compression;

                const startingY =
                    index === 0
                        ? 0
                        : entryDistance;

                const finalY =
                    index * 20;

                const translateY =
                    startingY +
                    (
                        finalY -
                        startingY
                    ) *
                        arrival;

                panel.style.setProperty(
                    "--panel-index",
                    String(index)
                );

                panel.style.setProperty(
                    "--card-y",
                    `${translateY.toFixed(2)}px`
                );

                panel.style.setProperty(
                    "--card-scale",
                    scale.toFixed(4)
                );

                panel.style.setProperty(
                    "--card-opacity",
                    arrival.toFixed(3)
                );

                panel.style.zIndex = String(index + 1);
            }
        );

        operationsScroll.style.setProperty(
            "--operations-progress",
            `${(progress * 100).toFixed(2)}%`
        );
    };

    const requestOperationsUpdate = () => {
        if (operationsFrame !== null) {
            return;
        }

        operationsFrame =
            window.requestAnimationFrame(
                updateOperations
            );
    };

    if (
        operationsScroll &&
        operationPanels.length
    ) {
        updateOperations();

        window.addEventListener(
            "scroll",
            requestOperationsUpdate,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            requestOperationsUpdate
        );

        if (
            typeof simpleOperationsLayout
                .addEventListener === "function"
        ) {
            simpleOperationsLayout.addEventListener(
                "change",
                requestOperationsUpdate
            );
        }

        if (
            typeof reducedMotion
                .addEventListener === "function"
        ) {
            reducedMotion.addEventListener(
                "change",
                requestOperationsUpdate
            );
        }
    }


    /* =========================================================
       WORD REVEAL
       ========================================================= */

    document
        .querySelectorAll(
            "[data-word-reveal]"
        )
        .forEach((element) => {
            let wordIndex = 0;
            const textNodes = [];

            const walker =
                document.createTreeWalker(
                    element,
                    NodeFilter.SHOW_TEXT
                );

            while (walker.nextNode()) {
                textNodes.push(
                    walker.currentNode
                );
            }

            textNodes.forEach((textNode) => {
                const fragment =
                    document.createDocumentFragment();

                textNode.textContent
                    .split(/(\s+)/)
                    .forEach((part) => {
                        if (!part) return;

                        if (/^\s+$/.test(part)) {
                            fragment.append(part);
                            return;
                        }

                        const mask =
                            document.createElement(
                                "span"
                            );

                        const word =
                            document.createElement(
                                "span"
                            );

                        mask.className = "word";

                        word.style.setProperty(
                            "--i",
                            String(wordIndex)
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

    const supportsFinePointer =
        window.matchMedia(
            "(pointer: fine)"
        );

    document
        .querySelectorAll("[data-magnetic]")
        .forEach((button) => {
            button.addEventListener(
                "pointermove",
                (event) => {
                    if (
                        !supportsFinePointer.matches
                    ) {
                        return;
                    }

                    const bounds =
                        button.getBoundingClientRect();

                    const horizontalOffset =
                        (
                            event.clientX -
                            bounds.left -
                            bounds.width / 2
                        ) *
                        0.12;

                    const verticalOffset =
                        (
                            event.clientY -
                            bounds.top -
                            bounds.height / 2
                        ) *
                        0.12;

                    button.style.transform =
                        `translate(
                            ${horizontalOffset}px,
                            ${verticalOffset}px
                        )`;
                }
            );

            button.addEventListener(
                "pointerleave",
                () => {
                    button.style.transform = "";
                }
            );
        });


    /* =========================================================
       CORE SERVICE PILLARS
       ========================================================= */

    const serviceTabs = [
        ...document.querySelectorAll(
            ".service-tab"
        ),
    ];

    const servicePanel =
        document.querySelector(
            ".service-panel"
        );

    const serviceTitle =
        document.querySelector(
            "[data-service-title]"
        );

    const serviceCopy =
        document.querySelector(
            "[data-service-copy]"
        );

    const serviceFlow =
        document.querySelector(
            "[data-service-flow]"
        );

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
                "Voice, email and chat support for customers, agents and sales teams.",
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
                "HR administration, payroll coordination, attendance, benefits and offboarding support.",
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
                "BGC workspaces, IT support, system security, equipment and continuity support.",
            flow: [
                "Equip",
                "Secure",
                "Operate",
                "Continue",
            ],
        },
    };

    let serviceTransitionTimer = null;

    const activateService = (
        selectedTab
    ) => {
        if (
            selectedTab.classList.contains(
                "active"
            ) ||
            !servicePanel ||
            !serviceTitle ||
            !serviceCopy ||
            !serviceFlow
        ) {
            return;
        }

        const serviceName =
            selectedTab.dataset.service;

        const selectedService =
            services[serviceName];

        if (!selectedService) return;

        serviceTabs.forEach((tab) => {
            const isActive =
                tab === selectedTab;

            tab.classList.toggle(
                "active",
                isActive
            );

            tab.setAttribute(
                "aria-selected",
                String(isActive)
            );
        });

        window.clearTimeout(
            serviceTransitionTimer
        );

        servicePanel.classList.remove(
            "is-entering"
        );

        servicePanel.classList.add(
            "is-changing"
        );

        serviceTransitionTimer =
            window.setTimeout(() => {
                serviceTitle.textContent =
                    selectedService.title;

                serviceCopy.textContent =
                    selectedService.description;

                serviceFlow.innerHTML =
                    selectedService.flow
                        .map(
                            (step) =>
                                `<span>${step}</span>`
                        )
                        .join("");

                servicePanel.classList.remove(
                    "is-changing"
                );

                /*
                 * Force the browser to restart
                 * the entrance animation.
                 */
                void servicePanel.offsetWidth;

                servicePanel.classList.add(
                    "is-entering"
                );

                window.setTimeout(() => {
                    servicePanel.classList.remove(
                        "is-entering"
                    );
                }, 650);
            }, 220);
    };

    serviceTabs.forEach((tab) => {
        tab.addEventListener(
            "click",
            () => {
                activateService(tab);
            }
        );

        tab.addEventListener(
            "keydown",
            (event) => {
                const validKey =
                    event.key === "ArrowDown" ||
                    event.key === "ArrowUp";

                if (!validKey) return;

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
                    ) %
                    serviceTabs.length;

                const nextTab =
                    serviceTabs[nextIndex];

                nextTab.focus();
                activateService(nextTab);
            }
        );
    });
});