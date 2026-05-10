import React from 'react';
import { experience } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import styles from './Experience.module.css';

function ExpItem({ company, location, period, title, type, bullets, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`${styles.item} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.meta}>
        <div className={styles.company}>{company}</div>
        <div className={styles.period}>{period}</div>
        <div className={styles.location}>{location}</div>
        <span className={styles.badge}>{type}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.itemTitle}>{title}</div>
        <ul className={styles.bullets}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const [headerRef, headerInView] = useInView();

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div
          ref={headerRef}
          className={`${styles.header} ${headerInView ? styles.visible : ''}`}
        >
          <span className={styles.label}>Where I've been</span>
          <h2>Work experience</h2>
        </div>

        <div className={styles.list}>
          {experience.map((exp, i) => (
            <ExpItem key={exp.company} {...exp} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
