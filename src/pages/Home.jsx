import React from 'react';
import Header from '../components/Header';
import Home_Floor from '../components/Home/H_Floor';
import Home_Hero from '../components/Home/H_Hero';
import Footer from '../components/Footer';
import Home_Maps from '../components/Home/H_HeroMaps';
import H_Gallery from '../components/Home/H_Gallery';
import H_Amenities from '../components/Home/H_Amenities';
import H_Apply from '../components/Home/H_Apply';

const Home = () => {
  return (
    <div>
      <div id="home">
        <Header />
        <Home_Hero />
      </div>

      <div>
        <div className="separator"></div>
        <div id="floor_plans">
          <Home_Floor />
        </div>
        <div className="separator"></div>
        <H_Apply />
        <div className="separator"></div>
        <div id="amenities">
          <H_Amenities />
        </div>
        <Home_Maps />
        <div className="separator"></div>
        <H_Gallery />
        <div className="separator"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
