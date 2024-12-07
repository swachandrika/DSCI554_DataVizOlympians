import React from 'react';

const WayfindingPaths = ({ paths }) => {
  return (
    <svg width="100%" height="100%" style={{ position: 'absolute' }}>
      {paths.map((path, idx) => (
        <line
          key={idx}
          x1={path.start.x}
          y1={path.start.y}
          x2={path.end.x}
          y2={path.end.y}
          stroke="blue"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
      ))}
    </svg>
  );
};

export default WayfindingPaths;