// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p style={{ fontSize: '1.1rem', maxWidth: '700px' }}>
        Let’s connect! You can reach me at&nbsp;
        <a href="rgarcia22141@gmail.com">rgarcia22141@gmail.com</a> or find me on
        <a 
          href="https://www.linkedin.com/in/rodrigo-garcia-penn200423/" 
          target="_blank" 
          rel="noreferrer" 
          style={{ marginLeft: '0.3rem' }}
        >
          LinkedIn
        </a>.
      </p>
      <p style={{ marginTop: '1rem', fontSize: '1.1rem', maxWidth: '700px' }}>
        Check out my 
        <a 
          href="https://github.com/rgarcia2304" 
          target="_blank" 
          rel="noreferrer" 
          style={{ marginLeft: '0.3rem' }}
        >
           GitHub 
        </a> 
      </p>
    </section>
  );
};

export default Contact;
