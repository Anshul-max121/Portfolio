// ═══════════════════════════════════════════════════════════
//  EXPERIENCE PAGE — Refined · Professional · No emojis
// ═══════════════════════════════════════════════════════════
import { useReveal, usePageTitle } from '../hooks'
import { experience } from '../data/portfolio'
import styles from './Experience.module.css'

export default function Experience() {
  usePageTitle('Experience')
  useReveal()

  return (
    <div className="page-wrapper page-enter">
      <div className="container" style={{ paddingTop: 64, paddingBottom: 100 }}>

        {/* ── Header ── */}
        <p className="section-eyebrow reveal">Work History</p>
        <h1 className={`${styles.title} reveal`}>
          Where I've{' '}
          <span className="display" style={{ fontStyle: 'italic', color: 'var(--muted)' }}>
            worked
          </span>
        </h1>

        {/* ── Timeline ── */}
        <div className={styles.timeline}>
          {experience.map((e, i) => (
            <div
              key={e.id}
              className={`${styles.item} reveal`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Dot on the line */}
              <div className={styles.dotWrap}>
                <div className={styles.dot} style={{ background: e.color }} />
              </div>

              {/* Card */}
              <div className={styles.card}>

                {/* ── Card top bar ── */}
                <div className={styles.cardBar} style={{ background: e.color }} />

                {/* ── Card header ── */}
                <div className={styles.cardHead}>
                  <div className={styles.titleRow}>
                    <h2 className={styles.role}>{e.role}</h2>
                    <span className={`badge ${e.type === 'Internship' ? 'badge-blue' : 'badge-green'}`}>
                      {e.type}
                    </span>
                  </div>

                  <div className={styles.meta}>
                    <span className={styles.company}>{e.company}</span>
                    <span className={styles.metaDot} aria-hidden="true" />
                    <span className={styles.location}>{e.location}</span>
                    <span className={styles.metaDot} aria-hidden="true" />
                    <span className={styles.period}>{e.period}</span>
                  </div>
                </div>

                {/* ── Description ── */}
                <div className={styles.cardBody}>
                  <p className={styles.desc}>{e.description}</p>

                  {/* Highlights */}
                  {e.highlights?.length > 0 && (
                    <ul className={styles.points}>
                      {e.highlights.map((pt, j) => (
                        <li key={j} className={styles.point}>
                          <span
                            className={styles.pointDot}
                            style={{ background: e.color }}
                            aria-hidden="true"
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* ── Tech stack footer ── */}
                {e.tech?.length > 0 && (
                  <div className={styles.cardFoot}>
                    <span className={styles.techLabel}>Stack</span>
                    <div className={styles.techChips}>
                      {e.tech.map((t) => (
                        <span className="chip" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA band ── */}
        <div className={`${styles.cta} reveal`}>
          <div className={styles.ctaLeft}>
            <p className={styles.ctaTitle}>Looking for the next challenge</p>
            <p className={styles.ctaSub}>
              Open to internships, freelance work, and full-time roles in
              Full-Stack Development and IoT engineering.
            </p>
          </div>
          <a href="mailto:khatikanshul8@gmail.com" className="btn btn-primary btn-lg">
            Get in Touch
          </a>
        </div>

      </div>
    </div>
  )
}