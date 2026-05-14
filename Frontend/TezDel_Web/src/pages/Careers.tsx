import { Rocket, Heart, Zap, MapPin, Briefcase, ChevronRight, Users } from 'lucide-react';
import React from 'react';

export default function Careers() {
  const roles = [
    { title: 'Operations Manager', type: 'Full-time', loc: 'Bhubaneswar', dept: 'Operations' },
    { title: 'Senior Frontend Engineer', type: 'Full-time', loc: 'Hybrid (Bhubaneswar)', dept: 'Engineering' },
    { title: 'Logistics Optimization Lead', type: 'Full-time', loc: 'Bhubaneswar', dept: 'Supply Chain' },
    { title: 'Community Growth Manager', type: 'Full-time', loc: 'Bhubaneswar', dept: 'Marketing' },
    { title: 'Customer Experience Lead', type: 'Full-time', loc: 'Bhubaneswar', dept: 'Support' }
  ];

  return (
    <div className="page-container" style={{ background: 'var(--color-bg-white)' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #FDF4FF 0%, #FAE8FF 100%)', 
        padding: '10rem 0 8rem', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '30%', height: '40%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
             <div className="glass" style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#A855F7', padding: '10px 24px', borderRadius: 'var(--radius-full)', fontSize: '0.9rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                <Rocket size={18} /> JOIN THE TEZDEL REVOLUTION
             </div>
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: '900', marginBottom: '1.5rem', color: 'var(--color-secondary)', lineHeight: '1.1' }}>
            Build the Future of <span style={{ color: '#A855F7' }}>Odisha</span>.
          </h1>
          <p style={{ fontSize: '1.4rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto 3.5rem', lineHeight: '1.6' }}>
            Help us build the most trusted hyperlocal commerce network in Eastern India. We are looking for dreamers, builders, and community-first thinkers.
          </p>
          <button className="btn btn-primary" style={{ background: '#A855F7', padding: '1.2rem 3.5rem', fontSize: '1.1rem' }}>View Open Positions</button>
        </div>
      </section>

      {/* Culture Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#A855F7', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Our Culture</div>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '2rem', color: 'var(--color-secondary)', lineHeight: '1.2' }}>Work with Purpose. <br/>Deliver with <span style={{ color: 'var(--color-primary)' }}>Pride</span>.</h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '3rem' }}>
                At TezDel, we don't just build apps. We build bridges for local communities. Our culture is defined by radical transparency, high-velocity execution, and a deep-rooted love for our city, Bhubaneswar.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div className="glass" style={{ padding: '2rem', background: '#FAF5FF', borderRadius: 'var(--radius-md)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                   <Zap color="#A855F7" size={32} style={{ marginBottom: '1rem' }} />
                   <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>High Velocity</h4>
                   <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>We ship daily. We learn fast. We pivot faster.</p>
                </div>
                <div className="glass" style={{ padding: '2rem', background: '#F0FDF4', borderRadius: 'var(--radius-md)', border: '1px solid rgba(34, 197, 94, 0.1)' }}>
                   <Heart color="#22C55E" size={32} style={{ marginBottom: '1rem' }} />
                   <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>Community Led</h4>
                   <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Local impact is our primary metric of success.</p>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
               <img src="https://images.unsplash.com/photo-1522071823991-b9671f30c46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="TezDel Culture" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
               <div className="glass" style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', maxWidth: '250px' }}>
                  <div style={{ fontWeight: '900', fontSize: '2.5rem', color: '#A855F7', marginBottom: '0.25rem' }}>100%</div>
                  <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--color-secondary)' }}>Ownership Mindset</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '8rem 0', background: 'var(--color-bg-light)' }}>
         <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
               <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Why TezDel?</h2>
               <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>Building the future comes with its own rewards.</p>
            </div>
            <div className="grid grid-4">
               {[
                  { title: 'Impactful Work', desc: 'Directly empower thousands of local businesses in Odisha.', icon: <Rocket size={24} /> },
                  { title: 'Early Equity', desc: 'Significant ownership opportunities for early-stage team members.', icon: <Briefcase size={24} /> },
                  { title: 'Learning Hub', desc: 'Solve real-world logistics and q-commerce problems at scale.', icon: <Zap size={24} /> },
                  { title: 'Modern Stack', desc: 'Work with the latest tech: React, Node, AI-driven logistics.', icon: <Users size={24} /> }
               ].map((item, idx) => (
                  <div key={idx} className="glass" style={{ background: 'white', padding: '3rem 2rem', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid rgba(0,0,0,0.02)' }}>
                     <div style={{ background: 'var(--color-bg-light)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#A855F7' }}>
                        {item.icon}
                     </div>
                     <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--color-secondary)' }}>{item.title}</h4>
                     <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Hiring Process */}
      <section style={{ padding: '8rem 0' }}>
         <div className="container">
            <h2 style={{ fontSize: '3rem', fontWeight: '800', textAlign: 'center', marginBottom: '6rem', color: 'var(--color-secondary)' }}>Our Hiring Process</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', position: 'relative' }}>
               <div style={{ position: 'absolute', top: '24px', left: '10%', right: '10%', height: '2px', background: '#eee', zIndex: 0 }} className="hide-mobile"></div>
               {['Apply', 'Screening', 'Technical', 'Culture Fit', 'Offer'].map((step, i) => (
                  <div key={step} style={{ textAlign: 'center', flex: '1', minWidth: '150px', position: 'relative', zIndex: 1 }}>
                     <div style={{ 
                        background: i === 0 ? '#A855F7' : 'white', 
                        color: i === 0 ? 'white' : '#A855F7', 
                        width: '50px', 
                        height: '50px', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        margin: '0 auto 1.5rem', 
                        fontWeight: '900',
                        fontSize: '1.2rem',
                        border: '2px solid #A855F7',
                        boxShadow: 'var(--shadow-sm)'
                     }}>{i + 1}</div>
                     <h4 style={{ fontWeight: '800', color: 'var(--color-secondary)', fontSize: '1.1rem' }}>{step}</h4>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Open Roles */}
      <section id="roles" style={{ padding: '8rem 0', background: 'var(--color-bg-light)' }}>
         <div className="container" style={{ maxWidth: '1000px' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
               <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Open Positions</h2>
               <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>Come build with us in Bhubaneswar.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               {roles.map((role, idx) => (
                  <div key={idx} className="glass hover-lift" style={{ 
                     display: 'flex', 
                     justifyContent: 'space-between', 
                     alignItems: 'center', 
                     background: 'white', 
                     padding: '2.5rem 3rem', 
                     borderRadius: 'var(--radius-md)', 
                     border: '1px solid rgba(0,0,0,0.05)',
                     boxShadow: 'var(--shadow-sm)',
                     transition: 'all 0.3s ease'
                  }}>
                     <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                        <div>
                           <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>{role.title}</h3>
                           <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--color-text-muted)', fontWeight: '600', fontSize: '0.95rem' }}>
                              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> {role.loc}</span>
                              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Briefcase size={16} /> {role.dept}</span>
                           </div>
                        </div>
                     </div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <span className="glass" style={{ padding: '6px 16px', borderRadius: 'var(--radius-full)', background: '#F3E8FF', color: '#A855F7', fontWeight: '700', fontSize: '0.85rem' }}>{role.type}</span>
                        <button className="btn btn-secondary" style={{ padding: '0.8rem 2rem', borderRadius: 'var(--radius-sm)', border: '1px solid #A855F7', color: '#A855F7', fontWeight: '800' }}>
                           Apply Now <ChevronRight size={18} />
                        </button>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="glass" style={{ marginTop: '5rem', background: 'var(--color-secondary)', padding: '4rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: 'white' }}>
               <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Don't see a role for you?</h3>
               <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                  If you're passionate about our mission, send us your resume anyway. We're always looking for exceptional talent.
               </p>
               <button className="btn glass" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '1.2rem 3rem', fontSize: '1.1rem', fontWeight: '800', border: '1px solid rgba(255,255,255,0.2)' }}>
                  Submit General Application
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
