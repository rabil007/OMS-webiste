import { useState, useRef, useEffect } from 'react'
import styles from './OmsChat.module.css'

/* ─── Knowledge Base ──────────────────────────────────────── */
const KB = [
  {
    keys: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'greetings', 'salam'],
    answer: "Hello! 👋 Welcome to **Overseas Marine Services**. I'm your OMS assistant — I can help you with information about our maritime services, crew management, vessel operations, and more. What can I assist you with today?",
  },
  {
    keys: ['service', 'offer', 'provide', 'what do you do', 'solutions'],
    answer: "OMS provides a full suite of maritime solutions:\n\n• **Vessel Management** — operational & maintenance oversight\n• **Crew Management** — recruitment, training & payroll\n• **Ship Repair Support** — sourcing technicians, minimising downtime\n• **Flag State Documentation** — full regulatory compliance\n• **Training Consultancy** — HSE & SIMO certified programs\n• **Travel & Accommodation** — flights, hotels, visas\n• **Transport Management** — IoT-based fleet & crew transfers\n• **Vessel Rentals** — chartering solutions\n\nWould you like details on any specific service?",
  },
  {
    keys: ['crew', 'seafarer', 'recruitment', 'manning', 'sailor', 'mariner'],
    answer: "Our **Crew Management** service covers the full crew lifecycle:\n\n✓ Recruitment & vetting of qualified seafarers\n✓ STCW / certification compliance tracking\n✓ Payroll administration & welfare support\n✓ Visa processing, flight & hotel arrangements\n✓ HSE & SIMO training programs\n✓ 24/7 crew deployment coordination\n\nWe ensure your vessels are always crewed with qualified, compliant professionals. Shall I connect you with our team?",
  },
  {
    keys: ['vessel', 'ship', 'fleet', 'management', 'maintenance', 'charter'],
    answer: "Our **Vessel Management** solutions include:\n\n✓ Full operational management\n✓ Planned maintenance scheduling (PMS)\n✓ ISM / ISPS compliance assurance\n✓ Performance monitoring & reporting\n✓ IoT-integrated vessel tracking\n✓ Chartering & commercial management\n\nWe work with all vessel types across the Gulf and globally. Want to discuss your fleet requirements?",
  },
  {
    keys: ['location', 'office', 'where', 'abu dhabi', 'uae', 'address', 'based'],
    answer: "Our headquarters is located at:\n\n📍 **Office 402, 4th Floor**\nCentro Capital Centre, Al Zumurrud St\nADNEC Area, Abu Dhabi\nP.O. Box 108181, UAE\n\nWe serve clients globally across the Middle East, Asia, and Europe from our Abu Dhabi base. Open Mon–Fri, 9 AM – 5 PM.",
  },
  {
    keys: ['contact', 'email', 'phone', 'call', 'reach', 'touch', 'talk', 'speak'],
    answer: "You can reach us through:\n\n📧 **Email:** info@overseas-ms.com\n📞 **Phone:** +971 2 6714722\n🕐 **Hours:** Mon – Fri, 9 AM – 5 PM\n\nOr visit our [Contact Us](/contact-us) page to send a message directly. Our team typically responds within 1 business day.",
  },
  {
    keys: ['iso', 'certification', 'certified', 'standard', 'compliance', 'regulation'],
    answer: "OMS is fully compliant with international standards:\n\n🏅 **ISO 9001** — Quality Management\n🌿 **ISO 14001** — Environmental Management\n🔒 **ISO 22301** — Business Continuity\n⚠️ **ISO 45001** — Occupational Health & Safety\n\nWe also adhere to **IMO**, **ILO**, **ISM**, **ISPS**, and **STCW** regulations, ensuring your operations meet the highest global compliance benchmarks.",
  },
  {
    keys: ['repair', 'maintenance', 'drydock', 'dry dock', 'technician', 'engineer'],
    answer: "Our **Ship Repair Support** service includes:\n\n✓ Sourcing certified marine technicians\n✓ Overseeing repair & maintenance tasks\n✓ Minimising vessel downtime\n✓ Drydock coordination & supervision\n✓ Spare parts procurement support\n\nWe ensure quality work with minimal operational disruption. Want to get in touch about a specific repair requirement?",
  },
  {
    keys: ['training', 'hse', 'simo', 'course', 'program', 'certificate', 'safety'],
    answer: "Our **Training Consultancy** provides:\n\n✓ HSE (Health, Safety & Environment) programs\n✓ SIMO (Standard Instruction for Marine Operations)\n✓ STCW refresher courses\n✓ Custom onboard training solutions\n✓ Compliance certification support\n\nAll programs are tailored to your fleet's specific operational requirements and regulatory needs.",
  },
  {
    keys: ['transport', 'fleet', 'iot', 'tracking', 'logistics', 'pickup', 'transfer'],
    answer: "Our **IoT-Based Transport Management** includes:\n\n✓ Real-time GPS fleet tracking\n✓ Optimised crew transfer routes\n✓ Port-to-airport-to-hotel transfers\n✓ Automated scheduling & reporting\n✓ Full operational visibility dashboard\n\nOur IoT platform ensures seamless crew logistics with zero guesswork.",
  },
  {
    keys: ['travel', 'hotel', 'accommodation', 'flight', 'visa', 'booking'],
    answer: "Our **Travel & Accommodation** service handles:\n\n✓ Flight bookings for crew & personnel\n✓ Hotel reservations near ports & airports\n✓ Visa arrangement & processing\n✓ Transit coordination\n✓ Emergency travel support 24/7\n\nWe simplify the entire travel logistics chain for marine professionals.",
  },
  {
    keys: ['price', 'cost', 'quote', 'rate', 'fee', 'pricing', 'quotation'],
    answer: "Pricing varies based on the scope of services, fleet size, crew count, and duration of engagement.\n\nFor an accurate quotation, please reach out directly:\n\n📧 info@overseas-ms.com\n📞 +971 2 6714722\n\nOr use our [Contact Us](/contact-us) page — our team will prepare a tailored proposal within 1 business day.",
  },
  {
    keys: ['experience', 'year', 'founded', 'history', 'established', 'how long'],
    answer: "Overseas Marine Services was **established in 2020** in Abu Dhabi, UAE.\n\nOur team brings over **40 years of combined experience** across maritime operations, oil & gas, and offshore support — delivering expertise built over decades to every client engagement.",
  },
  {
    keys: ['partner', 'client', 'customer', 'who do you work with', 'adnoc', 'dsv'],
    answer: "We're proud to be trusted by leading industry names including:\n\n✓ ADNOC Logistics & Services\n✓ DSV\n✓ Jan De Nul Group\n✓ Safeen\n✓ Target Marine\n✓ Zakher Marine International\n\nOMS serves clients across the Middle East, Asia, and Europe — supporting 15+ partners globally.",
  },
  {
    keys: ['software', 'technology', 'platform', 'system', 'erp', 'digital'],
    answer: "OMS leverages cutting-edge maritime technology:\n\n🖥️ **Crew Management Software** — full lifecycle crew operations\n🚢 **Vessel Management System** — IoT-integrated performance tracking\n📊 **ERP Integration** — real-time reporting & compliance dashboards\n📡 **Fleet IoT Platform** — live GPS tracking & route optimisation\n\nOur technology-first approach gives you complete operational visibility at all times.",
  },
  {
    keys: ['career', 'job', 'vacancy', 'hiring', 'work', 'join', 'employment', 'position'],
    answer: "We're always looking for talented maritime professionals to join the OMS team!\n\nOur careers portal is currently under development. In the meantime:\n\n📧 Send your CV to **info@overseas-ms.com** with the subject \"Career Inquiry\"\n\nOr visit our [Careers](/careers) page for more information.",
  },
  {
    keys: ['thank', 'thanks', 'great', 'perfect', 'awesome', 'helpful', 'bye', 'goodbye'],
    answer: "You're welcome! 🌊 Thank you for considering Overseas Marine Services. Feel free to reach out anytime — we're here to support your maritime operations.\n\n📧 info@overseas-ms.com | 📞 +971 2 6714722",
  },
]

