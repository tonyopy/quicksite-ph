import React, { useState } from 'react';
import { Coffee, Cloud, BookOpen, Wifi, MapPin, ArrowRight } from 'lucide-react';

function RestaurantDesign6() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-stone-800">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-sm">
         <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            <div className="text-xl font-bold tracking-widest text-stone-600 flex items-center gap-2">
               <div className="w-8 h-8 bg-stone-200 rounded-full flex items-center justify-center text-stone-600">
                  <Coffee className="w-4 h-4" />
               </div>
               BREW<span className="font-light">&BEAN</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-stone-400">
               <a href="#" className="hover:text-stone-600">Coffee</a>
               <a href="#" className="hover:text-stone-600">Bakery</a>
               <a href="#" className="hover:text-stone-600">Shop</a>
               <a href="#" className="hover:text-stone-600">Locations</a>
            </div>
            <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-stone-800 pb-1 hover:text-stone-500 hover:border-stone-500 transition">
               Order Ahead
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
               <h1 className="text-6xl md:text-7xl font-light text-stone-800 leading-tight">
                  Slow Roasted. <br/>
                  <span className="font-serif italic text-stone-500">Served Fast.</span>
               </h1>
               <p className="text-lg text-stone-500 font-light leading-relaxed max-w-md">
                  Ethically sourced beans, roasted in small batches right here in the city. Your perfect morning ritual starts with us.
               </p>
               <div className="flex gap-6 pt-4">
                  <button className="bg-stone-800 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-stone-700 transition">
                     View Menu
                  </button>
                  <button className="flex items-center gap-2 text-stone-600 font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all">
                     Find a Cafe <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
               <div className="absolute top-0 right-0 w-full h-full bg-[#F5F0E6] rounded-[3rem] -rotate-6 z-0"></div>
               <img 
                  src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1000&q=80" 
                  alt="Latte Art" 
                  className="relative z-10 w-full h-[600px] object-cover rounded-[3rem] shadow-xl rotate-3 hover:rotate-0 transition duration-700"
               />
            </div>
         </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 text-center">
               {[
                  { icon: Cloud, title: "Small Batch", desc: "Roasted fresh every single morning." },
                  { icon: Wifi, title: "Free WiFi", desc: "Work, study, or just doomscroll." },
                  { icon: BookOpen, title: "Community", desc: "A space for connection and creativity." },
               ].map((item, i) => (
                  <div key={i} className="p-8 hover:bg-[#FDFBF7] rounded-3xl transition duration-300">
                     <item.icon className="w-10 h-10 mx-auto mb-6 text-stone-400" />
                     <h3 className="text-xl font-bold text-stone-700 mb-3">{item.title}</h3>
                     <p className="text-stone-500 leading-relaxed text-sm">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Menu Highlight */}
      <section className="py-24 bg-[#F5F0E6]">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif text-center mb-16 italic text-stone-600">Daily Rituals</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { name: "Oat Latte", price: "$5.50", img: "https://images.unsplash.com/photo-1593443320739-77f74952dabd?auto=format&fit=crop&w=600&q=80" },
                  { name: "Cold Brew", price: "$4.75", img: "https://images.unsplash.com/photo-1517701604599-bb29b5c7dd9b?auto=format&fit=crop&w=600&q=80" },
                  { name: "Matcha", price: "$6.00", img: "https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=600&q=80" },
                  { name: "Croissant", price: "$4.25", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80" },
               ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer group">
                     <div className="overflow-hidden rounded-xl mb-4 h-64">
                        <img 
                           src={item.img} 
                           alt={item.name} 
                           className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                        />
                     </div>
                     <div className="flex justify-between items-center">
                        <h3 className="font-bold text-stone-700">{item.name}</h3>
                        <span className="text-stone-500 font-mono text-sm">{item.price}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <footer className="py-12 bg-stone-800 text-center text-stone-400 text-xs uppercase tracking-widest">
         <p>© 2025 Brew & Bean. Life begins after coffee.</p>
      </footer>
    </div>
  );
}

export default RestaurantDesign6;
