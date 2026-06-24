import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Three-Tier DevSecOps on AWS EKS',
    role: 'DevSecOps & Cloud',
    tech: ['Jenkins', 'Terraform', 'ArgoCD', 'Docker', 'Kubernetes', 'AWS EKS', 'SonarQube', 'Trivy'],
    description:
      'Production-grade MERN e-commerce app on Amazon EKS with integrated DevSecOps: SonarQube static analysis, OWASP dependency scanning, and Trivy container scanning — all enforced before deployment. GitOps delivery via ArgoCD.',
    links: {
      github: 'https://github.com/Sanket006',
      live: 'https://github.com/Sanket006',
    },
    featured: true,
  },
  {
    title: 'Go GitOps Delivery Pipeline',
    role: 'GitOps & CI/CD',
    tech: ['GitHub Actions', 'ArgoCD', 'Docker', 'Kubernetes', 'AWS EKS', 'Helm', 'Go'],
    description:
      'End-to-end GitOps CI/CD pipeline for a Go web app using GitHub Actions for CI and ArgoCD for continuous delivery to EKS. Multi-stage Dockerfiles with Distroless images; Helm charts for versioned Kubernetes delivery.',
    links: {
      github: 'https://github.com/Sanket006',
      live: 'https://github.com/Sanket006',
    },
    featured: true,
  },
  {
    title: '2048-eks-deployment',
    role: 'Kubernetes & AWS Fargate',
    tech: ['AWS EKS', 'Fargate', 'ALB', 'IAM OIDC', 'Helm', 'eksctl', 'kubectl'],
    description:
      'Deploy the classic 2048 game on Amazon EKS using AWS Fargate, ALB Ingress Controller, and IAM OIDC — serverless compute with no EC2 management, automated external routing, and high availability with multiple replicas.',
    links: {
      github: 'https://github.com/Sanket006/2048-eks-deployment',
      live: 'https://github.com/Sanket006/2048-eks-deployment#readme',
    },
    featured: false,
  },
  {
    title: 'jenkins-cicd-pipelines',
    role: 'CI/CD Patterns Library',
    tech: ['Jenkins', 'Groovy', 'Docker', 'AWS EKS', 'S3', 'Terraform', 'SonarQube'],
    description:
      '9 plug-and-play Jenkinsfile pipelines — from a basic hello-world skeleton to provisioning a full AWS EKS cluster via Terraform inside a Jenkins job. Covers SSH agents, S3 artifact uploads, code quality gates, and Tomcat deployments.',
    links: {
      github: 'https://github.com/Sanket006/jenkins-cicd-pipelines',
      live: 'https://github.com/Sanket006/jenkins-cicd-pipelines#readme',
    },
    featured: false,
  },
  {
    title: 'student-app-docker-compose',
    role: 'Containerisation',
    tech: ['Docker', 'Docker Compose', 'Apache', 'Tomcat', 'MariaDB', 'Java'],
    description:
      'Three-tier student registration app fully containerised with Docker Compose — Apache frontend, Tomcat Java backend, and MariaDB with custom bridge networking, persistent volumes, and automated schema injection on startup.',
    links: {
      github: 'https://github.com/Sanket006/student-app-docker-compose',
      live: 'https://github.com/Sanket006/student-app-docker-compose#readme',
    },
    featured: false,
  },
  {
    title: 'crud-app-aws-ec2-rds',
    role: 'Cloud Deployment',
    tech: ['Spring Boot', 'React', 'AWS EC2', 'AWS RDS', 'MariaDB', 'VPC', 'Security Groups'],
    description:
      'Full-stack Spring Boot + React CRUD app deployed end-to-end on AWS — backend connects to RDS MariaDB over a private VPC, with security groups locking port 3306 to EC2 only and proper port separation (80 web / 8080 API).',
    links: {
      github: 'https://github.com/Sanket006/crud-app-aws-ec2-rds',
      live: 'https://github.com/Sanket006/crud-app-aws-ec2-rds#readme',
    },
    featured: false,
  },
  {
    title: 'flight-reservation-app',
    role: 'Full-Stack & K8s',
    tech: ['Spring Boot', 'React', 'Kubernetes', 'Docker', 'MySQL'],
    description:
      'Full-stack Flight Reservation System with REST API + React frontend, deployed with Docker multi-stage builds (60% smaller images) and Kubernetes with HPA for auto-scaling.',
    links: {
      github: 'https://github.com/Sanket006/flight-reservation-app',
      live: 'https://github.com/Sanket006/flight-reservation-app#readme',
    },
    featured: true,
  },
  {
    title: 'terraform-aws-iac',
    role: 'Infrastructure as Code',
    tech: ['Terraform', 'AWS', 'HCL'],
    description:
      'Terraform IaC examples on AWS covering modules, loops, multi-environment setup, remote state backend with S3+DynamoDB state locking, provisioners, and VPC provisioning.',
    links: {
      github: 'https://github.com/Sanket006/terraform-aws-iac',
      live: 'https://github.com/Sanket006/terraform-aws-iac#readme',
    },
    featured: false,
  },
  {
    title: 'nodejs-app-jenkins-pipeline',
    role: 'CI/CD & Jenkins',
    tech: ['Jenkins', 'Node.js', 'Docker', 'Groovy'],
    description:
      'Node.js CRUD app with a Jenkins CI pipeline — automated build, lint, test, and Docker image push triggered on every GitHub push via webhook.',
    links: {
      github: 'https://github.com/Sanket006/nodejs-app-jenkins-pipeline',
      live: 'https://github.com/Sanket006/nodejs-app-jenkins-pipeline#readme',
    },
    featured: false,
  },
  {
    title: 'Linux-Automation-Shell-Scripting',
    role: 'Scripting & Linux',
    tech: ['Bash', 'Linux', 'Cron', 'Systemd'],
    description:
      '6 production-ready shell scripts: health check, disk alert, log cleanup, backup, service monitor, and cron scheduling. Built for real-world DevOps operational automation.',
    links: {
      github: 'https://github.com/Sanket006/Linux-Automation-Shell-Scripting',
      live: 'https://github.com/Sanket006/Linux-Automation-Shell-Scripting#readme',
    },
    featured: false,
  },
  {
    title: 'DevOps-Interview-Questions',
    role: 'Knowledge Base',
    tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    description:
      'Complete DevOps interview preparation library — HR rounds, core Q&A, production scenario troubleshooting, and real-world incident simulations across 12+ tools.',
    links: {
      github: 'https://github.com/Sanket006/DevOps-Interview-Questions',
      live: 'https://github.com/Sanket006/DevOps-Interview-Questions#readme',
    },
    featured: false,
  },
  {
    title: 'student-app-kubernetes',
    role: 'Microservices Deployment',
    tech: ['Kubernetes', 'React', 'Spring Boot', 'MariaDB'],
    description:
      'Three-tier student registration app deployed on Kubernetes with Deployments, Services, Secrets, PVC, and HPA manifests.',
    links: {
      github: 'https://github.com/Sanket006/student-app-kubernetes',
      live: 'https://github.com/Sanket006/student-app-kubernetes#readme',
    },
    featured: false,
  },
];

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'featured'
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          Open Source <span className="text-gradient">Projects</span>
        </h2>

        <div className="project-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            ⭐ Featured
          </button>
        </div>

        <div className="projects-grid">
          {filtered.map((project, index) => (
            <div key={index} className={`project-card glass-panel ${project.featured ? 'featured' : ''}`}>
              <div className="project-header">
                <div className="project-header-left">
                  <div className="folder-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  {project.featured && (
                    <span className="featured-badge">⭐ Featured</span>
                  )}
                </div>
                <div className="project-links">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" title="View on GitHub">
                    <GitHubIcon />
                  </a>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" title="View README">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
              <ul className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
