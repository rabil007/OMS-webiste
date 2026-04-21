import { useMemo, useState } from 'react'
import styles from './ContactPage.module.css'
import { Section } from '../../components/ui/Section/Section.jsx'
import { PageHero } from '../../components/ui/PageHero/PageHero.jsx'

const contactDetails = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+971 2 6714722',
    href: 'tel:+97126714722',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'info@overseas-ms.com',
    href: 'mailto:info@overseas-ms.com',
  },
  {
    icon: '📍',
    label: 'Address',
    value: 'Office 402, 4th Floor, Centro Capital Centre, Al Zumurrud St, ADNEC Area, Abu Dhabi, P.O. Box 108181, UAE',
    href: null,
  },
  {
    icon: '🕐',
    label: 'Work Hours',
    value: '9 AM – 5 PM, Monday – Friday',
    href: null,
  },
]

export function ContactPage() {
  const [status, setStatus] = useState('idle')

  const mailto = useMemo(() => {
    const subject = encodeURIComponent('Inquiry — Overseas Marine Services')
    const body = encodeURIComponent('Hello,\n\nI would like to discuss the following:\n\n- \n\nThanks,')
    return `mailto:info@overseas-ms.com?subject=${subject}&body=${body}`
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your operational needs"
        subtitle="Reach out through the channels below or drop us a message and we'll route you to the right team."
      />
      <Section>
        <div className={`grid gridCols2 ${styles.grid}`}>

          <div className={`card ${styles.card}`}>
            <h2 className={styles.cardTitle}>Contact details</h2>

            <div className={styles.detailsList}>
              {contactDetails.map((d) => (
                <div key={d.label} className={styles.detailRow}>
                  <div className={styles.detailIcon}>{d.icon}</div>
                  <div className={styles.detailBody}>
                    <span className={styles.detailLabel}>{d.label}</span>
                    {d.href ? (
                      <a href={d.href} className={styles.detailValue}>
                        {d.value}
                      </a>
                    ) : (
                      <span className={styles.detailValue}>{d.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.ctas}>
              <a className="btn btnPrimary" href={mailto}>Email us</a>
              <a className="btn" href="tel:+97126714722">Call now</a>
            </div>
          </div>

          <div className={`card ${styles.card}`}>
            <h2 className={styles.cardTitle}>Send a message</h2>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault()
                setStatus('sent')
              }}
            >
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Full name</span>
                <input
                  required
                  className={styles.input}
                  name="name"
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Email address</span>
                <input
                  required
                  className={styles.input}
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Message</span>
                <textarea
                  required
                  className={styles.textarea}
                  name="message"
                  rows={5}
                  placeholder="How can we help you?"
                />
              </label>
              <button className="btn btnPrimary" type="submit">
                Send message
              </button>
              {status === 'sent' && (
                <div className={styles.notice}>
                  ✅ Message received. This is a demo — use "Email us" above for guaranteed delivery.
                </div>
              )}
            </form>
          </div>

        </div>
      </Section>
    </>
  )
}
