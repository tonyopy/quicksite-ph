import React, { useState } from 'react';
import { Anchor, Ship, Wind, Map, Compass, Fish } from 'lucide-react';

function RestaurantDesign10() {
  return (
    <div className="min-h-screen bg-blue-50 font-serif text-blue-900">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
         <div className="container mx-auto px-6 py-5 flex justify-between items-center">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-widest text-blue-900">
               <Anchor className="w-6 h-6 text-blue-500" />
               THE<span className="text-blue-500">DOCK</span>
            </div>
            <div className="hidden md:flex gap-10 font-sans text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
               <a href="#" className="hover:text-blue-900">Raw Bar</a>
               <a href="#" className="hover:text-blue-900">Catch</a>
               <a href="#" className="hover:text-blue-900">Market</a>
               <a href="#" className="hover:text-blue-900">Events</a>
            </div>
            <button className="border border-blue-200 text-blue-900 px-6 py-2 font-sans text-xs font-bold uppercase tracking-widest hover:bg-blue-50 transition">
               Book Table
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-100/50 -skew-x-12 translate-x-32 z-0"></div>
         
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
               <div className="flex items-center gap-2 text-blue-400 font-sans text-xs font-bold uppercase tracking-widest">
                  <Compass className="w-4 h-4" /> 42°N, 70°W • Est. 2025
               </div>
               <h1 className="text-6xl md:text-7xl font-bold text-blue-950 leading-tight">
                  Fresh from <br/> the <span className="text-blue-500 italic">Ocean</span>
               </h1>
               <p className="text-xl text-blue-800/60 leading-relaxed font-sans max-w-md">
                  Sustainable seafood, dock-to-table dining, and ocean views. Experience the best the coast has to offer.
               </p>
               <div className="flex gap-4 pt-4 font-sans">
                  <button className="bg-blue-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-blue-800 transition shadow-xl">
                     Today's Catch
                  </button>
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 border-2 border-blue-900 translate-x-4 translate-y-4"></div>
               <img 
                  src="https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=1000&q=80" 
                  alt="Fresh Seafood" 
                  className="relative z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition duration-1000"
               />
            </div>
         </div>
      </section>

      {/* Menu Grid */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-blue-100 pb-6">
               <h2 className="text-4xl font-bold text-blue-950">Raw Bar</h2>
               <span className="text-blue-400 font-sans text-xs font-bold uppercase tracking-widest">Market Price Daily</span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
               {[
                  { name: "Oysters", desc: "Local selection, mignonette, lemon.", price: "$3/ea" },
                  { name: "Shrimp Cocktail", desc: "Jumbo prawns, spicy cocktail sauce.", price: "$18" },
                  { name: "Tuna Tartare", desc: "Avocado, soy lime dressing, wonton.", price: "$22" },
                  { name: "Lobster Roll", desc: "Butter poached, brioche bun, fries.", price: "$34" },
                  { name: "Clam Chowder", desc: "New England style, bacon, potatoes.", price: "$12" },
                  { name: "Steamed Mussels", desc: "White wine, garlic, fresh herbs.", price: "$24" },
               ].map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                     <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-2xl font-bold text-blue-900 group-hover:text-blue-500 transition">{item.name}</h3>
                        <span className="font-sans font-bold text-blue-400">{item.price}</span>
                     </div>
                     <p className="text-blue-800/60 font-sans text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Image Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 h-64">
         {[
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1615141982880-1313d41813d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=600&q=80",
         ].map((src, i) => (
            <div key={i} className="relative group overflow-hidden">
               <img src={src} alt="Gallery" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-blue-900/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <Fish className="w-8 h-8 text-white" />
               </div>
            </div>
         ))}
      </section>

      <footer className="bg-blue-950 py-16 text-center text-blue-200 font-sans text-xs tracking-widest uppercase">
         <div className="container mx-auto">
            <Anchor className="w-8 h-8 mx-auto mb-8 text-blue-500" />
            <p className="mb-4">100 Harbor View Drive, Boston, MA</p>
            <p>© 2025 The Dock. Catch of the Day.</p>
         </div>
      </footer>
    </div>
  );
}

export default RestaurantDesign10;
