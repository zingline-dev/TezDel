export default function Legal() {
  const sections = [
    { title: 'Terms of Service', icon: '📋', content: 'By accessing and using TezDel, you accept and agree to be bound by the terms and provision of this agreement. TezDel provides a hyperlocal food and grocery delivery platform connecting consumers with local restaurants, home chefs, kirana stores, and delivery captains in Bhubaneswar, Odisha. Users must be 18 years or older to place orders. All food and product descriptions are provided by partner businesses and TezDel is not responsible for inaccuracies. TezDel reserves the right to refuse service, cancel orders, or terminate accounts at our discretion.' },
    { title: 'Privacy Policy', icon: '🔐', content: 'TezDel collects personal information including name, phone number, delivery address, and order history to facilitate deliveries and improve our service. We do not sell your personal data to third parties. Your location data is used only to match you with nearby partners and captains. Payment information is processed securely through certified payment gateways and never stored on our servers. You may request deletion of your account and associated data at any time by contacting hello@tezdel.com.' },
    { title: 'Cookie Policy', icon: '🍪', content: 'TezDel uses cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and personalize content. Essential cookies are required for the platform to function. Analytics cookies help us understand how users interact with our service. You can control cookie preferences through your browser settings, though disabling certain cookies may affect platform functionality.' },
    { title: 'Refund & Cancellation', icon: '↩️', content: 'Orders cancelled within 2 minutes of placement are eligible for a full refund. After preparation has begun, cancellations may not be accepted. In cases of incorrect, missing, or spoiled items, please contact us within 30 minutes of delivery for a refund or replacement. Refunds are processed to the original payment method within 5-7 business days. TezDel reserves the right to assess refund eligibility on a case-by-case basis.' },
    { title: 'Partner Agreement', icon: '🤝', content: 'Restaurants, home chefs, kirana stores, and delivery captains joining the TezDel platform agree to maintain food safety standards, accurate menu listings, and timely order fulfillment. Partners are responsible for FSSAI compliance and local health regulations. TezDel charges a flat monthly fee and does not take a percentage commission from sales. Partners may terminate their agreement with 30 days written notice.' },
    { title: 'ONDC Compliance', icon: '📡', content: 'TezDel operates as an ONDC-compliant seller application. All transactions conducted through the ONDC network are subject to ONDC\'s network policy and buyer protection framework. Disputes arising from ONDC transactions will be resolved through the ONDC grievance redressal mechanism. TezDel is committed to full ONDC compliance as the network evolves.' },
  ];

  return (
    <div className="page-v3">

      {/* Hero */}
      <section className="page-hero-v3" style={{ minHeight: '50vh' }}>
        <div className="page-hero-v3-bg" style={{ backgroundImage: 'linear-gradient(rgba(13,7,6,0.85),rgba(13,7,6,0.95)), url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80)' }} aria-hidden="true" />
        <div className="page-hero-v3-dots" aria-hidden="true" />
        <div className="container page-hero-v3-content">
          <div className="page-hero-v3-tag">
            <span className="page-hero-v3-tag-dot" aria-hidden="true" />
            <span>Legal & Policies</span>
          </div>
          <h1 className="page-hero-v3-title">Transparent.<br /><span className="page-hero-v3-accent">Fair. Local.</span></h1>
          <p className="page-hero-v3-sub">Our legal policies are written to protect you — not confuse you. Last updated: May 2026.</p>
        </div>
      </section>

      {/* Legal Sections */}
      <section className="page-section-v3 page-section-light-v3">
        <div className="container" style={{ maxWidth: '900px' }}>
          {sections.map((s, i) => (
            <div key={s.title} style={{ marginBottom: i < sections.length - 1 ? '40px' : 0, paddingBottom: i < sections.length - 1 ? '40px' : 0, borderBottom: i < sections.length - 1 ? '1px solid #F0E8E4' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div className="why-icon-v3" style={{ background: '#FFF3EE', fontSize: '22px', flexShrink: 0 }}>{s.icon}</div>
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: '22px', fontWeight: 800, color: 'var(--color-text-main)' }}>{s.title}</h2>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>{s.content}</p>
            </div>
          ))}
          <div style={{ marginTop: '48px', background: '#FFF3EE', border: '1px solid #FFD5C4', borderRadius: '14px', padding: '24px', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Questions about any of these policies?</p>
            <a href="mailto:hello@tezdel.com" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none', fontFamily: "'Syne',sans-serif" }}>hello@tezdel.com</a>
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--color-text-main)', padding: '20px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>© 2026 TezDel™ Ltd. All rights reserved. Bhubaneswar, Odisha, India.</p>
      </div>

    </div>
  );
}
