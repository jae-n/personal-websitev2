import React from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
import './App.css';

const projects = [
  {
    id: 1,
    title: 'Project Title 1',
    role: 'Your Role',
    type: 'View on GitHub',
    image: 'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2Vic2l0ZSUyMHRlbXBsYXRlfGVufDF8fHx8MTc4MzEwMTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    link: 'https://github.com/jae-n',
  },
  {
    id: 2,
    title: 'Project Title 2',
    role: 'Your Role',
    type: 'View on GitHub',
    image: 'https://images.unsplash.com/photo-1770457732717-c0f2deea07e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwd2Vic2l0ZSUyMHRlbXBsYXRlfGVufDF8fHx8MTc4MzEwMTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    link: 'https://github.com/jae-n',
  },
  {
    id: 3,
    title: 'Project Title 3',
    role: 'Your Role',
    type: 'View on GitHub',
    image: 'https://images.unsplash.com/photo-1762503203754-62c5a0c969d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwd2Vic2l0ZSUyMHRlbXBsYXRlfGVufDF8fHx8MTc4MzEwMTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    link: 'https://github.com/jae-n',
  },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="theme-toggle-btn"
      aria-label="Toggle theme"
    >
      <span className="icon-sun">☼</span>
      <span className="icon-moon">☾</span>
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="app-wrapper">
        <nav className="nav-header">
          <div className="nav-left">
            <a href="#" className="nav-brand">James Nguyen</a>
            <div className="nav-links">
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#bio" className="nav-link">Bio</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
          <ThemeToggle />
        </nav>

        <main className="main-content">
          <section className="hero-section">
            <h1 className="hero-title">
              Hi, I'm James Nguyen.
            </h1>
            <div className="hero-content">
              <p className="hero-subtitle">
                I recently graduated with a degree in Computer Science from The University of Texas at Dallas. I'm passionate about building clean, functional software and always looking to learn new tools and technologies.
              </p>
              <p className="hero-subtitle mt-gap">
                I'm currently looking for full-time software engineering opportunities. Feel free to <a href="#contact" className="text-link">reach out</a> — I'd love to hear about your team and what you're building.
              </p>
            </div>
          </section>

          <section id="bio" className="bio-section border-top">
            <div className="bio-grid">
              <div className="bio-block">
                <h2 className="bio-title">Education</h2>
                <p className="bio-text">
                  <strong>The University of Texas at Dallas</strong> — B.S. in Computer Science. During my time there I focused on building practical software projects and strengthening my foundation in data structures, algorithms, and systems design.
                </p>
                <p className="bio-text mt-gap">
                  <strong>Tarrant County College</strong> — A.A. Completed my general education and foundational coursework here before transferring to UT Dallas.
                </p>
              </div>
              <div className="bio-block">
                <h2 className="bio-title">What I'm Looking For</h2>
                <p className="bio-text">
                  I'm a new grad eager to contribute to a team where I can grow as a software engineer. I enjoy full-stack development and I'm comfortable picking up new frameworks and languages quickly.
                </p>
              </div>
            </div>
          </section>

          <section id="projects" className="projects-section border-top">
            <div className="projects-grid">
              {projects.map((project) => (
                <a key={project.id} href={project.link} className="project-card">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  <div className="project-info">
                    <span className="project-role">{project.role}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-type">{project.type}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section id="contact" className="contact-section border-top">
            <h2 className="section-heading">Let's work together</h2>
            <div className="contact-content">
              <ul className="social-links-list">
                <li><a href="https://www.linkedin.com/in/james-nguyen-b915a5233/" target="_blank" rel="noopener noreferrer" className="social-link-item">LinkedIn</a></li>
                <li><a href="https://github.com/jae-n" target="_blank" rel="noopener noreferrer" className="social-link-item">GitHub</a></li>
              </ul>
              
              <a href="mailto:jamesn6708@gmail.com" className="contact-email">
                jamesn6708@gmail.com <span className="wave">👋</span>
              </a>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}