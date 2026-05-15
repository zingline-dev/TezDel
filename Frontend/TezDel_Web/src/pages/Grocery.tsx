import { Link } from 'react-router-dom';

export default function Grocery() {
  const categories = [
    { title: 'Daily Essentials', icon: '🥛', desc: 'Milk, bread, and eggs from local farms.', color: '#E0F2FE', border: '#BAE6FD' },
    { title: 'Fresh Produce', icon: '🥦', desc: 'Farm-fresh vegetables & seasonal fruits.', color: '#DCFCE7', border: '#86EFAC' },
    { title: 'Dairy & Omfed', icon: '🧀', desc: 'Fresh Omfed milk & local dairy products.', color: '#FEF9C3', border: '#FDE047' },
    { title: 'Household', icon: '🧹', desc: 'Daily cleaning & personal care needs.', color: '#F3E8FF', border: '#C084FC' },
  ];

  const stores = [
    { name: 'Patia Kirana Corner', loc: 'Patia', items: '800+ items', time: '18 mins', icon: '🏪' },
    { name: 'Sahoo General Store', loc: 'Nayapalli', items: '600+ items', time: '22 mins', icon: '🛒' },
    { name: 'Patel Brothers', loc: 'Saheed Nagar', items: '1200+ items', time: '25 mins', icon: '🏬' },
    { name: 'Omfed Dairy Centre', loc: 'Infocity', items: 'Dairy Specialist', time: '15 mins', icon: '🥛' },
  ];

  return (
    <div className="page-v3">

      {/* Header */}
      <section className="page-header-v3" style={{ minHeight: '180px', display: 'flex', alignItems: 'center', paddingBottom: 0 }}>
        <div className="page-header-v3-bg" style={{ background: '#0D0706' }} aria-hidden="true" />
        <div className="page-header-v3-glow" aria-hidden="true" />
        <div className="page-header-v3-dots" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'stretch', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            <div className="food-location-box-v3">
              <span>📍</span>
              <div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '2px' }}>Delivering to</div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '16px' }}>Patia, Bhubaneswar</div>
              </div>
            </div>
            <div className="food-search-box-v3">
              <span style={{ fontSize: '20px' }}>🔍</span>
              <input type="text" placeholder="Search for vegetables, milk, groceries..." style={{ border: 'none', outline: 'none', background: 'transparent', flex: 1, fontSize: '16px', color: '#333', fontWeight: 500 }} />
            </div>
            <button className="btn btn-primary" style={{ padding: '0 40px', borderRadius: '14px', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap' }}>Search</button>
          </div>
        </div>
      </section>

      {/* Promise Band */}
      <div className="stats-band-v3">
        <div className="stats-band-v3-inner">
          {[{ value: '20 min', label: 'Express Delivery' }, { value: '1000+', label: 'Grocery Items' }, { value: '₹0', label: 'Delivery Fee on TezPass' }, { value: 'Local', label: 'Kirana Network' }].map(s => (
            <div key={s.label} className="stat-item-v3"><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="page-section-v3 page-section-light-v3">
        <div className="container">
          <div className="section-head-v3">
            <p className="section-label-v3">Shop by Category</p>
            <h2 className="section-title-v3">What Do You Need Today?</h2>
          </div>
          <div className="cat-grid-v3">
            {categories.map(cat => (
              <div key={cat.title} className="cat-card-v3" style={{ background: cat.color, borderColor: cat.border }}>
                <span className="cat-icon-v3">{cat.icon}</span>
                <h3 className="cat-name-v3">{cat.title}</h3>
                <p className="cat-desc-v3">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stores */}
      <section className="page-section-v3" style={{ background: '#0D0706' }}>
        <div className="container">
          <div className="section-head-v3">
            <p className="section-label-v3">Partner Stores</p>
            <h2 className="section-title-v3" style={{ color: '#fff' }}>Your Neighbourhood<br />Kirana Network</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '20px' }}>
            {stores.map(s => (
              <div key={s.name} className="why-card-v3" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ fontSize: '36px' }}>{s.icon}</div>
                <h3 className="why-title-v3">{s.name}</h3>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>📍 {s.loc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
                  <span className="badge-yes">{s.items}</span>
                  <span style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: 700 }}>⚡ {s.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kirana Partner CTA */}
      <section className="tezpass-v3">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label-v3" style={{ color: 'rgba(255,255,255,0.7)' }}>For Kirana Owners</p>
          <h2 className="section-title-v3 tezpass-v3-title" style={{ margin: '0 auto 1rem' }}>Put Your Store<br />Online — In Minutes.</h2>
          <p className="tezpass-v3-p" style={{ maxWidth: '480px', margin: '0 auto 2rem' }}>No tech skills needed. We handle everything. You just pack the orders and we deliver.</p>
          <Link to="/contact" className="btn-outline-white-v3">Register Your Store</Link>
        </div>
      </section>

    </div>
  );
}
