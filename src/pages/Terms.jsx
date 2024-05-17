import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Terms/T_Hero';
import T_Terms from '../components/Terms/T_Terms';

const Terms = () => {
  return (
    <div>
      <div>
        <Header/>
        <Hero/>
      </div>

      <div>
        <T_Terms/>
        <div className="separator"></div>
        <Footer/>
      </div>    
    </div>
  )
}

export default Terms
