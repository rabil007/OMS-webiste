import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './PrivacyPolicyPage.module.css'

export function PrivacyPolicyPage() {
  return (
    <Section
      eyebrow="Privacy Policy"
      title="Privacy policy"
      subtitle="This is a placeholder. Paste your official policy here when ready."
    >
      <div className={`card ${styles.card}`}>
        <div className={styles.text}>
          <p>
            Add your company’s privacy policy content here. For production, include details about data
            collection, usage, retention, security, and contact information for privacy requests.
          </p>
        </div>
      </div>
    </Section>
  )
}

