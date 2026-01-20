import React, { useState } from 'react';
import { Menu, X, Star, Wine, CheckCircle, Shield } from 'lucide-react';

const TransientDesign5 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-slate-300 bg-slate-950 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <div className="text-2xl font-serif text-white tracking-widest uppercase">
              The <span className="text-amber-400">Grand</span>
            </div>
            <div className="hidden md:flex gap-10 text-xs font-bold tracking-widest uppercase text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Suites</a>
              <a href="#" className="hover:text-white transition-colors">Amenities</a>
              <a href="#" className="hover:text-white transition-colors">Concierge</a>
            </div>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <div className="inline-block border border-amber-400/30 px-4 py-2 rounded-full text-amber-400 text-xs font-bold tracking-widest uppercase mb-8">
            The Premium Collection
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
            Elevated Living <br/> <span className="italic text-amber-400">Redefined.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-12 font-light">
            Experience hotel-grade luxury with the privacy of a home. 
            Exclusive access, premium amenities, and unparalleled views.
          </p>
          <button className="bg-amber-400 text-black px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors">
            Reserve Suite
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="p-8 border border-white/5 rounded-2xl hover:border-amber-400/30 transition-colors">
            <Wine className="w-10 h-10 text-amber-400 mx-auto mb-6" />
            <h3 className="text-xl font-serif text-white mb-4">Welcome Amenities</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Complimentary wine bottle and artisan chocolates upon arrival.</p>
          </div>
          <div className="p-8 border border-white/5 rounded-2xl hover:border-amber-400/30 transition-colors">
            <Shield className="w-10 h-10 text-amber-400 mx-auto mb-6" />
            <h3 className="text-xl font-serif text-white mb-4">Premium Security</h3>
            <p className="text-slate-500 text-sm leading-relaxed">24/7 Concierge, private elevator access, and digital smart locks.</p>
          </div>
          <div className="p-8 border border-white/5 rounded-2xl hover:border-amber-400/30 transition-colors">
            <Star className="w-10 h-10 text-amber-400 mx-auto mb-6" />
            <h3 className="text-xl font-serif text-white mb-4">5-Star Bedding</h3>
            <p className="text-slate-500 text-sm leading-relaxed">1000-thread count Egyptian cotton sheets and memory foam mattresses.</p>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-amber-400/30" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-amber-400/30" />
            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div>
            <h2 className="text-4xl font-serif text-white mb-8">
              Designed for the <br/> <span className="text-amber-400 italic">Discerning Traveler</span>
            </h2>
            <div className="space-y-6">
              {[
                "Marble-clad bathrooms with rain showers",
                "Bang & Olufsen audio systems",
                "Chef-grade kitchen appliances",
                "Panoramic skyline views"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-slate-300 font-light">{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-12 text-amber-400 text-sm font-bold tracking-widest uppercase border-b border-amber-400 pb-1 hover:text-white hover:border-white transition-colors">
              View Floor Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransientDesign5;
