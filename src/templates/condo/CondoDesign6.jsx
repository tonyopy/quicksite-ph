import React, { useState } from 'react';
import { Coffee, Wifi, BookOpen, Armchair, Sun, Wind, Home, Star, ArrowRight } from 'lucide-react';

function CondoDesign6() {
  const [bookingDate, setBookingDate] = useState('');

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-slate-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-stone-100">
        <div className="container mx-auto px-8 py-5 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight text-slate-700">
            Hygge<span className="font-light">Home</span>
          </div>
          <div className="hidden md:flex space-x-10 text-sm font-medium text-slate-500">
            <a href="#home" className="hover:text-slate-800 transition">Our Home</a>
            <a href="#comfort" className="hover:text-slate-800 transition">Comforts</a>
            <a href="#stay" className="bg-stone-200 text-stone-800 px-5 py-2 rounded-full hover:bg-stone-300 transition">Book Stay</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-block px-4 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider">
              Nordic Simplicity
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-800">
              Warmth in <br/>
              Every Corner
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">
              A cozy, light-filled apartment featuring warm oak floors, soft woolen textures, and the simple joy of living well.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition shadow-lg shadow-slate-200">
                Check Availability
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition">
                See Photos
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-6 border-t border-slate-100">
               <div>
                  <div className="text-2xl font-bold text-slate-800">98%</div>
                  <div className="text-xs text-slate-400">5-Star Reviews</div>
               </div>
               <div>
                  <div className="text-2xl font-bold text-slate-800">24h</div>
                  <div className="text-xs text-slate-400">Guest Support</div>
               </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
             <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-stone-200">
                <img 
                  src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80" 
                  alt="Scandi Bedroom" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="font-serif italic text-slate-600 text-lg">"The most relaxing weekend I've had in years."</p>
                <div className="flex items-center gap-2 mt-3">
                   <div className="w-8 h-8 bg-orange-100 rounded-full"></div>
                   <span className="text-xs font-bold text-slate-800">Sarah J.</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Comforts Grid */}
      <section id="comfort" className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Simple Pleasures</h2>
              <p className="text-slate-500">Everything you need to feel perfectly at home.</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                 { icon: Sun, title: "Natural Light", color: "bg-yellow-50 text-yellow-600" },
                 { icon: Coffee, title: "Fika Station", color: "bg-amber-50 text-amber-700" },
                 { icon: Armchair, title: "Cozy Nooks", color: "bg-stone-100 text-stone-600" },
                 { icon: Wifi, title: "Fast WiFi", color: "bg-blue-50 text-blue-600" },
                 { icon: BookOpen, title: "Library", color: "bg-rose-50 text-rose-600" },
                 { icon: Wind, title: "Fresh Air", color: "bg-teal-50 text-teal-600" },
                 { icon: Home, title: "Full Kitchen", color: "bg-slate-100 text-slate-600" },
                 { icon: Star, title: "Superhost", color: "bg-orange-50 text-orange-500" },
              ].map((item, i) => (
                 <div key={i} className="p-6 rounded-2xl bg-[#FAF9F6] hover:bg-white hover:shadow-lg transition duration-300 border border-transparent hover:border-stone-100">
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                       <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-700">{item.title}</h3>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="stay" className="py-24 px-6 bg-[#FAF9F6]">
         <div className="container mx-auto max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="p-10 md:p-16 flex-1">
               <h2 className="text-3xl font-bold text-slate-800 mb-6">Stay Awhile</h2>
               <p className="text-slate-500 mb-8">
                  Whether for a weekend reset or a month-long workation, our doors are open.
               </p>
               
               <div className="space-y-4">
                  <div>
                     <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Check-in Date</label>
                     <input 
                        type="date" 
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-slate-800 outline-none focus:ring-2 focus:ring-stone-300 transition"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                     />
                  </div>
                  <button className="w-full py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition flex items-center justify-center gap-2">
                     Reserve Now <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </div>
            <div className="bg-stone-200 w-full md:w-80 relative">
               <img 
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" 
                  alt="Cozy Chair" 
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-slate-900/10"></div>
               <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-3xl font-bold">₱3,000</div>
                  <div className="text-sm opacity-90">per night</div>
               </div>
            </div>
         </div>
      </section>
      
      <footer className="py-12 text-center text-slate-400 text-sm bg-white">
         <p>© 2025 HyggeHome. Live Simply.</p>
      </footer>
    </div>
  );
}

export default CondoDesign6;
