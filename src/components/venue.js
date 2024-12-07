import React, { useState } from "react";
import "./venue.css"; // CSS for VenueNavigation layout

function VenueNavigation({ onNext, onBack }) {
  const [currentPage, setCurrentPage] = useState("indoorNavigation");

  const handleNavigation = (page) => {
    setCurrentPage(page); // Update the current page when a navigation item is clicked
  };

  return (
    <div className="venue-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
        <li>
            <button
              onClick={() => handleNavigation("indoorNavigation")}
              className={currentPage === "indoorNavigation" ? "active" : ""}
            >
              Indoor Navigation
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("crowdManagement")}
              className={currentPage === "crowdManagement" ? "active" : ""}
            >
              Crowd Management
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("footTraffic")}
              className={currentPage === "footTraffic" ? "active" : ""}
            >
              Foot Traffic
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("liveFeed")}
              className={currentPage === "liveFeed" ? "active" : ""}
            >
              Live Feed
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content">
        {currentPage === "crowdManagement" && (
          <div className="section">
            <h2>Crowd Density & Management</h2>
            <iframe
              src="/data/heartrate.mp4"
              autoPlay
              muted
              playsInline
              loop
              controls
              title="Crowd Density & Management"
              style={{ width: "100%", height: "500px", border: "none" }}
            ></iframe>
          </div>
        )}

        {currentPage === "indoorNavigation" && (
          <div className="section">
            <h2>Indoor Navigation</h2>
            <iframe
              src="https://storage.googleapis.com/mi-hwp/index.html?appUserRoles=football,hwp&venue=SOFI_STADIUM"
              title="Indoor Navigation"
              style={{ width: "100%", height: "500px", border: "none" }}
            ></iframe>
          </div>
        )}

        {currentPage === "footTraffic" && (
          <div className="section">
            <h2>Foot Traffic</h2>
            <iframe
              src="/foottraffic.html"
              title="Foot Traffic"
              style={{ width: "100%", height: "500px", border: "none" }}
            ></iframe>
          </div>
        )}

        {currentPage === "liveFeed" && (
          <div className="section">
            <h2>Live Camera Feed</h2>
            <video
              src="/data/livefeed.mov" // Replace with your video path
              autoPlay
              muted
              playsInline
              loop
              controls
              style={{ width: "100%", height: "500px" }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      {/* Buttons for Back and Next */}
      <div className="button-container">
        <button className="fancy-button back-button" onClick={onBack}>
          <span className="arrow">&#8592;</span>
          <span className="tooltip">Go Back</span>
        </button>
        <button className="fancy-button next-button" onClick={onNext}>
          <span className="arrow">&#8594;</span>
          <span className="tooltip">Next Page</span>
        </button>
      </div>
    </div>
  );
}

export default VenueNavigation;
