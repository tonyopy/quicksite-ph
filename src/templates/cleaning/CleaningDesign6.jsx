import React, { useState } from 'react';
import { Menu, X, HardHat, Factory, Building2, Truck } from 'lucide-react';

const CleaningDesign6 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-300 bg-zinc-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-zinc-900 border-b border-orange-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-black text-white uppercase tracking-tighter">
              Iron<span className="text-orange-500">Clad</span>
            </div>
            <div className="hidden md:flex gap-8 font-bold text-sm uppercase text-gray-400">
              <a href="#" className="hover:text-orange-500">Industrial</a>
              <a href="#" className="hover:text-orange-500">Commercial</a>
              <a href="#" className="bg-orange-600 text-white px-6 py-2 hover:bg-orange-700 transition-colors skew-x-[-10deg]">
                Request Quote
              </a>
            </div>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-zinc-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest mb-6">
              <HardHat className="w-5 h-5" />
              Heavy Duty Cleaning Services
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none uppercase">
              Built for <br/> the <span className="text-orange-500">Toughest</span> Jobs.
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-lg">
              Specialized cleaning for warehouses, factories, construction sites, and corporate buildings.
              OSHA compliant and fully insured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-600 text-white px-8 py-4 font-black uppercase tracking-wider hover:bg-orange-700 transition-colors border-b-4 border-orange-800 active:border-b-0 active:translate-y-1">
                Get Industrial Quote
              </button>
              <button className="border-2 border-gray-600 text-white px-8 py-4 font-bold uppercase tracking-wider hover:border-white transition-colors">
                View Capabilities
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border-4 border-orange-600 translate-x-4 translate-y-4"></div>
            <div className="relative w-full h-[400px] bg-zinc-700 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
               <div className="text-center opacity-40">
                  <Factory className="w-32 h-32 text-orange-500 mx-auto mb-4" />
                  <span className="text-orange-500 font-black text-2xl uppercase tracking-widest">Heavy Industry</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-8 border-l-4 border-orange-500">
              <Factory className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">Warehouse</h3>
              <p className="text-gray-400">Floor scrubbing, high dusting, and machinery cleaning.</p>
            </div>
            <div className="bg-zinc-800 p-8 border-l-4 border-orange-500">
              <Building2 className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">Office Complex</h3>
              <p className="text-gray-400">Janitorial services for large scale corporate towers.</p>
            </div>
            <div className="bg-zinc-800 p-8 border-l-4 border-orange-500">
              <Truck className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">Post-Construction</h3>
              <p className="text-gray-400">Debris removal and final clean for occupancy permits.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleaningDesign6;
