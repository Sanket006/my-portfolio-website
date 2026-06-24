# Sanket Chopade — Cloud & DevOps Engineer Portfolio

A premium, production-ready portfolio website built with **React 19** and **Vite 8**. Features a neon glassmorphism dark-theme aesthetic, an interactive terminal widget, scroll-reveal animations, and links to real open-source DevOps projects.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✨ Features

| Feature | Details |
|---|---|
| **Neon Glassmorphism UI** | Cyber-dark aesthetic with cyan/purple gradient accents |
| **Interactive Terminal** | Fully functional in-browser terminal with custom commands (`whoami`, `skills`, `contact`, `clear`) |
| **Scroll Reveal** | IntersectionObserver-based section fade-in animations |
| **Projects Section** | 6 real GitHub projects with tech tags and live links |
| **Experience Timeline** | Vertical timeline showing career history & certifications |
| **Contact Form** | Controlled form with `mailto:` fallback — zero backend required |
| **Resume Download** | One-click PDF download from the hero section |
| **GitHub Stats** | Live badge via `github-readme-stats` API in the About section |
| **Responsive Layout** | Mobile-first CSS with Flexbox and Grid |
| **SEO Ready** | Full meta tags, Open Graph, and Twitter Card support |

---

## 🛠 Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI Framework | React | 19.x |
| Build Tool | Vite | 8.x |
| Styling | Vanilla CSS (Glassmorphism, CSS Variables) | — |
| Typography | Inter + Outfit (Google Fonts) | — |
| Linting | ESLint (Flat Config) | 10.x |
| Deployment | Vercel | — |

> **Node.js** ≥ 20 is recommended.

---

## 📁 Project Structure

```
devops-portfolio/
├── public/
│   ├── favicon.svg         # Custom SVG favicon
│   └── resume.pdf          # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css      # Intro + Terminal widget
│   │   ├── About.jsx / .css     # Bio + GitHub Stats + Skills grid
│   │   ├── Experience.jsx / .css
│   │   ├── Projects.jsx / .css  # 6 real GitHub projects
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

This site is deployed on **Vercel** via Git integration. Every push to `main` triggers an automatic deployment.

### Manual Deploy (Vercel CLI)

```bash
npm install -g vercel

# Deploy to preview
npm run deploy

# Deploy to production
npm run deploy:prod
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
| Resume PDF | Replace `public/resume.pdf` |

---

## 🗂 Open Source Projects Featured

| Project | Stack | Link |
|---|---|---|
| `flight-reservation-app` | Spring Boot, React, Kubernetes, Docker | [GitHub](https://github.com/Sanket006/flight-reservation-app) |
| `DevOps-Interview-Questions` | AWS, Docker, K8s, Terraform, Jenkins | [GitHub](https://github.com/Sanket006/DevOps-Interview-Questions) |
| `terraform-aws-iac` | Terraform, AWS, HCL | [GitHub](https://github.com/Sanket006/terraform-aws-iac) |
| `nodejs-app-jenkins-pipeline` | Jenkins, Node.js, Docker, Groovy | [GitHub](https://github.com/Sanket006/nodejs-app-jenkins-pipeline) |
| `Linux-Automation-Shell-Scripting` | Bash, Linux, Cron, Systemd | [GitHub](https://github.com/Sanket006/Linux-Automation-Shell-Scripting) |
| `student-app-kubernetes` | Kubernetes, React, Spring Boot, MariaDB | [GitHub](https://github.com/Sanket006/student-app-kubernetes) |

---

## 📬 Contact

- **Email:** sanketchopade6@gmail.com
- **GitHub:** [github.com/Sanket006](https://github.com/Sanket006)
- **LinkedIn:** [linkedin.com/in/sanket-chopade](https://linkedin.com/in/sanket-chopade)

---

## 📝 License

This project is open source under the [MIT License](LICENSE). Feel free to fork and adapt it for your own portfolio.

---

*Designed & Built by Sanket Chopade © 2025*
