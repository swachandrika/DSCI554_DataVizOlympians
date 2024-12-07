import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">2028 Olympics</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#health-safety">Health & Safety</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#venues">Venues</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#athletes">Athletes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#crowd-management">Crowd Management</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sport">Crowd Heart Rate</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;