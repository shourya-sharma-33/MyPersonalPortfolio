import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chevronDown, eyeOutline } from "ionicons/icons";
import useStore from "../store.js";

export default function ProjectsSection({ currentTheme }) {
    const { projects, loading, error, fetchProjects } = useStore();
    const [selected, setSelected] = useState("All");
    const [selectOpen, setSelectOpen] = useState(false);

    // Theme color mapping for the WORKING badge
    const themeColors = {
        violet: '#9854f6',
        blue: '#4a9eff',
        green: '#44d62c',
        orange: '#ff8a29',
        pink: '#ff5e9d',
        cyan: '#00d4ff',
    };

    const currentColor = themeColors[currentTheme] || themeColors.violet;

    // Extract categories from projects data dynamically
    const projectCategories = projects.length > 0
        ? ["All", ...new Set(projects.map(p => p.cat))]
        : ["All"];

    // Fetch projects on mount
    useEffect(() => {
        if (projects.length === 0) {
            fetchProjects();
        }
    }, [projects.length, fetchProjects]);

    const handleFilter = (cat) => {
        setSelected(cat);
        setSelectOpen(false);
    };

    // Separate projects into priority groups
    const bigProjects = projects.filter(p => p.big);
    const regularProjects = projects.filter(p => !p.big);

    // Filter function
    const filterProject = (project) => {
        return selected === "All" || project.cat === selected;
    };

    if (loading) {
        return (
            <section className="projects">
                <div style={{ textAlign: 'center', padding: '2rem' }}>Loading projects...</div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="projects">
                <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
                    Error loading projects: {error}
                </div>
            </section>
        );
    }

    return (
        <section className="projects">
            {/* Filter List */}
            <ul className="filter-list">
                {projectCategories.map((cat, i) => (
                    <li className="filter-item" key={i}>
                        <button
                            className={`filter-btn ${cat === selected ? "active" : ""}`}
                            onClick={() => handleFilter(cat)}
                            type="button"
                        >
                            {cat}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Select Dropdown */}
            <div className="filter-select-box">
                <button
                    className="filter-select"
                    type="button"
                    onClick={() => setSelectOpen((s) => !s)}
                    aria-haspopup="listbox"
                    aria-expanded={selectOpen}
                >
                    <div className="select-value">
                        {selected === "All" ? "Select category" : selected}
                    </div>
                    <div className="select-icon">
                        <IonIcon icon={chevronDown} />
                    </div>
                </button>

                <ul className={`select-list ${selectOpen ? "open" : ""}`} role="listbox">
                    {projectCategories.map((item, i) => (
                        <li className="select-item" key={i}>
                            <button
                                className={`select-item-btn ${item === selected ? "active" : ""}`}
                                type="button"
                                onClick={() => handleFilter(item)}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Project List with Priority Layout */}
            <ul
                className="project-list"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                    gap: '1.5rem',
                    gridAutoFlow: 'dense'
                }}
            >
                {/* Render big projects first */}
                {bigProjects.filter(filterProject).map((p, i) => (
                    <li
                        className={`project-item active`}
                        data-filter-item
                        data-category={p.cat.toLowerCase()}
                        key={`big-${i}`}
                        style={{
                            gridColumn: 'span 2' // Big items span 2 columns
                        }}
                    >
                        <a href={p.link}>
                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <IonIcon icon={eyeOutline} />
                                </div>

                                <img
                                    className={`${!p.done ? "border-4 rounded-3xl" : ""}`}
                                    style={!p.done ? { borderColor: currentColor } : {}}
                                    src={p.img}
                                    alt={p.title}
                                    loading="lazy"
                                />
                            </figure>

                            <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="project-title">{p.title}</h3>
                                {!p.done && (
                                    <span
                                        className="inline-block py-1 px-2 text-xs rounded-lg text-black font-medium"
                                        style={{ backgroundColor: currentColor }}
                                    >
                                        WORKING
                                    </span>
                                )}
                            </div>
                            <p className="project-category">{p.desc}</p>
                        </a>
                    </li>
                ))}

                {/* Render regular projects */}
                {regularProjects.filter(filterProject).map((p, i) => (
                    <li
                        className={`project-item active`}
                        data-filter-item
                        data-category={p.cat.toLowerCase()}
                        key={`regular-${i}`}
                    >
                        <a href={p.link}>
                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <IonIcon icon={eyeOutline} />
                                </div>

                                <img
                                    className={`${!p.done ? "border-4 rounded-3xl" : ""}`}
                                    style={!p.done ? { borderColor: currentColor } : {}}
                                    src={p.img}
                                    alt={p.title}
                                    loading="lazy"
                                />
                            </figure>

                            <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="project-title">{p.title}</h3>
                                {!p.done && (
                                    <span
                                        className="inline-block py-1 px-2 text-xs rounded-lg text-black font-medium"
                                        style={{ backgroundColor: currentColor }}
                                    >
                                        WORKING
                                    </span>
                                )}
                            </div>
                            <p className="project-category">{p.desc}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
