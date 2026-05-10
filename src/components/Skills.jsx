import React from 'react';
import { skills } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import styles from './Skills.module.css';

function SkillCard({ category, items, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`${styles.card} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.cardTitle}>{category}</div>
      <div className={styles.tags}>
        {items.map(item => (
          <span key={item.label} className={`${styles.tag} ${item.highlight ? styles.hi : ''}`}>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [headerRef, headerInView] = useInView();

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div
          ref={headerRef}
          className={`${styles.header} ${headerInView ? styles.visible : ''}`}
        >
          <span className={styles.label}>What I know</span>
          <h2>Technical expertise</h2>
        </div>

        <div className={styles.grid}>
          {skills.map((s, i) => (
            <SkillCard key={s.category} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
