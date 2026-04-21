import { useEffect, useState } from 'react'
import styles from './ScrollProgress.module.css'

export function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const calc = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setPct(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', calc, { passive: true })
    calc()
    return () => window.removeEventListener('scroll', calc)
  }, [])

  return (
    <div className={styles.track} aria-hidden="true">
      <div className={styles.fill} style={{ width: `${pct}%` }} />
    </div>
  )
}
