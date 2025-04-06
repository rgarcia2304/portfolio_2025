// src/components/Experience.js
import React, { useEffect, useRef } from 'react';
import './Experience.css'; // create this file next

const Experience = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target); // one-time animation
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });
  }, []);

  const experiences = [
    {
      title: 'Amazon SURE Intern',
      date: 'May 2024 - July 2024',
      description:
        'Was 1 of 7 students chosen to go work on engineering project in Metz, France. Supported engineers by developing a sensor monitor that detected critical failures in robot from idea to implementation.  ',
    },
    {
      title: 'Tutor',
      date: 'March 2024- Present',
      description:
        'Tutor undergraduates students in coursework covering Calculus I, Calculus II, Linear Algebra, Linux, Data Structures and Algorithms, Linear Programming, Threading, Memory Management, Operating Systems, File Systems and Networks, Time Complexity, Set Theory, Relations, Logic, Digital Design, Finite Automata, Recursion, Graphs, Trees',
    },
    {
      title: 'Networking Director | Society of Hispanic Professional Engineers',
      date: 'May 2024- Present',
      description:
        'First ever Networking Director. Managed and created interactions spanning over 700 accounts across social media accounts and alumni database. Grew mentoring program by over 100% including expanison to alumni and graduate students. Worked with External Vice president to create new funding pipelines with alumni resulting in thousands raised and taking 10% more individuals to conferences.',
    },

  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className="timeline-item hidden"
          >
            <h3>{exp.title}</h3>
            <p className="date">{exp.date}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

