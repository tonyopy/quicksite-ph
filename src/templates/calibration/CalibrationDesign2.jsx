import React from 'react';
import { Cpu, Zap, Radio, Database, Search, ArrowRight, Shield, BarChart } from 'lucide-react';

function CalibrationDesign2() {
  return (
    <div className="min-h-screen bg-black font-mono text-cyan-400 selection:bg-cyan-500 selection:text-black">
      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      {/* Nav */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-cyan-900/50">
         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-xl font-bold tracking-widest text-white">
               <Zap className="w-6 h-6 text-cyan-500 animate-pulse" />
               QUANTUM<span className="text-cyan-500">LABS</span>
            </div>
            <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-cyan-600">
               <a href="#" className="hover:text-cyan-400 transition-colors">Services</a>
               <a href="#" className="hover:text-cyan-400 transition-colors">Standards</a>
               <a href="#" className="hover:text-cyan-400 transition-colors">Client_Login</a>
            </div>
            <button className="border border-cyan-500/50 text-cyan-400 px-6 py-2 hover:bg-cyan-500 hover:text-black transition duration-300 text-sm font-bold uppercase tracking-widest">
               Init_Calibration
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative z-10">
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <div className="flex items-center gap-2 text-xs text-cyan-700 mb-4 font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                  System Online // ISO 17025 Compliant
               </div>
               <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                  NEXT GEN <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">PRECISION</span>
               </h1>
               <p className="text-lg text-cyan-800/80 mb-8 max-w-lg leading-relaxed">
                  Advanced metrology solutions for aerospace, defense, and quantum computing sectors. We measure what others can't.
               </p>
               <div className="flex gap-4">
                  <button className="bg-cyan-500 text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                     Start Sequence
                  </button>
               </div>
            </div>
            
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
               <div className="relative border border-cyan-900/50 bg-black/50 backdrop-blur-sm p-2 rounded-lg">
                  <div className="w-full h-[400px] rounded border border-cyan-900/30 bg-cyan-900/10 flex items-center justify-center overflow-hidden">
                     <div className="text-center">
                        <Cpu className="w-24 h-24 text-cyan-500/50 mx-auto mb-4 animate-pulse" />
                        <span className="text-cyan-500/50 font-mono text-sm tracking-widest uppercase">High_Tech_Lab_Visual</span>
                     </div>
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                     <div className="bg-black/80 border border-cyan-500/30 px-3 py-1 text-xs text-cyan-400 font-bold uppercase">
                        Uncertainty: &lt; 0.001%
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Metrics Strip */}
      <section className="border-y border-cyan-900/30 bg-black/50 backdrop-blur">
         <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                  { label: "Instruments Calibrated", val: "50,000+" },
                  { label: "Accuracy Rate", val: "99.99%" },
                  { label: "Turnaround Time", val: "48 HRS" },
                  { label: "Accredited Scope", val: "FULL" },
               ].map((stat, i) => (
                  <div key={i} className="text-center border-r last:border-0 border-cyan-900/30">
                     <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.val}</div>
                     <div className="text-xs text-cyan-700 uppercase tracking-widest font-bold">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative z-10">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
               {[
                  { icon: Radio, title: "RF & Microwave", desc: "Spectrum analyzers, signal generators up to 50GHz." },
                  { icon: Cpu, title: "Electronics", desc: "Digital multimeters, calibrators, and power supplies." },
                  { icon: Shield, title: "Safety Testing", desc: "Hipots, ground bond testers, and insulation resistance." },
                  { icon: Database, title: "Asset Management", desc: "Cloud-based tracking of your equipment lifecycle." },
                  { icon: Search, title: "Fiber Optics", desc: "OTDRs, optical power meters, and light sources." },
                  { icon: BarChart, title: "Data Analysis", desc: "Detailed reporting with measurement uncertainty budgets." },
               ].map((item, i) => (
                  <div key={i} className="bg-black border border-cyan-900/30 p-8 hover:border-cyan-500/50 transition duration-300 group hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                     <item.icon className="w-10 h-10 text-cyan-700 mb-6 group-hover:text-cyan-400 transition duration-300" />
                     <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">{item.title}</h3>
                     <p className="text-cyan-900 group-hover:text-cyan-700 transition leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <footer className="border-t border-cyan-900/30 py-12 bg-black relative z-10">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-cyan-800 font-bold uppercase tracking-widest">
               © 2025 QuantumLabs. System Active.
            </div>
            <div className="flex gap-6 text-xs text-cyan-800 font-bold uppercase tracking-widest">
               <a href="#" className="hover:text-cyan-400 transition">Privacy_Protocol</a>
               <a href="#" className="hover:text-cyan-400 transition">Terms_of_Service</a>
               <a href="#" className="hover:text-cyan-400 transition">Encrypted_Contact</a>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default CalibrationDesign2;
