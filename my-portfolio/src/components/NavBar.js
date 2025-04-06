// src/components/NavBar.js
import React from 'react';
import '../App.css';
import './Navbar.css';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '1rem 1.5rem'
      }}>
        <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          Portfolio
        </div>

        <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#outsideExperience">Other</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
