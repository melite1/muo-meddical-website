// src/components/Hero.jsx

import React from 'react';
import './Hero.css';
import heroBanner from '../assets/Physician_Trends_2021_Merritt_Hawkins 1.png'; // Replace with actual image

export default function Hero() {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="caring">Caring for Life</h1>
          <p className='leading'>
            Leading the Way <br></br> in Medical Excellence
          </p>
          <button className="our-services">Our Services</button>
        </div>
      </div>

      <section className="hero">
      <div className="hero-content">
        
      </div>
    </section>
    </section>
  );
}
