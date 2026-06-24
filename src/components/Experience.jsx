import React from 'react';
import './Experience.css';

const experiences = [
  {
    type: 'job',
    title: 'DevOps Engineer Intern',
    company: 'Hisan Labs Pvt Ltd',
    date: 'Sep 2024 – Mar 2025 · 9 months',
    location: 'Pune, Maharashtra, India',
    description: [
      'Supported deployment and operations of a microservices-based e-commerce application on AWS as part of a 4-member DevOps team, contributing to the full deployment lifecycle from infrastructure provisioning to production monitoring.',
      'Designed and maintained 3 Jenkins pipelines covering Terraform infrastructure provisioning, frontend and backend application deployments — eliminating manual steps and standardising release workflows.',
      'Integrated SonarQube into CI/CD pipelines via GitHub webhooks for automated code quality gates that blocked non-compliant builds before reaching staging/production.',
      'Developed reusable Terraform modules to provision VPCs, Security Groups, S3, RDS, and Amazon EKS clusters with S3-backed remote state and state locking for safe concurrent deployments.',
      'Built and optimised multi-stage Docker images; deployed containerised apps on Amazon EKS using Deployments, Services, Ingress, ConfigMaps, Secrets, and HPAs.',
      'Monitored application and infrastructure health using Prometheus, Grafana, Datadog, and AWS CloudWatch dashboards, supporting proactive incident detection and resolution.',
    ],
    icon: '💼',
  },
  {
    type: 'job',
    title: 'Cloud & DevOps Engineer Trainee',
    company: 'Cloudblitz | Powered by Greamio',
    date: 'Jun 2024 – Sep 2024 · 4 months',
    location: 'Nagpur',
    description: [
      'Built CI/CD pipelines using Jenkins and GitHub to automate application build and deployment workflows.',
      'Deployed and managed containerised applications using Docker and Kubernetes.',
      'Worked with AWS cloud services and monitoring tools including CloudWatch and Datadog.',
      'Automated Linux operational tasks using Bash scripting and cron jobs.',
    ],
    icon: '🖥️',
  },
];

const certifications = [
  {
    title: 'Certified Kubernetes Administrator',
    short: 'CKA',
    issuer: 'The Linux Foundation',
    year: 'In Progress',
    color: '#326CE5',
    icon: 'devicon-kubernetes-plain',
    badge: '⏳',
    inProgress: true,
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    short: 'SAA-C03',
    issuer: 'Amazon Web Services',
    year: 'In Progress',
    color: '#FF9900',
    icon: 'devicon-amazonwebservices-plain-wordmark',
    badge: '⏳',
    inProgress: true,
  },
];

const education = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Aeronautical Engineering',
  institution: 'Rashtrasant Tukadoji Maharaj Nagpur University',
  location: 'Nagpur, Maharashtra, India',
  dates: 'Nov 2021 – May 2025',
  cgpa: '7.9 / 10',
};

const Experience = () => (
  <section id="experience" className="experience-section">
    <div className="container">
      <h2 className="section-title">
        Experience & <span className="text-gradient">Certifications</span>
      </h2>

      {/* Timeline */}
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot">{exp.icon}</div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <h3 className="timeline-title">{exp.title}</h3>
                <span className="timeline-date">{exp.date}</span>
              </div>
              <h4 className="timeline-company">
                {exp.company}
                <span className="timeline-location"> · {exp.location}</span>
              </h4>
              <ul className="timeline-bullets">
                {exp.description.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="section-sub-title">Certifications</div>
      <div className="certs-grid">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className={`cert-card glass-panel ${cert.inProgress ? 'in-progress' : ''}`}
            style={{ '--cert-color': cert.color }}
          >
            <div className="cert-icon-wrapper">
              <i className={cert.icon} />
            </div>
            <div className="cert-body">
              <div className="cert-badge-pill">{cert.badge} {cert.short}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              {cert.credentialId && (
                <p className="cert-credential">ID: {cert.credentialId}</p>
              )}
              <span className={`cert-year ${cert.inProgress ? 'pill-orange' : 'pill-green'}`}>
                {cert.inProgress ? '⏳ ' : '✓ '}{cert.year}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="section-sub-title" style={{ marginTop: '4rem' }}>Education</div>
      <div className="education-card glass-panel">
        <div className="edu-icon">🎓</div>
        <div className="edu-body">
          <div className="edu-header">
            <h3 className="edu-degree">{education.degree} — {education.field}</h3>
            <span className="timeline-date">{education.dates}</span>
          </div>
          <p className="edu-institution">{education.institution} · {education.location}</p>
          <span className="edu-cgpa pill-green">CGPA: {education.cgpa}</span>
        </div>
      </div>

    </div>
  </section>
);

export default Experience;
