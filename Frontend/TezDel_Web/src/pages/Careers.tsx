import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Careers() {
  const roles = [
    { title: 'Operations Manager', type: 'Full-time', loc: 'Bhubaneswar', dept: 'Operations', icon: '📦' },
    { title: 'Senior Frontend Engineer', type: 'Full-time', loc: 'Hybrid (Bhubaneswar)', dept: 'Engineering', icon: '💻' },
    { title: 'Logistics Optimization Lead', type: 'Full-time', loc: 'Bhubaneswar', dept: 'Supply Chain', icon: '🗺️' },
    { title: 'Community Growth Manager', type: 'Full-time', loc: 'Bhubaneswar', dept: 'Marketing', icon: '📢' },
    { title: 'Customer Experience Lead', type: 'Full-time', loc: 'Bhubaneswar', dept: 'Support', icon: '🌟' },
  ];

  const perks = [
    { icon: '🏠', title: 'Remote-Friendly', desc: 'Work from home or our Patia office. Flexible hours for all non-ops roles.' },
    { icon: '⚡', title: 'Fast Growth', desc: 'Early team means massive ownership and career growth as we scale Odisha.' },
    { icon: '🌱', title: 'Mission-Driven', desc: 'Work on something that directly helps local restaurants, chefs, and kirana stores in your own city.' },
    { icon: '💰', title: 'Competitive Pay', desc: 'Market-rate salaries + ESOPs for early team members across all roles.' },
  ];

  const careersSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TezDel Careers",
    "url": "https://tezdel.com/careers",
    "logo": "https://tezdel.com/logo.png",
    "description": "Build the future of community-first q-commerce and logistics. Apply for engineering, product, operations, and rider captain roles at TezDel in Bhubaneswar.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "TezDel",
      "sameAs": "https://tezdel.com"
    }
  };

  return (
    <div className="page-v3">
      <SEO 
        title="Careers at TezDel | Join Bhubaneswar's Fastest Growing Q-Commerce Brand" 
        description="Build the future of community-first q-commerce and logistics. Apply for engineering, product, operations, and rider captain roles at TezDel in Bhubaneswar." 
        keywords="TezDel careers, startup jobs Bhubaneswar, logistics jobs Odisha, software engineer jobs Bhubaneswar, delivery captain jobs" 
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        schema={careersSchema}
      />

      {/* Hero */}
      <section className="page-hero-v3">
        <div className="page-hero-v3-bg" style={{ backgroundImage: 'linear-gradient(rgba(13,7,6,0.75),rgba(13,7,6,0.9)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80)' }} aria-hidden="true" />
        <div className="page-hero-v3-glow" aria-hidden="true" />
        <div className="page-hero-v3-dots" aria-hidden="true" />
        <div className="container page-hero-v3-content">
          <div className="page-hero-v3-tag">
            <span className="page-hero-v3-tag-dot" aria-hidden="true" />
            <span>We're Hiring</span>
          </div>
          <h1 className="page-hero-v3-title">Build the Future of<br /><span className="page-hero-v3-accent">Local Commerce</span><br />in Odisha.</h1>
          <p className="page-hero-v3-sub">Join a small, passionate team building something real — for our own city. We're looking for people who care about Bhubaneswar as much as we do.</p>
        </div>
      </section>

      {/* Perks */}
      <section className="page-section-v3 page-section-light-v3">
        <div className="container">
          <div className="section-head-v3" style={{ textAlign: 'center' }}>
            <p className="section-label-v3">Why TezDel</p>
            <h2 className="section-title-v3">Why You'll Love<br />Working Here</h2>
          </div>
          <div className="cat-grid-v3">
            {perks.map(p => (
              <div key={p.title} className="about-team-card-v3">
                <div className="about-team-icon-v3">{p.icon}</div>
                <h3 className="cat-name-v3" style={{ marginBottom: '8px' }}>{p.title}</h3>
                <p className="cat-desc-v3">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="page-section-v3" style={{ background: '#0D0706' }}>
        <div className="container">
          <div className="section-head-v3">
            <p className="section-label-v3">Open Positions</p>
            <h2 className="section-title-v3" style={{ color: '#fff' }}>Current Openings</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {roles.map(role => (
              <div key={role.title} className="careers-role-card-v3">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                  <div className="why-icon-v3" style={{ margin: 0, flexShrink: 0 }}>{role.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{role.title}</h3>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>📍 {role.loc}</span>
                      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>🏷️ {role.dept}</span>
                      <span className="badge-yes">{role.type}</span>
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="chef-order-btn-v3" style={{ textDecoration: 'none', display: 'inline-block', whiteSpace: 'nowrap' }}>Apply Now →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="tezpass-v3">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label-v3" style={{ color: 'rgba(255,255,255,0.7)' }}>Don't See Your Role?</p>
          <h2 className="section-title-v3 tezpass-v3-title" style={{ margin: '0 auto 1rem' }}>We're Always Looking<br />for Great People.</h2>
          <p className="tezpass-v3-p" style={{ maxWidth: '480px', margin: '0 auto 2rem' }}>Send us your resume and tell us what you can bring to TezDel. We'll reach out when the right opportunity opens up.</p>
          <Link to="/contact" className="btn-outline-white-v3">Send Open Application</Link>
        </div>
      </section>

    </div>
  );
}
