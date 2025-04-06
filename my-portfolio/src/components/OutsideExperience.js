// src/components/Experience.js
import React, { useEffect, useRef } from 'react';
import './Experience.css'; // create this file next

const OutsideExp = () => {
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
      title: 'Landscaper | Germans Lawn Service',
      date: 'November 2019 - April 2023',
      description:
        'Aided in organization and scheduling of 5 to 15 projects weekly, during a period in which the company grew from residential to include commercial projects.  ',
    },
    {
      title: 'Soccer Coach | Hanover Soccer Club',
      date: 'March 2021- Present',
      description:
        'Mentor individuals in age range of 12 to 15 years old through facilitated training session. Led communication between players, parents, and coaches on a daily basis.',},
        {
            title: 'Lenfest Scholar',
            date: 'May 2021- Present',
            description:
              'Selected as one of a limited number of high-achieving from rural Pennsylvania for the competitive Lenfest Scholarship.  Recognized for academic excellence, leadership potential, and commitment to community impact.',},
  ];

  return (
    <section id="outsideExperience">
      <h2>Other</h2>
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

export default OutsideExp;