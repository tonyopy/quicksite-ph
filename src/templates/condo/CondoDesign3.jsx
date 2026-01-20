import React, { useState } from 'react';
import { Calendar, Wifi, Tv, Coffee, UserCheck, Star, MapPin, Shield, ArrowRight, Wind, Sun, Flower2 } from 'lucide-react';

function CondoDesign3() {
  const [bookingDate, setBookingDate] = useState('');
  const [guests, setGuests] = useState('2');

  return (
    <div className="min-h-screen bg-[#F5F5F0] font-sans text-stone-800">
      {/* Navbar */}
      <nav className="fixed w-full bg-[#F5F5F0]/90 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="container mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-xl tracking-[0.2em] font-light uppercase border-b border-stone-800 pb-1">
            Enso Living
          </div>
          <div className="hidden md:flex space-x-12 text-sm tracking-widest uppercase text-stone-500">
            <a href="#space" className="hover:text-stone-900 transition">The Space</a>
            <a href="#amenities" className="hover:text-stone-900 transition">Amenities</a>
            <a href="#reserve" className="hover:text-stone-900 transition">Reserve</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="space" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Zen Interior" 
                  className="w-full h-[600px] object-cover grayscale-[20%] hover:grayscale-0 transition duration-700 ease-in-out"
                />
                <div className="absolute bottom-0 left-0 bg-white p-6">
                   <p className="font-serif italic text-2xl">"Simplicity is the ultimate sophistication."</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <span className="text-xs font-bold tracking-[0.3em] text-stone-400 uppercase">Japandi Style</span>
              <h1 className="text-6xl font-light leading-tight">
                Find Your <br/>
                <span className="font-serif italic">Inner Calm</span>
              </h1>
              <p className="text-lg text-stone-500 leading-relaxed font-light max-w-md">
                A thoughtfully curated space designed for mindfulness and rest. Natural materials, soft light, and silence in the heart of the city.
              </p>
              <div className="flex gap-8 pt-4">
                <div className="text-center">
                  <div className="font-serif text-3xl">1</div>
                  <div className="text-xs uppercase tracking-widest text-stone-400 mt-1">Bedroom</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-3xl">55</div>
                  <div className="text-xs uppercase tracking-widest text-stone-400 mt-1">SQ Meters</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-3xl">∞</div>
                  <div className="text-xs uppercase tracking-widest text-stone-400 mt-1">Peace</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities - Minimal List */}
      <section id="amenities" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light mb-4">Essentia</h2>
              <div className="w-12 h-px bg-stone-300 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
              {[
                { icon: Wifi, label: "High-Speed Fiber" },
                { icon: Coffee, label: "Tea Ceremony Set" },
                { icon: Wind, label: "Air Purification" },
                { icon: Sun, label: "Natural Light" },
                { icon: Flower2, label: "Indoor Garden" },
                { icon: UserCheck, label: "Self Check-in" },
                { icon: Shield, label: "Private Security" },
                { icon: Star, label: "Premium Linens" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group cursor-default">
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F0] flex items-center justify-center mb-4 group-hover:bg-stone-800 transition duration-500">
                    <item.icon className="w-6 h-6 text-stone-600 group-hover:text-white transition duration-500" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm tracking-wide text-stone-600 uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking - Horizontal Strip */}
      <section id="reserve" className="py-24 bg-[#EAEAE5]">
        <div className="container mx-auto px-6">
          <div className="bg-white p-10 shadow-sm max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 items-end">
              <div className="flex-1 w-full">
                <h3 className="text-2xl font-light mb-6">Reserve Sanctuary</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-b border-stone-300 pb-2">
                    <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Arrival</label>
                    <input 
                      type="date" 
                      className="w-full outline-none text-stone-800 font-serif text-xl bg-transparent"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                    />
                  </div>
                  <div className="border-b border-stone-300 pb-2">
                    <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Guests</label>
                    <select 
                      className="w-full outline-none text-stone-800 font-serif text-xl bg-transparent"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-full lg:w-auto flex flex-col items-end">
                <div className="text-right mb-6">
                   <span className="text-3xl font-serif">₱2,800</span>
                   <span className="text-sm text-stone-400 ml-2">/ NIGHT</span>
                </div>
                <button className="bg-stone-900 text-white px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-stone-700 transition w-full lg:w-auto">
                  Confirm Stay
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

       <footer className="bg-white py-12 text-center border-t border-stone-100">
          <p className="text-xs uppercase tracking-widest text-stone-400">© 2025 Enso Living. Silence is Luxury.</p>
       </footer>
    </div>
  );
}

export default CondoDesign3;
