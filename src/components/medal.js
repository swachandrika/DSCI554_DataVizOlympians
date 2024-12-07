import React from "react";

const MedalChart = () => {
  return (
    <div style={{ margin: "20px auto", textAlign: "center", width: "90%" }}>
      <iframe
        src="PROJECT/src/components/medal.html"
        title="Olympics Medal Chart"
        style={{
          width: "100%",
          height: "600px",
          border: "none",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        }}
      ></iframe>
    </div>
  );
};

export default MedalChart;