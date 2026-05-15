'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Zap, ShieldCheck, Globe, Star } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};

export default function AboutEcosystem() {
  const values = [
    { title: 'Community First', desc: 'We believe in growing with our partners, not at their expense.', icon: <Heart /> },
    { title: 'Zero Friction', desc: 'Simple tech, fast onboarding, and automated financials.', icon: <Zap /> },
    { title: 'Transparency', desc: 'No hidden costs, no complex terms. Just honest business.', icon: <ShieldCheck /> }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-6"
          >
            The Mission
          </motion.p>
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8"
          >
            Empowering <br />
            <span className="text-gradient">Local Commerce.</span>
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            TezDel was born in Bhubaneswar with a single vision: to build a delivery ecosystem where local businesses thrive through digital innovation without sacrificing their hard-earned profits.
          </motion.p>
        </div>
      </section>

      <section className="py-32 bg-card">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {values.map((v, i) => (
                  <motion.div 
                    key={v.title}
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center p-12 bg-white/5 rounded-[48px] border border-white/5 hover:border-primary/20 transition-all group"
                  >
                     <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-xl shadow-primary/5">
                        {v.icon}
                     </div>
                     <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">{v.title}</h3>
                     <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-32">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <motion.div {...fadeInUp} className="space-y-8">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">Why we built <br /> <span className="text-primary uppercase italic tracking-widest text-3xl">TezDel Partners</span></h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                     Modern delivery platforms often feel like tax collectors. They take large commissions, hide customer data, and treat partners as mere fulfillment centers.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed font-bold text-white">
                     TezDel changes that. We provide the infrastructure, you provide the magic.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 pt-8">
                     <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                        <div className="text-3xl font-black text-primary mb-2">200+</div>
                        <div className="text-[10px] text-muted-foreground uppercase font-black">Active Partners</div>
                     </div>
                     <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                        <div className="text-3xl font-black text-primary mb-2">15m</div>
                        <div className="text-[10px] text-muted-foreground uppercase font-black">Avg. Delivery</div>
                     </div>
                  </div>
               </motion.div>

               <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
                  <div className="relative bg-card p-12 rounded-[60px] border border-white/10 shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
                     <Globe className="text-primary/20 absolute inset-0 w-full h-full p-20 animate-spin-slow" />
                     <div className="relative z-10 text-center">
                        <div className="w-24 h-24 bg-primary rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-primary/20 rotate-12">
                           <Target className="text-white" size={48} />
                        </div>
                        <div className="text-2xl font-black uppercase tracking-widest italic">Odisha's Digital <br /> Backbone</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-32 bg-card relative overflow-hidden">
         <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
               <Star className="text-primary mx-auto mb-8" size={48} fill="currentColor" />
               <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight italic uppercase">Join the <span className="text-primary tracking-widest">Movement.</span></h2>
               <p className="text-muted-foreground mb-12">We are currently expanding across Bhubaneswar and Cuttack. Secure your spot in the ecosystem today.</p>
               <button className="bg-white text-black font-black px-12 py-6 rounded-2xl hover:scale-105 transition-all shadow-2xl">Partner With Us</button>
            </motion.div>
         </div>
      </section>
    </div>
  );
}
