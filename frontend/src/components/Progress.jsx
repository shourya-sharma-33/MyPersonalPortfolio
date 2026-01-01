import React, { useState, useEffect, useRef, useCallback } from 'react';
import { IonIcon } from "@ionic/react";
import { bookOutline, statsChartOutline, gitBranchOutline } from "ionicons/icons";

const Progress = ({ currentTheme }) => {
    const [progressData, setProgressData] = useState([]);
    const [displayedItems, setDisplayedItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const ITEMS_PER_PAGE = 10;

    const observerTarget = useRef(null);

    const FIREBASE_URL = 'https://pfolio-progress-default-rtdb.asia-southeast1.firebasedatabase.app/.json';
    const GITHUB_USERNAME = 'shourya-sharma-33';

    // Theme color mapping
    const themeColors = {
        violet: '9854f6',
        blue: '4a9eff',
        green: '44d62c',
        orange: 'ff8a29',
        pink: 'ff5e9d',
        cyan: '00d4ff',
    };

    // Theme mapping for GitHub stats
    const githubStatsThemes = {
        violet: 'radical',
        blue: 'blue-green',
        green: 'dark',
        orange: 'tokyonight',
        pink: 'synthwave',
        cyan: 'prussian',
    };

    const chartColor = themeColors[currentTheme] || themeColors.violet;
    const statsTheme = githubStatsThemes[currentTheme] || 'radical';

    // Fetch all data once
    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const response = await fetch(FIREBASE_URL);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                if (data && Array.isArray(data)) {
                    const sorted = data.filter(item => item !== null).sort((a, b) => b.sequence - a.sequence);
                    setProgressData(sorted);
                } else if (data && typeof data === 'object') {
                    const dataArray = Object.values(data).filter(item => item !== null);
                    const sorted = dataArray.sort((a, b) => b.sequence - a.sequence);
                    setProgressData(sorted);
                } else {
                    setError('No data found');
                }

                setLoading(false);
            } catch (err) {
                console.error('Error:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProgress();
    }, []);

    useEffect(() => {
        if (progressData.length > 0) {
            const startIndex = 0;
            const endIndex = page * ITEMS_PER_PAGE;
            setDisplayedItems(progressData.slice(startIndex, endIndex));
        }
    }, [progressData, page]);

    const loadMore = useCallback((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && displayedItems.length < progressData.length) {
            setPage(prev => prev + 1);
        }
    }, [displayedItems.length, progressData.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(loadMore, {
            root: null,
            rootMargin: '100px',
            threshold: 0.1
        });

        const currentTarget = observerTarget.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [loadMore]);

    if (loading) {
        return (
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IonIcon icon={bookOutline} />
                    </div>
                    <h3 className="h3">Progress</h3>
                </div>
                <p>Loading...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IonIcon icon={bookOutline} />
                    </div>
                    <h3 className="h3">Progress</h3>
                </div>
                <p style={{ color: 'red' }}>Error: {error}</p>
            </section>
        );
    }

    const hasMore = displayedItems.length < progressData.length;

    // Reusable card wrapper style
    const cardStyle = {
        padding: '1rem',
        borderRadius: '12px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        textAlign: 'center',
        height: '100%'
    };

    // Responsive grid container style
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
    };

    return (
        <section className="timeline">
            {/* ====== GITHUB ANALYTICS SECTION ====== */}
            <div style={{ marginBottom: '3rem' }}>
                <div className="title-wrapper" style={{ marginBottom: '1.5rem' }}>
                    <div className="icon-box">
                        <IonIcon icon={statsChartOutline} />
                    </div>
                    <h3 className="h3">GitHub Analytics</h3>
                </div>

                {/* Two Column Grid: Stats + Languages */}
                <div style={gridContainerStyle}>
                    {/* GitHub Stats Card */}
                    <div style={cardStyle}>
                        <img
                            key={`stats-${statsTheme}`}
                            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=${statsTheme}&hide_border=true&bg_color=00000000&title_color=${chartColor}&icon_color=${chartColor}`}
                            alt={`${GITHUB_USERNAME}'s GitHub Stats`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                display: 'block'
                            }}
                            loading="lazy"
                        />
                    </div>

                    {/* Top Languages Card */}
                    <div style={cardStyle}>
                        <img
                            key={`languages-${statsTheme}`}
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=${statsTheme}&hide_border=true&bg_color=00000000&title_color=${chartColor}`}
                            alt={`${GITHUB_USERNAME}'s Top Languages`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                display: 'block'
                            }}
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Full Width Contribution Chart */}
                <div style={{
                    ...cardStyle,
                    marginBottom: '2rem'
                }}>
                    <img
                        key={`contribution-${chartColor}`}
                        src={`https://ghchart.rshah.org/${chartColor}/${GITHUB_USERNAME}`}
                        alt={`${GITHUB_USERNAME}'s GitHub Contribution Chart`}
                        style={{
                            width: '100%',
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            display: 'block'
                        }}
                        loading="lazy"
                    />
                </div>
            </div>

            {/* ====== ACTIVITY GRAPH SECTION ====== */}
            <div style={{ marginBottom: '3rem' }}>
                <div className="title-wrapper" style={{ marginBottom: '1.5rem' }}>
                    <div className="icon-box">
                        <IonIcon icon={gitBranchOutline} />
                    </div>
                    <h3 className="h3">Contribution Activity</h3>
                </div>

                <div style={cardStyle}>
                    <img
                        key={`activity-${chartColor}`}
                        src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=react-dark&hide_border=true&bg_color=00000000&color=${chartColor}&line=${chartColor}&point=ffffff`}
                        alt={`${GITHUB_USERNAME}'s Activity Graph`}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            display: 'block'
                        }}
                        loading="lazy"
                    />
                </div>
            </div>

            {/* ====== PROGRESS TIMELINE ====== */}
            <div className="title-wrapper" style={{ marginBottom: '1.5rem' }}>
                <div className="icon-box">
                    <IonIcon icon={bookOutline} />
                </div>
                <h3 className="h3">Development Journey</h3>
            </div>

            <ol className="timeline-list">
                {displayedItems.length > 0 ? (
                    displayedItems.map((item, index) => (
                        <li className="timeline-item" key={`${item.sequence}-${index}`}>
                            <h4 className="h4 timeline-item-title">{item.title}</h4>
                            <span>{item.date}</span>
                            <p className="timeline-text">{item.details}</p>
                        </li>
                    ))
                ) : (
                    <p>No progress items found</p>
                )}
            </ol>

            {/* Intersection Observer Target */}
            {hasMore && (
                <div ref={observerTarget} style={{ height: '20px', margin: '20px 0' }}>
                    <p style={{ textAlign: 'center', color: '#888' }}>Loading more...</p>
                </div>
            )}

            {!hasMore && displayedItems.length > 0 && (
                <p style={{ textAlign: 'center', color: '#888', margin: '20px 0' }}>
                    You've reached the end
                </p>
            )}
        </section>
    );
};

export default Progress;
