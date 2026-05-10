import React from 'react';
import { projects } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import styles from './Projects.module.css';

function ProjectCard({ name, stack, desc, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`${styles.card} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.cardTop}>
        <div className={styles.icon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
        </div>
        <div className={styles.arrow}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </div>
      </div>
      <div className={styles.cardName}>{name}</div>
      <p className={styles.cardDesc}>{desc}</p>
      <div className={styles.stack}>
        {stack.map(s => (
          <span key={s} className={styles.stackTag}>{s}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [headerRef, headerInView] = useInView();

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div
          ref={headerRef}
          className={`${styles.header} ${headerInView ? styles.visible : ''}`}
        >
          <span className={styles.label}>What I've built</span>
          <h2>Live projects</h2>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.name} {...p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
