import React, { useState } from 'react';
import { Pizza, Flame, Truck, Phone, Star } from 'lucide-react';

function RestaurantDesign7() {
  return (
    <div className="min-h-screen bg-red-50 font-sans text-slate-900">
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-center py-2 font-bold text-sm uppercase tracking-wide">
         Free Delivery on Orders Over $25! Use Code: PIZZA25
      </div>

      {/* Nav */}
      <nav className="sticky top-0 w-full z-50 bg-white shadow-md">
         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-3xl font-black text-red-600 flex items-center gap-2 italic">
               <Pizza className="w-8 h-8 fill-yellow-400 text-red-600" />
               TONY'S<span className="text-slate-800">PIZZA</span>
            </div>
            <div className="hidden md:flex gap-8 font-bold text-slate-600 uppercase text-sm">
               <a href="#" className="hover:text-red-600">Menu</a>
               <a href="#" className="hover:text-red-600">Deals</a>
               <a href="#" className="hover:text-red-600">Locations</a>
            </div>
            <button className="bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black uppercase tracking-wide hover:bg-yellow-300 transition shadow-md">
               Order Online
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 bg-white overflow-hidden">
         <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
               <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full font-bold text-sm">
                  Voted #1 Pizza in the City 🏆
               </div>
               <h1 className="text-6xl md:text-7xl font-black leading-none text-slate-900">
                  HOT. FRESH. <br/> <span className="text-red-600">DELICIOUS.</span>
               </h1>
               <p className="text-xl text-slate-500 font-medium max-w-md mx-auto lg:mx-0">
                  Authentic NY style pizza made with fresh dough daily and our signature tomato sauce.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-black uppercase text-lg hover:bg-red-700 transition shadow-lg hover:-translate-y-1">
                     Build Your Own
                  </button>
                  <button className="bg-slate-100 text-slate-700 px-8 py-4 rounded-xl font-bold uppercase hover:bg-slate-200 transition">
                     View Specials
                  </button>
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
               <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80" 
                  alt="Pepperoni Pizza" 
                  className="relative z-10 w-full object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
               />
            </div>
         </div>
      </section>

      {/* Menu Grid */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black text-center mb-16 uppercase italic">Top Sellers</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { name: "The Classic", desc: "Double pepperoni, extra cheese.", price: "$18" },
                  { name: "Meat Lovers", desc: "Pepperoni, sausage, bacon, ham.", price: "$22" },
                  { name: "Veggie Supreme", desc: "Peppers, onions, mushrooms, olives.", price: "$20" },
                  { name: "BBQ Chicken", desc: "Grilled chicken, BBQ sauce, onions.", price: "$21" },
                  { name: "Hawaiian", desc: "Ham, pineapple, bacon.", price: "$19" },
                  { name: "White Pizza", desc: "Garlic sauce, ricotta, mozzarella.", price: "$18" },
               ].map((item, i) => (
                  <div key={i} className="bg-slate-800 p-8 rounded-2xl border-2 border-slate-700 hover:border-red-600 transition cursor-pointer group">
                     <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-black uppercase italic group-hover:text-yellow-400 transition">{item.name}</h3>
                        <span className="text-xl font-bold text-red-500">{item.price}</span>
                     </div>
                     <p className="text-slate-400 font-medium">{item.desc}</p>
                     <button className="mt-6 w-full py-3 bg-red-600 rounded-lg font-bold uppercase text-sm hover:bg-red-700 transition opacity-0 group-hover:opacity-100">
                        Add to Cart
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Delivery Strip */}
      <section className="py-20 bg-yellow-400">
         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 text-slate-900">
            <Truck className="w-20 h-20" />
            <div className="text-center md:text-left">
               <h2 className="text-4xl font-black uppercase mb-2">Fast Delivery</h2>
               <p className="font-bold text-xl opacity-80">Hot to your door in 30 minutes or less.</p>
            </div>
            <div className="text-4xl font-black bg-white px-8 py-4 rounded-full shadow-lg transform rotate-3">
               555-0199
            </div>
         </div>
      </section>

      <footer className="bg-white py-12 text-center text-slate-400 font-bold uppercase text-sm">
         <p>© 2025 Tony's Pizza. Best slice in town.</p>
      </footer>
    </div>
  );
}

export default RestaurantDesign7;
