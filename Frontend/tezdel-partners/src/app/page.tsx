'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Users, ShoppingBag, ChefHat, Utensils, Bike, Star, TrendingUp } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
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
      title: 'Restaurant Partner',
      icon: <Utensils className="w-8 h-8 text-orange" />,
      desc: 'No more 30% commission cuts. Keep up to 100% of your revenue and access ONDC listings.',
      cta: 'Register Restaurant',
      href: '/restaurants',
      color: 'border-orange/20 hover:bg-orange/5',
      badge: '0% Commission'
    },
    {
      title: 'Home Chef Partner',
      icon: <ChefHat className="w-8 h-8 text-pink-500" />,
      desc: 'Turn your passion into a business. Work on your own schedule with zero upfront cost.',
      cta: 'Join as Home Chef',
      href: '/home-chefs',
      color: 'border-pink-500/20 hover:bg-pink-500/5',
      badge: 'Women-Led'
    },
    {
      title: 'Kirana Store Partner',
      icon: <ShoppingBag className="w-8 h-8 text-teal" />,
      desc: 'Bring your shop online. Compete with big retail chains with hyperlocal digital speed.',
      cta: 'Register Store',
      href: '/kirana',
      color: 'border-teal/20 hover:bg-teal/5',
      badge: 'Digital India'
    },
    {
      title: 'Delivery Captain',
      icon: <Bike className="w-8 h-8 text-purple" />,
      desc: 'Earn on your terms. Weekly payouts, flexible hours, and competitive per-delivery rates.',
      cta: 'Become a Captain',
      href: '/captains',
      color: 'border-purple/20 hover:bg-purple/5',
      badge: 'Daily Bonuses'
    }
  ];

  return (
    <div className="overflow-hidden bg-dark">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(255,107,53,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 z-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-6 py-10">
          <div className="max-w-5xl flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/15 border border-orange/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange animate-ping" />
              <span className="text-orange text-[10px] font-black uppercase tracking-widest">Now Live in Bhubaneswar</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-4xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-6"
            >
              Grow Your Business <br />
              <span className="text-gradient">Without Giving Up</span> <br />
              A Single Rupee.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
            >
              TezDel is Odisha's first <strong>zero-commission</strong> hyperlocal delivery platform. 
              Join as a Restaurant, Home Chef, Kirana Store, or Delivery Captain — and keep every rupee you earn.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/onboarding" 
                className="bg-primary text-white text-base font-black px-10 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-[0_8px_30px_rgba(255,107,53,0.35)]"
              >
                Become a Partner <ArrowRight size={18} />
              </Link>
              <Link 
                href="#programs" 
                className="bg-white/5 border border-white/15 text-white text-base font-bold px-10 py-5 rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-xl"
              >
                Explore Programs
              </Link>
            </motion.div>

            <div className="mt-12 flex flex-wrap gap-6">
               <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="w-4 h-4 rounded-full bg-teal/20 flex items-center justify-center text-teal text-[10px]">✓</div>
                  Zero Commission, Always
               </div>
               <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="w-4 h-4 rounded-full bg-teal/20 flex items-center justify-center text-teal text-[10px]">✓</div>
                  ONDC-Ready Platform
               </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 relative hidden lg:flex justify-end"
          >
            {/* Floating Hero Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-dark2/80 border border-white/10 p-8 rounded-[32px] w-80 backdrop-blur-3xl shadow-2xl relative z-10"
            >
               <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">Your Commission Rate</div>
               <div className="text-8xl font-black text-gradient leading-none mb-4 tracking-tighter">0%</div>
               <div className="text-sm font-bold text-muted-foreground mb-10">Forever. No catches.</div>
               
               <div className="space-y-6 border-t border-white/5 pt-8 mb-8">
                  <div className="flex justify-between items-center">
                     <span className="text-xs text-muted-foreground font-bold">Payout Speed</span>
                     <span className="text-sm font-black">7 Days</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-xs text-muted-foreground font-bold">Partners Live</span>
                     <span className="text-sm font-black">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-xs text-muted-foreground font-bold">ONDC Status</span>
                     <span className="text-sm font-black text-teal">✓ Ready</span>
                  </div>
               </div>

               <div className="bg-orange/10 p-6 rounded-2xl border border-orange/20 space-y-3">
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] uppercase font-bold text-muted-foreground">Zomato / Swiggy</span>
                     <span className="text-xs font-black text-red-500">-25 to 30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] uppercase font-bold text-muted-foreground">TezDel</span>
                     <span className="text-xs font-black text-teal">0% ✓</span>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark2 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
            {[
              { val: '0%', label: 'Commission' },
              { val: '4', label: 'Programs' },
              { val: '500+', label: 'Active Partners' },
              { val: 'ONDC', label: 'Network Ready' },
              { val: '48hr', label: 'Onboarding' }
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-4xl font-black text-gradient mb-1 tracking-tighter">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section id="programs" className="py-32 relative bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-orange font-black uppercase tracking-[0.3em] text-xs mb-6">Who Can Join</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
               Four Ways to <span className="text-gradient">Partner With Us.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className={`group relative bg-white/[0.03] p-10 rounded-[40px] border ${cat.color} overflow-hidden flex flex-col justify-between transition-all duration-500`}
              >
                <div>
                  <div className="mb-8">{cat.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">{cat.badge}</span>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    {cat.desc}
                  </p>
                </div>

                <Link 
                  href={cat.href}
                  className="flex items-center gap-2 text-sm font-black text-foreground group-hover:text-primary transition-colors"
                >
                  {cat.cta} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison & Why Section */}
      <section id="why" className="py-32 bg-dark2 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <p className="text-orange font-black uppercase tracking-[0.3em] text-xs mb-6">Our Philosophy</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 leading-[0.9]">
                Built to <span className="text-gradient">Empower</span><br /> Local Business.
              </h2>
              
              <div className="space-y-12">
                 {[
                   { t: 'Zero Commission, Forever', d: "We don't charge commissions. Not now, not when you scale. Our revenue model is built on optional premium tools.", icon: '💸' },
                   { t: 'Community First, Always', d: "Every rupee spent on TezDel flows to local kitchens, stores, and captains — not a distant corporate entity.", icon: '🏘️' },
                   { t: 'ONDC-Ready Infrastructure', d: "TezDel is ready to connect your store to the national buyer network, giving you access to millions of customers.", icon: '🌐' }
                 ].map((feat, i) => (
                   <motion.div key={feat.t} {...fadeInUp} transition={{ delay: i * 0.1 }} className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-2xl group-hover:bg-orange/10 group-hover:border-orange/20 transition-all">
                        {feat.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">{feat.t}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feat.d}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>
            </div>

            <motion.div 
              {...fadeInUp}
              className="bg-dark/80 p-10 rounded-[48px] border border-white/10 relative overflow-hidden shadow-2xl backdrop-blur-xl"
            >
               <div className="text-[10px] font-black uppercase tracking-[0.2em] text-orange mb-8">Commission Comparison</div>
               <div className="space-y-4">
                  <div className="grid grid-cols-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground pb-4 border-b border-white/5">
                     <span>Category</span>
                     <span className="text-orange text-center">TezDel</span>
                     <span className="text-right">Others</span>
                  </div>
                  {[
                    { c: 'Commission', t: '✓ 0%', o: '25-30%', g: true },
                    { c: 'Onboarding', t: '✓ Free', o: '₹5000+', g: true },
                    { c: 'Menu Control', t: '✓ Full', o: 'Limited', g: true },
                    { c: 'Payout Speed', t: '✓ 7 Days', o: '30 Days', g: true },
                    { c: 'Home Chefs', t: '✓ Yes', o: 'No', g: true },
                    { c: 'ONDC Support', t: '✓ Built-in', o: 'Partial', g: true }
                  ].map(row => (
                    <div key={row.c} className="grid grid-cols-3 items-center py-4 border-b border-white/[0.03] text-sm">
                       <span className="text-muted-foreground font-medium">{row.c}</span>
                       <span className="text-teal font-black text-center">{row.t}</span>
                       <span className="text-red-500 font-bold text-right opacity-60">{row.o}</span>
                    </div>
                  ))}
               </div>
               <div className="mt-10 h-1 bg-gradient-to-r from-orange to-amber rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ONDC Section */}
      <section id="ondc" className="py-32 bg-dark">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
               <motion.div {...fadeInUp} className="order-2 lg:order-1">
                  <div className="bg-purple/5 border border-purple/20 p-12 rounded-[60px] text-center max-w-lg relative">
                     <div className="text-6xl font-black tracking-tighter text-gradient leading-none mb-4">ONDC</div>
                     <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-10">Open Network for Digital Commerce</p>
                     
                     <div className="space-y-4">
                        {['Paytm, ONDC-network', 'TezDel Consumer App', 'Your Digital Storefront', 'TezDel Fleet Delivery'].map((item, i) => (
                           <div key={item} className="p-4 bg-white/[0.03] rounded-2xl border border-white/5 flex items-center gap-4 text-xs font-bold text-muted-foreground">
                              <div className={`w-3 h-3 rounded-full ${['bg-purple', 'bg-blue-500', 'bg-teal', 'bg-orange'][i]}`} />
                              {item}
                           </div>
                        ))}
                     </div>
                     <div className="mt-12 text-[10px] font-black uppercase tracking-[0.2em] text-purple/60">✓ TezDel Certified Partner</div>
                  </div>
                  <div className="mt-8 text-center text-xs font-bold text-muted-foreground flex items-center justify-center gap-2">
                    🏛️ Supported by DPIIT, Government of India
                  </div>
               </motion.div>

               <div className="order-1 lg:order-2">
                  <p className="text-purple font-black uppercase tracking-[0.3em] text-xs mb-6">Future-Ready</p>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                    ONDC-Ready:<br />
                    <span className="text-gradient">Your Store,</span><br />
                    The Whole Country.
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-12">
                    ONDC is India's government-backed protocol to democratise digital commerce. Being on ONDC means your business is visible to millions of buyers across all apps.
                  </p>
                  
                  <ul className="space-y-8">
                     {[
                       { n: '1', t: 'National Reach', d: 'Your store listed across the entire ONDC buyer network, beyond just TezDel.' },
                       { n: '2', t: 'Government Backed', d: 'An initiative by DPIIT built for long-term stability and small business growth.' },
                       { n: '3', t: 'No Lock-in', d: 'Your products and catalogue belong to you — portable across the entire ecosystem.' }
                     ].map(item => (
                        <li key={item.n} className="flex gap-6">
                           <div className="w-10 h-10 rounded-xl bg-purple/20 flex items-center justify-center text-purple font-black flex-shrink-0">{item.n}</div>
                           <div>
                              <h5 className="font-bold mb-1">{item.t}</h5>
                              <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                           </div>
                        </li>
                     ))}
                  </ul>
                  <button className="mt-12 bg-purple text-white font-black px-12 py-5 rounded-2xl shadow-xl shadow-purple/20 hover:scale-105 transition-all">Get ONDC-Ready ↗</button>
               </div>
            </div>
         </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section id="testimonials" className="py-32 bg-dark2">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-orange font-black uppercase tracking-[0.3em] text-xs mb-6">Partner Stories</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Odisha's Businesses <span className="text-gradient">Love TezDel.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rajendra Kumar', role: 'Odisha Kitchen, Saheed Nagar', quote: "Zomato was taking ₹28 out of every ₹100 I made. TezDel takes nothing. I've recovered my margins entirely." },
              { name: 'Pratima Sahoo', role: 'Home Chef, Bhubaneswar', quote: "As a home chef, TezDel gave me a proper storefront and helped with my FSSAI. I now earn ₹35k+ monthly." },
              { name: 'Suresh Mahapatra', role: 'General Stores, Unit 4', quote: "My kirana was losing to apps. TezDel got me online in 2 days. Now I do 40+ deliveries daily in my neighbourhood." }
            ].map((story, i) => (
              <motion.div
                key={story.name}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="p-12 rounded-[48px] bg-white/[0.03] border border-white/5 relative group hover:border-orange/30 transition-all"
              >
                <div className="text-4xl text-orange/30 font-serif mb-6">"</div>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  {story.quote}
                </p>
                <div>
                  <div className="font-black text-foreground">{story.name}</div>
                  <div className="text-xs text-orange uppercase tracking-widest mt-1 font-bold">{story.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative bg-dark">
        <div className="container mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="bg-gradient-to-br from-orange to-amber p-12 md:p-32 rounded-[80px] relative overflow-hidden text-center shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 relative z-10 leading-[0.8]">
              Ready to <br /> Scale Up?
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12 relative z-10 font-bold">
              Join the zero-commission revolution. Start your application today and go live in as little as 48 hours.
            </p>
            <Link 
              href="/onboarding" 
              className="bg-white text-orange text-xl font-black px-16 py-8 rounded-3xl hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3 shadow-2xl relative z-10 uppercase tracking-widest"
            >
              Get Started Now <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
