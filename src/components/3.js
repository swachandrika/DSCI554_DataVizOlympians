import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import CrowdManagementChart from './cmchart.js';
import Map from './Map.js';
import * as d3 from 'd3';

// Sample venue and floor plans
const venues = {
  'LA Memorial Coliseum': {
    floorPlans: [
      { level: 1, image: '/data/0.jpg' },
      { level: 2, image: '/data/1.jpg' },
      { level: 3, image: '/data/2.jpg' },
      { level: 4, image: '/data/3.jpg' },
      { level: 5, image: '/data/4.jpg' },
      { level: 6, image: '/data/5.jpg' },
      { level: 7, image: '/data/6.jpg' },
      { level: 8, image: '/data/7.jpg' },
    ],
  },
};

const clickableAreas = [
  { id: 1, x: '47.5%', y: '43.5%', width: 50, height: 50, targetLevel: 1 },
  { id: 5, x: '63%', y: '20%', width: 50, height: 50, targetLevel: 5 },
  { id: 3, x: '66%', y: '43.5%', width: 50, height: 50, targetLevel: 3 },
  { id: 6, x: '31%', y: '65%', width: 50, height: 50, targetLevel: 6 },
  { id: 4, x: '31%', y: '20%', width: 50, height: 50, targetLevel: 4 },
  { id: 2, x: '29%', y: '43.5%', width: 50, height: 50, targetLevel: 2 },
  { id: 7, x: '47.5%', y: '74%', width: 50, height: 50, targetLevel: 7 },
  { id: 8, x: '63%', y: '67%', width: 50, height: 50, targetLevel: 8 },
]


const crowdData = {
  totalAttendees: 100000,
  stats: [
    { venue: 'Main Stadium', attendees: 40000, gatesUsed: [1, 2, 3], noise: 85, busiestStall: 'Food Court A', time: '8:00 PM' },
    { venue: 'Swimming Arena', attendees: 20000, gatesUsed: [4, 5], noise: 75, busiestStall: 'Beverage Stand B', time: '6:00 PM' },
    { venue: 'Basketball Court', attendees: 15000, gatesUsed: [6], noise: 65, busiestStall: 'Snack Booth C', time: '5:00 PM' },
    { venue: 'Tennis Court', attendees: 10000, gatesUsed: [7, 8], noise: 60, busiestStall: 'Merchandise Shop D', time: '7:00 PM' },
    { venue: 'Track & Field', attendees: 5000, gatesUsed: [9, 10], noise: 70, busiestStall: 'Drink Stand E', time: '9:00 PM' },
  ],
};

const VenueNavigation = () => {
  const [activeVenue, setActiveVenue] = useState(Object.keys(venues)[0]); // Default to the first venue
  const [currentLevel, setCurrentLevel] = useState(1); // Default to level 1
  const [attendees, setAttendees] = useState(50000); // Slider for attendees

  const currentVenue = venues[activeVenue]; // Details of the active venue
  const currentPlan = currentVenue?.floorPlans?.find((plan) => plan.level === currentLevel); // Floor plan for the current level

  useEffect(() => {
    // Create D3 chart for crowd management
    const svgWidth = 800;
    const svgHeight = 400;
    const margin = { top: 20, right: 30, bottom: 50, left: 100 };

    d3.select('#chart-container').selectAll('*').remove(); // Clear previous chart

    const svg = d3
      .select('#chart-container')
      .append('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    const scaledData = crowdData.stats.map((d) => ({
      ...d,
      attendees: (d.attendees / crowdData.totalAttendees) * attendees,
    }));

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(scaledData, (d) => d.attendees)])
      .range([margin.left, svgWidth - margin.right]);

    const yScale = d3
      .scaleBand()
      .domain(scaledData.map((d) => d.venue))
      .range([margin.top, svgHeight - margin.bottom])
      .padding(0.1);

    svg
      .selectAll('rect')
      .data(scaledData)
      .enter()
      .append('rect')
      .attr('x', margin.left)
      .attr('y', (d) => yScale(d.venue))
      .attr('width', (d) => xScale(d.attendees) - margin.left)
      .attr('height', yScale.bandwidth())
      .attr('fill', 'steelblue');

    svg
      .append('g')
      .attr('transform', `translate(0,${svgHeight - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));
  }, [attendees]);

  return (
    <Container className="my-4">
      <Tabs
        defaultActiveKey={activeVenue}
        id="venue-tabs"
        onSelect={(key) => {
          setActiveVenue(key);
          setCurrentLevel(1); // Reset to level 1 when switching venues
        }}
      >
        {Object.keys(venues).map((venue, index) => (
          <Tab eventKey={venue} title={venue} key={index}>
            <div className="p-3">
              {currentPlan ? (
                <div style={{ textAlign: 'center', marginTop: '20px', position: 'relative' }}>
                  <img
                    src={currentPlan.image}
                    alt={`Level ${currentLevel}`}
                    style={{
                      width: '80%',
                      maxWidth: '600px',
                      borderRadius: '10px',
                    }}
                  />
                  {clickableAreas.map((area) => (
                    <div
                      key={area.id}
                      onClick={() => setCurrentLevel(area.targetLevel)}
                      style={{
                        position: 'absolute',
                        top: area.y,
                        left: area.x,
                        width: `${area.width}px`,
                        height: `${area.height}px`,
                        backgroundColor: currentLevel === area.targetLevel ? '#0056b3' : 'rgba(255, 255, 255, 0.8)',
                        border: '2px solid #007bff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '14px',
                        transition: '0.2s all ease',
                      }}
                    >
                      {area.targetLevel}
                    </div>
                  ))}
                </div>
              ) : (
                <p>No floor plans available for this level.</p>
              )}
            </div>
          </Tab>
        ))}
        <Tab eventKey="Wayfinding" title="Wayfinding">
          <div className="p-3">
            <iframe
              src="https://storage.googleapis.com/mi-hwp/index.html?appUserRoles=football,hwp&venue=SOFI_STADIUM"
              title="Wayfinding"
              style={{
                width: '100%',
                height: '600px',
                border: 'none',
                borderRadius: '10px',
              }}
            ></iframe>
          </div>
        </Tab>
        <Tab eventKey="CrowdManagement" title="Crowd Management">
          <div className="p-3">
            <h4>Crowd Management for the 2028 Olympics</h4>
            <CrowdManagementChart />
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default VenueNavigation;