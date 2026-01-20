import React, { useState } from 'react';
import { Search, Map, Heart, Share2, Menu, X, ArrowUpRight, Filter } from 'lucide-react';

function RealEstateDesign2() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter flex items-center">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-2 rounded-lg">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            URBAN<span className="text-gray-400">KEY</span>
          </div>
          
          <div className="hidden md:flex space-x-8 font-bold text-sm">
            <a href="#" className="hover:text-gray-500 transition-colors">Buy</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Rent</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Sell</a>
            <a href="#" className="hover:text-gray-500 transition-colors">New Developments</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-sm font-bold hover:text-gray-500">Log In</button>
            <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-20">
        <div className="grid md:grid-cols-2 h-[calc(100vh-80px)]">
          <div className="p-12 md:p-24 flex flex-col justify-center bg-gray-50">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
              Find Your Place <br/>
              <span className="text-gray-400">In The City.</span>
            </h1>
            <p className="text-xl text-gray-500 mb-10 max-w-md font-medium">
              Curated lofts, condos, and apartments in the most vibrant neighborhoods.
            </p>
            
            <div className="bg-white p-2 rounded-2xl shadow-xl flex items-center border border-gray-100 max-w-lg">
              <Map className="w-6 h-6 text-gray-400 ml-4" />
              <input 
                type="text" 
                placeholder="Neighborhood, City, or Zip" 
                className="flex-1 p-4 outline-none font-bold placeholder-gray-300"
              />
              <button className="bg-black text-white p-4 rounded-xl hover:bg-gray-800 transition-colors">
                <Search className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mt-12 flex items-center space-x-8 text-sm font-bold text-gray-400">
              <span>Trusted by 50k+ renters</span>
              <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
              <span>Verified Listings</span>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Modern Apartment" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-12 left-12 bg-white/90 backdrop-blur p-6 rounded-2xl max-w-xs shadow-2xl">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Featured</div>
                  <h3 className="text-lg font-black">The Arts District Loft</h3>
                </div>
                <div className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-bold">$3,200/mo</div>
              </div>
              <div className="flex space-x-4 text-xs font-bold text-gray-500 mt-2">
                <span>1 Bed</span>
                <span>1.5 Bath</span>
                <span>1,200 sqft</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="border-y border-gray-100 sticky top-20 bg-white z-40">
        <div className="container mx-auto px-6 py-4 flex overflow-x-auto space-x-4 no-scrollbar">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-bold hover:border-black transition-colors whitespace-nowrap">
            <Filter className="w-4 h-4" /> <span>Filters</span>
          </button>
          {['Price Range', 'Beds & Baths', 'Home Type', 'Amenities', 'Move-in Date'].map((filter) => (
            <button key={filter} className="px-4 py-2 border border-gray-200 rounded-full text-sm font-bold hover:border-black transition-colors whitespace-nowrap text-gray-600">
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Listing Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-black mb-8">Newest Arrivals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[4/3]">
                  <img 
                    src={`https://images.unsplash.com/photo-${item % 2 === 0 ? '1502672260266-1c1ef2d93688' : '1502005229762-cf1afd391502'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                    alt="Listing" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 rounded-lg text-xs font-bold">
                    Open House Sat
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-bold">$4,500<span className="text-gray-400 text-sm font-medium">/mo</span></h3>
                    <div className="flex space-x-3 text-sm font-bold text-gray-500">
                      <span>2bd</span>
                      <span>2ba</span>
                      <span>950ft²</span>
                    </div>
                  </div>
                  <p className="text-gray-600 font-medium truncate">1234 W Sunset Blvd, Los Angeles, CA</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="bg-gray-100 text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Load More Listings
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-md">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <span className="font-black text-lg">URBANKEY</span>
            </div>
            <div className="flex space-x-6 text-sm font-bold text-gray-500">
              <a href="#" className="hover:text-black">About</a>
              <a href="#" className="hover:text-black">Careers</a>
              <a href="#" className="hover:text-black">Press</a>
              <a href="#" className="hover:text-black">Blog</a>
              <a href="#" className="hover:text-black">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-gray-400 font-medium">
            © 2024 UrbanKey Real Estate. All rights reserved. Equal Housing Opportunity.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RealEstateDesign2;