function getBotReply(input) {
  const lower = input.toLowerCase().trim()
  for (const entry of KB) {
    if (entry.keys.some((k) => lower.includes(k))) return entry.answer
  }
  return "I don't have a specific answer for that, but our team would be happy to help!\n\n📧 **info@overseas-ms.com**\n📞 **+971 2 6714722**\n\nOr visit our [Contact Us](/contact-us) page and we'll respond within 1 business day."
}

/* ─── Render markdown-like text ────────────────────────────── */
function formatMessage(text) {
  const lines = text.split('\n')
  return lines.map((line, i) => {
    // Bold **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/)
    const formatted = parts.map((p, j) =>
      p.startsWith('**') && p.endsWith('**')
        ? <strong key={j}>{p.slice(2, -2)}</strong>
        : p.includes('[') && p.includes('](')
          ? formatLinks(p, j)
          : <span key={j}>{p}</span>
    )
    return <p key={i} className={styles.msgLine}>{formatted}</p>
  })
}

function formatLinks(text, key) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/)
  return parts.map((p, i) => {
    const match = p.match(/\[([^\]]+)\]\(([^)]+)\)/)
    if (match) {
      return <a key={i} href={match[2]} className={styles.chatLink}>{match[1]}</a>
    }
    return <span key={i}>{p}</span>
  })
}

