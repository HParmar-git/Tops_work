
import React, { useEffect } from "react";

function Navbar() {


    useEffect(() => {

        // ==========================================
        // Navbar Shrink Function
        // ==========================================

        const navbarShrink = () => {

            const navbarCollapsible =
                document.body.querySelector("#mainNav");

            if (!navbarCollapsible) {
                return;
            }

            if (window.scrollY === 0) {

                navbarCollapsible.classList.remove(
                    "navbar-shrink"
                );

            } else {

                navbarCollapsible.classList.add(
                    "navbar-shrink"
                );
            }
        };


        // Run when page loads
        navbarShrink();


        // Run when page is scrolled
        document.addEventListener(
            "scroll",
            navbarShrink
        );


        // ==========================================
        // Bootstrap ScrollSpy
        // ==========================================

        const mainNav =
            document.body.querySelector("#mainNav");

        if (mainNav) {

            const scrollSpy =
                new window.bootstrap.ScrollSpy(
                    document.body,
                    {
                        target: "#mainNav",
                        rootMargin: "0px 0px -40%",
                    }
                );

        }


        // ==========================================
        // Mobile Navbar Collapse
        // ==========================================

        const navbarToggler =
            document.body.querySelector(
                ".navbar-toggler"
            );

        const responsiveNavItems =
            document.querySelectorAll(
                "#navbarResponsive .nav-link"
            );


        responsiveNavItems.forEach(
            (responsiveNavItem) => {

                responsiveNavItem.addEventListener(
                    "click",
                    () => {

                        if (
                            navbarToggler &&
                            window.getComputedStyle(
                                navbarToggler
                            ).display !== "none"
                        ) {

                            navbarToggler.click();

                        }

                    }
                );

            }
        );


        // ==========================================
        // Cleanup
        // ==========================================

        return () => {

            document.removeEventListener(
                "scroll",
                navbarShrink
            );

        };

    }, []);


    // ==========================================
    // Navbar HTML
    // ==========================================

    return (

        <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top"
            id="mainNav"
        >

            <div className="container">

                {/* Website Logo */}
                <a
                    className="navbar-brand"
                    href="#home"
                >
                    My Website
                </a>


                {/* Mobile Menu Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    Menu
                </button>


                {/* Navbar Menu */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarResponsive"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#home"
                            >
                                Home
                            </a>
                        </li>


                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#about"
                            >
                                About
                            </a>
                        </li>


                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#services"
                            >
                                Services
                            </a>
                        </li>


                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#contact"
                            >
                                Contact
                            </a>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;

