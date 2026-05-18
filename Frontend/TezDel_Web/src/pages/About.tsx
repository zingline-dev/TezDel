import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function About() {
  const values = [
    { icon: '📍', title: 'Local First', desc: 'Prioritizing Bhubaneswar businesses & communities in everything we do.' },
    { icon: '🤝', title: 'Community Trust', desc: 'Built on neighbourhood relationships and local accountability.' },
    { icon: '🛡️', title: 'Fair Business', desc: 'Zero commission model to ensure local partners thrive, not just survive.' },
    { icon: '⚡', title: 'Fast Delivery', desc: 'A 20-minute hyperlocal delivery promise powered by local intelligence.' },
    { icon: '📡', title: 'Technology with Purpose', desc: 'Using ONDC-ready infrastructure to democratize digital commerce.' },
    { icon: '🌱', title: 'Sustainable Growth', desc: 'Building a platform that grows with the city, not at its expense.' },
  ];

  const team = [
    { name: 'Founder & CEO', icon: '👨‍💼', desc: 'Bhubaneswar native with a vision to put the city on the q-commerce map.' },
    { name: 'Head of Operations', icon: '📦', desc: 'Former logistics expert ensuring every delivery hits the 20-min mark.' },
    { name: 'Head of Technology', icon: '💻', desc: 'ONDC specialist building the infrastructure of hyperlocal commerce.' },
    { name: 'Community Lead', icon: '🌐', desc: 'The person behind every chef, kirana, and captain partnership.' },
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "TezDel",
      "url": "https://tezdel.com",
      "logo": "https://tezdel.com/logo.png",
      "description": "TezDel is a zero-commission hyperlocal food and grocery delivery network in Bhubaneswar.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Patia",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "postalCode": "751024",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="page-v3">
      <SEO 
        title="About TezDel | Zero-Commission Community Delivery Platform" 
        description="Discover how TezDel is empowering local Bhubaneswar home chefs, kirana merchants, and restaurants with our fair, community-first zero commission delivery network." 
        keywords="about TezDel, zero commission delivery, community commerce, ONDC partner, hyperlocal logistics, Bhubaneswar startup, support local Odisha" 
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        schema={aboutSchema}
      />

      {/* Hero */}
      <section className="page-hero-v3">
        <div className="page-hero-v3-bg" style={{ backgroundImage: 'linear-gradient(rgba(13,7,6,0.75),rgba(13,7,6,0.9)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80)' }} aria-hidden="true" />
        <div className="page-hero-v3-glow" aria-hidden="true" />
        <div className="page-hero-v3-dots" aria-hidden="true" />
        <div className="container page-hero-v3-content">
          <div className="page-hero-v3-tag">
            <span className="page-hero-v3-tag-dot" aria-hidden="true" />
            <span>Our Story</span>
          </div>
          <h1 className="page-hero-v3-title">Built for<br /><span className="page-hero-v3-accent">Bhubaneswar.</span><br />Built by Bhubaneswar.</h1>
          <p className="page-hero-v3-sub">We saw that national players were neglecting our unique local food culture and squeezing small businesses with high commissions. So we built something better.</p>
        </div>
      </section>

      {/* Stats Band */}
      <div className="stats-band-v3">
        <div className="stats-band-v3-inner">
          {[
            { value: '20 min', label: 'Average Delivery' },
            { value: '₹0', label: 'Commission to Restaurants' },
            { value: '500+', label: 'Restaurant Partners' },
            { value: 'ONDC', label: 'Ready Network' },
          ].map(s => (
            <div key={s.label} className="stat-item-v3"><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <section className="page-section-v3 page-section-light-v3">
        <div className="container page-two-col-v3">
          <div>
            <p className="section-label-v3">Our Mission</p>
            <h2 className="section-title-v3">A Platform That<br />Puts the City First</h2>
            <p className="section-sub-v3" style={{ marginBottom: '1.5rem' }}>TezDel was created to build a hyperlocal delivery ecosystem designed specifically for Bhubaneswar and Odisha. From the narrow lanes of Old Town to the bustling hubs of Patia and Infocity, TezDel is Bhubaneswar's own heartbeat.</p>
            <p className="section-sub-v3">We don't compete with local businesses — we power them. Every restaurant, every home chef, every kirana store on TezDel gets equal visibility, zero commission cuts, and a direct connection to their neighbourhood customers.</p>
          </div>
          <div className="page-img-box-v3">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" alt="TezDel mission" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="page-section-v3" style={{ background: '#0D0706' }}>
        <div className="container">
          <div className="section-head-v3">
            <p className="section-label-v3">What Drives Us</p>
            <h2 className="section-title-v3" style={{ color: '#fff' }}>Our Core Values</h2>
          </div>
          <div className="why-grid-v3">
            {values.map(v => (
              <article key={v.title} className="why-card-v3">
                <div className="why-icon-v3" aria-hidden="true">{v.icon}</div>
                <h3 className="why-title-v3">{v.title}</h3>
                <p className="why-desc-v3">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="page-section-v3 page-section-light-v3">
        <div className="container">
          <div className="section-head-v3" style={{ textAlign: 'center' }}>
            <p className="section-label-v3">The People</p>
            <h2 className="section-title-v3">Who We Are</h2>
            <p className="section-sub-v3" style={{ margin: '0 auto' }}>A small, passionate team of Odias building for their own city.</p>
          </div>
          <div className="cat-grid-v3">
            {team.map(t => (
              <div key={t.name} className="about-team-card-v3">
                <div className="about-team-icon-v3">{t.icon}</div>
                <h3 className="cat-name-v3" style={{ marginBottom: '8px' }}>{t.name}</h3>
                <p className="cat-desc-v3">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tezpass-v3">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label-v3" style={{ color: 'rgba(255,255,255,0.7)' }}>Join the Movement</p>
          <h2 className="section-title-v3 tezpass-v3-title" style={{ margin: '0 auto 1rem' }}>Want to Be Part<br />of the TezDel Story?</h2>
          <p className="tezpass-v3-p" style={{ maxWidth: '560px', margin: '0 auto 2rem' }}>Whether you're a foodie, a busy professional, or a resident who loves supporting local — join us in revolutionizing Bhubaneswar's delivery heartbeat.</p>
          <div className="cta-btns-group">
            <Link to="/food" className="btn btn-primary" style={{ padding: '0.9rem 2.5rem', borderRadius: '12px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>Browse Local Food</Link>
            <Link to="/contact" className="btn-outline-white-v3">Become a Supporter</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
