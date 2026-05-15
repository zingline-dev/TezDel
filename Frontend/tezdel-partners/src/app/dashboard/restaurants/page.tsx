'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Package, 
  Settings, 
  LogOut, 
  TrendingUp, 
  Users, 
  Clock, 
  Star,
  Bell,
  Search
} from 'lucide-react';
import Link from 'next/link';

export default function RestaurantDashboard() {
  const stats = [
    { label: 'Total Orders', value: '1,284', change: '+12%', icon: <Package /> },
    { label: 'Monthly Revenue', value: '₹3.42L', change: '+8%', icon: <TrendingUp /> },
    { label: 'Active Customers', value: '842', change: '+24%', icon: <Users /> },
    { label: 'Avg. Rating', value: '4.8', change: '★', icon: <Star /> }
  ];

  const recentOrders = [
    { id: 'ORD-7721', items: 'Chicken Biryani x2', status: 'Preparing', time: '12 mins left', value: '₹540' },
    { id: 'ORD-7720', items: 'Paneer Butter Masala', status: 'Ready', time: 'Picked Up', value: '₹320' },
    { id: 'ORD-7719', items: 'Masala Dosa x3', status: 'Preparing', time: '5 mins left', value: '₹450' }
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-white flex">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 bg-card/50 backdrop-blur-xl hidden lg:flex flex-col p-8 fixed h-screen">
         <Link href="/" className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
               <span className="text-white font-black text-sm italic">T</span>
            </div>
            <span className="font-black tracking-tighter text-lg">TEZDEL HUB</span>
         </Link>

         <nav className="space-y-2 flex-1">
            {[
              { label: 'Dashboard', icon: <BarChart3 size={20} />, active: true },
              { label: 'Orders', icon: <Package size={20} /> },
              { label: 'Menu Management', icon: <Clock size={20} /> },
              { label: 'Customers', icon: <Users size={20} /> },
              { label: 'Settings', icon: <Settings size={20} /> }
            ].map((item) => (
              <button 
                key={item.label}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                  item.active ? 'bg-primary text-white' : 'text-muted-foreground hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span className="font-bold text-sm">{item.label}</span>
              </button>
            ))}
         </nav>

         <button className="flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all mt-auto">
            <LogOut size={20} />
            <span className="font-bold text-sm">Logout</span>
         </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-8">
         {/* Top Bar */}
         <header className="flex items-center justify-between mb-12">
            <div className="relative w-96 hidden md:block">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
               <input 
                 type="text" 
                 placeholder="Search orders, customers..." 
                 className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 outline-none focus:border-primary/50 transition-colors"
               />
            </div>

            <div className="flex items-center gap-6">
               <button className="relative w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
                  <Bell size={20} />
                  <span className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full" />
               </button>
               <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                     <div className="text-sm font-bold">Odisha Delights</div>
                     <div className="text-[10px] text-primary font-black uppercase tracking-widest">Patia Branch</div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-600 p-0.5">
                     <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center font-black">OD</div>
                  </div>
               </div>
            </div>
         </header>

         {/* Stats Grid */}
         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <motion.div 
                key={stat.label}
                whileHover={{ y: -5 }}
                className="bg-card p-6 rounded-3xl border border-white/5 flex flex-col justify-between"
              >
                 <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                       {stat.icon}
                    </div>
                    <span className={`text-[10px] font-black px-2 py-1 rounded bg-emerald-500/10 text-emerald-500`}>
                       {stat.change}
                    </span>
                 </div>
                 <div>
                    <div className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</div>
                    <div className="text-3xl font-black">{stat.value}</div>
                 </div>
              </motion.div>
            ))}
         </section>

         {/* Orders & Growth */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Live Orders */}
            <section className="lg:col-span-2 bg-card rounded-[40px] border border-white/5 overflow-hidden">
               <div className="p-8 border-b border-white/5 flex items-center justify-between">
                  <h3 className="text-xl font-bold italic uppercase tracking-tighter">Live Order Stream</h3>
                  <Link href="#" className="text-xs font-bold text-primary hover:underline">View All</Link>
               </div>
               <div className="p-4 space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="p-6 bg-white/[0.02] rounded-3xl border border-white/5 flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                       <div className="flex items-center gap-6">
                          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center font-black text-muted-foreground group-hover:text-primary transition-colors">
                             #{order.id.split('-')[1]}
                          </div>
                          <div>
                             <div className="font-bold mb-1">{order.items}</div>
                             <div className="text-xs text-muted-foreground font-medium flex items-center gap-2">
                                <Clock size={12} /> {order.time}
                             </div>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className="font-black text-lg mb-1">{order.value}</div>
                          <div className={`text-[10px] font-black uppercase px-2 py-1 rounded ${
                             order.status === 'Ready' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-primary/10 text-primary'
                          }`}>
                             {order.status}
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </section>

            {/* Growth Graph Mockup */}
            <section className="bg-card rounded-[40px] border border-white/5 p-8 relative overflow-hidden">
                <div className="flex items-center justify-between mb-12">
                   <h3 className="text-xl font-bold italic uppercase tracking-tighter">Growth</h3>
                   <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                   </div>
                </div>

                <div className="h-48 flex items-end gap-3 mb-8">
                   {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                     <motion.div 
                       key={i}
                       initial={{ height: 0 }}
                       animate={{ height: `${h}%` }}
                       transition={{ delay: i * 0.1, duration: 1 }}
                       className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-lg relative group"
                     >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                           {h}%
                        </div>
                     </motion.div>
                   ))}
                </div>

                <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                   <span>Mon</span>
                   <span>Wed</span>
                   <span>Fri</span>
                   <span>Sun</span>
                </div>

                <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-2xl">
                   <p className="text-xs font-bold text-primary mb-2 italic">Pro Tip:</p>
                   <p className="text-[10px] text-muted-foreground leading-relaxed">
                      Peak hours in Patia start at 7:00 PM. Update your "Special" menu items to boost conversions by 15%.
                   </p>
                </div>
            </section>
         </div>
      </main>
    </div>
  );
}
