
import { useState, useEffect } from 'react';
import { Search, MapPin, Zap, Star, Filter, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Skeleton from '../components/Skeleton';
import UnderDevelopmentModal from '../components/UnderDevelopmentModal';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
};

const wordReveal = {
  initial: { opacity: 0, y: 10 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as any
    }
  })
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
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
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
      <UnderDevelopmentModal isOpen={isDevModalOpen} onClose={() => setIsDevModalOpen(false)} />

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
      <section className="page-section-v3" style={{ background: 'var(--color-bg-light)', paddingTop: '60px' }}>
        <div className="container">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="section-title-v3" 
            style={{ marginBottom: '40px', textAlign: 'center', fontSize: '1.75rem' }}
          >
            {"What's on your mind?".split(' ').map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordReveal}
                style={{ display: 'inline-block', marginRight: '0.3em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="food-chip-grid-v3" 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))', gap: '16px' }}
          >
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.name} 
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="food-cat-chip-v3"
                style={{ 
                  background: '#fff', 
                  boxShadow: 'var(--shadow-premium)', 
                  padding: '2rem 1rem', 
                  borderRadius: '24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: '1px solid rgba(0,0,0,0.02)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <motion.span 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  style={{ fontSize: '36px', display: 'block', marginBottom: '10px' }}
                >
                  {cat.icon}
                </motion.span>
                <span style={{ fontSize: '14px', fontWeight: '800', color: 'var(--color-text-main)' }}>{cat.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="page-section-v3" style={{ background: 'var(--color-bg-light)', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-title-v3" 
              style={{ fontSize: '28px', marginBottom: 0 }}
            >
              Popular Near You
            </motion.h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="filter-chip-v3 glass"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', padding: '0.6rem 1.2rem', borderRadius: '12px', fontWeight: '700', fontSize: '14px' }}
            >
              <Filter size={16} /> Filters
            </motion.button>
          </div>

          <div className="restaurant-grid-v3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))', gap: '24px' }}>
            <AnimatePresence mode="wait">
              {isLoading ? (
                Array(6).fill(0).map((_, i) => (
                  <div key={i} className="restaurant-card-v3 glass" style={{ height: '360px', borderRadius: '28px' }}>
                    <Skeleton height="220px" borderRadius="28px" />
                    <div style={{ padding: '1.5rem' }}>
                      <Skeleton width="70%" height="28px" />
                      <Skeleton width="40%" height="18px" className="mt-2" />
                    </div>
                  </div>
                ))
              ) : (
                restaurants.map((r, i) => (
                  <motion.article 
                    key={r.name} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -12 }}
                    className="restaurant-card-v3"
                    style={{ 
                      background: '#fff', 
                      borderRadius: '28px', 
                      overflow: 'hidden', 
                      boxShadow: 'var(--shadow-premium)',
                      border: '1px solid rgba(0,0,0,0.02)'
                    }}
                  >
                    <div className="restaurant-card-img-v3" style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={r.img} 
                        alt={r.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      <div className="restaurant-card-badge-v3" style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(8px)', color: '#fff', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Zap size={14} fill="currentColor" /> {r.time}
                      </div>
                    </div>
                    <div className="restaurant-card-body-v3" style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontSize: '20px', fontWeight: '800' }}>{r.name}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#1B8A60', color: '#fff', padding: '2px 8px', borderRadius: '8px', fontSize: '12px', fontWeight: '700' }}>
                          <Star size={12} fill="currentColor" /> {r.rating}
                        </div>
                      </div>
                      <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginBottom: '16px', fontWeight: '500' }}>{r.tags}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--color-primary)' }}>{r.price}</span>
                        <motion.button 
                          whileHover={{ x: 5 }}
                          style={{ color: 'var(--color-secondary)', fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}
                        >
                          View Menu <ArrowRight size={16} />
                        </motion.button>
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
      <section className="container" style={{ margin: '60px auto' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="tezpass-banner-v3 glass"
          style={{ 
            background: 'linear-gradient(135deg, var(--color-secondary) 0%, #1e293b 100%)', 
            borderRadius: '32px', 
            padding: '3rem', 
            color: '#fff', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.5px' }}>Get Unlimited Free Delivery</h3>
            <p style={{ opacity: 0.8, marginTop: '8px', fontSize: '1.1rem', maxWidth: '400px' }}>Join TezPass for ₹149/month and skip all delivery fees on every order.</p>
          </div>
          <motion.button 
            onClick={() => setIsDevModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '1rem 2rem', 
              borderRadius: '16px', 
              fontSize: '1.1rem', 
              fontWeight: '700',
              position: 'relative',
              zIndex: 2 
            }}
          >
            Get TezPass <ArrowRight size={20} />
          </motion.button>
          
          {/* Decorative Glow */}
          <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '300px', height: '300px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.15, zIndex: 1 }} />
        </motion.div>
      </section>
    </div>
  );
}
