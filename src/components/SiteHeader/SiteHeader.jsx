import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './SiteHeader.module.css'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/faqs', label: "FAQ's" },
  { to: '/contact-us', label: 'Contact Us' },
]

const CAREERS_URL = 'http://app.overseas-ms.com/careers'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const linkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.row}>
            <NavLink to="/" className={styles.brand} aria-label="Overseas Marine Services" onClick={() => setOpen(false)}>
              <img
                src="/assets/logo.png"
                alt="Overseas Marine Services"
                className={styles.logo}
                width="160"
                height="46"
                decoding="async"
              />
            </NavLink>

            <nav className={styles.nav} aria-label="Primary">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={linkClass}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/careers"
                className={linkClass}
              >
                Careers
              </NavLink>
            </nav>

            <div className={styles.actions}>
              <Link className="btn btnPrimary" to="/contact-us" onClick={() => setOpen(false)}>
                Get in touch
              </Link>
              <button
                className={styles.hamburger}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
              >
                <span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
                <span className={`${styles.bar} ${open ? styles.barMid : ''}`} />
                <span className={`${styles.bar} ${open ? styles.barBot : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className={styles.backdrop}
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-label="Mobile navigation"
      >
        <nav className={styles.drawerNav}>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClass}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/careers"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Careers
          </NavLink>
          <Link
            className={`btn btnPrimary ${styles.drawerCta}`}
            to="/contact-us"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </>
  )
}
