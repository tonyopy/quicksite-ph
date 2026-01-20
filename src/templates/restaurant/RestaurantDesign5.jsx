import React, { useState } from 'react';
import { Sprout, Sun, Heart, Leaf, ArrowRight } from 'lucide-react';

function RestaurantDesign5() {
  return (
    <div className="min-h-screen bg-[#F0F7F4] font-sans text-emerald-900">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#F0F7F4]/90 backdrop-blur-sm">
         <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-emerald-700">
               <Sprout className="w-8 h-8" />
               ROOTS<span className="font-light text-emerald-900">&GREENS</span>
            </div>
            <div className="hidden md:flex gap-8 font-medium text-emerald-800/70">
               <a href="#" className="hover:text-emerald-700">Menu</a>
               <a href="#" className="hover:text-emerald-700">Our Farm</a>
               <a href="#" className="hover:text-emerald-700">Sustainability</a>
            </div>
            <button className="bg-emerald-700 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-800 transition shadow-lg shadow-emerald-200">
               Order Pickup
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
               <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold">
                  <Sun className="w-4 h-4" /> 100% Plant-Based
               </div>
               <h1 className="text-6xl md:text-7xl font-black text-emerald-950 leading-tight">
                  Eat Good. <br/> Feel <span className="text-emerald-500">Good.</span>
               </h1>
               <p className="text-xl text-emerald-800/70 leading-relaxed max-w-md">
                  Nourishing bowls, fresh pressed juices, and guilt-free treats. Fueled by nature, made with love.
               </p>
               <div className="flex gap-4 pt-4">
                  <button className="bg-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition shadow-xl shadow-orange-100">
                     View Menu
                  </button>
                  <button className="text-emerald-700 font-bold px-8 py-4 hover:bg-emerald-100 rounded-full transition">
                     Our Story
                  </button>
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-emerald-200 rounded-full blur-3xl opacity-40 transform scale-90"></div>
               <img 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80" 
                  alt="Healthy Bowl" 
                  className="relative z-10 w-full h-[600px] object-cover rounded-[3rem] shadow-2xl"
               />
               
               {/* Floating Card */}
               <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
                  <div className="flex items-center gap-4 mb-3">
                     <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold">
                        98%
                     </div>
                     <div>
                        <div className="font-bold text-emerald-900">Organic Ingredients</div>
                        <div className="text-xs text-emerald-600">Sourced Locally</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Menu Preview */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-emerald-500 font-bold text-sm uppercase tracking-widest">Fresh From the Kitchen</span>
               <h2 className="text-4xl font-black text-emerald-950 mt-2">Seasonal Favorites</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { name: "Buddha Bowl", price: "$14", desc: "Quinoa, roasted chickpeas, kale, tahini dressing.", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" },
                  { name: "Green Goddess", price: "$12", desc: "Spinach, avocado, cucumber, green apple juice.", img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=600&q=80" },
                  { name: "Avo Toast", price: "$10", desc: "Sourdough, smashed avocado, radish, seeds.", img: "https://images.unsplash.com/photo-1588137372308-15f75323ca8d?auto=format&fit=crop&w=600&q=80" },
               ].map((item, i) => (
                  <div key={i} className="group hover:-translate-y-2 transition duration-300">
                     <div className="h-64 rounded-3xl overflow-hidden mb-6 relative">
                        <img 
                           src={item.img} 
                           alt={item.name} 
                           className="w-full h-full object-cover"
                        />
                        <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-md text-emerald-700 hover:bg-emerald-50 transition">
                           <ArrowRight className="w-5 h-5" />
                        </button>
                     </div>
                     <h3 className="text-2xl font-bold text-emerald-900">{item.name}</h3>
                     <p className="text-emerald-600 mb-3">{item.desc}</p>
                     <span className="text-orange-500 font-bold text-lg">{item.price}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-emerald-900 text-white rounded-t-[4rem]">
         <div className="container mx-auto px-6 text-center max-w-3xl">
            <Leaf className="w-12 h-12 mx-auto mb-6 text-emerald-300" />
            <h2 className="text-4xl font-bold mb-6">Sustainable in Every Way</h2>
            <p className="text-emerald-100 text-lg leading-relaxed mb-10">
               We are committed to zero waste, plastic-free packaging, and supporting regenerative agriculture. Every meal you buy plants a tree.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-emerald-800 pt-10">
               <div>
                  <div className="text-3xl font-black text-emerald-300">0%</div>
                  <div className="text-sm font-bold uppercase tracking-widest mt-1">Plastic</div>
               </div>
               <div>
                  <div className="text-3xl font-black text-emerald-300">100%</div>
                  <div className="text-sm font-bold uppercase tracking-widest mt-1">Compostable</div>
               </div>
               <div>
                  <div className="text-3xl font-black text-emerald-300">Local</div>
                  <div className="text-sm font-bold uppercase tracking-widest mt-1">Sourcing</div>
               </div>
            </div>
         </div>
      </section>

      <footer className="bg-emerald-950 py-12 text-center text-emerald-400 text-sm">
         <p>© 2025 Roots & Greens. Powered by Plants.</p>
      </footer>
    </div>
  );
}

export default RestaurantDesign5;
