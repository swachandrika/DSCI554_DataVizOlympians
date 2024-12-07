import React, { useEffect } from "react";
import * as d3 from "d3";
import * as XLSX from "xlsx";

function AnimatedBarChart() {
  useEffect(() => {
    // Load and process data from the Excel file
    async function loadData() {
      const response = await fetch("PROJECT/public/data/olympichistory.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      // Transform the data to the required format
      const data = [];
      jsonData.forEach((row) => {
        const country = row["Country Name"];
        const region = row["Region"];
        const imageUrl = row["Image URL"];
        for (let year = 1960; year <= 2017; year++) {
          if (row[year]) {
            data.push({
              Country: country,
              Region: region,
              Image: imageUrl,
              Year: +year,
              Population: +row[year].toString().replace(/,/g, ""),
            });
          }
        }
      });

      return data;
    }

    loadData().then((data) => {
      const years = [...new Set(data.map((d) => d.Year))];
      const width = 900;
      const height = 600;
      const margin = { top: 50, right: 30, bottom: 50, left: 150 };

      // Create the SVG canvas
      const svg = d3
        .select("#chart-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "#f0f0f0");

      // Scales
      const xScale = d3.scaleLinear().range([margin.left, width - margin.right]);
      const yScale = d3.scaleBand().range([margin.top, height - margin.bottom]).padding(0.1);

      // Axes groups
      const xAxisGroup = svg.append("g").attr("transform", `translate(0, ${height - margin.bottom})`);
      const yAxisGroup = svg.append("g").attr("transform", `translate(${margin.left}, 0)`);

      // Update function
      function update(year) {
        const yearData = data
          .filter((d) => d.Year === year)
          .sort((a, b) => b.Population - a.Population)
          .slice(0, 10);

        xScale.domain([0, d3.max(yearData, (d) => d.Population)]);
        yScale.domain(yearData.map((d) => d.Country));

        // Update axes
        xAxisGroup.call(d3.axisBottom(xScale).ticks(5).tickFormat(d3.format(".2s")));
        yAxisGroup.call(d3.axisLeft(yScale));

        // Bind data
        const bars = svg.selectAll(".bar").data(yearData, (d) => d.Country);

        // Enter bars
        bars
          .enter()
          .append("rect")
          .attr("class", "bar")
          .attr("x", xScale(0))
          .attr("y", (d) => yScale(d.Country))
          .attr("height", yScale.bandwidth())
          .attr("fill", "#0073e6")
          .merge(bars)
          .transition()
          .duration(1000)
          .attr("width", (d) => xScale(d.Population) - xScale(0));

        // Add labels
        const labels = svg.selectAll(".label").data(yearData, (d) => d.Country);

        labels
          .enter()
          .append("text")
          .attr("class", "label")
          .attr("x", (d) => xScale(d.Population) + 5)
          .attr("y", (d) => yScale(d.Country) + yScale.bandwidth() / 2)
          .attr("dy", "0.35em")
          .attr("fill", "#000")
          .text((d) => d.Population.toLocaleString())
          .merge(labels)
          .transition()
          .duration(1000)
          .attr("x", (d) => xScale(d.Population) + 5);

        // Remove old elements
        bars.exit().remove();
        labels.exit().remove();
      }

      // Animation loop
      let yearIndex = 0;
      const interval = setInterval(() => {
        update(years[yearIndex]);
        yearIndex = (yearIndex + 1) % years.length;
      }, 2000);

      return () => {
        clearInterval(interval);
        svg.remove();
      };
    });
  }, []);

  return <div id="chart-container"></div>;
}

export default AnimatedBarChart;