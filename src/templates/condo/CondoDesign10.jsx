import React, { useState } from 'react';
import { Calendar, Cpu, Wifi, Zap, Smartphone, Globe, Lock, Shield, ArrowRight, Grid } from 'lucide-react';

function CondoDesign10() {
  const [bookingDate, setBookingDate] = useState('');

  return (
    <div className="min-h-screen bg-slate-950 font-mono text-cyan-500 selection:bg-cyan-500 selection:text-black">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-900/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-widest text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-500" />
            NEXUS<span className="text-cyan-500">.LIVING</span>
          </div>
          <div className="flex gap-1">
             <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
             <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-75"></div>
             <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
               <div className="inline-block border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400 mb-6 rounded-sm">
                  SYSTEM STATUS: ONLINE
               </div>
               <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                  THE FUTURE <br/>
                  OF <span className="text-cyan-500 text-shadow-glow">HOME</span>
               </h1>
               <p className="text-slate-400 text-lg mb-8 max-w-md">
                  Fully automated. Voice integrated. Pure minimalist design. Experience the cutting edge of residential technology.
               </p>
               <div className="flex gap-4">
                  <button className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold px-8 py-4 rounded-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                     INITIALIZE STAY
                  </button>
                  <button className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-sm hover:bg-cyan-950 transition">
                     VIEW SPECS
                  </button>
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
               <div className="relative border border-slate-800 bg-slate-900/50 p-2 backdrop-blur-sm rounded-lg shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558002038-1091a166111c?auto=format&fit=crop&w=1200&q=80" 
                    alt="Futuristic Interior" 
                    className="w-full h-[400px] object-cover rounded-md opacity-80"
                  />
                  {/* UI Overlay Elements */}
                  <div className="absolute top-6 right-6 flex flex-col gap-2">
                     <div className="bg-black/70 text-cyan-500 text-xs px-2 py-1 border border-cyan-500/30 rounded flex items-center gap-2">
                        <Wifi className="w-3 h-3" /> 10 Gbps
                     </div>
                     <div className="bg-black/70 text-cyan-500 text-xs px-2 py-1 border border-cyan-500/30 rounded flex items-center gap-2">
                        <Zap className="w-3 h-3" /> 22°C
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Specs Grid */}
      <section className="py-20 border-y border-cyan-900/30 bg-slate-900/30">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                  { icon: Smartphone, label: "App Control", sub: "Lighting & Temp" },
                  { icon: Lock, label: "Bio-Lock", sub: "Fingerprint Entry" },
                  { icon: Shield, label: "Privacy Glass", sub: "Electrochromic" },
                  { icon: Globe, label: "Global Link", sub: "Satellite TV" },
               ].map((item, i) => (
                  <div key={i} className="bg-slate-950 border border-slate-800 p-6 hover:border-cyan-500/50 transition duration-300 group">
                     <item.icon className="w-8 h-8 text-slate-600 group-hover:text-cyan-400 mb-4 transition-colors" />
                     <h3 className="text-white font-bold text-lg mb-1">{item.label}</h3>
                     <p className="text-slate-500 text-xs">{item.sub}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Interface Booking */}
      <section className="py-24 px-6">
         <div className="container mx-auto max-w-3xl">
            <div className="border border-cyan-500/30 bg-slate-950/80 p-1 relative overflow-hidden rounded-lg">
               {/* Scanline */}
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-4 w-full animate-scan"></div>
               
               <div className="p-8 border border-slate-800 rounded">
                  <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
                     <h2 className="text-2xl text-white font-bold">RESERVATION_PROTOCOL</h2>
                     <div className="text-cyan-500 text-xs animate-pulse">PROCESSING...</div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                     <div>
                        <label className="text-xs text-cyan-600 mb-2 block">SELECT_DATE</label>
                        <input 
                           type="date" 
                           className="w-full bg-slate-900 border border-slate-700 text-white p-3 focus:border-cyan-500 outline-none rounded-sm"
                           value={bookingDate}
                           onChange={(e) => setBookingDate(e.target.value)}
                        />
                     </div>
                     <div className="flex items-end">
                        <div className="w-full bg-slate-900 border border-slate-700 p-3 flex justify-between items-center">
                           <span className="text-slate-400 text-sm">TOTAL_COST</span>
                           <span className="text-white font-bold text-xl">4,200 <span className="text-cyan-600 text-xs">CR</span></span>
                        </div>
                     </div>
                  </div>
                  
                  <button className="w-full bg-cyan-900/20 border border-cyan-500/50 text-cyan-400 py-4 hover:bg-cyan-500 hover:text-black transition-all duration-300 font-bold tracking-widest">
                     EXECUTE
                  </button>
               </div>
            </div>
         </div>
      </section>

      <footer className="py-8 text-center border-t border-slate-800 bg-slate-950 text-slate-600 text-xs">
         <p>NEXUS.LIVING // SYSTEM VERSION 2.0.25</p>
      </footer>
    </div>
  );
}

export default CondoDesign10;
