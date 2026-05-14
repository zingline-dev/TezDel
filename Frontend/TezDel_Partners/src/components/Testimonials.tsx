import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const stories = [
    {
      name: 'Rajesh Nayak',
      role: 'Restaurant Owner',
      location: 'Saheed Nagar, Bhubaneswar',
      quote: 'TezDel helped us increase repeat local customers while reducing delivery platform costs. We\'re saving over ₹15,000 a month compared to what we paid in commissions before.',
      rating: 5,
      avatar: 'R'
    },
    {
      name: 'Suchitra Mohapatra',
      role: 'Home Chef',
      location: 'Patia, Bhubaneswar',
      quote: 'I started earning from my home kitchen without investing in a physical shop. TezDel gave me the tools and the customers. My family income has doubled in 6 months.',
      rating: 5,
      avatar: 'S'
    },
    {
      name: 'Prakash Sahoo',
      role: 'Kirana Owner',
      location: 'Chandrasekharpur, Bhubaneswar',
      quote: 'Our local grocery orders increased significantly after joining TezDel. The digital order management is simple and the settlement is always on time.',
      rating: 5,
      avatar: 'P'
    }
  ];

  return (
    <section style={{ padding: 'clamp(4rem,6vw,5rem) 0 clamp(2rem,4vw,4rem)', background: 'var(--color-bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem,6vw,6rem)' }}>
          <div style={{ color: 'var(--color-primary)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}>Partner Stories</div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,3.2rem)', fontWeight: '900', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Partner Success Stories</h2>
          <p style={{ fontSize: 'clamp(1rem,1.5vw,1.15rem)', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>Real stories from real partners across Bhubaneswar.</p>
        </div>

        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px,100%), 1fr))', gap: '2rem' }}>
          {stories.map(s => (
            <div key={s.name} style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: 'clamp(2rem,3vw,3.5rem) clamp(1.5rem,2.5vw,3rem)', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.04)', position: 'relative' }}>
              <Quote size={36} style={{ color: 'var(--color-primary)', opacity: 0.12, position: 'absolute', top: '1.5rem', right: '1.5rem' }} />
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                {Array(s.rating).fill(null).map((_, i) => (
                  <Star key={i} size={16} style={{ color: '#F59E0B' }} fill="#F59E0B" />
                ))}
              </div>
              <p style={{ fontSize: 'clamp(0.95rem,1.2vw,1.05rem)', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '2rem', fontStyle: 'italic' }}>
                "{s.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800', fontSize: '1.1rem', flexShrink: 0 }}>
                  {s.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: '800', color: 'var(--color-secondary)', fontSize: '0.95rem' }}>{s.name}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: '700' }}>{s.role}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{s.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
