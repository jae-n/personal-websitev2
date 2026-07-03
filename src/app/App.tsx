import React from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
import bjjImage from '../image/bjj.webp';
import aiImage from '../image/ai.png';
import glImage from '../image/gl.png';
import ufcImage from '../image/ufc.avif';
import './App.css';




const experience = [
  {
    id: 1,
    company: 'Raytheon',
    role: 'Software Engineer',
    dates: 'Starting Jan 2027',
    location: 'McKinney, TX',
    description: ['Future role, no description available yet.'],
  },
  {
    id: 2,
    company: 'Starbucks',
    role: 'Barista',
    dates: 'Jun 2026 – Present',
    location: 'Southlake, TX',
    description: [
      'Prepared and served beverages and food items to order while maintaining consistent quality and speed during high-volume rush periods.',
      'Delivered attentive customer service in a fast-paced environment, handling orders, payments, and customer questions with accuracy.',
      'Maintained cleanliness and organization of the workstation and stockroom in compliance with health and safety standards.',
      'Collaborated with team members to keep operations running smoothly during peak hours and support store goals.',
    ],
  },
  {
    id: 3,
    company: 'Sybor Tech Inc',
    role: 'Systems Engineer Intern',
    dates: 'Jan 2026 – Present',
    location: 'Fort Worth, TX',
    description: [
      'Engineered specialized C++ data-routing scripts to ingest raw sensor inputs from microcomputer nodes and stream formatted data packets across stable TCP/IP socket connections.',
      'Programmed and verified responsive user-input navigation flows utilizing the LVGL graphics library, executing targeted functional and regression tests to ensure flawless database state synchronization.',
      'Isolated and resolved serial data parsing bugs, communication timeouts, and connectivity drops within an active Agile framework using Jira, maintaining a 99.9% system deployment uptime.',
      'Authored comprehensive technical configuration manuals, board pinout blueprints, and sprint summaries to translate complex systems layouts into clear team narratives.',
    ],
  },
  {
    id: 4,
    company: 'UTD Systems & Security Lab',
    role: 'Undergraduate Researcher',
    dates: 'Jan 2026 – May 2026',
    location: '',
    description: [
      'Collaborated with a PhD researcher to analyze compiled software binaries and low-level machine code, systematically identifying system architecture execution vulnerabilities.',
      'Programmed automated Python validation scripts within a native Linux environment to scan compiled binaries for out-of-bounds write errors (buffer overflows) to defend data execution integrity.',
    ],
  },
  {
    id: 5,
    company: 'Walmart',
    role: 'Sales Associate',
    dates: 'Aug 2019 – Jun 2026',
    location: '',
    description: [
      'Partnered with logistics, backroom, and floor teams to support project timelines, streamline product tracking data pipelines, and keep product counts accurate.',
    ],
  },
];

const education = [
  {
    id: 1,
    school: 'The University of Texas at Dallas',
    degree: 'Bachelor of Science in Computer Science',
    dates: 'May 2026',
    location: 'Richardson, TX',
    coursework: [
      'Computer Networks',
      'Software Testing & Quality Assurance',
      'Database Systems',
      'Artificial Intelligence',
      'Advanced Data Algorithms',
      'Programming in UNIX',
      'Operating Systems',
      'Computer Graphics',
    ],
  },
  {
    id: 2,
    school: 'Tarrant County College',
    degree: 'Associate of Arts',
    dates: 'May 2023',
    location: 'Fort Worth, TX',
    coursework: [],
  },
];

