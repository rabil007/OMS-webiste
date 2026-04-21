import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './HomePage.module.css'

/* ── Animated counter ────────────────────────────────────── */
function AnimCount({ target }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      let start = 0
      const duration = 1400
      const step = (ts) => {
        if (!start) start = ts
        const p = Math.min((ts - start) / duration, 1)
        setCount(Math.floor(p * target))
        if (p < 1) requestAnimationFrame(step)
        else setCount(target)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{count}</span>
}

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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Comprehensive Services',
    desc: 'From ship management and crew services to repair support and transport.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="3" width="6" height="6" rx="1"/><rect x="2" y="15" width="6" height="6" rx="1"/><rect x="16" y="15" width="6" height="6" rx="1"/><path d="M8 6h8M8 18h8M5 9v6M19 9v6"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Cutting-Edge Technology',
    desc: 'IoT-embedded management and robust software to optimize vessel efficiency.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Client-Centric Approach',
    desc: 'Long-term partnerships built through tailored solutions and responsive support.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
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
          src="/images/shutterstock_1843014460-2000.webp"
          srcSet="/images/shutterstock_1843014460-1200.webp 1200w, /images/shutterstock_1843014460-2000.webp 2000w"
          sizes="100vw"
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
                  src="/images/shutterstock_1405449578-2000.webp"
                  srcSet="/images/shutterstock_1405449578-1200.webp 1200w, /images/shutterstock_1405449578-2000.webp 2000w"
                  sizes="(max-width: 859px) 92vw, 520px"
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
                  src="/images/shutterstock_2528263849-1200.webp"
                  srcSet="/images/shutterstock_2528263849-1200.webp 1200w, /images/shutterstock_2528263849-2000.webp 2000w"
                  sizes="(max-width: 859px) 92vw, 520px"
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

      {/* ─── TRUSTED BY ─────────────────────────────────────── */}
      <section className={styles.clientsSection}>
        <div className="container">
          <div className={styles.clientsHead}>
            <span className={styles.clientsDivider} />
            <span className={styles.clientsLabel}>Trusted by industry leaders</span>
            <span className={styles.clientsDivider} />
          </div>
        </div>
        <div className={styles.marqueeWrapper} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {/* Duplicated for seamless infinite loop */}
            {[...Array(2)].map((_, di) => (
              <div key={di} className={styles.marqueeSet}>
                <div className={styles.clientLogo}>
                  <img src="/clients/ADNOC-Offshore.webp" alt="ADNOC Logistics & Services" />
                </div>
                <div className={styles.clientLogo}>
                  <img src="/clients/DSV.webp" alt="DSV" />
                </div>
                <div className={styles.clientLogo}>
                  <img src="/clients/DSV-1-2.webp" alt="Berlitz Offshore & Marine Group" />
                </div>
                <div className={styles.clientLogo}>
                  <img src="/clients/jan-de-nul.webp" alt="Jan De Nul Group" />
                </div>
                <div className={styles.clientLogo}>
                  <img src="/clients/jan-de-nul-1.webp" alt="Safeen" />
                </div>
                <div className={styles.clientLogo}>
                  <img src="/clients/Target.webp" alt="Target" />
                </div>
                <div className={styles.clientLogo}>
                  <img src="/clients/Zaqer.webp" alt="Zakher Marine International" />
                </div>
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
            src="/images/shutterstock_2269656513-2000.webp"
            srcSet="/images/shutterstock_2269656513-1200.webp 1200w, /images/shutterstock_2269656513-2000.webp 2000w"
            sizes="100vw"
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

      {/* ─── OPS DASHBOARD ──────────────────────────────────── */}
      <section className={styles.dashSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div className={styles.sectionEyebrow}>Operations Intelligence</div>
            <h2 className={styles.sectionTitle}>
              Real-time maritime{' '}
              <span className={styles.accent}>operations overview</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Our proprietary platform gives clients full visibility — from crew status
              to vessel compliance — all in one command centre.
            </p>
          </div>

          <div className={styles.dashGrid}>
            {/* KPI strip */}
            <div className={styles.dashKpis}>
              {[
                { val: 40, suffix: '+', label: 'Years Experience', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>) },
                { val: 15, suffix: '+', label: 'Global Partners', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>) },
                { val: 98, suffix: '%', label: 'Compliance Rate', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>) },
                { val: 24, suffix: '/7', label: 'Crew Support', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>) },
              ].map((k) => (
                <div key={k.label} className={styles.kpiCard}>
                  <div className={styles.kpiIcon}>{k.icon}</div>
                  <div className={styles.kpiNum}>
                    <AnimCount target={k.val} />{k.suffix}
                  </div>
                  <div className={styles.kpiLabel}>{k.label}</div>
                </div>
              ))}
            </div>

            {/* Fleet status panel */}
            <div className={styles.dashPanel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelTitle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <path d="M3 17h18M3 17l2-8h14l2 8M3 17v2a1 1 0 001 1h16a1 1 0 001-1v-2M8 9V5a1 1 0 011-1h6a1 1 0 011 1v4"/>
                  </svg>
                  Fleet Status
                </span>
                <span className={styles.panelLive}>
                  <span className={styles.liveDot} /> LIVE
                </span>
              </div>
              {[
                { name: 'MV ADNOC EXPLORER', type: 'Supply Vessel', status: 'Operational', region: 'Gulf of Arabia', progress: 78 },
                { name: 'MV GULF PIONEER',   type: 'Offshore PSV',  status: 'In Transit',  region: 'Arabian Sea',   progress: 45 },
                { name: 'MV OFFSHORE MAX',   type: 'AHTS Vessel',   status: 'At Port',     region: 'Abu Dhabi',     progress: 100 },
                { name: 'MV SEA GUARDIAN',   type: 'Crew Boat',     status: 'Operational', region: 'Musandam',      progress: 62 },
              ].map((v) => (
                <div key={v.name} className={styles.vesselRow}>
                  <div className={styles.vesselInfo}>
                    <div className={styles.vesselName}>{v.name}</div>
                    <div className={styles.vesselMeta}>{v.type} · {v.region}</div>
                  </div>
                  <div className={styles.vesselRight}>
                    <span className={`${styles.statusBadge} ${styles[`status${v.status.replace(' ', '')}`]}`}>
                      {v.status}
                    </span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ '--w': `${v.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Crew & compliance side panel */}
            <div className={styles.dashSide}>
              <div className={styles.sideCard}>
                <div className={styles.sideCardTitle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                  Crew Deployment
                </div>
                <div className={styles.crewStats}>
                  {[
                    { label: 'Active at sea', val: 247, color: '#22c55e' },
                    { label: 'In transit',    val: 38,  color: '#f59e0b' },
                    { label: 'On leave',       val: 91,  color: '#4A93F0' },
                  ].map((c) => (
                    <div key={c.label} className={styles.crewStat}>
                      <div className={styles.crewDot} style={{ background: c.color }} />
                      <div className={styles.crewLabel}>{c.label}</div>
                      <div className={styles.crewVal} style={{ color: c.color }}>{c.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.sideCard}>
                <div className={styles.sideCardTitle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Compliance Score
                </div>
                <div className={styles.scoreRing}>
                  <svg viewBox="0 0 100 100" className={styles.ringChart}>
                    <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(43,125,233,0.10)" strokeWidth="8"/>
                    <circle cx="50" cy="50" r="38" fill="none" stroke="url(#scoreGrad)" strokeWidth="8"
                      strokeDasharray="239" strokeDashoffset="14"
                      strokeLinecap="round" transform="rotate(-90 50 50)"/>
                    <defs>
                      <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e"/>
                        <stop offset="100%" stopColor="#4A93F0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className={styles.ringInner}>
                    <div className={styles.ringScore}>98%</div>
                    <div className={styles.ringLabel}>ISO Ready</div>
                  </div>
                </div>
                <div className={styles.complianceList}>
                  {['ISO 9001','ISO 14001','ISO 22301','ISO 45001'].map((c) => (
                    <div key={c} className={styles.complianceItem}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="11" height="11">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className={styles.dashDisclaimer}>
            * Dashboard data is illustrative. Client-facing portal available upon engagement.
          </p>
        </div>
      </section>

      {/* ─── CTA BAND ───────────────────────────────────────── */}

      <div className={styles.ctaBand}>
        <img
          src="/images/shutterstock_2668969459-2000.webp"
          srcSet="/images/shutterstock_2668969459-1200.webp 1200w, /images/shutterstock_2668969459-2000.webp 2000w"
          sizes="100vw"
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
