import { Link } from 'react-router-dom'
import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './HomePage.module.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17h18M3 17l2-8h14l2 8M3 17v2a1 1 0 001 1h16a1 1 0 001-1v-2M8 9V5a1 1 0 011-1h6a1 1 0 011 1v4"/>
      </svg>
    ),
    title: 'Vessel Chartering',
    desc: 'Professional ship management services and reliable chartering solutions across all vessel types and routes.',
    tag: 'Chartering',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><path d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.87"/>
      </svg>
    ),
    title: 'Crew Management',
    desc: 'Recruitment, training, payroll, and welfare to ensure qualified, ready-to-sail crews at every port.',
    tag: 'People',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Vessel Management',
    desc: 'Maintenance planning, compliance assurance, and operational optimization to enhance fleet performance.',
    tag: 'Operations',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Flag State Documentation',
    desc: 'Documentation assistance to keep vessels fully compliant for smooth, uninterrupted global operations.',
    tag: 'Compliance',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: 'Training Consultancy',
    desc: 'Tailored HSE and SIMO programs designed to uphold the highest safety and operational standards.',
    tag: 'Training',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    title: 'Travel & Accommodation',
    desc: 'Visa arrangements, flight bookings, and hotel accommodations for marine professionals, globally.',
    tag: 'Logistics',
  },
]

const pillars = [
  {
    num: '01',
    title: 'Proven Expertise',
    desc: 'Over 40 years of combined experience across marine and oil & gas operations.',
    icon: '🏆',
  },
  {
    num: '02',
    title: 'Comprehensive Services',
    desc: 'From ship management and crew services to repair support and transport.',
    icon: '🔗',
  },
  {
    num: '03',
    title: 'Cutting-Edge Technology',
    desc: 'IoT-embedded management and robust software to optimize vessel efficiency.',
    icon: '📡',
  },
  {
    num: '04',
    title: 'Client-Centric Approach',
    desc: 'Long-term partnerships built through tailored solutions and responsive support.',
    icon: '🤝',
  },
]

const stats = [
  { value: '2020', label: 'Established' },
  { value: '40+', label: 'Years Experience' },
  { value: '24/7', label: 'Technical Support' },
  { value: '100%', label: 'IMO Compliant' },
]

const certified = ['ISO 9001', 'ISO 14001', 'ISO 22301', 'ISO 45001']

