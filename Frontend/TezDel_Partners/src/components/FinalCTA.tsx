export default function FinalCTA() {
  return (
    <section id="final-cta" style={{
      padding: 'clamp(4rem,6vw,6rem) 0 clamp(5rem,10vw,10rem)',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 'clamp(400px,60vw,800px)', height: 'clamp(400px,60vw,800px)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,61,0,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(255,61,0,0.15)', border: '1px solid rgba(255,61,0,0.4)', color: 'var(--color-primary)', padding: '7px 20px', borderRadius: '999px', fontSize: '0.82rem', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Ready to Grow?
          </div>
        </div>

        <h2 style={{ fontSize: 'clamp(1.9rem,5vw,4.5rem)', fontWeight: '900', color: 'white', lineHeight: '1.1', marginBottom: '1.5rem', maxWidth: '900px', margin: '0 auto 1.5rem', padding: '0 1rem' }}>
          Join Odisha's Fastest Growing{' '}
          <span style={{ background: 'linear-gradient(90deg, #FF3D00, #FF7547)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Hyperlocal Network
          </span>
        </h2>

        <p style={{ fontSize: 'clamp(1rem,1.8vw,1.3rem)', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: '1.7', padding: '0 1rem' }}>
          Grow your business, reach more customers, and become part of the future of local commerce with TezDel.
        </p>

        {/* Form */}
        <div className="final-cta-form" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-lg)', padding: 'clamp(2rem,4vw,4rem)', maxWidth: '700px', margin: '0 auto 3.5rem', backdropFilter: 'blur(10px)' }}>
          <h3 style={{ color: 'white', fontWeight: '800', fontSize: 'clamp(1.2rem,2vw,1.5rem)', marginBottom: '2rem' }}>Start Your Partner Application</h3>

          <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px,100%), 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            <input type="text" placeholder="Full Name" style={inputStyle} />
            <input type="tel" placeholder="Mobile Number" style={inputStyle} />
          </div>
          <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px,100%), 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            <input type="email" placeholder="Email Address" style={inputStyle} />
            <select style={{ ...inputStyle, color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>
              <option value="">Select Partner Type</option>
              <option value="restaurant">Restaurant Partner</option>
              <option value="homechef">Home Chef</option>
              <option value="kirana">Kirana Store</option>
              <option value="captain">Delivery Captain</option>
            </select>
          </div>
          <input type="text" placeholder="Business / Area Name (optional)" style={{ ...inputStyle, width: '100%', marginBottom: '1.8rem' }} />

          <button style={{ width: '100%', padding: 'clamp(1.1rem,2vw,1.4rem)', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-sm)', fontWeight: '800', fontSize: 'clamp(1rem,1.5vw,1.1rem)', cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 8px 30px rgba(255,61,0,0.4)', letterSpacing: '0.5px' }}>
            Submit Application →
          </button>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', marginTop: '1.2rem' }}>Our team will reach out within 24 hours. No commitment required.</p>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:+910000000000" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>📞 Call Our Team</a>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <a href="mailto:partners@tezdel.com" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>✉️ partners@tezdel.com</a>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <a href="https://wa.me/910000000000" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>💬 WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  padding: 'clamp(0.9rem,1.5vw,1.1rem) 1.4rem',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 'var(--radius-sm)',
  color: 'white',
  fontSize: 'clamp(0.9rem,1.2vw,1rem)',
  outline: 'none',
  fontFamily: 'inherit',
  width: '100%',
  boxSizing: 'border-box' as const
};
