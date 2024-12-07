import React, { useState } from "react";
import LandingPage from "./components/landing.js";
import Map from "./components/Map.js";
import VenueNavigation from "./components/venue.js";
import "./app.css";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  const handleStart = () => {
    if (currentPage === "landing") {
      setCurrentPage("map");
    } else if (currentPage === "map") {
      setCurrentPage("venue");
    } else if (currentPage === "venue") {
      setCurrentPage("test2");
    } else if (currentPage === "test2") {
      setCurrentPage("test_sport");
    }
  };

  const handleBack = () => {
    if (currentPage === "map") {
      setCurrentPage("landing");
    } else if (currentPage === "venue") {
      setCurrentPage("map");
    } else if (currentPage === "test2") {
      setCurrentPage("venue");
    } else if (currentPage === "test_sport") {
      setCurrentPage("test2");
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          {currentPage === "map"
            ? "Explore Nearby Venues"
            : currentPage === "venue"
            ? "Venue Navigation"
            : currentPage === "test2"
            ? "Olympics Trends"
            : currentPage === "test_sport"
            ? "Live Game Standings"
            : "Olympics Dashboard"}
        </h1>
      </header>

      <main className="app-content">
        {/* Landing Page */}
        {currentPage === "landing" && <LandingPage onStart={handleStart} />}

        {/* Map Page */}
        {currentPage === "map" && (
          <div className="map-page fade-in">
            <Map />
            <div className="button-container">
              <button className="fancy-button back-button" onClick={handleBack}>
                <span className="arrow">&#8592;</span>
                <span className="tooltip">Go Back</span>
              </button>
              <button className="fancy-button next-button" onClick={handleStart}>
                <span className="arrow">&#8594;</span>
                <span className="tooltip">Next Page</span>
              </button>
            </div>
          </div>
        )}

        {/* Venue Navigation Page */}
        {currentPage === "venue" && (
          <VenueNavigation onNext={handleStart} onBack={handleBack} />
        )}

        {/* Test2 Page */}
        {currentPage === "test2" && (
          <div className="test2-page fade-in">
            <iframe
              src="/test2 (1).html"
              title="Test Page 2"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            ></iframe>
            <div className="button-container">
            <button className="fancy-button back-button" onClick={handleBack}>
                <span className="arrow">&#8592;</span>
                <span className="tooltip">Go Back</span>
              </button>
              <button className="fancy-button next-button" onClick={handleStart}>
                <span className="arrow">&#8594;</span>
                <span className="tooltip">Next Page</span>
              </button>
            </div>
          </div>
        )}

        {/* Test Sport Page */}
        {currentPage === "test_sport" && (
          <div className="test-sport-page fade-in">
            <iframe
              src="/test_sport.html"
              title="Test Sport Page"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
                margin: "0 auto",
              }}
            ></iframe>
            <div className="button-container">
            <button className="fancy-button back-button" onClick={handleBack}>
                <span className="arrow">&#8592;</span>
                <span className="tooltip">Go Back</span>
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>© 2024 Olympics Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
