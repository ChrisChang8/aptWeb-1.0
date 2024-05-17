import React, { useState } from 'react';
import './H_Amenities.css';
import amenitiesData from '../../utils/amenities.json';

const H_Amenities = () => {
  const [showAll, setShowAll] = useState(false);
  const [displayedAmenities, setDisplayedAmenities] = useState(amenitiesData.slice(0, 6));

  const handleLoadMore = () => {
    setDisplayedAmenities(amenitiesData);
    setShowAll(true);
  };

  const handleLoadLess = () => {
    setDisplayedAmenities(amenitiesData.slice(0, 6));
    setShowAll(false);
  };

  return (
    <div className="amenities-container">
      <div className='a-flexCenter'>
        <h2>VARIETY OF LOCAL & COMMUNITY AMENITIES</h2>
        <p style={{marginTop:'20px', marginBottom:'25px'}}>
          Our community offers a wide range of amenities to suit your lifestyle, 
          from modern bathroom features to convenient necessities nearby. 
          Explore our area that offers the perfect living environment for you.
        </p>   
        {/* Display amenities */}
        <div className="amenities-list">
          {displayedAmenities.map((amenity, index) => (
            <div key={index} className="amenity-item">
              <img src={amenity.image} alt={amenity.name} />
              <p>{amenity.name}</p>
              <p>{amenity.text}</p>
            </div>
          ))}
        </div>   
        {amenitiesData.length > 6 && (
          <div className="load-more-container" style={{marginTop:'25px'}}>
            {!showAll ? (
              <button className="button" onClick={handleLoadMore}>Load More</button>
            ) : (
              <button className="button" onClick={handleLoadLess}>Load Less</button>
            )}
          </div>
        )}      
      </div>
    </div>
  );
};

export default H_Amenities;
