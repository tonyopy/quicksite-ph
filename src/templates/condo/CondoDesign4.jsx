import React, { useState } from 'react';
import { Calendar, Wifi, Tv, Coffee, UserCheck, Star, MapPin, Shield, Zap, Anchor, Box } from 'lucide-react';

function CondoDesign4() {
  const [bookingDate, setBookingDate] = useState('');

  return (
    <div className="min-h-screen bg-zinc-900 font-sans text-zinc-100 selection:bg-orange-500 selection:text-black">
      {/* Navbar */}
      <nav className="fixed w-full bg-zinc-900/90 backdrop-blur-md z-50 border-b border-zinc-800">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter uppercase italic">
            LOFT<span className="text-orange-600">.WERKS</span>
          </div>
          <button className="bg-white text-black px-6 py-2 font-bold text-sm uppercase hover:bg-orange-600 hover:text-white transition-colors duration-300">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
         <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1200&q=80" 
              alt="Industrial Loft" 
              className="w-full h-full object-cover"
            />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent z-10"></div>
         
         <div className="container mx-auto px-6 relative z-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                 <span className="bg-orange-600 text-white px-3 py-1 text-xs font-bold uppercase">New Listing</span>
                 <span className="text-zinc-400 text-sm font-mono uppercase tracking-widest">Unit 402 // The Foundry</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 text-white">
                RAW <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 to-zinc-600">CONCRETE</span> <br/>
                & REFINED
              </h1>
              <p className="text-xl text-zinc-400 max-w-lg mb-10 font-mono">
                Exposed brick, steel beams, and floor-to-ceiling windows. A New York style industrial loft in the heart of Manila.
              </p>
              
              <div className="flex gap-4">
                 <div className="p-4 bg-zinc-800 border border-zinc-700 w-32">
                    <div className="text-orange-500 font-bold text-2xl">4.5m</div>
                    <div className="text-xs text-zinc-500 uppercase">Ceiling</div>
                 </div>
                 <div className="p-4 bg-zinc-800 border border-zinc-700 w-32">
                    <div className="text-orange-500 font-bold text-2xl">1Gbps</div>
                    <div className="text-xs text-zinc-500 uppercase">Internet</div>
                 </div>
              </div>
            </div>
         </div>
      </section>

      {/* Grid Layout Features */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
              {/* Feature 1 */}
              <div className="bg-zinc-800 p-10 hover:bg-zinc-700 transition duration-300 group">
                 <Zap className="w-10 h-10 text-zinc-500 group-hover:text-orange-500 mb-6 transition-colors" />
                 <h3 className="text-2xl font-bold mb-4">Smart Automation</h3>
                 <p className="text-zinc-400 leading-relaxed">Voice controlled lighting, blinds, and climate. The entire loft responds to your command.</p>
              </div>
              {/* Feature 2 */}
              <div className="bg-zinc-800 p-10 hover:bg-zinc-700 transition duration-300 group border-l border-zinc-900 md:border-l-0">
                 <Coffee className="w-10 h-10 text-zinc-500 group-hover:text-orange-500 mb-6 transition-colors" />
                 <h3 className="text-2xl font-bold mb-4">Artisan Coffee</h3>
                 <p className="text-zinc-400 leading-relaxed">Professional espresso setup with locally roasted beans provided fresh for every stay.</p>
              </div>
              {/* Feature 3 */}
              <div className="bg-zinc-800 p-10 hover:bg-zinc-700 transition duration-300 group border-l border-zinc-900 lg:border-l-0">
                 <Box className="w-10 h-10 text-zinc-500 group-hover:text-orange-500 mb-6 transition-colors" />
                 <h3 className="text-2xl font-bold mb-4">Workstation</h3>
                 <p className="text-zinc-400 leading-relaxed">Herman Miller chair and solid oak desk. Designed for deep work sessions.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Booking Form - Brutalist Style */}
      <section className="py-24 bg-orange-600">
         <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-black p-12 border-4 border-white shadow-[16px_16px_0px_0px_rgba(255,255,255,0.2)]">
               <h2 className="text-4xl font-black text-white uppercase mb-8">Secure The Space</h2>
               
               <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                     <label className="block text-zinc-500 font-mono text-sm mb-2 uppercase">Check In</label>
                     <input 
                        type="date" 
                        className="w-full bg-zinc-900 border-2 border-zinc-700 p-4 text-white font-mono focus:border-orange-500 outline-none transition"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                     />
                  </div>
                  <div>
                     <label className="block text-zinc-500 font-mono text-sm mb-2 uppercase">Guests</label>
                     <select className="w-full bg-zinc-900 border-2 border-zinc-700 p-4 text-white font-mono focus:border-orange-500 outline-none transition">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                     </select>
                  </div>
               </div>
               
               <div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-800 pt-8">
                  <div className="text-3xl font-mono font-bold text-white mb-6 md:mb-0">
                     ₱3,200 <span className="text-sm text-zinc-500 font-normal">/ night</span>
                  </div>
                  <button className="w-full md:w-auto bg-white text-black px-12 py-5 font-black uppercase tracking-widest hover:bg-orange-600 hover:text-white transition duration-300">
                     Confirm
                  </button>
               </div>
            </div>
         </div>
      </section>

      <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
         <div className="container mx-auto px-6 text-center font-mono text-zinc-600 text-sm">
            LOFT.WERKS © 2025 // INDUSTRIAL HOSPITALITY
         </div>
      </footer>
    </div>
  );
}

export default CondoDesign4;
