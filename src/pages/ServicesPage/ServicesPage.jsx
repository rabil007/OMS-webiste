import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './ServicesPage.module.css'

const services = [
  {
    icon: '⚓',
    category: 'Chartering',
    title: 'Vessel Chartering',
    desc: 'Reliable chartering solutions and operational support to keep vessels mission-ready.',
  },
  {
    icon: '👥',
    category: 'People',
    title: 'Crew Management',
    desc: 'Recruitment, training, payroll, and welfare for seamless crew operations.',
  },
  {
    icon: '🚢',
    category: 'Operations',
    title: 'Vessel Management',
    desc: 'Maintenance planning, compliance assurance, and performance optimization.',
  },
  {
    icon: '📋',
    category: 'Compliance',
    title: 'Flag State Documentation',
    desc: 'Documentation support to meet international regulations and flag state requirements.',
  },
  {
    icon: '🎓',
    category: 'Training',
    title: 'Training Consultancy Services',
    desc: 'Tailored HSE and SIMO programs to uphold safety and operational standards.',
  },
  {
    icon: '✈️',
    category: 'Logistics',
    title: 'Travel & Accommodation',
    desc: 'Visa arrangements, flight bookings, and hotel accommodations for marine professionals.',
  },
  {
    icon: '🔧',
    category: 'Maintenance',
    title: 'Ship Repair Support',
    desc: 'End-to-end coordination for ship repair tasks to minimize downtime.',
  },
  {
    icon: '📡',
    category: 'Technology',
    title: 'Transport Management',
    desc: 'IoT-based fleet management, real-time tracking, and optimized routing support.',
  },
]

export function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <div className={styles.pageHero}>
        <img
          src="/images/shutterstock_2528263849.jpg"
          alt="Aerial view of marine vessel operations at sea"
          className={styles.heroBg}
          aria-hidden="true"
        />
        <div className={styles.heroBgOverlay} aria-hidden="true" />
        <div className="container">
          <div className="kicker">Our Services</div>
          <h1 className={`h1 ${styles.heroTitle}`}>
            Solutions built for <br />real operations
          </h1>
          <p className={`lead ${styles.heroSubtitle}`}>
            A practical portfolio of services designed for global marine and oil &amp; gas
            environments — from crew welfare to IoT-driven vessel tracking.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid gridCols3">
          {services.map((s) => (
            <article key={s.title} className={`card ${styles.card}`}>
              <div className={styles.cardTop}>
                <div className={styles.iconCircle}>{s.icon}</div>
                <span className={styles.category}>{s.category}</span>
              </div>
              <h2 className={styles.title}>{s.title}</h2>
              <p className={styles.desc}>{s.desc}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
