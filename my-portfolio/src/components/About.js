// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2 className="magictime puffIn">About Me</h2>
      <p style={{ fontSize: '1.1rem', maxWidth: '700px' }}>
        I am from South Central Pennsysvania and have experience 
    in domains including AI, embedded systems, web-development, blockchain,and development of algorithms.

      </p>
      <p style={{ marginTop: '1rem', fontSize: '1.1rem', maxWidth: '700px' }}>
         Outside of coding, I enjoy learning about cognitive science, philosophy,
         decision making, and history.
      </p>
    </section>
  );
};

export default About;
