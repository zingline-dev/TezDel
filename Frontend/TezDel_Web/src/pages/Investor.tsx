import { ShieldCheck, Globe, TrendingUp, BarChart3, Mail, Download, Heart, ShoppingBag, Zap } from 'lucide-react';
import React from 'react';

export default function Investor() {
  const metrics = [
    { label: 'Market CAGR', value: '17%', desc: 'Quick commerce growth in Tier-2' },
    { label: 'Q-Comm Market', value: '$5.38B', desc: 'Projected Indian market 2025' },
    { label: 'Breakeven', value: '800', desc: 'Daily orders per zone' },
    { label: 'Partner LTV', value: '4.5x', desc: 'National average equivalent' }
  ];

  return (
    <div className="page-container" style={{ background: 'var(--color-bg-white)' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'var(--color-secondary)', 
        padding: '12rem 0 10rem', 
        color: 'white', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80) center/cover', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
             <div className="glass" style={{ background: 'rgba(255, 61, 0, 0.2)', color: 'var(--color-primary)', padding: '10px 24px', borderRadius: 'var(--radius-full)', fontSize: '0.9rem', fontWeight: '800', border: '1px solid rgba(255, 61, 0, 0.3)' }}>
                INVESTOR RELATIONS
             </div>
          </div>
          <h1 style={{ fontSize: '5rem', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Investing in <span style={{ color: 'var(--color-primary)' }}>Bhubaneswar's</span> Future.
          </h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '900px', margin: '0 auto 4rem', opacity: 0.9, lineHeight: '1.6' }}>
            National players spend billions on burn. We leverage community trust and zero-commission economics to build a profitable, hyperlocal network for the Next Billion Users.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <button className="btn btn-primary" style={{ padding: '1.2rem 3.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
               <Download size={20} /> Download Deck
            </button>
            <button className="btn glass" style={{ padding: '1.2rem 3.5rem', fontSize: '1.1rem', color: 'white', fontWeight: '700' }}>Contact Founder</button>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section style={{ marginTop: '-5rem', position: 'relative', zIndex: 10 }}>
         <div className="container">
            <div className="glass" style={{ background: 'white', padding: '4rem 3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center', border: '1px solid rgba(0,0,0,0.02)' }}>
               {metrics.map((m, i) => (
                  <div key={i} style={{ borderRight: i < 3 ? '1px solid #eee' : 'none' }}>
                     <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{m.value}</div>
                     <div style={{ fontWeight: '800', color: 'var(--color-secondary)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{m.label}</div>
                     <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{m.desc}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Market Opportunity */}
      <section style={{ padding: '10rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '6rem', alignItems: 'center' }}>
             <div>
                <div style={{ color: 'var(--color-primary)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>The Opportunity</div>
                <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '2.5rem', color: 'var(--color-secondary)', lineHeight: '1.2' }}>The Hyperlocal Growth Frontier.</h2>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '3rem' }}>
                   Tier-2 cities like Bhubaneswar are witnessing an explosion in digital commerce. With a high density of mobile-first IT professionals and a rapidly growing urban population, the city is the ideal sandbox for Eastern India's hyperlocal disruption.
                </p>
                <div style={{ display: 'grid', gap: '2rem' }}>
                   <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                      <div style={{ background: 'var(--color-bg-light)', padding: '1rem', borderRadius: '12px', color: 'var(--color-primary)' }}><TrendingUp size={28} /></div>
                      <div>
                         <h4 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Superior Unit Economics</h4>
                         <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Our zero-commission model creates structural loyalty that national aggregators cannot replicate without destroying their P&L.</p>
                      </div>
                   </div>
                   <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                      <div style={{ background: 'var(--color-bg-light)', padding: '1rem', borderRadius: '12px', color: 'var(--color-primary)' }}><Globe size={28} /></div>
                      <div>
                         <h4 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>ONDC Native Strategy</h4>
                         <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>We leverage the ONDC protocol to acquire customers at near-zero CAC, focusing our resources on infrastructure and ops.</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="glass" style={{ background: 'var(--color-bg-light)', padding: '4rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <BarChart3 size={48} color="var(--color-primary)" style={{ marginBottom: '2rem' }} />
                <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Market Depth</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                   The Infocity and Patia corridors in Bhubaneswar represent $200M+ annual GMV potential in quick commerce alone. TezDel is positioned to capture 15% of this market in 24 months.
                </p>
                <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-primary)', boxShadow: 'var(--shadow-sm)' }}>
                   <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem', fontWeight: '600' }}>TARGET EBITDA MARGIN</div>
                   <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-secondary)' }}>12% - 15%</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Competitive Edge */}
      <section style={{ padding: '8rem 0', background: 'var(--color-secondary)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
             <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1.5rem' }}>The TezDel Edge</h2>
             <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Why we are fundamentally different from traditional aggregators.</p>
          </div>
          <div className="grid grid-4">
             {[
               { icon: <Heart />, title: 'Home Chef Moat', desc: 'Exclusive access to authentic homemade Odia meals. Uncopiable by commercial kitchens.' },
               { icon: <ShoppingBag />, title: 'Asset Light Ops', desc: 'Zero capex dark store model leveraging existing neighbourhood Kirana stores.' },
               { icon: <ShieldCheck />, title: 'Zero Commission', desc: 'Flat monthly fee model creates deep partner loyalty and high retention.' },
               { icon: <Zap />, title: 'Local IP', desc: 'Proprietary community-based routing algorithm optimized for local lanes.' }
             ].map((item, idx) => (
                <div key={idx} className="glass" style={{ padding: '3.5rem 2rem', textAlign: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)' }}>
                   <div style={{ color: 'var(--color-primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 40 })}
                   </div>
                   <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.5rem' }}>{item.title}</h4>
                   <p style={{ fontSize: '1rem', opacity: 0.7, lineHeight: '1.6' }}>{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section style={{ padding: '10rem 0' }}>
         <div className="container">
            <h2 style={{ fontSize: '3.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '6rem', color: 'var(--color-secondary)' }}>Expansion Roadmap</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
               {[
                  { phase: '01', title: 'Dominate BBSR', status: 'Scale Phase', desc: 'Expand to 15 active zones. Reach 1,200+ daily orders. Achieve city-level EBITDA positive.' },
                  { phase: '02', title: 'Odisha Blitz', status: 'Growth Phase', desc: 'Expand to Cuttack, Rourkela, and Sambalpur. Onboard 500+ home chefs and 2,000 partners.' },
                  { phase: '03', title: 'Eastern India', status: 'Expansion Phase', desc: 'Apply the playbook to Ranchi, Guwahati, and Patna. Target $50M ARR.' }
               ].map((item, idx) => (
                  <div key={idx} style={{ position: 'relative' }}>
                     <div style={{ fontSize: '6rem', fontWeight: '900', color: 'var(--color-primary)', opacity: 0.1, marginBottom: '-2.5rem' }}>{item.phase}</div>
                     <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                           <h4 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--color-secondary)' }}>{item.title}</h4>
                           <span className="glass" style={{ padding: '4px 12px', background: 'var(--color-bg-light)', color: 'var(--color-primary)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '700' }}>{item.status}</span>
                        </div>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '8rem 0', background: 'var(--color-bg-light)' }}>
         <div className="container">
            <div className="glass" style={{ background: 'white', padding: '6rem 4rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
               <Mail size={64} color="var(--color-primary)" style={{ marginBottom: '2rem', margin: '0 auto 2rem' }} />
               <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Request Access to Data Room</h2>
               <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
                  We are currently open for Seed Stage discussions with mission-aligned investors. Get access to our pitch deck, detailed unit economics, and 5-year projections.
               </p>
               <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                  <div className="glass" style={{ padding: '1.2rem 2.5rem', background: 'var(--color-bg-light)', borderRadius: 'var(--radius-sm)', fontWeight: '800', color: 'var(--color-secondary)', fontSize: '1.1rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                     invest@tezdel.com
                  </div>
                  <button className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.1rem' }}>Get Deck Access</button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
