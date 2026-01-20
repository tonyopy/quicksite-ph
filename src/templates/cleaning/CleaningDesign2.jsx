import React, { useState } from 'react';
import { Menu, X, Leaf, Droplets, Recycle, Sprout } from 'lucide-react';

const CleaningDesign2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-stone-600 bg-[#F7F9F4] min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#F7F9F4]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <div className="text-2xl font-medium tracking-tight text-emerald-800 flex items-center gap-2">
              <Leaf className="w-6 h-6 text-emerald-600" />
              <span>Pure<span className="font-bold">Green</span></span>
            </div>
            <div className="hidden md:flex gap-10 font-medium text-emerald-800/80">
              <a href="#" className="hover:text-emerald-700">Our Mission</a>
              <a href="#" className="hover:text-emerald-700">Products</a>
              <a href="#" className="hover:text-emerald-700">Book Clean</a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">100% Non-Toxic & Organic</span>
            <h1 className="text-5xl md:text-6xl font-medium text-stone-800 mb-8 leading-[1.1]">
              A Clean Home, <br/>
              <span className="text-emerald-700 italic">Naturally.</span>
            </h1>
            <p className="text-lg text-stone-500 mb-10 leading-relaxed">
              We use only plant-based, biodegradable cleaning products. 
              Safe for your kids, safe for your pets, and safe for the planet.
            </p>
            <button className="bg-emerald-700 text-white px-10 py-4 rounded-full font-medium hover:bg-emerald-800 transition-colors">
              Schedule Green Clean
            </button>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-emerald-100 rounded-full blur-3xl opacity-50 transform translate-x-10 translate-y-10"></div>
            <div className="relative rounded-[3rem] shadow-xl w-full h-[400px] bg-emerald-50 flex items-center justify-center overflow-hidden">
               <div className="text-center opacity-50">
                  <Leaf className="w-32 h-32 text-emerald-600 mx-auto mb-4" />
                  <span className="text-emerald-800 font-bold text-xl tracking-wider uppercase">Eco-Friendly Clean</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-4">Chemical-Free</h3>
              <p className="text-stone-500 leading-relaxed">No harsh chemicals, ammonia, or bleach. Just the power of nature.</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <Recycle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-4">Zero Waste</h3>
              <p className="text-stone-500 leading-relaxed">We use reusable glass bottles and washable microfiber cloths.</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <Sprout className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-4">Plant-Based</h3>
              <p className="text-stone-500 leading-relaxed">Formulas derived from citrus, pine, and essential oils.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-emerald-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Breathe easier with a toxin-free home.</h2>
          <p className="text-emerald-200 mb-10 text-lg">Join over 500+ families in Manila switching to eco-friendly cleaning.</p>
          <button className="bg-white text-emerald-900 px-10 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default CleaningDesign2;
