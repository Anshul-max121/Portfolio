import { Link } from 'react-router-dom'
import { useReveal, usePageTitle } from '../hooks'
import { personal, projects, experience } from '../data/portfolio'
import styles from './Home.module.css'

export default function Home() {
  usePageTitle('')
  useReveal()

  return (
    <div className={`page-wrapper page-enter ${styles.home}`}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>

            {/* Left — content */}
            <div className={styles.heroContent}>

              <div className={`${styles.statusRow} reveal`}>
                <span className="badge badge-green">
                  <span className="badge-dot" />
                  Available for opportunities
                </span>
                <span className={styles.location}>Bhilwara, Rajasthan</span>
              </div>

              <h1 className={`${styles.headline} reveal`} style={{ animationDelay: '.08s' }}>
                Anshul Khichi
                <br />
                <span className={`display ${styles.displayLine}`}>
                  Full-Stack Developer
                </span>
                <br />
                <span className={styles.andLine}>&amp; IoT Innovator</span>
              </h1>

              <p className={`${styles.sub} reveal`} style={{ animationDelay: '.16s' }}>
                {personal.subtitle}
              </p>

              <div className={`${styles.tags} reveal`} style={{ animationDelay: '.22s' }}>
                {['MERN Stack', 'Flutter', 'IoT · Arduino', 'AI / ML', 'Open Source'].map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>

              <div className={`${styles.ctas} reveal`} style={{ animationDelay: '.28s' }}>
                <Link to="/projects" className="btn btn-primary btn-lg">
                  View Projects
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Get in Touch
                </Link>
                <a href={personal.resume} className="btn btn-secondary btn-lg" download>
                  Resume
                </a>
              </div>

              <div className={`${styles.socials} reveal`} style={{ animationDelay: '.34s' }}>
                <a href={personal.github} target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <GithubIcon />
                  GitHub
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <LinkedinIcon />
                  LinkedIn
                </a>
                <a href={`mailto:${personal.email}`} className={styles.socialLink}>
                  <MailIcon />
                  Email
                </a>
              </div>
            </div>

            {/* Right — card */}
            <div className={`${styles.heroAside} reveal`} style={{ animationDelay: '.12s' }}>
              <div className={styles.avatarCard}>
                <div className={styles.avatarWrap}>
                  <img src="/Anshul.png"alt="Anshul Khichi"className={styles.avatarImg}/>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardName}>Anshul Khichi</p>
                  <p className={styles.cardTitle}>B.Tech IT · MLVTEC</p>
                  <div className={styles.cardStats}>
                    {[['8.2', 'CGPA'], ['2', 'Internships'], ['4', 'Projects']].map(([n, l]) => (
                      <div className={styles.stat} key={l}>
                        <span className={styles.statNum}>{n}</span>
                        <span className={styles.statLbl}>{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.expCard}>
                <div
                  className={styles.expCardDot}
                  style={{ background: experience[0].color }}
                />
                <div>
                  <p className={styles.expCardRole}>{experience[0].role}</p>
                  <p className={styles.expCardCo}>
                    {experience[0].company} · {experience[0].period}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background */}
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBgGrid} />
          <div className={styles.heroBgBlob1} />
          <div className={styles.heroBgBlob2} />
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={`${styles.statsGrid} stagger reveal`}>
            {[
              { n: '2+', l: 'Years coding' },
              { n: '4',  l: 'Projects shipped' },
              { n: '2',  l: 'Internship roles' },
              { n: '1',  l: 'Hackathon prize' },
              { n: '8.2',l: 'CGPA' },
            ].map(({ n, l }) => (
              <div className={styles.statBlock} key={l}>
                <span className={styles.statBig}>{n}</span>
                <span className={styles.statSmall}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <p className="section-eyebrow reveal">Featured Work</p>
              <h2 className="section-title reveal">
                Things I've <span className="italic">built</span>
              </h2>
            </div>
            <Link to="/projects" className="btn btn-secondary reveal">
              All Projects
            </Link>
          </div>

          <div className={`${styles.projectsGrid} stagger reveal`}>
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE STRIP ── */}
      <section className={`${styles.section} ${styles.expSection}`}>
        <div className="container">
          <p className="section-eyebrow reveal">Experience</p>
          <h2 className="section-title reveal">
            Where I've <span className="italic">worked</span>
          </h2>
          <div className={`${styles.expList} stagger reveal`}>
            {experience.map((e) => (
              <div className={styles.expItem} key={e.id}>
                <div className={styles.expColor} style={{ background: e.color }} />
                <div className={styles.expLeft}>
                  <p className={styles.expRole}>{e.role}</p>
                  <p className={styles.expCo}>{e.company} · {e.location}</p>
                </div>
                <div className={styles.expRight}>
                  <span className={`badge ${e.type === 'Internship' ? 'badge-blue' : 'badge-green'}`}>
                    {e.type}
                  </span>
                  <span className={styles.expPeriod}>{e.period}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.expCta}>
            <Link to="/experience" className="btn btn-secondary reveal">
              Full Experience
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={`${styles.ctaBandInner} reveal`}>
            <div>
              <h2 className={styles.ctaTitle}>Let's build something together</h2>
              <p className={styles.ctaSub}>
                Open to internships, freelance projects, and full-time roles.
              </p>
            </div>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
              <a href={personal.resume} download className="btn btn-secondary btn-lg">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

/* ── PROJECT CARD ── */
function ProjectCard({ project: p }) {
  return (
    <div className={styles.projCard} style={{ '--pc': p.color }}>
      <div className={styles.projTop}>
        <span className={styles.projDot} style={{ background: p.color }} />
        <span className={`badge ${p.statusColor === 'green' ? 'badge-green' : 'badge-blue'}`}>
          {p.status}
        </span>
      </div>
      <p className={styles.projCat}>{p.category} · {p.year}</p>
      <h3 className={styles.projTitle}>{p.title}</h3>
      <p className={styles.projDesc}>{p.description}</p>
      <div className={styles.projStack}>
        {p.tech.slice(0, 4).map((t) => (
          <span className="chip" key={t}>{t}</span>
        ))}
        {p.tech.length > 4 && (
          <span className="chip">+{p.tech.length - 4}</span>
        )}
      </div>
      <div className={styles.projLinks}>
        {p.github && (
          <a href={p.github} target="_blank" rel="noreferrer" className={styles.projLink}>
            GitHub
          </a>
        )}
        {p.live && (
          <a href={p.live} target="_blank" rel="noreferrer" className={styles.projLink}>
            Live
          </a>
        )}
      </div>
    </div>
  )
}

/* ── ICONS ── */
function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m2 7 10 7 10-7"/>
    </svg>
  )
}