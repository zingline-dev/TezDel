import { Target, Users, MapPin, Heart, Shield, Zap, Globe, MessageSquare } from 'lucide-react';
import React from 'react';

export default function About() {
  const values = [
    { icon: <MapPin />, title: 'Local First', desc: 'Prioritizing Bhubaneswar businesses & communities in everything we do.' },
    { icon: <Heart />, title: 'Community Trust', desc: 'Built on neighbourhood relationships and local accountability.' },
    { icon: <Shield />, title: 'Fair Business', desc: 'Zero commission model to ensure local partners thrive, not just survive.' },
    { icon: <Zap />, title: 'Fast Delivery', desc: 'A 20-minute hyperlocal delivery promise powered by local intelligence.' },
    { icon: <Globe />, title: 'Technology with Purpose', desc: 'Using ONDC-ready infrastructure to democratize digital commerce.' }
  ];

  return (
    <div className="page-container" style={{ background: '#fff' }}>
      {/* Our Story */}
      <section style={{ padding: 'var(--space-xl) 0', background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ color: 'var(--color-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Our Heritage</div>
              <h1 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '2rem', lineHeight: '1.1', color: 'var(--color-secondary)' }}>Our Story</h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                TezDel was created to build a hyperlocal delivery ecosystem designed specifically for Bhubaneswar and Odisha. We saw that national players were neglecting our unique local food culture and squeezing small businesses with high commissions. 
              </p>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                We decided to build a platform that puts the city first. From the narrow lanes of Old Town to the bustling hubs of Patia and Infocity, TezDel is Bhubaneswar's own heartbeat.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="TezDel Team" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
              <div className="glass" style={{ position: 'absolute', bottom: '-30px', left: '-30px', padding: '2rem', borderRadius: 'var(--radius-md)', background: 'white', border: '1px solid rgba(0,0,0,0.05)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-primary)' }}>100%</div>
                <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--color-secondary)' }}>Odia Roots</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: 'var(--space-xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            <div className="glass" style={{ padding: '4rem 3rem', background: 'var(--color-bg-light)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ width: '64px', height: '64px', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                <Target color="var(--color-primary)" size={32} />
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Mission</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                To make every neighbourhood self-sufficient through trusted local delivery powered by community partnerships and fair business practices.
              </p>
            </div>
            <div style={{ padding: '4rem 3rem', background: 'var(--color-secondary)', color: 'white', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '150px', height: '150px', background: 'rgba(255, 61, 0, 0.1)', borderRadius: '50%' }}></div>
              <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Users color="var(--color-primary)" size={32} />
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Vision</h2>
              <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: '1.7' }}>
                To become Eastern India’s most trusted hyperlocal commerce network, setting the gold standard for community-first technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: 'var(--space-xl) 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Core Values</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>The principles that guide every delivery we make.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {values.map(val => (
              <div key={val.title} className="glass" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'white', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.02)' }}>
                <div style={{ background: 'var(--color-bg-light)', width: '72px', height: '72px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: 'var(--color-primary)' }}>
                   {React.cloneElement(val.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--color-secondary)' }}>{val.title}</h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section style={{ padding: 'var(--space-xl) 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 3rem' }}>
               <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="Founder" style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover', border: '6px solid white', boxShadow: 'var(--shadow-md)' }} />
               <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '40px', height: '40px', background: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', border: '4px solid white' }}>
                  <MessageSquare size={18} />
               </div>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2.5rem', color: 'var(--color-secondary)' }}>Founder Message</h2>
            <p style={{ fontSize: '1.5rem', color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '3rem', position: 'relative' }}>
              <span style={{ fontSize: '5rem', position: 'absolute', top: '-40px', left: '-20px', opacity: 0.1, color: 'var(--color-primary)' }}>“</span>
              TezDel is more than just a delivery app. It's a technology bridge for the people of Bhubaneswar. We are building a future where your favourite local restaurant thrives, your grandmother's cooking is celebrated, and your neighbourhood store is just 20 minutes away.
              <span style={{ fontSize: '5rem', position: 'absolute', bottom: '-80px', right: '-20px', opacity: 0.1, color: 'var(--color-primary)' }}>”</span>
            </p>
            <div style={{ fontWeight: '800', fontSize: '1.25rem', color: 'var(--color-secondary)', marginBottom: '0.25rem' }}>Bishal Mohapatra</div>
            <div style={{ color: 'var(--color-primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Founder & CEO, TezDel</div>
          </div>
        </div>
      </section>
    </div>
  );
}
