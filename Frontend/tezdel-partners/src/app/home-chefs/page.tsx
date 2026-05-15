'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, Clock, UtensilsCrossed, Star, Users } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};

export default function HomeChefPartners() {
  const values = [
    { title: 'Earn From Home', desc: 'Transform your passion for cooking into a steady income without leaving your kitchen.', icon: <Heart /> },
    { title: 'Flexible Schedule', desc: 'You decide when to cook. Switch your kitchen "Open" status anytime you want.', icon: <Clock /> },
    { title: 'Odia Food Spotlight', icon: <UtensilsCrossed />, desc: 'Bring authentic, traditional recipes to a city that craves real home food.' },
    { title: 'Women Empowerment', icon: <Users />, desc: 'Financial independence for thousands of talented home-makers across Odisha.' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background z-0" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
             <div className="max-w-3xl flex-1">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-6"
                >
                  For Home Chefs
                </motion.p>
                <motion.h1 
                  {...fadeInUp}
                  className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8"
                >
                  Your Kitchen Can <br />
                  <span className="text-gradient">Become a Business.</span>
                </motion.h1>
                <motion.p 
                  {...fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-12"
                >
                  Join hundreds of home-makers in Bhubaneswar who are earning ₹20,000+ monthly by serving authentic home-cooked meals through TezDel.
                </motion.p>
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <Link 
                    href="/onboarding?role=chef" 
                    className="bg-primary text-white text-lg font-bold px-10 py-5 rounded-2xl hover:scale-105 transition-all inline-flex items-center gap-3 shadow-xl shadow-primary/20"
                  >
                    Start My Home Kitchen <ArrowRight size={20} />
                  </Link>
                </motion.div>
             </div>
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="flex-1 relative hidden lg:block"
             >
                <div className="relative aspect-square max-w-md mx-auto">
                   <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                   <img 
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" 
                      alt="Home Chef"
                      className="relative z-10 rounded-[60px] object-cover h-full w-full border-8 border-white/5 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
                   />
                   <div className="absolute -bottom-10 -left-10 z-20 bg-card p-6 rounded-3xl border border-white/10 shadow-2xl animate-bounce duration-3000">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">4.9★</div>
                         <div>
                            <div className="font-bold">Mrs. Dash</div>
                            <div className="text-xs text-muted-foreground">Certified Home Chef</div>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-card">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {values.map((v, i) => (
                  <motion.div 
                    key={v.title}
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-[40px] bg-white/5 border border-white/5 flex flex-col items-start"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-8">
                        {v.icon}
                     </div>
                     <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                     <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 relative overflow-hidden bg-background">
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Stories of Success</h2>
               <p className="text-muted-foreground">Real home-makers, real growth, real impact.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { name: 'Sasmita Patnaik', loc: 'Patia', quote: 'TezDel helped me reach 100+ customers daily. My dalma is now famous in Bhubaneswar!' },
                 { name: 'Anjali Mohanty', loc: 'Saheed Nagar', quote: 'The flexibility is amazing. I cook only for lunch and spend my evenings with family.' },
                 { name: 'Priya Nayak', loc: 'Jayadev Vihar', quote: 'Financial independence felt like a dream until I joined the TezDel home chef network.' }
               ].map((story, i) => (
                  <motion.div 
                    key={story.name}
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[32px] bg-white/5 border border-white/5 relative group"
                  >
                     <Star className="text-primary mb-6" fill="currentColor" />
                     <p className="text-lg italic text-white mb-8 leading-relaxed">"{story.quote}"</p>
                     <div>
                        <div className="font-bold text-lg">{story.name}</div>
                        <div className="text-xs text-primary uppercase tracking-widest">{story.loc}, Bhubaneswar</div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-primary-dark p-12 md:p-24 rounded-[60px] text-white">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">Ready to Share <br /> Your Magic?</h2>
            <p className="text-white/80 mb-12 text-lg">Your first order is waiting. Join the most trusted home chef community in Odisha today.</p>
            <Link 
              href="/onboarding?role=chef" 
              className="bg-white text-primary text-xl font-black px-12 py-5 rounded-2xl hover:scale-105 transition-all inline-flex items-center gap-3 shadow-2xl"
            >
              Start Cooking Now <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
