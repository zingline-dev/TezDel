
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Zap, Home as HomeIcon, ShoppingBag, TrendingUp, Star, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import iphoneMock from '../assets/iphone_17_mock.png';
import UnderDevelopmentModal from '../components/UnderDevelopmentModal';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  const chips = ['🍛 Odia Thali', '🥗 Dalma', '🧅 Grocery', '🍰 Chenna Poda', '🛵 Quick Delivery'];

  return (
    <div className="home-v3">
      <UnderDevelopmentModal isOpen={isDevModalOpen} onClose={() => setIsDevModalOpen(false)} />
      {/* ── AMBIENT BACKGROUND ── */}
      <div className="ambient-background" style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(255,61,0,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', bottom: '10%', right: '10%', width: '30%', height: '30%', background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      {/* ── HERO ── */}
      <section className="hero-v3">
        <motion.div
          className="hero-v3-bg"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(13,7,6,0.72), rgba(13,7,6,0.88)), url(https://images.pexels.com/photos/37152225/pexels-photo-37152225.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            opacity: heroOpacity,
            scale: heroScale
          }}
        />
        <div className="hero-v3-glow" />
        
        <div className="hero-v3-inner">
          <div className="hero-v3-left">
            <motion.div 
              className="hero-v3-tag"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="hero-v3-tag-dot"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>Live in Bhubaneswar</span>
            </motion.div>
            
            <motion.h1 
              className="hero-v3-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Bhubaneswar's<br />Food Delivered<br />
              <motion.span 
                className="hero-v3-accent"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ background: 'linear-gradient(90deg, var(--color-primary), #FF7547, var(--color-primary))', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                In 20 Minutes.
              </motion.span>
            </motion.h1>

            <motion.p 
              className="hero-v3-sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Authentic Odia home cooking, local restaurants, and kirana groceries — delivered fast by your neighbourhood captain.
            </motion.p>

            <motion.div 
              className={`hero-v3-search ${isSearchFocused ? 'focused' : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <Search size={18} color={isSearchFocused ? 'var(--color-primary)' : '#aaa'} />
              <input
                type="text"
                placeholder="Search for dalma, biryani, groceries..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <motion.button 
                className="hero-v3-search-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Search
              </motion.button>
            </motion.div>

            <motion.div 
              className="hero-v3-chips"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {chips.map((chip) => (
                <motion.span
                  key={chip}
                  className="hero-v3-chip"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  onClick={() => setSearchValue(chip.split(' ').slice(1).join(' '))}
                >
                  {chip}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div className="hero-v3-visual">
            <motion.div 
              className="hero-v3-card"
              initial={{ opacity: 0, rotateY: 20, x: 50 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="hero-v3-food-grid">
                {[
                  { emoji: '🍛', name: 'Dalma Thali', price: '₹120' },
                  { emoji: '🍲', name: 'Pakhala', price: '₹90' },
                  { emoji: '🍮', name: 'Chenna Poda', price: '₹60' },
                  { emoji: '🥬', name: 'Besara', price: '₹110' },
                ].map((item, i) => (
                  <motion.div 
                    key={item.name} 
                    className="hero-v3-food-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + (i * 0.1) }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <span className="hero-v3-food-emoji">{item.emoji}</span>
                    <div className="hero-v3-food-name">{item.name}</div>
                    <div className="hero-v3-food-price">{item.price}</div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="hero-v3-delivery-badge"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="hero-v3-db-icon">
                  <Zap size={16} fill="currentColor" />
                </div>
                <div className="hero-v3-db-text">
                  <strong>Arriving in 18 minutes</strong>
                  <span>Your neighbourhood captain is on the way</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="cats-v3">
        <div className="container">
          <motion.div 
            className="section-head-v3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p className="section-label-v3">What would you like?</p>
            <h2 className="section-title-v3">Everything Your<br />Neighbourhood Needs</h2>
          </motion.div>
          
          <motion.div 
            className="cat-grid-v3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { path: '/food', class: 'cat-food', icon: '🍽️', name: 'Restaurant Food', badge: '500+ Restaurants', desc: 'Biryani, pizza, Odia thali and more.' },
              { path: '/grocery', class: 'cat-grocery', icon: '🛒', name: 'Kirana Grocery', badge: 'Kirana Network', desc: 'Fresh vegetables and daily essentials.' },
              { path: '/home-chefs', class: 'cat-chef', icon: '👩‍🍳', name: 'Home Chef Meals', badge: 'Odia Specials', desc: 'Authentic Odia food cooked by local chefs.' },
              { path: '/contact', class: 'cat-corp', icon: '🏢', name: 'Corporate Catering', badge: 'Office Meals', desc: 'Daily office lunches and team meals.' }
            ].map((cat, i) => (
              <motion.div key={cat.name} variants={fadeInUp}>
                <Link to={cat.path} className={`cat-card-v3 ${cat.class}`}>
                  <div className="cat-badge-v3">{cat.badge}</div>
                  <motion.span 
                    className="cat-icon-v3"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  >
                    {cat.icon}
                  </motion.span>
                  <h3 className="cat-name-v3">{cat.name}</h3>
                  <p className="cat-desc-v3">{cat.desc}</p>
                  <div className="cat-arrow">
                    <ArrowRight size={20} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY TEZDEL ── */}
      <section className="why-v3">
        <div className="container">
          <motion.div 
            className="section-head-v3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="section-label-v3">Why we're different</p>
            <h2 className="section-title-v3">Not Just Another<br />Delivery App</h2>
          </motion.div>
          
          <motion.div 
            className="why-grid-v3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: <Zap />, title: '20-Minute Delivery', desc: 'Your captain lives in your zone. They know the shortcuts.' },
              { icon: <HomeIcon />, title: 'Authentic Odia Food', desc: 'Real home cooking from verified neighbourhood chefs.' },
              { icon: <MapPin />, title: 'Local Captains', desc: 'Your delivery captain is your neighbour. Trusted & fast.' },
              { icon: <ShoppingBag />, title: 'Kirana Network', desc: 'Direct from your local trusted shops, not dark stores.' },
              { icon: <TrendingUp />, title: 'ONDC Powered', desc: 'Built on the open network for maximum transparency.' },
              { icon: <Star />, title: 'Zero Commission', desc: 'Fair prices for you, better earnings for partners.' }
            ].map((card) => (
              <motion.article 
                key={card.title} 
                className="why-card-v3"
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="why-icon-v3">{card.icon}</div>
                <h3 className="why-title-v3">{card.title}</h3>
                <p className="why-desc-v3">{card.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEZPASS ── */}
      <section className="tezpass-v3">
        <div className="container">
          <motion.div 
            className="tezpass-v3-inner"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <p className="section-label-v3" style={{ color: 'rgba(255,255,255,0.7)' }}>Membership</p>
              <h2 className="section-title-v3">TezPass —<br />Unlimited Free Delivery</h2>
              <p className="tezpass-v3-p">Join the club for ₹149/month and save big on every order.</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline-white-v3"
                style={{ padding: '0.8rem 2rem', borderRadius: '14px', fontWeight: '700' }}
              >
                Get TezPass
              </motion.button>
            </div>
            
            <motion.div 
              className="tezpass-card-v3 glass"
              whileHover={{ rotateY: 5, rotateX: 5 }}
              style={{ perspective: 1000 }}
            >
              <div className="tezpass-price-v3">₹149</div>
              <div className="tezpass-period-v3">per month</div>
              <ul className="tezpass-benefits-v3">
                {['Unlimited free deliveries', 'Priority processing', '10% off home chef orders'].map(b => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: '100%', padding: '1rem', borderRadius: '14px', fontWeight: '700', fontSize: '1rem' }}
              >
                Start Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── APP DOWNLOAD ── */}
      <section className="app-v3">
        <div className="container">
          <div className="app-v3-inner">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-label-v3">Get the App</p>
              <h2 className="section-title-v3">Order Bhubaneswar's<br />Best Food — Anywhere</h2>
              <div className="app-badge-row-v3" style={{ marginTop: '2rem' }}>
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  onClick={() => setIsDevModalOpen(true)}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" style={{ height: '44px' }} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  onClick={() => setIsDevModalOpen(true)}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style={{ height: '44px' }} />
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              className="app-mockup-outer-v3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={iphoneMock}
                alt="TeZdel App"
                className="iphone-17-mock"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
