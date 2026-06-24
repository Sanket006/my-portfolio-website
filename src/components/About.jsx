import React, { useRef, useEffect, useState } from 'react';
import './About.css';

const skills = [
  { name: 'AWS',            icon: 'devicon-amazonwebservices-plain-wordmark colored', level: 85 },
  { name: 'Kubernetes',     icon: 'devicon-kubernetes-plain colored',                 level: 90 },
  { name: 'Docker',         icon: 'devicon-docker-plain colored',                     level: 90 },
  { name: 'Terraform',      icon: 'devicon-terraform-plain colored',                  level: 82 },
  { name: 'Jenkins',        icon: 'devicon-jenkins-plain colored',                    level: 80 },
  { name: 'GitHub Actions', icon: 'devicon-github-original colored',                  level: 78 },
  { name: 'ArgoCD',         icon: 'devicon-argocd-plain colored',                     level: 75 },
  { name: 'Prometheus',     icon: 'devicon-prometheus-original colored',              level: 78 },
  { name: 'Python',         icon: 'devicon-python-plain colored',                     level: 70 },
  { name: 'Linux',          icon: 'devicon-linux-plain colored',                      level: 88 },
  { name: 'Bash',           icon: 'devicon-bash-plain colored',                       level: 85 },
  { name: 'Helm',           icon: 'devicon-helm-plain colored',                       level: 72 },
];

const learning = ['AWS Solutions Architect (SAA-C03)', 'Platform Engineering'];

const SkillBar = ({ skill, animate }) => (
  <div className="skill-row">
    <div className="skill-row-left">
      <i className={skill.icon} title={skill.name} />
      <span className="skill-name">{skill.name}</span>
    </div>
    <div className="skill-bar-track">
      <div
        className="skill-bar-fill"
        style={{ width: animate ? `${skill.level}%` : '0%' }}
      />
    </div>
    <span className="skill-pct">{skill.level}%</span>
  </div>
);

const About = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="about-content">
          <div className="about-text glass-panel">
            <p>
              DevOps Engineer with 9 months of hands-on production experience at{' '}
              <span className="highlight">Hisan Labs</span>, designing and maintaining
              CI/CD pipelines, provisioning cloud infrastructure on AWS using Terraform,
              and orchestrating containerised workloads on Kubernetes.
            </p>
            <p>
              Delivered automated deployment workflows that reduced manual intervention
              and improved release reliability for a microservices-based e-commerce
              platform. Planning to pursue the{' '}
              <span className="highlight">CKA certification</span>, I bring hands-on
              expertise in Kubernetes cluster administration, GitOps, DevSecOps,
              and Linux administration — with a strong focus on security, scalability, and
              operational best practices.
            </p>

            <div className="currently-learning">
              <span className="learning-label">🔥 Currently Studying:</span>
              <div className="learning-tags">
                {learning.map((item, i) => (
                  <span key={i} className="learning-tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="github-stats">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Sanket006&show_icons=true&theme=radical&hide_border=true&bg_color=0a0b10&count_private=true"
                alt="Sanket's GitHub Stats"
              />
              <img
                src="https://github-readme-streak-stats.herokuapp.com?user=Sanket006&theme=radical&hide_border=true&background=0a0b10"
                alt="GitHub Streak"
              />
            </div>
          </div>

          <div className="about-skills">
            <h3>Technical Arsenal</h3>
            <div className="skills-list">
              {skills.map((skill, i) => (
                <SkillBar key={i} skill={skill} animate={animate} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
