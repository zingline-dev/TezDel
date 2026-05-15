import { Link } from 'react-router-dom';

export default function HomeChefs() {
  const chefs = [
    { name: 'Mrs. Dash', specialty: 'Dalma & Badi Chura', rating: 4.9, orders: '1200+', exp: '25y', dishes: ['Dalma Thali', 'Badi Chura', 'Saga Bhaja'], bg: 'linear-gradient(135deg,#FF8A65,#FF5722)', emoji: '🍛' },
    { name: 'Mrs. Mohapatra', specialty: 'Authentic Pakhala Platter', rating: 4.8, orders: '850+', exp: '30y', dishes: ['Pakhala', 'Macha Besara', 'Alu Bharta'], bg: 'linear-gradient(135deg,#F9A825,#F57F17)', emoji: '🥘' },
    { name: 'Mrs. Patnaik', specialty: 'Traditional Macha Besara', rating: 4.7, orders: '540+', exp: '20y', dishes: ['Macha Besara', 'Santula', 'Dahi Baigana'], bg: 'linear-gradient(135deg,#26C6DA,#00838F)', emoji: '🍲' },
    { name: 'Mrs. Sahoo', specialty: 'Chenna Poda & Pitha', rating: 4.9, orders: '2100+', exp: '15y', dishes: ['Chenna Poda', 'Rasabali', 'Malpua'], bg: 'linear-gradient(135deg,#66BB6A,#388E3C)', emoji: '🍮' },
  ];

  const howItWorks = [
    { step: '1', title: 'Browse Chefs', desc: 'Explore verified home chefs near you. See their specialties, ratings, and available dishes.' },
    { step: '2', title: 'Order by Noon / 5 PM', desc: 'Place your lunch order by 12 PM and dinner by 5 PM. Fresh meals cooked on schedule.' },
    { step: '3', title: 'Home-Cooked Delivery', desc: 'Your captain picks up your meal freshly cooked and delivers it to your door in minutes.' },
  ];

  return (
    <div className="page-v3">

      {/* Hero */}
      <section className="page-hero-v3">
        <div className="page-hero-v3-bg" style={{ backgroundImage: 'linear-gradient(rgba(13,7,6,0.72),rgba(13,7,6,0.88)), url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1920&q=80)' }} aria-hidden="true" />
        <div className="page-hero-v3-glow" aria-hidden="true" />
        <div className="page-hero-v3-dots" aria-hidden="true" />
        <div className="container page-hero-v3-content">
          <div className="page-hero-v3-tag">
            <span className="page-hero-v3-tag-dot" aria-hidden="true" />
            <span>Exclusive to TezDel</span>
          </div>
          <h1 className="page-hero-v3-title">Real Odia Food.<br /><span className="page-hero-v3-accent">Real Home Kitchens.</span></h1>
          <p className="page-hero-v3-sub">Order authentic pakhala, dalma, macha besara, and chenna poda — cooked by verified home chefs from your neighbourhood. The food Swiggy doesn't even list.</p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.9rem 2.5rem', borderRadius: '12px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', fontSize: '1rem', fontWeight: 600 }}>Book your Home Chef !!</Link>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-band-v3">
        <div className="stats-band-v3-inner">
          {[{ value: '50+', label: 'Verified Home Chefs' }, { value: '4.8★', label: 'Average Rating' }, { value: 'Daily', label: 'Fresh Cooking' }, { value: 'Odia', label: 'Authentic Cuisine' }].map(s => (
            <div key={s.label} className="stat-item-v3"><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <section className="page-section-v3 page-section-light-v3">
        <div className="container">
          <div className="section-head-v3" style={{ textAlign: 'center' }}>
            <p className="section-label-v3">Simple Process</p>
            <h2 className="section-title-v3">How Home Chef Orders Work</h2>
          </div>
          <div className="steps-v3">
            {howItWorks.map(s => (
              <article key={s.step} className="step-v3">
                <div className="step-num-v3" style={{ background: 'var(--color-primary)' }}>{s.step}</div>
                <h3 className="step-title-v3">{s.title}</h3>
                <p className="step-desc-v3">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Listings */}
      <section className="page-section-v3" style={{ background: '#0D0706' }}>
        <div className="container">
          <div className="section-head-v3">
            <p className="section-label-v3">Our Chefs</p>
            <h2 className="section-title-v3" style={{ color: '#fff' }}>Meet Your<br />Neighbourhood Cooks</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '20px' }}>
            {chefs.map(chef => (
              <article key={chef.name} className="chef-card-v3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="chef-img-v3" style={{ background: chef.bg }}>
                  <span style={{ fontSize: '3.5rem' }}>{chef.emoji}</span>
                  <span className="chef-img-badge-v3">⭐ {chef.rating}</span>
                </div>
                <div className="chef-body-v3" style={{ background: 'transparent' }}>
                  <h3 className="chef-name-v3" style={{ color: '#fff' }}>{chef.name}</h3>
                  <p className="chef-loc-v3">{chef.specialty} · {chef.exp} experience</p>
                  <div className="chef-dishes-v3">
                    {chef.dishes.map(d => <span key={d} className="dish-tag-v3">{d}</span>)}
                  </div>
                  <div className="chef-footer-v3">
                    <span className="chef-rating-v3" style={{ color: 'rgba(255,255,255,0.7)' }}>⭐ {chef.rating} · {chef.orders} orders</span>
                    <button className="chef-order-btn-v3">Order Now</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="tezpass-v3">
        <div className="container">
          <div className="tezpass-v3-inner">
            <div>
              <p className="section-label-v3" style={{ color: 'rgba(255,255,255,0.7)' }}>Quality & Hygiene</p>
              <h2 className="section-title-v3 tezpass-v3-title">Cooked with Love.<br />Served with Safety.</h2>
              <p className="tezpass-v3-p">Every chef in our network is personally verified. We conduct regular kitchen inspections and hygiene audits so you can enjoy home food with 100% peace of mind.</p>
              <Link to="/about" className="btn-outline-white-v3">Our Safety Standards</Link>
            </div>
            <div className="tezpass-card-v3">
              <div className="tezpass-price-v3">100%</div>
              <div className="tezpass-period-v3">Verified Home Kitchens</div>
              <ul className="tezpass-benefits-v3">
                {['Personal kitchen verification visits', 'Mandatory hygiene & safety training', 'Fresh ingredients sourced daily', 'FSSAI registration assistance & checks', 'Strict quality control on every order', 'Transparent customer review system'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/food" className="btn btn-primary" style={{ width: '100%', padding: '1rem', borderRadius: '12px', textDecoration: 'none', display: 'block', textAlign: 'center', fontWeight: 600 }}>Explore All Meals</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
