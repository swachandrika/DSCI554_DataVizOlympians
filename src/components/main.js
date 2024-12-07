import React, { useState } from "react";
import Countdown from "react-countdown";

function MainBanner() {
  const targetDate = new Date("July 14, 2028 00:00:00").getTime();
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoOpen = () => {
    setShowVideo(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
  };

  return (
    <div className="main-banner">
      <div className="banner-content">
        {/* Image Section */}
        <div className="banner-image">
          <img src="/data/ologo.png" alt="Olympic Logo" />
        </div>

        {/* Title and Subtitle */}
        <h1 className="banner-title">LA 2028 Olympics</h1>
        <p className="banner-subtitle">Experience the thrill of the games in Los Angeles!</p>

        {/* Countdown Timer */}
        <div className="countdown-container">
          <Countdown date={targetDate} renderer={CountdownRenderer} />
        </div>

        {/* Call to Action Button */}
        <button className="cta-button" onClick={handleVideoOpen}>
          Get Started
        </button>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <div className="video-popup">
          <div className="video-overlay" onClick={handleVideoClose}></div>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/hwAnQxTNxPg"
              title="LA 2028 Olympics Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
            <button className="close-button" onClick={handleVideoClose}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Custom renderer for the countdown
const CountdownRenderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="countdown">
      <div className="countdown-item">
        <span className="countdown-value">{days}</span>
        <span className="countdown-label">Days</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{hours}</span>
        <span className="countdown-label">Hours</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{minutes}</span>
        <span className="countdown-label">Mins</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{seconds}</span>
        <span className="countdown-label">Secs</span>
      </div>
    </div>
  );
};

export default MainBanner;