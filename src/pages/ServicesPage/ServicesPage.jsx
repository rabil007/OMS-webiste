import { Link } from 'react-router-dom'
import styles from './ServicesPage.module.css'

const serviceSections = [
  {
    id: 'crew',
    eyebrow: 'Crew Management & Supply',
    title: 'Qualified crews, ready to sail',
    subtitle:
      'Recruitment, training, certifications, payroll, and welfare programs to keep operations fully staffed and compliant at every port.',
    image: '/images/shutterstock_2269656513-2000.webp',
    imageSrcSet: '/images/shutterstock_2269656513-1200.webp 1200w, /images/shutterstock_2269656513-2000.webp 2000w',
    imageAlt: 'Marine crew operations',
    imagePosition: 'right',
    items: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
          </svg>
        ),
        category: 'People',
        title: 'Strategic Recruitment',
        desc: 'Global sourcing and rigorous vetting to place qualified personnel for every role and rank.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
        ),
        category: 'Administration',
        title: 'Comprehensive Payroll',
        desc: 'Accurate payroll processing and benefits administration with transparent reporting.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        ),
        category: 'Welfare',
        title: 'Crew Welfare Programs',
        desc: 'Support frameworks focused on well-being, retention, and long-term operational readiness.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        ),
        category: 'Training',
        title: 'Continuous Training',
        desc: 'HSE and SIMO-aligned programs with ongoing certification management and tracking.',
      },
    ],
  },
  {
    id: 'ship',
    eyebrow: 'Ship Management',
    title: 'Safe, efficient, compliant vessel operations',
    subtitle:
      'End-to-end management covering technical, operational, and commercial aspects to maximise uptime and preserve long-term asset value.',
    image: '/images/shutterstock_1843014460-2000.webp',
    imageSrcSet: '/images/shutterstock_1843014460-1200.webp 1200w, /images/shutterstock_1843014460-2000.webp 2000w',
    imageAlt: 'Container ship in port — vessel management',
    imagePosition: 'left',
    items: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 17h18M3 17l2-8h14l2 8M3 17v2a1 1 0 001 1h16a1 1 0 001-1v-2M8 9V5a1 1 0 011-1h6a1 1 0 011 1v4"/>
          </svg>
        ),
        category: 'Operations',
        title: 'Vessel Management',
        desc: 'Maintenance planning, compliance assurance, and performance optimisation across your fleet.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        ),
        category: 'Safety',
        title: 'Compliance & Safety Excellence',
        desc: 'Standards aligned with IMO, STCW, and ISM to support consistently safe operations.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
        ),
        category: 'Support',
        title: 'Technical & Shore Support',
        desc: '24/7 guidance, maintenance planning, and operational support from experienced shore teams.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        ),
        category: 'Compliance',
        title: 'Flag State Documentation',
        desc: 'Documentation support to meet international regulations and flag state requirements globally.',
      },
    ],
  },
  {
    id: 'offshore',
    eyebrow: 'Marine & Offshore Support',
    title: 'Operational support for offshore projects',
    subtitle:
      'Skilled manpower, technical services, and marine logistics to support vessels, rigs, and offshore missions in demanding environments.',
    image: '/images/shutterstock_2668969459-2000.webp',
    imageSrcSet: '/images/shutterstock_2668969459-1200.webp 1200w, /images/shutterstock_2668969459-2000.webp 2000w',
    imageAlt: 'Offshore oil rig at sunset with support vessel',
    imagePosition: 'right',
    items: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
          </svg>
        ),
        category: 'Maintenance',
        title: 'Ship Repair Support',
        desc: 'Repair coordination, technician sourcing, and oversight to minimise downtime.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
        ),
        category: 'Logistics',
        title: 'Marine Logistics & Supply',
        desc: 'Transport management and supply coordination across ports, airports, and offshore sites.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"/>
          </svg>
        ),
        category: 'Technology',
        title: 'Transport Management',
        desc: 'Real-time tracking and optimised routing for stronger end-to-end operational control.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
        ),
        category: 'Logistics',
        title: 'Travel & Accommodation',
        desc: 'Visa arrangements, flight bookings, and hotels for marine professionals worldwide.',
      },
    ],
  },
]

