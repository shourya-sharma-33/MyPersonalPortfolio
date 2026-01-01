import React, { useRef, useState } from "react";
import { IonIcon } from "@ionic/react";
import { paperPlane } from "ionicons/icons";
import emailjs from "@emailjs/browser";

function Contact({ isActive }) {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Send Message");
    const [sending, setSending] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleFormInput = () => {
        if (form.current) {
            setIsValid(form.current.checkValidity());
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!form.current.checkValidity()) return;
        
        setSending(true);
        setButtonText("Sending...");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setButtonText("Sent!");
                    form.current.reset();
                    setSending(false);
                    setIsValid(false);

                    // Optional: revert back to original after 3 seconds
                    setTimeout(() => setButtonText("Send Message"), 3000);
                },
                () => {
                    setButtonText("Failed");
                    setSending(false);

                    // Optional: revert back to original after 3 seconds
                    setTimeout(() => setButtonText("Send Message"), 3000);
                }
            );
    };

    return (
        <article className={`contact ${isActive ? "active" : ""}`} data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            {/* Google Map */}
            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483937.1843462525!2d77.14077949154525!3d30.06675301963391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39082c3b4cb7a5a7%3A0x7a7e23de6c4f0b4!2sUttarakhand%2C%20India!5e0!3m2!1sen!2sin!4v1730896300000!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map - Uttarakhand, India"
                    />
                </figure>
            </section>

            {/* Contact Form */}
            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>

                <form ref={form} onSubmit={sendEmail} onInput={handleFormInput} className="form" data-form>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="fullname"
                            className="form-input"
                            placeholder="Full name"
                            required
                            data-form-input
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email address"
                            required
                            data-form-input
                        />
                    </div>

                    <textarea
                        name="message"
                        className="form-input"
                        placeholder="Your Message"
                        required
                        data-form-input
                    ></textarea>

                    <button
                        className="form-btn"
                        type="submit"
                        disabled={sending || !isValid}
                        data-form-btn
                    >
                        <IonIcon icon={paperPlane} />
                        <span>{buttonText}</span>
                    </button>
                </form>
            </section>
        </article>
    );
}

export default Contact;
