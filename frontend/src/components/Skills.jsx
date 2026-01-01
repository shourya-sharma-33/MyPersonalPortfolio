import React from "react";
import { IonIcon } from "@ionic/react";
import {
    codeSlashOutline,
    mailOutline,
    lockClosed,
} from "ionicons/icons";

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
    return (
    <>
            <header>
                <h2 className="h2 article-title">Skills</h2>
            </header>

            {/* ------------------------------ Programming Languages ------------------------------ */}
            <section className="timeline">
                <div className="title-wrapper">
                    <h3 className="h3">Programming Languages</h3>
                </div>

                <ul className="gap-5 grid grid-cols-2">
                    {[
                        {
                            name: "JavaScript",
                            desc: "Dynamic language of the web",
                        },
                        {
                            name: "TypeScript",
                            desc: "JavaScript with strong typing",
                        },
                        {
                            name: "Golang",
                            desc: "Fast, typed, concurrent systems language",
                        },
                        {
                            name: "Rust",
                            desc: "Memory-safe, high-performance systems language",
                        },
                        {
                            name: "Python",
                            desc: "General-purpose, ML-friendly language",
                        },
                        {
                            name: "C++",
                            desc: "High-performance compiled language",
                        },
                    ].map((s) => (
                        <li className="contact-item" key={s.name}>
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

            {/* ------------------------------ Backend Development ------------------------------ */}
            <section className="timeline">
                <div className="title-wrapper">
                    <h3 className="h3">Backend Development</h3>
                </div>

                <ul className="gap-5 grid grid-cols-2">
                    {[
                        { name: "Node.js / Express", desc: "Backend runtime and framework" },
                        { name: "REST API", desc: "Standard API architecture" },
                        { name: "GraphQL", desc: "Query-based API structure" },
                        { name: "gRPC", desc: "High-performance RPC framework" },
                        { name: "WebSockets", desc: "Real-time communication" },
                        { name: "JWT Auth", desc: "Secure authentication tokens" },
                        { name: "Redis", desc: "In-memory data store & cache" },
                        { name: "Rust Axum", desc: "High-performance backend framework" },
                    ].map((s) => (
                        <li className="contact-item" key={s.name}>
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

            {/* ------------------------------ Microservices, LLD, EDA ------------------------------ */}
            <section className="timeline">
                <div className="title-wrapper">
                    <h3 className="h3">Microservices, LLD and EDA</h3>
                </div>

                <ul className="gap-5 grid grid-cols-2">
                    {[
                        { name: "Microservice Patterns", desc: "Distributed service design" },
                        { name: "OOP Concepts", desc: "Foundational programming paradigms" },
                        { name: "LLD & System Design", desc: "Real-world architecture planning" },
                        { name: "RabbitMQ", desc: "Message broker for async flows" },
                        { name: "Docker", desc: "Containerization engine" },
                        { name: "Kubernetes", desc: "Container orchestration" },
                        { name: "Kafka", desc: "Event streaming platform" },
                        { name: "Draw.io / Eraser", desc: "System diagrams & architecture" },
                    ].map((s) => (
                        <li className="contact-item" key={s.name}>
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

            {/* ------------------------------ Machine Learning ------------------------------ */}
            <section className="timeline">
                <div className="title-wrapper">
                    <h3 className="h3">Machine Learning</h3>
                </div>

                <ul className="gap-5 grid grid-cols-2">
                    {[
                        { name: "Linear Algebra", desc: "Mathematical foundation" },
                        { name: "Statistics", desc: "Data understanding & inference" },
                        { name: "Probability", desc: "Model uncertainty principles" },
                        { name: "Python", desc: "Primary ML programming language" },
                        { name: "NumPy", desc: "Numerical computing library" },
                        { name: "Pandas", desc: "Data manipulation library" },
                        { name: "Matplotlib", desc: "Visualization toolkit" },
                        { name: "Seaborn", desc: "Statistical plotting library" },
                        { name: "Kaggle", desc: "ML competition platform" },
                        { name: "Sklearn", desc: "ML algorithms toolkit" },
                        { name: "Bagging & Boosting", desc: "Ensemble learning methods" },
                        { name: "MLP", desc: "Neural network basics" },
                        { name: "EDA", desc: "Exploratory Data Analysis" },
                    ].map((s) => (
                        <li className="contact-item" key={s.name}>
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

            {/* ------------------------------ Frontend ------------------------------ */}
            <section className="timeline">
                <div className="title-wrapper">
                    <h3 className="h3">Frontend</h3>
                </div>

                <ul className="gap-5 grid grid-cols-2">
                    {[
                        { name: "HTML", desc: "Markup structure" },
                        { name: "CSS", desc: "Styling & layout" },
                        { name: "JavaScript", desc: "Dynamic UI logic" },
                        { name: "React", desc: "Component-based UI" },
                        { name: "TailwindCSS", desc: "Utility-first styling" },
                    ].map((s) => (
                        <li className="contact-item" key={s.name}>
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

            {/* ------------------------------ UI/UX ------------------------------ */}
            <section className="timeline">
                <div className="title-wrapper">
                    <h3 className="h3">UI/UX Design</h3>
                </div>

                <ul className="gap-5 grid grid-cols-2">
                    {[
                        { name: "Design Fundamentals", desc: "Foundations of good UI" },
                        { name: "Figma", desc: "Design & prototyping" },
                        { name: "GSAP", desc: "Advanced animations" },
                        { name: "Framer Motion", desc: "React animation library" },
                        { name: "Three.js", desc: "3D graphics on the web" },
                    ].map((s) => (
                        <li className="contact-item" key={s.name}>
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

            {/* ------------------------------ Divider ------------------------------ */}
            <div className="h-[1px] w-full my-10 rounded-full bg-fuchsia-900"></div>
      {/* ------------------------------ Locked Sections ------------------------------ */}


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

                    <div className="relative backdrop-blur-sm opacity-50 pointer-events-none p-5 rounded-xl border border-white/10">
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

                        <div className="absolute inset-0 flex items-center justify-center">
                            <IonIcon icon={lockClosed} className="z-10 text-9xl text-white" />
                        </div>
                    </div>
                </section>
            ))}

            {/* ------------------------------ Divider ------------------------------ */}
            <div className="h-[1px] w-full my-10 rounded-full bg-fuchsia-900"></div>

            {/* ------------------------------ Skill Levels (untouched) ------------------------------ */}
            {/* ------------------------------ Skill Levels: Frontend ------------------------------ */}
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

            {/* ------------------------------ Skill Levels: Backend ------------------------------ */}
            <section className="skill mb-10">
                <h3 className="h3 skills-title">Backend</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { name: "Node.js", value: 85 },
                        { name: "Express", value: 80 },
                        { name: "REST API", value: 90 },
                        { name: "GraphQL", value: 70 },
                        { name: "gRPC", value: 60 },
                        { name: "Redis", value: 65 },
                        { name: "Rust Axum", value: 55 },
                        { name: "Docker", value: 75 },
                        { name: "Kubernetes", value: 50 },
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

            {/* ------------------------------ Skill Levels: Design/UI/UX ------------------------------ */}
            <section className="skill mb-10">
                <h3 className="h3 skills-title">Design / UI/UX</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { name: "Web Design", value: 85 },
                        { name: "Graphic Design", value: 75 },
                        { name: "Branding", value: 90 },
                        { name: "Figma", value: 80 },
                        { name: "GSAP", value: 70 },
                        { name: "Three.js", value: 65 },
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

            {/* ------------------------------ Skill Levels: Machine Learning ------------------------------ */}
            <section className="skill mb-10">
                <h3 className="h3 skills-title">Machine Learning</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { name: "Python", value: 85 },
                        { name: "NumPy", value: 80 },
                        { name: "Pandas", value: 80 },
                        { name: "Matplotlib", value: 70 },
                        { name: "Seaborn", value: 65 },
                        { name: "Sklearn", value: 75 },
                        { name: "Bagging & Boosting", value: 60 },
                        { name: "MLP / Neural Networks", value: 55 },
                        { name: "EDA", value: 80 },
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

        </>
    );
};

export default Skills;

