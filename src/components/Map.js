// src/Map.js
import React, { useEffect, useState, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import locations from "./locations";
import axios from "axios";
import * as turf from '@turf/turf';

// Import sport icons
import athleticsIcon from "./freebie-olympic-sports-icons/SVG/athletics.svg";
import artisticGymnasticsIcon from "./freebie-olympic-sports-icons/SVG/artistic_gymnastics.svg";
import beachVolleyballIcon from "./freebie-olympic-sports-icons/SVG/beach_volleyball.svg";
import swimmingIcon from "./freebie-olympic-sports-icons/SVG/swimming.svg";
import boxingIcon from "./freebie-olympic-sports-icons/SVG/boxing.svg";
import wrestlingIcon from "./freebie-olympic-sports-icons/SVG/wrestling.svg";
import tennisIcon from "./freebie-olympic-sports-icons/SVG/tennis.svg";
import volleyballIcon from "./freebie-olympic-sports-icons/SVG/volleyball.svg";
import rugbyIcon from "./freebie-olympic-sports-icons/SVG/rugby_sevens.svg";
import weightliftingIcon from "./freebie-olympic-sports-icons/SVG/weightlifting.svg";

// Function to create an icon with dynamic size
const createIcon = (iconUrl, zoom) => {
  const size = Math.max(32, zoom * 4);
  return new L.Icon({
    iconUrl,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
};

// Component to handle zoom changes
function ZoomHandler({ setZoom }) {
  const map = useMap();

  useEffect(() => {
    map.on("zoomend", () => {
      setZoom(map.getZoom());
    });
  }, [map, setZoom]);

  return null;
}
function RoutingMachine({ start, end }) {
  const map = useMap();
  const routingControlRef = useRef(null);

  useEffect(() => {
    if (!start || !end) return;

    // Clean up existing routing control
    if (routingControlRef.current) {
      try {
        routingControlRef.current.getPlan().setWaypoints([]);
        map.removeControl(routingControlRef.current);
      } catch (e) {
        // Handle potential cleanup errors silently
      }
    }

    // Create new routing control
    try {
      routingControlRef.current = L.Routing.control({
        waypoints: [L.latLng(start), L.latLng(end)],
        routeWhileDragging: false,
        lineOptions: {
          styles: [{ color: "#FF5733", weight: 6 }],
        },
        createMarker: () => null, // Prevent markers on waypoints
        addWaypoints: false,
        fitSelectedRoutes: false,
        showAlternatives: false,
      }).addTo(map);

      // After the route is created, fetch points of interest
      routingControlRef.current.on('routesfound', async function(e) {
        const routes = e.routes;
        const routeGeoJSON = routes[0].coordinates; // Get the route coordinates

        // Create a LineString from the route
        const line = turf.lineString(routeGeoJSON.map(coord => [coord.lng, coord.lat]));

        // Define the distance in meters (5 miles)
        const distanceInMiles = 5;
        const distanceInMeters = distanceInMiles * 1609.34; // Convert miles to meters

        // Fetch points of interest from Google Places API
        const placesApiKey = 'YOUR_GOOGLE_PLACES_API_KEY'; // Replace with your API key
        const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${start.lat},${start.lng}&radius=${distanceInMeters}&type=restaurant&key=${placesApiKey}`;

        console.log('Fetching places from:', placesUrl); // Debugging log

        try {
          const response = await axios.get(placesUrl);
          console.log('Response:', response.data); // Debugging log
          const places = response.data.results;

          // Add points of interest within 5 miles of the route
          places.forEach(poi => {
            const point = turf.point([poi.geometry.location.lng, poi.geometry.location.lat]); // [lng, lat]
            if (turf.distance(line, point, { units: 'meters' }) <= distanceInMeters) {
              L.marker([poi.geometry.location.lat, poi.geometry.location.lng])
                .addTo(map)
                .bindPopup(poi.name); // Add a popup with the name of the POI
            }
          });
        } catch (error) {
          console.error('Error fetching places:', error);
        }
      });

    } catch (e) {
      console.error('Error creating route:', e);
    }

    // Cleanup function
    return () => {
      if (routingControlRef.current && map) {
        try {
          routingControlRef.current.getPlan().setWaypoints([]);
          map.removeControl(routingControlRef.current);
        } catch (e) {
          // Handle cleanup errors silently
        }
      }
    };
  }, [start, end, map]);
}
function Map() {
  const center = [34.0522, -118.2437];
  const [currentZoom, setCurrentZoom] = useState(10);
  const [selectedLocations, setSelectedLocations] = useState([]);

  // Define Southern California bounds
  const southWest = L.latLng(33.4, -119.2); // San Clemente Island area
  const northEast = L.latLng(34.8, -117.0); // San Bernardino area
  const bounds = L.latLngBounds(southWest, northEast);

  // Dynamic icons object that updates with zoom
  const dynamicIcons = useMemo(() => ({
    athletics: createIcon(athleticsIcon, currentZoom),
    artistic_gymnastics: createIcon(artisticGymnasticsIcon, currentZoom),
    beach_volleyball: createIcon(beachVolleyballIcon, currentZoom),
    swimming: createIcon(swimmingIcon, currentZoom),
    boxing: createIcon(boxingIcon, currentZoom),
    wrestling: createIcon(wrestlingIcon, currentZoom),
    tennis: createIcon(tennisIcon, currentZoom),
    volleyball: createIcon(volleyballIcon, currentZoom),
    rugby_sevens: createIcon(rugbyIcon, currentZoom),
    weightlifting: createIcon(weightliftingIcon, currentZoom),
  }), [currentZoom]);

  const handleMarkerClick = (position) => {
    setSelectedLocations((prev) => {
      if (prev.length === 2) return [position]; // Reset if already 2 locations selected
      return [...prev, position];
    });
  };

  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ height: "100vh", width: "100%" }}
      zoomAnimation={true}
      minZoom={9} // Restrict minimum zoom level
      maxZoom={18} // Restrict maximum zoom level
      maxBounds={bounds} // Restrict panning to SoCal
      maxBoundsViscosity={1.0} // Make bounds "sticky"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        bounds={bounds}
      />
      <ZoomHandler setZoom={setCurrentZoom} />
      {locations.map((location, idx) => (
        <Marker
          key={idx}
          position={location.position}
          icon={dynamicIcons[location.type] || dynamicIcons.athletics}
          eventHandlers={{
            click: () => handleMarkerClick(location.position),
          }}
        >
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.description}
          </Popup>
        </Marker>
      ))}
      {selectedLocations.length === 2 && (
        <RoutingMachine
          start={selectedLocations[0]}
          end={selectedLocations[1]}
        />
      )}
    </MapContainer>
  );
}

export default Map;