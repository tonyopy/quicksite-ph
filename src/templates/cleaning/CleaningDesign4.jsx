import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const CleaningDesign4 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-mono text-black bg-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold tracking-tighter uppercase">
              Clean<span className="bg-black text-white px-1">Co.</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wide">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Work</a>
              <a href="#" className="hover:underline">Pricing</a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 border-b border-black pb-20">
            <div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
                WE CLEAN <br/> SPACES.
              </h1>
              <p className="text-xl font-medium max-w-md mb-12">
                Minimalist cleaning for modern homes. No clutter. No mess. Just clean.
              </p>
              <button className="flex items-center gap-4 text-xl font-bold uppercase hover:gap-6 transition-all group">
                Book Appointment <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="bg-gray-100 aspect-square relative overflow-hidden flex items-center justify-center">
               <div className="text-center opacity-30">
                  <Home className="w-48 h-48 text-black mx-auto mb-4" />
                  <span className="text-black font-bold text-2xl uppercase tracking-tighter">Minimalist Living</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm font-bold uppercase mb-12 tracking-widest text-gray-500">What we do</div>
          <div className="space-y-0">
            {['Residential', 'Commercial', 'Move-in/out', 'Post-Reno'].map((service, i) => (
              <div key={i} className="border-t border-black py-8 flex justify-between items-center group hover:bg-gray-50 transition-colors cursor-pointer">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-gray-300 group-hover:text-black transition-colors">
                  {service}
                </h2>
                <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </div>
            ))}
            <div className="border-t border-black" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleaningDesign4;
