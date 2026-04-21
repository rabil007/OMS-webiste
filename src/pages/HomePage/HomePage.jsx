import { Link } from 'react-router-dom'
import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './HomePage.module.css'

const services = [
  {
    icon: '⚓',
    title: 'Vessel Chartering',
    desc: 'Professional ship management services and reliable chartering solutions across vessel types.',
  },
  {
    icon: '👥',
    title: 'Crew Management',
    desc: 'Recruitment, training, payroll, and welfare to ensure qualified, ready-to-sail crews.',
  },
  {
    icon: '🚢',
    title: 'Vessel Management',
    desc: 'Maintenance planning, compliance assurance, and operational optimization to enhance performance.',
  },
  {
    icon: '📋',
    title: 'Flag State Documentation',
    desc: 'Documentation assistance to keep vessels compliant for smooth global operations.',
  },
  {
    icon: '🎓',
    title: 'Training Consultancy',
    desc: 'Tailored programs (HSE, SIMO) to uphold safety and operational standards.',
  },
  {
    icon: '✈️',
    title: 'Travel & Accommodation',
    desc: 'Visa, flight, and hotel arrangements for marine professionals with minimal friction.',
  },
]

const pillars = [
  {
    num: '01',
    title: 'Proven Expertise',
    desc: 'Over 40 years of combined experience across marine and oil & gas operations.',
  },
  {
    num: '02',
    title: 'Comprehensive Services',
    desc: 'From ship management and crew services to repair support and transport management.',
  },
  {
    num: '03',
    title: 'Cutting‑Edge Technology',
    desc: 'IoT-embedded management and robust software to optimize operations and efficiency.',
  },
  {
    num: '04',
    title: 'Client‑Centric Approach',
    desc: 'We build long-term partnerships through tailored solutions and responsive support.',
  },
]

const stats = [
  { value: '15+', label: 'Global partners' },
  { value: '40+', label: 'Years combined experience' },
  { value: '24/7', label: 'Operational support' },
]

export function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Hero">
        {/* Ambient orb */}
        <div className={styles.orb} aria-hidden="true" />

        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className="kicker">Overseas Marine Services</div>

              <h1 className={`h1 ${styles.headline}`}>
                Your trusted partner in global{' '}
                <span className={styles.accent}>marine solutions</span>
              </h1>

              <p className="lead">
                A comprehensive provider of maritime solutions for the Oil &amp; Gas and
                Marine sectors, built around operational excellence and
                technology‑driven delivery.
              </p>

              <div className={styles.ctas}>
                <Link className="btn btnPrimary" to="/services">
                  Explore services
                </Link>
                <Link className="btn" to="/contact-us">
                  Contact us
                </Link>
              </div>
            </div>

            {/* Right — vessel image */}
            <div className={styles.heroMedia} aria-hidden="true">
              <div className={styles.mediaFrame}>
                <div className={styles.mediaBadge}>
                  <span className={styles.dot} />
                  IoT‑enabled operations
                </div>
                <img
                  src="/assets/hero-bg.png"
                  alt="Marine vessel operations"
                  className={styles.mediaImg}
                />
                <div className={styles.mediaOverlay} />
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className={styles.statsRow}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────── */}
      <Section
        eyebrow="Our Services"
        title="Comprehensive marine solutions tailored for your business"
        subtitle="A focused set of services designed to keep operations compliant, efficient, and predictable."
      >
        <div className="grid gridCols3">
          {services.map((s) => (
            <article key={s.title} className={`card ${styles.serviceCard}`}>
              <div className={styles.iconCircle}>{s.icon}</div>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
            </article>
          ))}
        </div>
        <div className={styles.seeAll}>
          <Link className="btn" to="/services">View all services →</Link>
        </div>
      </Section>

      {/* ─── Mid-page CTA band ────────────────────────────── */}
      <div className={styles.ctaBand}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaCopy}>
              <h2 className={`h2 ${styles.ctaHeadline}`}>
                Ready to optimize your fleet operations?
              </h2>
              <p className={styles.ctaText}>
                Our team is available around the clock. Tell us about your operational
                challenges and we'll build a solution around them.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link className="btn btnPrimary" to="/contact-us">
                Get in touch
              </Link>
              <Link className="btn" to="/about-us">
                Learn about us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Why Choose Us ────────────────────────────────── */}
      <Section
        eyebrow="Why Choose Us"
        title="Trusted by partners around the world"
        subtitle="You're not just getting a provider — you're gaining an operations partner."
        dark
      >
        <div className="grid gridCols2">
          {pillars.map((p) => (
            <article key={p.title} className={styles.pillarCard}>
              <div className={styles.pillarNum}>{p.num}</div>
              <div className={styles.pillarContent}>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
