import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const NAV = [
  { to: '/',             label: 'Home',         num: '00' },
  { to: '/about',        label: 'About',        num: '01' },
  { to: '/experience',   label: 'Experience',   num: '02' },
  { to: '/projects',     label: 'Projects',     num: '03' },
  { to: '/skills',       label: 'Skills',       num: '04' },
  { to: '/achievements', label: 'Achievements', num: '05' },
  { to: '/contact',      label: 'Contact',      num: '06' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [scrollDir,  setScrollDir]  = useState('up')
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [indicator,  setIndicator]  = useState({ left: 0, width: 0, opacity: 0 })
  const [hovered,    setHovered]    = useState(null)
  const navRef    = useRef(null)
  const lastY     = useRef(0)
  const location  = useLocation()

  /* Scroll detection + hide-on-scroll-down */
  useEffect(() => {
    const fn = () => {
      const y = window.scrollY
      setScrollDir(y > lastY.current && y > 80 ? 'down' : 'up')
      setScrolled(y > 12)
      lastY.current = y
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* Close mobile menu on route change */
  useEffect(() => { setMenuOpen(false) }, [location])

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* Sliding underline indicator */
  useEffect(() => {
    if (!navRef.current) return
    const active = navRef.current.querySelector(`.${styles.active}`)
    if (active) {
      const navRect  = navRef.current.getBoundingClientRect()
      const linkRect = active.getBoundingClientRect()
      setIndicator({ left: linkRect.left - navRect.left, width: linkRect.width, opacity: 1 })
    } else {
      setIndicator(prev => ({ ...prev, opacity: 0 }))
    }
  }, [location])

  /* Hover indicator follows mouse */
  const handleLinkHover = (e) => {
    if (!navRef.current) return
    const navRect  = navRef.current.getBoundingClientRect()
    const linkRect = e.currentTarget.getBoundingClientRect()
    setHovered({ left: linkRect.left - navRect.left, width: linkRect.width })
  }

  const navClass = [
    styles.nav,
    scrolled  ? styles.scrolled  : '',
    scrollDir === 'down' && !menuOpen ? styles.hidden : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      <header className={navClass}>
        <div className={styles.inner}>

          {/* ── Logo ── */}
          <NavLink to="/" className={styles.logo}>
            <span className={styles.logoMark}>
              <span className={styles.logoMarkInner}>AK</span>
            </span>
            <div className={styles.logoTextWrap}>
              <span className={styles.logoName}>Anshul Khichi</span>
              <span className={styles.logoTagline}>FullStack Developer</span>
            </div>
          </NavLink>

          {/* ── Desktop links ── */}
          <nav
            className={styles.links}
            ref={navRef}
            aria-label="Main navigation"
            onMouseLeave={() => setHovered(null)}
          >
            {/* Hover ghost pill */}
            {hovered && (
              <span
                className={styles.hoverPill}
                style={{ left: hovered.left, width: hovered.width }}
              />
            )}
            {/* Active underline */}
            <span
              className={styles.activePill}
              style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
            />
            {NAV.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
                onMouseEnter={handleLinkHover}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* ── Right side ── */}
          <div className={styles.right}>
            <Link to="/contact" className={styles.hireCta}>
              <span className={styles.hireCtaText}>Get in Touch</span>
              <span className={styles.hireCtaArrow}>↗</span>
            </Link>
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={styles.burgerBar} />
              <span className={styles.burgerBar} />
            </button>
          </div>
        </div>

        {/* ── Scroll progress bar ── */}
        <ScrollProgress />
      </header>

      {/* ── Mobile drawer ── */}
      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.drawerInner}>

          <div className={styles.drawerLinks}>
            {NAV.map(({ to, label, num }, i) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`
                }
                style={{ '--i': i }}
              >
                <span className={styles.drawerLinkNum}>{num}</span>
                <span className={styles.drawerLinkLabel}>{label}</span>
                <span className={styles.drawerLinkArrow}>↗</span>
              </NavLink>
            ))}
          </div>

          <div className={styles.drawerBottom}>
            <Link to="/contact" className={styles.drawerCta}>
              <span>Get in Touch</span>
              <span className={styles.drawerCtaArrow}>↗</span>
            </Link>
            <div className={styles.drawerMeta}>
              <span className={styles.drawerMetaDot} />
              <span>Available for work · Bhilwara, Rajasthan</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Overlay ── */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}

function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div className={styles.progress} aria-hidden="true">
      <div className={styles.progressBar} style={{ width: `${pct}%` }} />
    </div>
  )
}