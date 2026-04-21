import { Section } from '../../components/ui/Section/Section.jsx'
import styles from './TermsPage.module.css'
import { PageHero } from '../../components/ui/PageHero/PageHero.jsx'

export function TermsPage() {
  const effectiveDate = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Terms and conditions"
        subtitle="Terms that apply to our services, website use, and engagements."
      />
      <Section>
        <div className={`card ${styles.card}`}>
          <div className={styles.text}>
            <p className={styles.muted}>Effective date: {effectiveDate}</p>

            <p>
              These Terms &amp; Conditions ("Terms") govern your access to and use of the Overseas Marine
              Services LLC ("OMS", "we", "us", or "our") website and any inquiries you submit through it.
              By accessing or using this website, you agree to these Terms.
            </p>

            <h2 className={styles.h2}>1. Website use</h2>
            <ul className={styles.list}>
              <li>You may use the website for lawful purposes only.</li>
              <li>You must not attempt to disrupt, damage, or gain unauthorized access to the website or systems.</li>
              <li>You must not upload or transmit harmful code, spam, or malicious content.</li>
            </ul>

            <h2 className={styles.h2}>2. Information on the website</h2>
            <p>
              The website content is provided for general information about OMS and our services. Content
              may change without notice. The website may include placeholders or future-looking service
              descriptions that are subject to availability and engagement terms.
            </p>

            <h2 className={styles.h2}>3. No professional advice</h2>
            <p>
              Nothing on this website constitutes technical, legal, regulatory, or commercial advice. You
              should obtain appropriate professional advice before acting on any information from the
              website.
            </p>

            <h2 className={styles.h2}>4. Quotes and engagements</h2>
            <p>
              Any quote, proposal, scope, or timeline is not binding unless confirmed in writing by OMS.
              Services are provided under separate written agreements and operational documentation.
            </p>

            <h2 className={styles.h2}>5. Intellectual property</h2>
            <p>
              The website and its content (including text, graphics, logos, and design) are owned by or
              licensed to OMS and protected by applicable intellectual property laws. You may not copy,
              reproduce, modify, distribute, or create derivative works without our prior written
              permission.
            </p>

            <h2 className={styles.h2}>6. Third-party links</h2>
            <p>
              The website may contain links to third-party websites. OMS is not responsible for third-party
              content, policies, or practices. Access third-party sites at your own risk.
            </p>

            <h2 className={styles.h2}>7. Disclaimer of warranties</h2>
            <p>
              The website is provided on an "as is" and "as available" basis. To the maximum extent
              permitted by law, OMS disclaims all warranties, express or implied, including merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>

            <h2 className={styles.h2}>8. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, OMS will not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits, revenue, data, or
              goodwill arising from or related to your use of the website.
            </p>

            <h2 className={styles.h2}>9. Privacy</h2>
            <p>
              Our collection and use of personal information is described in our{' '}
              <a className={styles.link} href="/privacy-policy">Privacy Policy</a>.
            </p>

            <h2 className={styles.h2}>10. Governing law</h2>
            <p>
              These Terms are governed by the laws applicable in Abu Dhabi, United Arab Emirates, without
              regard to conflict-of-law principles.
            </p>

            <h2 className={styles.h2}>11. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. We will post the updated version on this page
              with a revised effective date.
            </p>

            <h2 className={styles.h2}>12. Contact</h2>
            <p>
              For questions about these Terms, contact us at{' '}
              <a className={styles.link} href="mailto:info@overseas-ms.com">info@overseas-ms.com</a>{' '}
              or call{' '}
              <a className={styles.link} href="tel:+97126714722">+971 2 6714722</a>.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

