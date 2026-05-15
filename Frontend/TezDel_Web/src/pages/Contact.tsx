import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: 'general', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const channels = [
    { icon: '📧', title: 'Email Us', desc: 'hello@tezdel.com', sub: 'We reply within 24 hours' },
    { icon: '📍', title: 'Our Office', desc: 'Patia, Bhubaneswar', sub: 'Odisha, India — 751024' },
    { icon: '💬', title: 'WhatsApp', desc: '+91 8767091077', sub: 'Mon–Sat, 9am–7pm IST' },
    { icon: '📡', title: 'ONDC Enquiries', desc: 'ondc@tezdel.com', sub: 'Seller & buyer app queries' },
  ];

  return (
    <div className="page-v3">

      {/* Hero */}
      <section className="page-hero-v3">
        <div className="page-hero-v3-bg" style={{ backgroundImage: 'linear-gradient(rgba(13,7,6,0.8),rgba(13,7,6,0.92)), url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80)' }} aria-hidden="true" />
        <div className="page-hero-v3-glow" aria-hidden="true" />
        <div className="page-hero-v3-dots" aria-hidden="true" />
        <div className="container page-hero-v3-content">
          <div className="page-hero-v3-tag">
            <span className="page-hero-v3-tag-dot" aria-hidden="true" />
            <span>Get in Touch</span>
          </div>
          <h1 className="page-hero-v3-title">We'd Love to<br /><span className="page-hero-v3-accent">Hear from You.</span></h1>
          <p className="page-hero-v3-sub">Whether you're a restaurant owner, home chef, kirana store, or just a food lover — reach out and let's build something great together.</p>
        </div>
      </section>

      {/* Channels */}
      <div className="stats-band-v3" style={{ background: '#1C1210' }}>
        <div className="stats-band-v3-inner" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {channels.map(c => (
            <div key={c.title} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '6px' }}>{c.icon}</div>
              <strong style={{ display: 'block', color: '#fff', fontSize: '14px', fontWeight: 700, marginBottom: '2px' }}>{c.desc}</strong>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{c.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form + Info */}
      <section className="page-section-v3 page-section-light-v3">
        <div className="container page-two-col-v3" style={{ gap: '60px', alignItems: 'flex-start' }}>

          {/* Form */}
          <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 8px 40px rgba(0,0,0,0.08)', border: '1px solid #F0E8E4' }}>
            <p className="section-label-v3">Send a Message</p>
            <h2 className="section-title-v3" style={{ fontSize: '28px', marginBottom: '28px' }}>Contact Us</h2>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: '20px', marginBottom: '8px' }}>Message Sent!</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div className="contact-field-v3">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="contact-field-v3">
                  <label>Email Address</label>
                  <input type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div className="contact-field-v3">
                  <label>I am a...</label>
                  <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                    <option value="general">General Enquiry</option>
                    <option value="restaurant">Restaurant Partner</option>
                    <option value="chef">Home Chef</option>
                    <option value="kirana">Kirana Store Owner</option>
                    <option value="captain">Delivery Captain</option>
                    <option value="investor">Investor</option>
                    <option value="press">Press / Media</option>
                  </select>
                </div>
                <div className="contact-field-v3">
                  <label>Message</label>
                  <textarea placeholder="Tell us how we can help..." rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: '1rem', fontSize: '1rem', borderRadius: '12px', width: '100%' }}>Send Message 📨</button>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="section-label-v3">Why Reach Out?</p>
            <h2 className="section-title-v3">Partner with<br />TezDel Today</h2>
            <p className="section-sub-v3" style={{ marginBottom: '32px' }}>We're actively onboarding restaurants, home chefs, kirana stores, and delivery captains across Bhubaneswar. If you serve your community with pride, we want to work with you.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {channels.map(c => (
                <div key={c.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: '#FFF9F5', border: '1px solid #F0E8E4', borderRadius: '14px', padding: '16px 20px' }}>
                  <div style={{ fontSize: '24px', flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <strong style={{ display: 'block', fontFamily: "'Syne',sans-serif", fontSize: '14px', marginBottom: '2px' }}>{c.title}</strong>
                    <span style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600 }}>{c.desc}</span>
                    <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
