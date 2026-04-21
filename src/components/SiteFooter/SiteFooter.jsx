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
                in
              </a>
              <a
                className={styles.socialLink}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                𝕏
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
                <span className={styles.contactIcon}>📍</span>
                <span>
                  Office 402, 4th Floor, Centro Capital Centre, Al Zumurrud St, ADNEC Area, Abu Dhabi, P.O. Box 108181, UAE
                </span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <a className={styles.link} href="mailto:info@overseas-ms.com">
                  info@overseas-ms.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a className={styles.link} href="tel:+97126714722">
                  +971 2 6714722
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🕐</span>
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
