import React from 'react';
import './H_HeroMaps.css';

const Home_Hero2 = () => {
  const handleViewMap = () => {
    window.open('https://www.google.com/maps?q=3520+W+Buckingham+Rd,+Garland,+TX+75042', '_blank');
  };

  return (
    <div className="hero-container2">
      <img src="/h3.jpg" alt="Background" className="background-image" />
      <div className="video-overlay"></div>
      <div className="text-overlay">
        <div>
          <h1>EXPLORE THE AREA!</h1>
          <button className="button" onClick={handleViewMap}>View on Google Maps</button>
        </div>
      </div>
    </div>
  );
};

export default Home_Hero2;

/*
      <video autoPlay muted loop className="video-background">
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
*/