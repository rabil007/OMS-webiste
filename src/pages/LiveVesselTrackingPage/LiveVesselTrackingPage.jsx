import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './LiveVesselTrackingPage.module.css'
import { PageHero } from '../../components/ui/PageHero/PageHero.jsx'

export function LiveVesselTrackingPage() {
  return (
    <>
      <PageHero
        eyebrow="Vessel Tracking"
        title="Live vessel tracking"
        subtitle="Real-time visibility for routes and operations. Embed a tracking provider or integrate an API when ready."
      />
      <Section>
        <div className={`card ${styles.card}`}>
          <div className={styles.title}>Coming soon</div>
          <div className={styles.text}>
            Add your tracking widget here (iframe embed) or build a custom tracking UI with map + search.
          </div>
        </div>
      </Section>
    </>
  )
}

