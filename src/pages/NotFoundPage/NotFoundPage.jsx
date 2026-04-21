import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'
import { PageHero } from '../../components/ui/PageHero/PageHero.jsx'
import { Section } from '../../components/ui/Section/Section.jsx'

export function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page not found"
        subtitle="The page you’re looking for doesn’t exist or may have been moved."
      />
      <Section>
        <div className={`card ${styles.card}`}>
          <div className={styles.ctas}>
            <Link className="btn btnPrimary" to="/">
              Go to Home
            </Link>
            <Link className="btn" to="/contact-us">
              Contact us
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}

