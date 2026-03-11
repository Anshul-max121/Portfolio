import { useEffect, useRef, useState } from 'react'

// ── Cursor ──────────────────────────────────────
export function useCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: -100, y: -100 })
  const ring    = useRef({ x: -100, y: -100 })
  const rafId   = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 3}px`
        dotRef.current.style.top  = `${e.clientY - 3}px`
      }
    }

    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.14
      ring.current.y += (pos.current.y - ring.current.y) * 0.14
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x - 14}px`
        ringRef.current.style.top  = `${ring.current.y - 14}px`
      }
      rafId.current = requestAnimationFrame(loop)
    }
    rafId.current = requestAnimationFrame(loop)

    const onOver = (e) => {
      const isHover = e.target.closest('a, button, [data-hover]')
      dotRef.current?.classList.toggle('hover', !!isHover)
      ringRef.current?.classList.toggle('hover', !!isHover)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return { dotRef, ringRef }
}

// ── Scroll Reveal ────────────────────────────────
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .stagger')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  })
}

// ── Page title ───────────────────────────────────
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Anshul Khichi` : 'Anshul Khichi — Portfolio'
  }, [title])
}
