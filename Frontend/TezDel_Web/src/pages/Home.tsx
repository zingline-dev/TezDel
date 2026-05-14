import { Search, MapPin, ChevronRight, Zap, CheckCircle, ShoppingBag, Utensils, Home as HomeIcon, Package, Coffee, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const categories = [
    { title: 'Food Delivery', desc: 'Zero commission from local restaurants.', path: '/food', icon: <Utensils /> },
    { title: 'Grocery Delivery', desc: 'Kirana-powered 20-min delivery.', path: '/grocery', icon: <ShoppingBag /> },
    { title: 'Home Chef Meals', desc: 'Authentic homemade Odia food.', path: '/home-chefs', icon: <HomeIcon /> },
    { title: 'Daily Essentials', desc: 'Milk, bread & morning needs.', path: '/grocery', icon: <Coffee /> },
    { title: 'Corporate Lunch', desc: 'Bulk meals for Infocity offices.', path: '/contact', icon: <Package /> },
    { title: 'Festival Specials', desc: 'Raja, Puja & Rath Yatra tiffins.', path: '/home-chefs', icon: <Calendar /> },
  ];

  return (
    <div className="home-v2">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-img" style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url(https://images.pexels.com/photos/37152225/pexels-photo-37152225.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}></div>
        <div className="hero-container">
          <h1 className="hero-logo-large text-gradient" style={{ fontSize: '5rem', marginBottom: '0.5rem' }}>TezDel</h1>
          <h2 style={{ fontSize: '2.5rem', color: 'white', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>Bhubaneswar’s Own Hyperlocal Delivery Network</h2>
          <p style={{ fontSize: '1.25rem', color: 'white', opacity: 0.9, maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
            Fast groceries, authentic Odia food, trusted local delivery — powered by neighbourhood chefs, kiranas, and community captains.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
            <Link to="/food" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>Order Now</Link>
            <Link to="/partners" className="btn btn-secondary glass" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', color: 'white' }}>Partner With Us</Link>
          </div>

          <div className="search-container glass" style={{ maxWidth: '900px', margin: '0 auto', height: '64px', borderRadius: 'var(--radius-md)' }}>
            <div className="location-box" style={{ borderRight: '1px solid rgba(0,0,0,0.1)' }}>
              <MapPin size={22} color="var(--color-primary)" />
              <input type="text" placeholder="Patia, Bhubaneswar" className="search-input" defaultValue="Bhubaneswar" />
            </div>
            <div className="search-box">
              <Search size={22} color="var(--color-text-muted)" />
              <input type="text" placeholder="Search for Pakhala, Dalma or a restaurant" className="search-input" />
            </div>
            <button className="btn btn-primary" style={{ height: '100%', borderRadius: '0 var(--radius-md) var(--radius-md) 0', padding: '0 2rem' }}>Search</button>
          </div>
        </div>
      </section>

      {/* Why TezDel Section */}
      <section style={{ padding: 'var(--space-xl) 0 var(--space-md)', background: 'var(--color-bg-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Why TezDel?</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--color-primary)', margin: '0 auto' }}></div>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '2.5rem',
            width: '100%'
          }}>
            {[
              { icon: <Zap size={32} />, title: '20-Minute Delivery', desc: 'Lightning fast hyperlocal routing.' },
              { icon: <CheckCircle size={32} />, title: 'Zero Commission', desc: 'Fair business for local restaurants.' },
              { icon: <HomeIcon size={32} />, title: 'Home-Cooked Odia Meals', desc: 'Authentic taste from local homes.' },
              { icon: <Package size={32} />, title: 'Kirana-Powered', desc: 'Your neighbourhood store, now online.' }
            ].map((item, i) => (
              <div key={i} className="glass" style={{ textAlign: 'center', padding: '3.5rem 2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' }}>
                <div style={{ marginBottom: '1.5rem', color: 'var(--color-primary)', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1rem' }}>{item.title}</h4>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section style={{ padding: 'var(--space-md) 0 var(--space-xl)', background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>Explore Our Categories</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>Everything you need, delivered in minutes.</p>
            </div>
            <Link to="/food" style={{ color: 'var(--color-primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              View all services <ChevronRight size={20} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {categories.map(cat => (
              <Link key={cat.title} to={cat.path} className="service-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '2rem', background: 'white' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(255, 61, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)'
                }}>
                  {cat.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: 'var(--color-text-main)', marginBottom: '0.25rem' }}>{cat.title}</h3>
                  <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section style={{ padding: 'var(--space-xl) 0', background: 'var(--color-bg-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div style={{ background: 'linear-gradient(135deg, #FFF5F2 0%, #FFFBF9 100%)', padding: '4rem', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(255, 61, 0, 0.05)', borderRadius: '50%' }}></div>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem', color: 'var(--color-text-main)', lineHeight: '1.1' }}>Why We’re Different</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                Unlike national delivery apps, TezDel is built specifically for Bhubaneswar. We don’t rely on dark stores or warehouse-heavy operations. We empower local restaurants, home chefs, and neighbourhood kiranas to serve their own communities faster and better.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle size={24} color="var(--color-accent)" />
                  <span style={{ fontWeight: '600' }}>Hyperlocal Community Focus</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle size={24} color="var(--color-accent)" />
                  <span style={{ fontWeight: '600' }}>Zero Commissions for Partners</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle size={24} color="var(--color-accent)" />
                  <span style={{ fontWeight: '600' }}>ONDC Infrastructure Empowerment</span>
                </div>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1594841607043-bc29d7274475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Local Odia Food" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Home Chef Highlight */}
      <section style={{ padding: 'var(--space-xl) 0', background: 'var(--color-secondary)', color: 'white', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg, rgba(15, 23, 42, 0) 0%, rgba(255, 61, 0, 0.1) 100%)' }}></div>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>Real Odia Food. Cooked by Real Homes.</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '3.5rem', lineHeight: '1.6' }}>Discover the soul of Bhubaneswar through our network of home chefs. Traditional recipes, fresh ingredients, and the warmth of home.</p>
            <Link to="/home-chefs" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem', fontSize: '1.1rem' }}>Meet Our Home Chefs</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '6rem' }}>
            <div className="glass-dark" style={{ padding: '3rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ width: '100px', height: '100px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--color-primary)' }}>
                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="Chef" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Homemade Authenticity</h4>
              <p style={{ opacity: 0.7 }}>Traditional recipes passed down through generations, cooked with love in local Bhubaneswar kitchens.</p>
            </div>
            <div className="glass-dark" style={{ padding: '3rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ width: '100px', height: '100px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--color-primary)' }}>
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="Meal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Daily Odia Meals</h4>
              <p style={{ opacity: 0.7 }}>Fresh Dalma, Saga Bhaja, and Pakhala served daily. Healthy, hygienic, and heart-warming.</p>
            </div>
            <div className="glass-dark" style={{ padding: '3rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ width: '100px', height: '100px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--color-primary)' }}>
                <img src="https://images.unsplash.com/photo-1589113124855-603194091921?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="Tradition" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Chef Stories</h4>
              <p style={{ opacity: 0.7 }}>Empowering women and home cooks to build their own culinary brands and financial independence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Partner Section */}
      <section style={{ padding: 'var(--space-xl) 0', background: 'var(--color-bg-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div style={{ color: 'var(--color-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Partner Ecosystem</div>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>Stop Paying 30% Commissions</h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '3rem' }}>
                TezDel charges restaurants a simple <span style={{ color: 'var(--color-primary)', fontWeight: '700' }}>flat monthly subscription</span> instead of taking a cut from every order. Increase your margins and grow your local brand with Bhubaneswar’s own network.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Link to="/partners" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem' }}>Become a Partner</Link>
                <Link to="/contact" className="btn btn-secondary" style={{ padding: '1.2rem 2.5rem', border: '1px solid #ddd' }}>View Pricing</Link>
              </div>
            </div>
            <div style={{ background: 'var(--color-bg-light)', padding: '4rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Your Neighbourhood Store, Now Online</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>We empower local kiranas to become digital dark stores, serving their colony faster than any national app. No setup costs, just growth.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-primary)', borderRadius: '50%' }}></div>
                  <span style={{ fontWeight: '500' }}>Increase local sales by 40%</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-primary)', borderRadius: '50%' }}></div>
                  <span style={{ fontWeight: '500' }}>Digital ordering via WhatsApp & App</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-primary)', borderRadius: '50%' }}></div>
                  <span style={{ fontWeight: '500' }}>Instant hyperlocal delivery fleet</span>
                </li>
              </ul>
              <Link to="/partners" style={{ color: 'var(--color-primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                Join as Kirana Partner <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Numbers */}
      <section style={{ padding: '8rem 0', background: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="glass" style={{ padding: '6rem 4rem', borderRadius: 'var(--radius-lg)', background: 'var(--color-secondary)', color: 'white', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>12k+</div>
              <div style={{ fontSize: '1.1rem', opacity: 0.8, fontWeight: '700' }}>Active Users</div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>250+</div>
              <div style={{ fontSize: '1.1rem', opacity: 0.8, fontWeight: '700' }}>Home Chefs</div>
            </div>
            <div>
              <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>800+</div>
              <div style={{ fontSize: '1.1rem', opacity: 0.8, fontWeight: '700' }}>Restaurants</div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>15+</div>
              <div style={{ fontSize: '1.1rem', opacity: 0.8, fontWeight: '700' }}>Bhubaneswar Zones</div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download CTA - Zomato Style */}
      <section style={{ padding: '3rem 0', background: '#FFF5F6' }}>
        <div className="container">
          <div className="glass" style={{
            background: 'white',
            borderRadius: '32px',
            padding: '2.5rem 4%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            boxShadow: '0 15px 45px rgba(255, 61, 0, 0.05)',
            position: 'relative',
            overflow: 'hidden',
            border: 'none'
          }}>
            {/* Background decorative circles */}
            <div style={{ position: 'absolute', right: '-10%', bottom: '-10%', width: '400px', height: '400px', background: 'rgba(255, 61, 0, 0.03)', borderRadius: '50%', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', right: '5%', top: '10%', width: '200px', height: '200px', background: 'rgba(255, 61, 0, 0.02)', borderRadius: '50%', zIndex: 0 }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--color-secondary)', marginBottom: '1rem', lineHeight: '1.1' }}>
                Download the <br />app now!
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#4F4F4F', marginBottom: '2.5rem', maxWidth: '400px', lineHeight: '1.5' }}>
                Experience seamless online ordering only on the TezDel app
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="#" style={{ display: 'block' }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    style={{ height: '38px', borderRadius: '6px' }}
                  />
                </a>
                <a href="#" style={{ display: 'block' }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    style={{ height: '38px', borderRadius: '6px' }}
                  />
                </a>
              </div>
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
              {/* iPhone 17 Pro Max Mockup - Cosmic Orange */}
              <div style={{
                position: 'relative',
                width: '260px',
                height: '520px',
                background: 'linear-gradient(135deg, #FF5722 0%, #E64A19 50%, #BF360C 100%)',
                borderRadius: '60px',
                padding: '8px',
                boxShadow: '0 50px 100px rgba(255, 87, 34, 0.2), 0 0 0 2px rgba(255, 87, 34, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.5s ease'
              }}>
                {/* Cosmic Orange Metallic Accents */}
                <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', bottom: '10px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '54px', pointerEvents: 'none' }}></div>

                {/* Ultra-Slim Side Buttons */}
                <div style={{ position: 'absolute', left: '-2px', top: '110px', width: '3px', height: '35px', background: '#BF360C', borderRadius: '2px 0 0 2px', border: '1px solid #FF5722' }}></div>
                <div style={{ position: 'absolute', left: '-2px', top: '165px', width: '3px', height: '65px', background: '#BF360C', borderRadius: '2px 0 0 2px', border: '1px solid #FF5722' }}></div>
                <div style={{ position: 'absolute', left: '-2px', top: '235px', width: '3px', height: '65px', background: '#BF360C', borderRadius: '2px 0 0 2px', border: '1px solid #FF5722' }}></div>
                <div style={{ position: 'absolute', right: '-2px', top: '200px', width: '3px', height: '100px', background: '#BF360C', borderRadius: '0 2px 2px 0', border: '1px solid #FF5722' }}></div>

                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'white',
                  borderRadius: '52px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)'
                }}>
                  {/* Ultra-Thin Dynamic Island 2.0 */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    width: '90px',
                    height: '24px',
                    background: 'black',
                    borderRadius: '12px',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#222' }}></div>
                    <div style={{ width: '12px', height: '4px', borderRadius: '2px', background: '#111' }}></div>
                  </div>

                  <div style={{ padding: '1rem' }}>
                    <div style={{
                      color: 'var(--color-primary)',
                      fontWeight: '900',
                      fontSize: '0.65rem',
                      letterSpacing: '1.5px',
                      marginBottom: '0.5rem',
                      background: 'rgba(255, 61, 0, 0.05)',
                      padding: '2px 8px',
                      borderRadius: '20px',
                      display: 'inline-block'
                    }}>NEXT-GEN DELIVERY</div>

                    <p style={{ fontSize: '0.9rem', fontWeight: '800', color: '#111', marginBottom: '1.2rem', lineHeight: '1.4' }}>
                      Scan to unlock <br />Bhubaneswar's best
                    </p>

                    {/* Premium QR Code Container */}
                    <div style={{
                      width: '140px',
                      height: '140px',
                      padding: '0.8rem',
                      border: '2px solid #FF572220',
                      borderRadius: '16px',
                      background: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 15px rgba(255, 87, 34, 0.1)',
                      position: 'relative'
                    }}>
                      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        {/* Cosmic Orange QR corners */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '28px', height: '28px', background: 'var(--color-primary)', borderRadius: '3px' }}></div>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '28px', height: '28px', background: 'var(--color-primary)', borderRadius: '3px' }}></div>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '28px', height: '28px', background: 'var(--color-primary)', borderRadius: '3px' }}></div>
                        <div style={{ position: 'absolute', top: '8px', left: '8px', width: '12px', height: '12px', background: 'white', borderRadius: '2px' }}></div>
                        <div style={{ position: 'absolute', top: '8px', right: '8px', width: '12px', height: '12px', background: 'white', borderRadius: '2px' }}></div>
                        <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '12px', height: '12px', background: 'white', borderRadius: '2px' }}></div>
                        <div style={{ position: 'absolute', top: '40px', left: '40px', width: '60px', height: '60px', background: 'repeating-conic-gradient(#333 0% 25%, transparent 0% 50%) 0% 0% / 8px 8px', opacity: 0.8 }}></div>
                      </div>
                    </div>

                    <div style={{ marginTop: '1.5rem', fontSize: '0.65rem', color: '#999', fontWeight: '600' }}>TEZDEL VERSION 4.0.2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
