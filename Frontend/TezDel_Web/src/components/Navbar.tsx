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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Partners', path: '/partners' },
    { name: 'Investor', path: '/investor' },
    { name: 'Contact', path: '/contact' }
  ];

  const scrolledStyle = isScrolled || !isHome;

  return (
    <header className={`header ${scrolledStyle ? 'scrolled glass' : ''}`}>
      <div className="container nav">
        <Link to="/" className="logo-title" style={{ 
          fontSize: '2rem', 
          fontWeight: '900', 
          color: scrolledStyle ? 'var(--color-primary)' : 'white',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          TezDel
          <span style={{ width: '8px', height: '8px', background: 'var(--color-primary)', borderRadius: '50%', display: scrolledStyle ? 'block' : 'none' }}></span>
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
