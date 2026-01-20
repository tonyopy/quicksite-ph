import React, { useState } from 'react';
import { ChefHat, Pizza, Wine, Clock, Phone, ArrowRight } from 'lucide-react';

function RestaurantDesign3() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-serif text-amber-900">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#FDFBF7]/95 backdrop-blur border-b border-amber-100">
         <div className="container mx-auto px-6 py-5 flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tight text-red-800">
               NONNA'S<span className="font-light text-amber-800">KITCHEN</span>
            </div>
            <div className="hidden md:flex gap-8 font-sans text-sm font-semibold text-amber-900/70">
               <a href="#" className="hover:text-red-800">Antipasti</a>
               <a href="#" className="hover:text-red-800">Pasta</a>
               <a href="#" className="hover:text-red-800">Vino</a>
               <a href="#" className="hover:text-red-800">Dolce</a>
            </div>
            <button className="bg-red-800 text-white px-6 py-2 rounded font-sans font-medium hover:bg-red-900 transition shadow-lg shadow-red-200">
               Book a Table
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 relative z-10">
               <span className="text-red-700 font-sans font-bold text-xs tracking-widest uppercase bg-red-50 px-3 py-1 rounded inline-block">
                  Authentic Italian Cuisine
               </span>
               <h1 className="text-6xl md:text-7xl font-medium leading-tight text-amber-950">
                  Handmade Pasta. <br/>
                  <span className="italic text-red-700">Just Like Home.</span>
               </h1>
               <p className="text-xl text-amber-900/60 font-sans leading-relaxed max-w-md">
                  Experience the warmth of Italy in every bite. Traditional recipes passed down through generations.
               </p>
               <div className="flex gap-4 pt-2">
                  <button className="bg-amber-900 text-white px-8 py-4 rounded font-sans font-bold hover:bg-amber-800 transition">
                     See Full Menu
                  </button>
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 border-2 border-red-800 rounded-t-[15rem] rounded-b-3xl transform translate-x-4 translate-y-4"></div>
               <img 
                  src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=1000&q=80" 
                  alt="Pasta Making" 
                  className="relative z-10 w-full h-[600px] object-cover rounded-t-[15rem] rounded-b-3xl shadow-2xl"
               />
            </div>
         </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-medium text-amber-950 mb-4">Our Specialties</h2>
               <div className="w-16 h-1 bg-red-700 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
               {[
                  { name: "Cacio e Pepe", desc: "Spaghetti, pecorino romano, black pepper.", price: "$22", img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80" },
                  { name: "Osso Buco", desc: "Braised veal shanks, polenta, gremolata.", price: "$34", img: "https://images.unsplash.com/photo-1544510808-91bcbee1df55?auto=format&fit=crop&w=600&q=80" },
                  { name: "Tiramisu", desc: "Espresso-soaked ladyfingers, mascarpone.", price: "$12", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80" },
               ].map((item, i) => (
                  <div key={i} className="text-center group cursor-pointer">
                     <div className="overflow-hidden rounded-full w-64 h-64 mx-auto mb-6 border-4 border-amber-50 shadow-lg">
                        <img 
                           src={item.img} 
                           alt={item.name} 
                           className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                        />
                     </div>
                     <h3 className="text-2xl font-bold text-amber-900 mb-2">{item.name}</h3>
                     <p className="text-amber-800/60 font-sans text-sm mb-3">{item.desc}</p>
                     <span className="text-red-700 font-bold font-sans">{item.price}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Story / Wine */}
      <section className="py-24 bg-red-900 text-amber-50 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"></div>
         
         <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
               <Wine className="w-12 h-12 text-amber-200" />
               <h2 className="text-4xl font-medium leading-tight">
                  Perfectly Paired <br/> With Italian Wines
               </h2>
               <p className="text-amber-100/80 font-sans leading-relaxed text-lg">
                  Our sommelier has curated a selection of wines from Tuscany to Sicily. Whether you prefer a bold Chianti or a crisp Pinot Grigio, we have the perfect glass for you.
               </p>
               <button className="text-amber-200 font-sans font-bold uppercase tracking-widest border-b border-amber-200 pb-1 hover:text-white hover:border-white transition">
                  View Wine List
               </button>
            </div>
            <div className="flex-1">
               <img 
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80" 
                  alt="Wine Pouring" 
                  className="rounded-lg shadow-2xl border-4 border-amber-900/50"
               />
            </div>
         </div>
      </section>

      <footer className="bg-amber-950 py-12 text-center text-amber-200/50 font-sans text-sm">
         <div className="container mx-auto flex flex-col items-center gap-6">
            <div className="flex gap-8">
               <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Daily 5pm - 10pm</span>
               <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> (555) 123-4567</span>
            </div>
            <p>© 2025 Nonna's Kitchen. Buon Appetito.</p>
         </div>
      </footer>
    </div>
  );
}

export default RestaurantDesign3;
