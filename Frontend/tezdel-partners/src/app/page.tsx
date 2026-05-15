'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, Zap, Globe, Users, ShoppingBag, ChefHat, Utensils, Bike } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const categories = [
    {
      title: 'Restaurant Partners',
      icon: <Utensils className="w-8 h-8" />,
      desc: 'Increase orders. Reduce commissions. Keep more of your profits.',
      cta: 'Join as Restaurant',
      href: '/restaurants',
      color: 'from-orange-500 to-red-600',
      badge: 'Most Popular'
    },
    {
      title: 'Kirana Partners',
      icon: <ShoppingBag className="w-8 h-8" />,
      desc: 'Bring your local store online. Serve your neighborhood 24/7.',
      cta: 'Join as Kirana',
      href: '/kirana',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Home Chefs',
      icon: <ChefHat className="w-8 h-8" />,
      desc: 'Earn from your kitchen. Share your authentic recipes with the city.',
      cta: 'Join as Chef',
      href: '/home-chefs',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Delivery Captains',
      icon: <Bike className="w-8 h-8" />,
      desc: 'Flexible earnings. Local routes. Be your own boss.',
      cta: 'Join as Captain',
      href: '/captains',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const benefits = [
    { title: 'Local Reach', icon: <Globe />, desc: 'Reach nearby customers faster with our hyperlocal optimization.' },
    { title: 'Transparent Earnings', icon: <TrendingUp />, desc: 'No hidden deductions. See exactly what you earn in real-time.' },
    { title: 'Fast Settlements', icon: <Zap />, desc: 'Reliable payouts and automated financial tracking.' },
    { title: 'Tech Support', icon: <ShieldCheck />, desc: 'Simple dashboard and 24/7 technical assistance.' },
    { title: 'Built for Bhubaneswar', icon: <Users />, desc: 'Designed specifically for the unique needs of Tier-2 cities.' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
        
        {/* Animated Background Glows */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full animate-pulse" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Now accepting new partners in Bhubaneswar</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8"
            >
              Grow With <br />
              <span className="text-gradient">Bhubaneswar's Next</span> <br />
              Hyperlocal Network.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
            >
              Join TezDel as a restaurant, home chef, kirana partner, or delivery captain and become part of Odisha’s next-generation local commerce platform. Build for your neighborhood, earn more.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/onboarding" 
                className="bg-primary text-white text-lg font-bold px-10 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
              >
                Become a Partner <ArrowRight size={20} />
              </Link>
              <Link 
                href="#opportunities" 
                className="bg-white/5 border border-white/10 text-white text-lg font-bold px-10 py-5 rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Explore Opportunities
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section id="opportunities" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative bg-card p-8 rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity blur-3xl`} />
                
                <div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mb-8 shadow-lg`}>
                    {cat.icon}
                  </div>
                  {cat.badge && (
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">{cat.badge}</span>
                  )}
                  <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    {cat.desc}
                  </p>
                </div>

                <Link 
                  href={cat.href}
                  className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors"
                >
                  {cat.cta} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent" />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-6"
              >
                Benefits
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black tracking-tighter mb-8"
              >
                Why Partner With <br />
                <span className="text-gradient">TezDel?</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-muted-foreground leading-relaxed mb-12 max-w-md"
              >
                We're building more than just a delivery app. We're building an ecosystem that prioritizes local growth, transparency, and sustainable earnings.
              </motion.p>

              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, i) => (
                  <motion.div 
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              <div className="relative h-full w-full bg-[#1e1e24] rounded-3xl border border-white/10 p-8 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                    Live Partner Dashboard
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="h-8 w-1/2 bg-white/5 rounded-lg" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-primary/10 border border-primary/20 rounded-2xl flex flex-col p-6 justify-between">
                      <span className="text-[10px] font-bold text-primary uppercase">Orders Today</span>
                      <span className="text-3xl font-black">124</span>
                    </div>
                    <div className="h-32 bg-white/5 border border-white/10 rounded-2xl flex flex-col p-6 justify-between">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">Revenue</span>
                      <span className="text-3xl font-black">₹42,350</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-12 bg-white/5 rounded-xl flex items-center px-4 justify-between">
                      <div className="w-8 h-8 rounded bg-white/10" />
                      <div className="h-2 w-1/3 bg-white/10 rounded" />
                      <div className="h-4 w-12 bg-primary/20 rounded" />
                    </div>
                    <div className="h-12 bg-white/5 rounded-xl flex items-center px-4 justify-between">
                      <div className="w-8 h-8 rounded bg-white/10" />
                      <div className="h-2 w-1/3 bg-white/10 rounded" />
                      <div className="h-4 w-12 bg-primary/20 rounded" />
                    </div>
                  </div>
                </div>

                {/* Floating Glow */}
                <motion.div 
                  animate={{ 
                    x: [0, 100, 0],
                    y: [0, 50, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary/20 blur-[60px] rounded-full -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary p-12 md:p-24 rounded-[40px] relative overflow-hidden text-center"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 relative z-10 leading-[0.9]">
              Ready to Scale <br /> Your Business?
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10">
              Join the thousands of local partners growing with TezDel. Start your application today and go live in as little as 48 hours.
            </p>
            <Link 
              href="/onboarding" 
              className="bg-white text-primary text-xl font-black px-12 py-6 rounded-2xl hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3 shadow-2xl relative z-10"
            >
              Get Started Now <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
