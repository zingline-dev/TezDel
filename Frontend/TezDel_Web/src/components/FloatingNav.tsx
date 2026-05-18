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
      className="floating-nav-outer mobile-only"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
    >
      <div className="floating-nav-inner">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`floating-nav-link ${isActive ? 'active' : ''}`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="floating-nav-pill"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="floating-nav-item"
                style={{
                  color: isActive ? 'var(--color-primary)' : 'rgba(255,255,255,0.6)',
                }}
              >
                <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span>{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
