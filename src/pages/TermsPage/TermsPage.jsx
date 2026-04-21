import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './TermsPage.module.css'

export function TermsPage() {
  return (
    <Section
      eyebrow="Terms & Conditions"
      title="Terms and conditions"
      subtitle="This is a placeholder. Paste your official terms here when ready."
    >
      <div className={`card ${styles.card}`}>
        <div className={styles.text}>
          <p>
            Add your company’s terms and conditions here. For production, include service scope,
            liabilities, governing law, payment terms, and dispute resolution clauses as appropriate.
          </p>
        </div>
      </div>
    </Section>
  )
}

