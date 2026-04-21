import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './AboutPage.module.css'

const bullets = [
  { icon: '🚢', label: 'Vessel Management' },
  { icon: '👥', label: 'Crew Management' },
  { icon: '🚗', label: 'Transport Management' },
  { icon: '✈️', label: 'Travel & Accommodation' },
  { icon: '📋', label: 'Flag State Documentation' },
  { icon: '🎓', label: 'Training Consultancy Services' },
  { icon: '⚓', label: 'Vessel Rentals' },
  { icon: '🔧', label: 'Vessel Repair Services' },
]

const pillars = [
  {
    title: 'Reliable Operations',
    desc: 'Process-driven delivery with clear accountability and reporting.',
    icon: '⚙️',
    color: 'rgba(43, 125, 233, 0.14)',
    borderColor: 'rgba(43, 125, 233, 0.32)',
  },
  {
    title: 'Technology-First',
    desc: 'IoT and software workflows designed for visibility and control.',
    icon: '📡',
    color: 'rgba(74, 147, 240, 0.14)',
    borderColor: 'rgba(74, 147, 240, 0.32)',
  },
  {
    title: 'Partner Mindset',
    desc: 'We adapt to your operational constraints and business goals.',
    icon: '🤝',
    color: 'rgba(19, 43, 82, 0.55)',
    borderColor: 'rgba(43, 125, 233, 0.25)',
  },
]

export function AboutPage() {
  return (
    <>
      {/* Page hero / banner */}
      <div className={styles.pageBanner}>
        <div className="container">
          <div className={styles.bannerGrid}>
            <div className={styles.bannerCopy}>
              <div className="kicker">About Us</div>
              <h1 className={`h1 ${styles.bannerTitle}`}>
                Empowering the maritime industry with innovative solutions
              </h1>
              <p className="lead">
                We leverage exclusive technology designed for the maritime sector,
                combining crew and vessel management with IoT capabilities for
                real‑time monitoring and optimized performance.
              </p>
            </div>

            <div className={styles.checklistPanel}>
              <p className={styles.panelLabel}>What we do</p>
              <ul className={styles.checklist}>
                {bullets.map((b) => (
                  <li key={b.label} className={styles.checkItem}>
                    <span className={styles.checkIcon}>{b.icon}</span>
                    <span>{b.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Standards section */}
      <Section
        eyebrow="Our Standards"
        title="Compliance you can trust"
        subtitle="Aligned with IMO and ILO regulations — built to satisfy vessel flag state and local port authority requirements."
        dark
      >
        <div className="grid gridCols3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className={`card ${styles.pillarCard}`}
              style={{ '--chip-bg': p.color, '--chip-border': p.borderColor }}
            >
              <div
                className={styles.pillarIcon}
                style={{ background: p.color, border: `1px solid ${p.borderColor}` }}
              >
                {p.icon}
              </div>
              <h2 className={styles.pillarTitle}>{p.title}</h2>
              <p className={styles.pillarText}>{p.desc}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
