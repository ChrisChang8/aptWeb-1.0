import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (!isTop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll to section if query parameter is present
    const params = new URLSearchParams(location.search);
    const scrollSection = params.get('scroll');
    if (scrollSection) {
      scrollToSection(scrollSection);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const removeTransform = () => {
    navRef.current.classList.remove('responsive_nav');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 150; // Adjust this value as needed
      const topPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
    removeTransform();
  };
  

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="logo">
        <img src="./logo.png" alt="Logo" />
      </div>
      <nav ref={navRef} style={{ marginRight: '100px' }}>
        <NavLink to={{ pathname: "/", search: "?scroll=home" }} onClick={removeTransform}>
          Home
        </NavLink>
        <NavLink to={{ pathname: "/", search: "?scroll=floor_plans" }} onClick={removeTransform}>
          Floor Plans
        </NavLink>
        <NavLink to={{ pathname: "/", search: "?scroll=amenities" }} onClick={removeTransform}>
          Amenities
        </NavLink>
        <NavLink to="/application" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Apply
        </NavLink>
        <NavLink to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Contact
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;


