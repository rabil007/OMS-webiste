import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './TermsPage.module.css'
import { PageHero } from '../../components/ui/PageHero/PageHero.jsx'

export function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Terms and conditions"
        subtitle="Terms that apply to our services, website use, and engagements."
      />
      <Section>
        <div className={`card ${styles.card}`}>
          <div className={styles.text}>
            <p>
              Add your company’s terms and conditions here. For production, include service scope,
              liabilities, governing law, payment terms, and dispute resolution clauses as appropriate.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

