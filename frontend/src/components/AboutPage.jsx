import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { lockClosed, closeOutline } from "ionicons/icons";
import whatDoing from "../data/whatdoing/whatdoing";
import testimonials from "../data/testimonials/testimonials";
import clients from "../data/clients/clients";
import avatar1 from "../assets/images/avatar-1.png";
import iconQuote from "../assets/images/icon-quote.svg";
import Chatbot from "./Chatbot"; // Import chatbot

const AboutPage = ({ currentTheme, isActive }) => { // Add currentTheme prop
    const [modalContent, setModalContent] = useState(null);

    const openModal = (item) => {
        setModalContent(item);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <article className={`about ${isActive ? "active" : ""}`} data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    Hi, I am Shourya Sharma, I am a 17 year old developer from My Beloved Motherland India, into
                    Machine Learning, Backend Development and Devops, Learning
                    CyberSecurity and Making Projects
                </p>

                <p>
                    I am passionate about learning new things, keeping learning, posting
                    updates about my life on X
                </p>
            </section>

            <section className="service">
                <h3 className="h3 service-title">What I'm doing</h3>

                <ul className="service-list">
                    {whatDoing.map((item, index) => (
                        <li className="service-item" key={index}>
                            <div className="service-icon-box">
                                <img src={item.img} alt={item.title} width="40" />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">{item.title}</h4>
                                <p className="service-item-text">{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <div className="locked-content">
                <section className="testimonials">
                    <h3 className="h3 testimonials-title">Testimonials</h3>

                    <ul className="testimonials-list has-scrollbar">
                        {testimonials.map((item, index) => (
                            <li className="testimonials-item" key={index} onClick={() => openModal(item)}>
                                <div className="content-card" data-testimonials-item>
                                    <figure className="testimonials-avatar-box">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            width="60"
                                            data-testimonials-avatar
                                        />
                                    </figure>

                                    <h4
                                        className="h4 testimonials-item-title"
                                        data-testimonials-title
                                    >
                                        {item.name}
                                    </h4>

                                    <div className="testimonials-text" data-testimonials-text>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="locked-content-overlay">
                    <IonIcon icon={lockClosed} className="text-9xl text-white" />
                </div>
            </div>

            {/* Modal */}
            <div className={`modal-container ${modalContent ? "active" : ""}`} data-modal-container>
                <div className={`overlay ${modalContent ? "active" : ""}`} data-overlay onClick={closeModal}></div>

                <section className="testimonials-modal">
                    <button className="modal-close-btn" data-modal-close-btn onClick={closeModal}>
                        <IonIcon icon={closeOutline} />
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src={modalContent?.avatar || avatar1} alt={modalContent?.name || "Avatar"} width="80" data-modal-img />
                        </figure>

                        <img src={iconQuote} alt="quote icon" />
                    </div>

                    <div className="modal-content">
                        <h4 className="h3 modal-title" data-modal-title>
                            {modalContent?.name}
                        </h4>

                        <time dateTime="2021-06-14">14 June, 2021</time>

                        <div data-modal-text>
                            <p>{modalContent?.text}</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="locked-content">
                <section className="clients">
                    <h3 className="h3 clients-title">Clients</h3>

                    <ul className="clients-list has-scrollbar">
                        {clients.map((client, index) => (
                            <li className="clients-item" key={index}>
                                <a href={client.link}>
                                    <img src={client.img} alt={`client logo ${index + 1}`} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="locked-content-overlay">
                    <IonIcon icon={lockClosed} className="text-9xl text-white" />
                </div>
            </div>
            <Chatbot currentTheme={currentTheme} />
        </article>
    );
};

export default AboutPage;