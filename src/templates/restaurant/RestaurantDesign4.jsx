import React, { useState } from 'react';
import { Fish, Waves, Circle, Minus } from 'lucide-react';

function RestaurantDesign4() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] font-sans text-stone-300">
      {/* Sidebar Nav (Desktop) / Topbar (Mobile) */}
      <nav className="md:fixed md:left-0 md:h-full md:w-24 w-full h-16 bg-[#111] border-b md:border-b-0 md:border-r border-stone-800 flex md:flex-col justify-between items-center py-6 px-4 z-50">
         <div className="text-stone-100 font-bold tracking-widest writing-vertical-lr rotate-180 hidden md:block">
            ZEN<span className="text-red-600">SUSHI</span>
         </div>
         <div className="text-stone-100 font-bold tracking-widest md:hidden">
            ZEN<span className="text-red-600">SUSHI</span>
         </div>
         
         <div className="flex md:flex-col gap-8">
            <div className="w-1 h-1 bg-stone-500 rounded-full"></div>
            <div className="w-1 h-1 bg-stone-500 rounded-full"></div>
            <div className="w-1 h-1 bg-stone-500 rounded-full"></div>
         </div>
         
         <div className="text-xs font-mono text-stone-600 writing-vertical-lr hidden md:block">
            EST. 2025
         </div>
         <div className="md:hidden">
            <Minus className="w-6 h-6" />
         </div>
      </nav>

      {/* Main Content Area */}
      <main className="md:pl-24">
         {/* Hero */}
         <section className="min-h-screen flex items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#151515] -z-10"></div>
            <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-8">
                  <h1 className="text-6xl lg:text-8xl font-light text-white leading-none tracking-tight">
                     OMAKASE <br/> <span className="text-red-600 font-bold">EXPERIENCE</span>
                  </h1>
                  <p className="text-xl text-stone-400 font-light max-w-md leading-relaxed">
                     Precision. Balance. Artistry. <br/>
                     Discover the purest flavors of the ocean, curated by Master Chef Hiroshi.
                  </p>
                  <button className="border border-stone-600 text-white px-10 py-4 hover:bg-white hover:text-black transition duration-500 tracking-widest text-sm uppercase">
                     Reserve Seat
                  </button>
               </div>
               
               <div className="relative">
                  <div className="absolute -top-20 -right-20 w-96 h-96 border border-stone-800 rounded-full opacity-50 animate-spin-slow"></div>
                  <img 
                     src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=80" 
                     alt="Sushi Platter" 
                     className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition duration-1000 ease-in-out"
                  />
               </div>
            </div>
         </section>

         {/* Menu Highlight */}
         <section className="py-32 px-12 bg-[#1a1a1a]">
            <div className="container mx-auto">
               <div className="flex items-end justify-between mb-20 border-b border-stone-800 pb-6">
                  <h2 className="text-4xl font-light text-white">Seasonal Menu</h2>
                  <span className="text-stone-500 font-mono text-sm">SPRING 2025</span>
               </div>
               
               <div className="grid md:grid-cols-2 gap-x-24 gap-y-12">
                  {[
                     { name: "Otoro Sashimi", price: "MP", desc: "Premium fatty tuna, fresh wasabi" },
                     { name: "Uni Nigiri", price: "18", desc: "Hokkaido sea urchin, nori" },
                     { name: "Wagyu Beef Roll", price: "24", desc: "Seared A5 wagyu, truffle oil" },
                     { name: "Hamachi Carpaccio", price: "20", desc: "Yellowtail, ponzu, jalapeño" },
                     { name: "Chef's Selection", price: "85", desc: "12-piece nigiri tasting" },
                     { name: "Miso Black Cod", price: "32", desc: "Marinated 72 hours, yuzu glaze" },
                  ].map((item, i) => (
                     <div key={i} className="group cursor-pointer">
                        <div className="flex justify-between items-baseline mb-2">
                           <h3 className="text-xl text-stone-200 group-hover:text-red-500 transition">{item.name}</h3>
                           <span className="font-mono text-stone-500">{item.price}</span>
                        </div>
                        <p className="text-sm text-stone-500 font-light">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Philosophy */}
         <section className="py-32 bg-[#111] relative">
            <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-20 items-center">
               <div className="relative h-[500px] w-full">
                  <img 
                     src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80" 
                     alt="Sushi Chef" 
                     className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
               </div>
               <div className="space-y-8">
                  <Waves className="w-12 h-12 text-stone-700" />
                  <h2 className="text-4xl font-light text-white">The Art of <br/> Simplicity</h2>
                  <p className="text-stone-400 leading-loose font-light">
                     We believe that true sushi is about respecting the ingredients. Our rice is seasoned with red vinegar aged for three years, and our fish is flown in daily from Toyosu Market.
                  </p>
               </div>
            </div>
         </section>

         <footer className="py-12 border-t border-stone-800 text-center text-stone-600 text-xs tracking-widest uppercase">
            <p>© 2025 Zen Sushi Bar. Tokyo • New York • London.</p>
         </footer>
      </main>
    </div>
  );
}

export default RestaurantDesign4;
