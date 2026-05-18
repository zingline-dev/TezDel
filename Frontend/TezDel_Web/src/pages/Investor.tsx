
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, ShieldCheck, Rocket } from 'lucide-react';
import SEO from '../components/SEO';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
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

export default function Investor() {
  const metrics = [
    { label: 'Market CAGR', value: '17%', desc: 'Quick commerce growth in Tier-2 cities', icon: <TrendingUp size={18} /> },
    { label: 'Q-Comm Market', value: '$5.38B', desc: 'Projected Indian market 2025', icon: <Rocket size={18} /> },
    { label: 'Partner LTV', value: '4.5x', desc: 'Vs national platform average', icon: <Users size={18} /> },
    { label: 'Security', value: '100%', desc: 'Transparent ONDC integration', icon: <ShieldCheck size={18} /> },
  ];

  const pillars = [
    { icon: '⚡', title: 'Hyperlocal Moat', desc: 'Deep neighbourhood networks that national players cannot replicate without years of local trust-building.' },
    { icon: '📡', title: 'ONDC-Native', desc: 'Built on ONDC from day one. As ONDC grows, TezDel grows with a structural advantage over late adopters.' },
    { icon: '🏪', title: 'Kirana Integration', desc: 'Embedded into the existing kirana economy — the most resilient distribution network in India.' },
    { icon: '🌱', title: 'Zero Commission', desc: 'Our ₹999/mo flat model creates extreme loyalty and switching costs that commission-based rivals can\'t match.' },
    { icon: '👩‍🍳', title: 'Home Chef Network', desc: 'An entirely untapped supply category — authentic home cooking — that no delivery platform has successfully operationalized.' },
    { icon: '🗺️', title: 'Expansion Playbook', desc: 'Bhubaneswar-proven model ready to replicate across Cuttack, Rourkela, Berhampur and other Odisha Tier-2 cities.' },
  ];

  const investorSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "TezDel Investor Relations",
    "url": "https://tezdel.com/investor",
    "description": "Explore TezDel's disruptive zero-commission hyperlocal business model, unit economics, ONDC integration, and growth playbook in Tier-2 and Tier-3 Indian cities.",
    "publisher": {
      "@type": "Organization",
      "name": "TezDel",
      "logo": "https://tezdel.com/logo.png"
    }
  };

  return (
    <div className="page-v3">
      <SEO 
        title="Investor Relations | TezDel Zero-Commission Logistics Network" 
        description="Explore TezDel's disruptive zero-commission hyperlocal business model, unit economics, ONDC integration, and growth playbook in Tier-2 and Tier-3 Indian cities." 
        keywords="TezDel investment, seed round startup, Indian q-commerce growth, ONDC logistics partner, investor pitch TezDel, quick commerce unit economics" 
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        schema={investorSchema}
      />

      {/* Hero */}
      <section className="page-hero-v3">
        <div className="page-hero-v3-bg" style={{ backgroundImage: 'linear-gradient(rgba(13,7,6,0.78),rgba(13,7,6,0.92)), url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80)' }} aria-hidden="true" />
        <div className="page-hero-v3-glow" aria-hidden="true" />
        <div className="page-hero-v3-dots" aria-hidden="true" />
        <div className="container page-hero-v3-content" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="page-hero-v3-tag"
          >
            <span className="page-hero-v3-tag-dot" aria-hidden="true" />
            <span>Investor Relations</span>
          </motion.div>
          
          <motion.h1 
            initial="initial"
            animate="animate"
            className="page-hero-v3-title"
          >
            {"Odisha's ₹5B Opportunity Is Untapped.".split(' ').map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordReveal}
                style={{ display: 'inline-block', marginRight: '0.3em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.8 }}
            className="page-hero-v3-sub"
          >
            TezDel is the first hyperlocal platform built natively for Bhubaneswar — ONDC-ready, zero-commission, and community-rooted. We're raising our seed round.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
          >
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', borderRadius: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', fontSize: '1.1rem', fontWeight: '800', gap: '12px', boxShadow: '0 20px 40px rgba(255, 61, 0, 0.3)' }}>
              Request Investor Deck <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Metrics Band */}
      <div className="stats-band-v3" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="stats-band-v3-inner investor-stats-inner">
          {metrics.map((m, i) => (
            <motion.div 
              key={m.label} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="stat-item-v3"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', marginBottom: '8px', justifyContent: 'center' }}>
                {m.icon} <span style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{m.label}</span>
              </div>
              <strong style={{ fontSize: '32px' }}>{m.value}</strong>
            </motion.div>
          ))}
        </div>
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', top: 0, height: '100%', width: '150px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)', skewX: '-20deg' }}
        />
      </div>

      {/* Market Opportunity */}
      <section className="page-section-v3 investor-market-section">
        <div className="container page-two-col-v3 investor-two-col">
          <div>
            <motion.p initial="initial" whileInView="animate" variants={fadeInUp} className="section-label-v3">The Opportunity</motion.p>
            <motion.h2 initial="initial" whileInView="animate" variants={fadeInUp} className="section-title-v3 investor-opp-title">India's Q-Commerce Boom Is Bypassing Tier-2 Cities.</motion.h2>
            <motion.p initial="initial" whileInView="animate" variants={fadeInUp} className="section-sub-v3 investor-body-text" style={{ marginBottom: '2rem' }}>Zomato and Swiggy are metro-first platforms grafted onto Tier-2 cities as an afterthought. They don't understand local food culture, can't build neighbourhood trust, and charge 25-30% commissions that are slowly killing local restaurants.</motion.p>
            <motion.p initial="initial" whileInView="animate" variants={fadeInUp} className="section-sub-v3 investor-body-text">TezDel is built from the ground up for Bhubaneswar — speaking the local language, serving local food, and empowering local partners. This is a structural advantage that cannot be copied quickly.</motion.p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'Bhubaneswar Population', value: '1M+' },
              { label: 'Restaurants in City', value: '8,000+' },
              { label: 'Kirana Stores', value: '25,000+' },
              { label: 'Monthly TAM', value: '₹120Cr+' },
            ].map((item, i) => (
              <motion.div 
                key={item.label} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6, borderColor: 'var(--color-primary)' }}
                className="investor-stat-row"
              >
                <span className="investor-stat-label">{item.label}</span>
                <strong className="investor-stat-value">{item.value}</strong>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Pillars */}
      <section className="page-section-v3 investor-pillars-section">
        <div className="container">
          <div className="section-head-v3 investor-pillars-head">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-label-v3">Why Invest</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="section-title-v3 investor-pillars-title">Six Structural Advantages</motion.h2>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="why-grid-v3"
          >
            {pillars.map(p => (
              <motion.article 
                key={p.title} 
                variants={fadeInUp}
                whileHover={{ y: -12, background: 'rgba(255,255,255,0.06)' }}
                className="why-card-v3"
                style={{ borderRadius: '32px', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)' }}
              >
                <div className="why-icon-v3" style={{ width: '60px', height: '60px', borderRadius: '18px', fontSize: '28px', marginBottom: '1.5rem', background: 'rgba(255,61,0,0.1)' }}>{p.icon}</div>
                <h3 className="why-title-v3" style={{ fontSize: '20px', fontWeight: '800', marginBottom: '1rem', color: '#fff' }}>{p.title}</h3>
                <p className="why-desc-v3" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', fontSize: '15px' }}>{p.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="tezpass-v3 investor-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="section-label-v3" style={{ color: 'rgba(255,255,255,0.7)' }}>Seed Round Open</p>
            <h2 className="section-title-v3 tezpass-v3-title investor-cta-title">Interested in Investing in TezDel?</h2>
            <p className="tezpass-v3-p investor-cta-p">We're currently raising our seed round to expand our zone coverage, build our tech platform, and onboard 500 partners in year one.</p>
            <div className="investor-cta-btns">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn btn-primary investor-cta-btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>Request Pitch Deck</Link>
              </motion.div>
              <motion.a 
                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }} 
                whileTap={{ scale: 0.95 }}
                href="mailto:invest@tezdel.com" 
                className="btn-outline-white-v3 investor-cta-btn-outline"
              >
                invest@tezdel.com
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
