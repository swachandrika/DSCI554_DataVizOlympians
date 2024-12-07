import React, { useState } from "react";
import Countdown from "react-countdown";
import "./landing.css";

const targetDate = new Date("July 14, 2028 00:00:00").getTime();

const LandingPage = ({ onStart }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleVideoEnd = () => {
    setShowOverlay(true);
  };

  return (
    <div className="landing-page">
      {/* Video background */}
      <video
        className="background-video"
        src="/data/introfast.mp4" // Replace with your video path
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      ></video>

      {/* Overlay content */}
      {showOverlay && (
        <div className="overlay">
          {/* <img src="/data/ologo.png" alt="Olympics Logo" className="logo" /> */}
          <div className="countdown-container">
            <h1 className="title">LA 2028 Olympics</h1>
            {/* <p className="subtitle">Experience the thrill of the games in Los Angeles!</p> */}
            <Countdown
              date={targetDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="timer">
                  <div>
                    <span>{days}</span>
                    <small>Days</small>
                  </div>
                  <div>
                    <span>{hours}</span>
                    <small>Hours</small>
                  </div>
                  <div>
                    <span>{minutes}</span>
                    <small>Minutes</small>
                  </div>
                  <div>
                    <span>{seconds}</span>
                    <small>Seconds</small>
                  </div>
                </div>
              )}
            />
            
          </div>
        <button className="get-started" onClick={onStart}>
              START
        </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;