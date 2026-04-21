import { useEffect, useRef, useState } from 'react'
import styles from './ScrollProgress.module.css'

export function ScrollProgress() {
  const [pct, setPct] = useState(0)
  const rafId = useRef(0)

  useEffect(() => {
    const calc = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const next = total > 0 ? (scrolled / total) * 100 : 0
      setPct((prev) => (Math.abs(prev - next) < 0.1 ? prev : next))
    }
    const onScroll = () => {
      if (rafId.current) return
      rafId.current = window.requestAnimationFrame(() => {
        rafId.current = 0
        calc()
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    calc()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId.current) window.cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <div className={styles.track} aria-hidden="true">
      <div className={styles.fill} style={{ width: `${pct}%` }} />
    </div>
  )
}
