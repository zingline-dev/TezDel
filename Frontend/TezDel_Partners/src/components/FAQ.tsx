import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'How do I join TezDel as a partner?', a: 'Fill out the registration form at the bottom of this page and our onboarding team will contact you within 24 hours to guide you through the process step by step.' },
  { q: 'Is there any joining fee?', a: 'TezDel offers affordable and transparent onboarding depending on partner category. Restaurants pay a flat monthly subscription. Home chefs, kirana stores, and delivery captains have category-specific terms — all with zero surprise fees.' },
  { q: 'Which areas does TezDel operate in?', a: 'We currently operate across key zones in Bhubaneswar including Saheed Nagar, Patia, Chandrasekharpur, Nayapalli, Jaydev Vihar, and more. Expansion across Odisha including Cuttack, Rourkela, and Sambalpur is planned for 2026.' },
  { q: 'How are payments settled?', a: 'Payments are processed digitally with transparent tracking and reporting. Restaurants receive settlements weekly. Home chefs and kirana partners can opt for daily or weekly payouts. Captains get weekly earnings with incentive bonuses.' },
  { q: 'Do I need technical knowledge?', a: 'No technical knowledge is required. TezDel provides complete onboarding assistance, training, and ongoing support. Our partner app is intuitive and designed for everyday use.' },
  { q: 'What is the commission structure?', a: 'TezDel charges zero commissions per order. Restaurants pay a flat monthly subscription. This means you keep 100% of every order\'s value — we help you earn more, not take a cut from your hard work.' }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: 'clamp(3rem,6vw,5rem) 0 clamp(2rem,4vw,4rem)', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem,6vw,6rem)' }}>
          <div style={{ color: 'var(--color-primary)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}>Got Questions?</div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,3.2rem)', fontWeight: '900', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
          <p style={{ fontSize: 'clamp(1rem,1.5vw,1.15rem)', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>Everything you need to know before joining the TezDel partner network.</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', border: openIndex === i ? '1px solid rgba(255,61,0,0.3)' : '1px solid rgba(0,0,0,0.05)', overflow: 'hidden', transition: 'border-color 0.3s' }}>
              <button
                className="faq-item"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ width: '100%', padding: 'clamp(1.2rem,2vw,2rem) clamp(1.2rem,2.5vw,2.5rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}
              >
                <span style={{ fontSize: 'clamp(0.95rem,1.3vw,1.05rem)', fontWeight: '700', color: 'var(--color-secondary)', lineHeight: '1.4' }}>{faq.q}</span>
                <ChevronDown size={20} style={{ color: 'var(--color-primary)', flexShrink: 0, transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }} />
              </button>
              {openIndex === i && (
                <div style={{ padding: '0 clamp(1.2rem,2.5vw,2.5rem) clamp(1.2rem,2vw,2rem)' }}>
                  <p style={{ fontSize: 'clamp(0.9rem,1.2vw,1rem)', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
