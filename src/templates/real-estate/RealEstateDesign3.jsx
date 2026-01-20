import React, { useState } from 'react';
import { Home, Coffee, Users, Heart, MapPin, Phone, Search, ArrowRight, Smile } from 'lucide-react';

function RealEstateDesign3() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Top Bar */}
      <div className="bg-emerald-700 text-white py-2 px-4 text-center text-sm font-medium">
        Helping families find their forever homes since 1995. ❤️
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-100 p-2 rounded-full">
              <Home className="w-6 h-6 text-emerald-700" />
            </div>
            <span className="text-2xl font-bold text-stone-700">Hearth<span className="text-emerald-700">&</span>Home</span>
          </div>
          
          <div className="hidden md:flex space-x-8 font-medium text-stone-600">
            <a href="#" className="hover:text-emerald-700 transition-colors">Buy</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Sell</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Communities</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Resources</a>
          </div>

          <button className="bg-emerald-700 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-200">
            Contact an Agent
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 leading-tight">
                Where Your Story <br/><span className="text-emerald-700">Begins.</span>
              </h1>
              <p className="text-xl text-stone-500 mb-8 leading-relaxed max-w-lg">
                We specialize in finding safe, friendly neighborhoods with top-rated schools and parks for your growing family.
              </p>
              
              <div className="bg-white p-2 rounded-full shadow-lg border border-stone-200 flex items-center max-w-md">
                <div className="pl-4 pr-2 text-stone-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  placeholder="Enter city, zip, or school district..." 
                  className="flex-1 py-3 outline-none text-stone-700 placeholder-stone-400"
                />
                <button className="bg-emerald-700 text-white p-3 rounded-full hover:bg-emerald-800 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute top-10 right-10 w-full h-full bg-emerald-50 rounded-[3rem] transform rotate-6 -z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1560518883-ce09059ee971?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                 alt="Happy Family Home" 
                 className="rounded-[3rem] shadow-xl w-full object-cover border-8 border-white"
               />
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg flex items-center space-x-3">
                 <div className="bg-yellow-100 p-2 rounded-full">
                   <Smile className="w-6 h-6 text-yellow-600" />
                 </div>
                 <div>
                   <div className="font-bold text-stone-800">Top Rated Schools</div>
                   <div className="text-xs text-stone-500">In every neighborhood we serve</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Community Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">More Than Just a House</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">We look for communities that offer the lifestyle you want for your family.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-700">Friendly Neighbors</h3>
              <p className="text-stone-500">Communities with active HOAs, block parties, and a true sense of belonging.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-700">Safe & Secure</h3>
              <p className="text-stone-500">Low crime rates and safe streets where kids can ride bikes and play outside.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-700">Local Amenities</h3>
              <p className="text-stone-500">Walkable access to parks, libraries, coffee shops, and grocery stores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Homes */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-stone-800">New Family Listings</h2>
            <a href="#" className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1568605114967-8130f3a36f89' : item === 2 ? '1570129477492-45c003edd2be' : '1564013799919-ab600027ffc6'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                    alt="Home" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Open House
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-2xl font-bold text-stone-800 mb-1">$450,000</div>
                  <div className="text-stone-500 mb-4 flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-1" /> Maplewood District
                  </div>
                  <div className="flex justify-between border-t border-stone-100 pt-4 text-stone-600 text-sm font-medium">
                    <span>3 Beds</span>
                    <span>2.5 Baths</span>
                    <span>2,100 Sq Ft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-emerald-800 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Join Our Neighborhood</h2>
          <p className="text-emerald-100 mb-8">
            Get the latest listings, school district updates, and community news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-4 rounded-full text-stone-800 outline-none focus:ring-4 focus:ring-emerald-500/50"
            />
            <button className="bg-yellow-400 text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-stone-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Home className="w-5 h-5 text-emerald-700" />
            <span className="font-bold text-stone-700">Hearth<span className="text-emerald-700">&</span>Home</span>
          </div>
          <div className="text-stone-500 text-sm">
            © 2024 Hearth & Home Realty. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-stone-400 hover:text-emerald-700 transition-colors"><span className="sr-only">Facebook</span>FB</a>
            <a href="#" className="text-stone-400 hover:text-emerald-700 transition-colors"><span className="sr-only">Instagram</span>IG</a>
            <a href="#" className="text-stone-400 hover:text-emerald-700 transition-colors"><span className="sr-only">Twitter</span>TW</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RealEstateDesign3;