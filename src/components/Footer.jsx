import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import { personal } from '../data/portfolio'

const PAGES = [
  { to: '/',             label: 'Home'         },
  { to: '/about',        label: 'About'        },
  { to: '/experience',   label: 'Experience'   },
  { to: '/projects',     label: 'Projects'     },
  { to: '/skills',       label: 'Skills'       },
  { to: '/achievements', label: 'Achievements' },
  { to: '/contact',      label: 'Contact'      },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>

      {/* ── Large editorial name ── */}
      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className="container">
          <div className={styles.nameRule}>
            <span className={styles.nameLarge}>Anshul Khichi</span>
            <span className={styles.nameRule__line} />
          </div>
        </div>
      </div>

      {/* ── Main content grid ── */}
      <div className={`container ${styles.main}`}>

        {/* Identity */}
        <div className={styles.identity}>
          <div className={styles.logoRow}>
            <span className={styles.mark}>AK</span>
            <div className={styles.logoMeta}>
              <p className={styles.role}>Full-Stack Developer</p>
              <p className={styles.roleAlt}>&amp; IoT Innovator</p>
            </div>
          </div>

          <p className={styles.bio}>
            Building thoughtful digital products from Bhilwara, Rajasthan.
            Open to internships, freelance, and full-time roles.
          </p>

          <a href={`mailto:${personal.email}`} className={styles.emailLink}>
            {personal.email}
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
              stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 10L10 2M4 2h6v6"/>
            </svg>
          </a>

          <div className={styles.availability}>
            <span className={styles.availDot} />
            <span>Available for opportunities</span>
          </div>
        </div>

        {/* Pages */}
        <div className={styles.col}>
          <p className={styles.colHead}>Pages</p>
          <ul>
            {PAGES.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={styles.colLink}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className={styles.col}>
          <p className={styles.colHead}>Connect</p>
          <ul>
            <li><a href={personal.github}   target="_blank" rel="noreferrer" className={styles.colLink}>GitHub</a></li>
            <li><a href={personal.linkedin} target="_blank" rel="noreferrer" className={styles.colLink}>LinkedIn</a></li>
            <li><a href={`mailto:${personal.email}`}        className={styles.colLink}>Email</a></li>
            <li><a href={personal.resume}   download        className={styles.colLink}>Resume</a></li>
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <p className={styles.copy}>© {year} Anshul Khichi. All rights reserved.</p>
          <div className={styles.barRight}>
            <span className={styles.barChip}>React</span>
            <span className={styles.barChip}>MERN</span>
            <span className={styles.barChip}>IoT</span>
          </div>
        </div>
      </div>

    </footer>
  )
}