/* ─── Suggestion chips ──────────────────────────────────────── */
const SUGGESTIONS = [
  'What services do you offer?',
  'Tell me about crew management',
  'Where are you located?',
  'How do I get a quote?',
  'What certifications do you hold?',
]

/* ─── Component ─────────────────────────────────────────────── */
export function OmsChat() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([
    {
      role: 'bot',
      text: "Hello! I'm **OMS Assistant** 🌊\n\nI can help with crew management, vessel services, certifications, pricing, and more. How can I assist you today?",
      id: 0,
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  const idRef = useRef(1)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, typing])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  const sendMessage = (text) => {
    const trimmed = (text || input).trim()
    if (!trimmed) return
    setShowSuggestions(false)
    const userMsg = { role: 'user', text: trimmed, id: idRef.current++ }
    setMsgs((m) => [...m, userMsg])
    setInput('')
    setTyping(true)

    const delay = 800 + Math.random() * 600
    setTimeout(() => {
      const reply = getBotReply(trimmed)
      setMsgs((m) => [...m, { role: 'bot', text: reply, id: idRef.current++ }])
      setTyping(false)
    }, delay)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        className={`${styles.trigger} ${open ? styles.triggerOpen : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open OMS Assistant'}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
            <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none"/>
            <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
          </svg>
        )}
        {!open && <span className={styles.triggerPulse} />}
      </button>

      {/* Chat window */}
      <div className={`${styles.window} ${open ? styles.windowOpen : ''}`} role="dialog" aria-label="OMS Chat Assistant">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerAvatar}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 17h18M3 17l2-8h14l2 8M3 17v2a1 1 0 001 1h16a1 1 0 001-1v-2M8 9V5a1 1 0 011-1h6a1 1 0 011 1v4"/>
            </svg>
          </div>
          <div className={styles.headerInfo}>
            <div className={styles.headerName}>OMS Assistant</div>
            <div className={styles.headerStatus}>
              <span className={styles.statusDot} />
              AI-powered · Maritime Specialist
            </div>
          </div>
          <button className={styles.headerClose} onClick={() => setOpen(false)} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className={styles.messages}>
          {msgs.map((m) => (
            <div key={m.id} className={`${styles.msg} ${m.role === 'user' ? styles.msgUser : styles.msgBot}`}>
              {m.role === 'bot' && (
                <div className={styles.botAvatar}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity=".3"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
                  </svg>
                </div>
              )}
              <div className={styles.bubble}>
                {formatMessage(m.text)}
              </div>
            </div>
          ))}

          {typing && (
            <div className={`${styles.msg} ${styles.msgBot}`}>
              <div className={styles.botAvatar}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity=".3"/>
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
                </svg>
              </div>
              <div className={`${styles.bubble} ${styles.typingBubble}`}>
                <span className={styles.dot} /><span className={styles.dot} /><span className={styles.dot} />
              </div>
            </div>
          )}

          {/* Suggestion chips */}
          {showSuggestions && !typing && (
            <div className={styles.suggestions}>
              {SUGGESTIONS.map((s) => (
                <button key={s} className={styles.chip} onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className={styles.inputRow}>
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about crew, vessels, services…"
            maxLength={300}
          />
          <button
            className={styles.sendBtn}
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            aria-label="Send"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>

        <div className={styles.footer}>
          Powered by OMS AI · <a href="/contact-us" className={styles.footerLink}>Talk to a human →</a>
        </div>
      </div>
    </>
  )
}
