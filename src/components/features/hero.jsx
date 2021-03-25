import React from 'react';

export default function Hero( props ) {

    return (
        <div className="hero">
            <div className="hero-text-container">
                <div className="hero-text left">Collect</div>
                <div className="hero-text right">
                    <span className="hero-highlight-text">SuperRare</span>
                    <span className="hero-text-second-line">Digital Artworks</span>
                </div>
            </div>
            <div className="hero-links">
                <a href="/sign-in"><button className="btn home-hero-cta">Start Collecting </button></a>
                <a className="hero-secondary-link" href="/about">Learn More</a>
            </div>
        </div>
    );
}