
import { useState, useEffect } from 'react';
import { Search, MapPin, Zap, Store, ArrowRight, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Skeleton from '../components/Skeleton';
import UnderDevelopmentModal from '../components/UnderDevelopmentModal';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
};

const wordReveal = {
  initial: { opacity: 0, y: 10 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const
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

export default function Grocery() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { title: 'Daily Essentials', icon: '🥛', desc: 'Milk, bread, and eggs from local farms.', color: '#E0F2FE', border: '#BAE6FD' },
    { title: 'Fresh Produce', icon: '🥦', desc: 'Farm-fresh vegetables & seasonal fruits.', color: '#DCFCE7', border: '#86EFAC' },
    { title: 'Dairy & Omfed', icon: '🧀', desc: 'Fresh Omfed milk & local dairy products.', color: '#FEF9C3', border: '#FDE047' },
    { title: 'Household', icon: '🧹', desc: 'Daily cleaning & personal care needs.', color: '#F3E8FF', border: '#C084FC' },
  ];

  const stores = [
    { name: 'Patia Kirana Corner', loc: 'Patia', items: '800+ items', time: '18 mins', icon: <Store size={32} /> },
    { name: 'Sahoo General Store', loc: 'Nayapalli', items: '600+ items', time: '22 mins', icon: <Store size={32} /> },
    { name: 'Patel Brothers', loc: 'Saheed Nagar', items: '1200+ items', time: '25 mins', icon: <Store size={32} /> },
    { name: 'Omfed Dairy Centre', loc: 'Infocity', items: 'Dairy Specialist', time: '15 mins', icon: <Package size={32} /> },
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
              <input type="text" placeholder="Search for vegetables, milk, groceries..." style={{ border: 'none', outline: 'none', background: 'transparent', flex: 1, fontSize: '16px', color: '#fff', fontWeight: 500 }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promise Band */}
      <div className="stats-band-v3" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="stats-band-v3-inner">
          {[{ value: '20 min', label: 'Express Delivery' }, { value: '1000+', label: 'Grocery Items' }, { value: '₹0', label: 'Delivery Fee' }, { value: 'Local', label: 'Kirana Network' }].map((s, i) => (
            <motion.div 
              key={s.label} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="stat-item-v3"
            >
              <strong>{s.value}</strong><span>{s.label}</span>
            </motion.div>
          ))}
        </div>
        {/* Animated Particle Light */}
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', top: 0, height: '100%', width: '100px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', skewX: '-20deg' }}
        />
      </div>

      {/* Categories */}
      <section className="page-section-v3" style={{ background: 'var(--color-bg-light)', paddingTop: '80px' }}>
        <div className="container">
          <div className="section-head-v3" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <motion.p initial="initial" whileInView="animate" variants={fadeInUp} className="section-label-v3">Shop by Category</motion.p>
            <motion.h2 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="section-title-v3" 
              style={{ fontSize: '2rem' }}
            >
              {"What Do You Need Today?".split(' ').map((word, i) => (
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
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="cat-grid-v3"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))', gap: '24px' }}
          >
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.title} 
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -12 }}
                className="cat-card-v3" 
                style={{ 
                  background: cat.color, 
                  border: `1.5px solid ${cat.border}`, 
                  borderRadius: '32px', 
                  padding: '3rem 2rem',
                  transformStyle: 'preserve-3d',
                  boxShadow: 'var(--shadow-premium)'
                }}
              >
                <motion.span 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  className="cat-icon-v3" 
                  style={{ fontSize: '48px', display: 'block', marginBottom: '1.5rem' }}
                >
                  {cat.icon}
                </motion.span>
                <h3 className="cat-name-v3" style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px' }}>{cat.title}</h3>
                <p className="cat-desc-v3" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '500' }}>{cat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stores */}
      <section className="page-section-v3" style={{ background: '#0D0706', overflow: 'hidden', padding: '100px 0' }}>
        <div className="container">
          <div className="section-head-v3" style={{ marginBottom: '60px' }}>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-label-v3" style={{ color: 'rgba(255,255,255,0.5)' }}>Partner Stores</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="section-title-v3" style={{ color: '#fff', fontSize: '2.5rem' }}>Your Neighbourhood<br />Kirana Network</motion.h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))', gap: '24px' }}>
            <AnimatePresence mode="wait">
              {isLoading ? (
                Array(4).fill(0).map((_, i) => (
                  <div key={i} className="why-card-v3 glass" style={{ height: '240px', borderRadius: '32px' }}>
                    <Skeleton width="48px" height="48px" borderRadius="12px" />
                    <Skeleton width="70%" height="28px" className="mt-4" />
                    <Skeleton width="40%" height="18px" className="mt-2" />
                  </div>
                ))
              ) : (
                stores.map((s, i) => (
                  <motion.div 
                    key={s.name} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -12, borderColor: 'var(--color-primary)' }}
                    className="why-card-v3 glass" 
                    style={{ display: 'flex', flexDirection: 'column', gap: '20px', borderRadius: '32px', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)' }}
                  >
                    <div style={{ color: 'var(--color-primary)', background: 'rgba(255,61,0,0.1)', padding: '12px', borderRadius: '16px', width: 'fit-content' }}>{s.icon}</div>
                    <div>
                      <h3 className="why-title-v3" style={{ fontSize: '20px', fontWeight: '800', marginBottom: '6px' }}>{s.name}</h3>
                      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontWeight: '500' }}>📍 {s.loc}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto', alignItems: 'center' }}>
                      <span className="badge-yes" style={{ fontSize: '11px', background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '8px' }}>{s.items}</span>
                      <span style={{ fontSize: '14px', color: 'var(--color-primary)', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Zap size={16} fill="currentColor" /> {s.time}
                      </span>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Kirana Partner CTA */}
      <section className="tezpass-v3" style={{ padding: '120px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label-v3" style={{ color: 'rgba(255,255,255,0.7)' }}>For Kirana Owners</p>
            <h2 className="section-title-v3 tezpass-v3-title" style={{ margin: '0 auto 1.5rem', fontSize: '2.5rem' }}>Put Your Store<br />Online — In Minutes.</h2>
            <p className="tezpass-v3-p" style={{ maxWidth: '520px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>No tech skills needed. We handle everything. You just pack the orders and we deliver.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDevModalOpen(true)}
              className="btn-outline-white-v3"
              style={{ padding: '1.25rem 3rem', borderRadius: '20px', fontWeight: '800', background: 'transparent', border: '2px solid #fff', color: '#fff', cursor: 'pointer', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '12px' }}
            >
              Register Your Store <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
