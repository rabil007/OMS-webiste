import styles from './Section.module.css'

export function Section({ eyebrow, title, subtitle, children, align = 'left', dark = false }) {
  return (
    <section className={`${styles.section} ${dark ? styles.dark : ''}`}>
      <div className="container">
        {(eyebrow || title || subtitle) && (
          <div className={`${styles.header} ${align === 'center' ? styles.center : ''}`}>
            {eyebrow && <div className="kicker">{eyebrow}</div>}
            {title && <h2 className="h2">{title}</h2>}
            {subtitle && <p className="lead">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
