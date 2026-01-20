import React, { useState } from 'react';
import { Calendar, Wifi, Coffee, Sun, Wind, MapPin, Star, ArrowRight, Palmtree, Waves, CloudSun } from 'lucide-react';

function CondoDesign5() {
  const [bookingDate, setBookingDate] = useState('');

  return (
    <div className="min-h-screen bg-[#F0F7F4] font-serif text-emerald-950">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
             <Palmtree className="w-8 h-8 text-emerald-600" />
             <span className="text-2xl font-bold tracking-tight text-emerald-900">Casa<span className="text-emerald-600 font-light">Verde</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8 font-sans text-sm font-medium text-emerald-800">
             <a href="#retreat" className="hover:text-emerald-600">The Retreat</a>
             <a href="#rooms" className="hover:text-emerald-600">Rooms</a>
             <a href="#wellness" className="hover:text-emerald-600">Wellness</a>
             <a href="#book" className="px-6 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition shadow-lg shadow-emerald-200">Book Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
         <div className="absolute inset-0">
            <img 
               src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80" 
               alt="Tropical Villa" 
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/60 to-transparent"></div>
         </div>
         
         <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
            <div className="max-w-2xl text-white">
               <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-sans mb-6 border border-white/30">
                  🌴 Your Private Tropical Sanctuary
               </div>
               <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8 drop-shadow-lg">
                  Breathe in the <br/>
                  <span className="italic font-light text-emerald-200">Island Life</span>
               </h1>
               <p className="text-xl text-emerald-50 mb-10 font-sans leading-relaxed max-w-lg drop-shadow-md">
                  A lush, plant-filled oasis in the city. Bamboo accents, floor-to-ceiling glass, and a private balcony overlooking the skyline.
               </p>
               <button className="bg-white text-emerald-900 px-10 py-4 rounded-full font-sans font-bold hover:bg-emerald-50 transition transform hover:-translate-y-1 shadow-xl">
                  Check Availability
               </button>
            </div>
         </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 bg-[#F0F7F4]">
         <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-4xl font-bold text-emerald-900 mb-6">Slow Down & Reconnect</h2>
            <p className="text-lg text-emerald-700/80 font-sans leading-relaxed">
               Designed with biophilic principles, Casa Verde brings the outdoors in. 
               Every corner is curated to lower stress and boost creativity. 
               It's not just a place to stay—it's a place to heal.
            </p>
         </div>
      </section>

      {/* Image Grid */}
      <section className="pb-24 px-6 bg-[#F0F7F4]">
         <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-6 h-[600px]">
               <div className="md:col-span-2 relative rounded-3xl overflow-hidden group">
                  <img 
                     src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=80" 
                     alt="Living Room" 
                     className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 text-white font-sans font-bold text-xl drop-shadow-md">Living Area</div>
               </div>
               <div className="relative rounded-3xl overflow-hidden group">
                  <img 
                     src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80" 
                     alt="Balcony" 
                     className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 text-white font-sans font-bold text-xl drop-shadow-md">Private Balcony</div>
               </div>
            </div>
         </div>
      </section>

      {/* Amenities Cards */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
               {[
                  { icon: Sun, title: "Sun-Drenched", desc: "South-facing windows for all-day natural light." },
                  { icon: Wind, title: "Fresh Air", desc: "Cross-ventilation design & air purifying plants." },
                  { icon: Waves, title: "Pool Access", desc: "Resort-style swimming pool on the 5th floor." },
                  { icon: Coffee, title: "Organic Bar", desc: "Complimentary local coffee & herbal teas." },
               ].map((item, i) => (
                  <div key={i} className="bg-emerald-50/50 p-8 rounded-3xl hover:bg-emerald-100/50 transition duration-300">
                     <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mb-6 text-emerald-800">
                        <item.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold text-emerald-900 mb-3">{item.title}</h3>
                     <p className="text-emerald-700/70 font-sans text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Booking Card */}
      <section id="book" className="py-24 bg-[#F0F7F4] relative overflow-hidden">
         {/* Decorative Leaves */}
         <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
            <Palmtree className="w-96 h-96 text-emerald-900" />
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="bg-white rounded-[3rem] shadow-xl p-10 md:p-16 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
               <div className="flex-1">
                  <h2 className="text-4xl font-bold text-emerald-900 mb-6">Escape to Paradise</h2>
                  <p className="text-emerald-700/80 font-sans mb-8">
                     Ready to disconnect? Select your dates and let us handle the rest. 
                     Includes welcome fruit basket and spa vouchers.
                  </p>
                  <div className="flex items-center gap-4 text-emerald-800 font-bold">
                     <div className="flex -space-x-4">
                        {[1,2,3].map(i => (
                           <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                              <img src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`} alt="Guest" />
                           </div>
                        ))}
                     </div>
                     <span className="text-sm font-sans">Join 500+ happy guests</span>
                  </div>
               </div>

               <div className="w-full md:w-96 bg-emerald-900 rounded-3xl p-8 text-white">
                  <div className="flex justify-between items-end mb-8">
                     <div>
                        <div className="text-sm text-emerald-300 font-sans uppercase tracking-wider mb-1">Starting at</div>
                        <div className="text-4xl font-bold">₱4,500</div>
                     </div>
                     <div className="text-right">
                        <div className="flex text-yellow-400 text-sm">★★★★★</div>
                        <div className="text-xs text-emerald-300 font-sans">4.98 Rating</div>
                     </div>
                  </div>

                  <div className="space-y-4 mb-8">
                     <div className="bg-emerald-800/50 rounded-xl p-3 border border-emerald-700">
                        <label className="text-xs text-emerald-300 font-sans uppercase block mb-1">Dates</label>
                        <input 
                           type="date" 
                           className="bg-transparent w-full outline-none font-sans font-bold"
                           value={bookingDate}
                           onChange={(e) => setBookingDate(e.target.value)}
                        />
                     </div>
                     <button className="w-full bg-white text-emerald-900 font-bold py-4 rounded-xl font-sans hover:bg-emerald-50 transition flex justify-center items-center gap-2">
                        Reserve <ArrowRight className="w-4 h-4" />
                     </button>
                  </div>
                  <p className="text-center text-xs text-emerald-400/60 font-sans">No credit card required for inquiry</p>
               </div>
            </div>
         </div>
      </section>

      <footer className="bg-emerald-900 text-emerald-200 py-12 text-center font-sans text-sm">
         <div className="container mx-auto px-6">
            <p>&copy; 2025 Casa Verde. Grown with Love.</p>
         </div>
      </footer>
    </div>
  );
}

export default CondoDesign5;
