import { Link } from 'react-router-dom'
import styles from './SiteFooter.module.css'

const quickLinks = [
  { to: '/about-us', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/faqs', label: "FAQ's" },
  { to: '/team', label: 'Our Team' },
  { to: '/contact-us', label: 'Contact' },
]

const usefulLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-conditions', label: 'Terms & Conditions' },
  { to: '/live-vessel-tracking', label: 'Vessel Tracking' },
  { to: '/softwares', label: 'Softwares' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Top four-column grid */}
        <div className={styles.top}>
          {/* Col 1: Brand */}
          <div className={styles.brand}>
            <img
              src="/assets/logo.png"
              alt="Overseas Marine Services"
              className={styles.logo}
              width="160"
              height="46"
            />
            <p className={styles.tagline}>
              An ultimate marine solutions stop for all your maritime needs across the globe.
            </p>
            <div className={styles.socials}>
              <a
                className={styles.socialLink}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                className={styles.socialLink}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <p className={styles.colTitle}>Quick Links</p>
            <ul className={styles.list}>
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={styles.link}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Useful links */}
          <div>
            <p className={styles.colTitle}>Resources</p>
            <ul className={styles.list}>
              {usefulLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={styles.link}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className={styles.colTitle}>Contact</p>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span>
                  Office 402, 4th Floor, Centro Capital Centre, Al Zumurrud St, ADNEC Area, Abu Dhabi, P.O. Box 108181, UAE
                </span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <a className={styles.link} href="mailto:info@overseas-ms.com">
                  info@overseas-ms.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <a className={styles.link} href="tel:+97126714722">
                  +971 2 6714722
                </a>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <span>Mon – Fri, 9 AM – 5 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span>© {year} Overseas Marine Services. All rights reserved.</span>
          <div className={styles.legalLinks}>
            <Link to="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
            <Link to="/terms-conditions" className={styles.legalLink}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
