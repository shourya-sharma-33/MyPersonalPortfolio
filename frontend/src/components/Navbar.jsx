import React from "react";
import { IonIcon } from "@ionic/react";
import { colorPaletteOutline } from "ionicons/icons";

const Navbar = ({ currentTheme, onThemeToggle, activePage, setActivePage }) => {
    const navLinks = [
        { name: "About", key: "about" },
        { name: "Resume", key: "resume" },
        { name: "Skills", key: "skills" },
        { name: "Progress", key: "progress" },
        { name: "Portfolio", key: "portfolio" },
        { name: "Blog", key: "blog" },
        { name: "Contact", key: "contact" },
    ];

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navLinks.map((link) => (
                    <li className="navbar-item" key={link.key}>
                        <button
                            className={`navbar-link ${activePage === link.key ? "active" : ""}`}
                            data-nav-link
                            onClick={() => setActivePage(link.key)}
                        >
                            {link.name}
                        </button>
                    </li>
                ))}

                <li className="navbar-item toggle-theme">
                    <button
                        className="navbar-link"
                        onClick={onThemeToggle}
                        title={`Current: ${currentTheme}`}
                    >
                        <IonIcon icon={colorPaletteOutline} />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
