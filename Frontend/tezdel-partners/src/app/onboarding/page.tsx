'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, User, MapPin, FileText, Camera } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function Onboarding() {
  const searchParams = useSearchParams();
  const initialRole = searchParams.get('role') || 'restaurant';
  const [role, setRole] = useState(initialRole);
  const [step, setStep] = useState(1);

  const roles = [
    { id: 'restaurant', title: 'Restaurant', icon: '🍔' },
    { id: 'kirana', title: 'Kirana Store', icon: '🛒' },
    { id: 'chef', title: 'Home Chef', icon: '👩‍🍳' },
    { id: 'captain', title: 'Captain', icon: '🛵' }
  ];

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="pt-20 min-h-screen bg-background flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl w-full">
        {/* Progress Bar */}
        <div className="mb-12 flex justify-between items-center max-w-md mx-auto relative">
           <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0" />
           <div 
             className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-10 transition-all duration-500" 
             style={{ width: `${((step - 1) / 2) * 100}%` }}
           />
           {[1, 2, 3].map(s => (
             <div 
               key={s} 
               className={`w-10 h-10 rounded-full flex items-center justify-center font-black relative z-20 transition-all duration-500 ${
                 s <= step ? 'bg-primary text-white scale-110' : 'bg-card text-muted-foreground border border-white/10'
               }`}
             >
                {s < step ? <CheckCircle2 size={20} /> : s}
             </div>
           ))}
        </div>

        <motion.div 
          layout
          className="bg-card border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-center">What's Your Role?</h2>
                <p className="text-muted-foreground text-center mb-12">Select the category that best describes your partnership.</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                   {roles.map((r) => (
                     <button
                       key={r.id}
                       onClick={() => setRole(r.id)}
                       className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 group ${
                         role === r.id 
                           ? 'border-primary bg-primary/5' 
                           : 'border-white/5 bg-white/5 hover:border-white/20'
                       }`}
                     >
                       <span className="text-4xl group-hover:scale-125 transition-transform">{r.icon}</span>
                       <span className={`text-sm font-bold ${role === r.id ? 'text-primary' : 'text-muted-foreground'}`}>{r.title}</span>
                     </button>
                   ))}
                </div>

                <div className="flex justify-center">
                   <button 
                     onClick={nextStep}
                     className="bg-primary text-white font-black px-12 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-xl"
                   >
                     Continue <ArrowRight size={20} />
                   </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-center">Basic Information</h2>
                <p className="text-muted-foreground text-center mb-12">Tell us more about yourself and your business.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <User size={12} className="text-primary" /> Full Name / Business Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Odisha Delights" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <MapPin size={12} className="text-primary" /> Service Area / Zone
                      </label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium">
                         <option value="patia">Patia</option>
                         <option value="saheed-nagar">Saheed Nagar</option>
                         <option value="jayadev-vihar">Jayadev Vihar</option>
                         <option value="old-town">Old Town</option>
                      </select>
                   </div>
                   <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <ArrowRight size={12} className="text-primary" /> WhatsApp Number
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+91" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium"
                      />
                   </div>
                </div>

                <div className="flex justify-between items-center">
                   <button onClick={prevStep} className="text-muted-foreground font-bold hover:text-white transition-colors">Back</button>
                   <button 
                     onClick={nextStep}
                     className="bg-primary text-white font-black px-12 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-xl"
                   >
                     Almost There <ChevronRight size={20} />
                   </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center text-primary mx-auto mb-8 animate-bounce">
                   <FileText size={40} />
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">Final Submission</h2>
                <p className="text-muted-foreground mb-12 max-w-md mx-auto">
                   Please upload your primary verification document (FSSAI / License / ID) to complete the process.
                </p>
                
                <div className="border-2 border-dashed border-white/10 rounded-3xl p-12 mb-12 hover:border-primary/50 transition-colors cursor-pointer group">
                   <Camera size={32} className="mx-auto mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                   <div className="font-bold text-sm">Click to Upload Document</div>
                   <div className="text-[10px] text-muted-foreground uppercase mt-1 tracking-widest">Max 5MB (PDF, JPG)</div>
                </div>

                <div className="flex flex-col gap-6">
                   <button 
                     className="bg-primary text-white font-black px-12 py-6 rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
                   >
                     Submit My Application <ArrowRight size={20} />
                   </button>
                   <button onClick={prevStep} className="text-muted-foreground font-bold hover:text-white transition-colors">Wait, let me double check</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
