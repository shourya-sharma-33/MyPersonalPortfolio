import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { lockClosed, closeOutline } from "ionicons/icons";
import whatDoing from "../data/whatdoing/whatdoing";
import avatar1 from "../assets/images/avatar-1.png";
import iconQuote from "../assets/images/icon-quote.svg";
import Chatbot from "./Chatbot";
import TestimonialsComponent from "./TestimonialsComponent";
import ClientsComponent from "./ClientsComponent";

const AboutPage = ({ currentTheme, isActive }) => {
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

            <TestimonialsComponent openModal={openModal} />

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

            <ClientsComponent />
            <Chatbot currentTheme={currentTheme} />
        </article>
    );
};

export default AboutPage;
