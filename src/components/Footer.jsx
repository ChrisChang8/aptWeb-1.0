import React from 'react';
import './Footer.css';
import { NavLink} from 'react-router-dom';

const Footer = () => {


  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
          <li><NavLink to={{ pathname: "/terms", search: "?" }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Terms & Condition
          </NavLink></li>
          <li><NavLink to={{ pathname: "/privacy", search: "?" }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Privacy Policy
          </NavLink></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><NavLink to={{ pathname: "/", search: "?scroll=floor_plans" }}>
              Floor Plans
            </NavLink></li>
            <li><NavLink to={{ pathname: "/", search: "?scroll=amenities" }}>
            Amenities
            </NavLink></li>
            <li><NavLink to="/application" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Apply
            </NavLink></li>
            <li><NavLink to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Contact
            </NavLink></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Hours</h4>
          <ul>
            <li><a>Mon to Fri: 9AM - 5PM</a></li>
            <li><a>Sat to Sun: Closed</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
