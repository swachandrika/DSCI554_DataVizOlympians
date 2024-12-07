import React from "react";

const GenderChart = () => {
  return (
    <div style={{ width: "100%", height: "600px", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden" }}>
      <iframe
        src="path_to_gender.html"
        title="Gender Gap Chart"
        style={{ width: "100%", height: "100%", border: "none" }}
        sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe>
    </div>
  );
};

export default GenderChart;