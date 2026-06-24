import React, { useState, useEffect } from 'react';
import './Hero.css';
import Terminal from './Terminal';

const roles = [
  'Cloud & DevOps Engineer',
  'Kubernetes Specialist',
  'Infrastructure Architect',
  'CI/CD Automation Expert',
  'AWS Solutions Builder',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      // Typing forward
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end, then start deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => setCharIndex(c => c - 1), 45);
    } else if (isDeleting && charIndex === 0) {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex(r => (r + 1) % roles.length);
    }

    setDisplayed(currentRole.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="hero-grid" />
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          {/* Open to work badge */}
          <div className="open-to-work-badge">
            <span className="status-dot" />
            Open to Opportunities
          </div>

          <p className="hero-subtitle">Hello, I'm</p>
          <h1 className="hero-title">
            <span className="text-gradient">Sanket Chopade</span>
          </h1>
          <h2 className="hero-role">
            <span className="typewriter">{displayed}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Architecting scalable cloud infrastructure, building robust CI/CD pipelines,
            and automating deployments. I transform complex problems into elegant,
            efficient, and reliable systems.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/resume.pdf" download className="btn btn-outline">Download Resume</a>
          </div>
          <Terminal />
        </div>
      </div>
    </section>
  );
};

export default Hero;
