import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './TeamPage.module.css'
import { PageHero } from '../../components/ui/PageHero/PageHero.jsx'

const team = [
  { name: 'Operations Lead', role: 'Vessel Management & Compliance' },
  { name: 'Crew Coordinator', role: 'Recruitment, Training & Welfare' },
  { name: 'Logistics Specialist', role: 'Travel, Transport & Documentation' },
]

export function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Shore support built for real operations"
        subtitle="Experienced roles across vessel management, crew services, logistics, and compliance — supporting delivery 24/7."
      />
      <Section>
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
    </>
  )
}

