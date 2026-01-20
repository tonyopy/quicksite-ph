import React, { useState } from 'react';
import { Cake, Croissant, Coffee, Heart, ShoppingBasket, Star } from 'lucide-react';

function RestaurantDesign9() {
  return (
    <div className="min-h-screen bg-[#FFF5F7] font-serif text-pink-950">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#FFF5F7]/90 backdrop-blur-sm border-b border-pink-100">
         <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            <div className="text-3xl font-bold tracking-tight text-pink-400 italic">
               Sweet<span className="text-pink-300">Pea</span>
            </div>
            <div className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-widest text-pink-900/60 font-sans">
               <a href="#" className="hover:text-pink-500">Cakes</a>
               <a href="#" className="hover:text-pink-500">Pastries</a>
               <a href="#" className="hover:text-pink-500">Wedding</a>
               <a href="#" className="hover:text-pink-500">Workshops</a>
            </div>
            <div className="flex gap-4">
               <button className="bg-white p-2 rounded-full shadow-sm hover:text-pink-500 transition">
                  <Heart className="w-5 h-5" />
               </button>
               <button className="bg-white p-2 rounded-full shadow-sm hover:text-pink-500 transition relative">
                  <ShoppingBasket className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-pink-400 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-sans font-bold">2</span>
               </button>
            </div>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-6">
               <span className="text-pink-400 font-sans font-bold text-xs tracking-[0.2em] uppercase bg-white px-4 py-2 rounded-full shadow-sm inline-block">
                  Baked Fresh Daily
               </span>
               <h1 className="text-6xl md:text-7xl font-bold text-pink-900 leading-tight">
                  Life is Short. <br/> Eat <span className="text-pink-400 italic">Dessert</span> First.
               </h1>
               <p className="text-xl text-pink-900/60 leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
                  Handcrafted cakes, macarons, and pastries made with the finest ingredients and a sprinkle of magic.
               </p>
               <button className="bg-pink-400 text-white px-10 py-4 rounded-full font-sans font-bold uppercase tracking-widest hover:bg-pink-500 transition shadow-lg shadow-pink-200 hover:-translate-y-1">
                  Shop Treats
               </button>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-pink-200 rounded-full blur-[80px] opacity-40"></div>
               <img 
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80" 
                  alt="Delicious Cake" 
                  className="relative z-10 w-full object-contain drop-shadow-2xl hover:scale-105 transition duration-700"
               />
            </div>
         </div>
      </section>

      {/* Sweet Selection */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <Cake className="w-10 h-10 text-pink-300 mx-auto mb-4" />
               <h2 className="text-4xl font-bold text-pink-900">Curated Confections</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
               {[
                  { name: "Macaron Box", price: "$24", img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&q=80" },
                  { name: "Berry Tart", price: "$8", img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=600&q=80" },
                  { name: "Cupcake Trio", price: "$12", img: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=600&q=80" },
                  { name: "Glazed Donut", price: "$4", img: "https://images.unsplash.com/photo-1551024601-bec0273e8a9c?auto=format&fit=crop&w=600&q=80" },
               ].map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                     <div className="bg-pink-50 rounded-[2rem] p-6 mb-4 transition duration-500 group-hover:bg-pink-100 relative overflow-hidden">
                        <img 
                           src={item.img} 
                           alt={item.name} 
                           className="w-full h-48 object-cover rounded-2xl shadow-md group-hover:scale-110 transition duration-500"
                        />
                        <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow text-pink-400 hover:text-pink-600 opacity-0 group-hover:opacity-100 transition translate-y-4 group-hover:translate-y-0">
                           <ShoppingBasket className="w-5 h-5" />
                        </button>
                     </div>
                     <h3 className="text-xl font-bold text-pink-900 text-center">{item.name}</h3>
                     <p className="text-pink-400 font-sans font-bold text-center mt-1">{item.price}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#FFF5F7]">
         <div className="container mx-auto px-6 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-pink-900 mb-6">Join the Sweet Club</h2>
            <p className="text-pink-800/60 mb-8 font-light">
               Sign up for our newsletter and get a free cupcake on your birthday! Plus exclusive access to new flavors.
            </p>
            <div className="flex bg-white p-2 rounded-full shadow-sm border border-pink-100">
               <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 bg-transparent px-6 py-3 outline-none text-pink-900 placeholder-pink-300 font-sans"
               />
               <button className="bg-pink-400 text-white px-8 py-3 rounded-full font-sans font-bold uppercase text-xs tracking-widest hover:bg-pink-500 transition">
                  Subscribe
               </button>
            </div>
         </div>
      </section>

      <footer className="bg-white py-12 text-center text-pink-300 font-sans text-xs uppercase tracking-widest">
         <p>© 2025 SweetPea Bakery. Baked with Love.</p>
      </footer>
    </div>
  );
}

export default RestaurantDesign9;
