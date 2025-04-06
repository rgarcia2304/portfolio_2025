// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-inner magictime vanishIn">
        <h1>bonjour.</h1>
        <p style={{ maxWidth: '600px', marginTop: '1rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
          I'm <strong>Rodrigo</strong>. A <strong>Junior</strong> studying <strong> Computer Science</strong> at <strong>Penn State</strong>
          <br />  I enjoy learning new things through building and experimentation  <br /> 
        </p>
        
      </div>
    </section>
  );
};

export default Hero;
