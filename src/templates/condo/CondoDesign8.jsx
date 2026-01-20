import React, { useState } from 'react';
import { Calendar, Gem, Wine, Star, Crown, Key, Shield, Sparkles, Trophy, Music } from 'lucide-react';

function CondoDesign8() {
  const [bookingDate, setBookingDate] = useState('');

  return (
    <div className="min-h-screen bg-black font-sans text-amber-50 selection:bg-amber-600 selection:text-black">
      {/* Decorative Border */}
      <div className="fixed inset-0 border-[12px] border-double border-amber-600/30 pointer-events-none z-50"></div>

      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-md z-40 border-b border-amber-900/50">
        <div className="container mx-auto px-10 py-6 flex justify-between items-center">
          <div className="text-3xl font-serif tracking-widest text-amber-500 uppercase">
            Gatsby<span className="text-white">Suites</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-amber-100/80 text-sm tracking-[0.2em] uppercase">
            <a href="#suite" className="hover:text-amber-500 transition">The Suite</a>
            <a href="#luxury" className="hover:text-amber-500 transition">Luxury</a>
            <a href="#book" className="border border-amber-500 px-6 py-2 hover:bg-amber-500 hover:text-black transition duration-500">Inquire</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1920&q=80" 
              alt="Art Deco Interior" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         </div>

         <div className="relative z-10 text-center max-w-4xl px-6">
            <div className="mb-6 flex justify-center">
               <Crown className="w-12 h-12 text-amber-500 animate-pulse" />
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-wide drop-shadow-2xl">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-700">GOLDEN</span> AGE
            </h1>
            <p className="text-xl md:text-2xl text-amber-100/80 font-light tracking-wider mb-12 uppercase">
               Opulence. Glamour. Exclusivity.
            </p>
            <button className="bg-gradient-to-r from-amber-600 to-amber-800 text-black font-bold px-12 py-4 tracking-[0.2em] uppercase hover:scale-105 transition duration-500 shadow-[0_0_30px_rgba(217,119,6,0.4)]">
               Enter The Dream
            </button>
         </div>
      </section>

      {/* Features - Diamond Grid */}
      <section className="py-32 bg-zinc-950 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-amber-500 to-transparent"></div>
         
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-16">
               {[
                  { icon: Gem, title: "Crystal Decor", desc: "Authentic chandeliers and velvet furnishings." },
                  { icon: Wine, title: "Private Bar", desc: "Stocked with premium spirits and champagne." },
                  { icon: Music, title: "Grand Piano", desc: "Baby grand piano for evening entertainment." },
               ].map((item, i) => (
                  <div key={i} className="text-center group">
                     <div className="w-24 h-24 mx-auto mb-8 border-2 border-amber-500 rotate-45 flex items-center justify-center group-hover:bg-amber-900/20 transition duration-500">
                        <item.icon className="w-10 h-10 text-amber-400 -rotate-45" />
                     </div>
                     <h3 className="text-2xl font-serif text-amber-100 mb-4">{item.title}</h3>
                     <p className="text-amber-200/60 font-light tracking-wide">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Booking - Elegant Form */}
      <section id="book" className="py-32 bg-black relative">
         <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto border border-amber-900/50 bg-zinc-950/80 p-12 md:p-20 relative backdrop-blur-sm">
               {/* Corner Decorations */}
               <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500"></div>
               <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500"></div>
               <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500"></div>
               <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500"></div>

               <h2 className="text-4xl font-serif text-center text-amber-500 mb-12 uppercase tracking-widest">
                  Request Reservation
               </h2>

               <div className="space-y-8">
                  <div className="border-b border-amber-900 pb-2">
                     <label className="block text-xs text-amber-600 uppercase tracking-[0.2em] mb-2">Arrival Date</label>
                     <input 
                        type="date" 
                        className="w-full bg-transparent text-amber-100 text-xl font-serif outline-none placeholder-amber-900"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                     />
                  </div>
                  
                  <div className="flex justify-between items-center py-6">
                     <div>
                        <div className="text-3xl font-serif text-amber-100">₱5,000</div>
                        <div className="text-xs text-amber-600 uppercase tracking-widest">Per Evening</div>
                     </div>
                     <button className="bg-amber-600 hover:bg-amber-500 text-black font-bold px-8 py-3 tracking-widest uppercase transition duration-300">
                        Confirm
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <footer className="bg-black py-12 text-center border-t border-amber-900/30">
         <p className="text-amber-700 text-xs tracking-[0.3em] uppercase">© 2025 Gatsby Suites. Excellence Endures.</p>
      </footer>
    </div>
  );
}

export default CondoDesign8;
