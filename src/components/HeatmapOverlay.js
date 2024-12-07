import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const HeatmapOverlay = ({ width, height, data }) => {
  const heatmapRef = useRef(null);

  useEffect(() => {
    if (heatmapRef.current) {
      const svg = d3.select(heatmapRef.current);
      svg.selectAll('*').remove(); // Clear previous drawings

      // Generate heatmap
      const colorScale = d3
        .scaleSequential(d3.interpolateReds)
        .domain([0, d3.max(data, (d) => d.value)]);

      svg
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', (d) => d.value * 5) // Scale radius based on value
        .attr('fill', (d) => colorScale(d.value))
        .attr('opacity', 0.7);
    }
  }, [data]);

  return <svg ref={heatmapRef} width={width} height={height} style={{ position: 'absolute' }} />;
};

export default HeatmapOverlay;