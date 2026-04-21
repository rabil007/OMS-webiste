import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './PrivacyPolicyPage.module.css'
import { PageHero } from '../../components/ui/PageHero/PageHero.jsx'

export function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy policy"
        subtitle="How we handle data and privacy requests."
      />
      <Section>
        <div className={`card ${styles.card}`}>
          <div className={styles.text}>
            <p>
              Add your company’s privacy policy content here. For production, include details about data
              collection, usage, retention, security, and contact information for privacy requests.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

