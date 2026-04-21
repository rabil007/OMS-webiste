import { Link } from 'react-router-dom'
import styles from './CareerPage.module.css'

export function CareerPage() {
  return (
    <div className={styles.page}>
      {/* Background */}
      <img
        src="/images/shutterstock_2528263849-2000.webp"
        srcSet="/images/shutterstock_2528263849-1200.webp 1200w, /images/shutterstock_2528263849-2000.webp 2000w"
        sizes="100vw"
        alt=""
        className={styles.bg}
        fetchPriority="high"
        decoding="async"
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        {/* Eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Careers at OMS
        </div>

        {/* Badge */}
        <div className={styles.badge}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          Coming Soon
        </div>

        <h1 className={styles.title}>
          Join the{' '}
          <span className={styles.accent}>OMS Team</span>
        </h1>

        <p className={styles.subtitle}>
          We're building something great. Our careers portal is currently under
          construction — check back soon for exciting opportunities to work with
          a world-class maritime operations team.
        </p>

        {/* Divider */}
        <div className={styles.divider} />

        {/* In the meantime message */}
        <p className={styles.interimText}>
          In the meantime, send your CV directly to our team and we'll get in touch
          when a suitable role opens up.
        </p>

        {/* Actions */}
        <div className={styles.actions}>
          <a
            className={styles.btnPrimary}
            href="mailto:info@overseas-ms.com?subject=Career Inquiry — OMS"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Send your CV
          </a>
          <Link className={styles.btnGhost} to="/contact-us">
            Contact us
          </Link>
        </div>

        {/* Perks preview */}
        <div className={styles.perks}>
          {[
            { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>), label: 'Global Operations' },
            { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>), label: 'Expert Team' },
            { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>), label: 'Growth & Training' },
            { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>), label: 'Safety Culture' },
          ].map((p) => (
            <div key={p.label} className={styles.perk}>
              <div className={styles.perkIcon}>{p.icon}</div>
              <span className={styles.perkLabel}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
