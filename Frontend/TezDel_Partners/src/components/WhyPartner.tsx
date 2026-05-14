import { Store, ChefHat, ShoppingBag, Bike, DollarSign, MapPin, CreditCard, TrendingUp, Headphones } from 'lucide-react';

export default function WhyPartner() {
  const reasons = [
    { icon: <DollarSign size={28} />, title: 'Higher Earnings', desc: 'Keep more of your profits with TezDel\'s fair and transparent business model.' },
    { icon: <MapPin size={28} />, title: 'Hyperlocal Reach', desc: 'Connect directly with customers in your own neighbourhood and delivery zone.' },
    { icon: <CreditCard size={28} />, title: 'Fast Payments', desc: 'Secure digital settlements with easy tracking and reporting.' },
    { icon: <TrendingUp size={28} />, title: 'Local Brand Visibility', desc: 'Get featured across TezDel app, website, WhatsApp communities, and ONDC ecosystem.' },
    { icon: <Headphones size={28} />, title: 'Dedicated Growth Support', desc: 'We help partners with onboarding, operations, customer reach, and growth strategies.' }
  ];

  const partnerTypes = [
    { icon: <Store size={20} />, label: 'Restaurants' },
    { icon: <ChefHat size={20} />, label: 'Home Chefs' },
    { icon: <ShoppingBag size={20} />, label: 'Kirana Stores' },
    { icon: <Bike size={20} />, label: 'Delivery Captains' }
  ];

  return (
    <>
      {/* Trust Network */}
      <section style={{ padding: 'clamp(4rem, 6vw, 5rem) 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          {/* Partner type pills */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            {partnerTypes.map(p => (
              <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'white', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 'var(--radius-sm)', padding: '0.9rem 1.6rem', boxShadow: 'var(--shadow-sm)', fontWeight: '700', color: 'var(--color-secondary)', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', flexShrink: 0 }}>
                <span style={{ color: 'var(--color-primary)' }}>{p.icon}</span>
                {p.label}
              </div>
            ))}
          </div>

          {/* Trust intro grid */}
          <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(450px, 100%), 1fr))', gap: '4rem', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>
            <div>
              <div style={{ color: 'var(--color-primary)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1.2rem' }}>Trusted Local Commerce Network</div>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 3rem)', fontWeight: '900', color: 'var(--color-secondary)', lineHeight: '1.15', marginBottom: '1.8rem' }}>
                Odisha's Next-Generation Hyperlocal Commerce Ecosystem
              </h2>
              <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1.2rem' }}>
                TezDel is building Odisha's next-generation hyperlocal commerce ecosystem. We empower local businesses and individuals with technology, fast delivery infrastructure, and direct access to customers across Bhubaneswar.
              </p>
              <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                Whether you run a restaurant, cook from home, own a kirana shop, or want flexible income as a delivery captain — TezDel helps you grow faster.
              </p>
            </div>

            <div className="trust-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                { num: '500+', label: 'Active Partners', color: 'var(--color-primary)' },
                { num: '20min', label: 'Delivery Speed', color: 'var(--color-accent)' },
                { num: '₹0', label: 'Commission Fee', color: '#3B82F6' },
                { num: '4+', label: 'Partner Types', color: '#8B5CF6' }
              ].map(s => (
                <div key={s.label} style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem)', textAlign: 'center', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.04)' }}>
                  <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '900', color: s.color, marginBottom: '0.4rem' }}>{s.num}</div>
                  <div style={{ fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)', color: 'var(--color-text-muted)', fontWeight: '600' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section id="why-partner" style={{ padding: 'clamp(4rem, 6vw, 5rem) 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
            <div style={{ color: 'var(--color-primary)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}>Why Choose Us</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', fontWeight: '900', color: 'var(--color-secondary)', marginBottom: '1.2rem' }}>Why Partner with TezDel</h2>
            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>Everything you need to grow your local business, all in one platform.</p>
          </div>
          <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '2rem' }}>
            {reasons.map((r, i) => (
              <div key={r.title} style={{ background: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', padding: 'clamp(1.5rem, 2vw, 1.8rem) clamp(1.2rem, 1.5vw, 1.5rem)', border: '1px solid rgba(0,0,0,0.04)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)' }} />
                <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                  {r.icon}
                </div>
                <h3 style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '0.5rem', lineHeight: '1.2' }}>{r.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: 'clamp(0.85rem, 1vw, 0.9rem)' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
