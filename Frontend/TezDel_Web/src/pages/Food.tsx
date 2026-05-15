
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Zap, Star, Filter, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Skeleton from '../components/Skeleton';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Food() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { name: 'Odia Specials', icon: '🍲' },
    { name: 'Biryani', icon: '🍚' },
    { name: 'Pizza', icon: '🍕' },
    { name: 'Burgers', icon: '🍔' },
    { name: 'Rolls', icon: '🌯' },
    { name: 'Desserts', icon: '🍮' },
  ];

  const restaurants = [
    { name: 'Odisha Hotel', rating: 4.8, time: '25 mins', price: '₹300 for two', tags: 'Odia · Thali', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80' },
    { name: 'Dalma Restaurant', rating: 4.6, time: '30 mins', price: '₹400 for two', tags: 'Odia · Authentic', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80' },
    { name: 'The Biryani Box', rating: 4.4, time: '20 mins', price: '₹250 for two', tags: 'Biryani · North Indian', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80' },
    { name: 'Pakhala Hub', rating: 4.7, time: '35 mins', price: '₹200 for two', tags: 'Local · Odia', img: 'https://images.unsplash.com/photo-1513415277900-a62401e19be4?auto=format&fit=crop&w=800&q=80' },
    { name: 'Tandoor Hot', rating: 4.2, time: '15 mins', price: '₹350 for two', tags: 'North Indian · Kebabs', img: 'https://images.unsplash.com/photo-1514516313544-7ed21b7a746e?auto=format&fit=crop&w=800&q=80' },
    { name: 'Sugar Rush', rating: 4.9, time: '10 mins', price: '₹150 for two', tags: 'Desserts · Shakes', img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="page-v3">
      {/* Header */}
      <section className="page-header-v3">
        <div className="page-header-v3-bg" style={{ background: '#0D0706' }} />
        <div className="page-header-v3-glow" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="food-search-container-v3"
            style={{ display: 'flex', gap: '16px', alignItems: 'stretch', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}
          >
            <div className="food-location-box-v3 glass">
              <MapPin size={18} color="var(--color-primary)" />
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '15px' }}>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginRight: '8px' }}>Location:</span>
                Patia, Bhubaneswar
              </div>
            </div>
            <div className="food-search-box-v3 glass">
              <Search size={20} color="rgba(255,255,255,0.4)" />
              <input type="text" placeholder="Search for Pakhala, Dalma..." style={{ border: 'none', outline: 'none', background: 'transparent', flex: 1, fontSize: '16px', color: '#fff', fontWeight: 500 }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="page-section-v3" style={{ background: 'var(--color-bg-light)', paddingTop: '40px' }}>
        <div className="container">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="section-title-v3" 
            style={{ marginBottom: '28px', textAlign: 'center', fontSize: '1.5rem' }}
          >
            What's on your mind?
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="food-chip-grid-v3" 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '12px' }}
          >
            {categories.map((cat) => (
              <motion.div 
                key={cat.name} 
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="food-cat-chip-v3 glass"
                style={{ background: '#fff', boxShadow: 'var(--shadow-sm)', padding: '1.5rem 1rem' }}
              >
                <span style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}>{cat.icon}</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-main)' }}>{cat.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="page-section-v3" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-title-v3" 
              style={{ fontSize: '24px', marginBottom: 0 }}
            >
              Popular Near You
            </motion.h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="filter-chip-v3 glass"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fff' }}
            >
              <Filter size={16} /> Filters
            </motion.button>
          </div>

          <div className="restaurant-grid-v3">
            <AnimatePresence mode="wait">
              {isLoading ? (
                Array(6).fill(0).map((_, i) => (
                  <div key={i} className="restaurant-card-v3">
                    <Skeleton height="200px" borderRadius="20px" />
                    <div style={{ padding: '1rem' }}>
                      <Skeleton width="70%" height="24px" />
                      <Skeleton width="40%" height="16px" className="mt-2" />
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                        <Skeleton width="20%" height="16px" />
                        <Skeleton width="30%" height="16px" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                restaurants.map((r, i) => (
                  <motion.article 
                    key={r.name} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="restaurant-card-v3"
                    style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}
                  >
                    <div className="restaurant-card-img-v3" style={{ position: 'relative', height: '200px' }}>
                      <img src={r.img} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div className="restaurant-card-badge-v3" style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', color: '#fff', padding: '4px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: '600' }}>
                        <Zap size={12} fill="currentColor" style={{ marginRight: '4px' }} /> {r.time}
                      </div>
                    </div>
                    <div className="restaurant-card-body-v3" style={{ padding: '1.25rem' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '4px' }}>{r.name}</h3>
                      <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '12px' }}>{r.tags}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '700', fontSize: '14px', color: '#1B8A60' }}>
                          <Star size={16} fill="currentColor" /> {r.rating}
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--color-text-muted)' }}>{r.price}</span>
                      </div>
                    </div>
                  </motion.article>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* TezPass Promo */}
      <section className="container" style={{ margin: '40px auto' }}>
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="tezpass-banner-v3 glass"
          style={{ background: 'linear-gradient(135deg, var(--color-secondary) 0%, #1e293b 100%)', borderRadius: '24px', padding: '2rem', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}
        >
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '800' }}>Get Unlimited Free Delivery</h3>
            <p style={{ opacity: 0.8, marginTop: '4px' }}>Join TezPass for ₹149/month and skip all delivery fees.</p>
          </div>
          <Link to="/investor" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Get TezPass <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
