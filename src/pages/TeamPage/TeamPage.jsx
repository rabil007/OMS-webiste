import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './TeamPage.module.css'

const team = [
  { name: 'Operations Lead', role: 'Vessel Management & Compliance' },
  { name: 'Crew Coordinator', role: 'Recruitment, Training & Welfare' },
  { name: 'Logistics Specialist', role: 'Travel, Transport & Documentation' },
]

export function TeamPage() {
  return (
    <Section
      eyebrow="Team"
      title="Skillful and professional staff with OMS"
      subtitle="A small snapshot of the roles that keep delivery consistent across engagements."
    >
      <div className="grid gridCols3">
        {team.map((t) => (
          <div key={t.name} className={`card ${styles.card}`}>
            <div className={styles.avatar} aria-hidden="true" />
            <div className={styles.name}>{t.name}</div>
            <div className={styles.role}>{t.role}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

