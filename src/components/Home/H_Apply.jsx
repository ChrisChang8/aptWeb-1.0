import React from 'react'
import './H_Apply.css'
import { NavLink} from 'react-router-dom';

const H_Apply = () => {
  return (
    <div className="hero-container2">
      <img src="/h2.jpg" alt="Background" className="background-image" />
      <div className="video-overlay"></div>
      <div className="text-overlay">
        <div>
          <h1>Interested in our plans?</h1>
          <NavLink to="/application" className="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Apply Now!
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default H_Apply
