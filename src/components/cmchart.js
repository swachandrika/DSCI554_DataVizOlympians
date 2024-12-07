import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const CrowdManagementDashboard = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const [visualizationType, setVisualizationType] = useState("line"); // Default chart type
  const [timeIndex, setTimeIndex] = useState(0); // Index for time slider
  const timeSteps = [
    "8:00 AM",
    "10:00 AM",
    "12:00 PM",
    "2:00 PM",
    "4:00 PM",
    "6:00 PM",
    "8:00 PM",
  ]; // Time intervals

  // Simulated variable data over time
  const getRealTimeData = () => {
    const baseData = [
      [5000, 10000, 15000, 20000, 25000, 30000, 40000], // Main Stadium
      [2000, 4000, 6000, 8000, 10000, 15000, 20000], // Swimming Arena
      [1500, 3000, 4500, 6000, 7500, 10000, 12000], // Basketball Court
    ];

    const noise = () => Math.random() * 500 - 250; // Random fluctuation for variability

    return baseData.map((dataset) =>
      dataset.map((value, index) => value + noise() * index * (timeIndex + 1))
    );
  };

  // Generate chart data based on visualization type and real-time data
  const getChartData = () => {
    const realTimeData = getRealTimeData();

    switch (visualizationType) {
      case "line":
        return {
          labels: timeSteps.slice(0, timeIndex + 1),
          datasets: [
            {
              label: "Main Stadium",
              data: realTimeData[0].slice(0, timeIndex + 1),
              borderColor: "#FF6384",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Swimming Arena",
              data: realTimeData[1].slice(0, timeIndex + 1),
              borderColor: "#36A2EB",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Basketball Court",
              data: realTimeData[2].slice(0, timeIndex + 1),
              borderColor: "#FFCE56",
              borderWidth: 2,
              fill: false,
            },
          ],
        };
      case "pie":
        return {
          labels: ["Main Stadium", "Swimming Arena", "Basketball Court"],
          datasets: [
            {
              data: [
                realTimeData[0][timeIndex],
                realTimeData[1][timeIndex],
                realTimeData[2][timeIndex],
              ],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        };
      case "bar":
        return {
          labels: ["Main Stadium", "Swimming Arena", "Basketball Court"],
          datasets: [
            {
              label: "Foot Traffic",
              data: [
                realTimeData[0][timeIndex],
                realTimeData[1][timeIndex],
                realTimeData[2][timeIndex],
              ],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        };
      case "area":
        return {
          labels: timeSteps.slice(0, timeIndex + 1),
          datasets: [
            {
              label: "Main Stadium",
              data: realTimeData[0].slice(0, timeIndex + 1),
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Swimming Arena",
              data: realTimeData[1].slice(0, timeIndex + 1),
              backgroundColor: "rgba(54, 162, 235, 0.5)",
            },
            {
              label: "Basketball Court",
              data: realTimeData[2].slice(0, timeIndex + 1),
              backgroundColor: "rgba(255, 206, 86, 0.5)",
            },
          ],
        };
      default:
        return {};
    }
  };

  // Initialize or update the chart
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      // Update chart data
      chartInstanceRef.current.data = getChartData();
      chartInstanceRef.current.config.type =
        visualizationType === "area" ? "line" : visualizationType;
      chartInstanceRef.current.update();
    } else {
      // Create chart instance
      chartInstanceRef.current = new Chart(ctx, {
        type: visualizationType === "area" ? "line" : visualizationType,
        data: getChartData(),
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "white",
              },
            },
          },
          scales: {
            x: {
              ticks: { color: "white" },
              grid: { color: "rgba(255, 255, 255, 0.1)" },
            },
            y: {
              ticks: { color: "white" },
              grid: { color: "rgba(255, 255, 255, 0.1)" },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [visualizationType, timeIndex]);

  return (
    <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "10px" }}>
      <h3 style={{ color: "white", textAlign: "center" }}>
        Crowd Management Dashboard
      </h3>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <label style={{ color: "white" }}>
          Select Visualization:
          <select
            value={visualizationType}
            onChange={(e) => setVisualizationType(e.target.value)}
            style={{ marginLeft: "10px" }}
          >
            <option value="line">Attendee Distribution (Line Chart)</option>
            <option value="pie">Gate Usage (Pie Chart)</option>
            <option value="bar">Venue Popularity (Bar Chart)</option>
            <option value="area">Venue Occupancy (Stacked Area Chart)</option>
          </select>
        </label>
      </div>
      <div style={{ height: "300px" }}>
        <canvas ref={chartRef} />
      </div>
      <div style={{ marginTop: "20px", textAlign: "center", color: "white" }}>
        <label htmlFor="time-slider" style={{ marginBottom: "10px" }}>
          Adjust Time:
        </label>
        <input
          id="time-slider"
          type="range"
          min="0"
          max={timeSteps.length - 1}
          value={timeIndex}
          onChange={(e) => setTimeIndex(Number(e.target.value))}
          style={{ width: "100%", marginTop: "10px" }}
        />
        <p style={{ color: "white" }}>Time: {timeSteps[timeIndex]}</p>
      </div>
    </div>
  );
};

export default CrowdManagementDashboard;