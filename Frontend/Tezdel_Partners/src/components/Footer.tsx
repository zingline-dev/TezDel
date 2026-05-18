import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030711] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-[10px] group">
              <div className="w-[36px] h-[36px] bg-[#FF3D00] rounded-[10px] flex items-center justify-center shrink-0">
                <span className="text-white text-[15px] font-extrabold tracking-[-1px]" style={{ fontFamily: 'var(--font-logo)' }}>Tz</span>
              </div>
              <span className="text-[20px] font-extrabold text-white" style={{ fontFamily: 'var(--font-logo)' }}>
                Tez<em className="text-[#FF3D00] not-italic">Del</em>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Odisha's next-generation hyperlocal commerce platform. Zero commission. Community first. ONDC-ready. Built for Bhubaneswar.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple/10 border border-purple/20 text-[10px] font-black text-purple uppercase tracking-widest">
              🏛️ ONDC-Ready Partner
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Partnerships</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/restaurants" className="hover:text-primary transition-colors">Restaurants</Link></li>
              <li><Link href="/kirana" className="hover:text-primary transition-colors">Kirana Stores</Link></li>
              <li><Link href="/home-chefs" className="hover:text-primary transition-colors">Home Chefs</Link></li>
              <li><Link href="/captains" className="hover:text-primary transition-colors">Delivery Captains</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/calculator" className="hover:text-primary transition-colors">Earnings Calculator</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Ecosystem</Link></li>
              <li><Link href="/faqs" className="hover:text-primary transition-colors">Partner FAQs</Link></li>
              <li><Link href="/ondc" className="hover:text-primary transition-colors">ONDC Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span>partner@tezdel.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="pt-2 text-xs opacity-50 uppercase tracking-widest">
                Office: Infocity, Bhubaneswar
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} TezDel Hyperlocal Private Limited. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
