// ═══════════════════════════════════════════════════════════
//  PROJECTS PAGE — Refined · Professional · No emojis
// ═══════════════════════════════════════════════════════════
import { useState } from 'react'
import { useReveal, usePageTitle } from '../hooks'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

/* Derive unique categories from data */
const getCategories = (list) => {
  const cats = ['All', ...new Set(list.map((p) => p.category))]
  return cats
}

export default function Projects() {
  usePageTitle('Projects')
  useReveal()

  const categories  = getCategories(projects)
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <div className="page-wrapper page-enter">
      <div className="container" style={{ paddingTop: 64, paddingBottom: 100 }}>

        {/* ── Header ── */}
        <p className="section-eyebrow reveal">Portfolio</p>
        <h1 className={`${styles.title} reveal`}>
          Things I've{' '}
          <span className="display" style={{ fontStyle: 'italic', color: 'var(--muted)' }}>
            built
          </span>
        </h1>

        {/* ── Filter tabs ── */}
        <div className={`${styles.filters} reveal`}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Project count ── */}
        <p className={`${styles.count} reveal`}>
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* ── Grid ── */}
        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              delay={(i % 3) * 0.08}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

/* ── Project card ── */
function ProjectCard({ project: p, delay }) {
  return (
    <article
      className={`${styles.card} reveal`}
      style={{ '--pc': p.color, animationDelay: `${delay}s` }}
    >
      {/* Top colour bar */}
      <div className={styles.cardBar} style={{ background: p.color }} />

      {/* Body */}
      <div className={styles.cardBody}>

        {/* Meta */}
        <div className={styles.metaRow}>
          <span className={styles.category}>{p.category}</span>
          <div className={styles.metaRight}>
            <span className={`badge ${p.statusColor === 'green' ? 'badge-green' : 'badge-blue'}`}>
              {p.status}
            </span>
            <span className={styles.year}>{p.year}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className={styles.cardTitle}>{p.title}</h2>

        {/* Description */}
        <p className={styles.desc}>{p.longDesc ?? p.description}</p>

        {/* Highlights */}
        {p.highlights?.length > 0 && (
          <ul className={styles.highlights}>
            {p.highlights.map((h) => (
              <li key={h} className={styles.hl}>
                <span
                  className={styles.hlDot}
                  style={{ background: p.color }}
                  aria-hidden="true"
                />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      <div className={styles.cardFoot}>
        <div className={styles.techRow}>
          {p.tech.map((t) => (
            <span className="chip" key={t}>{t}</span>
          ))}
        </div>
        <div className={styles.linkRow}>
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-secondary btn-sm`}
            >
              GitHub
              <ExternalIcon />
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-primary btn-sm`}
            >
              Live Site
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

/* ── Icons ── */
function ExternalIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
      stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10L10 2M4 2h6v6" />
    </svg>
  )
}