export function HomePage() {
  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Hero">
        {/* Full-bleed background photo */}
        <img
          src="/images/shutterstock_1843014460.jpg"
          alt=""
          className={styles.heroBg}
          fetchPriority="high"
          decoding="async"
          aria-hidden="true"
        />
        <div className={styles.heroBgOverlay} aria-hidden="true" />

        {/* Floating grid lines decoration */}
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className={styles.heroEyebrow}>
                <span className={styles.eyebrowDot} />
                Overseas Marine Services
              </div>

              <h1 className={styles.headline}>
                Your trusted partner in{' '}
                <span className={styles.accent}>global marine</span>{' '}
                solutions
              </h1>

              <p className={styles.heroLead}>
                Established in Abu Dhabi, OMS delivers integrated crew management, ship
                management, and offshore support solutions for the Oil&nbsp;&amp;&nbsp;Gas and
                Marine sectors — built around safety, compliance, and operational reliability.
              </p>

              <div className={styles.ctas}>
                <Link className={styles.btnPrimary} to="/services">
                  Explore Services
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link className={styles.btnGhost} to="/contact-us">
                  Contact Us
                </Link>
              </div>

              {/* Trust indicators */}
              <div className={styles.trustBar}>
                <span className={styles.trustLabel}>Certified</span>
                {certified.map((c) => (
                  <span key={c} className={styles.trustChip}>{c}</span>
                ))}
              </div>
            </div>

            {/* Right — vessel image card */}
            <div className={styles.heroMedia}>
              <div className={styles.mediaFrame}>
                <div className={styles.mediaBadge}>
                  <span className={styles.dot} />
                  IoT‑enabled operations
                </div>
                <img
                  src="/images/shutterstock_1405449578.jpg"
                  alt="Container ship at sea — marine vessel operations"
                  className={styles.mediaImg}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className={styles.mediaOverlay} />

                {/* Floating stat card */}
                <div className={styles.floatCard}>
                  <div className={styles.floatCardNum}>24/7</div>
                  <div className={styles.floatCardLabel}>Operational support worldwide</div>
                </div>
              </div>

              {/* Secondary mini image */}
              <div className={styles.mediaSecondary}>
                <img
                  src="/images/shutterstock_2528263849.jpg"
                  alt="Offshore operations"
                  className={styles.mediaSecondaryImg}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.mediaSecondaryOverlay} />
                <div className={styles.mediaSecondaryLabel}>Offshore Operations</div>
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

      {/* ─── SERVICES ───────────────────────────────────────── */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div className={styles.sectionEyebrow}>Our Services</div>
            <h2 className={styles.sectionTitle}>
              Comprehensive marine solutions<br />
              <span className={styles.accent}>tailored for your business</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              A focused portfolio of services designed to keep operations compliant,
              efficient, and predictable — wherever in the world you operate.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <article key={s.title} className={styles.serviceCard} style={{ '--i': i }}>
                <div className={styles.serviceCardInner}>
                  <div className={styles.serviceTop}>
                    <div className={styles.iconWrap}>{s.icon}</div>
                    <span className={styles.serviceTag}>{s.tag}</span>
                  </div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <div className={styles.serviceArrow}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.seeAll}>
            <Link className={styles.btnOutline} to="/services">
              View all services
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURE SPLIT — IoT / Technology ─────────────────── */}
      <div className={styles.featureSplit}>
        <div className={styles.featureImgSide}>
          <img
            src="/images/shutterstock_2269656513.jpg"
            alt="IoT-tracked container ship — aerial view with digital overlay"
            className={styles.featureImg}
            loading="lazy"
            decoding="async"
          />
          <div className={styles.featureImgOverlay} />
          <div className={styles.featureBadge}>
            <span className={styles.dot} />
            Real-time vessel tracking
          </div>
        </div>
        <div className={styles.featureCopy}>
          <div className={styles.sectionEyebrow}>Technology-Driven Operations</div>
          <h2 className={styles.featureTitle}>
            Full visibility at every point in the voyage
          </h2>
          <p className={styles.featureText}>
            Our IoT-embedded management platform delivers live vessel telemetry,
            route optimization, and instant operational alerts — keeping your
            fleet mission-ready across every ocean.
          </p>
          <ul className={styles.featureList}>
            {['Live vessel position & telemetry', 'Automated compliance reporting', 'Predictive maintenance alerts', 'Real-time crew status updates'].map(item => (
              <li key={item} className={styles.featureListItem}>
                <span className={styles.featureCheck}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link className={styles.btnPrimary} to="/services">
            Explore our technology
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* ─── WHY CHOOSE US ──────────────────────────────────── */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div className={styles.sectionEyebrow}>Why Choose Us</div>
            <h2 className={styles.sectionTitle}>
              Trusted by partners <span className={styles.accent}>around the world</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              You're not just getting a service provider — you're gaining a dedicated
              operations partner who adapts to your needs.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {pillars.map((p) => (
              <article key={p.title} className={styles.pillarCard}>
                <div className={styles.pillarTop}>
                  <span className={styles.pillarEmoji}>{p.icon}</span>
                  <span className={styles.pillarNum}>{p.num}</span>
                </div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ───────────────────────────────────────── */}
      <div className={styles.ctaBand}>
        <img
          src="/images/shutterstock_2668969459.jpg"
          alt="Offshore oil rig at sunset"
          className={styles.ctaBandBg}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className={styles.ctaBandOverlay} aria-hidden="true" />
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaCopy}>
              <h2 className={styles.ctaHeadline}>
                Ready to optimize your<br />fleet operations?
              </h2>
              <p className={styles.ctaText}>
                Our team is available around the clock. Tell us about your operational
                challenges and we'll build a solution around them.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link className={styles.btnPrimary} to="/contact-us">
                Get in touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link className={styles.btnGhost} to="/about-us">
                Learn about us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
