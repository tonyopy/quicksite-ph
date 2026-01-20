import React, { useState } from 'react';
import { Menu, X, Flame, Trees, Coffee, Mountain } from 'lucide-react';

const TransientDesign8 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-serif text-orange-100 bg-stone-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-stone-900/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-xl font-bold tracking-widest text-amber-500 uppercase flex items-center gap-2">
              <Trees className="w-5 h-5" />
              The Cabin
            </div>
            <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-stone-400">
              <a href="#" className="hover:text-amber-500 transition-colors">Interiors</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Surroundings</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Book</a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Escape to the <br/> <span className="text-amber-500">Mountains.</span>
          </h1>
          <p className="text-xl text-stone-300 mb-10 font-light max-w-xl mx-auto drop-shadow-md">
            Warm fires, cold breeze, and the smell of pine. Your rustic retreat awaits.
          </p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-sm text-sm tracking-widest uppercase hover:bg-amber-700 transition-colors">
            Check Availability
          </button>
        </div>
      </section>

      {/* Cozy Features */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-4 text-amber-500">
                  <Flame className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-widest text-white">Fireplace</h3>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Gather around our authentic stone fireplace. Complimentary firewood provided for your first night.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4 text-amber-500">
                  <Coffee className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-widest text-white">Hot Cocoa Bar</h3>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Unlimited hot chocolate and locally sourced coffee beans. Perfect for those chilly mornings on the deck.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4 text-amber-500">
                  <Mountain className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-widest text-white">Scenic Views</h3>
                </div>
                <p className="text-stone-400 leading-relaxed">
                  Unobstructed views of the pine forest and mountain ridges from every window.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-64 object-cover rounded-sm opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-64 object-cover rounded-sm opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransientDesign8;
