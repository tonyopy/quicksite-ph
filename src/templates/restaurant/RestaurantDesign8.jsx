import React, { useState } from 'react';
import { Flame, Wine, Award, Calendar, ChevronDown, UtensilsCrossed } from 'lucide-react';

function RestaurantDesign8() {
  return (
    <div className="min-h-screen bg-[#1c1917] font-serif text-stone-300">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#1c1917]/90 backdrop-blur border-b border-stone-800">
         <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            <div className="text-3xl font-bold tracking-widest text-white uppercase flex items-center gap-2">
               <Flame className="w-6 h-6 text-orange-700" />
               Iron<span className="text-orange-700">&</span>Oak
            </div>
            <div className="hidden md:flex gap-10 text-xs font-sans font-bold uppercase tracking-[0.2em] text-stone-500">
               <a href="#" className="hover:text-white transition">Butcher</a>
               <a href="#" className="hover:text-white transition">Menu</a>
               <a href="#" className="hover:text-white transition">Whiskey</a>
               <a href="#" className="hover:text-white transition">Events</a>
            </div>
            <button className="border border-stone-600 px-6 py-2 text-xs font-sans font-bold uppercase tracking-widest hover:border-orange-700 hover:text-orange-700 transition">
               Book Table
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76690b60943?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-transparent to-[#1c1917]"></div>
         
         <div className="relative z-10 text-center px-6">
            <div className="w-24 h-1 bg-orange-700 mx-auto mb-8"></div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 uppercase tracking-tight">
               Prime Cuts. <br/> Aged to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-800">Perfection.</span>
            </h1>
            <p className="text-xl text-stone-400 font-sans font-light tracking-wide max-w-lg mx-auto mb-12">
               Experience the finest dry-aged steaks and rare whiskeys in an atmosphere of timeless luxury.
            </p>
            <ChevronDown className="w-10 h-10 text-stone-500 mx-auto animate-bounce" />
         </div>
      </section>

      {/* The Cuts */}
      <section className="py-24 px-6 bg-[#1c1917]">
         <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-stone-800 pb-6">
               <h2 className="text-4xl text-white font-bold uppercase">The Butcher's Block</h2>
               <span className="text-orange-700 font-sans font-bold text-xs tracking-widest uppercase">Dry Aged 45 Days</span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { name: "Ribeye", weight: "16oz", price: "$55", desc: "Rich marbling, intense flavor." },
                  { name: "Filet Mignon", weight: "10oz", price: "$62", desc: "Tender, buttery texture." },
                  { name: "Porterhouse", weight: "32oz", price: "$95", desc: "The king of steaks. For two." },
                  { name: "NY Strip", weight: "14oz", price: "$48", desc: "Firm texture, full bodied." },
                  { name: "Tomahawk", weight: "40oz", price: "$120", desc: "Bone-in ribeye. A showstopper." },
                  { name: "Wagyu A5", weight: "6oz", price: "$150", desc: "Japanese beef. Melt in your mouth." },
               ].map((item, i) => (
                  <div key={i} className="border border-stone-800 p-8 hover:bg-stone-900 transition group cursor-pointer">
                     <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-2xl text-white font-bold group-hover:text-orange-700 transition">{item.name}</h3>
                        <span className="text-stone-500 font-sans text-sm">{item.weight}</span>
                     </div>
                     <p className="text-stone-500 mb-6 text-sm">{item.desc}</p>
                     <div className="w-full h-px bg-stone-800 mb-4"></div>
                     <div className="text-right text-orange-700 font-sans font-bold">{item.price}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-stone-900 relative">
         <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="flex items-center gap-4 text-orange-700">
                  <Wine className="w-8 h-8" />
                  <span className="font-sans font-bold text-xs tracking-widest uppercase">The Cellar</span>
               </div>
               <h2 className="text-5xl text-white font-bold leading-tight">
                  Rare Bourbons & <br/> Vintage Reds
               </h2>
               <p className="text-stone-400 leading-loose">
                  Our cellar houses over 500 labels, featuring rare Kentucky bourbons, single malt scotches, and bold cabernets from Napa Valley. Let our sommelier find the perfect pairing for your steak.
               </p>
               <button className="text-white border-b border-orange-700 pb-1 hover:text-orange-700 transition">
                  View Drink Menu
               </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80" 
                  alt="Whiskey" 
                  className="w-full h-80 object-cover opacity-80"
               />
               <img 
                  src="https://images.unsplash.com/photo-1606744884165-bc188615e05c?auto=format&fit=crop&w=600&q=80" 
                  alt="Steak Dinner" 
                  className="w-full h-80 object-cover opacity-80 translate-y-8"
               />
            </div>
         </div>
      </section>

      <footer className="bg-black py-12 border-t border-stone-800 text-center">
         <div className="text-stone-600 font-sans text-xs tracking-widest uppercase">
            © 2025 Iron & Oak. Est. 1998.
         </div>
      </footer>
    </div>
  );
}

export default RestaurantDesign8;
