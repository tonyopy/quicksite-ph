import React, { useState } from 'react';
import { Calendar, Disc, Radio, Tv, Coffee, Watch, Music, Camera, Armchair } from 'lucide-react';

function CondoDesign7() {
  const [bookingDate, setBookingDate] = useState('');

  return (
    <div className="min-h-screen bg-[#F0EAD6] font-sans text-stone-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#F0EAD6] border-b-4 border-teal-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-teal-700 uppercase transform -rotate-1">
            The<span className="text-amber-600">Retro</span>Pad
          </div>
          <button className="bg-amber-600 text-white px-6 py-2 rounded-sm font-bold shadow-[4px_4px_0px_0px_rgba(15,118,110,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(15,118,110,1)] transition-all border-2 border-amber-800">
            Book It, Baby!
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#F0EAD6] overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-black text-teal-800 leading-none mb-6">
              MID <br/>
              CENTURY <br/>
              <span className="text-amber-600">MODERN</span>
            </h1>
            <p className="text-xl font-medium text-stone-600 mb-8 max-w-md border-l-4 border-amber-500 pl-4">
              Step back into the stylish 60s. Teak furniture, geometric patterns, and serious Mad Men vibes.
            </p>
            <div className="bg-teal-700 text-[#F0EAD6] p-6 inline-block transform rotate-1 shadow-[8px_8px_0px_0px_rgba(217,119,6,1)] border-2 border-teal-900">
               <div className="font-bold text-2xl mb-1">₱3,800 / night</div>
               <div className="text-sm opacity-80 uppercase tracking-widest">Cocktails included</div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
             <div className="absolute top-0 -left-4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
             
             <div className="relative border-4 border-stone-900 p-2 bg-white transform -rotate-2 shadow-[12px_12px_0px_0px_rgba(15,118,110,1)]">
                <img 
                  src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80" 
                  alt="Mid Century Living Room" 
                  className="w-full h-[500px] object-cover grayscale-[20%] contrast-125"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-teal-800 text-[#F0EAD6]">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { icon: Disc, title: "Vinyl Player", desc: "Curated collection of jazz & soul records." },
                  { icon: Coffee, title: "Pour Over", desc: "Chemex coffee maker for the perfect brew." },
                  { icon: Armchair, title: "Eames Chair", desc: "Original 1968 lounge chair & ottoman." },
               ].map((item, i) => (
                  <div key={i} className="bg-teal-700 p-8 border-2 border-teal-900 shadow-[8px_8px_0px_0px_rgba(240,234,214,1)] hover:-translate-y-1 transition-transform">
                     <item.icon className="w-12 h-12 mb-4 text-amber-400" />
                     <h3 className="text-2xl font-black mb-2 uppercase">{item.title}</h3>
                     <p className="font-medium opacity-90">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 px-6 bg-[#F0EAD6]">
         <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-5xl font-black text-stone-900 mb-12 uppercase tracking-tight">
               Stay <span className="text-teal-700 underline decoration-wavy decoration-amber-500">Groovy</span>
            </h2>
            
            <div className="bg-white p-8 border-4 border-stone-900 shadow-[12px_12px_0px_0px_rgba(15,118,110,1)]">
               <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="text-left">
                     <label className="font-bold text-stone-900 uppercase text-sm block mb-2">Check In</label>
                     <input 
                        type="date" 
                        className="w-full bg-stone-100 border-2 border-stone-300 p-3 font-bold text-stone-900 focus:border-amber-500 outline-none"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                     />
                  </div>
                  <div className="text-left">
                     <label className="font-bold text-stone-900 uppercase text-sm block mb-2">Guests</label>
                     <select className="w-full bg-stone-100 border-2 border-stone-300 p-3 font-bold text-stone-900 focus:border-amber-500 outline-none">
                        <option>1 Cat</option>
                        <option>2 Cats</option>
                     </select>
                  </div>
               </div>
               <button className="w-full bg-amber-600 text-white font-black uppercase text-xl py-4 border-2 border-amber-800 shadow-[4px_4px_0px_0px_rgba(15,118,110,1)] hover:bg-amber-500 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(15,118,110,1)] transition-all">
                  Reserve Now
               </button>
            </div>
         </div>
      </section>

      <footer className="bg-teal-900 py-12 text-center text-[#F0EAD6] font-bold tracking-widest uppercase text-sm">
         © 2025 The Retro Pad. Stay Cool.
      </footer>
    </div>
  );
}

export default CondoDesign7;
