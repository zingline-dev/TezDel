import { Link } from 'react-router-dom';

export default function Investor() {
  const metrics = [
    { label: 'Market CAGR', value: '17%', desc: 'Quick commerce growth in Tier-2 cities' },
    { label: 'Q-Comm Market', value: '$5.38B', desc: 'Projected Indian market 2025' },
    { label: 'Breakeven', value: '800', desc: 'Daily orders per zone needed' },
    { label: 'Partner LTV', value: '4.5x', desc: 'Vs national platform average' },
  ];

  const pillars = [
    { icon: '⚡', title: 'Hyperlocal Moat', desc: 'Deep neighbourhood networks that national players cannot replicate without years of local trust-building.' },
    { icon: '📡', title: 'ONDC-Native', desc: 'Built on ONDC from day one. As ONDC grows, TezDel grows with a structural advantage over late adopters.' },
    { icon: '🏪', title: 'Kirana Integration', desc: 'Embedded into the existing kirana economy — the most resilient distribution network in India.' },
    { icon: '🌱', title: 'Zero Commission', desc: 'Our ₹999/mo flat model creates extreme loyalty and switching costs that commission-based rivals can\'t match.' },
    { icon: '👩‍🍳', title: 'Home Chef Network', desc: 'An entirely untapped supply category — authentic home cooking — that no delivery platform has successfully operationalized.' },
    { icon: '🗺️', title: 'Expansion Playbook', desc: 'Bhubaneswar-proven model ready to replicate across Cuttack, Rourkela, Berhampur and other Odisha Tier-2 cities.' },
  ];

  return (
    <div className="page-v3">

      {/* Hero */}
      <section className="page-hero-v3">
        <div className="page-hero-v3-bg" style={{ backgroundImage: 'linear-gradient(rgba(13,7,6,0.78),rgba(13,7,6,0.92)), url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80)' }} aria-hidden="true" />
        <div className="page-hero-v3-glow" aria-hidden="true" />
        <div className="page-hero-v3-dots" aria-hidden="true" />
        <div className="container page-hero-v3-content">
          <div className="page-hero-v3-tag">
            <span className="page-hero-v3-tag-dot" aria-hidden="true" />
            <span>Investor Relations</span>
          </div>
          <h1 className="page-hero-v3-title">Odisha's<br /><span className="page-hero-v3-accent">₹5B Opportunity</span><br />Is Untapped.</h1>
          <p className="page-hero-v3-sub">TezDel is the first hyperlocal platform built natively for Bhubaneswar — ONDC-ready, zero-commission, and community-rooted. We're raising our seed round.</p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.9rem 2.5rem', borderRadius: '12px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', fontSize: '1rem', fontWeight: 600 }}>Request Investor Deck →</Link>
        </div>
      </section>

      {/* Metrics Band */}
      <div className="stats-band-v3">
        <div className="stats-band-v3-inner">
          {metrics.map(m => (
            <div key={m.label} className="stat-item-v3">
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Market Opportunity */}
      <section className="page-section-v3 page-section-light-v3">
        <div className="container page-two-col-v3">
          <div>
            <p className="section-label-v3">The Opportunity</p>
            <h2 className="section-title-v3">India's Q-Commerce<br />Boom Is Bypassing<br />Tier-2 Cities.</h2>
            <p className="section-sub-v3" style={{ marginBottom: '1.5rem' }}>Zomato and Swiggy are metro-first platforms grafted onto Tier-2 cities as an afterthought. They don't understand local food culture, can't build neighbourhood trust, and charge 25-30% commissions that are slowly killing local restaurants.</p>
            <p className="section-sub-v3">TezDel is built from the ground up for Bhubaneswar — speaking the local language, serving local food, and empowering local partners. This is a structural advantage that cannot be copied quickly.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'Bhubaneswar Population', value: '1M+' },
              { label: 'Restaurants in City', value: '8,000+' },
              { label: 'Kirana Stores', value: '25,000+' },
              { label: 'Monthly Food Delivery TAM', value: '₹120Cr+' },
            ].map(item => (
              <div key={item.label} style={{ background: '#FFF9F5', border: '1px solid #F0E8E4', borderRadius: '14px', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontWeight: 500 }}>{item.label}</span>
                <strong style={{ fontFamily: "'Syne',sans-serif", fontSize: '22px', color: 'var(--color-primary)' }}>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Pillars */}
      <section className="page-section-v3" style={{ background: '#0D0706' }}>
        <div className="container">
          <div className="section-head-v3">
            <p className="section-label-v3">Why Invest</p>
            <h2 className="section-title-v3" style={{ color: '#fff' }}>Six Structural<br />Advantages</h2>
          </div>
          <div className="why-grid-v3">
            {pillars.map(p => (
              <article key={p.title} className="why-card-v3">
                <div className="why-icon-v3">{p.icon}</div>
                <h3 className="why-title-v3">{p.title}</h3>
                <p className="why-desc-v3">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tezpass-v3">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label-v3" style={{ color: 'rgba(255,255,255,0.7)' }}>Seed Round Open</p>
          <h2 className="section-title-v3 tezpass-v3-title" style={{ margin: '0 auto 1rem' }}>Interested in<br />Investing in TezDel?</h2>
          <p className="tezpass-v3-p" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>We're currently raising our seed round to expand our zone coverage, build our tech platform, and onboard 500 partners in year one.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.9rem 2.5rem', borderRadius: '12px', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Request Pitch Deck</Link>
            <a href="mailto:invest@tezdel.com" className="btn-outline-white-v3">invest@tezdel.com</a>
          </div>
        </div>
      </section>

    </div>
  );
}
