import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Home() {
  const [activeZone, setActiveZone] = useState('Patia');
  const [searchValue, setSearchValue] = useState('');

  const chips = ['🍛 Odia Thali', '🥗 Dalma', '🧅 Grocery', '🍰 Chenna Poda', '🛵 Quick Delivery'];

  const zones = [
    { name: 'Patia', status: 'live' },
    { name: 'Nayapalli', status: 'live' },
    { name: 'Saheed Nagar', status: 'soon' },
    { name: 'Khandagiri', status: 'soon' },
    { name: 'Infocity', status: 'coming' },
    { name: 'Chandrasekharpur', status: 'coming' },
    { name: 'Bapuji Nagar', status: 'coming' },
    { name: 'IRC Village', status: 'coming' },
  ];

  const chefs = [
    { name: 'Priya Mohanty', loc: 'Patia, Bhubaneswar', rating: '4.9', orders: '230', dishes: ['Dalma Thali', 'Pakhala', 'Besara'], bg: 'linear-gradient(135deg,#FF8A65,#FF5722)', emoji: '🍛' },
    { name: 'Sunita Nayak', loc: 'Nayapalli, Bhubaneswar', rating: '4.8', orders: '185', dishes: ['Macha Besara', 'Santula', 'Dahi Baigana'], bg: 'linear-gradient(135deg,#F9A825,#F57F17)', emoji: '🥘' },
    { name: 'Mamata Das', loc: 'Saheed Nagar, Bhubaneswar', rating: '5.0', orders: '312', dishes: ['Chenna Poda', 'Rasabali', 'Malpua'], bg: 'linear-gradient(135deg,#26C6DA,#00838F)', emoji: '🍮' },
  ];

  const whyCards = [
    { icon: '⚡', title: '20-Minute Delivery Promise', desc: 'Short delivery radii, captains who live in your zone, and pre-positioned kirana partners mean your order arrives fast — guaranteed.' },
    { icon: '🏠', title: 'Authentic Odia Home Cooking', desc: 'The only platform where you can order real pakhala, dalma, and chenna poda cooked by verified home chefs from your neighbourhood.' },
    { icon: '🤝', title: 'Neighbourhood Captains', desc: 'Your delivery captain is someone who lives in your colony — not a stranger. They know your building, your floor, and your name.' },
    { icon: '🏪', title: 'Kirana Store Network', desc: 'We partner with your local kirana stores — not corporate dark stores. Your grocery comes from a shop that knows your preferences.' },
    { icon: '📡', title: 'ONDC Powered', desc: "Built on India's Open Network for Digital Commerce from day one. More reach, more transparency, more trust — for everyone." },
    { icon: '🌱', title: 'Zero Commission Model', desc: 'Restaurants pay ₹999/month flat — no 25% commission cuts. Savings passed to you through better food quality and fair prices.' },
  ];

  return (
    <div className="home-v3">

      {/* ── HERO ── */}
      <section className="hero-v3" aria-label="Hero — Order food in 20 minutes">
        <div
          className="hero-v3-bg"
          style={{ backgroundImage: 'linear-gradient(rgba(13,7,6,0.72), rgba(13,7,6,0.88)), url(https://images.pexels.com/photos/37152225/pexels-photo-37152225.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
          aria-hidden="true"
        />
        <div className="hero-v3-glow" aria-hidden="true" />
        <div className="hero-v3-dots" aria-hidden="true" />

        <div className="hero-v3-inner">
          {/* Left */}
          <div className="hero-v3-left">
            <div className="hero-v3-tag">
              <div className="hero-v3-tag-dot" aria-hidden="true" />
              <span>Live in Bhubaneswar</span>
            </div>
            <h1 className="hero-v3-title">
              Bhubaneswar's<br />Food Delivered<br />
              <span className="hero-v3-accent">In 20 Minutes.</span>
            </h1>
            <p className="hero-v3-sub">
              Authentic Odia home cooking, local restaurants, and kirana groceries — delivered fast by your neighbourhood captain. Zero hidden fees. 100% local.
            </p>
            <div className="hero-v3-search" role="search">
              <Search size={18} color="#aaa" />
              <input
                type="text"
                id="hero-search"
                placeholder="Search for dalma, biryani, groceries..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                aria-label="Search food and restaurants"
              />
              <button className="hero-v3-search-btn" type="button">Search</button>
            </div>
            <div style={{ marginTop: '14px', fontSize: '13px', color: 'rgba(255,255,255,0.45)', display: 'flex', gap: '12px' }}>
              <span>Try: <strong>Dalma</strong></span>
              <span>•</span>
              <span><strong>Odia Thali</strong></span>
              <span>•</span>
              <span><strong>Macha Besara</strong></span>
            </div>
            <div className="hero-v3-chips" role="list" aria-label="Popular searches">
              {chips.map(chip => (
                <span
                  key={chip}
                  className="hero-v3-chip"
                  role="listitem"
                  tabIndex={0}
                  onClick={() => setSearchValue(chip.replace(/[^\w\s]/g, '').trim())}
                  onKeyDown={e => e.key === 'Enter' && setSearchValue(chip.replace(/[^\w\s]/g, '').trim())}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right visual card */}
          <div className="hero-v3-visual" aria-hidden="true">
            <div className="hero-v3-card">
              <div className="hero-v3-food-grid">
                {[
                  { emoji: '🍛', name: 'Dalma Thali', price: '₹120' },
                  { emoji: '🍲', name: 'Pakhala', price: '₹90' },
                  { emoji: '🍮', name: 'Chenna Poda', price: '₹60' },
                  { emoji: '🥬', name: 'Besara', price: '₹110' },
                ].map(item => (
                  <div key={item.name} className="hero-v3-food-item">
                    <span className="hero-v3-food-emoji">{item.emoji}</span>
                    <div className="hero-v3-food-name">{item.name}</div>
                    <div className="hero-v3-food-price">{item.price}</div>
                  </div>
                ))}
              </div>
              <div className="hero-v3-delivery-badge">
                <div className="hero-v3-db-icon">⚡</div>
                <div className="hero-v3-db-text">
                  <strong>Arriving in 18 minutes</strong>
                  <span>Your neighbourhood captain is on the way</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div className="stats-band-v3" role="region" aria-label="Key metrics">
        <div className="stats-band-v3-inner">
          {[
            { value: '20 min', label: 'Average Delivery' },
            { value: '₹0', label: 'Commission to Restaurants' },
            { value: '500+', label: 'Restaurant Partners' },
            { value: 'ONDC', label: 'Ready Network' },
          ].map(stat => (
            <div key={stat.label} className="stat-item-v3">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CATEGORIES ── */}
      <section className="cats-v3" id="categories" aria-labelledby="cat-heading">
        <div className="container">
          <div className="section-head-v3">
            <p className="section-label-v3">What would you like?</p>
            <h2 className="section-title-v3" id="cat-heading">Everything Your<br />Neighbourhood Needs</h2>
            <p className="section-sub-v3">From home-cooked Odia meals to fresh kirana groceries — TezDel is your single window to Bhubaneswar's best local offerings.</p>
          </div>
          <div className="cat-grid-v3" role="list">
            <Link to="/food" className="cat-card-v3 cat-food" role="listitem" tabIndex={0}>
              <div className="cat-badge-v3">500+ Restaurants</div>
              <span className="cat-icon-v3" aria-hidden="true">🍽️</span>
              <h3 className="cat-name-v3">Restaurant Food</h3>
              <p className="cat-desc-v3">Biryani, pizza, Odia thali and more from the best local restaurants in your zone</p>
            </Link>
            <Link to="/grocery" className="cat-card-v3 cat-grocery" role="listitem" tabIndex={0}>
              <div className="cat-badge-v3" style={{ background: '#1B8A60' }}>Kirana Network</div>
              <span className="cat-icon-v3" aria-hidden="true">🛒</span>
              <h3 className="cat-name-v3">Kirana Grocery</h3>
              <p className="cat-desc-v3">Fresh vegetables, daily essentials and groceries from trusted neighbourhood kirana stores</p>
            </Link>
            <Link to="/home-chefs" className="cat-card-v3 cat-chef" role="listitem" tabIndex={0}>
              <div className="cat-badge-v3" style={{ background: '#D4A017' }}>Odia Specials</div>
              <span className="cat-icon-v3" aria-hidden="true">👩‍🍳</span>
              <h3 className="cat-name-v3">Home Chef Meals</h3>
              <p className="cat-desc-v3">Authentic Odia food cooked by local home chefs — dalma, pakhala, besara & more</p>
            </Link>
            <Link to="/contact" className="cat-card-v3 cat-corp" role="listitem" tabIndex={0}>
              <div className="cat-badge-v3" style={{ background: '#4F46E5' }}>Office Meals</div>
              <span className="cat-icon-v3" aria-hidden="true">🏢</span>
              <h3 className="cat-name-v3">Corporate Catering</h3>
              <p className="cat-desc-v3">Daily office lunches, team meals, and event catering for IT companies and offices</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-v3" aria-labelledby="how-heading">
        <div className="container">
          <div className="section-head-v3" style={{ textAlign: 'center' }}>
            <p className="section-label-v3">Simple as 1-2-3</p>
            <h2 className="section-title-v3" id="how-heading">How TezDel Works</h2>
            <p className="section-sub-v3" style={{ margin: '0 auto' }}>Place an order in seconds and your neighbourhood captain brings it to your door — fast.</p>
          </div>
          <div className="steps-v3" role="list">
            {[
              { num: '1', color: 'var(--color-primary)', title: 'Browse & Order', desc: 'Open TezDel, search for your favourite restaurant, home chef, or grocery item. Add to cart and checkout in seconds.' },
              { num: '2', color: 'var(--color-secondary)', title: 'Captain Assigned', desc: 'Your neighbourhood captain — someone who lives in your area — picks up your order and heads straight to you.' },
              { num: '3', color: '#1B8A60', title: 'Delivered in 20 Min', desc: 'Track your order live. Your captain arrives at your door in 20 minutes or less. Freshly made, locally sourced.' },
            ].map(step => (
              <article key={step.num} className="step-v3" role="listitem">
                <div className="step-num-v3" style={{ background: step.color }} aria-hidden="true">{step.num}</div>
                <h3 className="step-title-v3">{step.title}</h3>
                <p className="step-desc-v3">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOME CHEF ── */}
      <section className="homechef-v3" id="homechef" aria-labelledby="chef-heading">
        <div className="container">
          <div className="chef-intro-v3">
            <p className="section-label-v3">Exclusive to TezDel</p>
            <h2 className="section-title-v3" id="chef-heading">Real Odia Food.<br />Home Cooked.</h2>
            <p className="section-sub-v3">Our verified home chefs cook the authentic Odia food you crave every day — pakhala, dalma, macha besara, chenna poda. Order by 12 PM for lunch, 5 PM for dinner.</p>
          </div>
          <div className="chef-grid-v3" role="list">
            {chefs.map(chef => (
              <article key={chef.name} className="chef-card-v3" role="listitem">
                <div className="chef-img-v3" style={{ background: chef.bg }}>
                  <span style={{ fontSize: '3.5rem' }}>{chef.emoji}</span>
                  <span className="chef-img-badge-v3">⭐ {chef.rating}</span>
                </div>
                <div className="chef-body-v3">
                  <h3 className="chef-name-v3">{chef.name}</h3>
                  <p className="chef-loc-v3">📍 {chef.loc}</p>
                  <div className="chef-dishes-v3">
                    {chef.dishes.map(d => <span key={d} className="dish-tag-v3">{d}</span>)}
                  </div>
                  <div className="chef-footer-v3">
                    <span className="chef-rating-v3">⭐ {chef.rating} · {chef.orders} orders</span>
                    <button className="chef-order-btn-v3" type="button">Order Now</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="homechef-cta-v3">
            <p>Craving that authentic, slow-cooked Odia taste? Experience the magic of our verified home kitchens.</p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.9rem 2.5rem' }}>Book your Home Chef !!</Link>
          </div>
        </div>
      </section>

      {/* ── WHY TEZDEL ── */}
      <section className="why-v3" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-head-v3">
            <p className="section-label-v3" style={{ color: 'var(--color-primary)' }}>Why we're different</p>
            <h2 className="section-title-v3 why-v3-title" id="why-heading">Not Just Another<br />Delivery App</h2>
            <p className="section-sub-v3 why-v3-sub">TezDel is built from the ground up for Bhubaneswar — not a metro app pasted over a Tier-2 city.</p>
          </div>
          <div className="why-grid-v3" role="list">
            {whyCards.map(card => (
              <article key={card.title} className="why-card-v3" role="listitem">
                <div className="why-icon-v3" aria-hidden="true">{card.icon}</div>
                <h3 className="why-title-v3">{card.title}</h3>
                <p className="why-desc-v3">{card.desc}</p>
              </article>
            ))}
          </div>

          {/* Competitor Table */}
          <div className="why-vs-v3" role="region" aria-label="TezDel vs competitors">
            <h3 className="vs-title-v3">TezDel vs The Big Players</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="vs-table-v3" aria-label="Feature comparison table">
                <thead>
                  <tr>
                    <th scope="col">Platform</th>
                    <th scope="col">Commission</th>
                    <th scope="col">Odia Food</th>
                    <th scope="col">Home Chefs</th>
                    <th scope="col">Kirana Model</th>
                    <th scope="col">ONDC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="vs-tezdel-row">
                    <td><strong>TezDel ★</strong></td>
                    <td>₹999/mo flat</td>
                    <td><span className="badge-yes">Core Identity</span></td>
                    <td><span className="badge-yes">Core Model</span></td>
                    <td><span className="badge-yes">Core Model</span></td>
                    <td><span className="badge-yes">Day 1</span></td>
                  </tr>
                  <tr>
                    <td>Zomato</td>
                    <td>22–30%</td>
                    <td><span className="badge-partial">Partial</span></td>
                    <td><span className="badge-no">None</span></td>
                    <td><span className="badge-no">None</span></td>
                    <td><span className="badge-no">Opposed</span></td>
                  </tr>
                  <tr>
                    <td>Swiggy</td>
                    <td>22–30%</td>
                    <td><span className="badge-partial">Partial</span></td>
                    <td><span className="badge-no">None</span></td>
                    <td><span className="badge-no">None</span></td>
                    <td><span className="badge-no">Limited</span></td>
                  </tr>
                  <tr>
                    <td>Blinkit</td>
                    <td>High</td>
                    <td><span className="badge-no">None</span></td>
                    <td><span className="badge-no">None</span></td>
                    <td><span className="badge-no">Dark stores only</span></td>
                    <td><span className="badge-no">None</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEZPASS ── */}
      <section className="tezpass-v3" aria-labelledby="tezpass-heading">
        <div className="container">
          <div className="tezpass-v3-inner">
            <div>
              <p className="section-label-v3" style={{ color: 'rgba(255,255,255,0.7)' }}>Membership</p>
              <h2 className="section-title-v3 tezpass-v3-title" id="tezpass-heading">TezPass —<br />Unlimited Free Delivery</h2>
              <p className="tezpass-v3-p">Subscribe once and enjoy unlimited free deliveries, exclusive discounts on Odia home chef specials, priority order processing, and access to TezPass-only deals every week.</p>
              <a href="#download" className="btn-outline-white-v3">Get TezPass</a>
            </div>
            <div className="tezpass-card-v3">
              <div className="tezpass-price-v3">₹149</div>
              <div className="tezpass-period-v3">per month — cancel anytime</div>
              <ul className="tezpass-benefits-v3" role="list">
                {[
                  'Unlimited free deliveries every month',
                  'Priority queue — skip the busy-hour wait',
                  '10% off every home chef order',
                  'Exclusive TezPass weekly deals',
                  'Early access to new restaurant partners',
                  'Festival special menus 3 days in advance',
                ].map(b => <li key={b}>{b}</li>)}
              </ul>
              <button className="btn btn-primary" type="button" style={{ width: '100%', padding: '1rem', fontSize: '1rem', borderRadius: '12px' }}>
                Start TezPass Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZONES ── */}
      <section className="zones-v3" id="zones" aria-labelledby="zones-heading">
        <div className="container">
          <div className="section-head-v3">
            <p className="section-label-v3">Coverage</p>
            <h2 className="section-title-v3" id="zones-heading">Delivering to 25+ Zones</h2>
            <p className="section-sub-v3">We are rapidly expanding across Bhubaneswar. Select your zone to explore local favorites.</p>
            <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--color-text-muted)' }}>
              <span className="hero-v3-tag-dot" style={{ verticalAlign: 'middle', marginRight: '8px' }}></span>
              Tap any zone to see estimated delivery times
            </div>
          </div>
          <div className="zone-grid-v3" role="list">
            {zones.map(zone => (
              <div
                key={zone.name}
                role="listitem"
                tabIndex={zone.status !== 'coming' ? 0 : undefined}
                className={`zone-chip-v3 ${activeZone === zone.name ? 'active' : ''} ${zone.status === 'coming' ? 'coming-soon' : ''}`}
                onClick={() => zone.status !== 'coming' && setActiveZone(zone.name)}
                onKeyDown={e => e.key === 'Enter' && zone.status !== 'coming' && setActiveZone(zone.name)}
              >
                <span>{zone.name}</span>
                <small>{zone.status === 'live' ? '✓ Live' : zone.status === 'soon' ? 'Launching soon' : 'Coming soon'}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP DOWNLOAD ── */}
      <section className="app-v3" id="download" aria-labelledby="app-heading">
        <div className="container">
          <div className="app-v3-inner">
            <div>
              <p className="section-label-v3">Get the App</p>
              <h2 className="section-title-v3" id="app-heading">Order Bhubaneswar's<br />Best Food — Anywhere</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.7' }}>
                Download TezDel and get ₹100 off your first order. Available on Android — iOS coming soon.
              </p>
              <div className="app-badge-row-v3">
                <a href="#" aria-label="Download TezDel on Google Play Store">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ height: '44px' }} />
                </a>
                <a href="#" aria-label="Download TezDel on Apple App Store">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" style={{ height: '44px' }} />
                </a>
              </div>
              <div className="ondc-badge-v3">📡 <span>ONDC Certified Seller App</span></div>
            </div>

            {/* Phone Mockup */}
            <div className="app-mockup-outer-v3">
              <div className="app-mockup-v3" aria-label="TezDel app screen preview" role="img">
                <div className="app-notch-v3" aria-hidden="true" />
                <div className="app-screen-v3">
                  <div className="app-screen-header-v3">
                    <span>TezDel</span>
                    <p>📍 Patia, BHB</p>
                  </div>
                  <div className="app-mini-items-v3">
                    {[
                      { emoji: '🍛', text: "Priya's Dalma Thali · ₹120" },
                      { emoji: '🥬', text: 'Fresh Vegetables · Kirana' },
                      { emoji: '🍮', text: 'Chenna Poda · ₹60' },
                      { emoji: '🛵', text: 'Captain Rajan · 12 min away' },
                    ].map(item => (
                      <div key={item.text} className="app-mini-item-v3">
                        <span>{item.emoji}</span>
                        <span>{item.text}</span>
                      </div>
                    ))}
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
