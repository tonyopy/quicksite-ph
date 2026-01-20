import React, { useState } from 'react';
import { Leaf, Recycle, Sun, Droplets, TreePine, ArrowRight } from 'lucide-react';

function PrintingDesign4() {
  return (
    <div className="min-h-screen bg-[#F7F9F5] font-serif text-green-900">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#F7F9F5]/90 backdrop-blur-sm border-b border-green-100">
         <div className="container mx-auto px-6 py-5 flex justify-between items-center">
            <div className="flex items-center gap-2 text-2xl font-bold text-green-800">
               <Leaf className="w-6 h-6" />
               Eco<span className="font-light">Print</span>
            </div>
            <div className="hidden md:flex gap-8 font-sans text-sm text-green-800/70 uppercase tracking-widest">
               <a href="#" className="hover:text-green-800">Materials</a>
               <a href="#" className="hover:text-green-800">Process</a>
               <a href="#" className="hover:text-green-800">Impact</a>
            </div>
            <button className="bg-green-800 text-white px-6 py-2 rounded-full font-sans text-sm hover:bg-green-700 transition">
               Order Green
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[50%] h-full bg-green-100/30 rounded-l-full -z-10"></div>
         
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <span className="text-green-600 font-sans text-xs tracking-[0.2em] uppercase bg-white px-4 py-2 rounded-full border border-green-100 inline-block">
                  100% Recycled • Zero Waste
               </span>
               <h1 className="text-6xl lg:text-7xl font-light leading-none">
                  Print Responsibly. <br/>
                  <span className="italic font-bold text-green-800">Leave No Trace.</span>
               </h1>
               <p className="text-xl text-green-800/60 font-sans leading-relaxed max-w-md">
                  High-quality printing using soy-based inks and 100% post-consumer recycled paper. Good for your brand, better for the planet.
               </p>
               <button className="flex items-center gap-2 bg-green-800 text-white px-8 py-4 rounded-full font-sans hover:bg-green-700 transition shadow-lg shadow-green-100">
                  Shop Eco-Friendly <ArrowRight className="w-4 h-4" />
               </button>
            </div>
            
            <div className="relative">
               <img 
                  src="https://images.unsplash.com/photo-1605218427368-35b0160d5c97?auto=format&fit=crop&w=1000&q=80" 
                  alt="Recycled Paper Texture" 
                  className="rounded-[3rem] w-full h-[600px] object-cover shadow-2xl sepia-[.3]"
               />
               <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur p-6 rounded-2xl max-w-xs font-sans text-sm shadow-lg">
                  <div className="font-bold text-green-800 mb-1">Did you know?</div>
                  <p className="text-green-700/70">Every order plants a tree through our partnership with OneTreePlanted.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 text-center">
               {[
                  { icon: Recycle, title: "Recycled Paper", desc: "Sourced from 100% post-consumer waste." },
                  { icon: Droplets, title: "Soy-Based Inks", desc: "Non-toxic, renewable, and vibrant colors." },
                  { icon: Sun, title: "Solar Powered", desc: "Our facility runs on 100% renewable energy." },
               ].map((item, i) => (
                  <div key={i} className="group p-8 rounded-3xl hover:bg-green-50/50 transition duration-500">
                     <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-700 group-hover:scale-110 transition-transform">
                        <item.icon className="w-8 h-8" />
                     </div>
                     <h3 className="text-2xl font-bold mb-3 text-green-900">{item.title}</h3>
                     <p className="text-green-800/60 font-sans leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Impact Counter */}
      <section className="py-20 bg-green-900 text-green-50 font-sans">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif mb-12">Our Collective Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <div>
                  <div className="text-4xl font-bold mb-2">12k+</div>
                  <div className="text-green-300 text-sm uppercase tracking-widest">Trees Saved</div>
               </div>
               <div>
                  <div className="text-4xl font-bold mb-2">500k</div>
                  <div className="text-green-300 text-sm uppercase tracking-widest">Gallons Water Saved</div>
               </div>
               <div>
                  <div className="text-4xl font-bold mb-2">80%</div>
                  <div className="text-green-300 text-sm uppercase tracking-widest">Less CO2</div>
               </div>
               <div>
                  <div className="text-4xl font-bold mb-2">0</div>
                  <div className="text-green-300 text-sm uppercase tracking-widest">Landfill Waste</div>
               </div>
            </div>
         </div>
      </section>

      <footer className="py-12 bg-[#F7F9F5] text-center text-green-800/40 text-sm font-sans">
         <p>© 2025 EcoPrint. Printed with purpose.</p>
      </footer>
    </div>
  );
}

export default PrintingDesign4;
