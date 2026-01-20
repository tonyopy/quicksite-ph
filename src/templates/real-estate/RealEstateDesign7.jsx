import React, { useState } from 'react';
import { PenTool, Layers, Box, Move, ArrowRight, MousePointer2 } from 'lucide-react';

function RealEstateDesign7() {
  return (
    <div className="min-h-screen bg-slate-100 font-mono text-slate-800">
      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-slate-100/90 backdrop-blur border-b border-slate-300">
        <div className="container mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white font-bold">A</div>
            <span className="text-lg font-bold tracking-tight">ARCHITECT<span className="text-blue-600">DEV</span></span>
          </div>
          <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600">Projects</a>
            <a href="#" className="hover:text-blue-600">Sustainability</a>
            <a href="#" className="hover:text-blue-600">Investors</a>
            <a href="#" className="hover:text-blue-600">News</a>
          </div>
          <button className="border border-slate-800 px-4 py-2 text-xs font-bold uppercase hover:bg-slate-800 hover:text-white transition-colors">
            Contact
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-screen flex items-center pt-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">Shaping the Future Skyline</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-none tracking-tighter">
              BUILDING <br/> TOMORROW.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
              We are a visionary real estate development firm committed to creating sustainable, mixed-use communities that redefine urban living.
            </p>
            <div className="flex items-center space-x-6">
               <button className="bg-blue-600 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-blue-700 transition-colors flex items-center">
                 View Portfolio <ArrowRight className="ml-2 w-4 h-4" />
               </button>
               <div className="flex items-center space-x-2 text-xs font-bold text-slate-500">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <span>3 Projects Under Construction</span>
               </div>
            </div>
          </div>
          <div className="relative h-[600px] border border-slate-300 bg-white p-2">
             <img 
               src="https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
               alt="Blueprint / Building" 
               className="w-full h-full object-cover grayscale contrast-125"
             />
             <div className="absolute bottom-6 right-6 bg-blue-600 text-white p-4 max-w-xs">
               <div className="text-xs font-bold uppercase mb-1">Current Project</div>
               <div className="text-xl font-bold">The Meridian Tower</div>
               <div className="text-xs opacity-75 mt-1">Completion: Q4 2025</div>
             </div>
             
             {/* Decorative UI elements */}
             <div className="absolute top-4 left-4 flex space-x-1">
               <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
               <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
               <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
             </div>
             <div className="absolute top-1/2 -right-3 w-6 h-6 bg-white border border-slate-300 rotate-45"></div>
             <div className="absolute -bottom-3 left-1/2 w-6 h-6 bg-white border border-slate-300 rotate-45"></div>
          </div>
        </div>
      </header>

      {/* Stats Strip */}
      <div className="border-y border-slate-300 bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">$2.5B</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Assets Under Management</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">4.2M</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Sq Ft Developed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">15</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">LEED</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Platinum Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-tight">Selected Works</h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 border border-slate-300 flex items-center justify-center hover:bg-slate-200"><ArrowRight className="w-4 h-4 rotate-180" /></button>
              <button className="w-10 h-10 border border-slate-300 flex items-center justify-center hover:bg-slate-200"><ArrowRight className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative border border-slate-300 p-2 bg-white mb-4">
                  <div className="relative overflow-hidden h-80">
                    <img 
                      src={`https://images.unsplash.com/photo-${item === 1 ? '1479839672679-a47ca9494546' : item === 2 ? '1464938050520-ef2270bb8ce8' : '1431576901776-e539bd916ba2'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                      alt="Project" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors"></div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">Project Alpha {item}</h3>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">Mixed Use / Residential</div>
                  </div>
                  <div className="text-xl font-bold text-slate-300 group-hover:text-slate-900">0{item}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">Our Philosophy</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We don't just build structures; we curate environments. Our data-driven approach combines architectural innovation with financial rigor to deliver projects that stand the test of time.
              </p>
              <button className="border border-white/20 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-slate-900 transition-colors">
                Read Our Manifesto
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
               <div className="border border-white/10 p-6 hover:bg-white/5 transition-colors">
                 <PenTool className="w-8 h-8 text-blue-500 mb-4" />
                 <h4 className="font-bold uppercase tracking-widest mb-2">Design</h4>
                 <p className="text-xs text-slate-400">Award-winning architectural partnerships.</p>
               </div>
               <div className="border border-white/10 p-6 hover:bg-white/5 transition-colors">
                 <Layers className="w-8 h-8 text-blue-500 mb-4" />
                 <h4 className="font-bold uppercase tracking-widest mb-2">Build</h4>
                 <p className="text-xs text-slate-400">Sustainable construction practices.</p>
               </div>
               <div className="border border-white/10 p-6 hover:bg-white/5 transition-colors">
                 <Box className="w-8 h-8 text-blue-500 mb-4" />
                 <h4 className="font-bold uppercase tracking-widest mb-2">Manage</h4>
                 <p className="text-xs text-slate-400">Long-term asset value preservation.</p>
               </div>
               <div className="border border-white/10 p-6 hover:bg-white/5 transition-colors">
                 <Move className="w-8 h-8 text-blue-500 mb-4" />
                 <h4 className="font-bold uppercase tracking-widest mb-2">Scale</h4>
                 <p className="text-xs text-slate-400">Strategic portfolio expansion.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 py-12 border-t border-slate-300 text-xs font-bold uppercase tracking-widest text-slate-500">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
           <div className="mb-4 md:mb-0">
             <span className="text-slate-900">ARCHITECT</span>DEV © 2024
           </div>
           <div className="flex space-x-8">
             <a href="#" className="hover:text-blue-600">Instagram</a>
             <a href="#" className="hover:text-blue-600">LinkedIn</a>
             <a href="#" className="hover:text-blue-600">Twitter</a>
           </div>
        </div>
      </footer>
    </div>
  );
}

export default RealEstateDesign7;