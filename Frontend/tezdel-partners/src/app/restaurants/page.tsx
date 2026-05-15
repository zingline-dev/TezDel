'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, PieChart, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};

export default function RestaurantPartners() {
  const benefits = [
    { title: 'Flat Pricing Model', desc: 'No more 30% commission cuts. Pay a flat, transparent fee per order or a fixed monthly subscription.' },
    { title: 'Higher Profits', desc: 'Keep up to 95% of your order value. Reinvest your savings into quality and growth.' },
    { title: 'Faster Local Delivery', desc: 'Our hyperlocal captains are stationed in your neighborhood for sub-20 min deliveries.' },
    { title: 'Customer Data', desc: 'Own your customer relationships. Access detailed insights to build loyalty and retention.' }
  ];

  const steps = [
    { title: 'Apply', desc: 'Fill out the simple partner form.' },
    { title: 'Verification', desc: 'Quick check of FSSAI & GST.' },
    { title: 'Menu Upload', desc: 'Our team helps you sync your menu.' },
    { title: 'Go Live', desc: 'Start receiving orders in 48 hours.' }
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
              For Restaurants
            </motion.p>
            <motion.h1 
              {...fadeInUp}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8"
            >
              Stop Losing <span className="text-gradient">30%</span> <br />
              In Commissions.
            </motion.h1>
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
            >
              National platforms are killing restaurant margins. TezDel offers a flat-fee hyperlocal model that puts profits back into the hands of Bhubaneswar's kitchen owners.
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Link 
                href="/onboarding?role=restaurant" 
                className="bg-primary text-white text-lg font-bold px-10 py-5 rounded-2xl hover:scale-105 transition-all inline-flex items-center gap-3 shadow-xl shadow-primary/20"
              >
                Start Onboarding <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={benefit.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
                A Dashboard Built <br />
                <span className="text-gradient">For Your Kitchen</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-12">
                Manage orders, track real-time earnings, and update your menu with a simple, high-performance interface designed for the heat of the kitchen.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Live Order Tracking', icon: <Zap /> },
                  { title: 'Advanced Analytics', icon: <PieChart /> },
                  { title: 'Safe & Secure Payouts', icon: <Shield /> },
                  { title: 'Menu Management', icon: <TrendingUp /> }
                ].map((item, i) => (
                  <div key={item.title} className="flex items-center gap-4 text-white font-bold">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    {item.title}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative bg-[#1e1e24] rounded-3xl border border-white/10 shadow-2xl overflow-hidden aspect-[4/3] p-8"
              >
                <div className="flex items-center justify-between mb-8">
                   <div className="text-sm font-bold text-muted-foreground italic">TEZDEL KITCHEN HUB</div>
                   <div className="px-3 py-1 bg-emerald-500/20 text-emerald-500 rounded text-[10px] font-black uppercase">Online</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Active</div>
                    <div className="text-2xl font-black">12</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Preparing</div>
                    <div className="text-2xl font-black">8</div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20">
                    <div className="text-[10px] text-primary uppercase font-bold mb-1">Completed</div>
                    <div className="text-2xl font-black">45</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold">#{i}0{i}</div>
                        <div>
                          <div className="font-bold text-sm">2x Paneer Tikka + Butter Naan</div>
                          <div className="text-[10px] text-muted-foreground uppercase">12 mins remaining</div>
                        </div>
                      </div>
                      <button className="bg-primary px-4 py-2 rounded-lg text-xs font-bold text-white shadow-lg">READY</button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-32 bg-background border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-20">How to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={step.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-black text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 select-none">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/10" />
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20">
            <Link 
              href="/onboarding?role=restaurant" 
              className="bg-white text-black text-lg font-bold px-12 py-5 rounded-2xl hover:scale-105 transition-all inline-flex items-center gap-3 shadow-2xl"
            >
              Start My Application Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
