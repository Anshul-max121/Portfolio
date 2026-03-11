// ═══════════════════════════════════════════════════════════
//  CONTACT PAGE — Info only · No form · Professional
// ═══════════════════════════════════════════════════════════
import { useReveal, usePageTitle } from '../hooks'
import { personal } from '../data/portfolio'
import styles from './Contact.module.css'

const CONTACT_ITEMS = (p) => [
  {
    label: 'Email',
    value: p.email,
    href:  `mailto:${p.email}`,
    note:  'Best way to reach me',
  },
  {
    label: 'Phone',
    value: p.phone,
    href:  `tel:${p.phone}`,
    note:  'Available 10 am – 8 pm IST',
  },
  {
    label: 'Location',
    value: 'Bhilwara, Rajasthan, India',
    href:  null,
    note:  'Open to remote & relocation',
  },
]

const SOCIAL_ITEMS = (p) => [
  {
    label:    'GitHub',
    handle:   p.github?.replace('https://github.com/', '@'),
    href:     p.github,
    desc:     'Source code & open-source work',
  },
  {
    label:    'LinkedIn',
    handle:   'Anshul Khichi',
    href:     p.linkedin,
    desc:     'Professional profile & experience',
  },
  {
    label:    'Resume',
    handle:   'Download PDF',
    href:     p.resume,
    download: true,
    desc:     'Latest CV — updated 2025',
  },
]

export default function Contact() {
  usePageTitle('Contact')
  useReveal()

  return (
    <div className="page-wrapper page-enter">
      <div className="container" style={{ paddingTop: 64, paddingBottom: 100 }}>

        {/* ── Header ── */}
        <p className="section-eyebrow reveal">Get in Touch</p>
        <h1 className={`${styles.title} reveal`}>
          Let's work <span className="display" style={{ fontStyle: 'italic', color: 'var(--muted)' }}>together</span>
        </h1>
        <p className={`${styles.intro} reveal`}>
          I'm always open to internships, freelance projects, open-source
          collaborations, or just a good conversation about technology.
          Reach out through any of the channels below.
        </p>

        {/* ── Response note ── */}
        <div className={`${styles.responseRow} reveal`}>
          <span className="badge badge-green">
            <span className="badge-dot" />
            Available for opportunities
          </span>
          <span className={styles.responseText}>
            Typically responds within <strong>24 hours</strong>
          </span>
        </div>

        {/* ── Two-column grid ── */}
        <div className={styles.grid}>

          {/* ══ Direct contact ══ */}
          <section className={styles.section}>
            <p className={`${styles.sectionLabel} reveal`}>Direct Contact</p>

            <div className={`${styles.contactList} stagger reveal`}>
              {CONTACT_ITEMS(personal).map(({ label, value, href, note }) => (
                <div key={label} className={styles.contactItem}>
                  <div className={styles.contactMeta}>
                    <span className={styles.contactLabel}>{label}</span>
                    <span className={styles.contactNote}>{note}</span>
                  </div>
                  {href
                    ? <a href={href} className={styles.contactValue}>{value}</a>
                    : <p className={styles.contactValue}>{value}</p>
                  }
                </div>
              ))}
            </div>
          </section>

          {/* ══ Social & links ══ */}
          <section className={styles.section}>
            <p className={`${styles.sectionLabel} reveal`}>Online Profiles</p>

            <div className={`${styles.socialList} stagger reveal`}>
              {SOCIAL_ITEMS(personal).map(({ label, handle, href, download, desc }) => (
                <a
                  key={label}
                  href={href}
                  className={styles.socialItem}
                  target={download ? undefined : '_blank'}
                  rel={download ? undefined : 'noreferrer'}
                  download={download || undefined}
                >
                  <div className={styles.socialLeft}>
                    <p className={styles.socialLabel}>{label}</p>
                    <p className={styles.socialDesc}>{desc}</p>
                  </div>
                  <div className={styles.socialRight}>
                    <span className={styles.socialHandle}>{handle}</span>
                    <ArrowIcon />
                  </div>
                </a>
              ))}
            </div>
          </section>

        </div>

        {/* ── Availability card ── */}
        <div className={`${styles.availCard} reveal`}>
          <div className={styles.availLeft}>
            <p className={styles.availTitle}>Open to Work</p>
            <p className={styles.availDesc}>
              Looking for internships, freelance work, and full-time roles in
              Full-Stack Development and IoT engineering.
            </p>
          </div>
          <div className={styles.availTags}>
            {['Internship', 'Freelance', 'Full-time', 'Remote'].map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
          <a href={`mailto:${personal.email}`} className="btn btn-primary">
            Send an Email
          </a>
        </div>

      </div>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 12 12" fill="none"
      stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10L10 2M4 2h6v6" />
    </svg>
  )
}