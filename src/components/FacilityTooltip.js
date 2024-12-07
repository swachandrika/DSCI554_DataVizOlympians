import React, { useState } from 'react';

const FacilityTooltip = ({ facility, position }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        cursor: 'pointer',
      }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: 'blue',
          borderRadius: '50%',
        }}
      ></div>
      {hovered && (
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            left: '10px',
            padding: '5px',
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '5px',
            fontSize: '12px',
          }}
        >
          {facility}
        </div>
      )}
    </div>
  );
};

export default FacilityTooltip;