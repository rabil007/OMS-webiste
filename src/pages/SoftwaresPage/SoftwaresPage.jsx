import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './SoftwaresPage.module.css'

const items = [
  {
    title: 'Crew Management Software',
    desc: 'Streamline recruitment, onboarding, scheduling, payroll, and welfare tracking.',
  },
  {
    title: 'Vessel Management Solution',
    desc: 'Maintenance planning, compliance, documentation, and operational reporting in one place.',
  },
  {
    title: 'IoT Integrations',
    desc: 'Connect vessel data for real-time monitoring and operational visibility.',
  },
]

export function SoftwaresPage() {
  return (
    <Section
      eyebrow="Softwares"
      title="Technology that supports real operations"
      subtitle="A clean, static showcase for now — later we can expand this into product pages and demos."
    >
      <div className="grid gridCols3">
        {items.map((i) => (
          <div key={i.title} className={`card ${styles.card}`}>
            <div className={styles.title}>{i.title}</div>
            <div className={styles.desc}>{i.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

