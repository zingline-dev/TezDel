export default function Navbar() {
  return (
    <nav style={{
      padding: '1.2rem 0',
      background: 'var(--color-secondary)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(255,255,255,0.07)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <a href="/" className="nav-brand" style={{ fontSize: '1.8rem', fontWeight: '900', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
          <span style={{ color: 'var(--color-primary)' }}>Tez</span>
          <span style={{ color: 'white' }}>Del</span>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: '400', fontSize: '1rem', marginLeft: '4px' }}>Partners</span>
        </a>
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#why-partner" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '500', fontSize: '0.95rem', textDecoration: 'none' }}>Benefits</a>
          <a href="#programs" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '500', fontSize: '0.95rem', textDecoration: 'none' }}>Programs</a>
          <a href="#ondc" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '500', fontSize: '0.95rem', textDecoration: 'none' }}>ONDC</a>
          <a href="#faq" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '500', fontSize: '0.95rem', textDecoration: 'none' }}>FAQ</a>
          <a href="#final-cta" className="nav-mobile-cta" style={{ background: 'var(--color-primary)', color: 'white', padding: '0.7rem 1.8rem', borderRadius: 'var(--radius-sm)', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>
            Become a Partner
          </a>
        </div>
        {/* Mobile CTA only */}
        <a href="#final-cta" className="nav-mobile-cta" style={{ display: 'none', background: 'var(--color-primary)', color: 'white', padding: '0.6rem 1.2rem', borderRadius: 'var(--radius-sm)', fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none' }}>
          Join Now
        </a>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop-links { display: none !important; }
          .nav-mobile-cta:last-child { display: inline-block !important; }
        }
        @media (min-width: 1025px) {
          .nav-mobile-cta:last-child { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
