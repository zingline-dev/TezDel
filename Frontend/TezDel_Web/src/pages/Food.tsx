import { useState, useEffect } from 'react';
import { Search, MapPin, Zap, Star, Filter, ArrowRight, ShieldCheck, Compass, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Skeleton from '../components/Skeleton';
import UnderDevelopmentModal from '../components/UnderDevelopmentModal';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
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

// Real, mouth-watering Unsplash food-only images curated by category
const FOOD_IMAGES = {
  'Odia Specials': [
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', // Traditional Thali
    'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80', // Dal & Rice
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80', // Indian Curry
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'  // Healthy Platter
  ],
  'Biryani': [
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', // Aromatic Biryani
    'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80', // Claypot Rice
    'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80'  // Chicken Biryani
  ],
  'Pizza': [
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', // Cheese Pizza
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80'  // Margherita Pizza
  ],
  'Burgers': [
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', // Double Cheeseburger
    'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'  // Spicy Veg Burger
  ],
  'Rolls': [
    'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80', // Roll Wrap
    'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80'  // Paneer/Egg Roll
  ],
  'Desserts': [
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80', // Chocolate cake
    'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80'  // Indian traditional sweet
  ]
};

// Generates 100+ premium local restaurants deterministic of location
function generateHyperlocalRestaurants(location: string): Array<{
  name: string;
  rating: number;
  time: string;
  price: string;
  tags: string;
  category: string;
  img: string;
}> {
  const localNames = [
    { prefix: 'Odisha', suffix: 'Hotel' },
    { prefix: 'Dalma', suffix: 'Kitchen' },
    { prefix: 'Pakhala', suffix: 'Hub' },
    { prefix: 'Cuttack', suffix: 'Dahibara Express' },
    { prefix: 'Maha Laxmi', suffix: 'Bhojanalaya' },
    { prefix: 'Lingaraj', suffix: 'Grand' },
    { prefix: 'Nimapada', suffix: 'Sweets' },
    { prefix: 'Temple City', suffix: 'Bites' },
    { prefix: 'Bhubaneswar', suffix: 'Spice' },
    { prefix: 'Phula Nakhara', suffix: 'Thali' },
    { prefix: 'Jayadev Vihar', suffix: 'Biryani Box' },
    { prefix: 'Patia', suffix: 'Rolls & Kebabs' },
    { prefix: 'Kalinga', suffix: 'Dhaba' },
    { prefix: 'Infocity', suffix: 'Burgers' },
    { prefix: 'Master Canteen', suffix: 'Curry' },
    { prefix: 'Khandagiri', suffix: 'Momo Bar' },
    { prefix: 'Capital', suffix: 'Tandoor' },
    { prefix: 'Chilika', suffix: 'Fresh Catch' },
    { prefix: 'Utkal', suffix: 'Flavours' }
  ];

  const categoriesList = [
    { name: 'Odia Specials', tags: 'Odia · Authentic · Thali' },
    { name: 'Biryani', tags: 'Biryani · North Indian · Mughlai' },
    { name: 'Pizza', tags: 'Pizza · Italian · Fast Food' },
    { name: 'Burgers', tags: 'Burgers · American · Sides' },
    { name: 'Rolls', tags: 'Rolls · Wraps · Street Food' },
    { name: 'Desserts', tags: 'Desserts · Sweets · Ice Cream' }
  ];

  const list: any[] = [];
  
  // Deterministic seed generation based on location name length
  const baseSeed = location.length;

  for (let i = 1; i <= 105; i++) {
    const nameSeed = (baseSeed * i + 17) % localNames.length;
    const catSeed = (baseSeed * i + 42) % categoriesList.length;
    
    const localPart = localNames[nameSeed];
    const catObj = categoriesList[catSeed];
    
    // Choose images deterministically matching the category
    const categoryImages = FOOD_IMAGES[catObj.name as keyof typeof FOOD_IMAGES];
    const imgSeed = (baseSeed * i + 99) % categoryImages.length;
    const img = categoryImages[imgSeed];

    const rating = parseFloat((4.0 + ((baseSeed * i + 5) % 10) * 0.1).toFixed(1));
    const time = `${15 + ((baseSeed * i + 3) % 7) * 5} mins`;
    const priceVal = 150 + ((baseSeed * i + 11) % 9) * 50;
    
    // Construct realistic hyperlocal name
    const restaurantName = i <= 6 && i === 1 ? 'Odisha Hotel' :
                           i <= 6 && i === 2 ? 'Dalma Restaurant' :
                           i <= 6 && i === 3 ? 'The Biryani Box' :
                           i <= 6 && i === 4 ? 'Pakhala Hub' :
                           `${localPart.prefix} ${localPart.suffix} (#${i})`;

    list.push({
      name: restaurantName,
      rating: rating > 4.9 ? 4.9 : rating,
      time,
      price: `₹${priceVal} for two`,
      tags: catObj.tags,
      category: catObj.name,
      img
    });
  }

  return list;
}

export default function Food() {
  // Location detection states
  const [locationName, setLocationName] = useState('Detecting location...');
  const [locationGranted, setLocationGranted] = useState<boolean | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [allRestaurants, setAllRestaurants] = useState<any[]>([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = [
    { name: 'Odia Specials', icon: '🍲' },
    { name: 'Biryani', icon: '🍚' },
    { name: 'Pizza', icon: '🍕' },
    { name: 'Burgers', icon: '🍔' },
    { name: 'Rolls', icon: '🌯' },
    { name: 'Desserts', icon: '🍮' },
  ];

  // Request location standard browser API
  const requestLocation = () => {
    setIsDetecting(true);
    if (!navigator.geolocation) {
      // Fallback if not supported
      handleLocationSuccess(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Attempt client-side reverse geocoding via OpenStreetMap Nominatim
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            { headers: { 'User-Agent': 'TezDel-Web-App' } }
          );
          if (response.ok) {
            const data = await response.json();
            const addr = data.address;
            // Extract best possible hyperlocal neighborhood
            const place = addr.suburb || addr.neighbourhood || addr.village || addr.road || addr.county || 'Patia';
            const city = addr.city || addr.town || 'Bhubaneswar';
            handleLocationSuccess(`${place}, ${city}`);
          } else {
            handleLocationSuccess('Patia, Bhubaneswar');
          }
        } catch (error) {
          handleLocationSuccess('Patia, Bhubaneswar');
        }
      },
      () => {
        // User denied or error occurred
        handleLocationSuccess('Patia, Bhubaneswar');
      },
      { timeout: 6000 }
    );
  };

  const handleLocationSuccess = (resolvedLocation: string | null) => {
    const finalLocation = resolvedLocation || 'Patia, Bhubaneswar';
    setLocationName(finalLocation);
    setLocationGranted(true);
    setIsDetecting(false);
    
    // Generate 100+ custom hyperlocal restaurants matching this neighborhood
    const generated = generateHyperlocalRestaurants(finalLocation);
    setAllRestaurants(generated);

    // Dynamic beautiful loaders
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  // Skip / Manual fallback
  const handleManualSelect = (zone: string) => {
    handleLocationSuccess(zone);
  };

  useEffect(() => {
    // Automatically trigger custom location overlay flow on mount
    if (locationGranted === null) {
      // If browser already has permission, we can check or trigger
      requestLocation();
    }
  }, []);

  // Filter restaurants based on search input & category click
  const filteredRestaurants = allRestaurants.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.tags.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? r.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (catName: string) => {
    if (selectedCategory === catName) {
      setSelectedCategory(null); // Toggle off
    } else {
      setSelectedCategory(catName);
    }
    setVisibleCount(12); // Reset count
  };

  return (
    <div className="page-v3">
      <UnderDevelopmentModal isOpen={isDevModalOpen} onClose={() => setIsDevModalOpen(false)} />

      {/* Geolocation Request Custom Splash Screen */}
      <AnimatePresence>
        {!locationGranted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: '#0D0706',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="glass-dark"
              style={{
                maxWidth: '480px',
                width: '100%',
                borderRadius: '32px',
                padding: '3rem 2rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 61, 0, 0.15)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.8), var(--shadow-glow)'
              }}
            >
              <div 
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(255, 61, 0, 0.1)',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  color: 'var(--color-primary)'
                }}
              >
                <Compass size={40} className={isDetecting ? "animate-spin" : ""} />
              </div>
              <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '1rem', fontFamily: "'Syne', sans-serif" }}>
                Discover Local Flavours
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                TezDel needs your location to search over 100+ nearby restaurants, zero-commission home kitchens, and fresh local hotspots in Bhubaneswar.
              </p>

              {isDetecting ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <Loader2 size={36} color="var(--color-primary)" className="animate-spin" />
                  <span style={{ color: '#fff', fontWeight: '600', fontSize: '14px' }}>Detecting coordinates & neighborhood...</span>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={requestLocation}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '1.2rem',
                      borderRadius: '16px',
                      fontSize: '16px',
                      fontWeight: '800',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <MapPin size={18} /> Share Current Location
                  </motion.button>
                  
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', margin: '8px 0' }}>— OR CHOOSE MANUALLY —</span>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <button 
                      onClick={() => handleManualSelect('Patia, Bhubaneswar')}
                      className="glass" 
                      style={{ color: '#fff', padding: '10px', borderRadius: '12px', fontSize: '13px', fontWeight: '700' }}
                    >
                      📍 Patia
                    </button>
                    <button 
                      onClick={() => handleManualSelect('Saheed Nagar, Bhubaneswar')}
                      className="glass" 
                      style={{ color: '#fff', padding: '10px', borderRadius: '12px', fontSize: '13px', fontWeight: '700' }}
                    >
                      📍 Saheed Nagar
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <section className="page-header-v3">
        <div className="page-header-v3-bg" style={{ background: '#0D0706' }} />
        <div className="page-header-v3-glow" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="food-search-container-v3"
            style={{ display: 'flex', gap: '16px', alignItems: 'stretch', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}
          >
            <motion.div 
              whileTap={{ scale: 0.98 }}
              onClick={requestLocation}
              className="food-location-box-v3 glass"
              style={{ cursor: 'pointer' }}
            >
              <MapPin size={18} color="var(--color-primary)" />
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '15px' }}>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginRight: '8px' }}>Location:</span>
                {locationName}
              </div>
            </motion.div>
            <div className="food-search-box-v3 glass">
              <Search size={20} color="rgba(255,255,255,0.4)" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(12);
                }}
                placeholder="Search for Pakhala, Dalma, Biryani..." 
                style={{ border: 'none', outline: 'none', background: 'transparent', flex: 1, fontSize: '16px', color: '#fff', fontWeight: 500 }} 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="page-section-v3" style={{ background: 'var(--color-bg-light)', paddingTop: '60px' }}>
        <div className="container">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="section-title-v3" 
            style={{ marginBottom: '40px', textAlign: 'center', fontSize: '1.75rem' }}
          >
            {"What's on your mind?".split(' ').map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordReveal}
                style={{ display: 'inline-block', marginRight: '0.3em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="food-chip-grid-v3 food-cat-grid-css"
          >
            {categories.map((cat, i) => {
              const isSelected = selectedCategory === cat.name;
              return (
                <motion.div 
                  key={cat.name} 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`food-cat-chip-v3 ${isSelected ? 'active-chip' : ''}`}
                  style={{ 
                    background: isSelected ? 'var(--color-secondary)' : '#fff', 
                    boxShadow: 'var(--shadow-premium)', 
                    padding: '2rem 1rem', 
                    borderRadius: '24px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid var(--color-primary)' : '1px solid rgba(0,0,0,0.02)',
                    transformStyle: 'preserve-3d',
                    transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                >
                  <motion.span 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    style={{ fontSize: '36px', display: 'block', marginBottom: '10px' }}
                  >
                    {cat.icon}
                  </motion.span>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: isSelected ? '#fff' : 'var(--color-text-main)' }}>{cat.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="page-section-v3" style={{ background: 'var(--color-bg-light)', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-title-v3" 
              style={{ fontSize: '28px', marginBottom: 0 }}
            >
              Popular Near {locationName.split(',')[0]}
              <span style={{ fontSize: '14px', color: 'var(--color-text-muted)', display: 'block', fontWeight: 500, marginTop: '4px' }}>
                Found {filteredRestaurants.length} kitchens in your zone
              </span>
            </motion.h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className="filter-chip-v3 glass"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', padding: '0.6rem 1.2rem', borderRadius: '12px', fontWeight: '700', fontSize: '14px' }}
            >
              <Filter size={16} /> Reset Filters
            </motion.button>
          </div>

          <div className="restaurant-grid-v3 rest-grid-css">
            <AnimatePresence mode="wait">
              {isLoading ? (
                Array(12).fill(0).map((_, i) => (
                  <div key={i} className="restaurant-card-v3 glass" style={{ height: '360px', borderRadius: '28px' }}>
                    <Skeleton height="220px" borderRadius="28px" />
                    <div style={{ padding: '1.5rem' }}>
                      <Skeleton width="70%" height="28px" />
                      <Skeleton width="40%" height="18px" className="mt-2" />
                    </div>
                  </div>
                ))
              ) : filteredRestaurants.length === 0 ? (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0' }}>
                  <ShieldCheck size={48} style={{ color: 'var(--color-primary)', marginBottom: '1rem', margin: '0 auto' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: '800' }}>No Kitchens Match Your Search</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginTop: '8px' }}>Try exploring other categories or clearing your active search query.</p>
                </div>
              ) : (
                filteredRestaurants.slice(0, visibleCount).map((r, i) => (
                  <motion.article 
                    key={`${r.name}-${i}`} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 6) * 0.1 }}
                    whileHover={{ y: -12 }}
                    className="restaurant-card-v3"
                    style={{ 
                      background: '#fff', 
                      borderRadius: '28px', 
                      overflow: 'hidden', 
                      boxShadow: 'var(--shadow-premium)',
                      border: '1px solid rgba(0,0,0,0.02)'
                    }}
                  >
                    <div className="restaurant-card-img-v3" style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={r.img} 
                        alt={r.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      <div className="restaurant-card-badge-v3" style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(8px)', color: '#fff', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Zap size={14} fill="currentColor" /> {r.time}
                      </div>
                    </div>
                    <div className="restaurant-card-body-v3" style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '800' }}>{r.name}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#1B8A60', color: '#fff', padding: '2px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: '700' }}>
                          <Star size={10} fill="currentColor" /> {r.rating}
                        </div>
                      </div>
                      <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '16px', fontWeight: '500' }}>{r.tags}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--color-primary)' }}>{r.price}</span>
                        <motion.button 
                          onClick={() => setIsDevModalOpen(true)}
                          whileHover={{ x: 5 }}
                          style={{ color: 'var(--color-secondary)', fontWeight: '700', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}
                        >
                          View Menu <ArrowRight size={14} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                ))
              )}
            </AnimatePresence>
          </div>

          {/* Lazy Loading Trigger */}
          {!isLoading && filteredRestaurants.length > visibleCount && (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVisibleCount((prev) => prev + 12)}
                className="btn btn-secondary"
                style={{
                  padding: '1rem 2.5rem',
                  borderRadius: '16px',
                  fontWeight: '700',
                  fontSize: '15px',
                  boxShadow: 'var(--shadow-premium)'
                }}
              >
                Load More Restaurants ({filteredRestaurants.length - visibleCount} Left)
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* TezPass Promo */}
      <section className="container" style={{ margin: '60px auto' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="tezpass-banner-v3 glass"
          style={{ 
            background: 'linear-gradient(135deg, var(--color-secondary) 0%, #1e293b 100%)', 
            borderRadius: '32px', 
            padding: '3rem', 
            color: '#fff', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.5px' }}>Get Unlimited Free Delivery</h3>
            <p style={{ opacity: 0.8, marginTop: '8px', fontSize: '1.1rem', maxWidth: '400px' }}>Join TezPass for ₹149/month and skip all delivery fees on every order.</p>
          </div>
          <motion.button 
            onClick={() => setIsDevModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '1rem 2rem', 
              borderRadius: '16px', 
              fontSize: '1.1rem', 
              fontWeight: '700',
              position: 'relative',
              zIndex: 2 
            }}
          >
            Get TezPass <ArrowRight size={20} />
          </motion.button>
          
          {/* Decorative Glow */}
          <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '300px', height: '300px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.15, zIndex: 1 }} />
        </motion.div>
      </section>
    </div>
  );
}
