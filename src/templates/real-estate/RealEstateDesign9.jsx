import React, { useState } from 'react';
import { Mountain, Trees, Tractor, Wind, Map, Sun, Compass, Phone, ArrowRight } from 'lucide-react';

function RealEstateDesign9() {
  return (
    <div className="min-h-screen bg-[#F5F2EA] font-sans text-[#3A352F]">
      {/* Top Bar */}
      <div className="bg-[#4A5D46] text-[#F5F2EA] py-3 px-6 text-sm font-medium tracking-wide">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Tractor className="w-4 h-4 mr-2" />
            Specializing in Farms, Ranches & Recreational Land
          </div>
          <a href="tel:555-123-4567" className="hover:text-white/80 transition-colors">(555) LAND-USA</a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="border-b border-[#D6CFC2] bg-[#F5F2EA]">
        <div className="container mx-auto px-6 h-24 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Mountain className="w-8 h-8 text-[#8B5E3C]" />
            <div>
              <div className="text-2xl font-serif font-bold leading-none text-[#2C2825]">TERRA<span className="text-[#8B5E3C]">FIRMA</span></div>
              <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#6B655D]">Land Brokerage</div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-10 font-bold text-sm uppercase tracking-wider text-[#5C564E]">
            <a href="#" className="hover:text-[#8B5E3C] transition-colors">Properties</a>
            <a href="#" className="hover:text-[#8B5E3C] transition-colors">Auctions</a>
            <a href="#" className="hover:text-[#8B5E3C] transition-colors">Agents</a>
            <a href="#" className="hover:text-[#8B5E3C] transition-colors">Land Values</a>
          </div>

          <button className="border-2 border-[#8B5E3C] text-[#8B5E3C] px-6 py-2.5 font-bold uppercase text-xs tracking-widest hover:bg-[#8B5E3C] hover:text-white transition-colors">
            List Your Land
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Rolling Hills" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
          <div className="inline-block border-b-2 border-white/50 pb-2 mb-6 text-sm font-bold uppercase tracking-[0.2em] shadow-sm">
            Own A Piece of America
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight shadow-sm">
            Find Your Freedom.
          </h1>
          
          <div className="bg-white/95 backdrop-blur rounded-sm p-4 shadow-2xl flex flex-col md:flex-row gap-4 max-w-3xl mx-auto text-left">
            <div className="flex-1">
              <label className="block text-xs font-bold text-[#6B655D] uppercase tracking-wide mb-1">State</label>
              <select className="w-full bg-transparent border-b border-[#D6CFC2] py-2 font-serif text-[#2C2825] outline-none">
                <option>Montana</option>
                <option>Texas</option>
                <option>Colorado</option>
                <option>Wyoming</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-xs font-bold text-[#6B655D] uppercase tracking-wide mb-1">Acreage</label>
              <select className="w-full bg-transparent border-b border-[#D6CFC2] py-2 font-serif text-[#2C2825] outline-none">
                <option>10 - 50 Acres</option>
                <option>50 - 100 Acres</option>
                <option>100 - 500 Acres</option>
                <option>500+ Acres</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-xs font-bold text-[#6B655D] uppercase tracking-wide mb-1">Type</label>
              <select className="w-full bg-transparent border-b border-[#D6CFC2] py-2 font-serif text-[#2C2825] outline-none">
                <option>Farm</option>
                <option>Ranch</option>
                <option>Hunting</option>
                <option>Timber</option>
              </select>
            </div>
            <button className="bg-[#8B5E3C] text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-[#7A5235] transition-colors">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* Featured Listings */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <Compass className="w-8 h-8 text-[#4A5D46] mb-4" />
            <h2 className="text-4xl font-serif font-bold text-[#2C2825] mb-4">Prime Acreage</h2>
            <div className="w-24 h-1 bg-[#8B5E3C]"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white border border-[#D6CFC2] group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1444858291040-58f756a3bdd6' : item === 2 ? '1472214103451-9374bd1c7dd1' : '1470071459604-3b5ec3a7fe05'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                    alt="Land" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#4A5D46] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    New Listing
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#2C2825] group-hover:text-[#8B5E3C] transition-colors">Elk Creek Ranch</h3>
                      <p className="text-sm text-[#6B655D] font-medium mt-1">Bozeman, MT</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#8B5E3C]">$2.4M</div>
                      <div className="text-xs text-[#6B655D] font-bold uppercase">320 Acres</div>
                    </div>
                  </div>
                  <p className="text-[#5C564E] text-sm leading-relaxed mb-6 border-t border-[#F5F2EA] pt-4">
                    Stunning mountain views, year-round creek, and abundant wildlife. Perfect for hunting lodge or cattle operation.
                  </p>
                  <button className="text-[#4A5D46] font-bold text-sm uppercase tracking-wider flex items-center hover:underline">
                    View Property <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-[#EBE7DD]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 text-center border-b-4 border-[#8B5E3C] hover:-translate-y-2 transition-transform duration-300">
              <Tractor className="w-10 h-10 mx-auto text-[#8B5E3C] mb-4" />
              <h3 className="font-serif font-bold text-lg mb-2">Farms</h3>
              <p className="text-xs text-[#6B655D]">Row Crop & Irrigated</p>
            </div>
            <div className="bg-white p-8 text-center border-b-4 border-[#4A5D46] hover:-translate-y-2 transition-transform duration-300">
              <Trees className="w-10 h-10 mx-auto text-[#4A5D46] mb-4" />
              <h3 className="font-serif font-bold text-lg mb-2">Timber</h3>
              <p className="text-xs text-[#6B655D]">Investment Grade Forestry</p>
            </div>
            <div className="bg-white p-8 text-center border-b-4 border-[#2C2825] hover:-translate-y-2 transition-transform duration-300">
              <Wind className="w-10 h-10 mx-auto text-[#2C2825] mb-4" />
              <h3 className="font-serif font-bold text-lg mb-2">Recreational</h3>
              <p className="text-xs text-[#6B655D]">Hunting & Fishing</p>
            </div>
            <div className="bg-white p-8 text-center border-b-4 border-[#D4A373] hover:-translate-y-2 transition-transform duration-300">
              <Sun className="w-10 h-10 mx-auto text-[#D4A373] mb-4" />
              <h3 className="font-serif font-bold text-lg mb-2">Ranches</h3>
              <p className="text-xs text-[#6B655D]">Cattle & Equestrian</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-[#2C2825] text-[#F5F2EA]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif font-bold mb-6">The Land Experts</h2>
              <p className="text-[#D6CFC2] text-lg mb-8 leading-relaxed">
                Buying land is different than buying a house. You need an expert who understands soil types, water rights, mineral rights, and conservation easements.
              </p>
              <p className="text-[#D6CFC2] text-lg mb-8 leading-relaxed">
                At TerraFirma, our agents aren't just salespeople; they are farmers, ranchers, and outdoorsmen. We know the land because we live the land.
              </p>
              <button className="bg-[#8B5E3C] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#7A5235] transition-colors">
                Meet Our Team
              </button>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute -inset-4 border-2 border-[#8B5E3C] opacity-50"></div>
               <img 
                 src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                 alt="Farmer" 
                 className="relative w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1816] text-[#8C857B] py-16 text-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-[#3A352F] pb-12">
            <div>
              <div className="text-white font-serif font-bold text-xl mb-4">TERRA<span className="text-[#8B5E3C]">FIRMA</span></div>
              <p className="leading-relaxed">Connecting people with the land they love since 1982.</p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-4">Contact</h4>
              <p>123 Ranch Road</p>
              <p>Big Sky, MT 59716</p>
              <p className="mt-2 text-[#8B5E3C]">info@terrafirma.com</p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Our Story</a></li>
                <li><a href="#" className="hover:text-white">Sold Properties</a></li>
                <li><a href="#" className="hover:text-white">Land Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-4">Newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Email" className="bg-[#2C2825] w-full p-2 text-white border border-[#3A352F] focus:border-[#8B5E3C] outline-none" />
                <button className="bg-[#8B5E3C] text-white px-4 hover:bg-[#7A5235]"><ArrowRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
          <div className="text-center text-xs uppercase tracking-widest">
            © 2024 TerraFirma Land Brokerage. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RealEstateDesign9;