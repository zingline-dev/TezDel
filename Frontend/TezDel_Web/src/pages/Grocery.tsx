import { Zap, Clock, MapPin, Search, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Grocery() {
  const categories = [
    { title: 'Daily Essentials', icon: '🥛', desc: 'Milk, bread, and eggs from local farms.', color: '#E0F2FE' },
    { title: 'Fresh Produce', icon: '🥬', desc: 'Farm-fresh vegetables & seasonal fruits.', color: '#DCFCE7' },
    { title: 'Dairy & Omfed', icon: '🧀', desc: 'Fresh Omfed milk & local dairy products.', color: '#FEF9C3' },
    { title: 'Household', icon: '🧼', desc: 'Daily cleaning & personal care needs.', color: '#F3E8FF' }
  ];

  const zones = ['Patia', 'Infocity', 'KIIT Area', 'Sailashree Vihar', 'Niladri Vihar', 'Nayapalli', 'Saheed Nagar', 'Old Town', 'Khandagiri'];

  return (
    <div className="page-container" style={{ background: 'var(--color-bg-white)' }}>
      {/* Hero Header */}
      <section style={{ 
        background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)', 
        padding: '6rem 0 8rem', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '30%', height: '40%', background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '30%', height: '40%', background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
             <div className="glass" style={{ background: 'rgba(34, 197, 94, 0.1)', color: 'var(--color-accent-green)', padding: '10px 24px', borderRadius: 'var(--radius-full)', fontSize: '0.9rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                <Zap size={18} fill="var(--color-accent-green)" /> 20-MINUTE HYPERLOCAL DELIVERY
             </div>
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: '900', marginBottom: '1.5rem', color: 'var(--color-secondary)', lineHeight: '1.1' }}>
            Bhubaneswar’s <span style={{ color: 'var(--color-accent-green)' }}>Freshly</span> Delivered.
          </h1>
          <p style={{ fontSize: '1.4rem', color: 'var(--color-text-muted)', maxWidth: '750px', margin: '0 auto 3.5rem', lineHeight: '1.6' }}>
            Get your daily essentials, Omfed milk, and farm-fresh produce delivered by your local Kirana partners in just 20 minutes.
          </p>

          <div className="glass" style={{ display: 'flex', gap: '0', maxWidth: '800px', margin: '0 auto', background: 'white', padding: '0.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '1rem 1.5rem', borderRight: '1px solid #eee', minWidth: '220px' }}>
                <MapPin size={24} color="var(--color-accent-green)" />
                <div style={{ textAlign: 'left' }}>
                   <div style={{ fontSize: '0.7rem', fontWeight: '700', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Location</div>
                   <div style={{ fontWeight: '700', color: 'var(--color-secondary)' }}>Bhubaneswar, Odisha</div>
                </div>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1', padding: '1rem 1.5rem' }}>
                <Search size={24} color="var(--color-text-muted)" />
                <input type="text" placeholder="Search for OMFED, Eggs, Bread or Fresh Vegetables" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1.1rem', background: 'transparent' }} />
             </div>
             <button className="btn" style={{ background: 'var(--color-accent-green)', color: 'white', padding: '0 2.5rem', borderRadius: 'var(--radius-sm)' }}>Search</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
         <div className="container">
            <div className="glass" style={{ background: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
               <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                     <Truck color="var(--color-accent-green)" size={28} />
                     <span style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-secondary)' }}>20 MINS</span>
                  </div>
                  <div style={{ color: 'var(--color-text-muted)', fontWeight: '600' }}>Average Delivery Time</div>
               </div>
               <div style={{ borderLeft: '1px solid #eee', borderRight: '1px solid #eee' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                     <ShoppingBag color="var(--color-accent-green)" size={28} />
                     <span style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-secondary)' }}>5000+</span>
                  </div>
                  <div style={{ color: 'var(--color-text-muted)', fontWeight: '600' }}>Daily Essentials</div>
               </div>
               <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                     <ShieldCheck color="var(--color-accent-green)" size={28} />
                     <span style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-secondary)' }}>100%</span>
                  </div>
                  <div style={{ color: 'var(--color-text-muted)', fontWeight: '600' }}>Quality Assurance</div>
               </div>
            </div>
         </div>
      </section>

      {/* Categories Grid */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
             <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Shop by Category</h2>
             <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>Everything you need for your home, sourced locally.</p>
          </div>
          <div className="grid grid-4">
            {categories.map(cat => (
              <div key={cat.title} className="service-card" style={{ padding: '3.5rem 2rem', textAlign: 'center', background: 'white' }}>
                <div style={{ background: cat.color, width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '3.5rem' }}>
                   {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '800', color: 'var(--color-secondary)' }}>{cat.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '1rem', marginBottom: '2rem' }}>{cat.desc}</p>
                <button style={{ color: 'var(--color-accent-green)', fontWeight: '800', background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto', cursor: 'pointer' }}>
                   Shop Now <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OMFED Section */}
      <section style={{ padding: '8rem 0', background: '#FFFBEB', position: 'relative' }}>
         <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
               <div style={{ position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1550583724-125581cc25fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Fresh Milk" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
                  <div className="glass" style={{ position: 'absolute', top: '20px', left: '20px', background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0,0,0,0.05)' }}>
                     <div style={{ color: 'var(--color-secondary)', fontWeight: '900', fontSize: '1.5rem' }}>OMFED Fresh</div>
                     <div style={{ color: '#F59E0B', fontWeight: '700' }}>Direct from Odisha Farms</div>
                  </div>
               </div>
               <div>
                  <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem', color: 'var(--color-secondary)', lineHeight: '1.2' }}>Odisha's Own <span style={{ color: '#F59E0B' }}>Milk Network</span>.</h2>
                  <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                     We have partnered with local Omfed distributors to ensure you get fresh milk, curd, and lassi every single morning. Set up a daily subscription and never run out of essentials.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem' }}>
                     <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600' }}>
                        <div style={{ width: '24px', height: '24px', background: '#FEF3C7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <ShieldCheck size={16} color="#F59E0B" />
                        </div>
                        Morning 6 AM Guaranteed Delivery
                     </li>
                     <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600' }}>
                        <div style={{ width: '24px', height: '24px', background: '#FEF3C7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <ShieldCheck size={16} color="#F59E0B" />
                        </div>
                        Farm to Table Quality
                     </li>
                     <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600' }}>
                        <div style={{ width: '24px', height: '24px', background: '#FEF3C7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <ShieldCheck size={16} color="#F59E0B" />
                        </div>
                        Flexible Subscription Plans
                     </li>
                  </ul>
                  <button className="btn" style={{ background: '#F59E0B', color: 'white', padding: '1.2rem 3rem', fontSize: '1.1rem', fontWeight: '800' }}>Start Milk Subscription</button>
               </div>
            </div>
         </div>
      </section>

      {/* 20-Min Zones */}
      <section style={{ padding: '8rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem', color: 'var(--color-secondary)' }}>20-Minute Delivery Zones</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '3rem' }}>
                We empower your neighbourhood Kirana stores to act as "Digital Dark Stores." By leveraging local inventory and community captains, we promise delivery in these active zones within 20 minutes.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '3rem' }}>
                {zones.map(zone => (
                   <span key={zone} className="glass" style={{ padding: '10px 20px', background: 'white', color: 'var(--color-accent-green)', borderRadius: 'var(--radius-full)', fontSize: '1rem', fontWeight: '700', border: '1px solid rgba(34, 197, 94, 0.1)' }}>{zone}</span>
                ))}
              </div>
              <p style={{ fontWeight: '700', color: 'var(--color-secondary)' }}>Not in your area yet? <Link to="/contact" style={{ color: 'var(--color-primary)' }}>Request a zone.</Link></p>
            </div>
            <div className="glass" style={{ background: 'white', padding: '4rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', textAlign: 'center', border: '1px solid rgba(0,0,0,0.02)' }}>
               <div style={{ background: 'rgba(34, 197, 94, 0.05)', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem' }}>
                  <Clock size={48} color="var(--color-accent-green)" />
               </div>
               <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Kirana-Powered Network</h3>
               <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '3rem' }}>Our neighbourhood captains are already in your colony, ensuring zero-mile delivery efficiency.</p>
               <button className="btn btn-primary" style={{ background: 'var(--color-accent-green)', width: '100%', padding: '1.5rem', fontSize: '1.2rem', fontWeight: '800' }}>Check Real-time Availability</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
