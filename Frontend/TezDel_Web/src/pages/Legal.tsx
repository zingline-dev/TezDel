import React, { useState } from 'react';
import { Shield, FileText, RefreshCw, Truck, Lock, Scale, ChevronRight } from 'lucide-react';

export default function Legal() {
  const [activeTab, setActiveTab] = useState('privacy');

  const sections = [
    { id: 'privacy', title: 'Privacy Policy', icon: <Lock size={20} /> },
    { id: 'terms', title: 'Terms & Conditions', icon: <FileText size={20} /> },
    { id: 'refund', title: 'Refund & Cancellation', icon: <RefreshCw size={20} /> },
    { id: 'delivery', title: 'Delivery Policy', icon: <Truck size={20} /> },
    { id: 'partner', title: 'Partner Agreement', icon: <Scale size={20} /> }
  ];

  const content: Record<string, React.ReactNode> = {
    privacy: (
      <div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Privacy Policy</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Last Updated: May 14, 2026</p>
        <p>At TezDel, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you use our hyperlocal delivery platform in Bhubaneswar and surrounding regions.</p>
        
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Data We Collect</h3>
        <p>We collect information you provide directly to us, such as when you create an account, place an order, or contact customer support. This includes:</p>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li>Account Information: Name, email, phone number, and encrypted passwords.</li>
          <li>Location Data: Precise GPS data to facilitate efficient hyperlocal routing and delivery.</li>
          <li>Order History: Details of your purchases and preferences.</li>
          <li>Payment Data: Processed via secure, PCI-DSS compliant third-party gateways.</li>
        </ul>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>2. How We Use Your Data</h3>
        <p>We use your data primarily to facilitate the delivery process, but also for:</p>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li>Routing Optimization: Improving our community-based delivery algorithms.</li>
          <li>Personalization: Recommending local food and grocery items based on your past behavior.</li>
          <li>Trust & Safety: Verifying identities and preventing fraudulent transactions.</li>
        </ul>
      </div>
    ),
    terms: (
      <div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Terms & Conditions</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Last Updated: May 14, 2026</p>
        <p>By using TezDel, you agree to comply with the following terms. These terms govern your access to our food, grocery, and home-chef delivery services in Odisha.</p>
        
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h3>
        <p>Your use of the TezDel app or website signifies your agreement to these Terms of Service. If you do not agree, please do not use the platform. We reserve the right to update these terms at any time.</p>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Account Responsibilities</h3>
        <p>You are responsible for maintaining the confidentiality of your account credentials. Any activity performed via your account is your responsibility.</p>
        
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Service Availability</h3>
        <p>TezDel operates as a hyperlocal network. Service is restricted to our active delivery zones in Bhubaneswar. Delivery times are estimates and not guarantees.</p>
      </div>
    ),
    refund: (
      <div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Refund & Cancellation</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Our Goal: 100% Satisfaction</p>
        <p>TezDel values the trust you place in our partners. Our refund policy is designed to be fair to both customers and our community-based sellers.</p>
        
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Cancellations</h3>
        <p>Orders can be cancelled before preparation begins. Once a restaurant starts cooking or a kirana starts packing, cancellations may incur a fee of up to 100% of the order value.</p>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Refund Eligibility</h3>
        <p>You are eligible for a full or partial refund if:</p>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li>The delivered item is significantly different from what was ordered.</li>
          <li>Items are missing from your package.</li>
          <li>The package was tampered with during delivery.</li>
          <li>The delivery time exceeded the estimate by more than 45 minutes due to platform error.</li>
        </ul>
      </div>
    ),
    delivery: (
      <div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Delivery Policy</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Powered by Neighbourhood Captains</p>
        <p>TezDel is built for speed and reliability within the Bhubaneswar urban landscape.</p>
        
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>1. The 20-Minute Promise</h3>
        <p>Our 20-minute delivery target applies to grocery orders within a 2km radius of our active zones. While we strive for this speed, factors like extreme weather or festive traffic may impact delivery times.</p>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Verification</h3>
        <p>Deliveries are handled by verified Neighbourhood Captains. High-value orders may require a Secure OTP for verification at the doorstep.</p>
      </div>
    ),
    partner: (
      <div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Partner Agreement</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>The Zero-Commission Advantage</p>
        <p>This agreement governs the relationship between TezDel and its Merchant Partners (Restaurants, Home Chefs, and Kirana Stores).</p>
        
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Pricing Model</h3>
        <p>TezDel operates on a flat monthly subscription model (currently ₹999/month for restaurants). We charge **Zero Commission** on individual orders, allowing partners to retain 100% of their revenue.</p>

        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Quality Standards</h3>
        <p>Partners agree to maintain high hygiene and quality standards. Home Chefs must maintain FSSAI registration. TezDel reserves the right to audit kitchens for hygiene compliance.</p>
      </div>
    )
  };

  return (
    <div className="page-container" style={{ background: 'var(--color-bg-white)' }}>
      {/* Header */}
      <section style={{ 
        background: 'var(--color-bg-light)', 
        padding: '8rem 0 6rem',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
             <Shield color="var(--color-primary)" size={32} />
             <div style={{ fontWeight: '800', letterSpacing: '2px', color: 'var(--color-primary)' }}>LEGAL CENTER</div>
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Trust & Transparency.</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px' }}>
             Our policies are designed to build a sustainable, fair, and safe ecosystem for Bhubaneswar.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '6rem' }}>
            {/* Sidebar Navigation */}
            <div style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {sections.map(sec => (
                  <button 
                    key={sec.id}
                    onClick={() => setActiveTab(sec.id)}
                    style={{ 
                      textAlign: 'left', 
                      padding: '1.25rem 2rem', 
                      borderRadius: 'var(--radius-sm)', 
                      border: 'none', 
                      background: activeTab === sec.id ? 'var(--color-secondary)' : 'transparent', 
                      color: activeTab === sec.id ? 'white' : 'var(--color-text-muted)', 
                      fontWeight: '700',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: activeTab === sec.id ? 'var(--shadow-md)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                       {sec.icon}
                       {sec.title}
                    </div>
                    {activeTab === sec.id && <ChevronRight size={18} />}
                  </button>
                ))}
              </div>
              
              <div className="glass" style={{ marginTop: '4rem', padding: '2.5rem', background: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.02)' }}>
                 <h4 style={{ fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Need Legal Help?</h4>
                 <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    If you have questions regarding our legal documents, please reach out to our legal team.
                 </p>
                 <a href="mailto:legal@tezdel.com" style={{ color: 'var(--color-primary)', fontWeight: '800', textDecoration: 'none', display: 'block' }}>legal@tezdel.com</a>
              </div>
            </div>

            {/* Content Area */}
            <div className="legal-body" style={{ 
              maxWidth: '850px', 
              lineHeight: '1.8', 
              color: 'var(--color-text-muted)', 
              fontSize: '1.1rem' 
            }}>
              {content[activeTab]}
              
              <div style={{ 
                marginTop: '6rem', 
                padding: '3rem', 
                borderTop: '1px solid #eee',
                textAlign: 'center'
              }}>
                 <Shield size={48} color="var(--color-primary)" style={{ opacity: 0.2, marginBottom: '1.5rem', margin: '0 auto 1.5rem' }} />
                 <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>
                    © 2026 TezDel Hyperlocal Platform. All Rights Reserved. <br/>
                    Registered Entity: TezDel Technologies Pvt. Ltd.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style>{`
        .legal-body p { margin-bottom: 1.5rem; }
        .legal-body strong { color: var(--color-secondary); }
      `}</style>
    </div>
  );
}
