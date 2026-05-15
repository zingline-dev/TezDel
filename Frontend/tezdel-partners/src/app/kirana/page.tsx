'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBasket, Truck, RefreshCcw, Smartphone, Store } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};

export default function KiranaPartners() {
  const features = [
    { title: 'Hyperlocal Orders', desc: 'Get orders from households within a 3-5km radius of your store.', icon: <Smartphone /> },
    { title: 'Inventory Sync', desc: 'Simple tools to keep your stock updated on the TezDel platform.', icon: <RefreshCcw /> },
    { title: 'Delivery Support', icon: <Truck />, desc: 'No need for your own delivery boys. Our captains handle the logistics.' },
    { title: 'Local Growth', icon: <Store />, desc: 'Compete with national big-box retailers by offering local trust + digital speed.' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-6"
            >
              For Kirana Stores
            </motion.p>
            <motion.h1 
              {...fadeInUp}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8"
            >
              Turn Your Kirana Into a <br />
              <span className="text-gradient">Digital Storefront.</span>
            </motion.h1>
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
            >
              Don't let big-tech players take over your neighborhood. TezDel gives small kirana stores the digital power to serve customers faster and better than anyone else.
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Link 
                href="/onboarding?role=kirana" 
                className="bg-primary text-white text-lg font-bold px-10 py-5 rounded-2xl hover:scale-105 transition-all inline-flex items-center gap-3 shadow-xl shadow-primary/20"
              >
                Onboard Your Store <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Powerful Features for Local Retail</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to digitize your local business and start selling online today.</p>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={feature.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[32px] bg-white/5 border border-white/5 hover:border-primary/20 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
                <div className="relative grid grid-cols-2 gap-4">
                   <div className="space-y-4 pt-12">
                      <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-xl">
                         <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500 mb-4">
                            <ShoppingBasket />
                         </div>
                         <div className="font-bold mb-2">Groceries</div>
                         <div className="text-[10px] text-muted-foreground">Daily essentials delivered in 15 mins.</div>
                      </div>
                      <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-xl">
                         <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4">
                            <Truck />
                         </div>
                         <div className="font-bold mb-2">Milk Delivery</div>
                         <div className="text-[10px] text-muted-foreground">Early morning subscription slots.</div>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-xl">
                         <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500 mb-4">
                            <RefreshCcw />
                         </div>
                         <div className="font-bold mb-2">FMCG Goods</div>
                         <div className="text-[10px] text-muted-foreground">Direct store to household stock.</div>
                      </div>
                      <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-xl">
                         <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                            <Store />
                         </div>
                         <div className="font-bold mb-2">Store Pickup</div>
                         <div className="text-[10px] text-muted-foreground">Click and collect functionality.</div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
                  One Platform. <br />
                  <span className="text-gradient">Every Store Category.</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Whether you sell organic pulses, daily milk, or household essentials, TezDel handles the cataloging and logistics so you can focus on inventory.
                </p>
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-3 font-bold text-white">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Free Inventory Management Tool
                   </div>
                   <div className="flex items-center gap-3 font-bold text-white">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Dedicated Partner Support
                   </div>
                   <div className="flex items-center gap-3 font-bold text-white">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      No Minimum Order Guarantee
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">Don't Wait for the Future. <br /> <span className="text-primary">Join It.</span></h2>
            <p className="text-muted-foreground mb-12 text-lg">Set up your digital kirana in less than 24 hours. Start serving your neighborhood the modern way.</p>
            <Link 
              href="/onboarding?role=kirana" 
              className="bg-white text-black text-xl font-black px-12 py-5 rounded-2xl hover:scale-105 transition-all inline-flex items-center gap-3 shadow-2xl"
            >
              Register Your Store <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
