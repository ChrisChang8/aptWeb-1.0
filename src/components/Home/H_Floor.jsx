import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './H_Floor.css';
import floorPlansData from '../../utils/floorPlans.json';

const Home_Floor = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState('All');
  const [selectedBathrooms, setSelectedBathrooms] = useState('All');
  const [filteredFloorPlans, setFilteredFloorPlans] = useState(floorPlansData);
  const [numFloorPlansToShow, setNumFloorPlansToShow] = useState(6); // Initially show 6 floor plans
  const [selectedFloorPlanImage, setSelectedFloorPlanImage] = useState(null); // State to track selected floor plan image

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Function to handle room filter change
  const handleRoomChange = (event) => {
    setSelectedRooms(event.target.value);
  };

  // Function to handle bathroom filter change
  const handleBathroomChange = (event) => {
    setSelectedBathrooms(event.target.value);
  };

  // Function to apply filter and update filtered floor plans
  const applyFilter = () => {
    let filteredPlans = floorPlansData;

    if (selectedRooms !== 'All') {
      filteredPlans = filteredPlans.filter(plan => plan.bed === selectedRooms);
    }

    if (selectedBathrooms !== 'All') {
      filteredPlans = filteredPlans.filter(plan => plan.bath === selectedBathrooms);
    }

    if (selectedDate) {
      filteredPlans = filteredPlans.filter(plan => new Date(plan.available) <= selectedDate);
    }

    setFilteredFloorPlans(filteredPlans);
    setNumFloorPlansToShow(6); // Reset number of floor plans to show after applying filter
  };

  // Function to clear filter
  const clearFilter = () => {
    setSelectedRooms('All');
    setSelectedBathrooms('All');
    setSelectedDate(null);
    applyFilter(); // Apply filter again to reset filtered floor plans
  };

  // Function to handle clicking on a floor plan image
  const handleFloorPlanImageClick = (image) => {
    setSelectedFloorPlanImage(image);
  };

  // Function to close the selected floor plan image overlay
  const closeSelectedFloorPlanImage = () => {
    setSelectedFloorPlanImage(null);
  };

  return (
    <div className='fp_flexCenter' id="floorPlan">
      <h2>AVAILABLE FLOOR PLANS</h2>
      <div className="filters">
        <label htmlFor="rooms">Bedrooms:</label>
        <select id="rooms" value={selectedRooms} onChange={handleRoomChange}>
          <option value="All">All</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
        </select>
        <label htmlFor="bathrooms">Bathrooms:</label>
        <select id="bathrooms" value={selectedBathrooms} onChange={handleBathroomChange}>
          <option value="All">All</option>
          <option value="1">1 Bathroom</option>
          <option value="2">2 Bathrooms</option>
          <option value="3">3 Bathrooms</option>
        </select>
        <label htmlFor="datepicker">Select Date:</label>
        <DatePicker
          id="datepicker"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          placeholderText="Move-In Date"
        />
        <div>        
          <button className='button' style={{marginRight: '10px'}} onClick={applyFilter}>View Availability</button>
          <button className='button' onClick={clearFilter}>Clear Filter</button> {/* Add clear filter button */}
        </div>
      </div>

      <div className="floor-plan-grid">
        {filteredFloorPlans.slice(0, numFloorPlansToShow).map((plan, index) => (
          <div key={index} className="floor-plan" onClick={() => handleFloorPlanImageClick(plan.image)}>
            <img src={plan.image} alt={plan.name} />
            <div className="plan-details">
              <h3>{plan.name}</h3>
              <p>Bed: {plan.bed}</p>
              <p>Bath: {plan.bath}</p>
              <p>Sqft: {plan.sqft}</p>
              <p>Available: {plan.available}</p>
              <p>Price: {plan.price}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedFloorPlanImage && ( // Render selected floor plan image overlay if exists
        <div className="card_overlay">
          <div className="selected-floor-plan-image">
            <img src={selectedFloorPlanImage} alt="Selected Floor Plan" />
            <button className="close-button" onClick={closeSelectedFloorPlanImage}>X</button>
            <div className="selected-floor-plan-details">
              {/* Display the details of the selected floor plan */}
              {filteredFloorPlans.map((plan, index) => {
                if (plan.image === selectedFloorPlanImage) {
                  return (
                    <div key={index} className='flexColCenter'>
                      <div> 
                        <h3>{plan.name}</h3>
                        <p>Bed: {plan.bed}</p>
                        <p>Bath: {plan.bath}</p>
                        <p>Sqft: {plan.sqft}</p>
                        <p>Available: {plan.available}</p>
                        <p>Price: {plan.price}</p>                        
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      )}

      {numFloorPlansToShow > 6 && ( // Conditionally render "Load Less" button
        <button className="button" onClick={() => setNumFloorPlansToShow(6)} style={{marginTop:'20px'}}>
          Load Less
        </button>
      )}
      {numFloorPlansToShow < filteredFloorPlans.length ? ( // Conditionally render "Load More" button
        <button className="button" onClick={() => setNumFloorPlansToShow(prev => prev + 3)} style={{marginTop:'20px'}}>
          Load More
        </button>
      ) : null}
    </div>
  );
};

export default Home_Floor;
