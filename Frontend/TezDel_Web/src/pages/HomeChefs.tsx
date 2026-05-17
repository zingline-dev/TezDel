
import { motion } from 'framer-motion';
import { ArrowRight, Star, Heart, ShieldCheck, Utensils } from 'lucide-react';
import { useState } from 'react';
import UnderDevelopmentModal from '../components/UnderDevelopmentModal';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
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

export default function HomeChefs() {
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);

  const chefs = [
    { name: 'Mrs. Dash', specialty: 'Dalma & Badi Chura', rating: 4.9, orders: '1200+', exp: '25y', dishes: ['Dalma Thali', 'Badi Chura', 'Saga Bhaja'], bg: 'linear-gradient(135deg,#FF8A65,#FF5722)', emoji: '🍛' },
    { name: 'Mrs. Mohapatra', specialty: 'Authentic Pakhala Platter', rating: 4.8, orders: '850+', exp: '30y', dishes: ['Pakhala', 'Macha Besara', 'Alu Bharta'], bg: 'linear-gradient(135deg,#F9A825,#F57F17)', emoji: '🥘' },
    { name: 'Mrs. Patnaik', specialty: 'Traditional Macha Besara', rating: 4.7, orders: '540+', exp: '20y', dishes: ['Macha Besara', 'Santula', 'Dahi Baigana'], bg: 'linear-gradient(135deg,#26C6DA,#00838F)', emoji: '🍲' },
    { name: 'Mrs. Sahoo', specialty: 'Chenna Poda & Pitha', rating: 4.9, orders: '2100+', exp: '15y', dishes: ['Chenna Poda', 'Rasabali', 'Malpua'], bg: 'linear-gradient(135deg,#66BB6A,#388E3C)', emoji: '🍮' },
  ];

  const howItWorks = [
    { step: '1', title: 'Browse Chefs', desc: 'Explore verified home chefs near you. See their specialties, ratings, and available dishes.' },
    { step: '2', title: 'Order on Schedule', desc: 'Place your lunch order by 12 PM and dinner by 5 PM. Fresh meals cooked on schedule.' },
    { step: '3', title: 'Home-Cooked Delivery', desc: 'Your captain picks up your meal freshly cooked and delivers it to your door in minutes.' },
  ];

  return (
    <div className="page-v3">
      <UnderDevelopmentModal isOpen={isDevModalOpen} onClose={() => setIsDevModalOpen(false)} />

      {/* Hero */}
      <section className="page-hero-v3">
        <div className="page-hero-v3-bg" style={{ backgroundImage: 'linear-gradient(rgba(13,7,6,0.72),rgba(13,7,6,0.88)), url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1920&q=80)' }} aria-hidden="true" />
        <div className="page-hero-v3-glow" aria-hidden="true" />
        <div className="page-hero-v3-dots" aria-hidden="true" />
        <div className="container page-hero-v3-content" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="page-hero-v3-tag"
          >
            <span className="page-hero-v3-tag-dot" aria-hidden="true" />
            <span>Exclusive to TezDel</span>
          </motion.div>
          
          <motion.h1 
            initial="initial"
            animate="animate"
            className="page-hero-v3-title"
          >
            {"Real Odia Food. Real Home Kitchens.".split(' ').map((word, i) => (
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
            Order authentic pakhala, dalma, macha besara, and chenna poda — cooked by verified home chefs from your neighbourhood. The food national platforms don't even list.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDevModalOpen(true)}
              className="btn btn-primary" 
              style={{ padding: '1.25rem 3rem', borderRadius: '20px', fontWeight: '800', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', fontSize: '1.1rem', gap: '12px', boxShadow: '0 20px 40px rgba(255, 61, 0, 0.3)' }}
            >
              Book your Home Chef <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-band-v3" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="stats-band-v3-inner">
          {[{ value: '50+', label: 'Verified Home Chefs' }, { value: '4.8★', label: 'Average Rating' }, { value: 'Daily', label: 'Fresh Cooking' }, { value: 'Odia', label: 'Authentic Cuisine' }].map((s, i) => (
            <motion.div 
              key={s.label} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="stat-item-v3"
            >
              <strong>{s.value}</strong><span>{s.label}</span>
            </motion.div>
          ))}
        </div>
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', top: 0, height: '100%', width: '100px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', skewX: '-20deg' }}
        />
      </div>

      {/* How it Works */}
      <section className="page-section-v3" style={{ background: '#fff', padding: '120px 0' }}>
        <div className="container">
          <div className="section-head-v3" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.p initial="initial" whileInView="animate" variants={fadeInUp} className="section-label-v3">Simple Process</motion.p>
            <motion.h2 initial="initial" whileInView="animate" variants={fadeInUp} className="section-title-v3" style={{ fontSize: '2.5rem' }}>How Home Chef Orders Work</motion.h2>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="steps-v3"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))', gap: '40px' }}
          >
            {howItWorks.map(s => (
              <motion.article key={s.step} variants={fadeInUp} className="step-v3" style={{ textAlign: 'center' }}>
                <div className="step-num-v3" style={{ background: 'var(--color-primary)', width: '60px', height: '60px', margin: '0 auto 2rem', fontSize: '24px', fontWeight: '900', boxShadow: '0 10px 20px rgba(255, 61, 0, 0.2)' }}>{s.step}</div>
                <h3 className="step-title-v3" style={{ fontSize: '22px', fontWeight: '800', marginBottom: '1rem' }}>{s.title}</h3>
                <p className="step-desc-v3" style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{s.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chef Listings */}
      <section className="page-section-v3" style={{ background: '#0D0706', padding: '120px 0' }}>
        <div className="container">
          <div className="section-head-v3" style={{ marginBottom: '80px' }}>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-label-v3">Our verified Chefs</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="section-title-v3" style={{ color: '#fff', fontSize: '2.75rem' }}>Meet Your Neighbourhood Cooks</motion.h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))', gap: '30px' }}>
            {chefs.map((chef, i) => (
              <motion.article 
                key={chef.name} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="chef-card-v3" 
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '40px', overflow: 'hidden', transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)' }}
              >
                <div className="chef-img-v3" style={{ background: chef.bg, height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <motion.span 
                    animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                    style={{ fontSize: '6rem' }}
                  >
                    {chef.emoji}
                  </motion.span>
                  <div style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.9)', padding: '6px 14px', borderRadius: '12px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px', color: '#000', fontSize: '14px' }}>
                    <Star size={14} fill="currentColor" color="var(--color-primary)" /> {chef.rating}
                  </div>
                </div>
                <div className="chef-body-v3" style={{ padding: '2.5rem' }}>
                  <h3 className="chef-name-v3" style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>{chef.name}</h3>
                  <p className="chef-loc-v3" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', fontWeight: '500', marginBottom: '1.5rem' }}>{chef.specialty} · {chef.exp} exp</p>
                  <div className="chef-dishes-v3" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
                    {chef.dishes.map(d => <span key={d} className="dish-tag-v3" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '6px 14px', borderRadius: '10px', fontSize: '12px', fontWeight: '700' }}>{d}</span>)}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: '600' }}>{chef.orders} orders</span>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsDevModalOpen(true)}
                      className="chef-order-btn-v3" 
                      style={{ background: 'var(--color-primary)', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '14px', fontWeight: '800', cursor: 'pointer' }}
                    >
                      Order Now
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="tezpass-v3" style={{ padding: '140px 0' }}>
        <div className="container">
          <div className="tezpass-v3-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))', gap: '80px', alignItems: 'center' }}>
            <div>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-label-v3" style={{ color: 'rgba(255,255,255,0.7)' }}>Quality & Hygiene</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="section-title-v3 tezpass-v3-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Cooked with Love.<br />Served with Safety.</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="tezpass-v3-p" style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9, marginBottom: '3rem' }}>Every chef in our network is personally verified. We conduct regular kitchen inspections and hygiene audits so you can enjoy home food with 100% peace of mind.</motion.p>
              <motion.button 
                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDevModalOpen(true)}
                className="btn-outline-white-v3" 
                style={{ padding: '1.25rem 3rem', borderRadius: '20px', border: '2px solid #fff', fontWeight: '800', background: 'transparent', color: '#fff', cursor: 'pointer' }}
              >
                Our Safety Standards
              </motion.button>
            </div>
            <motion.div 
              initial={{ opacity: 0, rotateY: 20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              className="tezpass-card-v3" 
              style={{ background: '#fff', borderRadius: '48px', padding: '4rem 3rem', color: '#000', boxShadow: '0 40px 80px rgba(0,0,0,0.4)', transformStyle: 'preserve-3d' }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '1rem' }}>
                <span style={{ fontSize: '64px', fontWeight: '900', color: 'var(--color-primary)', letterSpacing: '-4px' }}>100%</span>
              </div>
              <div style={{ fontSize: '18px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-secondary)', marginBottom: '3rem' }}>Verified Home Kitchens</div>
              <ul className="tezpass-benefits-v3" style={{ listStyle: 'none', padding: 0, margin: '0 0 4rem 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { text: 'Personal kitchen verification visits', icon: <ShieldCheck size={18} /> },
                  { text: 'Mandatory hygiene training', icon: <Utensils size={18} /> },
                  { text: 'Fresh ingredients sourced daily', icon: <Heart size={18} /> },
                  { text: 'Transparent review system', icon: <Star size={18} /> }
                ].map((b, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: '600' }}
                  >
                    <span style={{ color: 'var(--color-primary)' }}>{b.icon}</span> {b.text}
                  </motion.li>
                ))}
              </ul>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsDevModalOpen(true)}
                className="btn btn-primary" 
                style={{ width: '100%', padding: '1.25rem', borderRadius: '20px', border: 'none', background: 'var(--color-secondary)', color: '#fff', fontWeight: '800', fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                Explore All Meals
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
