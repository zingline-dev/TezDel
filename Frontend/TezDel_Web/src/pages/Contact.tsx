import { Mail, MapPin, MessageSquare, Globe, ShieldAlert, FileText, Send, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="page-container" style={{ background: 'var(--color-bg-white)' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)', 
        padding: '10rem 0 8rem', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(255, 61, 0, 0.05) 0%, transparent 70%)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
             <div className="glass" style={{ background: 'rgba(255, 61, 0, 0.1)', color: 'var(--color-primary)', padding: '10px 24px', borderRadius: 'var(--radius-full)', fontSize: '0.9rem', fontWeight: '800', border: '1px solid rgba(255, 61, 0, 0.2)' }}>
                GET IN TOUCH
             </div>
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: '900', marginBottom: '1.5rem', color: 'var(--color-secondary)', lineHeight: '1.1' }}>
            We're Always <span style={{ color: 'var(--color-primary)' }}>Connected</span>.
          </h1>
          <p style={{ fontSize: '1.4rem', color: 'var(--color-text-muted)', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
            Have a question about an order, partnership, or career? Our team in Bhubaneswar is ready to support you 24/7.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6rem' }}>
            {/* Contact Form */}
            <div className="glass" style={{ background: 'white', padding: '4rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.02)' }}>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '2.5rem', color: 'var(--color-secondary)' }}>Send a Message</h3>
              <form style={{ display: 'grid', gap: '2rem' }}>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                       <label style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--color-secondary)' }}>Full Name</label>
                       <input type="text" placeholder="John Doe" style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee', outline: 'none', background: 'var(--color-bg-light)', fontSize: '1rem' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                       <label style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--color-secondary)' }}>Email Address</label>
                       <input type="email" placeholder="john@example.com" style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee', outline: 'none', background: 'var(--color-bg-light)', fontSize: '1rem' }} />
                    </div>
                 </div>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <label style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--color-secondary)' }}>Department</label>
                    <select style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee', outline: 'none', background: 'var(--color-bg-light)', fontSize: '1rem', appearance: 'none' }}>
                       <option>Customer Support</option>
                       <option>Partner Onboarding</option>
                       <option>Investor Relations</option>
                       <option>Media & Press</option>
                       <option>Careers</option>
                    </select>
                 </div>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <label style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--color-secondary)' }}>Your Message</label>
                    <textarea placeholder="How can we help you today?" rows={6} style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid #eee', outline: 'none', background: 'var(--color-bg-light)', fontSize: '1rem', resize: 'none' }}></textarea>
                 </div>
                 <button className="btn btn-primary" style={{ padding: '1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                    <Send size={24} /> Send Inquiry
                 </button>
              </form>
            </div>

            {/* Contact Info & Socials */}
            <div>
               <h3 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '3rem', color: 'var(--color-secondary)' }}>Quick Connect</h3>
               <div style={{ display: 'grid', gap: '3rem' }}>
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                     <div style={{ background: 'var(--color-bg-light)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
                        <MapPin size={28} />
                     </div>
                     <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>HQ Address</h4>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '1.1rem' }}>
                           TezDel Innovation Hub, 4th Floor<br/>
                           Infocity Square, Patia<br/>
                           Bhubaneswar, Odisha 751024
                        </p>
                     </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                     <div style={{ background: '#DCFCE7', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#166534', flexShrink: 0 }}>
                        <MessageSquare size={28} />
                     </div>
                     <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>WhatsApp Support</h4>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>Instant resolution for active orders and captain support.</p>
                        <a href="https://wa.me/916741234567" style={{ color: '#166534', fontWeight: '800', fontSize: '1.1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                           Chat Now <ChevronRight size={18} />
                        </a>
                     </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                     <div style={{ background: 'var(--color-bg-light)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
                        <Mail size={28} />
                     </div>
                     <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Email Support</h4>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '1.1rem' }}>
                           General: hello@tezdel.com<br/>
                           Partners: grow@tezdel.com<br/>
                           Investors: invest@tezdel.com
                        </p>
                     </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                     <div style={{ background: 'var(--color-bg-light)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
                        <Clock size={28} />
                     </div>
                     <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Operational Hours</h4>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '1.1rem' }}>
                           Daily: 7:00 AM – 2:00 AM<br/>
                           Office: 10:00 AM – 7:00 PM (Mon-Sat)
                        </p>
                     </div>
                  </div>
               </div>

               <div style={{ marginTop: '5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Connect with us</h4>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                     {[Globe, Mail, FileText].map((Icon, i) => (
                        <div key={i} className="glass hover-lift" style={{ width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-secondary)', color: 'white', cursor: 'pointer' }}>
                           <Icon size={22} />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section style={{ padding: '8rem 0', background: 'var(--color-bg-light)' }}>
         <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
               <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--color-secondary)' }}>Helpful Resources</h2>
               <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>Quick links to common inquiries and support tools.</p>
            </div>
            <div className="grid grid-3">
               {[
                  { title: 'Help Center', desc: 'Browse our extensive FAQs and tutorials on how to use the TezDel platform.', icon: <MessageSquare size={24} /> },
                  { title: 'Safety & Trust', desc: 'Report any safety concerns or suspicious activities directly to our security team.', icon: <ShieldAlert size={24} /> },
                  { title: 'Press & Media', desc: 'Download our official press kit, brand assets, and high-resolution media resources.', icon: <FileText size={24} /> }
               ].map((item, idx) => (
                  <div key={idx} className="glass" style={{ background: 'white', padding: '3.5rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.02)', textAlign: 'center' }}>
                     <div style={{ background: 'var(--color-bg-light)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: 'var(--color-primary)' }}>
                        {item.icon}
                     </div>
                     <h4 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '1rem' }}>{item.title}</h4>
                     <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>{item.desc}</p>
                     <button style={{ color: 'var(--color-primary)', fontWeight: '800', background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto', cursor: 'pointer', fontSize: '1rem' }}>
                        Learn More <ChevronRight size={18} />
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}

import { ChevronRight } from 'lucide-react';
