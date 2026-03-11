// ═══════════════════════════════════════════════════════════
//  SKILLS PAGE — Refined · Professional · No emojis
// ═══════════════════════════════════════════════════════════
import { useReveal, usePageTitle } from '../hooks'
import { skills } from '../data/portfolio'
import styles from './Skills.module.css'

const SOFT_SKILLS = [
  'Team Collaboration',
  'Leadership',
  'Project Management',
  'Communication',
  'Innovation',
  'Problem Solving',
]

export default function Skills() {
  usePageTitle('Skills')
  useReveal()

  return (
    <div className="page-wrapper page-enter">
      <div className="container" style={{ paddingTop: 64, paddingBottom: 100 }}>

        {/* ── Header ── */}
        <p className="section-eyebrow reveal">Technical Skills</p>
        <h1 className={`${styles.title} reveal`}>
          Tools &amp;{' '}
          <span className="display" style={{ fontStyle: 'italic', color: 'var(--muted)' }}>
            technologies
          </span>
        </h1>

        {/* ── Skills grid ── */}
        <div className={styles.grid}>
          {Object.entries(skills).map(([cat, { color, items }], i) => (
            <div
              key={cat}
              className={`${styles.card} reveal`}
              style={{ '--sc': color, animationDelay: `${i * 0.07}s` }}
            >
              {/* Top colour bar — slides in on hover */}
              <div className={styles.cardBar} />

              <div className={styles.cardHead}>
                {/* Colour dot replaces emoji icon */}
                <span className={styles.catDot} style={{ background: color }} />
                <h2 className={styles.catTitle}>{cat}</h2>
                <span className={styles.catCount}>{items.length}</span>
              </div>

              <div className={styles.pills}>
                {items.map((item) => (
                  <span key={item} className={`chip ${styles.pill}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Soft skills ── */}
        <div className={`${styles.softSection} reveal`}>
          <p className={`section-eyebrow ${styles.softEyebrow}`}>Soft Skills</p>

          <div className={styles.softGrid}>
            {SOFT_SKILLS.map((s, i) => (
              <div
                key={s}
                className={styles.softCard}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span className={styles.softNum}>0{i + 1}</span>
                <span className={styles.softLabel}>{s}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}