
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, TrendingUp, Utensils, ShoppingBasket, ChefHat, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Skeleton from './Skeleton';

export default function GlobalSearch({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        setResults(['Pakhala Thali', 'Dalma Special', 'Macha Besara', 'Chenna Poda']);
        setIsSearching(false);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [query]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const categories = [
    { name: 'Food', icon: <Utensils size={14} />, color: '#FF3D00' },
    { name: 'Grocery', icon: <ShoppingBasket size={14} />, color: '#10B981' },
    { name: 'Home Chef', icon: <ChefHat size={14} />, color: '#F59E0B' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 6000,
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(30px) saturate(180%)',
            padding: '2rem'
          }}
        >
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                style={{ background: 'rgba(0,0,0,0.05)', border: 'none', cursor: 'pointer', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={24} color="var(--color-secondary)" />
              </motion.button>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                scale: isFocused ? 1.02 : 1,
                boxShadow: isFocused ? '0 30px 60px rgba(255,61,0,0.15)' : '0 20px 50px rgba(0,0,0,0.1)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1.5rem 2.5rem',
                background: '#fff',
                borderRadius: '40px',
                border: isFocused ? '2px solid var(--color-primary)' : '2px solid rgba(0,0,0,0.05)',
                position: 'relative',
                zIndex: 10
              }}
            >
              <motion.div
                animate={{ 
                  scale: isFocused ? 1.2 : 1,
                  color: isFocused ? 'var(--color-primary)' : '#94a3b8'
                }}
              >
                <Search size={28} />
              </motion.div>
              <input
                autoFocus
                type="text"
                value={query}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you craving?"
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--color-secondary)',
                  background: 'transparent'
                }}
              />
              {query && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ rotate: 90 }}
                  onClick={() => setQuery('')}
                  style={{ background: 'rgba(0,0,0,0.05)', border: 'none', borderRadius: '50%', padding: '4px', cursor: 'pointer' }}
                >
                  <X size={18} />
                </motion.button>
              )}
            </motion.div>

            <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
              {/* Quick Categories */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h3 style={{ fontSize: '12px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.5rem', fontWeight: '800' }}>Categories</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {categories.map((cat) => (
                    <motion.button
                      key={cat.name}
                      whileHover={{ x: 10, background: 'rgba(0,0,0,0.02)' }}
                      style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', background: '#fff', cursor: 'pointer', width: '100%' }}
                    >
                      <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: `${cat.color}15`, color: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {cat.icon}
                      </div>
                      <span style={{ fontWeight: '700', fontSize: '15px' }}>{cat.name}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Trending Now */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.5rem', fontWeight: '800' }}>
                  <TrendingUp size={16} /> Trending
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {['Pakhala Festival', 'Fresh Prawns', 'Home Made Cakes', 'Biryani Combo', 'Grocery Offers'].map(item => (
                    <motion.button 
                      key={item} 
                      whileHover={{ scale: 1.05, background: 'rgba(255, 61, 0, 0.1)' }}
                      className="filter-chip-v3" 
                      style={{ background: 'rgba(255, 61, 0, 0.05)', color: 'var(--color-primary)', border: '1px solid rgba(255, 61, 0, 0.1)', padding: '10px 20px', borderRadius: '12px', fontWeight: '700', cursor: 'pointer' }}
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Results */}
            <AnimatePresence>
              {(isSearching || results.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{ marginTop: '2.5rem', background: '#fff', borderRadius: '32px', padding: '1.5rem', boxShadow: '0 40px 100px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.03)' }}
                >
                  {isSearching ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[1, 2, 3].map(i => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
                          <Skeleton width="24px" height="24px" borderRadius="50%" />
                          <Skeleton width="60%" height="20px" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    results.map((res, i) => (
                      <motion.div
                        key={res}
                        whileHover={{ x: 10, background: 'rgba(0,0,0,0.02)' }}
                        style={{ padding: '1.25rem 1.5rem', borderBottom: i < results.length - 1 ? '1px solid #f1f5f9' : 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '16px', borderRadius: '16px' }}
                      >
                        <div style={{ color: 'var(--color-primary)', background: 'rgba(255,61,0,0.1)', padding: '8px', borderRadius: '10px' }}>
                          <Search size={18} />
                        </div>
                        <span style={{ fontWeight: '700', fontSize: '16px' }}>{res}</span>
                        <ArrowRight size={16} style={{ marginLeft: 'auto', opacity: 0.3 }} />
                      </motion.div>
                    ))
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
