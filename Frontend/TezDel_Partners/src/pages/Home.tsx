import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyPartner from '../components/WhyPartner';
import PartnerPrograms from '../components/PartnerPrograms';
import ONDCSection from '../components/ONDCSection';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ fontFamily: 'var(--font-main)' }}>
      <Navbar />
      <Hero />
      <WhyPartner />
      <PartnerPrograms />
      <ONDCSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
