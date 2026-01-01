import React from "react";
import { IonIcon } from "@ionic/react";
import { bookOutline, lockClosed } from "ionicons/icons";

const ResumePage = ({ isActive }) => {
    return (
        <article className={`resume ${isActive ? "active" : ""}`} data-page="resume">
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IonIcon icon={bookOutline} />
                    </div>
                    <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Class 10th CBSE Boards</h4>
                        <span>2022 - 2023</span>
                        <p className="timeline-text">I got 89% in Boards</p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Class 12th CBSE Boards</h4>
                        <span>2024 - 2025</span>
                        <p className="timeline-text">I got 77% from PCM branch</p>
                    </li>

                    <div className="locked-content">
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">
                                New york academy of art
                            </h4>
                            <span>2006 — 2007</span>
                            <p className="timeline-text">
                                Ratione voluptatem sequi nesciunt, facere quisquams facere menda
                                ossimus, omnis voluptas assumenda est omnis.
                            </p>
                        </li>

                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">
                                High school of art and design
                            </h4>
                            <span>2002 — 2004</span>
                            <p className="timeline-text">
                                Duis aute irure dolor in reprehenderit in voluptate, quila
                                voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
                            </p>
                        </li>

                        <div className="locked-content-overlay">
                            <IonIcon icon={lockClosed} className="text-9xl text-white" />
                        </div>
                    </div>
                </ol>
            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IonIcon icon={bookOutline} />
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>

                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            I Started Programming Out of Passion
                        </h4>
                        <span>I honestly don't remember the exact date</span>
                        <p className="timeline-text">
                            I began with Python and explored libraries like Tkinter, building
                            simple projects such as a basic AI chatbot that responded based on
                            the prompts it received. I later learned NumPy, Pandas, Matplotlib,
                            and SQL, creating several small projects along the way.
                        </p>
                        <p className="timeline-text">
                            After that, I learned HTML, CSS, JavaScript, React, and Tailwind. I
                            built many projects inspired by JavaScript Mastery, CodeWithSadee,
                            and various other creators on YouTube — all driven purely by
                            passion.
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Got Into ML</h4>
                        <span>2021</span>
                        <p className="timeline-text">
                            Studied ML theory and practical concepts from different resources,
                            later from CampusX youtube playlist. Later, I explored deeper
                            foundations through two well-known books: <em>Mathematics for
                                Machine Learning</em> and <em>Introduction to Statistical Learning
                                    in Python</em>.
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Backend Development</h4>
                        <span>2021-2025</span>
                        <p className="timeline-text">
                            I started with the MERN stack, building projects like a chat
                            application and an Uber clone. Over time, I found myself diving
                            deeper into technologies such as gRPC, GraphQL, TypeScript,
                            microservices, event-driven architecture, and backend development in
                            Rust and Go, along with low-level design and system design concepts.
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Now What</h4>
                        <span>2025 onwards</span>
                        <p className="timeline-text">
                            Going deeper into cybersecurity and DevOps, I later moved into deep
                            learning while also starting DSA and competitive programming during
                            college.
                        </p>
                    </li>
                </ol>
            </section>
        </article>
    );
};

export default ResumePage;