const projects = [
  {
    id: 1,
    title: 'AI-Driven Resume Orchestration Engine',
    role: 'Python, React, Gemini API, SQL, JavaScript (ES6+)',
    description: 'A full-stack platform that maps user profile data against job criteria to generate tailored resumes using the Gemini API, backed by a normalized SQL schema.',
    type: 'View on GitHub',
    image: aiImage,
    link: 'https://github.com/jae-n/ai-resume-builder',
  },
  {
    id: 2,
    title: 'Combat Analytics Platform',
    role: 'Python, NumPy, OpenCV, MediaPipe',
    description: 'A computer vision pipeline that extracts real-time pose and trajectory data from video, using vectorized NumPy operations to sustain sub-30ms processing latency.',
    type: 'View on GitHub',
    image: ufcImage,
    link: 'https://github.com/jae-n/fightAnalysis',
  },
  {
    id: 3,
    title: '3D Physics Engine',
    role: 'C++, OpenGL',
    description: 'A rigid body physics simulation built from scratch, featuring AABB collision detection and impulse-based resolution for real-time object interactions.',
    type: 'View on GitHub',
    image: glImage,
    link: 'https://github.com/jae-n/PhysicEngine',
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
              <a href="#bio" className="nav-link">Bio</a>
              <a href="#education" className="nav-link">Education</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#projects" className="nav-link">Projects</a>
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
                I'm a Computer Science graduate from The University of Texas at Dallas with a focus on embedded systems and full-stack development. I enjoy working close to the hardware — writing low-level code that talks to sensors and microcontrollers — as well as building complete web applications from the database up.
              </p>
              <p className="hero-subtitle mt-gap">
                I'm currently looking for full-time software engineering opportunities. Feel free to <a href="#contact" className="text-link">reach out</a> — I'd love to hear about your team and what you're building.
              </p>
            </div>
          </section>

          <section id="bio" className="bio-section border-top">
            <div className="bio-grid">
              <div className="bio-block">
                <h2 className="bio-title">Bio</h2>
                <p className="bio-text">
                  I'm James, a new grad software engineer based in the Dallas–Fort Worth area. I studied Computer Science at UT Dallas, with coursework spanning networks, databases, AI, and systems programming — and I like putting that foundation to work on projects that touch computer vision, backend systems, and low-level programming.
                </p>
                <p className="bio-text mt-gap">
                  Outside of coursework, I've built things ranging from a physics engine in C++ to an AI-powered resume tool, and I've spent time in a research lab digging into binary analysis and vulnerability detection. When I'm not coding, you'll usually find me on the mats training Brazilian Jiu-Jitsu or outside hiking, camping, or just finding an excuse to be outdoors
                </p>
              </div>
              <div className="bio-block">
                <h2 className="bio-title">What I'm Looking For</h2>
                <p className="bio-text">
                  I'm a new grad eager to contribute to a team where I can grow as a software engineer. I enjoy full-stack development and I'm comfortable picking up new frameworks and languages quickly.
                </p>
                <img
                  src={bjjImage}
                  alt="Training Brazilian Jiu-Jitsu"
                  className="bio-image mt-gap"
                />
              </div>
            </div>
          </section>

          

          <section id="education" className="education-section border-top">
            <h2 className="section-heading">Education</h2>
            <div className="education-list">
              {education.map((edu) => (
                <div key={edu.id} className="education-item">
                  <div className="education-header">
                    <h3 className="education-school">{edu.school}</h3>
                    <span className="education-dates">{edu.dates}</span>
                  </div>
                  <span className="education-location">{edu.location}</span>
                  <p className="bio-text mt-gap">{edu.degree}</p>
                  {edu.coursework.length > 0 && (
                    <p className="bio-text mt-gap">
                      <strong>Relevant Coursework:</strong> {edu.coursework.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          

          <section id="experience" className="experience-section border-top">
            <h2 className="section-heading">Experience</h2>
            <div className="experience-list">
              {experience.map((job) => (
                <div key={job.id} className="experience-item">
                  <div className="experience-header">
                    <h3 className="experience-role">{job.role}</h3>
                    <span className="experience-dates">{job.dates}</span>
                  </div>
                  <span className="experience-company">
                    {job.company}{job.location ? ` · ${job.location}` : ''}
                  </span>
                  {job.description.length > 0 && (
                    <ul className="experience-bullets">
                      {job.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="projects-section border-top">
            <h2 className="section-heading">Projects</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  <div className="project-info">
                    <span className="project-role">{project.role}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
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
                jamesn6708@gmail.com <span className="wave"></span>
              </a>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}
