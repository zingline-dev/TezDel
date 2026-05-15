'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Restaurants', href: '/restaurants' },
    { name: 'Kirana', href: '/kirana' },
    { name: 'Home Chefs', href: '/home-chefs' },
    { name: 'Captains', href: '/captains' },
    { name: 'Calculator', href: '/calculator' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#060C18]/75 backdrop-blur-xl border-b border-white/7 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-[10px] group">
          <div className="w-[36px] h-[36px] bg-[#FF3D00] rounded-[10px] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <span className="text-white text-[15px] font-extrabold tracking-[-1px]" style={{ fontFamily: 'var(--font-logo)' }}>Tz</span>
          </div>
          <span className="text-[20px] font-extrabold text-white transition-colors" style={{ fontFamily: 'var(--font-logo)' }}>
            Tez<em className="text-[#FF3D00] not-italic">Del</em>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/onboarding"
            className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-background border-b border-white/5 overflow-hidden"
      >
        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-foreground/70"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/onboarding"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-primary text-white text-center font-bold py-3 rounded-xl mt-2"
          >
            Apply Now
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
