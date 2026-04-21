import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './LiveVesselTrackingPage.module.css'

export function LiveVesselTrackingPage() {
  return (
    <Section
      eyebrow="Vessel Tracking"
      title="Live vessel tracking"
      subtitle="This page is a placeholder in the static rebuild. We can embed a tracking provider or integrate an API later."
    >
      <div className={`card ${styles.card}`}>
        <div className={styles.title}>Coming soon</div>
        <div className={styles.text}>
          Add your tracking widget here (iframe embed) or build a custom tracking UI with map + search.
        </div>
      </div>
    </Section>
  )
}

