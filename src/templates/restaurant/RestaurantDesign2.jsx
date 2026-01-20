import React, { useState } from 'react';
import { ShoppingBag, Star, Flame, Clock, MapPin, Instagram, Menu } from 'lucide-react';

function RestaurantDesign2() {
  return (
    <div className="min-h-screen bg-yellow-50 font-sans text-gray-900">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-white border-b-4 border-red-600">
         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-3xl font-black tracking-tighter text-red-600 italic transform -skew-x-12">
               BURGER<span className="text-yellow-500">BLAST</span>
            </div>
            <div className="hidden md:flex gap-8 font-bold uppercase tracking-wide text-gray-700">
               <a href="#" className="hover:text-red-600">Menu</a>
               <a href="#" className="hover:text-red-600">Locations</a>
               <a href="#" className="hover:text-red-600">Rewards</a>
            </div>
            <button className="bg-red-600 text-white px-6 py-3 rounded-full font-black uppercase tracking-wide hover:bg-red-700 transition shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
               Order Now
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-yellow-400 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
         
         <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
               <div className="inline-block bg-black text-white px-4 py-2 font-black uppercase text-sm -rotate-2">
                  🔥 Best Burger in Town
               </div>
               <h1 className="text-6xl lg:text-8xl font-black leading-none uppercase text-red-600 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  Juicy. <br/> Cheesy. <br/> <span className="text-white text-stroke-black">Epic.</span>
               </h1>
               <p className="text-xl font-bold max-w-md text-gray-800">
                  Smashed patties, brioche buns, and our secret sauce. Get ready for a flavor explosion.
               </p>
               <div className="flex gap-4 pt-4">
                  <button className="bg-black text-white px-8 py-4 rounded-xl font-black uppercase text-xl hover:scale-105 transition shadow-xl">
                     View Menu
                  </button>
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-red-600 rounded-full blur-[100px] opacity-30 animate-pulse"></div>
               <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80" 
                  alt="Delicious Burger" 
                  className="relative z-10 w-full object-cover transform rotate-6 hover:rotate-0 transition duration-500 drop-shadow-2xl"
               />
               <div className="absolute -bottom-10 -left-10 bg-white p-6 border-4 border-black rounded-2xl rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-3xl font-black text-red-600">$12.99</div>
                  <div className="font-bold text-sm uppercase">The Classic Combo</div>
               </div>
            </div>
         </div>
      </section>

      {/* Popular Items */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-5xl font-black uppercase italic text-gray-900 mb-4">Fan Favorites</h2>
               <div className="w-24 h-2 bg-red-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { name: "Double Trouble", desc: "Two patties, double cheese, bacon.", price: "$14", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80" },
                  { name: "Spicy Chick", desc: "Crispy chicken, jalapeños, spicy mayo.", price: "$11", img: "https://images.unsplash.com/photo-1615557960916-5f4791effe9d?auto=format&fit=crop&w=600&q=80" },
                  { name: "Loaded Fries", desc: "Cheese sauce, bacon bits, scallions.", price: "$8", img: "https://images.unsplash.com/photo-1585109649139-3668018951a7?auto=format&fit=crop&w=600&q=80" },
               ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-3xl overflow-hidden border-4 border-transparent hover:border-black transition group shadow-lg">
                     <div className="h-64 overflow-hidden">
                        <img 
                           src={item.img} 
                           alt={item.name} 
                           className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                     </div>
                     <div className="p-8">
                        <div className="flex justify-between items-center mb-2">
                           <h3 className="text-2xl font-black uppercase">{item.name}</h3>
                           <span className="text-xl font-bold text-red-600">{item.price}</span>
                        </div>
                        <p className="text-gray-600 font-bold mb-6">{item.desc}</p>
                        <button className="w-full bg-yellow-400 text-black py-3 rounded-xl font-black uppercase hover:bg-yellow-300 transition flex items-center justify-center gap-2">
                           <ShoppingBag className="w-5 h-5" /> Add to Order
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Info Strip */}
      <section className="py-16 bg-black text-white">
         <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
            <div>
               <Clock className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
               <h3 className="text-xl font-black uppercase mb-2">Open Late</h3>
               <p className="font-bold text-gray-400">Until 2 AM Daily</p>
            </div>
            <div>
               <Flame className="w-10 h-10 text-red-500 mx-auto mb-4" />
               <h3 className="text-xl font-black uppercase mb-2">Fresh Grilled</h3>
               <p className="font-bold text-gray-400">Never Frozen Beef</p>
            </div>
            <div>
               <MapPin className="w-10 h-10 text-blue-400 mx-auto mb-4" />
               <h3 className="text-xl font-black uppercase mb-2">5 Locations</h3>
               <p className="font-bold text-gray-400">Find One Near You</p>
            </div>
         </div>
      </section>

      <footer className="bg-red-600 py-12 text-center text-white font-bold uppercase tracking-widest">
         <p>© 2025 BurgerBlast. Eat like a boss.</p>
      </footer>
    </div>
  );
}

export default RestaurantDesign2;
