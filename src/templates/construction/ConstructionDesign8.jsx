import React, { useState } from 'react';
import { Grid, Layers, Hammer, Square, Maximize, Check, ArrowRight, ChevronRight, Star } from 'lucide-react';

function ConstructionDesign8() {
  return (
    <div className="min-h-screen bg-stone-100 font-sans text-stone-900">
      {/* Top Bar */}
      <div className="bg-stone-900 text-stone-300 py-3 px-6 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span>Showroom: 123 Main St, City</span>
            <span className="hidden md:inline">Mon-Sat: 9am - 6pm</span>
          </div>
          <div className="font-bold text-white">Call for Free Measure: (555) 321-4321</div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white py-6 px-6 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-stone-900 text-white p-2">
              <Grid className="w-6 h-6" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-xl tracking-widest uppercase">Mosaic</div>
              <div className="text-xs text-stone-500 tracking-wider uppercase">Flooring & Tile</div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-10 font-bold text-sm uppercase tracking-wide">
            <a href="#" className="hover:text-stone-600 transition-colors">Hardwood</a>
            <a href="#" className="hover:text-stone-600 transition-colors">Tile & Stone</a>
            <a href="#" className="hover:text-stone-600 transition-colors">Carpet</a>
            <a href="#" className="hover:text-stone-600 transition-colors">Luxury Vinyl</a>
          </nav>

          <button className="border-2 border-stone-900 px-6 py-2 font-bold uppercase text-sm tracking-wide hover:bg-stone-900 hover:text-white transition-colors">
            Visit Showroom
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581858726768-758a486ea860?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Herringbone Floor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/30"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white p-10 md:p-16 max-w-xl shadow-2xl">
            <div className="w-12 h-1 bg-stone-900 mb-8"></div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              The Foundation of <br/><span className="font-bold">Fine Living.</span>
            </h1>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Premium flooring solutions installed by master craftsmen. From timeless hardwood to modern large-format porcelain.
            </p>
            <button className="bg-stone-900 text-white px-8 py-4 w-full md:w-auto font-bold uppercase tracking-widest text-sm hover:bg-stone-800 transition-colors flex justify-center items-center group">
              Explore Collections <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-1">
            <div className="relative group h-96 overflow-hidden cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Hardwood" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Hardwood</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Oak, Maple, Walnut & Exotics</p>
              </div>
            </div>

            <div className="relative group h-96 overflow-hidden cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Tile" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Tile & Stone</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Porcelain, Marble, Slate & Mosaic</p>
              </div>
            </div>

            <div className="relative group h-96 overflow-hidden cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="LVP" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Luxury Vinyl</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Waterproof, Durable & Stylish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-stone-100 border-b border-stone-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-stone-200 bg-white">
              <Maximize className="w-10 h-10 mx-auto mb-4 text-stone-800" />
              <h4 className="font-bold uppercase tracking-wide mb-2">Free Measure</h4>
              <p className="text-sm text-stone-500">Professional in-home estimates</p>
            </div>
            <div className="p-6 border border-stone-200 bg-white">
              <Layers className="w-10 h-10 mx-auto mb-4 text-stone-800" />
              <h4 className="font-bold uppercase tracking-wide mb-2">Expert Install</h4>
              <p className="text-sm text-stone-500">Certified flooring craftsmen</p>
            </div>
            <div className="p-6 border border-stone-200 bg-white">
              <Square className="w-10 h-10 mx-auto mb-4 text-stone-800" />
              <h4 className="font-bold uppercase tracking-wide mb-2">Huge Selection</h4>
              <p className="text-sm text-stone-500">Over 5,000 samples in stock</p>
            </div>
            <div className="p-6 border border-stone-200 bg-white">
              <Star className="w-10 h-10 mx-auto mb-4 text-stone-800" />
              <h4 className="font-bold uppercase tracking-wide mb-2">Financing</h4>
              <p className="text-sm text-stone-500">0% interest for 12 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-stone-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="text-4xl font-light mb-4">Step Into <span className="font-bold">Quality.</span></h2>
              <p className="text-stone-400 max-w-md">
                Schedule your free in-home consultation today. We'll bring the showroom to you.
              </p>
            </div>
            <div className="md:w-1/2 bg-white text-stone-900 p-8">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="bg-stone-100 border-none p-4 w-full placeholder-stone-400 focus:ring-2 focus:ring-stone-900" />
                  <input type="text" placeholder="Phone" className="bg-stone-100 border-none p-4 w-full placeholder-stone-400 focus:ring-2 focus:ring-stone-900" />
                </div>
                <input type="email" placeholder="Email" className="bg-stone-100 border-none p-4 w-full placeholder-stone-400 focus:ring-2 focus:ring-stone-900" />
                <button className="bg-stone-900 text-white w-full py-4 font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors">
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-12 text-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4 font-bold text-stone-400">MOSAIC FLOORING & TILE</p>
          <p>&copy; 2024 Mosaic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ConstructionDesign8;