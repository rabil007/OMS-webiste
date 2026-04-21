import { Link } from 'react-router-dom'
import styles from './AboutPage.module.css'

const bullets = [
  { icon: '🚢', label: 'Vessel Management' },
  { icon: '👥', label: 'Crew Management' },
  { icon: '🚗', label: 'Transport Management' },
  { icon: '✈️', label: 'Travel & Accommodation' },
  { icon: '📋', label: 'Flag State Documentation' },
  { icon: '🎓', label: 'Training Consultancy' },
  { icon: '⚓', label: 'Vessel Rentals' },
  { icon: '🔧', label: 'Vessel Repair Services' },
]

const compliance = [
  {
    title: 'Regulatory Compliance',
    desc: 'Aligned with IMO, ISM, and ISPS standards with full flag state compliance support.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Operational Reliability',
    desc: 'Preventive maintenance focus designed to reduce downtime and improve fleet performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: 'HSE Management',
    desc: 'Safety-first culture with comprehensive risk and incident control practices.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    title: 'Audit Readiness',
    desc: 'Documented systems and inspection support ensuring readiness for any audit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    title: 'Risk Management',
    desc: 'Systematic hazard identification with practical, proven mitigation strategies.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    title: 'Quality Assurance',
    desc: 'ISO-aligned processes with continuous improvement cycles across all operations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
]

const certifications = [
  { code: 'ISO 9001', label: 'Quality Management', icon: '🏅' },
  { code: 'ISO 14001', label: 'Environmental Management', icon: '🌿' },
  { code: 'ISO 22301', label: 'Business Continuity', icon: '🔒' },
  { code: 'ISO 45001', label: 'Occupational Health & Safety', icon: '⛑️' },
]

const pillars = [
  {
    title: 'Reliable Operations',
    desc: 'Process-driven delivery with clear accountability and real-time reporting at every stage.',
    icon: '⚙️',
  },
  {
    title: 'Technology-First',
    desc: 'IoT and software workflows engineered for complete operational visibility and control.',
    icon: '📡',
  },
  {
    title: 'Partner Mindset',
    desc: 'We adapt to your operational constraints and align with your long-term business goals.',
    icon: '🤝',
  },
]

const milestones = [
  { year: '2020', event: 'OMS founded in Abu Dhabi' },
  { year: '2021', event: 'First offshore crew deployment' },
  { year: '2022', event: 'ISO certifications achieved' },
  { year: '2023', event: 'IoT platform launch' },
  { year: '2024', event: '15+ global partners' },
]

export function AboutPage() {
  return (
    <>
      {/* ── HERO BANNER ─────────────────────────────────── */}
      <div className={styles.pageBanner}>
        <img
          src="/images/shutterstock_1717081216.jpg"
          alt="Large container ship at sea"
          className={styles.bannerBg}
          fetchPriority="high"
          decoding="async"
          aria-hidden="true"
        />
        <div className={styles.bannerBgOverlay} aria-hidden="true" />
        {/* Subtle grid */}
        <div className={styles.bannerGrid2} aria-hidden="true" />

        <div className={styles.bannerContainer}>
          <div className={styles.bannerEyebrow}>
            <span className={styles.bannerDot} />
            About Us
          </div>
          <h1 className={styles.bannerTitle}>
            Empowering the maritime industry{' '}
            <span className={styles.accent}>with innovative solutions</span>
          </h1>
          <p className={styles.bannerLead}>
            Overseas Marine Services LLC (OMS) provides integrated crew management,
            ship management, and offshore support for the Oil &amp; Gas and Marine
            industries. Established in 2020, headquartered in Abu Dhabi.
          </p>

          <div className={styles.bannerStats}>
            <div className={styles.bannerStat}>
              <span className={styles.bannerStatNum}>2020</span>
              <span className={styles.bannerStatLabel}>Founded in Abu Dhabi</span>
            </div>
            <div className={styles.bannerStatDivider} />
            <div className={styles.bannerStat}>
              <span className={styles.bannerStatNum}>40+</span>
              <span className={styles.bannerStatLabel}>Years combined expertise</span>
            </div>
            <div className={styles.bannerStatDivider} />
            <div className={styles.bannerStat}>
              <span className={styles.bannerStatNum}>15+</span>
              <span className={styles.bannerStatLabel}>Global partners</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollHint} aria-hidden="true">
          <div className={styles.scrollLine} />
        </div>
      </div>

      {/* ── WHO WE ARE — Story + Services ───────────────── */}
      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          <div className={styles.storySide}>
            <div className={styles.sectionEyebrow}>Who We Are</div>
            <h2 className={styles.storyTitle}>
              A specialist maritime partner built on <span className={styles.accent}>operational trust</span>
            </h2>
            <p className={styles.storyText}>
              Founded with a vision to close the gap between maritime technology and
              real-world operations, OMS brings together decades of experience across
              vessel management, crew logistics, and offshore engineering.
            </p>
            <p className={styles.storyText}>
              We don't just manage vessels — we build long-term operational partnerships
              built on transparency, accountability, and measurable results.
            </p>
            <Link className={styles.btnPrimary} to="/contact-us">
              Work with us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className={styles.servicesSide}>
            <div className={styles.servicesPanel}>
              <p className={styles.panelLabel}>What We Do</p>
              <ul className={styles.servicesList}>
                {bullets.map((b) => (
                  <li key={b.label} className={styles.serviceItem}>
                    <span className={styles.serviceItemIcon}>{b.icon}</span>
                    <span className={styles.serviceItemLabel}>{b.label}</span>
                    <svg className={styles.serviceItemArrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHIP IMAGE BREAK + MILESTONES ───────────────── */}
      <div className={styles.timelineSection}>
        <div className={styles.timelineImgSide}>
          <img
            src="/images/shutterstock_2528263849.jpg"
            alt="Marine vessel at sea — offshore operations"
            className={styles.timelineImg}
            loading="lazy"
            decoding="async"
          />
          <div className={styles.timelineImgOverlay} />
        </div>
        <div className={styles.timelineCopy}>
          <div className={styles.sectionEyebrow}>Our Journey</div>
          <h2 className={styles.timelineTitle}>Growing stronger with every voyage</h2>
          <div className={styles.milestones}>
            {milestones.map((m, i) => (
              <div key={m.year} className={styles.milestone}>
                <div className={styles.milestoneYear}>{m.year}</div>
                <div className={styles.milestoneLine}>
                  <div className={styles.milestoneDot} />
                  {i < milestones.length - 1 && <div className={styles.milestoneTrack} />}
                </div>
                <div className={styles.milestoneEvent}>{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── COMPLIANCE SECTION ──────────────────────────── */}
      <section className={styles.complianceSection}>
        <div className={styles.innerContainer}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionEyebrow}>Operational Reliability & Compliance</div>
            <h2 className={styles.sectionTitle}>
              Safety-first operations with <span className={styles.accent}>audit-ready systems</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Frameworks designed to minimise risk, enhance performance, and meet
              international maritime standards across every operation.
            </p>
          </div>

          <div className={styles.complianceGrid}>
            {compliance.map((c, i) => (
              <article key={c.title} className={styles.complianceCard} style={{ '--i': i }}>
                <div className={styles.complianceIcon}>{c.icon}</div>
                <h3 className={styles.complianceTitle}>{c.title}</h3>
                <p className={styles.complianceDesc}>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ISO CERTIFICATIONS ──────────────────────────── */}
      <section className={styles.certSection}>
        <div className={styles.innerContainer}>
          <div className={styles.sectionEyebrow} style={{ textAlign: 'center' }}>Certifications</div>
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: 48 }}>
            ISO-aligned management systems
          </h2>
          <div className={styles.certGrid}>
            {certifications.map((c) => (
              <div key={c.code} className={styles.certCard}>
                <span className={styles.certEmoji}>{c.icon}</span>
                <div className={styles.certCode}>{c.code}</div>
                <div className={styles.certLabel}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STANDARDS ───────────────────────────────── */}
      <section className={styles.standardsSection}>
        <div className={styles.innerContainer}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionEyebrow}>Our Standards</div>
            <h2 className={styles.sectionTitle}>
              Compliance you can <span className={styles.accent}>trust</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Aligned with IMO and ILO regulations — built to satisfy vessel flag state
              and local port authority requirements.
            </p>
          </div>
          <div className={styles.pillarsGrid}>
            {pillars.map((p) => (
              <article key={p.title} className={styles.pillarCard}>
                <div className={styles.pillarEmoji}>{p.icon}</div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarText}>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────── */}
      <div className={styles.ctaBand}>
        <img
          src="/images/shutterstock_241591879.jpg"
          alt="Marine anchor — maritime heritage"
          className={styles.ctaBg}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className={styles.ctaOverlay} aria-hidden="true" />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to work with a trusted maritime partner?</h2>
          <p className={styles.ctaText}>
            Let's discuss how OMS can support your vessel operations, crew logistics,
            and offshore requirements.
          </p>
          <div className={styles.ctaActions}>
            <Link className={styles.btnPrimary} to="/contact-us">
              Get in touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link className={styles.btnGhost} to="/services">
              View services
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
