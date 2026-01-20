import React, { useState } from 'react';
import { Box, Layers, Cpu, Code, Database, ChevronRight, Hexagon } from 'lucide-react';

function PrintingDesign5() {
  return (
    <div className="min-h-screen bg-[#050505] font-mono text-cyan-400 selection:bg-cyan-500 selection:text-black">
      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-cyan-900/30">
         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-xl font-bold tracking-widest text-white">
               <Hexagon className="w-6 h-6 text-cyan-500 animate-spin-slow" />
               POLY<span className="text-cyan-500">FORGE</span>
            </div>
            <button className="border border-cyan-500/50 text-cyan-400 px-6 py-2 hover:bg-cyan-500 hover:text-black transition duration-300 text-sm">
               UPLOAD_MODEL.STL
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative z-10">
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <div className="flex items-center gap-2 text-xs text-cyan-700 mb-4">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  SYSTEM READY
               </div>
               <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-none">
                  RAPID <br/> PROTOTYPING <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">EVOLVED</span>
               </h1>
               <p className="text-slate-400 text-lg mb-8 max-w-md">
                  Industrial grade SLA, SLS, and FDM printing. From digital file to physical object in 24 hours.
               </p>
               <div className="flex gap-4">
                  <button className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold px-8 py-4 transition shadow-[0_0_20px_rgba(8,145,178,0.4)]">
                     START PRINT
                  </button>
                  <button className="text-cyan-400 hover:text-white flex items-center gap-2 px-8 py-4 transition">
                     VIEW MATERIALS <ChevronRight className="w-4 h-4" />
                  </button>
               </div>
            </div>
            
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
               <div className="relative bg-[#0a0a0a] border border-cyan-900/50 p-2 rounded-lg">
                  <img 
                     src="https://images.unsplash.com/photo-1615858064998-294b08703773?auto=format&fit=crop&w=1000&q=80" 
                     alt="3D Printer" 
                     className="w-full h-[400px] object-cover rounded opacity-80"
                  />
                  {/* UI Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur border border-cyan-900/50 p-4 rounded">
                     <div className="flex justify-between text-xs text-cyan-500 mb-2">
                        <span>PRINT_PROGRESS</span>
                        <span>87%</span>
                     </div>
                     <div className="w-full bg-cyan-900/30 h-1 rounded-full overflow-hidden">
                        <div className="bg-cyan-500 h-full w-[87%] shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Tech Specs */}
      <section className="py-24 border-y border-cyan-900/20 bg-[#0a0a0a] relative z-10">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { icon: Layers, title: "Layer Resolution", val: "25 Microns" },
                  { icon: Box, title: "Build Volume", val: "500x500x500mm" },
                  { icon: Database, title: "Materials", val: "PLA, ABS, Resin, Nylon" },
               ].map((item, i) => (
                  <div key={i} className="bg-[#050505] border border-cyan-900/30 p-8 hover:border-cyan-500/50 transition duration-300">
                     <item.icon className="w-8 h-8 text-cyan-600 mb-4" />
                     <h3 className="text-slate-400 text-sm uppercase tracking-widest mb-1">{item.title}</h3>
                     <div className="text-2xl text-white font-bold">{item.val}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Upload Area */}
      <section className="py-24 px-6 relative z-10">
         <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl text-white font-bold mb-8">instant_quote.exe</h2>
            
            <div className="border-2 border-dashed border-cyan-900/50 bg-cyan-900/5 rounded-xl p-16 hover:border-cyan-500/50 hover:bg-cyan-900/10 transition cursor-pointer group">
               <div className="w-20 h-20 mx-auto bg-cyan-900/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-10 h-10 text-cyan-500" />
               </div>
               <p className="text-xl text-white mb-2">Drop your .STL or .OBJ files here</p>
               <p className="text-slate-500 text-sm">Secure encryption. Instant analysis.</p>
            </div>
         </div>
      </section>

      <footer className="py-8 border-t border-cyan-900/20 text-center text-cyan-900 text-xs relative z-10">
         <p>POLYFORGE SYSTEMS // V.2.0.25</p>
      </footer>
    </div>
  );
}

export default PrintingDesign5;
