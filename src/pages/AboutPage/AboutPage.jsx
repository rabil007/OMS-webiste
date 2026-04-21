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

const compliance = [
  { title: 'Regulatory compliance', desc: 'Aligned with IMO, ISM, and ISPS standards with flag state compliance support.' },
  { title: 'Operational reliability', desc: 'Preventive maintenance focus designed to reduce downtime and improve performance.' },
  { title: 'HSE management', desc: 'Safety-first culture with risk and incident control practices.' },
  { title: 'Audit readiness', desc: 'Documented systems and inspection support for audits and reviews.' },
  { title: 'Risk management', desc: 'Hazard identification with practical mitigation strategies.' },
  { title: 'Quality assurance', desc: 'ISO-aligned processes with continuous improvement.' },
]

const certifications = ['ISO 9001', 'ISO 14001', 'ISO 22301', 'ISO 45001']

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
        <img
          src="/images/shutterstock_1717081216-2000.webp"
          srcSet="/images/shutterstock_1717081216-1200.webp 1200w, /images/shutterstock_1717081216-2000.webp 2000w"
          sizes="100vw"
          alt="Large container ship at sea"
          className={styles.bannerBg}
          aria-hidden="true"
        />
        <div className={styles.bannerBgOverlay} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.bannerGrid}>
            <div className={styles.bannerCopy}>
              <div className="kicker">About Us</div>
              <h1 className={`h1 ${styles.bannerTitle}`}>
                Empowering the maritime industry with innovative solutions
              </h1>
              <p className="lead">
                Overseas Marine Services LLC (OMS) provides integrated crew management,
                ship management, and offshore support solutions for the Oil &amp; Gas and
                Marine industries. Established in 2020 and headquartered in Abu Dhabi,
                we support vessel owners and offshore contractors with qualified manpower,
                technical management, and end-to-end operational services.
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

      <Section
        eyebrow="Operational Reliability & Compliance"
        title="Safety-first operations with audit-ready systems"
        subtitle="Frameworks designed to minimize risk, enhance performance, and meet international maritime standards."
      >
        <div className="grid gridCols3">
          {compliance.map((c) => (
            <article key={c.title} className="card" style={{ padding: 28 }}>
              <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text-strong)' }}>{c.title}</h2>
              <p style={{ margin: '10px 0 0', color: 'var(--ink-muted)', lineHeight: 1.65, fontSize: 14 }}>{c.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Certifications"
        title="ISO-aligned management systems"
        subtitle="Certifications referenced in the company profile."
        dark
      >
        <div className="grid gridCols4">
          {certifications.map((c) => (
            <div key={c} className="card" style={{ padding: 22, textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--brand-light)' }}>
                {c}
              </div>
            </div>
          ))}
        </div>
      </Section>

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
