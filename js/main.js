/* Progressive enhancement: CSS keeps reveal content visible until JavaScript
   is available, then enables the animated state below. */
document.documentElement.classList.add("reveal-ready");

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
                            <div class="footer-brand-mark">
                                <img class="footer-logo" src="${rootPath}images/company-logo.png" alt="HOT Business Solutions Inc." />
                            </div>
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
                                        Business inquiries
                                    </a>
                                </li>

                                <li>
                                    <a href="${rootPath}careers.html">
                                        Career opportunities
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
       MOBILE MENU AND NAVIGATION DROPDOWNS
       ========================================================= */

    const menuButton = document.querySelector(".menu-toggle");
    const navigationList = document.querySelector(".nav-list");
    const navigationDropdowns = document.querySelectorAll(
        ".nav-item-dropdown",
    );
    const desktopHover = window.matchMedia(
        "(min-width: 981px) and (hover: hover)",
    );

    const closeDropdown = (dropdown) => {
        dropdown.classList.remove("is-open");
        dropdown
            .querySelector(".nav-dropdown-toggle")
            ?.setAttribute("aria-expanded", "false");
    };

    const closeAllDropdowns = (exception = null) => {
        navigationDropdowns.forEach((dropdown) => {
            if (dropdown !== exception) {
                closeDropdown(dropdown);
            }
        });
    };

    navigationDropdowns.forEach((dropdown) => {
        const dropdownButton = dropdown.querySelector(
            ".nav-dropdown-toggle",
        );

        if (!dropdownButton) {
            return;
        }

        const setExpanded = (isExpanded) => {
            dropdownButton.setAttribute(
                "aria-expanded",
                String(isExpanded),
            );
        };

        dropdown.addEventListener("mouseenter", () => {
            if (desktopHover.matches) {
                closeAllDropdowns(dropdown);
                setExpanded(true);
            }
        });

        dropdown.addEventListener("mouseleave", () => {
            if (desktopHover.matches) {
                setExpanded(false);
            }
        });

        dropdown.addEventListener("focusin", () => {
            if (desktopHover.matches) {
                closeAllDropdowns(dropdown);
                setExpanded(true);
            }
        });

        dropdown.addEventListener("focusout", (event) => {
            if (
                desktopHover.matches &&
                !dropdown.contains(event.relatedTarget)
            ) {
                setExpanded(false);
            }
        });

        dropdownButton.addEventListener("click", (event) => {
            event.stopPropagation();

            if (desktopHover.matches) {
                return;
            }

            const shouldOpen = !dropdown.classList.contains("is-open");
            closeAllDropdowns(dropdown);
            dropdown.classList.toggle("is-open", shouldOpen);
            setExpanded(shouldOpen);
        });
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".nav-item-dropdown")) {
            closeAllDropdowns();
        }
    });

    if (menuButton && navigationList) {
        const closeMenu = () => {
            navigationList.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            document.body.classList.remove("menu-open");

            closeAllDropdowns();
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

        // Safety net for delayed observers, anchor jumps and full-page captures.
        // Normal scrolling still uses the intersection animation first.
        window.setTimeout(() => {
            revealElements.forEach((element) => {
                element.classList.add("in-view");
            });
        }, 1800);
    } else {
        revealElements.forEach((element) => {
            element.classList.add("in-view");
        });
    }

    /* =========================================================
       HOMEPAGE CAPABILITY COUNTERS
       ========================================================= */

    const capabilityLayout = document.querySelector(".capability-layout");
    const capabilityCounters = capabilityLayout
        ? [
              ...capabilityLayout.querySelectorAll(
                  ".cap-meta > :last-child",
              ),
          ]
        : [];

    if (capabilityLayout && capabilityCounters.length) {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        const counters = capabilityCounters
            .map((element) => {
                const originalText = element.textContent.trim();
                const numericMatch = originalText.match(/-?\d+(?:\.\d+)?/);

                if (!numericMatch) {
                    return null;
                }

                const target = Number(numericMatch[0]);
                const decimalPlaces = (numericMatch[0].split(".")[1] || "")
                    .length;
                const prefix = originalText.slice(0, numericMatch.index);
                const suffix = originalText.slice(
                    numericMatch.index + numericMatch[0].length,
                );

                element.setAttribute("aria-label", originalText);

                return {
                    element,
                    target,
                    decimalPlaces,
                    prefix,
                    suffix,
                };
            })
            .filter(Boolean);

        const renderCounter = (counter, value) => {
            counter.element.textContent =
                counter.prefix +
                value.toFixed(counter.decimalPlaces) +
                counter.suffix;
        };

        counters.forEach((counter) => renderCounter(counter, 0));

        const startCapabilityCounters = () => {
            if (reduceMotion) {
                counters.forEach((counter) => {
                    renderCounter(counter, counter.target);
                });
                return;
            }

            const duration = 1560;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1,
                );
                const easedProgress = 1 - Math.pow(1 - progress, 3);

                counters.forEach((counter) => {
                    renderCounter(
                        counter,
                        counter.target * easedProgress,
                    );
                });

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        };

        if ("IntersectionObserver" in window) {
            const capabilityObserver = new IntersectionObserver(
                (entries) => {
                    if (!entries[0].isIntersecting) {
                        return;
                    }

                    startCapabilityCounters();
                    capabilityObserver.disconnect();
                },
                { threshold: 0.25 },
            );

            capabilityObserver.observe(capabilityLayout);
        } else {
            startCapabilityCounters();
        }
    }

    /* =========================================================
       INDUSTRY SHOWCASE TABS
       ========================================================= */

    document
        .querySelectorAll("[data-industry-showcase]")
        .forEach((showcase) => {
            const tabs = [...showcase.querySelectorAll("[role='tab']")];
            const panels = [
                ...showcase.querySelectorAll("[role='tabpanel']"),
            ];

            const panelImages = [
                ...showcase.querySelectorAll(".industry-photo-placeholder img"),
            ];

            if (!tabs.length || !panels.length) {
                return;
            }

            /* Load every tab photo before autoplay can reveal its panel. */
            panelImages.forEach((image) => {
                image.loading = "eager";
                image.decoding = "async";
            });

            const reducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            );
            const autoplayDelay = Math.max(
                0,
                Number(showcase.dataset.industryAutoplay) || 0,
            );

            let autoplayTimer = null;
            let isInView = false;
            let isPointerPaused = false;
            let userHasInteracted = false;

            showcase.style.setProperty(
                "--industry-cycle",
                `${autoplayDelay || 7000}ms`,
            );

            const stopAutoplay = () => {
                window.clearTimeout(autoplayTimer);
                autoplayTimer = null;
                showcase.classList.remove("is-autoplaying");
            };

            const canAutoplay = () =>
                autoplayDelay >= 3000 &&
                !reducedMotion.matches &&
                !userHasInteracted &&
                !isPointerPaused &&
                isInView &&
                !document.hidden;

            const scheduleAutoplay = () => {
                stopAutoplay();

                if (!canAutoplay()) {
                    return;
                }

                // Re-adding the class restarts the active-tab progress line.
                void showcase.offsetWidth;
                showcase.classList.add("is-autoplaying");

                autoplayTimer = window.setTimeout(() => {
                    const activeIndex = Math.max(
                        0,
                        tabs.findIndex((tab) => tab.classList.contains("is-active")),
                    );
                    const nextTab = tabs[(activeIndex + 1) % tabs.length];
                    activateIndustry(nextTab, false, true);
                }, autoplayDelay);
            };

            const activateIndustry = (
                selectedTab,
                moveFocus = false,
                fromAutoplay = false,
            ) => {
                tabs.forEach((tab) => {
                    const isSelected = tab === selectedTab;
                    tab.classList.toggle("is-active", isSelected);
                    tab.setAttribute("aria-selected", String(isSelected));
                    tab.tabIndex = isSelected ? 0 : -1;
                });

                panels.forEach((panel) => {
                    const isSelected =
                        panel.id === selectedTab.getAttribute("aria-controls");
                    panel.hidden = !isSelected;
                    panel.classList.toggle("is-active", isSelected);
                });

                if (moveFocus) {
                    selectedTab.focus();
                }

                if (moveFocus && window.innerWidth <= 980) {
                    selectedTab.scrollIntoView({
                        behavior: reducedMotion.matches
                            ? "auto"
                            : "smooth",
                        block: "nearest",
                        inline: "center",
                    });
                }

                if (fromAutoplay) {
                    scheduleAutoplay();
                } else {
                    userHasInteracted = true;
                    stopAutoplay();
                }
            };

            tabs.forEach((tab, index) => {
                tab.addEventListener("click", () => {
                    activateIndustry(tab);
                });

                tab.addEventListener("keydown", (event) => {
                    let nextIndex = index;

                    if (event.key === "ArrowRight") {
                        nextIndex = (index + 1) % tabs.length;
                    } else if (event.key === "ArrowLeft") {
                        nextIndex = (index - 1 + tabs.length) % tabs.length;
                    } else if (event.key === "Home") {
                        nextIndex = 0;
                    } else if (event.key === "End") {
                        nextIndex = tabs.length - 1;
                    } else {
                        return;
                    }

                    event.preventDefault();
                    activateIndustry(tabs[nextIndex], true);
                });
            });

            showcase.addEventListener("pointerenter", () => {
                isPointerPaused = true;
                stopAutoplay();
            });

            showcase.addEventListener("pointerleave", () => {
                isPointerPaused = false;
                scheduleAutoplay();
            });

            showcase.addEventListener("focusin", () => {
                userHasInteracted = true;
                stopAutoplay();
            });

            if ("IntersectionObserver" in window) {
                const showcaseObserver = new IntersectionObserver(
                    ([entry]) => {
                        isInView = entry.isIntersecting;

                        if (isInView) {
                            scheduleAutoplay();
                        } else {
                            stopAutoplay();
                        }
                    },
                    { threshold: 0.35 },
                );

                showcaseObserver.observe(showcase);
            } else {
                isInView = true;
                scheduleAutoplay();
            }

            document.addEventListener("visibilitychange", () => {
                if (document.hidden) {
                    stopAutoplay();
                } else {
                    scheduleAutoplay();
                }
            });

            reducedMotion.addEventListener?.("change", () => {
                if (reducedMotion.matches) {
                    stopAutoplay();
                } else {
                    scheduleAutoplay();
                }
            });
        });

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

    /* =========================================================
       HOMEPAGE EDITORIAL SERVICE RIBBONS
       ========================================================= */

    document
        .querySelectorAll("[data-pillar-ribbon]")
        .forEach((ribbon) => {
            ribbon.addEventListener("pointermove", (event) => {
                if (!window.matchMedia("(hover: hover)").matches) {
                    return;
                }

                const bounds = ribbon.getBoundingClientRect();

                ribbon.style.setProperty(
                    "--pillar-x",
                    `${event.clientX - bounds.left}px`,
                );
                ribbon.style.setProperty(
                    "--pillar-y",
                    `${event.clientY - bounds.top}px`,
                );
            });

            ribbon.addEventListener("pointerleave", () => {
                ribbon.style.removeProperty("--pillar-x");
                ribbon.style.removeProperty("--pillar-y");
            });
        });

    /* =========================================================
       SERVICES COMMAND CENTER
       ========================================================= */

    const serviceCommand = document.querySelector(
        "[data-service-command]",
    );

    if (serviceCommand) {
        const commandTabs = Array.from(
            serviceCommand.querySelectorAll(
                "[data-command-service]",
            ),
        );
        const commandPanels = Array.from(
            serviceCommand.querySelectorAll(
                "[data-command-panel]",
            ),
        );
        const commandStage = serviceCommand.querySelector(
            ".service-command-stage",
        );

        const activateCommandService = (selectedTab) => {
            const selectedService =
                selectedTab.dataset.commandService;
            const selectedIndex = commandTabs.indexOf(selectedTab);

            commandTabs.forEach((tab) => {
                const isActive = tab === selectedTab;

                tab.classList.toggle("is-active", isActive);
                tab.setAttribute("aria-selected", String(isActive));
                tab.tabIndex = isActive ? 0 : -1;
            });

            commandPanels.forEach((panel) => {
                const isActive =
                    panel.dataset.commandPanel === selectedService;

                panel.classList.toggle("is-active", isActive);
                panel.setAttribute("aria-hidden", String(!isActive));
                panel.inert = !isActive;
            });

            serviceCommand.style.setProperty(
                "--service-progress",
                `${((selectedIndex + 1) / commandTabs.length) * 100}%`,
            );

            if (window.innerWidth <= 680) {
                selectedTab.scrollIntoView({
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                        ? "auto"
                        : "smooth",
                    block: "nearest",
                    inline: "center",
                });
            }
        };

        commandTabs.forEach((tab, index) => {
            tab.addEventListener("pointerenter", () => {
                if (window.matchMedia("(hover: hover)").matches) {
                    activateCommandService(tab);
                }
            });

            tab.addEventListener("focus", () => {
                activateCommandService(tab);
            });

            tab.addEventListener("click", () => {
                activateCommandService(tab);
            });

            tab.addEventListener("keydown", (event) => {
                const keyDirections = {
                    ArrowDown: 1,
                    ArrowRight: 1,
                    ArrowUp: -1,
                    ArrowLeft: -1,
                };

                let nextIndex;

                if (event.key in keyDirections) {
                    nextIndex =
                        (index + keyDirections[event.key] + commandTabs.length) %
                        commandTabs.length;
                } else if (event.key === "Home") {
                    nextIndex = 0;
                } else if (event.key === "End") {
                    nextIndex = commandTabs.length - 1;
                } else {
                    return;
                }

                event.preventDefault();
                commandTabs[nextIndex].focus();
            });
        });

        commandStage?.addEventListener("pointermove", (event) => {
            const bounds = commandStage.getBoundingClientRect();

            commandStage.style.setProperty(
                "--pointer-x",
                `${event.clientX - bounds.left}px`,
            );
            commandStage.style.setProperty(
                "--pointer-y",
                `${event.clientY - bounds.top}px`,
            );
        });

        commandStage?.addEventListener("pointerleave", () => {
            commandStage.style.removeProperty("--pointer-x");
            commandStage.style.removeProperty("--pointer-y");
        });

        const initialTab =
            commandTabs.find((tab) =>
                tab.classList.contains("is-active"),
            ) || commandTabs[0];

        if (initialTab) {
            activateCommandService(initialTab);
        }
    }

    /* =========================================================
       MANAGED SUPPORT CARD-TO-ORBIT LINK
       ========================================================= */

    const managedSupport = document.querySelector("#managed-support");

    if (managedSupport) {
        const supportCards = Array.from(
            managedSupport.querySelectorAll(
                ".orbit-descriptions [data-support-key]",
            ),
        );

        const supportNodes = Array.from(
            managedSupport.querySelectorAll(
                ".orbit-position[data-support-key]",
            ),
        );

        const clearSupportSelection = () => {
            managedSupport.classList.remove("has-support-selection");

            supportCards.forEach((card) => {
                card.classList.remove("is-active");
                card.setAttribute("aria-pressed", "false");
            });

            supportNodes.forEach((position) => {
                position.classList.remove("is-selected");
            });
        };

        const activateSupportItem = (selectedCard) => {
            if (selectedCard.classList.contains("is-active")) {
                clearSupportSelection();
                return;
            }

            const selectedKey = selectedCard.dataset.supportKey;

            managedSupport.classList.add("has-support-selection");

            supportCards.forEach((card) => {
                const isSelected = card === selectedCard;

                card.classList.toggle("is-active", isSelected);
                card.setAttribute("aria-pressed", String(isSelected));
            });

            supportNodes.forEach((position) => {
                const isSelected =
                    position.dataset.supportKey === selectedKey;

                position.classList.toggle("is-selected", isSelected);
            });
        };

        supportCards.forEach((card) => {
            card.addEventListener("click", () => {
                activateSupportItem(card);
            });

            card.addEventListener("keydown", (event) => {
                if (event.key !== "Enter" && event.key !== " ") {
                    return;
                }

                event.preventDefault();
                activateSupportItem(card);
            });
        });

        supportNodes.forEach((position) => {
            position.addEventListener("click", () => {
                if (position.classList.contains("is-selected")) {
                    clearSupportSelection();
                }
            });
        });

        managedSupport.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                clearSupportSelection();
            }
        });
    }

});
