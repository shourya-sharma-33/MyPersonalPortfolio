import React from "react";
import { IonIcon } from "@ionic/react";
import { lockClosed } from "ionicons/icons";
import iconQuote from "../assets/images/icon-quote.svg";
import avatar1 from "../assets/images/avatar-1.png";
import testimonials from "../data/testimonials/testimonials";

const TestimonialsComponent = ({ openModal }) => {
    return (
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
    );
};

export default TestimonialsComponent;
