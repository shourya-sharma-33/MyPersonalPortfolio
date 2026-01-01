import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
    mailOutline,
    phonePortraitOutline,
    calendarOutline,
    locationOutline,
    logoTwitter,
    logoGithub,
    chevronDown
} from "ionicons/icons";
import myAvatar from "../assets/images/my-avatar.png";

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={myAvatar} alt="Shourya Sharma" width="80" />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Shourya Sharma">
                        Shourya Sharma
                    </h1>
                    <div className="grid grid-cols-2 gap-2">
                        <p className="title w-full text-center">Backend</p>
                        <p className="title w-full text-center">DevOps</p>
                        <p className="title w-full text-center">CyberSecurity</p>
                        <p className="title w-full text-center">AI/ML</p>
                    </div>
                </div>

                <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
                    <span>Show Contacts</span>
                    <IonIcon icon={chevronDown} />
                </button>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <IonIcon icon={mailOutline} />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:shouryasharma_dev@proton.me" className="contact-link">
                                shouryasharma_dev@proton.me
                            </a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <IonIcon icon={phonePortraitOutline} />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:" className="contact-link">
                                +91 89XXXXXX40
                            </a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <IonIcon icon={calendarOutline} />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time dateTime="2008-03-09">March 9, 2008</time>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <IonIcon icon={locationOutline} />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address>Uttrakhand, Haridwar</address>
                        </div>
                    </li>
                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    <li className="social-item">
                        <a href="https://x.com/shouryasharma33" className="social-link">
                            <IonIcon icon={logoTwitter} />
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="https://github.com/shourya-sharma-33" className="social-link">
                            <IonIcon icon={logoGithub} />
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
