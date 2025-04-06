// src/components/Skills.js
import React from 'react';

const Skills = () => {
  const skillList = [
    { title: 'Languages', details: 'C, Java, Python, C#, Solidity, JavaScript' },
    { title: 'Frameworks', details: 'Spring, ASP.NET, React, Next.js' },
    { title: 'AI/ML', details: 'LLMs, LoRA, RAG, Hugging Face, PyTorch' },
    { title: 'Systems', details: 'Memory allocators, Verilog, TCP protocols' },
    { title: 'Web Dev', details: 'REST, GraphQL, Firebase, MetaMask' },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid" style={{
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem',
        marginTop: '2rem'
      }}>
        {skillList.map((skill, i) => (
          <div 
            key={i} 
            className="skill-card magictime perspectiveRightReturn" 
            style={{ 
              background: '#f8f8f8', 
              borderRadius: '4px',
              padding: '1.5rem', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)', 
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}
          >
            <h3 style={{ marginBottom: '0.5rem' }}>{skill.title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>{skill.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
