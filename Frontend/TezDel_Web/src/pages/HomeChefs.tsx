import { Utensils, Heart, Star, PlayCircle, ShieldCheck, Flame } from 'lucide-react';

export default function HomeChefs() {
  const chefs = [
    { name: 'Mrs. Dash', specialty: 'Dalma & Badi Chura', rating: 4.9, orders: '1200+', exp: '25y', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { name: 'Mrs. Mohapatra', specialty: 'Authentic Pakhala Platter', rating: 4.8, orders: '850+', exp: '30y', img: 'https://images.unsplash.com/photo-1595273670150-db0a3d39074f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { name: 'Mrs. Patnaik', specialty: 'Traditional Macha Besara', rating: 4.7, orders: '540+', exp: '20y', img: 'https://images.unsplash.com/photo-1566433333442-171189bbd9ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { name: 'Mrs. Sahoo', specialty: 'Chenna Poda & Pitha', rating: 4.9, orders: '2100+', exp: '15y', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="page-container" style={{ background: 'var(--color-bg-white)' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80) center/cover', 
        padding: '10rem 0', 
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
             <div className="glass" style={{ background: 'rgba(255, 61, 0, 0.2)', color: 'var(--color-primary)', padding: '10px 24px', borderRadius: 'var(--radius-full)', fontSize: '0.9rem', fontWeight: '800', border: '1px solid rgba(255, 61, 0, 0.3)' }}>
                AUTHENTIC ODIA HOME KITCHENS
             </div>
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1' }}>Taste the <span style={{ color: 'var(--color-primary)' }}>Heritage</span>.</h1>
          <p style={{ fontSize: '1.4rem', maxWidth: '850px', margin: '0 auto 3.5rem', opacity: 0.9, lineHeight: '1.6' }}>
            Real Odia Food. Cooked by mothers and grandmothers in their own kitchens. No commercial kitchens, just pure love and tradition delivered from Bhubaneswar’s finest homes.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <button className="btn btn-primary" style={{ padding: '1.2rem 3.5rem', fontSize: '1.1rem' }}>Order Homemade Now</button>
          </div>
        </div>
      </section>

      {/* Hygiene Promise */}
      <section style={{ padding: '4rem 0', background: 'var(--color-secondary)', color: 'white' }}>
         <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <ShieldCheck size={32} color="var(--color-primary)" />
                  <span style={{ fontWeight: '700', fontSize: '1.2rem' }}>FSSAI Registered Kitchens</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <ShieldCheck size={32} color="var(--color-primary)" />
                  <span style={{ fontWeight: '700', fontSize: '1.2rem' }}>Weekly Hygiene Audits</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <ShieldCheck size={32} color="var(--color-primary)" />
                  <span style={{ fontWeight: '700', fontSize: '1.2rem' }}>Pure Home-Cooked Ingredients</span>
               </div>
            </div>
         </div>
      </section>

      {/* Featured Chefs */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
             <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Meet the Masters</h2>
             <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>The culinary artists bringing Odisha's heritage to your plate.</p>
          </div>

          <div className="grid grid-4">
            {chefs.map(chef => (
              <div key={chef.name} className="service-card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 2rem' }}>
                  <img src={chef.img} alt={chef.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '4px solid white', boxShadow: 'var(--shadow-md)' }} />
                  <div style={{ position: 'absolute', bottom: '0', right: '0', background: 'var(--color-accent)', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid white' }}>
                     <Star size={14} fill="white" />
                  </div>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>{chef.name}</h3>
                <p style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{chef.specialty}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', padding: '1.5rem 0', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', marginBottom: '2rem' }}>
                   <div>
                      <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>{chef.rating}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>Rating</div>
                   </div>
                   <div style={{ borderLeft: '1px solid #f0f0f0', borderRight: '1px solid #f0f0f0' }}>
                      <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>{chef.orders}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>Orders</div>
                   </div>
                   <div>
                      <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>{chef.exp}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>Skills</div>
                   </div>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>View Full Menu</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Categories */}
      <section style={{ padding: '8rem 0', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {[
              { title: 'Healthy Thalis', icon: <Heart size={32} />, desc: 'Nutrient-rich daily meal plans with minimal oil and spice.' },
              { title: 'Traditional Staples', icon: <Flame size={32} />, desc: 'Authentic Dalma, Besara, and Saga Bhaja just like home.' },
              { title: 'Festival Specials', icon: <Utensils size={32} />, desc: 'Traditional Pithas, Manda, and Kakara for every festive occasion.' },
              { title: 'Chef Journeys', icon: <PlayCircle size={32} />, desc: 'Explore the stories and heritage behind every recipe.' }
            ].map(item => (
              <div key={item.title} className="glass" style={{ background: 'white', padding: '3.5rem 2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid rgba(0,0,0,0.02)' }}>
                 <div style={{ color: 'var(--color-primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                 <h4 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>{item.title}</h4>
                 <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
