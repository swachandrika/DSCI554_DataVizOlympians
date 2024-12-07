import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane, Html } from "@react-three/drei";
import * as THREE from "three";

const VenueMap = () => {
  const [metrics, setMetrics] = useState({
    density: Math.random() * 50 + 10, // People per sq. meter
    capacity: Math.random() * 100 + 100, // Random capacity
  });

  const generateHeatmapData = () => {
    // Generate random heatmap data
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        value: Math.random() * 50,
      });
    }
    return data;
  };

  const heatmapData = generateHeatmapData();

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas camera={{ position: [0, 50, 100], fov: 45 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Plane
          args={[100, 100]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <meshStandardMaterial color="#aaa" />
        </Plane>
        {heatmapData.map((point, index) => (
          <Html
            key={index}
            position={[point.x, 0.1, point.y]}
            style={{
              backgroundColor: `rgba(255, 0, 0, ${point.value / 50})`,
              width: "10px",
              height: "10px",
              borderRadius: "50%",
            }}
          />
        ))}
        <OrbitControls />
      </Canvas>
      <div style={{ position: "absolute", top: 10, left: 10, color: "#fff" }}>
        <h2>Venue Metrics</h2>
        <p>Density: {metrics.density.toFixed(2)} people/sq. meter</p>
        <p>Capacity: {metrics.capacity.toFixed(0)}</p>
      </div>
    </div>
  );
};

export default VenueMap;