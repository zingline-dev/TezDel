import { Search, MapPin, Filter, Star, Zap, Clock, TrendingUp, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Food() {
  const categories = [
    { name: 'Odia Specials', icon: '🍲' },
    { name: 'Biryani', icon: '🍚' },
    { name: 'Pizza', icon: '🍕' },
    { name: 'Burgers', icon: '🍔' },
    { name: 'Rolls', icon: '🌯' },
    { name: 'Desserts', icon: '🍦' }
  ];

  const restaurants = [
    { name: 'Odisha Hotel', rating: 4.8, time: '25 mins', price: '₹300 for two', tags: 'Odia, Thali', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { name: 'Dalma', rating: 4.6, time: '30 mins', price: '₹400 for two', tags: 'Odia, Authentic', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { name: 'The Biryani Box', rating: 4.4, time: '20 mins', price: '₹250 for two', tags: 'Biryani, North Indian', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { name: 'Pakhala Hub', rating: 4.7, time: '35 mins', price: '₹200 for two', tags: 'Local, Odia', img: 'https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { name: 'Tandoor Hot', rating: 4.2, time: '15 mins', price: '₹350 for two', tags: 'North Indian, Kebabs', img: 'https://images.unsplash.com/photo-1514516313544-7ed21b7a746e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { name: 'Sugar Rush', rating: 4.9, time: '10 mins', price: '₹150 for two', tags: 'Desserts, Shakes', img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="page-container" style={{ background: 'var(--color-bg-white)' }}>
      {/* Search Header */}
      <section style={{ padding: '4rem 0', background: 'var(--color-bg-light)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
             <div className="glass" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flex: '1', minWidth: '250px', background: 'white', padding: '1.2rem', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)' }}>
                <MapPin color="var(--color-primary)" size={24} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                   <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>DELIVERING TO</span>
                   <span style={{ fontWeight: '700', color: 'var(--color-text-main)' }}>Patia, Bhubaneswar</span>
                </div>
             </div>
             <div className="glass" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flex: '2', minWidth: '350px', background: 'white', padding: '1.2rem', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)' }}>
                <Search color="var(--color-text-muted)" size={24} />
                <input type="text" placeholder="Search for Pakhala, Dalma or your favorite restaurant" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1.1rem', background: 'transparent' }} />
             </div>
             <button className="btn btn-primary" style={{ padding: '1.2rem 2.5rem' }}>Find Food</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
             <h2 style={{ fontSize: '2rem', fontWeight: '800' }}>What's on your mind?</h2>
             <div style={{ display: 'flex', gap: '1rem' }}>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>←</button>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>→</button>
             </div>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', overflowX: 'auto', paddingBottom: '1rem' }} className="hide-scrollbar">
            {categories.map(cat => (
              <div key={cat.name} style={{ textAlign: 'center', cursor: 'pointer', flexShrink: 0 }}>
                <div style={{ 
                  fontSize: '3rem', 
                  background: 'var(--color-bg-light)', 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '1rem', 
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0,0,0,0.03)'
                }} className="hover-scale">
                   {cat.icon}
                </div>
                <div style={{ fontWeight: '700', color: 'var(--color-secondary)', fontSize: '1.1rem' }}>{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Delivery Promise Section */}
      <section className="container" style={{ marginBottom: '5rem' }}>
         <div className="glass" style={{ background: 'var(--color-secondary)', padding: '3rem', borderRadius: 'var(--radius-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(255, 61, 0, 0.2) 0%, rgba(255, 61, 0, 0) 100%)', zIndex: 0 }}></div>
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Zap color="var(--color-primary)" fill="var(--color-primary)" size={32} />
                  <span style={{ fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-primary)' }}>TezDel Promise</span>
               </div>
               <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>Lightning Fast Hyperlocal Delivery</h2>
               <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem' }}>We don't just deliver food; we deliver it while it's hot. Our community-based routing ensures your meal reaches you in under 30 minutes.</p>
               <div style={{ display: 'flex', gap: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     <Clock size={20} color="var(--color-primary)" />
                     <span style={{ fontWeight: '600' }}>Avg. 24 Mins</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     <TrendingUp size={20} color="var(--color-primary)" />
                     <span style={{ fontWeight: '600' }}>Live Tracking</span>
                  </div>
               </div>
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
               <img src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Delivery" style={{ width: '250px', borderRadius: 'var(--radius-md)', transform: 'rotate(5deg)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
         </div>
      </section>

      {/* Restaurant List */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
            <div>
               <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-secondary)' }}>Bhubaneswar's Best Picks</h2>
               <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>Curated list of top-rated restaurants near you.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
               <button className="glass" style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '0.8rem 1.5rem', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)', background: 'white', fontWeight: '600' }}>
                  <Filter size={20} /> Filters
               </button>
               <button className="glass" style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '0.8rem 1.5rem', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)', background: 'white', fontWeight: '600' }}>
                  Sort By: Relevance
               </button>
            </div>
          </div>

          <div className="grid grid-3">
            {restaurants.map(res => (
              <div key={res.name} className="service-card">
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img src={res.img} alt={res.name} style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="hover-zoom" />
                  <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--color-accent)', color: 'white', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                     <Star size={14} fill="white" /> {res.rating}
                  </div>
                  <div style={{ position: 'absolute', bottom: '15px', left: '15px', background: 'rgba(255,255,255,0.95)', padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '8px', backdropFilter: 'blur(4px)' }}>
                     <Clock size={16} color="var(--color-primary)" /> {res.time}
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--color-secondary)' }}>{res.name}</h3>
                   </div>
                   <div style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginBottom: '1.5rem' }}>{res.tags}</div>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f0f0f0', paddingTop: '1.5rem' }}>
                      <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-text-main)' }}>{res.price}</div>
                      <Link to="/food" style={{ color: 'var(--color-primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                         Explore <ChevronRight size={18} />
                      </Link>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers & Combo Section */}
      <section style={{ padding: '6rem 0', background: 'var(--color-bg-light)' }}>
         <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
               <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Combo Offers & Daily Deals</h2>
               <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>Maximum savings on your favorite Odia meals.</p>
            </div>
            <div className="grid grid-2">
               <div className="glass" style={{ background: 'linear-gradient(135deg, #FF3D00, #FF7547)', padding: '4rem 3rem', borderRadius: 'var(--radius-lg)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                  <Tag size={120} style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1, transform: 'rotate(-15deg)' }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                     <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1rem' }}>Odia Thali Combo</h3>
                     <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2.5rem', lineHeight: '1.6' }}>Authentic Dalma + Saga Bhaja + Rice + Dessert at just ₹199. Limited time offer!</p>
                     <button className="btn" style={{ background: 'white', color: 'var(--color-primary)', padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: '800' }}>Order Now</button>
                  </div>
               </div>
               <div className="glass" style={{ background: 'var(--color-secondary)', padding: '4rem 3rem', borderRadius: 'var(--radius-lg)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                  <TrendingUp size={120} style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1, transform: 'rotate(-15deg)' }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                     <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1rem' }}>Late Night Cravings</h3>
                     <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2.5rem', lineHeight: '1.6' }}>Hungry at 1 AM? We've got you covered with specialized late night delivery across Patia and KIIT.</p>
                     <button className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: '800', border: '1px solid rgba(255,255,255,0.2)' }}>Browse Late Night</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
