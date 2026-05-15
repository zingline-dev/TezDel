import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl italic">T</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter text-white">TEZDEL</span>
                <span className="text-[10px] font-bold text-primary tracking-[0.2em]">PARTNERS</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Odisha's next-generation hyperlocal network. Empowering local businesses to grow beyond physical boundaries.
            </p>
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
