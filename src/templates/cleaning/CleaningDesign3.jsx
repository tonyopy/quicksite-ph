import React, { useState } from 'react';
import { Menu, X, Star, Crown, Diamond } from 'lucide-react';

const CleaningDesign3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-serif text-slate-300 bg-slate-950 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <div className="text-xl tracking-[0.2em] uppercase text-amber-500 font-light">
              The <span className="font-bold text-white">Maid</span>
            </div>
            <div className="hidden md:flex gap-12 text-xs font-bold tracking-widest uppercase text-slate-400">
              <a href="#" className="hover:text-amber-500 transition-colors">Services</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Concierge</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Membership</a>
            </div>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
           <Crown className="w-96 h-96 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="inline-flex items-center gap-2 text-amber-500 mb-8 border border-amber-500/30 px-6 py-2 rounded-full backdrop-blur-sm">
            <Crown className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">Premium Housekeeping</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
            Exquisite Care for <br/> <span className="italic text-amber-500">Fine Living Spaces.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Specialized cleaning for luxury residences, penthouses, and estates. 
            White-glove service with discreet, hotel-trained professionals.
          </p>
          <button className="bg-amber-600 text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-amber-700 transition-colors">
            Inquire for Membership
          </button>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          <div className="bg-slate-950 p-12 hover:bg-slate-900 transition-colors group text-center">
            <Diamond className="w-8 h-8 text-amber-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl text-white font-light mb-4">Fine Material Care</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Expert handling of marble, hardwood, silk, and antiques using specialized pH-neutral solutions.</p>
          </div>
          <div className="bg-slate-950 p-12 hover:bg-slate-900 transition-colors group text-center">
            <Star className="w-8 h-8 text-amber-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl text-white font-light mb-4">Hotel-Grade Setup</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Turndown service, fresh flower arrangements, and 5-star linen changing.</p>
          </div>
          <div className="bg-slate-950 p-12 hover:bg-slate-900 transition-colors group text-center">
            <Crown className="w-8 h-8 text-amber-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl text-white font-light mb-4">Dedicated Housekeeper</h3>
            <p className="text-slate-500 text-sm leading-relaxed">The same trusted professional for every visit, learning your specific preferences.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleaningDesign3;
