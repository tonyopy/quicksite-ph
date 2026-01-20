import React, { useState } from 'react';
import { Flower, Shovel, Sun, Droplets, Scissors, Check, Phone, ArrowRight, Leaf, Trees } from 'lucide-react';

function ConstructionDesign6() {
  return (
    <div className="min-h-screen bg-stone-50 font-serif text-stone-800">
      {/* Navigation */}
      <nav className="absolute w-full z-50 py-6 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 text-white drop-shadow-md">
            <Leaf className="w-8 h-8 text-green-400" />
            <span className="text-2xl font-bold tracking-wide">EVER<span className="text-green-400">GREEN</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-white font-sans text-sm font-bold tracking-wider drop-shadow-md">
            <a href="#" className="hover:text-green-400 transition-colors">Design</a>
            <a href="#" className="hover:text-green-400 transition-colors">Installation</a>
            <a href="#" className="hover:text-green-400 transition-colors">Maintenance</a>
            <a href="#" className="bg-white text-green-900 px-6 py-2 rounded-full hover:bg-green-50 transition-colors">
              Get Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Beautiful Garden" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <div className="font-sans font-bold text-green-400 tracking-widest uppercase mb-4 text-sm md:text-base animate-fade-in-up">
            Award-Winning Landscape Architecture
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight animate-fade-in-up delay-100">
            Nature, <br/> Curated.
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-10 max-w-2xl mx-auto font-sans font-light animate-fade-in-up delay-200">
            We design and build outdoor living spaces that connect you with nature and enhance your home's beauty.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
            <button className="bg-green-600 text-white px-8 py-4 rounded-full font-sans font-bold hover:bg-green-700 transition-colors shadow-lg">
              Start Your Project
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-sans font-bold hover:bg-white/20 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium text-green-900 mb-6">Our Expertise</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-green-100 transition-colors">
                <Sun className="w-10 h-10 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 font-sans">Landscape Design</h3>
              <p className="text-stone-600 leading-relaxed font-sans">
                Comprehensive 3D planning and plant selection tailored to your soil, light, and lifestyle needs.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-green-100 transition-colors">
                <Shovel className="w-10 h-10 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 font-sans">Hardscaping</h3>
              <p className="text-stone-600 leading-relaxed font-sans">
                Elegant patios, walkways, retaining walls, and outdoor kitchens built with natural stone and pavers.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-green-100 transition-colors">
                <Scissors className="w-10 h-10 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 font-sans">Maintenance</h3>
              <p className="text-stone-600 leading-relaxed font-sans">
                Seasonal cleanups, pruning, lawn care, and irrigation management to keep your garden thriving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery/Feature */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1592722054041-0f5313a48437?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Garden Path" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1598902106734-2e917d28e7f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Patio" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-medium text-green-900 mb-6">Create Your Sanctuary</h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed font-sans">
                Your outdoor space should be an extension of your home—a place to relax, entertain, and reconnect. We bring artistry and horticulture together to create sustainable, beautiful landscapes that grow with you.
              </p>
              <ul className="space-y-4 font-sans mb-8">
                <li className="flex items-center text-stone-700"><Check className="w-5 h-5 text-green-500 mr-3" /> Native Plant Specialists</li>
                <li className="flex items-center text-stone-700"><Check className="w-5 h-5 text-green-500 mr-3" /> Eco-Friendly Irrigation</li>
                <li className="flex items-center text-stone-700"><Check className="w-5 h-5 text-green-500 mr-3" /> Certified Arborists on Staff</li>
              </ul>
              <button className="text-green-700 font-bold font-sans border-b-2 border-green-700 pb-1 hover:text-green-800 hover:border-green-800 transition-colors inline-flex items-center">
                Learn About Our Process <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-20 text-center px-6">
        <div className="container mx-auto max-w-3xl">
          <Flower className="w-12 h-12 mx-auto mb-6 text-green-400 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Ready to Transform Your Yard?</h2>
          <p className="text-green-100 text-lg mb-10 font-sans">
            Schedule a consultation with our landscape architects today.
          </p>
          <button className="bg-white text-green-900 px-10 py-4 rounded-full font-sans font-bold hover:bg-green-50 transition-colors shadow-xl">
            Book Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 font-sans text-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Leaf className="w-5 h-5 text-green-500" />
            <span className="text-lg font-bold text-white tracking-wide">EVER<span className="text-green-500">GREEN</span></span>
          </div>
          <div>
            &copy; 2024 Evergreen Landscapes.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ConstructionDesign6;