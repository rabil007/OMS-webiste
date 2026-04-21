import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './FaqsPage.module.css'

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'operations', label: 'Operations' },
  { id: 'crew', label: 'Crew & People' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'technology', label: 'Technology' },
]

const faqs = [
  {
    category: 'operations',
    q: 'Which regions do you operate in?',
    a: 'We support maritime operations globally, with a strong operational base in Abu Dhabi, UAE. Our network spans key maritime hubs across the Middle East, Asia, and Europe — enabling seamless crew deployment and vessel management worldwide.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
  {
    category: 'crew',
    q: 'Do you provide crew recruitment and training?',
    a: 'Yes. Our crew management covers end-to-end recruitment, onboarding, and tailored training programs — including HSE and SIMO certifications. We also handle payroll administration, certification renewal tracking, and ongoing welfare support to ensure crew readiness at all times.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    category: 'compliance',
    q: 'Can you help with compliance and documentation?',
    a: 'Yes. We assist with flag state documentation and align all operations to IMO and ILO regulatory standards. Our compliance team ensures smooth port authority clearances globally, including STCW, ISM, and ISPS code adherence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    category: 'crew',
    q: 'Do you support travel logistics for crew?',
    a: 'Yes. We handle the full travel journey for crew members — including visa applications, international flight bookings, hotel accommodations, and ground transport (pickup and drop). Our logistics team coordinates globally to ensure timely crew changes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    category: 'technology',
    q: 'What technology do you use for vessel management?',
    a: 'We utilise IoT-embedded management systems for real-time vessel tracking, performance monitoring, and predictive maintenance alerts. All data is integrated into a centralised operational dashboard, giving vessel owners complete situational awareness at any time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2"/>
        <path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"/>
      </svg>
    ),
  },
  {
    category: 'operations',
    q: 'Do you provide vessel repair and maintenance support?',
    a: 'Yes. We coordinate ship repair operations including technician sourcing, dry-dock supervision, and spare parts logistics — all designed to minimise vessel downtime and get your fleet back operational as quickly as possible.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    category: 'compliance',
    q: 'Are you ISO certified?',
    a: 'Yes. OMS holds ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 22301 (Business Continuity), and ISO 45001 (Occupational Health & Safety) certifications — reflecting our commitment to international best practices across all operations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    category: 'operations',
    q: 'How can I get a quote or start a conversation?',
    a: 'Reach out via our Contact page or email us directly at info@overseas-ms.com. Our team typically responds within one business day. For urgent operational requirements, please indicate in your message and we will prioritise your request.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
]

export function FaqsPage() {
  const [openIndex, setOpenIndex] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  const filtered = activeCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory)

  return (
    <>
      {/* ── HERO ───────────────────────────────────────── */}
      <div className={styles.pageHero}>
        <img
          src="/images/shutterstock_1405449578-2000.webp"
          srcSet="/images/shutterstock_1405449578-1200.webp 1200w, /images/shutterstock_1405449578-2000.webp 2000w"
          sizes="100vw"
          alt=""
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
            Frequently Asked Questions
          </div>
          <h1 className={styles.heroTitle}>
            Answers to your{' '}
            <span className={styles.accent}>maritime questions</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Everything you need to know about our services, crew management, compliance,
            and technology. Can't find what you're looking for?{' '}
            <Link to="/contact-us" className={styles.heroLink}>Contact our team.</Link>
          </p>

          {/* Mini stats */}
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{faqs.length}</span>
              <span className={styles.heroStatLabel}>Questions answered</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>24h</span>
              <span className={styles.heroStatLabel}>Response time</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>24/7</span>
              <span className={styles.heroStatLabel}>Support available</span>
            </div>
          </div>
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <div className={styles.scrollLine} />
        </div>
      </div>

      {/* ── FAQ SECTION ────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>

          {/* Category filter tabs */}
          <div className={styles.filterBar} role="tablist" aria-label="FAQ categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`${styles.filterTab} ${activeCategory === cat.id ? styles.filterTabActive : ''}`}
                onClick={() => { setActiveCategory(cat.id); setOpenIndex(null) }}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <span className={styles.tabCount}>
                    {cat.id === 'all' ? faqs.length : faqs.filter(f => f.category === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Accordion list */}
          <div className={styles.accordionList}>
            {filtered.map((f, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={f.q}
                  className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}
                  style={{ '--i': i }}
                >
                  <button
                    className={styles.accordionBtn}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.accordionIconWrap}>
                      {f.icon}
                    </div>
                    <span className={styles.accordionQuestion}>{f.q}</span>
                    <span className={`${styles.accordionChevron} ${isOpen ? styles.accordionChevronOpen : ''}`} aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </span>
                  </button>

                  <div
                    className={styles.accordionBody}
                    style={{ maxHeight: isOpen ? '400px' : '0' }}
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.accordionAnswer}>
                      <p className={styles.accordionText}>{f.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <p>No questions found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS CTA ───────────────────── */}
      <div className={styles.ctaBand}>
        <img
          src="/images/shutterstock_2668969459-2000.webp"
          srcSet="/images/shutterstock_2668969459-1200.webp 1200w, /images/shutterstock_2668969459-2000.webp 2000w"
          sizes="100vw"
          alt=""
          className={styles.ctaBg}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className={styles.ctaOverlay} aria-hidden="true" />
        <div className={styles.ctaContent}>
          <div className={styles.ctaIconWrap}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
          <h2 className={styles.ctaTitle}>Still have questions?</h2>
          <p className={styles.ctaText}>
            Our maritime operations team is ready to answer anything not covered here.
            We typically reply within one business day.
          </p>
          <div className={styles.ctaActions}>
            <Link className={styles.btnPrimary} to="/contact-us">
              Contact our team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a className={styles.btnGhost} href="mailto:info@overseas-ms.com">
              info@overseas-ms.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
