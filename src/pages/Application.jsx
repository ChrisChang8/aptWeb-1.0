import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Application/app_Hero';
import RentalApp from '../components/Application/rentalApp';
import Footer from '../components/Footer';

const Application = () => {
  return (
    <div>
      <div>
        <Header/>
        <Hero/>
      </div>

      <div>
        <RentalApp/>
        <div className="separator"></div>
        <Footer/>
      </div>    
    </div>
  )
}

export default Application;
