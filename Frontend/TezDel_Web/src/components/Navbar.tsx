import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Investor', path: '/investor' },
    { name: 'Contact', path: '/contact' }
  ];

  const scrolledStyle = isScrolled || !isHome;

  return (
    <header className={`header ${scrolledStyle ? 'scrolled glass' : ''}`}>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', zIndex: 99, backdropFilter: 'blur(4px)' }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div className="container nav" style={{ position: 'relative', zIndex: 100 }}>
        <Link to="/" className="nav-logo-v3" aria-label="TezDel Home">
          <div className="nav-logo-mark-v3">
            <span>Tz</span>
          </div>
          <span className="nav-logo-text-v3" style={{ color: scrolledStyle ? 'var(--color-text-main)' : '#fff' }}>
            Tez<em style={{ color: 'var(--color-primary)', fontStyle: 'normal' }}>Del</em>
          </span>
        </Link>

        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              style={{
                color: scrolledStyle ? 'var(--color-text-main)' : 'white',
                fontWeight: '500',
                fontSize: '1rem'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/food"
            className="btn btn-primary"
            style={{
              padding: '0.6rem 1.25rem',
              fontSize: '0.9rem',
              marginLeft: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Order Now <ArrowRight size={16} />
          </Link>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: scrolledStyle ? 'var(--color-text-main)' : 'white' }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
