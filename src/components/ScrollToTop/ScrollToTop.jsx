import { useEffect, useRef, useState } from 'react'
import styles from './ScrollToTop.module.css'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const rafId = useRef(0)

  useEffect(() => {
    const calc = () => {
      const next = window.scrollY > 400
      setVisible((prev) => (prev === next ? prev : next))
    }
    const onScroll = () => {
      if (rafId.current) return
      rafId.current = window.requestAnimationFrame(() => {
        rafId.current = 0
        calc()
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    calc()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId.current) window.cancelAnimationFrame(rafId.current)
    }
  }, [])

  const scrollUp = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}
