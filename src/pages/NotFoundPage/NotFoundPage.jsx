import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <div className="container">
      <div className={`card ${styles.card}`}>
        <div className="kicker">404</div>
        <h1 className="h1">Page not found</h1>
        <p className="lead">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>
        <div className={styles.ctas}>
          <Link className="btn btnPrimary" to="/">
            Go to Home
          </Link>
          <Link className="btn" to="/contact-us">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}

