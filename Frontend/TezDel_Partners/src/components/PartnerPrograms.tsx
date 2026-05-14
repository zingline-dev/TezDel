import { CheckCircle } from 'lucide-react';

interface ProgramCardProps {
  id: string;
  accentColor: string;
  badge: string;
  headline: string;
  seoContent: string;
  benefits: string[];
  categories: string[];
  categoriesLabel: string;
  ctaText: string;
  imageUrl: string;
  reversed?: boolean;
}

function ProgramCard({ id, accentColor, badge, headline, seoContent, benefits, categories, categoriesLabel, ctaText, imageUrl, reversed }: ProgramCardProps) {
  return (
    <div id={id} style={{ padding: 'clamp(4rem,6vw,5rem) 0', background: reversed ? 'white' : 'var(--color-bg-light)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px,100%), 1fr))', gap: 'clamp(3rem,6vw,7rem)', alignItems: 'center' }}>
          {/* Text — always first on mobile via order */}
          <div style={{ order: reversed ? 2 : 1 }}>
            <div style={{ display: 'inline-block', background: `${accentColor}18`, border: `1px solid ${accentColor}40`, color: accentColor, padding: '6px 18px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
              {badge}
            </div>
            <h2 style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)', fontWeight: '900', color: 'var(--color-secondary)', lineHeight: '1.15', marginBottom: '1.5rem' }}>{headline}</h2>
            <p style={{ fontSize: 'clamp(0.95rem,1.5vw,1.1rem)', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>{seoContent}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px,100%), 1fr))', gap: '0.9rem', marginBottom: '2.5rem' }}>
              {benefits.map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle size={17} style={{ color: accentColor, flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: 'clamp(0.85rem,1.2vw,0.95rem)', fontWeight: '600', color: 'var(--color-text-main)' }}>{b}</span>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--color-text-muted)', letterSpacing: '1.5px', textTransform: 'uppercase' as const, marginBottom: '0.9rem' }}>{categoriesLabel}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {categories.map(c => (
                  <span key={c} style={{ background: 'white', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '999px', padding: '5px 13px', fontSize: 'clamp(0.78rem,1vw,0.85rem)', fontWeight: '600', color: 'var(--color-secondary)', boxShadow: 'var(--shadow-sm)' }}>{c}</span>
                ))}
              </div>
            </div>

            <a href="#final-cta" style={{ display: 'inline-block', background: accentColor, color: 'white', padding: 'clamp(1rem,2vw,1.2rem) clamp(2rem,3vw,3rem)', borderRadius: 'var(--radius-sm)', fontWeight: '800', fontSize: 'clamp(0.9rem,1.2vw,1rem)', textDecoration: 'none', boxShadow: `0 8px 24px ${accentColor}40` }}>
              {ctaText} →
            </a>
          </div>

          {/* Image */}
          <div style={{ order: reversed ? 1 : 2, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-16px', left: reversed ? 'auto' : '-16px', right: reversed ? '-16px' : 'auto', bottom: '16px', width: '100%', background: accentColor, borderRadius: 'var(--radius-lg)', opacity: 0.07 }} />
            <img
              src={imageUrl}
              alt={headline}
              className="program-image"
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', display: 'block', height: 'clamp(280px,35vw,480px)', objectFit: 'cover', position: 'relative', zIndex: 1 }}
            />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 2, background: 'rgba(255,255,255,0.95)', borderRadius: 'var(--radius-sm)', padding: '0.9rem 1.3rem', backdropFilter: 'blur(10px)', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: '900', color: accentColor }}>{benefits.length}+</div>
              <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--color-text-muted)' }}>Key Benefits</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PartnerPrograms() {
  return (
    <section id="programs">
      <div style={{ padding: 'clamp(2rem,4vw,3rem) 0 0', background: 'var(--color-bg-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ color: 'var(--color-primary)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}>Our Programs</div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,3.2rem)', fontWeight: '900', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Choose Your Partner Program</h2>
          <p style={{ fontSize: 'clamp(1rem,1.5vw,1.15rem)', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>Four tailored programs designed for every type of local business and individual.</p>
        </div>
      </div>

      <ProgramCard id="restaurants" accentColor="#FF3D00" badge="Restaurant Partner Program" headline="Stop Paying High Delivery Commissions" seoContent="TezDel offers restaurants in Bhubaneswar a smarter alternative to traditional food delivery platforms. Unlike apps charging 25–30% commissions on every order, TezDel provides a low-cost subscription-based model designed to help local restaurants increase profitability and customer loyalty." benefits={['Flat monthly pricing','More profits per order','Faster local delivery','Local customer discovery','Marketing support','ONDC-ready ecosystem','Better customer retention','Detailed analytics']} categories={['Restaurants','Cafes','Cloud kitchens','Fast food outlets','Family restaurants','Odia cuisine specialists']} categoriesLabel="Ideal For" ctaText="Become a Restaurant Partner" imageUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" reversed={false} />

      <ProgramCard id="home-chefs" accentColor="#10B981" badge="Home Chef Partner Program" headline="Turn Your Home Kitchen Into a Business" seoContent="TezDel empowers talented home chefs and homemakers across Bhubaneswar to sell authentic homemade meals online. From traditional Odia food to healthy tiffins and festival specials, home chefs can earn flexible income while serving real local flavours customers love." benefits={['Work from home','Flexible cooking schedule','Daily payouts support','Access to delivery network','Branding and visibility','Packaging assistance','Festival order opportunities','Zero setup fee']} categories={['Odia Meals','Homemade Tiffins','Healthy Food','Sweets & Desserts','Festival Specials','Diet Meals']} categoriesLabel="Popular Categories" ctaText="Become a Home Chef" imageUrl="https://images.pexels.com/photos/4252136/pexels-photo-4252136.jpeg?auto=compress&cs=tinysrgb&w=800" reversed={true} />

      <ProgramCard id="kirana" accentColor="#3B82F6" badge="Kirana Partner Program" headline="Bring Your Kirana Store Online" seoContent="TezDel helps neighbourhood kirana stores in Bhubaneswar grow digitally without expensive infrastructure or warehouse investment. Local stores can receive online grocery orders directly from nearby customers while continuing normal offline operations." benefits={['More daily orders','No warehouse investment','Digital order management','Hyperlocal customer reach','Real-time inventory support','Instant settlement system']} categories={['Daily essentials','Grocery items','Dairy products','Household products','Snacks & beverages','Personal care products']} categoriesLabel="Categories" ctaText="Join as a Kirana Partner" imageUrl="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80" reversed={false} />

      <ProgramCard id="captains" accentColor="#8B5CF6" badge="Delivery Captain Program" headline="Earn Flexible Income in Your Own Area" seoContent="TezDel delivery captains are trusted local delivery partners serving nearby neighbourhoods and housing societies. Captains enjoy flexible working hours, stable earnings, and the advantage of working within familiar local areas." benefits={['Flexible hours','Weekly payouts','Local delivery routes','Incentive bonuses','Community-based work','Fast onboarding']} categories={['Smartphone','Valid ID proof','Two-wheeler preferred','Basic navigation skills']} categoriesLabel="Requirements" ctaText="Become a Delivery Captain" imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80" reversed={true} />
    </section>
  );
}
