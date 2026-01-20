import React, { useState } from 'react';
import { Calendar, CheckCircle, MapPin, Coffee, Wifi, Tv, UserCheck, Star, ArrowRight, Shield, Heart, Menu, X, Wind, Droplets, Utensils } from 'lucide-react';

function CondoDesign2() {
  const [bookingDate, setBookingDate] = useState('');
  const [guests, setGuests] = useState('2');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-900 font-sans text-neutral-100 selection:bg-amber-500 selection:text-neutral-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-neutral-900/90 backdrop-blur-md z-50 border-b border-neutral-800">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter uppercase text-white">
            Luxe<span className="text-amber-500">Loft</span>.
          </div>
          
          <div className="hidden md:flex items-center space-x-12 text-sm font-medium tracking-wide">
            <a href="#residence" className="hover:text-amber-500 transition duration-300">THE RESIDENCE</a>
            <a href="#amenities" className="hover:text-amber-500 transition duration-300">AMENITIES</a>
            <a href="#experience" className="hover:text-amber-500 transition duration-300">EXPERIENCE</a>
            <a href="#book" className="px-8 py-3 bg-white text-neutral-900 font-bold hover:bg-amber-500 transition duration-300">
              BOOK STAY
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="residence" className="relative h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512918760532-3ed64bc80c09?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Loft" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 text-amber-500 font-bold tracking-widest text-sm uppercase">
              <span className="w-12 h-[1px] bg-amber-500"></span>
              Penthouse Collection
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white">
              Elevated Living <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                Above the City
              </span>
            </h1>
            <p className="text-lg text-neutral-300 mb-10 leading-relaxed max-w-lg">
              A masterfully designed urban sanctuary featuring panoramic skyline views, bespoke interiors, and world-class amenities in the heart of BGC.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#book" className="group px-8 py-4 bg-amber-500 text-neutral-900 font-bold tracking-wide hover:bg-white transition duration-300 flex items-center justify-center gap-3">
                CHECK AVAILABILITY
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              <a href="#amenities" className="px-8 py-4 border border-white/20 text-white font-bold tracking-wide hover:bg-white/10 transition duration-300 text-center">
                EXPLORE SPACES
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">85<span className="text-amber-500 text-lg">sqm</span></div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Living Space</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">32<span className="text-amber-500 text-lg">nd</span></div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Floor Level</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">360<span className="text-amber-500 text-lg">°</span></div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">City Views</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenities - Dark Cards */}
      <section id="amenities" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-3 block">Unmatched Comfort</span>
              <h2 className="text-4xl font-bold text-white">Premium Amenities</h2>
            </div>
            <p className="text-neutral-400 max-w-md text-right md:text-left">
              Designed for the modern traveler who refuses to compromise on style or substance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Wifi, title: "Gigabit Internet", desc: "Dedicated fiber line for seamless work & streaming." },
              { icon: Tv, title: "Home Cinema", desc: "65\" OLED TV with surround sound system." },
              { icon: Coffee, title: "Espresso Bar", desc: "Premium beans and professional machine." },
              { icon: Wind, title: "Climate Control", desc: "Smart thermostat with air purification." },
              { icon: Utensils, title: "Chef's Kitchen", desc: "Fully equipped with German appliances." },
              { icon: Droplets, title: "Rain Shower", desc: "Spa-like bathroom with premium toiletries." },
              { icon: UserCheck, title: "24/7 Concierge", desc: "Secure access and lobby assistance." },
              { icon: Star, title: "Infinity Pool", desc: "Exclusive access to the sky deck pool." },
            ].map((item, index) => (
              <div key={index} className="group p-8 bg-neutral-800 hover:bg-neutral-700 transition duration-500 border border-neutral-800 hover:border-amber-500/30">
                <item.icon className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition duration-300" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Booking Section */}
      <section id="book" className="py-24 bg-neutral-800">
        <div className="container mx-auto px-6">
          <div className="bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-700">
            <div className="grid lg:grid-cols-2">
              
              {/* Image Side */}
              <div className="relative h-96 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80" 
                  alt="Luxury Bedroom" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-neutral-900/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-2">₱3,500</div>
                    <div className="text-amber-400 uppercase tracking-widest text-sm font-bold">Per Night</div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-2">Secure Your Dates</h2>
                <p className="text-neutral-400 mb-10">Experience the pinnacle of urban living. Book directly for the best rates.</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">Select Dates</label>
                    <input 
                      type="date" 
                      className="w-full bg-neutral-800 border border-neutral-600 text-white p-4 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">Guests</label>
                    <select 
                      className="w-full bg-neutral-800 border border-neutral-600 text-white p-4 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>

                  <div className="py-6 border-t border-neutral-800">
                    <div className="flex justify-between text-neutral-300 mb-2">
                      <span>Total Estimate</span>
                      <span className="text-white font-bold text-xl">₱4,000</span>
                    </div>
                    <p className="text-xs text-neutral-500">Includes taxes and cleaning fees.</p>
                  </div>

                  <button className="w-full py-5 bg-white text-neutral-900 font-bold uppercase tracking-wider hover:bg-amber-500 transition duration-300 shadow-lg">
                    Confirm Reservation
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-16 border-t border-neutral-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold tracking-tighter uppercase text-white">
              Luxe<span className="text-amber-500">Loft</span>.
            </div>
            <div className="flex space-x-8 text-neutral-500 text-sm font-medium">
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">Airbnb</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
            <p className="text-neutral-600 text-sm">© 2025 LuxeLoft Residences</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CondoDesign2;
