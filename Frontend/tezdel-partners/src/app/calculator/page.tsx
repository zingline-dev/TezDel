'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Percent } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};

export default function EarningsCalculator() {
  const [monthlyOrders, setMonthlyOrders] = useState(500);
  const [avgOrderValue, setAvgOrderValue] = useState(300);
  const [commissionRate, setCommissionRate] = useState(25);

  const monthlyRevenue = monthlyOrders * avgOrderValue;
  const standardCommission = monthlyRevenue * (commissionRate / 100);
  const tezdelFlatFee = monthlyOrders * 15; // Assume ₹15 flat fee per order for calculation
  const monthlySavings = standardCommission - tezdelFlatFee;
  const yearlySavings = monthlySavings * 12;

  return (
    <div className="pt-20 min-h-screen bg-background">
      <section className="py-24 relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            Calculate Your <br />
            <span className="text-gradient">Growth Potential.</span>
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
          >
            See exactly how much more you can earn by switching to TezDel's flat-fee hyperlocal model.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Inputs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card p-10 rounded-[40px] border border-white/5 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <Calculator />
               </div>
               <h2 className="text-3xl font-black italic uppercase">Parameters</h2>
            </div>

            <div className="space-y-10">
               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                     <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                        <TrendingUp size={14} className="text-primary" /> Monthly Orders
                     </label>
                     <span className="text-xl font-black text-white">{monthlyOrders}</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="5000" 
                    step="50"
                    value={monthlyOrders}
                    onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                    className="w-full accent-primary h-2 bg-white/5 rounded-lg appearance-none cursor-pointer"
                  />
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                     <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                        <DollarSign size={14} className="text-primary" /> Avg. Order Value (₹)
                     </label>
                     <span className="text-xl font-black text-white">₹{avgOrderValue}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="2000" 
                    step="50"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="w-full accent-primary h-2 bg-white/5 rounded-lg appearance-none cursor-pointer"
                  />
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                     <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                        <Percent size={14} className="text-primary" /> Current Commission (%)
                     </label>
                     <span className="text-xl font-black text-white">{commissionRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="35" 
                    step="1"
                    value={commissionRate}
                    onChange={(e) => setCommissionRate(Number(e.target.value))}
                    className="w-full accent-primary h-2 bg-white/5 rounded-lg appearance-none cursor-pointer"
                  />
               </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5 text-xs text-muted-foreground italic">
               *Calculation compares a standard 25% commission model against TezDel's ₹15 flat fee per order model. Actual fees may vary based on zone and partnership tier.
            </div>
          </motion.div>

          {/* Results */}
          <div className="space-y-6">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="bg-primary p-12 rounded-[40px] text-white shadow-2xl shadow-primary/20 relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-80">Estimated Monthly Savings</p>
                <h3 className="text-6xl md:text-7xl font-black tracking-tighter mb-4 italic">₹{monthlySavings.toLocaleString()}</h3>
                <p className="text-sm font-bold opacity-90">That's your additional profit per month.</p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="bg-card p-10 rounded-[40px] border border-white/5"
             >
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Yearly Impact</p>
                <h4 className="text-4xl font-black text-emerald-500 mb-6">₹{yearlySavings.toLocaleString()} / year</h4>
                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-1">
                      <p className="text-[10px] text-muted-foreground uppercase font-bold">Standard Platform</p>
                      <p className="text-lg font-bold">₹{standardCommission.toLocaleString()} <span className="text-[10px] text-red-500 font-black">LOST</span></p>
                   </div>
                   <div className="space-y-1 text-right">
                      <p className="text-[10px] text-muted-foreground uppercase font-bold">TezDel Platform</p>
                      <p className="text-lg font-bold">₹{tezdelFlatFee.toLocaleString()} <span className="text-[10px] text-emerald-500 font-black">COST</span></p>
                   </div>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 flex items-center justify-between group"
             >
                <div>
                   <h5 className="font-bold text-lg mb-1">Ready to keep your profits?</h5>
                   <p className="text-sm text-muted-foreground">Start your application in 2 mins.</p>
                </div>
                <Link 
                  href="/onboarding" 
                  className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-primary/20"
                >
                   <ArrowRight />
                </Link>
             </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
