import React, { useEffect } from "react";

const CountryChart = () => {
  useEffect(() => {
    // Embed the chart logic from the HTML
    const script = document.createElement("script");
    script.src = "https://flo.uri.sh/template/18063/v26/embed.js";
    script.async = true;
    document.getElementById("country-chart-container").appendChild(script);

    return () => {
      // Cleanup the script on unmount
      document.getElementById("country-chart-container").innerHTML = "";
    };
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center", color: "#4CAF50" }}>
        Country Tracking Visualization
      </h3>
      <div
        id="country-chart-container"
        style={{
          width: "100%",
          height: "600px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      ></div>
    </div>
  );
};

export default CountryChart;