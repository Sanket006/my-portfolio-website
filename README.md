# Sanket Chopade — Cloud & DevOps Engineer Portfolio

A premium, production-ready portfolio website built with **React 19** and **Vite 8**. Features a neon glassmorphism dark-theme aesthetic, an interactive terminal widget, scroll-reveal animations, and links to real open-source DevOps projects.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222222?logo=github)](https://sanket006.github.io/my-portfolio-website/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✨ Features

| Feature | Details |
|---|---|
| **Neon Glassmorphism UI** | Cyber-dark aesthetic with cyan/purple gradient accents |
| **Interactive Terminal** | Fully functional in-browser terminal with DevOps commands (`help`, `neofetch`, `kubectl`, `docker`, `terraform`, `whoami`, `skills`, `contact`, etc.) |
| **Scroll Reveal** | IntersectionObserver-based section fade-in animations |
| **Projects Section** | 12 real DevOps & Software engineering projects with tech tags and GitHub links |
| **Experience Timeline** | Vertical timeline showing career history & certifications |
| **Contact Form** | Controlled form with Formspree integration and email fallbacks |
| **Resume Download** | One-click PDF download from the hero and navigation sections |
| **GitHub Stats** | Live badge via `github-readme-stats` API in the About section |
| **Responsive Layout** | Mobile-first CSS with Flexbox and Grid |
| **SEO Ready** | Full meta tags, Open Graph, and Twitter Card support |

---

## Current Profile Highlights

### Rotating Hero Roles

- Cloud & DevOps Engineer
- Kubernetes & EKS Engineer
- CI/CD & GitOps Engineer
- Infrastructure as Code Builder
- DevSecOps Practitioner

### Currently Studying

- AWS Secrets Manager
- Helm Chart Authoring
- Kubernetes Network Policies
- Prometheus Alerting Rules
- Bash Scripting
- Python Scripting


---

## 🛠 Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI Framework | React | 19.x |
| Build Tool | Vite | 8.x |
| Styling | Vanilla CSS (Glassmorphism, CSS Variables) | — |
| Typography | Inter + Outfit (Google Fonts) | — |
| Linting | ESLint (Flat Config) | 10.x |
| Deployment | GitHub Pages | — |

> **Node.js** ≥ 20 is recommended.

---

## 📁 Project Structure

```
devops-portfolio/
├── public/
│   ├── favicon.svg         # Custom SVG favicon
│   └── Sanket_Chopade_Devops_Engineer_Resume.pdf # Downloadable resume file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css      # Intro + Terminal widget
│   │   ├── About.jsx / .css     # Bio + GitHub Stats + Skills grid
│   │   ├── Experience.jsx / .css
│   │   ├── Projects.jsx / .css  # 12 real DevOps projects
│   │   ├── Contact.jsx / .css   # Controlled form with mailto fallback
│   │   ├── Footer.jsx / .css
│   │   └── Terminal.jsx / .css  # Interactive terminal widget
│   ├── App.jsx              # Root component + scroll-reveal logic
│   ├── main.jsx             # React DOM entry point
│   └── index.css            # Global design tokens & utilities
├── index.html               # Entry HTML with full SEO meta tags
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🚀 Local Development

### Prerequisites
- **Node.js** ≥ 20 ([download](https://nodejs.org/))
- **npm** ≥ 10 (bundled with Node 20)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/Sanket006/devops-portfolio.git
cd devops-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server (http://localhost:5173)
npm run dev
```

### Other Scripts

```bash
npm run build      # Production build → dist/
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
```

---

## ☁️ Deployment

This site is deployed on **GitHub Pages** using GitHub Actions.

### Continuous Deployment (CI/CD)

Every push to the `main` branch triggers the GitHub Actions workflow [.github/workflows/static.yml](file:///.github/workflows/static.yml) which:
1. Installs Node.js dependencies (`npm ci`).
2. Builds the production bundle (`npm run build`).
3. Uploads the `./dist` folder as an artifact.
4. Deploys it automatically to GitHub Pages.

### Manual Verification / Local Build

Before pushing, you can test the production build locally:

```bash
# Build the production package
npm run build

# Preview the build locally
npm run preview
```

### Docker (Optional)

```bash
# Build production image
docker build -t devops-portfolio .

# Run on port 8080
docker run -p 8080:80 devops-portfolio
```

> A multi-stage `Dockerfile` using `nginx:alpine` is included for containerized deployments.

---

## 🎨 Customization

| What to change | Where |
|---|---|
| Name, role, description | `src/components/Hero.jsx` |
| Bio text & skills list | `src/components/About.jsx` |
| Work experience & certs | `src/components/Experience.jsx` |
| Project cards & links | `src/components/Projects.jsx` |
| Contact email | `src/components/Contact.jsx` — update the `mailto:` address |
| GitHub / LinkedIn links | `src/components/Footer.jsx` |
| Color palette & fonts | `src/index.css` (CSS variables in `:root`) |
| Resume PDF | Replace `public/Sanket_Chopade_Devops_Engineer_Resume.pdf`; hero and navbar buttons download it as `Sanket_Chopade_Devops_Engineer_Resume.pdf` |

---

## 🗂 Open Source Projects Featured

| Project | Stack | Role / Category | Link |
|---|---|---|---|
| `Three-Tier DevSecOps on AWS EKS` 🌟 | Jenkins, Terraform, ArgoCD, Docker, Kubernetes, AWS EKS | DevSecOps & Cloud (Featured) | [GitHub](https://github.com/Sanket006) |
| `Go GitOps Delivery Pipeline` 🌟 | GitHub Actions, ArgoCD, Docker, Kubernetes, AWS EKS, Helm, Go | GitOps & CI/CD (Featured) | [GitHub](https://github.com/Sanket006) |
| `flight-reservation-app` 🌟 | Spring Boot, React, Kubernetes, Docker, MySQL | Full-Stack & K8s (Featured) | [GitHub](https://github.com/Sanket006/flight-reservation-app) |
| `2048-eks-deployment` | AWS EKS, Fargate, ALB, Helm | Kubernetes & AWS Fargate | [GitHub](https://github.com/Sanket006/2048-eks-deployment) |
| `jenkins-cicd-pipelines` | Jenkins, Groovy, Docker, AWS EKS, S3, Terraform | CI/CD Patterns Library | [GitHub](https://github.com/Sanket006/jenkins-cicd-pipelines) |
| `student-app-docker-compose` | Docker, Docker Compose, Apache, Tomcat, MariaDB | Containerisation | [GitHub](https://github.com/Sanket006/student-app-docker-compose) |
| `crud-app-aws-ec2-rds` | Spring Boot, React, AWS EC2, RDS, VPC | Cloud Deployment | [GitHub](https://github.com/Sanket006/crud-app-aws-ec2-rds) |
| `terraform-aws-iac` | Terraform, AWS, HCL | Infrastructure as Code | [GitHub](https://github.com/Sanket006/terraform-aws-iac) |
| `nodejs-app-jenkins-pipeline` | Jenkins, Node.js, Docker, Groovy | CI/CD & Jenkins | [GitHub](https://github.com/Sanket006/nodejs-app-jenkins-pipeline) |
| `Linux-Automation-Shell-Scripting` | Bash, Linux, Cron, Systemd | Scripting & Linux | [GitHub](https://github.com/Sanket006/Linux-Automation-Shell-Scripting) |
| `DevOps-Interview-Questions` | AWS, Docker, Kubernetes, Terraform, Jenkins | Knowledge Base | [GitHub](https://github.com/Sanket006/DevOps-Interview-Questions) |
| `student-app-kubernetes` | Kubernetes, React, Spring Boot, MariaDB | Microservices Deployment | [GitHub](https://github.com/Sanket006/student-app-kubernetes) |

---

## 📬 Contact

- **Email:** [chopade.sanket@outlook.com](mailto:chopade.sanket@outlook.com)
- **GitHub:** [github.com/Sanket006](https://github.com/Sanket006)
- **LinkedIn:** [linkedin.com/in/sanketchopade07](https://linkedin.com/in/sanketchopade07)

---

## 📝 License

This project is open source under the [MIT License](LICENSE). Feel free to fork and adapt it for your own portfolio.

---

*Designed & Built by Sanket Chopade © 2026*
