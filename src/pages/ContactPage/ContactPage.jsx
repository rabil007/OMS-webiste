import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ContactPage.module.css'

const contactDetails = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+971 2 671 4722',
    href: 'tel:+97126714722',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'info@overseas-ms.com',
    href: 'mailto:info@overseas-ms.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Address',
    value: 'Office 402, 4th Floor, Centro Capital Centre, Al Zumurrud St, ADNEC Area, Abu Dhabi, P.O. Box 108181, UAE',
    href: 'https://maps.google.com/?q=Centro+Capital+Centre+Abu+Dhabi',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Working Hours',
    value: '9:00 AM – 5:00 PM, Monday to Friday',
    href: null,
  },
]

const reasons = [
  { icon: '⚡', label: 'Fast Response', desc: 'We reply within 1 business day' },
  { icon: '🌐', label: 'Global Reach', desc: 'Supporting operations worldwide' },
  { icon: '🔒', label: 'Confidential', desc: 'All inquiries are handled with discretion' },
]

const subjectOptions = [
  'General Inquiry',
  'Crew Management',
  'Ship Management',
  'Marine & Offshore Support',
  'Travel & Logistics',
  'Training & Consultancy',
  'Partnership Opportunity',
  'Other',
]

export function ContactPage() {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [formData, setFormData] = useState({ name: '', email: '', company: '', subject: '', message: '' })

  const mailto = useMemo(() => {
    const subject = encodeURIComponent('Inquiry — Overseas Marine Services')
    const body = encodeURIComponent('Hello,\n\nI would like to discuss the following:\n\n- \n\nThanks,')
    return `mailto:info@overseas-ms.com?subject=${subject}&body=${body}`
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 800)
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <div className={styles.pageHero}>
        <img
          src="/images/shutterstock_1717081216-2000.webp"
          srcSet="/images/shutterstock_1717081216-1200.webp 1200w, /images/shutterstock_1717081216-2000.webp 2000w"
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
            Contact Us
          </div>
          <h1 className={styles.heroTitle}>
            Let's talk about your{' '}
            <span className={styles.accent}>operational needs</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Reach out through any of the channels below — our team is ready
            to discuss crew management, vessel operations, or offshore support.
          </p>

          {/* Quick reasons */}
          <div className={styles.heroReasons}>
            {reasons.map((r) => (
              <div key={r.label} className={styles.heroReason}>
                <span className={styles.heroReasonIcon}>{r.icon}</span>
                <div>
                  <div className={styles.heroReasonLabel}>{r.label}</div>
                  <div className={styles.heroReasonDesc}>{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <div className={styles.scrollLine} />
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <section className={styles.mainSection}>
        <div className={styles.mainContainer}>

          {/* ── LEFT: Contact details ─────────── */}
          <div className={styles.detailsSide}>
            <div className={styles.sectionEyebrow}>Get in Touch</div>
            <h2 className={styles.detailsTitle}>We're here to help</h2>
            <p className={styles.detailsText}>
              Prefer a direct conversation? Use any of the contacts below.
              For urgent operational matters, call us directly.
            </p>

            <div className={styles.detailsList}>
              {contactDetails.map((d) => (
                <div key={d.label} className={styles.detailCard}>
                  <div className={styles.detailIconWrap}>{d.icon}</div>
                  <div className={styles.detailBody}>
                    <span className={styles.detailLabel}>{d.label}</span>
                    {d.href ? (
                      <a href={d.href} className={styles.detailValue} target={d.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {d.value}
                      </a>
                    ) : (
                      <span className={styles.detailValue}>{d.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick action buttons */}
            <div className={styles.detailActions}>
              <a className={styles.btnPrimary} href={mailto}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email us directly
              </a>
              <a className={styles.btnGhost} href="tel:+97126714722">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Call now
              </a>
            </div>

            {/* Abu Dhabi map embed placeholder */}
            <div className={styles.mapBox}>
              <iframe
                title="OMS Office Location"
                className={styles.mapIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.228!2d54.3773!3d24.4103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI0JzM3LjEiTiA1NMKwMjInMzguMyJF!5e0!3m2!1sen!2sae!4v1!5m2!1sen!2sae"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className={styles.mapOverlay}>
                <a
                  href="https://maps.google.com/?q=Centro+Capital+Centre+Abu+Dhabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapOpenBtn}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ──────────────────── */}
          <div className={styles.formSide}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <div className={styles.formHeaderDot} />
                <div>
                  <h2 className={styles.formTitle}>Send us a message</h2>
                  <p className={styles.formSubtitle}>We'll get back to you within one business day.</p>
                </div>
              </div>

              {status === 'sent' ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className={styles.successTitle}>Message received!</h3>
                  <p className={styles.successText}>
                    Thank you for reaching out. This is a demo form — for guaranteed delivery,
                    use the <a href={mailto} className={styles.successLink}>direct email link</a>.
                    Our team will respond within one business day.
                  </p>
                  <button className={styles.btnPrimary} onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', company: '', subject: '', message: '' }) }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <label className={styles.field}>
                      <span className={styles.fieldLabel}>Full name <span className={styles.required}>*</span></span>
                      <input
                        required
                        className={styles.input}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        autoComplete="name"
                      />
                    </label>
                    <label className={styles.field}>
                      <span className={styles.fieldLabel}>Company</span>
                      <input
                        className={styles.input}
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        autoComplete="organization"
                      />
                    </label>
                  </div>

                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Email address <span className={styles.required}>*</span></span>
                    <input
                      required
                      className={styles.input}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      autoComplete="email"
                    />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Subject</span>
                    <div className={styles.selectWrap}>
                      <select
                        className={styles.select}
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a topic…</option>
                        {subjectOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                      <svg className={styles.selectChevron} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </label>

                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Message <span className={styles.required}>*</span></span>
                    <textarea
                      required
                      className={styles.textarea}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your operational needs or questions…"
                    />
                  </label>

                  <button
                    className={styles.submitBtn}
                    type="submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <>
                        <span className={styles.spinner} aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </>
                    )}
                  </button>

                  <p className={styles.formDisclaimer}>
                    Your information is kept confidential and will only be used to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
