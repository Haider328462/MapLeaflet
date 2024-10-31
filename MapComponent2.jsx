import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import States from './States.json';
import summaries from './summaries.json' 
import Navbar from '../Navbar/Navbar';
const MapComponent2 = () => {
  // Define a style function for the GeoJSON features
  const geoJsonStyle = (feature) => ({
    fillColor: 'blue',         // Change this to your desired fill color
    fillOpacity: 0.001,          // Make the fill almost transparent
    weight: 0.4,                 // Border thickness
    color: '#211e1e',            // Border color
  });

  const stateOnEach = (state, layer) =>{
    `<div class="opacity-10">
    ${onEachState(state, layer)}
    </div>`
    
  }

  const onEachState = (state, layer) => {
    layer.on({
      mouseover: () => {
        const summary = summaries[state.properties.name] || 'No summary available.';
  
        // Show a popup with relevant state information including the summary
        layer.bindPopup(
          `<div class="transparent-popup" style="font-family: Arial, sans-serif; padding-bottom: 20px;">
            <strong class="state-name text-black text-xl" style="margin: 0;">${state.properties.name}</strong>
            <div class="mt-8">
              <p class="amount text-3xl font-bold" style="margin: 5px 0;">$200,000</p>
              <div class="color-bars" style="display: flex; justify-content: space-between; margin-top: 20px; padding-bottom: 35px;">
                <div style="text-align: center; margin-right: 3px;">
                  <div style="background-color: red; width: 98%; height: 10px; border-radius: 5px;"></div>
                  <div>299</div>
                </div>
                <div style="text-align: center; margin-right: 3px;">
                  <div style="background-color: green; width: 98%; height: 10px; border-radius: 5px;"></div>
                  <div>545</div>
                </div>
                <div style="text-align: center; margin-right: 3px;">
                  <div style="background-color: blue; width: 98%; height: 10px; border-radius: 5px;"></div>
                  <div>414</div>
                </div>
                <div style="text-align: center;">
                  <div style="background-color: yellow; width: 98%; height: 10px; border-radius: 5px;"></div>
                  <div>9042</div>
                </div>
              </div>
              <div>
                <strong>Area:</strong> ${state.properties.area || 'N/A'}<br />
                <strong>Summary:</strong> ${summary}
              </div>
            </div>
          </div>`
        ).openPopup(); // Automatically open the popup on hover
      },
      mouseout: () => {
        layer.closePopup(); // Close the popup when the mouse leaves the state
      },
    });
  };  
  
  
  
  
  

  return (
    <div>
     
    <MapContainer center={[37.8, -96]} zoom={5} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <div className=''>
        <GeoJSON data={States} style={geoJsonStyle} onEachFeature={stateOnEach} />
      </div>
    </MapContainer>
    </div>
  );
};

export default MapComponent2;
