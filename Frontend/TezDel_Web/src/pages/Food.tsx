import { Link } from 'react-router-dom';

export default function Food() {
  const categories = [
    { name: 'Odia Specials', icon: '🍲' },
    { name: 'Biryani', icon: '🍚' },
    { name: 'Pizza', icon: '🍕' },
    { name: 'Burgers', icon: '🍔' },
    { name: 'Rolls', icon: '🌯' },
    { name: 'Desserts', icon: '🍮' },
  ];

  const restaurants = [
    { name: 'Odisha Hotel', rating: 4.8, time: '25 mins', price: '₹300 for two', tags: 'Odia · Thali', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80' },
    { name: 'Dalma Restaurant', rating: 4.6, time: '30 mins', price: '₹400 for two', tags: 'Odia · Authentic', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80' },
    { name: 'The Biryani Box', rating: 4.4, time: '20 mins', price: '₹250 for two', tags: 'Biryani · North Indian', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80' },
    { name: 'Pakhala Hub', rating: 4.7, time: '35 mins', price: '₹200 for two', tags: 'Local · Odia', img: 'https://images.unsplash.com/photo-1513415277900-a62401e19be4?auto=format&fit=crop&w=800&q=80' },
    { name: 'Tandoor Hot', rating: 4.2, time: '15 mins', price: '₹350 for two', tags: 'North Indian · Kebabs', img: 'https://images.unsplash.com/photo-1514516313544-7ed21b7a746e?auto=format&fit=crop&w=800&q=80' },
    { name: 'Sugar Rush', rating: 4.9, time: '10 mins', price: '₹150 for two', tags: 'Desserts · Shakes', img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="page-v3">

      {/* Header */}
      <section className="page-header-v3" style={{ minHeight: '180px', display: 'flex', alignItems: 'center', paddingBottom: 0 }}>
        <div className="page-header-v3-bg" style={{ background: '#0D0706' }} aria-hidden="true" />
        <div className="page-header-v3-glow" aria-hidden="true" />
        <div className="page-header-v3-dots" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Search Bar */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'stretch', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            <div className="food-location-box-v3">
              <span>📍</span>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '15px' }}>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginRight: '8px' }}>Delivering to:</span>
                Patia, Bhubaneswar
              </div>
            </div>
            <div className="food-search-box-v3">
              <span style={{ fontSize: '20px' }}>🔍</span>
              <input type="text" placeholder="Search for Pakhala, Dalma or your favourite restaurant" style={{ border: 'none', outline: 'none', background: 'transparent', flex: 1, fontSize: '16px', color: '#333', fontWeight: 500 }} />
            </div>
            <button className="btn btn-primary" style={{ padding: '0 40px', borderRadius: '14px', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap' }}>Find Food</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="page-section-v3 page-section-light-v3" style={{ paddingTop: '60px', paddingBottom: '40px' }}>
        <div className="container">
          <h2 className="section-title-v3" style={{ marginBottom: '28px', textAlign: 'center' }}>What's on your mind?</h2>
          <div className="food-chip-grid-v3" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
            {categories.map(cat => (
              <div key={cat.name} className="food-cat-chip-v3">
                <span style={{ fontSize: '28px', display: 'block', marginBottom: '6px' }}>{cat.icon}</span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-main)', whiteSpace: 'nowrap' }}>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="page-section-v3 page-section-light-v3" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <p className="section-label-v3">All Restaurants</p>
              <h2 className="section-title-v3" style={{ fontSize: '28px', marginBottom: 0 }}>Popular Near You</h2>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['⭐ Rating', '⚡ Fastest', '💰 Price'].map(f => (
                <button key={f} className="filter-chip-v3">{f}</button>
              ))}
            </div>
          </div>
          <div className="restaurant-grid-v3">
            {restaurants.map(r => (
              <article key={r.name} className="restaurant-card-v3">
                <div className="restaurant-card-img-v3">
                  <img src={r.img} alt={r.name} />
                  <div className="restaurant-card-badge-v3">⚡ {r.time}</div>
                </div>
                <div className="restaurant-card-body-v3">
                  <h3 className="restaurant-card-name-v3">{r.name}</h3>
                  <p className="restaurant-card-tags-v3">{r.tags}</p>
                  <div className="restaurant-card-footer-v3">
                    <span className="restaurant-card-rating-v3">⭐ {r.rating}</span>
                    <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{r.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tezpass-v3">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label-v3" style={{ color: 'rgba(255,255,255,0.7)' }}>Partner Program</p>
          <h2 className="section-title-v3 tezpass-v3-title" style={{ margin: '0 auto 1rem' }}>Own a Restaurant?<br />Join TezDel for Free.</h2>
          <p className="tezpass-v3-p" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>No commission. No hidden fees. Just ₹999/month flat to reach every hungry customer in your zone.</p>
          <Link to="/contact" className="btn-outline-white-v3">Register Your Restaurant</Link>
        </div>
      </section>

    </div>
  );
}
