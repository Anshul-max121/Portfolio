// ═══════════════════════════════════════════════════════════
//  ABOUT PAGE
// ═══════════════════════════════════════════════════════════
import { useState } from 'react'
import { useReveal, usePageTitle } from '../hooks'
import { personal, education } from '../data/portfolio'
import styles from './About.module.css'

const QUICK_INFO = (p) => [
  ['Location', 'Bhilwara, Rajasthan'],
  ['Degree',   'B.Tech — IT (2027)'],
  ['College',  'MLVTEC, Bhilwara'],
  ['CGPA',     '8.2 / 10'],
  ['Email',    p.email],
  ['Phone',    p.phone],
]

const SKILLS = [
  'React.js', 'Node.js', 'Express', 'MongoDB',
  'Flutter', 'Arduino', 'Python', 'Firebase', 'Git',
]

export function About() {
  usePageTitle('About')
  useReveal()

  return (
    <div className="page-wrapper page-enter">
      <div className={`container ${styles.page}`}>

        <p className="section-eyebrow reveal">About Me</p>
        <h1 className={`${styles.title} reveal`}>
          The person{' '}
          <span className="display" style={{ color: 'var(--muted)', fontStyle: 'italic' }}>
            behind the code
          </span>
        </h1>

        <div className={styles.grid}>

          {/* ══ LEFT aside ══ */}
          <aside className={`${styles.aside} stagger reveal`}>

              {  <img src="/Anshul.png" alt="Anshul" className={styles.photo} /> }
            

            <div className={styles.infoTable}>
              {QUICK_INFO(personal).map(([k, v]) => (
                <div key={k} className={styles.infoRow}>
                  <span className={styles.infoKey}>{k}</span>
                  <span className={styles.infoVal}>{v}</span>
                </div>
              ))}
            </div>

            <div className={styles.asideBtns}>
              <a href={personal.github}   target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">GitHub</a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">LinkedIn</a>
              <a href={personal.resume}   download                         className="btn btn-primary btn-sm">Resume</a>
            </div>
          </aside>

          {/* ══ RIGHT content ══ */}
          <div className={styles.content}>

            <span className={`badge badge-green reveal ${styles.badge}`}>
              <span className="badge-dot" />
              Available for opportunities
            </span>

            <p className={`${styles.lead} reveal`}>{personal.objective}</p>

            <p className={`${styles.body} reveal`}>
              I'm a 3rd-year B.Tech student at MLVTEC, Bhilwara, passionate about
              building products that sit at the intersection of elegant code and
              real-world impact. From shipping full-stack web apps to deploying IoT
              systems that work at 400 m altitude — I love problems that are
              actually hard.
            </p>

            <p className={`${styles.body} reveal`}>
              When I'm not coding, I'm organising hackathons as a core member of
              the Techbizz Club, contributing to open source, or mentoring juniors
              in web development.
            </p>

            <div className={`${styles.skillsBlock} reveal`}>
              <p className={styles.skillsLabel}>Core Skills</p>
              <div className={styles.skillsRow}>
                {SKILLS.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
            </div>

            {/* Education */}
            <div className={styles.eduBlock}>
              <p className={`section-eyebrow reveal ${styles.eduEyebrow}`}>Education</p>
              <div className={styles.eduList}>
                {education.map((e, i) => (
                  <EduCard key={e.id} edu={e} delay={i * 0.1} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

function EduCard({ edu: e, delay }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      className={`${styles.eduCard} reveal`}
      style={{
        animationDelay: `${delay}s`,
        borderColor: hov ? 'var(--border2)' : 'var(--border)',
        boxShadow:   hov ? 'var(--shadow-md)' : 'none',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className={styles.eduTop}>
        <div className={styles.eduLeft}>
          <p className={styles.eduDegree}>{e.degree}</p>
          <p className={styles.eduSchool}>{e.school}</p>
          {e.university && <p className={styles.eduUniv}>{e.university}</p>}
        </div>
        <div className={styles.eduRight}>
          <span className="badge badge-blue">{e.period}</span>
          {e.grade && <p className={styles.eduGrade}>{e.grade}</p>}
        </div>
      </div>
      {e.highlights?.length > 0 && (
        <ul className={styles.highlights}>
          {e.highlights.map((h) => (
            <li key={h} className={styles.hlItem}>
              <span className={styles.hlDot} />
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}