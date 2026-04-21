import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './ServicesPage.module.css'

const sections = [
  {
    eyebrow: 'Crew Management & Supply',
    title: 'Qualified crews, ready to sail',
    subtitle: 'Recruitment, training, certifications, payroll, and welfare programs to keep operations fully staffed and compliant.',
    items: [
      { icon: '👥', category: 'People', title: 'Strategic Recruitment', desc: 'Global sourcing and rigorous vetting to place qualified personnel for each role.' },
      { icon: '💳', category: 'Administration', title: 'Comprehensive Payroll', desc: 'Accurate payroll processing and benefits administration with clear reporting.' },
      { icon: '🧭', category: 'Welfare', title: 'Crew Welfare Programs', desc: 'Support frameworks focused on well-being, retention, and operational readiness.' },
      { icon: '🎓', category: 'Training', title: 'Continuous Training', desc: 'HSE and SIMO-aligned programs with ongoing certification management.' },
    ],
  },
  {
    eyebrow: 'Ship Management',
    title: 'Safe, efficient, compliant vessel operations',
    subtitle: 'End-to-end management covering technical, operational, and commercial aspects to maximize uptime and long-term asset value.',
    items: [
      { icon: '🚢', category: 'Operations', title: 'Vessel Management', desc: 'Maintenance planning, compliance assurance, and performance optimization.' },
      { icon: '🛟', category: 'Safety', title: 'Compliance & Safety Excellence', desc: 'Standards aligned with IMO, STCW, and ISM to support safe operations.' },
      { icon: '🧰', category: 'Support', title: 'Technical & Shore Support', desc: '24/7 guidance, maintenance planning, and operational support from experienced professionals.' },
      { icon: '📋', category: 'Compliance', title: 'Flag State Documentation', desc: 'Documentation support to meet international regulations and flag state requirements.' },
    ],
  },
  {
    eyebrow: 'Marine & Offshore Support Services',
    title: 'Operational support for offshore projects',
    subtitle: 'Skilled manpower, technical services, and marine logistics to support vessels, rigs, and offshore missions in demanding environments.',
    items: [
      { icon: '🔧', category: 'Maintenance', title: 'Ship Repair Support', desc: 'Repair coordination, technician sourcing, and oversight to minimize downtime.' },
      { icon: '📦', category: 'Logistics', title: 'Marine Logistics & Supply Support', desc: 'Transport management and supply coordination across ports, airports, and offshore locations.' },
      { icon: '📡', category: 'Technology', title: 'Transport Management', desc: 'Real-time tracking and optimized routing for stronger operational control.' },
      { icon: '✈️', category: 'Logistics', title: 'Travel & Accommodation', desc: 'Visa arrangements, flight bookings, and hotel accommodations for marine professionals.' },
    ],
  },
]

export function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <div className={styles.pageHero}>
        <img
          src="/images/shutterstock_2528263849-2000.webp"
          srcSet="/images/shutterstock_2528263849-1200.webp 1200w, /images/shutterstock_2528263849-2000.webp 2000w"
          sizes="100vw"
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
            Comprehensive marine solutions tailored for operational reliability,
            compliance, and efficiency across the Oil &amp; Gas and Marine sectors.
          </p>
        </div>
      </div>

      {sections.map((sec) => (
        <Section
          key={sec.eyebrow}
          eyebrow={sec.eyebrow}
          title={sec.title}
          subtitle={sec.subtitle}
        >
          <div className="grid gridCols3">
            {sec.items.map((s) => (
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
      ))}
    </>
  )
}
