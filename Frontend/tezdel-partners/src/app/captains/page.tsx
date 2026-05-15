'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Wallet, MapPin, Calendar, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};

export default function CaptainPartners() {
  const perks = [
    { title: 'Flexible Income', desc: 'Work when you want, for as long as you want. You are in control of your earnings.', icon: <Wallet /> },
    { title: 'Local Routes', desc: 'Know your neighborhood. Our hyperlocal model keeps your deliveries within a tight radius.', icon: <MapPin /> },
    { title: 'Weekly Payouts', icon: <Calendar />, desc: 'No long waits. Get your earnings settled directly into your bank account every week.' },
    { title: 'Daily Incentives', icon: <Zap />, desc: 'Extra bonuses for peak hours, rainy days, and high-performance streaks.' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-6"
          >
            Become a Delivery Captain
          </motion.p>
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8"
          >
            Earn On Your <br />
            <span className="text-gradient">Own Schedule.</span>
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Join the most rider-friendly delivery network in Odisha. Transparent earnings, fast onboarding, and a community that respects your hard work.
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Link 
              href="/onboarding?role=captain" 
              className="bg-primary text-white text-lg font-bold px-12 py-6 rounded-2xl hover:scale-105 transition-all inline-flex items-center gap-3 shadow-xl shadow-primary/20"
            >
              Apply as Captain <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-32 bg-card relative">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {perks.map((perk, i) => (
                  <motion.div 
                    key={perk.title}
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[40px] bg-white/5 border border-white/5 hover:border-primary/20 transition-all flex flex-col items-center text-center group"
                  >
                     <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                        {perk.icon}
                     </div>
                     <h3 className="text-2xl font-bold mb-4">{perk.title}</h3>
                     <p className="text-muted-foreground text-sm leading-relaxed">{perk.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 relative overflow-hidden bg-background">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
               <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
                    Ride with <br />
                    <span className="text-gradient">Peace of Mind.</span>
                  </h2>
                  <div className="space-y-8">
                     <div className="flex gap-6">
                        <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                           <ShieldCheck />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg mb-1">Accident Insurance</h4>
                           <p className="text-muted-foreground text-sm">Every captain is covered by our comprehensive accidental insurance policy from day one.</p>
                        </div>
                     </div>
                     <div className="flex gap-6">
                        <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                           <Calendar />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg mb-1">Weekly Settlement</h4>
                           <p className="text-muted-foreground text-sm">Automatic deposits every Monday morning. No paperwork, no delays.</p>
                        </div>
                     </div>
                     <div className="flex gap-6">
                        <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                           <Zap />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg mb-1">Performance Kit</h4>
                           <p className="text-muted-foreground text-sm">High-quality delivery bags, raincoats, and branded gear provided at joining.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="flex-1"
               >
                  <div className="relative p-1 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-[48px]">
                     <div className="bg-card rounded-[46px] p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
                        <h3 className="text-3xl font-black mb-12">Earnings Estimate</h3>
                        <div className="space-y-8 mb-12">
                           <div className="flex justify-between items-end border-b border-white/5 pb-4">
                              <span className="text-muted-foreground font-bold uppercase text-[10px]">Part Time (4h)</span>
                              <span className="text-2xl font-black text-white">₹12,000+</span>
                           </div>
                           <div className="flex justify-between items-end border-b border-white/5 pb-4">
                              <span className="text-muted-foreground font-bold uppercase text-[10px]">Full Time (8h)</span>
                              <span className="text-2xl font-black text-white">₹25,000+</span>
                           </div>
                           <div className="flex justify-between items-end border-b border-white/5 pb-4">
                              <span className="text-muted-foreground font-bold uppercase text-[10px]">Top Earners</span>
                              <span className="text-2xl font-black text-primary">₹35,000+</span>
                           </div>
                        </div>
                        <p className="text-[10px] text-muted-foreground italic">*Estimates based on current order volume in Bhubaneswar central zones.</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase leading-[0.8]">
              Ready to <br /> <span className="text-primary tracking-[0.2em]">Start?</span>
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">Download the Captain App and upload your documents. Start earning in 24 hours.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link 
                  href="/onboarding?role=captain" 
                  className="bg-white text-black text-xl font-black px-12 py-5 rounded-2xl hover:scale-105 transition-all inline-flex items-center gap-3 shadow-2xl"
               >
                  Join the Team <ArrowRight size={20} />
               </Link>
               <a 
                  href="#" 
                  className="bg-card border border-white/10 text-white text-xl font-black px-12 py-5 rounded-2xl hover:bg-white/10 transition-all inline-flex items-center gap-3"
               >
                  Download App
               </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
