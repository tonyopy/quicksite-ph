import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, Wrench, Hammer, Ruler, Phone } from 'lucide-react';

const EcommerceDesign5 = () => {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-yellow-500 text-black py-2 text-xs font-bold uppercase tracking-wider">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Free Shipping on Orders Over $500</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> 1-800-TOOL-PRO</span>
            <a href="#" className="hover:underline">Store Locator</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <nav className="bg-slate-900 text-white py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8">
            <div className="text-2xl font-black uppercase italic tracking-tighter flex items-center gap-2">
              <div className="bg-yellow-500 text-black p-1 rounded-sm"><Hammer /></div>
              ProGrade
            </div>
            
            <div className="flex-1 hidden md:flex relative max-w-xl">
              <input 
                type="text" 
                placeholder="Search for tools, equipment, parts..." 
                className="w-full h-12 pl-4 pr-12 rounded bg-slate-800 border border-slate-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none text-white placeholder-slate-400"
              />
              <button className="absolute right-0 top-0 h-12 w-12 bg-yellow-500 text-black flex items-center justify-center rounded-r hover:bg-yellow-400 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:block text-right">
                <div className="text-xs text-slate-400">Welcome, Guest</div>
                <div className="text-sm font-bold hover:text-yellow-500 cursor-pointer">Sign In / Register</div>
              </div>
              <div className="relative cursor-pointer group">
                <ShoppingCart className="w-7 h-7 text-white group-hover:text-yellow-500 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">3</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Category Nav */}
      <div className="bg-slate-800 text-white border-b border-slate-700 hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex justify-between text-sm font-bold uppercase tracking-wide py-3">
            <li className="hover:text-yellow-500 cursor-pointer">Power Tools</li>
            <li className="hover:text-yellow-500 cursor-pointer">Hand Tools</li>
            <li className="hover:text-yellow-500 cursor-pointer">Air Compressors</li>
            <li className="hover:text-yellow-500 cursor-pointer">Metalworking</li>
            <li className="hover:text-yellow-500 cursor-pointer">Woodworking</li>
            <li className="hover:text-yellow-500 cursor-pointer">Storage</li>
            <li className="hover:text-yellow-500 cursor-pointer text-yellow-500">Clearance</li>
          </ul>
        </div>
      </div>

      {/* Hero */}
      <header className="bg-slate-900 py-16 border-b-4 border-yellow-500">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl font-black uppercase italic leading-tight">
              Built for the <br/> <span className="text-yellow-500">Toughest Jobs.</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-md border-l-4 border-yellow-500 pl-4">
              Professional grade equipment for contractors and serious DIYers. Lifetime warranty on all hand tools.
            </p>
            <button className="bg-yellow-500 text-black px-8 py-4 text-lg font-black uppercase hover:bg-yellow-400 transition-colors skew-x-[-10deg]">
              <span className="skew-x-[10deg] inline-block">Shop Power Tools</span>
            </button>
          </div>
          <div className="relative">
             <img 
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80" 
              alt="Power Tools" 
              className="w-full rounded border-2 border-slate-700 shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-slate-800 text-white p-4 border-l-4 border-yellow-500 shadow-xl">
              <div className="text-xs text-slate-400 uppercase">Deal of the Day</div>
              <div className="text-xl font-bold">20V Cordless Drill Kit</div>
              <div className="text-yellow-500 font-black text-2xl">$129.00 <span className="text-sm text-slate-500 line-through font-normal">$199.00</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black uppercase italic text-slate-900 mb-8 flex items-center gap-2">
            <Wrench className="text-yellow-600" /> Shop By Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Drills & Drivers", img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=400&q=80" },
              { name: "Saws", img: "https://images.unsplash.com/photo-1540104771986-a0dc2adc4348?auto=format&fit=crop&w=400&q=80" },
              { name: "Hand Tools", img: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=400&q=80" },
              { name: "Safety Gear", img: "https://images.unsplash.com/photo-1582260654032-15f79599540c?auto=format&fit=crop&w=400&q=80" }
            ].map((cat, idx) => (
              <div key={idx} className="group relative h-48 bg-slate-900 overflow-hidden border-b-4 border-transparent hover:border-yellow-500 transition-all cursor-pointer">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold uppercase text-lg group-hover:text-yellow-500 transition-colors">{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceDesign5;
