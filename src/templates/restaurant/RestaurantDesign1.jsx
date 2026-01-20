import React, { useState } from 'react';
import { Utensils, Clock, MapPin, Phone, Star, ChevronDown, Calendar, ArrowRight } from 'lucide-react';

function RestaurantDesign1() {
  const [bookingDate, setBookingDate] = useState('');
  const [partySize, setPartySize] = useState('2');

  return (
    <div className="min-h-screen bg-stone-900 font-serif text-stone-200">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-stone-900/90 backdrop-blur-sm border-b border-stone-800">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-light tracking-[0.2em] uppercase text-amber-500">
             Lumière
          </div>
          <div className="hidden md:flex gap-10 text-xs font-sans font-bold uppercase tracking-widest text-stone-400">
             <a href="#" className="hover:text-amber-500 transition">Menu</a>
             <a href="#" className="hover:text-amber-500 transition">Our Story</a>
             <a href="#" className="hover:text-amber-500 transition">Private Dining</a>
             <a href="#" className="hover:text-amber-500 transition">Contact</a>
          </div>
          <button className="bg-amber-600 text-stone-900 px-8 py-3 font-sans text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition">
             Reservations
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <img 
               src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80" 
               alt="Fine Dining" 
               className="w-full h-full object-cover animate-pan"
            />
         </div>
         
         <div className="relative z-20 text-center px-6 max-w-4xl">
            <span className="block text-amber-500 font-sans text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in-up">Experience Culinary Art</span>
            <h1 className="text-6xl md:text-8xl font-light text-white mb-8 leading-none animate-fade-in-up delay-200">
               Taste the <br/> <span className="italic font-normal">Extraordinary</span>
            </h1>
            <p className="text-xl text-stone-300 mb-10 font-light max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-400">
               Modern French cuisine inspired by the seasons, crafted with passion, and served with elegance.
            </p>
            <div className="animate-fade-in-up delay-600">
               <ChevronDown className="w-10 h-10 text-amber-500 mx-auto animate-bounce" />
            </div>
         </div>
      </section>

      {/* Intro */}
      <section className="py-32 px-6 bg-stone-900">
         <div className="container mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-500/50"></div>
               <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-500/50"></div>
               <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" 
                  alt="Chef Plating" 
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition duration-1000"
               />
            </div>
            <div className="space-y-8">
               <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                  A Symphony of <br/> <span className="text-amber-500 italic">Flavors</span>
               </h2>
               <p className="text-stone-400 leading-loose font-light">
                  At Lumière, we believe that dining is not just about eating—it's an emotional experience. Chef Jean-Pierre curates a tasting menu that takes you on a journey through the finest ingredients sourced from local artisans and farmers.
               </p>
               <div className="flex gap-8 font-sans text-sm uppercase tracking-widest text-amber-500 pt-4">
                  <div className="flex items-center gap-2">
                     <Star className="w-4 h-4" /> Michelin Star
                  </div>
                  <div className="flex items-center gap-2">
                     <Utensils className="w-4 h-4" /> Farm to Table
                  </div>
               </div>
               <button className="border-b border-amber-500 text-amber-500 pb-1 font-sans text-sm uppercase tracking-widest hover:text-white hover:border-white transition">
                  Meet the Chef
               </button>
            </div>
         </div>
      </section>

      {/* Featured Menu */}
      <section className="py-24 bg-stone-800">
         <div className="container mx-auto px-6 max-w-3xl text-center">
            <h3 className="text-amber-500 font-sans text-xs tracking-[0.3em] uppercase mb-12">Signature Dishes</h3>
            
            <div className="space-y-12">
               {[
                  { name: "Seared Scallops", desc: "Cauliflower purée, truffle foam, caviar", price: "42" },
                  { name: "Duck Confit", desc: "Beluga lentils, orange glaze, roasted fennel", price: "56" },
                  { name: "Wagyu Beef Tartare", desc: "Quail egg, smoked paprika, sourdough crisp", price: "48" },
                  { name: "Chocolate Soufflé", desc: "Raspberry coulis, vanilla bean ice cream", price: "24" },
               ].map((item, i) => (
                  <div key={i} className="group relative">
                     <div className="flex justify-between items-baseline relative z-10 bg-stone-800">
                        <h4 className="text-2xl font-light text-white group-hover:text-amber-500 transition">{item.name}</h4>
                        <span className="text-xl font-light text-amber-500">{item.price}</span>
                     </div>
                     <p className="text-stone-500 font-light italic mt-2 text-left">{item.desc}</p>
                     <div className="absolute top-4 w-full border-b border-stone-700/50 z-0"></div>
                  </div>
               ))}
            </div>
            
            <button className="mt-16 border border-stone-600 px-10 py-4 font-sans text-xs uppercase tracking-widest hover:border-amber-500 hover:text-amber-500 transition">
               View Full Menu
            </button>
         </div>
      </section>

      {/* Reservation */}
      <section className="py-24 px-6 bg-stone-900">
         <div className="container mx-auto max-w-4xl border border-stone-800 p-12 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-900 px-6">
               <Clock className="w-8 h-8 text-amber-500" />
            </div>
            
            <h2 className="text-3xl font-light text-center mb-10">Reserve Your Table</h2>
            
            <div className="grid md:grid-cols-3 gap-6 font-sans">
               <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Date</label>
                  <input 
                     type="date" 
                     className="w-full bg-stone-800 border-none p-4 text-stone-300 focus:ring-1 focus:ring-amber-500"
                     value={bookingDate}
                     onChange={(e) => setBookingDate(e.target.value)}
                  />
               </div>
               <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Time</label>
                  <select className="w-full bg-stone-800 border-none p-4 text-stone-300 focus:ring-1 focus:ring-amber-500">
                     <option>6:00 PM</option>
                     <option>7:00 PM</option>
                     <option>8:00 PM</option>
                     <option>9:00 PM</option>
                  </select>
               </div>
               <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Guests</label>
                  <select 
                     className="w-full bg-stone-800 border-none p-4 text-stone-300 focus:ring-1 focus:ring-amber-500"
                     value={partySize}
                     onChange={(e) => setPartySize(e.target.value)}
                  >
                     <option>2 People</option>
                     <option>3 People</option>
                     <option>4 People</option>
                     <option>5+ People</option>
                  </select>
               </div>
            </div>
            
            <button className="w-full bg-amber-600 text-stone-900 font-bold uppercase tracking-widest py-4 mt-8 hover:bg-amber-500 transition">
               Check Availability
            </button>
         </div>
      </section>

      <footer className="bg-black py-16 text-center">
         <div className="container mx-auto px-6">
            <div className="text-2xl font-light tracking-[0.2em] uppercase text-amber-500 mb-8">
               Lumière
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-stone-500 font-sans text-xs tracking-widest uppercase mb-12">
               <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" /> 123 Culinary Ave, Paris
               </div>
               <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" /> +33 1 23 45 67 89
               </div>
               <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" /> Tue-Sun: 18:00 - 23:00
               </div>
            </div>
            <div className="text-stone-700 text-xs">
               © 2025 Lumière Restaurant. All Rights Reserved.
            </div>
         </div>
      </footer>
    </div>
  );
}

export default RestaurantDesign1;
