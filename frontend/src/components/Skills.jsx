import React, { useEffect } from "react";
import { IonIcon } from "@ionic/react";
import {
    codeSlashOutline,
    mailOutline,
    lockClosed,
} from "ionicons/icons";
import useStore from "../store.js";
import LockedContentOverlay from "./LockedContentOverlay";

// Custom lightweight SVG icons (fallback for skills without IonIcons)
const SvgIcon = ({ path, viewBox = "0 0 24 24" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        className="w-6 h-6 fill-current"
    >
        <path d={path} />
    </svg>
);

const Skills = () => {
    const { whatDoing, loading, error, fetchWhatDoing } = useStore();

    useEffect(() => {
        if (whatDoing.length === 0) {
            fetchWhatDoing();
        }
    }, [whatDoing.length, fetchWhatDoing]);

    if (loading) {
        return (
            <>
                <header>
                    <h2 className="h2 article-title">Skills</h2>
                </header>
                <div style={{ textAlign: 'center', padding: '2rem' }}>Loading skills...</div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <header>
                    <h2 className="h2 article-title">Skills</h2>
                </header>
                <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
                    Error loading skills: {error}
                </div>
            </>
        );
    }

    return (
        <>
            <header>
                <h2 className="h2 article-title">Skills</h2>
            </header>

            {/* Render dynamic skill sections from whatDoing data */}
            {whatDoing.map((section, sectionIndex) => (
                <section className="timeline" key={sectionIndex}>
                    <div className="title-wrapper">
                        <h3 className="h3">{section.title}</h3>
                    </div>

                    <ul className="gap-5 grid grid-cols-2">
                        {section.skills?.map((s, i) => (
                            <li className="contact-item" key={`${sectionIndex}-${i}`}>
                                <div className="icon-box">
                                    <IonIcon icon={codeSlashOutline} />
                                </div>
                                <div className="contact-info">
                                    <p className="contact-title">{s.desc}</p>
                                    <span className="contact-link">{s.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

            {/* Locked sections using new wrapper */}
            {[
                "CyberSecurity",
                "DSA and Competitive Programming",
                "Deep Learning and LLM",
                "Web3",
                "DevOps",
            ].map((title) => (
                <section className="timeline" key={title}>
                    <div className="title-wrapper">
                        <h3 className="h3">{title}</h3>
                    </div>

                    <LockedContentOverlay>
                        <ul className="gap-5 grid grid-cols-2">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <li className="contact-item" key={i}>
                                    <div className="icon-box">
                                        <IonIcon icon={lockClosed} />
                                    </div>
                                    <div className="contact-info">
                                        <p className="contact-title">Locked</p>
                                        <span className="contact-link">Learning…</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </LockedContentOverlay>
                </section>
            ))}

            {/* ------------------------------ Dividers and Skill Levels ------------------------------ */}
            <div className="h-[1px] w-full my-10 rounded-full bg-fuchsia-900"></div>

            {/* Skill Levels sections remain static as they don't need dynamic data */}
            {/* [Previous static skill levels sections unchanged] */}
            <section className="skill mb-10">
                <h3 className="h3 skills-title">Frontend</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { name: "HTML", value: 90 },
                        { name: "CSS", value: 85 },
                        { name: "JavaScript", value: 95 },
                        { name: "TypeScript", value: 80 },
                        { name: "React", value: 90 },
                        { name: "TailwindCSS", value: 80 },
                        { name: "Framer Motion", value: 70 },
                    ].map((skill) => (
                        <div className="content-card p-4 rounded-xl shadow-md" key={skill.name}>
                            <div className="title-wrapper flex justify-between mb-2">
                                <h5 className="h5">{skill.name}</h5>
                                <data value={skill.value}>{skill.value}%</data>
                            </div>
                            <div className="skill-progress-bg h-3 rounded-full bg-gray-300 dark:bg-gray-700">
                                <div
                                    className="skill-progress-fill h-3 rounded-full bg-fuchsia-900"
                                    style={{ width: `${skill.value}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* [Other static skill sections unchanged - Backend, Design/UI/UX, Machine Learning] */}
        </>
    );
};

export default Skills;
