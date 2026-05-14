export default function Footer() {
  return (
    <footer style={{ background: '#080E1A', padding: 'clamp(3rem,6vw,5rem) 0 clamp(1.5rem,3vw,3rem)', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px,100%), 1fr))', gap: 'clamp(2rem,4vw,4rem)', marginBottom: 'clamp(3rem,5vw,5rem)' }}>
          {/* Brand */}
          <div>
            <div style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: '900', marginBottom: '1.2rem' }}>
              <span style={{ color: 'var(--color-primary)' }}>Tez</span>Del
              <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: '400', fontSize: '0.9rem', marginLeft: '6px' }}>Partners</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', fontSize: 'clamp(0.85rem,1.2vw,0.95rem)', marginBottom: '1.5rem' }}>
              Building Odisha's next-generation hyperlocal commerce ecosystem for restaurants, home chefs, kirana stores, and delivery captains.
            </p>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>✉️ partners@tezdel.com</div>
          </div>

          {/* Partner Programs */}
          <div>
            <h4 style={{ fontWeight: '800', fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.2rem' }}>Partner Programs</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Restaurant Partners', 'Home Chef Network', 'Kirana Partners', 'Delivery Captains'].map(l => (
                <a key={l} href="#programs" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 'clamp(0.85rem,1.2vw,0.95rem)', fontWeight: '500' }}>{l}</a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ fontWeight: '800', fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.2rem' }}>Resources</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Why TezDel', 'ONDC Integration', 'Partner FAQ', 'Apply Now'].map(l => (
                <a key={l} href="#why-partner" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 'clamp(0.85rem,1.2vw,0.95rem)', fontWeight: '500' }}>{l}</a>
              ))}
            </div>
          </div>

          {/* Zones */}
          <div>
            <h4 style={{ fontWeight: '800', fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.2rem' }}>Active Zones</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Saheed Nagar', 'Patia', 'Chandrasekharpur', 'Nayapalli', 'Jaydev Vihar', 'Infocity', 'Bhubaneswar'].map(z => (
                <span key={z} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '999px', padding: '4px 11px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', fontWeight: '500' }}>{z}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.82rem' }}>© 2024-2026 TezDel™ Hyperlocal Ecosystem. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Service', 'Partner Agreement'].map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none', fontSize: '0.82rem' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
