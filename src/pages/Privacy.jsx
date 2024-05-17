import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Privacy/P_Hero';
import P_Privacy from '../components/Privacy/P_Privacy';

const Privacy = () => {
  return (
    <div>
      <div>
        <Header/>
        <Hero/>
      </div>

      <div>
        <P_Privacy/>
        <div className="separator"></div>
        <Footer/>
      </div>    
    </div>
  )
}

export default Privacy
