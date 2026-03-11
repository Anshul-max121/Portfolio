// ═══════════════════════════════════════════════════════════
//  ACHIEVEMENTS PAGE — Refined · Professional
// ═══════════════════════════════════════════════════════════
import { useReveal, usePageTitle } from '../hooks'
import { achievements, certificates } from '../data/portfolio'
import styles from './Achievements.module.css'

/* Extra achievement not yet in data file */
const EXTRA_ACHIEVEMENT = {
  id:          'cdac-2026',
  title:       'C-DAC Hackathon 2026',
  org:         'Centre for Development of Advanced Computing',
  year:        '2026',
  type:        'Hackathon',
  color:       '#0ea5e9',
  description: 'Finalist at the national-level C-DAC Hackathon 2026, competing against teams from premier institutes across India.',
}

const GALLERY = [
  {
    src:   '/udbhavan.jpeg',
    title: 'Udbhavan 2.0',
    sub:   'Award Ceremony · 2024',
  },
  {
    src:   '/skyroot.jpeg',
    title: 'Skyroot Systems',
    sub:   'Hardware Setup · 2025',
  },
  {
    src:   '/sih.jpeg',
    title: 'Smart India Hackathon',
    sub:   'Hackathon Submission · 2025',
  },
]

export default function Achievements() {
  usePageTitle('Achievements')
  useReveal()

  const allAchievements = [...achievements, EXTRA_ACHIEVEMENT]

  return (
    <div className="page-wrapper page-enter">
      <div className="container" style={{ paddingTop: 64, paddingBottom: 100 }}>

        {/* ══ ACHIEVEMENTS ══ */}
        <p className="section-eyebrow reveal">Recognition</p>
        <h1 className={`section-title reveal`}>
          Awards &amp; <span className="italic">achievements</span>
        </h1>

        <div className={styles.achGrid}>
          {allAchievements.map((a, i) => (
            <div
              key={a.id}
              className={`${styles.achCard} reveal`}
              style={{ '--ac': a.color, animationDelay: `${i * 0.08}s` }}
            >
              {/* Coloured top bar */}
              <div className={styles.achBar} style={{ background: a.color }} />

              <div className={styles.achInner}>
                <div className={styles.achTop}>
                  {/* Colour dot replaces emoji icon */}
                  <span className={styles.achDot} style={{ background: a.color }} />
                  <span className={`badge ${a.type === 'Hackathon' ? 'badge-green' : 'badge-blue'}`}>
                    {a.type}
                  </span>
                </div>

                <h2 className={styles.achTitle}>{a.title}</h2>
                <p className={styles.achOrg}>{a.org}</p>
                <p className={styles.achYear}>{a.year}</p>
                <p className={styles.achDesc}>{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="divider" />

        {/* ══ CERTIFICATES ══ */}
        <p className="section-eyebrow reveal">Certifications</p>
        <h2 className={`section-title reveal`}>
          Certificates &amp; <span className="italic">courses</span>
        </h2>

        <div className={styles.certGrid}>
          {certificates.map((c, i) => (
            <div
              key={c.id}
              className={`${styles.certCard} reveal`}
              style={{ '--cc': c.color, animationDelay: `${i * 0.07}s` }}
            >
              {/* Left accent line */}
              <div className={styles.certAccent} style={{ background: c.color }} />

              <div className={styles.certBody}>
                <div className={styles.certMeta}>
                  <span className={styles.certIssuer}>{c.issuer}</span>
                  <span className={styles.certYear}>{c.year}</span>
                </div>
                <h3 className={styles.certTitle}>{c.title}</h3>
                {c.credentialUrl && (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.certLink}
                  >
                    View credential
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
                      stroke="currentColor" strokeWidth="1.6"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 10L10 2M4 2h6v6" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <hr className="divider" />

        {/* ══ GALLERY ══ */}
        <p className="section-eyebrow reveal">Gallery</p>
        <h2 className={`section-title reveal`}>
          Moments &amp; <span className="italic">memories</span>
        </h2>

        <div className={styles.gallery}>
          {GALLERY.map((item, i) => (
            <div
              key={i}
              className={`${styles.galleryItem} reveal`}
              style={{ animationDelay: `${i * 0.09}s` }}
            >
              {<img src={item.src} alt={item.title} className={styles.galleryImg} /> }
              
              <div className={styles.galleryCaption}>
                <p className={styles.galleryTitle}>{item.title}</p>
                <p className={styles.gallerySub}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <p className={styles.galleryNote}>
          Add images to <code>/public/gallery/</code> and replace the placeholder divs
          with <code>&lt;img src=&#123;item.src&#125; /&gt;</code> inside each gallery item.
        </p> */}

      </div>
    </div>
  )
}