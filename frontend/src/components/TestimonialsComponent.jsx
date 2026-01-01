import React, { useEffect } from "react";
import useStore from "../store.js";
import LockedContentOverlay from "./LockedContentOverlay";

const TestimonialsComponent = ({ openModal }) => {
    const { testimonials, loading, error, fetchTestimonials } = useStore();

    useEffect(() => {
        if (testimonials.length === 0) {
            fetchTestimonials();
        }
    }, [testimonials.length, fetchTestimonials]);

    if (loading) {
        return (
            <LockedContentOverlay>
                <section className="testimonials">
                    <h3 className="h3 testimonials-title">Testimonials</h3>
                    <div className="loading">Loading testimonials...</div>
                </section>
            </LockedContentOverlay>
        );
    }

    if (error) {
        return (
            <LockedContentOverlay>
                <section className="testimonials">
                    <h3 className="h3 testimonials-title">Testimonials</h3>
                    <div className="error">Error loading testimonials: {error}</div>
                </section>
            </LockedContentOverlay>
        );
    }

    return (
        <LockedContentOverlay>
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
        </LockedContentOverlay>
    );
};

export default TestimonialsComponent;
