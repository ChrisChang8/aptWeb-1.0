import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Contact/c_Hero';
import Form from '../components/Contact/c_Form';

const Contact = () => {
  return (
    <div>
      <div>
        <Header/>
        <Hero/>
      </div>

      <div>
        <Form/>
        <div className="separator"></div>
        <Footer/>
      </div>    
    </div>
  )
}

export default Contact