const highlights = [
  { value: '24/7', label: 'Operational Support' },
  { value: '40+', label: 'Years Experience' },
  { value: '100%', label: 'IMO Compliant' },
  { value: '15+', label: 'Global Partners' },
]

export function ServicesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <div className={styles.pageHero}>
        <img
          src="/images/shutterstock_2528263849-2000.webp"
          srcSet="/images/shutterstock_2528263849-1200.webp 1200w, /images/shutterstock_2528263849-2000.webp 2000w"
          sizes="100vw"
          alt="Aerial view of marine vessel operations at sea"
          className={styles.heroBg}
          fetchPriority="high"
          decoding="async"
          aria-hidden="true"
        />
        <div className={styles.heroBgOverlay} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.heroContainer}>
          <div className={styles.heroEyebrow}>
            <span className={styles.heroDot} />
            Our Services
          </div>
          <h1 className={styles.heroTitle}>
            Solutions built for{' '}
            <span className={styles.accent}>real operations</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Comprehensive marine solutions tailored for operational reliability,
            compliance, and efficiency across the Oil &amp; Gas and Marine sectors.
          </p>

          {/* Quick-nav pills */}
          <div className={styles.heroNav}>
            {serviceSections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={styles.heroNavPill}>
                {s.eyebrow}
              </a>
            ))}
          </div>
        </div>

        {/* Highlights strip inside hero */}
        <div className={styles.highlightsStrip}>
          {highlights.map((h) => (
            <div key={h.label} className={styles.highlight}>
              <span className={styles.highlightNum}>{h.value}</span>
              <span className={styles.highlightLabel}>{h.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <div className={styles.scrollLine} />
        </div>
      </div>

      {/* ── SERVICE SECTIONS ─────────────────────────────── */}
      {serviceSections.map((sec, si) => (
        <section
          key={sec.id}
          id={sec.id}
          className={`${styles.serviceSection} ${si % 2 !== 0 ? styles.serviceSectionAlt : ''}`}
        >
          {/* Section intro */}
          <div className={styles.secIntro}>
            <div className={styles.sectionEyebrow}>{sec.eyebrow}</div>
            <h2 className={styles.secTitle}>{sec.title}</h2>
            <p className={styles.secSubtitle}>{sec.subtitle}</p>
          </div>

          {/* Image + cards layout */}
          <div className={`${styles.secLayout} ${sec.imagePosition === 'left' ? styles.secLayoutReverse : ''}`}>
            {/* Photo panel */}
            <div className={styles.secImgWrap}>
              <img
                src={sec.image}
                srcSet={sec.imageSrcSet}
                sizes="(max-width: 859px) 100vw, 50vw"
                alt={sec.imageAlt}
                className={styles.secImg}
                loading="lazy"
                decoding="async"
              />
              <div className={styles.secImgOverlay} />
              <div className={styles.secImgBadge}>
                <span className={styles.secDot} />
                {sec.eyebrow}
              </div>
            </div>

            {/* Cards grid */}
            <div className={styles.cardsGrid}>
              {sec.items.map((item, i) => (
                <article
                  key={item.title}
                  className={styles.card}
                  style={{ '--i': i }}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.iconWrap}>{item.icon}</div>
                    <span className={styles.category}>{item.category}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA BAND ─────────────────────────────────────── */}
      <div className={styles.ctaBand}>
        <img
          src="/images/shutterstock_1405449578-2000.webp"
          srcSet="/images/shutterstock_1405449578-1200.webp 1200w, /images/shutterstock_1405449578-2000.webp 2000w"
          sizes="100vw"
          alt="Container ship at sea"
          className={styles.ctaBg}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className={styles.ctaOverlay} aria-hidden="true" />
        <div className={styles.ctaContent}>
          <div className={styles.sectionEyebrow} style={{ textAlign: 'center' }}>Get Started</div>
          <h2 className={styles.ctaTitle}>
            Ready to streamline your<br />marine operations?
          </h2>
          <p className={styles.ctaText}>
            Talk to our team about your specific operational challenges.
            We'll design a solution built around your needs.
          </p>
          <div className={styles.ctaActions}>
            <Link className={styles.btnPrimary} to="/contact-us">
              Contact us today
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
    </>
  )
}
