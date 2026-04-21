import { useState } from 'react'
import styles from './FaqsPage.module.css'
import { Section } from '../../components/ui/Section/Section.jsx'

const faqs = [
  {
    q: 'Which regions do you operate in?',
    a: 'We support maritime operations globally, with a strong base in Abu Dhabi, UAE. Our network spans across key maritime hubs in the Middle East, Asia, and Europe.',
  },
  {
    q: 'Do you provide crew recruitment and training?',
    a: 'Yes. Our crew management covers end-to-end recruitment, onboarding, tailored training programs (including HSE and SIMO), payroll administration, and ongoing welfare support.',
  },
  {
    q: 'Can you help with compliance and documentation?',
    a: 'Yes. We assist with flag state documentation and align all operations to IMO and ILO regulatory standards, ensuring smooth port authority clearances globally.',
  },
  {
    q: 'Do you support travel logistics for crew?',
    a: 'Yes. We can arrange visas, international flights, hotel accommodations, and ground pickup/drop logistics for crew members worldwide.',
  },
  {
    q: 'What technology do you use for vessel management?',
    a: 'We utilize IoT-embedded management systems for real-time vessel tracking, performance monitoring, and predictive maintenance — integrated into a centralized operational dashboard.',
  },
  {
    q: 'How can I get a quote or start a conversation?',
    a: 'Reach out via our Contact page or email us directly at info@overseas-ms.com. We typically respond within one business day.',
  },
]

export function FaqsPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <Section
      eyebrow="FAQ's"
      title="Answers to common questions"
      subtitle="If you need something specific, contact us and we'll route you to the right team."
    >
      <div className={styles.list}>
        {faqs.map((f, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={f.q}
              className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span>{f.q}</span>
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} aria-hidden="true">
                  +
                </span>
              </button>
              <div
                className={styles.answer}
                style={{ maxHeight: isOpen ? '300px' : '0' }}
              >
                <p className={styles.answerText}>{f.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
