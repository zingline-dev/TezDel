import { CheckCircle } from 'lucide-react';

export default function ONDCSection() {
  const benefits = [
    'Multi-platform visibility',
    'Future-ready infrastructure',
    'Wider customer reach',
    'Open digital commerce access',
    'Scalable local business growth'
  ];

  return (
    <section id="ondc" style={{
      padding: 'clamp(4rem,6vw,6rem) 0',
      background: 'linear-gradient(135deg, #0F172A 0%, #1a2744 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: 'clamp(250px,35vw,500px)', height: 'clamp(250px,35vw,500px)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 'clamp(200px,30vw,400px)', height: 'clamp(200px,30vw,400px)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,61,0,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))', gap: 'clamp(3rem,6vw,7rem)', alignItems: 'center' }}>
          {/* Text */}
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.4)', color: '#60A5FA', padding: '6px 18px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              ONDC Powered Future
            </div>
            <h2 style={{ fontSize: 'clamp(1.7rem,3.5vw,3rem)', fontWeight: '900', color: 'white', lineHeight: '1.15', marginBottom: '1.8rem' }}>
              Built for the Future of{' '}
              <span style={{ color: '#60A5FA' }}>Digital Commerce</span>
            </h2>
            <p style={{ fontSize: 'clamp(0.95rem,1.5vw,1.15rem)', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '3rem' }}>
              TezDel is building an ONDC-ready commerce infrastructure that enables local businesses to become discoverable across India's open digital commerce network. This helps restaurants, home chefs, and kirana stores reach more customers beyond a single app ecosystem.
            </p>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {benefits.map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <CheckCircle size={19} style={{ color: '#60A5FA', flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: '600', fontSize: 'clamp(0.9rem,1.2vw,1rem)' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform cards */}
          <div>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-lg)', padding: 'clamp(2rem,4vw,4rem)', backdropFilter: 'blur(10px)' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <div style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: '900', color: '#60A5FA', marginBottom: '0.5rem' }}>ONDC</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.85rem,1.2vw,1rem)' }}>Open Network for Digital Commerce</div>
              </div>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  { label: 'PhonePe', status: 'Connected' },
                  { label: 'Paytm', status: 'Coming Soon' },
                  { label: 'Magicpin', status: 'Coming Soon' },
                  { label: 'TezDel App', status: 'Live' }
                ].map(item => (
                  <div key={item.label} className="ondc-platform-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ color: 'white', fontWeight: '700', fontSize: 'clamp(0.9rem,1.2vw,1rem)' }}>{item.label}</span>
                    <span style={{ fontSize: '0.78rem', fontWeight: '700', color: item.status === 'Live' ? '#10B981' : item.status === 'Connected' ? '#60A5FA' : 'rgba(255,255,255,0.4)', background: item.status === 'Live' ? 'rgba(16,185,129,0.15)' : item.status === 'Connected' ? 'rgba(96,165,250,0.15)' : 'rgba(255,255,255,0.05)', padding: '4px 12px', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
