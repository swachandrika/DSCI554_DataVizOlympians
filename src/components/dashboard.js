import React from "react";

const Dashboard = ({ onBack }) => {
  return (
    <div className="dashboard">
      <h1>Welcome to the Olympics Dashboard</h1>
      <button onClick={onBack}>Go Back</button>
    </div>
  );
};

export default Dashboard;