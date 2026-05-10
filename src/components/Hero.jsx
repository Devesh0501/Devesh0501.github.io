import React, { useEffect, useState } from 'react';
import { personal } from '../data/portfolioData';
import styles from './Hero.module.css';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleDownload = () => {
    // Creates a simple text-based resume download
    const resumeContent = `DEVESH ARYA
Front-End Developer
${personal.location} | ${personal.email}

PROFESSIONAL SUMMARY
React.js Front-End Developer with 5+ years of experience building scalable, responsive web applications
using React, Next.js, and modern JavaScript (ES6+).

TECHNICAL EXPERTISE
Frontend: React.js, Next.js, JavaScript (ES6+), TypeScript, Redux, HTML5, CSS3, Tailwind CSS, Sass
API & Data: REST APIs, JSON, Fetch API, Axios, AJAX, Async/Await
Backend & CMS: PHP, WordPress, WordPress REST API
Performance: Code Splitting, Lazy Loading, Caching, Minification, Image Optimization
Testing & DevOps: Jest, Cypress, Git, Bitbucket, Azure DevOps, CI/CD, Vercel
Workflow: Agile/Scrum, JIRA, Basecamp, Code Reviews, a11y

WORK EXPERIENCE

Front-End Developer — Clear Digital, San Jose, CA (Apr 2021 – Present)
• Built scalable web apps with React.js, Next.js, TypeScript, Redux and modern JavaScript
• Optimized Lighthouse scores via code splitting, caching, and image optimization
• Mentored 5+ junior developers through code reviews
• Integrated REST APIs for dynamic data rendering and form submission
• Implemented SEO best practices: metadata, structured URLs, and performance tuning

Front-End Developer — GreenSparrow Solutions Pvt. Ltd. (Jan 2018 – Mar 2021)
• Developed responsive, cross-browser pages with HTML5, CSS3, jQuery, and JavaScript
• Enhanced UX via intuitive navigation flows, animations, and optimized UI components
• Ensured cross-browser compatibility across Chrome, Firefox, Safari, and Edge

EDUCATION
Bachelor of Engineering (WES Approved)
National Power Training Institute (GGSIPU), India — 2013–2017
`;
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Devesh_Arya_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroGrid} />

      {/* Floating orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={`${styles.content} ${visible ? styles.visible : ''}`}>
        <div className={styles.tag} style={{ transitionDelay: '0ms' }}>
          <span className={styles.dot} />
          Available for new opportunities
        </div>

        <h1 className={styles.headline} style={{ transitionDelay: '120ms' }}>
          Front-End
          <span className={styles.italic}> Developer.</span>
        </h1>

        <p className={styles.desc} style={{ transitionDelay: '240ms' }}>
          {personal.summary} Based in {personal.location}.
        </p>

        <div className={styles.cta} style={{ transitionDelay: '360ms' }}>
          <a
            href="#projects"
            className={styles.btnPrimary}
            onClick={e => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View my work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
          </a>
          <button className={styles.btnOutline} onClick={handleDownload}>
            Download Resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </button>
        </div>

        <div className={styles.stats} style={{ transitionDelay: '480ms' }}>
          {personal.stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
