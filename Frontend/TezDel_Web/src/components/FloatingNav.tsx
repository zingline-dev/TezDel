
import { motion } from 'framer-motion';
import { Home, Search, ShoppingBag, User, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Search', path: '/food' },
  { icon: ShoppingBag, label: 'Cart', path: '/grocery' },
  { icon: Heart, label: 'Favs', path: '/home-chefs' },
  { icon: User, label: 'Profile', path: '/contact' },
];

export default function FloatingNav() {
  const location = useLocation();

  return (
    <motion.div 
      className="mobile-only"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2000,
        width: '90%',
        maxWidth: '400px'
      }}
    >
      <div className="glass-dark" style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0.75rem',
        borderRadius: 'var(--radius-full)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} style={{ position: 'relative', padding: '0.5rem 1rem' }}>
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255, 61, 0, 0.15)',
                    borderRadius: 'var(--radius-full)',
                    zIndex: 0
                  }}
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  color: isActive ? 'var(--color-primary)' : 'rgba(255,255,255,0.6)',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span style={{ fontSize: '10px', fontWeight: isActive ? '700' : '500' }}>{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
