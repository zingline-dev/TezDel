
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, MapPin, TrendingUp, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function GlobalSearch({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (query.length > 2) {
      setResults(['Pakhala Thali', 'Dalma Special', 'Macha Besara', 'Chenna Poda']);
    } else {
      setResults([]);
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
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            padding: '2rem'
          }}
        >
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={onClose}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <X size={32} color="var(--color-secondary)" />
              </motion.button>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1.5rem 2rem',
                background: '#fff',
                borderRadius: '32px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              <Search size={24} color="var(--color-primary)" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for restaurants, dishes or groceries..."
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--color-secondary)'
                }}
              />
            </motion.div>

            <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              {/* Recent Searches */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>
                  <Clock size={16} /> Recent Searches
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {['Biryani', 'Grocery near me', 'Amul Milk'].map(item => (
                    <button key={item} className="filter-chip-v3" style={{ background: 'rgba(0,0,0,0.03)', border: 'none', padding: '8px 16px' }}>{item}</button>
                  ))}
                </div>
              </motion.div>

              {/* Trending Now */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>
                  <TrendingUp size={16} /> Trending in Bhubaneswar
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {['Pakhala Festival', 'Fresh Prawns', 'Home Made Cakes'].map(item => (
                    <button key={item} className="filter-chip-v3" style={{ background: 'rgba(255, 61, 0, 0.05)', color: 'var(--color-primary)', border: 'none', padding: '8px 16px' }}>{item}</button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Results */}
            <AnimatePresence>
              {results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{ marginTop: '2rem', background: '#fff', borderRadius: '24px', padding: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                >
                  {results.map((res, i) => (
                    <motion.div
                      key={res}
                      whileHover={{ x: 10, background: 'rgba(0,0,0,0.02)' }}
                      style={{ padding: '1rem', borderBottom: i < results.length - 1 ? '1px solid #f1f5f9' : 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
                    >
                      <MapPin size={18} color="rgba(0,0,0,0.2)" />
                      <span style={{ fontWeight: '600' }}>{res}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
