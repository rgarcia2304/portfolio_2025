import React, { useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: 'AI-Powered Sleep Recommendation System',
      date: 'March 2025- Present',
      technologies: ['LLaMA 3.2', 'LoRA', 'Hugging Face', 'transformers', 'peft', 'PyTorch', 'RAG', 'FAISS', 'FastAPI', 'React'],
      description:
        'Led the development of an AI-powered sleep recommendation system as the team’s lead software engineer, combining behavioral sleep science with modern NLP. Conducted research to extract evidence-based sleep guidelines and built a custom dataset to fine-tune Meta’s LLaMA 3.2 model using LoRA with Hugging Face’s transformers, peft, and PyTorch libraries. Integrated Retrieval-Augmented Generation (RAG) with FAISS to incorporate user history and enhance personalization. Developed a full-stack application with a FastAPI backend and React frontend.'
    },
    {
      title: 'Group-Payment App',
      date: 'April 2025- Present',
      technologies: ['Solidity', 'MetaMask', 'Next.js', 'React', 'Web3'],
      description:
        'Designed and developed a full-stack blockchain-based group payment app to solve the social pressure of deciding who pays the tab. Built with Solidity smart contracts to enable group formation, voting on a designated payer, and conditional fund disbursement. Integrated MetaMask for wallet authentication and transaction signing. Deployed using Next.js, React, and a Web3-enabled backend.'
    },
    {
      title: 'Eterna | Reddit Filtering App',
      date: 'February 2025- March 2025',
      technologies: ['Reddit Scraper API', 'RapidAPI', 'OpenAI GPT', 'Firebase', 'React', 'Next.js', 'styled-components'],
      description:
        'Built a full-stack product recommendation app that filters Reddit discussions based on community feedback. Used Reddit Scraper API (RapidAPI) and OpenAI GPT API with prompt-based filtering. Deployed with Firebase, and built using React, Next.js, and styled-components.'
    },
    {
      title: 'Autonomous Vacuum Cleaner',
      date: 'February 2025- March 2025',
      technologies: ['ACT-R', 'Python', 'HDM'],
      description:
        'Developed an autonomous vacuum simulation using ACT-R cognitive architecture in Python. Implemented motor and visual module rules, and used HDM for memory-based map cleaning simulation.'
    },
    {
      title: 'Dynamic Memory Allocator',
      date: 'February 2025- March 2025',
      technologies: ['C', 'malloc', 'realloc', 'free', 'explicit free list', 'boundary tagging', 'coalescing', 'first-fit'],
      description:
        'Designed and implemented a custom dynamic memory allocator in C, replicating malloc, realloc, and free. Used an explicit free list, boundary tagging, alignment, and coalescing logic. Applied first-fit strategy for placement.'
    },
    {
      title: 'Flight Application',
      date: 'August 2024- November 2024',
      technologies: ['Java', 'Spring', 'C#', 'ASP.NET', 'MongoDB', 'GraphQL', 'MySQL', 'React'],
      description:
        'Designed a fully custom, microservice-based flight app with no external APIs. Built with Java (Spring Framework) for flight creation, C# (ASP.NET) with MongoDB for booking, and GraphQL + Spring + MySQL for payments. Frontend built with React. Demonstrated complete ownership of microservice architecture.'
    },
    {
      title: '5 Stage Pipeline Processor',
      date: 'October 2024- December 2024',
      technologies: ['Verilog'],
      description:
        'Designed a 5-stage pipelined CPU using Verilog with fetch, decode, execute, memory access, and write-back stages. Implemented hazard detection and resolution.'
    },
    {
      title: 'Linear Device',
      date: 'February 2024- May 2024',
      technologies: ['C', 'Linux', 'TCP', 'MDADM', 'LRU cache'],
      description:
        'Built a networked MDADM system in C on Linux for remote JBOD management over TCP. Included mount/read/write/unmount, byte-level packet assembly, and an LRU caching layer. Used multi-call read/write functions for reliable transmission.'
    },
    {
      title: 'Course Scheduler',
      date: 'October 2023- December 2023',
      technologies: ['Java', 'SQL', 'OOP'],
      description:
        'Developed a course scheduling system in Java with a layered architecture. Integrated SQL with OOP, and used structured database queries to enable efficient scheduling and updates.'
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-scroll-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>
          ⬅️
        </button>
        <div className="projects-container" ref={scrollRef}>
          {projects.map((project, i) => (
            <div
              key={i}
              className={`project-card ${activeIndex === i ? 'expanded' : ''}`}
            >
              <h3>{project.title}</h3>
              <p className="date">{project.date}</p>
              {activeIndex === i && (
                <>
                  <p className="tech"><strong>Key Technologies:</strong> {project.technologies.join(', ')}</p>
                  <p className="description">{project.description}</p>
                </>
              )}
              <button className="more-btn" onClick={() => toggleCard(i)}>
                {activeIndex === i ? 'Hide' : 'Learn More'}
              </button>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>
          ➡️
        </button>
      </div>
    </section>
  );
};

export default Projects;
