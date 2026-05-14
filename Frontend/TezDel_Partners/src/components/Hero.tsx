export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '5rem 0'
    }}>
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 'clamp(300px,40vw,600px)', height: 'clamp(300px,40vw,600px)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,61,0,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-15%', left: '-5%', width: 'clamp(250px,35vw,500px)', height: 'clamp(250px,35vw,500px)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
        {/* Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(255,61,0,0.15)', border: '1px solid rgba(255,61,0,0.4)', color: 'var(--color-primary)', padding: '8px 20px', borderRadius: '999px', fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center' }}>
            🚀 Bhubaneswar's Fastest-Growing Hyperlocal Network
          </div>
        </div>

        {/* Headline */}
        <h1 className="hero-headline" style={{ fontSize: 'clamp(2.2rem, 6vw, 5.5rem)', fontWeight: '900', color: 'white', lineHeight: '1.08', marginBottom: '1.5rem', maxWidth: '950px', margin: '0 auto 1.5rem' }}>
          Grow Your Business with{' '}
          <span style={{ background: 'linear-gradient(90deg, #FF3D00, #FF7547)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            TezDel
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', color: 'rgba(255,255,255,0.75)', maxWidth: '780px', margin: '0 auto 3rem', lineHeight: '1.7', padding: '0 1rem' }}>
          Join Bhubaneswar's fastest-growing hyperlocal delivery network built for restaurants, home chefs, kirana stores, and delivery captains. Lower costs, higher profits, local customers, and zero unnecessary commissions.
        </p>

        {/* CTAs */}
        <div className="hero-cta-group" style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem', padding: '0 1rem' }}>
          <a href="#final-cta" style={{ background: 'var(--color-primary)', color: 'white', padding: 'clamp(1rem,2vw,1.3rem) clamp(2rem,4vw,3.5rem)', borderRadius: 'var(--radius-sm)', fontWeight: '800', fontSize: 'clamp(1rem,1.5vw,1.1rem)', textDecoration: 'none', boxShadow: '0 8px 30px rgba(255,61,0,0.4)', display: 'inline-block', whiteSpace: 'nowrap' }}>
            Become a Partner
          </a>
          <a href="#faq" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: 'clamp(1rem,2vw,1.3rem) clamp(2rem,4vw,3.5rem)', borderRadius: 'var(--radius-sm)', fontWeight: '700', fontSize: 'clamp(1rem,1.5vw,1.1rem)', textDecoration: 'none', display: 'inline-block', whiteSpace: 'nowrap' }}>
            Talk to Our Team
          </a>
        </div>

        {/* Stats bar */}
        <div className="hero-stats-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', padding: '2rem', backdropFilter: 'blur(10px)', maxWidth: '800px', margin: '0 auto' }}>
          {[
            { val: '500+', label: 'Active Partners' },
            { val: '20 min', label: 'Avg Delivery Time' },
            { val: '₹0', label: 'Commission' },
            { val: 'ONDC', label: 'Ready Infrastructure' }
          ].map((stat, i, arr) => (
            <div key={stat.label} style={{ textAlign: 'center', padding: '0.5rem 1rem', borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              <div style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '0.3rem' }}>{stat.val}</div>
              <div style={{ fontSize: 'clamp(0.7rem,1vw,0.85rem)', color: 'rgba(255,255,255,0.5)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-stats-bar { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-stats-bar > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 1rem 0.5rem !important; }
          .hero-stats-bar > div:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.1) !important; }
          .hero-stats-bar > div:last-child, .hero-stats-bar > div:nth-last-child(2) { border-bottom: none !important; }
          .hero-cta-group { flex-direction: column; align-items: center; }
          .hero-cta-group a { width: 100%; max-width: 340px; text-align: center; }
        }
      `}</style>
    </section>
  );
}
