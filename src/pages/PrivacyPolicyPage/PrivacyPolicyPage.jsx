import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './PrivacyPolicyPage.module.css'
import { PageHero } from '../../components/ui/PageHero/PageHero.jsx'

export function PrivacyPolicyPage() {
  const effectiveDate = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

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
            <p className={styles.muted}>Effective date: {effectiveDate}</p>

            <p>
              Overseas Marine Services LLC ("OMS", "we", "us", or "our") respects your privacy. This
              Privacy Policy explains how we collect, use, disclose, and protect information when you
              visit our website or contact us about our services.
            </p>

            <h2 className={styles.h2}>1. Information we collect</h2>
            <ul className={styles.list}>
              <li>
                <strong>Information you provide</strong>: name, email address, phone number, company
                details, message content, and any information you choose to share when you contact us.
              </li>
              <li>
                <strong>Technical and usage data</strong>: approximate location (derived from IP),
                device/browser information, pages viewed, and referral sources.
              </li>
              <li>
                <strong>Cookies and similar technologies</strong>: basic cookies that help the website
                function and measure usage. You can control cookies through your browser settings.
              </li>
            </ul>

            <h2 className={styles.h2}>2. How we use your information</h2>
            <ul className={styles.list}>
              <li>Respond to inquiries and provide quotes or service information.</li>
              <li>Communicate about operations, scheduling, and service delivery.</li>
              <li>Improve website performance, security, and user experience.</li>
              <li>Comply with legal obligations and enforce our terms.</li>
            </ul>

            <h2 className={styles.h2}>3. Legal basis (where applicable)</h2>
            <p>
              We process information to perform services or take steps at your request, for our
              legitimate interests (such as operating and securing the website), and where required, on
              the basis of your consent.
            </p>

            <h2 className={styles.h2}>4. Sharing and disclosure</h2>
            <p>We may share information in the following situations:</p>
            <ul className={styles.list}>
              <li>
                <strong>Service providers</strong>: hosting, analytics, communications tools, and
                vendors who process data on our behalf.
              </li>
              <li>
                <strong>Compliance and protection</strong>: where required by law, regulation, court
                order, or to protect rights, safety, and operations.
              </li>
              <li>
                <strong>Business transactions</strong>: in connection with a merger, acquisition, or
                asset sale, subject to appropriate safeguards.
              </li>
            </ul>

            <h2 className={styles.h2}>5. International transfers</h2>
            <p>
              OMS is headquartered in Abu Dhabi, UAE, and we may work with providers or partners in
              other countries. Where data is transferred internationally, we take reasonable steps to
              ensure appropriate safeguards are in place.
            </p>

            <h2 className={styles.h2}>6. Data retention</h2>
            <p>
              We retain information only as long as necessary for the purposes described above, unless
              a longer retention period is required or permitted by law. Inquiry records are typically
              retained to support ongoing commercial and operational communications.
            </p>

            <h2 className={styles.h2}>7. Security</h2>
            <p>
              We use reasonable administrative, technical, and organizational measures to protect
              information. No method of transmission or storage is completely secure, so we cannot
              guarantee absolute security.
            </p>

            <h2 className={styles.h2}>8. Your rights and choices</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or object to
              certain processing of your information. You can also withdraw consent where processing is
              based on consent.
            </p>

            <h2 className={styles.h2}>9. Children’s privacy</h2>
            <p>
              Our services and website are not directed to children, and we do not knowingly collect
              personal information from children.
            </p>

            <h2 className={styles.h2}>10. Contact us</h2>
            <p>
              For privacy questions or requests, contact us at{' '}
              <a className={styles.link} href="mailto:info@overseas-ms.com">info@overseas-ms.com</a>{' '}
              or call{' '}
              <a className={styles.link} href="tel:+97126714722">+971 2 6714722</a>.
            </p>

            <h2 className={styles.h2}>11. Updates to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated version on
              this page with a revised effective date.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

