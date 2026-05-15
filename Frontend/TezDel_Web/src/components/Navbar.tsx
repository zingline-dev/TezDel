
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Search, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalSearch from './GlobalSearch';
import UnderDevelopmentModal from './UnderDevelopmentModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Food', path: '/food' },
    { name: 'Grocery', path: '/grocery' },
    { name: 'Investor', path: '/investor' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <UnderDevelopmentModal isOpen={isDevModalOpen} onClose={() => setIsDevModalOpen(false)} />
      <motion.header
        className={`header ${isScrolled ? 'scrolled glass' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      <div className="container nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/" className="nav-logo-v3" aria-label="TezDel Home">
            <div className="nav-logo-mark-v3">
              <span>Tz</span>
            </div>
            <span className="nav-logo-text-v3" style={{ color: isScrolled ? 'var(--color-text-main)' : '#fff' }}>
              Tez<em style={{ color: 'var(--color-primary)', fontStyle: 'normal' }}>Del</em>
            </span>
          </Link>
        </motion.div>

        <nav className="nav-links desktop-only" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link-premium ${location.pathname === link.path ? 'active' : ''}`}
              style={{
                color: isScrolled ? 'var(--color-text-main)' : 'white',
                position: 'relative',
                padding: '0.5rem 0'
              }}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="nav-underline"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--color-primary)',
                    borderRadius: '2px'
                  }}
                />
              )}
            </Link>
          ))}
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: '2rem' }}>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSearchOpen(true)}
              style={{ background: 'none', border: 'none', color: isScrolled ? 'var(--color-text-main)' : 'white', cursor: 'pointer' }}
            >
              <Search size={22} />
            </motion.button>
            
            <Link to="/grocery" style={{ color: isScrolled ? 'var(--color-text-main)' : 'white' }}>
              <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
                <ShoppingCart size={22} />
              </motion.div>
            </Link>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => setIsDevModalOpen(true)}
                className="btn-cta-v3 glass" 
                style={{ background: 'none', border: 'none', padding: '0.6rem 1.5rem', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--color-primary)', color: '#fff', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer' }}
              >
                Get the App
              </button>
            </motion.div>
          </div>
        </nav>

        <div className="nav-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: isScrolled ? 'var(--color-text-main)' : 'white' }}
          >
            <User size={24} />
          </motion.button>
          
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: isScrolled ? 'var(--color-text-main)' : 'white' }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu-v3 glass-dark"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '80%',
              maxWidth: '400px',
              zIndex: 1100,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#fff' }}>
                <X size={32} />
              </button>
            </div>
            
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff' }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: 'auto' }}
            >
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsDevModalOpen(true);
                }}
                className="btn-v3 primary" 
                style={{ width: '100%', textAlign: 'center', background: 'var(--color-primary)', color: '#fff', border: 'none', padding: '1rem', borderRadius: '12px', fontWeight: '700', cursor: 'pointer' }}
              >
                Join the Mission
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.header>
    </>
  );
}
