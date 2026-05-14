import React, { useState } from 'react';
import { Store, ShoppingBag, Bike, Zap, TrendingUp, DollarSign, ShieldCheck, Users, MapPin } from 'lucide-react';

export default function Partners() {
   const [activeTab, setActiveTab] = useState('restaurant');

   const partnerTypes = [
      { id: 'restaurant', name: 'Restaurant Partner', icon: <Store /> },
      { id: 'kirana', name: 'Kirana Partner', icon: <ShoppingBag /> },
      { id: 'captain', name: 'Delivery Captain', icon: <Bike /> }
   ];

   const benefits = {
      restaurant: [
         { title: 'Flat ₹999/Month', desc: 'Zero commissions. Keep 100% of your order value.', icon: <DollarSign /> },
         { title: 'ONDC Integrated', desc: 'Direct access to orders from PhonePe, Paytm, and Magicpin.', icon: <Zap /> },
         { title: 'Dedicated Support', desc: 'Local support team in Bhubaneswar to help you grow.', icon: <Users /> }
      ],
      kirana: [
         { title: 'Extra Income', desc: 'Turn your store into a digital dark store with zero investment.', icon: <TrendingUp /> },
         { title: 'Hyperlocal Reach', desc: 'Serve every household in your 2km radius digitally.', icon: <ShoppingBag /> },
         { title: 'Inventory Tech', desc: 'Free access to our smart inventory management app.', icon: <Zap /> }
      ],
      captain: [
         { title: 'Daily Payouts', desc: 'Get your earnings in your bank account every single day.', icon: <DollarSign /> },
         { title: 'Insurance Cover', desc: 'Accidental insurance coverage for you and your family.', icon: <ShieldCheck /> },
         { title: 'Flexible Zones', desc: 'Choose to work in your own neighbourhood or colony.', icon: <MapPin /> }
      ]
   };

   return (
      <div className="page-container" style={{ background: 'var(--color-bg-white)' }}>
         {/* Hero Header */}
         <section style={{
            background: 'var(--color-secondary)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem'
         }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))', zIndex: 0 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
               <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                  <div className="glass" style={{ background: 'rgba(255, 61, 0, 0.2)', color: 'var(--color-primary)', padding: '10px 24px', borderRadius: 'var(--radius-full)', fontSize: '0.9rem', fontWeight: '800', border: '1px solid rgba(255, 61, 0, 0.3)' }}>
                     JOIN THE ECOSYSTEM
                  </div>
               </div>
               <h1 style={{ fontSize: '4.5rem', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                  Grow With <span style={{ color: 'var(--color-primary)' }}>Bhubaneswar's</span> Own.
               </h1>
               <p style={{ fontSize: '1.4rem', maxWidth: '850px', margin: '0 auto', opacity: 0.8, lineHeight: '1.6' }}>
                  Whether you run a restaurant, own a kirana store, or want to earn as a captain, TezDel provides the technology to empower your growth.
               </p>
            </div>
         </section>

         {/* Sticky Tab Navigation */}
         <section className="glass" style={{
            padding: '1rem 0',
            position: 'sticky',
            top: '70px',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            zIndex: 100,
            borderBottom: '1px solid rgba(0,0,0,0.05)'
         }}>
            <div className="container">
               <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  {partnerTypes.map(type => (
                     <button
                        key={type.id}
                        onClick={() => setActiveTab(type.id)}
                        style={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: '12px',
                           padding: '1rem 2.5rem',
                           background: activeTab === type.id ? 'var(--color-secondary)' : 'transparent',
                           border: 'none',
                           borderRadius: 'var(--radius-sm)',
                           fontSize: '1.1rem',
                           fontWeight: '700',
                           color: activeTab === type.id ? 'white' : 'var(--color-text-muted)',
                           cursor: 'pointer',
                           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                           boxShadow: activeTab === type.id ? 'var(--shadow-md)' : 'none'
                        }}
                     >
                        {React.cloneElement(type.icon as React.ReactElement<any>, { size: 22 })}
                        {type.name}
                     </button>
                  ))}
               </div>
            </div>
         </section>

         {/* Tab Content Section */}
         <section style={{ padding: '8rem 0' }}>
            <div className="container">
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '6rem', alignItems: 'center' }}>
                  <div>
                     <div style={{ color: 'var(--color-primary)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                        {activeTab === 'restaurant' ? 'For Restaurants' : activeTab === 'kirana' ? 'For Kiranas' : 'For Delivery Captains'}
                     </div>
                     <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '2rem', color: 'var(--color-secondary)', lineHeight: '1.2' }}>
                        {activeTab === 'restaurant' ? 'Keep 100% of Your Profits.' : activeTab === 'kirana' ? 'Modernize Your Local Store.' : 'Earn with Freedom.'}
                     </h2>
                     <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '4rem' }}>
                        {activeTab === 'restaurant'
                           ? 'Stop paying 30% commissions. Our zero-commission model for Bhubaneswar restaurants ensures you thrive. We charge a flat monthly fee, no hidden costs.'
                           : activeTab === 'kirana'
                              ? 'Turn your existing inventory into a digital storefront. We provide the technology and the captains to deliver your goods to your neighbourhood in 20 minutes.'
                              : 'Work when you want, where you want. As a TezDel captain, you are a respected community partner delivering within your own locality.'
                        }
                     </p>

                     <div style={{ display: 'grid', gap: '2.5rem', marginBottom: '4rem' }}>
                        {(benefits[activeTab as keyof typeof benefits] || []).map((benefit, idx) => (
                           <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                              <div style={{
                                 background: 'var(--color-bg-light)',
                                 width: '56px',
                                 height: '56px',
                                 borderRadius: '16px',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 color: 'var(--color-primary)',
                                 flexShrink: 0
                              }}>
                                 {React.cloneElement(benefit.icon as React.ReactElement<any>, { size: 28 })}
                              </div>
                              <div>
                                 <h4 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>{benefit.title}</h4>
                                 <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{benefit.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>

                     <button className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem' }}>
                        Join as {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Partner
                     </button>
                  </div>

                  <div style={{ position: 'relative' }}>
                     <div style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '-20px',
                        right: '20px',
                        bottom: '20px',
                        background: 'var(--color-primary)',
                        borderRadius: 'var(--radius-lg)',
                        zIndex: 0,
                        opacity: 0.1
                     }}></div>
                     <div style={{ position: 'relative', zIndex: 1 }}>
                        <img
                           src={
                             activeTab === 'restaurant' 
                               ? "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
                               : activeTab === 'kirana' 
                                 ? "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80"
                                 : "https://images.pexels.com/photos/36698624/pexels-photo-36698624.jpeg?auto=compress&cs=tinysrgb&w=800"
                           }
                           alt={activeTab}
                           onError={(e) => {
                             const target = e.target as HTMLImageElement;
                             target.src = "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80"; // Colorful gradient fallback
                           }}
                           style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', display: 'block', minHeight: '400px', objectFit: 'cover', background: 'var(--color-bg-light)' }}
                        />
                        <div className="glass" style={{
                           position: 'absolute',
                           bottom: '20px',
                           right: '20px',
                           padding: '2rem',
                           background: 'white',
                           borderRadius: 'var(--radius-md)',
                           boxShadow: 'var(--shadow-lg)',
                           maxWidth: '280px',
                           border: '1px solid rgba(0,0,0,0.05)',
                           zIndex: 10
                        }}>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                              <div style={{ width: '32px', height: '32px', background: 'var(--color-bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                                 <TrendingUp size={16} />
                              </div>
                              <div style={{ fontWeight: '800', color: 'var(--color-secondary)', fontSize: '0.9rem' }}>Partner Growth</div>
                           </div>
                           <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.6', fontStyle: 'italic' }}>
                              {activeTab === 'restaurant'
                                 ? '"Saving ₹25k monthly on commissions since we switched to TezDel."'
                                 : activeTab === 'kirana'
                                    ? '"Our store sales increased by 40% after going digital with TezDel."'
                                    : '"I earn enough to support my family while working just 4 hours a day."'
                              }
                           </p>
                           <div style={{ marginTop: '1rem', fontWeight: '700', color: 'var(--color-secondary)', fontSize: '0.8rem' }}>— Local Partner, Patia</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Comparison Section (Only for Restaurants) */}
         {activeTab === 'restaurant' && (
            <section style={{ padding: '8rem 0', background: 'var(--color-bg-light)' }}>
               <div className="container">
                  <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                     <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-secondary)' }}>The Zero Commission Advantage</h2>
                     <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>See how much you save with TezDel compared to national aggregators.</p>
                  </div>
                  <div className="glass" style={{ background: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                     <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                           <tr style={{ background: 'var(--color-secondary)', color: 'white' }}>
                              <th style={{ padding: '2rem', textAlign: 'left', fontSize: '1.2rem' }}>Feature</th>
                              <th style={{ padding: '2rem', textAlign: 'center', fontSize: '1.2rem' }}>National Apps</th>
                              <th style={{ padding: '2rem', textAlign: 'center', fontSize: '1.2rem', background: 'var(--color-primary)' }}>TezDel</th>
                           </tr>
                        </thead>
                        <tbody style={{ fontSize: '1.1rem' }}>
                           <tr style={{ borderBottom: '1px solid #eee' }}>
                              <td style={{ padding: '2rem', fontWeight: '700' }}>Commission per Order</td>
                              <td style={{ padding: '2rem', textAlign: 'center', color: '#ef4444' }}>25% - 35%</td>
                              <td style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-accent-green)', fontWeight: '800' }}>0% (Zero)</td>
                           </tr>
                           <tr style={{ borderBottom: '1px solid #eee' }}>
                              <td style={{ padding: '2rem', fontWeight: '700' }}>Platform Fee</td>
                              <td style={{ padding: '2rem', textAlign: 'center' }}>Hidden Charges</td>
                              <td style={{ padding: '2rem', textAlign: 'center' }}>Flat ₹999/month</td>
                           </tr>
                           <tr style={{ borderBottom: '1px solid #eee' }}>
                              <td style={{ padding: '2rem', fontWeight: '700' }}>Payment Settlement</td>
                              <td style={{ padding: '2rem', textAlign: 'center' }}>T+3 to T+7 Days</td>
                              <td style={{ padding: '2rem', textAlign: 'center', fontWeight: '800' }}>Daily Payouts</td>
                           </tr>
                           <tr>
                              <td style={{ padding: '2rem', fontWeight: '700' }}>Customer Data Access</td>
                              <td style={{ padding: '2rem', textAlign: 'center', color: '#ef4444' }}>No Access</td>
                              <td style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-accent-green)', fontWeight: '800' }}>Full Ownership</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </section>
         )}

         {/* 3-Step Onboarding */}
         <section style={{ padding: '8rem 0' }}>
            <div className="container">
               <h2 style={{ fontSize: '3rem', fontWeight: '800', textAlign: 'center', marginBottom: '5rem', color: 'var(--color-secondary)' }}>Simple 3-Step Onboarding</h2>
               <div className="grid grid-3">
                  {[
                     { step: '01', title: 'Register Online', desc: 'Fill out our simple partnership form with your basic details and documents.' },
                     { step: '02', title: 'Verify & Train', desc: 'A quick verification call followed by a short training on our partner app.' },
                     { step: '03', title: 'Go Live', desc: 'Start receiving orders from across your neighbourhood instantly.' }
                  ].map((item, idx) => (
                     <div key={idx} style={{ textAlign: 'center', padding: '3rem' }}>
                        <div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--color-primary)', opacity: 0.1, marginBottom: '-2rem' }}>{item.step}</div>
                        <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '1.5rem', position: 'relative' }}>{item.title}</h4>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
}


