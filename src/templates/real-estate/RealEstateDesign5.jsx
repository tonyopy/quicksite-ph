import React, { useState } from 'react';
import { Sun, Waves, Palmtree, Calendar, MapPin, Wifi, Star, ArrowRight, User } from 'lucide-react';

function RealEstateDesign5() {
  return (
    <div className="min-h-screen bg-cyan-50 font-sans text-cyan-900">
      {/* Navbar */}
      <nav className="absolute w-full top-0 z-50 p-6">
        <div className="container mx-auto flex justify-between items-center bg-white/90 backdrop-blur-md rounded-full px-8 py-4 shadow-lg">
          <div className="flex items-center space-x-2 text-cyan-600">
            <Palmtree className="w-6 h-6" />
            <span className="text-xl font-bold tracking-tight text-slate-800">COASTAL<span className="text-cyan-500">ESCAPES</span></span>
          </div>
          
          <div className="hidden md:flex space-x-8 font-bold text-sm text-slate-500">
            <a href="#" className="hover:text-cyan-500 transition-colors">Destinations</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">Experience</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">Hosts</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">Journal</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block font-bold text-sm text-slate-600 hover:text-cyan-600">Sign In</button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-screen min-h-[700px] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Beach House" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white pt-20">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
            <Sun className="w-4 h-4 mr-2 text-yellow-300" /> Luxury Vacation Rentals
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-lg">
            Wake Up to the <br/> Sound of Waves.
          </h1>
          
          {/* Booking Widget */}
          <div className="bg-white p-4 rounded-[2rem] shadow-2xl flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mt-8">
            <div className="flex-1 bg-cyan-50 rounded-2xl p-4 text-left cursor-pointer hover:bg-cyan-100 transition-colors group">
              <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wide mb-1 group-hover:text-cyan-600">Location</label>
              <div className="font-bold text-slate-800 text-lg flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-cyan-500" /> Malibu, CA
              </div>
            </div>
            <div className="flex-1 bg-cyan-50 rounded-2xl p-4 text-left cursor-pointer hover:bg-cyan-100 transition-colors group">
              <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wide mb-1 group-hover:text-cyan-600">Dates</label>
              <div className="font-bold text-slate-800 text-lg flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-cyan-500" /> Jun 12 - 19
              </div>
            </div>
            <div className="flex-1 bg-cyan-50 rounded-2xl p-4 text-left cursor-pointer hover:bg-cyan-100 transition-colors group">
              <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wide mb-1 group-hover:text-cyan-600">Guests</label>
              <div className="font-bold text-slate-800 text-lg flex items-center">
                <User className="w-5 h-5 mr-2 text-cyan-500" /> 2 Adults
              </div>
            </div>
            <button className="bg-cyan-600 text-white p-6 rounded-2xl font-bold hover:bg-cyan-700 transition-colors flex items-center justify-center shadow-lg shadow-cyan-200">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Featured Collections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Curated Collections</h2>
            <p className="text-slate-500">Handpicked homes for every type of traveler.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group cursor-pointer overflow-hidden rounded-3xl h-96">
              <img 
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Beachfront" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Oceanfront</h3>
                <p className="text-sm font-medium opacity-90">Step directly onto the sand.</p>
              </div>
            </div>

            <div className="relative group cursor-pointer overflow-hidden rounded-3xl h-96">
              <img 
                src="https://images.unsplash.com/photo-1572331165267-854da2b00ca1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Poolside" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Private Pools</h3>
                <p className="text-sm font-medium opacity-90">Your personal oasis awaits.</p>
              </div>
            </div>

            <div className="relative group cursor-pointer overflow-hidden rounded-3xl h-96">
              <img 
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Modern" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Architectural</h3>
                <p className="text-sm font-medium opacity-90">Stunning design and views.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listing Cards */}
      <section className="py-24 bg-cyan-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Trending Stays</h2>
            <a href="#" className="text-cyan-600 font-bold flex items-center hover:underline">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative aspect-square">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1502005229762-cf1afd391502' : item === 2 ? '1523217582562-09d0def993a6' : item === 3 ? '1484154218962-a1c002085d2f' : '1501183638710-841dd1904471'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                    alt="Property" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg text-xs font-bold flex items-center shadow-sm">
                    <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" /> 4.98
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-slate-900 truncate pr-2">The Glass House</h3>
                    <div className="text-xs text-slate-400 mt-1">Malibu</div>
                  </div>
                  <div className="text-sm text-slate-500 mb-3">4 guests • 2 bedrooms</div>
                  <div className="flex items-end">
                    <span className="text-lg font-bold text-slate-900">$450</span>
                    <span className="text-sm text-slate-500 mb-1 ml-1">/ night</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities / Experience */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">More Than Just a Stay</h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Every CoastalEscapes property comes with premium amenities and concierge support to ensure your vacation is perfect from start to finish.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-slate-700 font-medium">
                  <div className="bg-cyan-100 p-2 rounded-full mr-4 text-cyan-600"><Wifi className="w-5 h-5" /></div>
                  High-Speed WiFi & Workspaces
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <div className="bg-cyan-100 p-2 rounded-full mr-4 text-cyan-600"><Waves className="w-5 h-5" /></div>
                  Beach Essentials Included
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <div className="bg-cyan-100 p-2 rounded-full mr-4 text-cyan-600"><Star className="w-5 h-5" /></div>
                  24/7 Local Concierge
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8" alt="Relax" />
               <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Spa" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 text-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 text-white mb-6">
                <Palmtree className="w-6 h-6 text-cyan-500" />
                <span className="text-xl font-bold tracking-tight">COASTAL<span className="text-cyan-500">ESCAPES</span></span>
              </div>
              <p className="max-w-sm leading-relaxed">
                The world's leading luxury vacation rental platform. Discover extraordinary homes in the most beautiful destinations.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-cyan-500">Help Center</a></li>
                <li><a href="#" className="hover:text-cyan-500">Safety Information</a></li>
                <li><a href="#" className="hover:text-cyan-500">Cancellation Options</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-cyan-500">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-500">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-500">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div>&copy; 2024 CoastalEscapes Inc.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RealEstateDesign5;