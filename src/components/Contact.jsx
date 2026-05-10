import React from 'react';
import { personal } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import styles from './Contact.module.css';

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div
          ref={ref}
          className={`${styles.card} ${inView ? styles.visible : ''}`}
        >
          <div className={styles.left}>
            <span className={styles.label}>Let's connect</span>
            <h2 className={styles.heading}>Get in touch</h2>
            <p className={styles.desc}>
              Open to full-time roles, contract work, and interesting collaborations.
              Reach out and let's build something great together.
            </p>
          </div>
          <div className={styles.right}>
            <a href={`mailto:${personal.email}`} className={styles.contactLink}>
              <div className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div className={styles.contactType}>Email</div>
                <div className={styles.contactValue}>{personal.email}</div>
              </div>
            </a>
            <div className={styles.contactLink} style={{ cursor: 'default' }}>
              <div className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className={styles.contactType}>Location</div>
                <div className={styles.contactValue}>{personal.location}</div>
              </div>
            </div>

            <a href={`mailto:${personal.email}`} className={styles.emailBtn}>
              Send a message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
