import React from "react";

const BackgroundVideo = ({ videoSrc, isTransitioning }) => {
    return (
        <>
            <video
                key={videoSrc}
                src={videoSrc}
                autoPlay
                loop
                muted
                className={isTransitioning ? "video-fade-in" : ""}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -2,
                    opacity: 1,
                    transition: "opacity 1s ease-in-out",
                }}
            />

            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    zIndex: -1,
                    transition: "background-color 1s ease-in-out",
                }}
            />
        </>
    );
};

export default BackgroundVideo;
