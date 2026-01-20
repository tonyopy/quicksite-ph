import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, Heart } from 'lucide-react';

const EcommerceDesign3 = () => {
  return (
    <div className="min-h-screen bg-[#fffbf7] font-serif text-[#4a3b32]">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#fffbf7]/90 backdrop-blur border-b border-[#eaddcf]">
        <div className="container mx-auto px-8 h-24 flex justify-between items-center">
          <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase font-sans">
            <a href="#" className="hover:text-[#b08d74] transition-colors">New In</a>
            <a href="#" className="hover:text-[#b08d74] transition-colors">Dresses</a>
            <a href="#" className="hover:text-[#b08d74] transition-colors">Shoes</a>
          </div>

          <div className="text-3xl italic font-bold text-center absolute left-1/2 -translate-x-1/2">
            Maison <span className="text-[#b08d74]">Belle</span>
          </div>

          <div className="flex items-center space-x-6">
            <Search className="w-5 h-5 text-[#4a3b32] hover:text-[#b08d74] cursor-pointer transition-colors" />
            <Heart className="w-5 h-5 text-[#4a3b32] hover:text-[#b08d74] cursor-pointer transition-colors" />
            <ShoppingBag className="w-5 h-5 text-[#4a3b32] hover:text-[#b08d74] cursor-pointer transition-colors" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-24 min-h-screen flex flex-col">
        <div className="flex-1 grid md:grid-cols-2">
          <div className="relative h-[60vh] md:h-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80" 
              alt="Spring Collection" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-12 left-12 text-white">
              <span className="uppercase tracking-[0.2em] text-sm mb-2 block font-sans">Spring / Summer 2025</span>
              <h2 className="text-5xl italic font-light">Ethereal Bloom</h2>
            </div>
          </div>
          <div className="flex items-center justify-center p-12 bg-[#f5efe6]">
            <div className="max-w-md text-center">
              <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                Elegance is the only beauty that never fades.
              </h1>
              <p className="text-[#8c7b70] mb-10 italic">
                Discover our curated selection of timeless pieces crafted from the finest silk and sustainable linen.
              </p>
              <button className="border border-[#4a3b32] text-[#4a3b32] px-10 py-3 uppercase tracking-widest text-xs hover:bg-[#4a3b32] hover:text-white transition-all duration-300">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#b08d74] uppercase tracking-[0.2em] text-xs font-sans block mb-4">Curated For You</span>
            <h2 className="text-4xl font-light italic">Shop by Category</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {['Dresses', 'Accessories', 'Outerwear'].map((cat, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="overflow-hidden mb-6 relative aspect-[3/4]">
                  <img 
                    src={`https://images.unsplash.com/photo-${idx === 0 ? '1595777457583-95e059d581b8' : idx === 1 ? '1576053139778-7e32f2ae3cfd' : '1554568218-0f1715e72254'}?auto=format&fit=crop&w=600&q=80`}
                    alt={cat}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-500"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl italic font-light mb-2">{cat}</h3>
                  <span className="text-xs uppercase tracking-widest border-b border-[#4a3b32] pb-1">Discover</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#eaddcf] py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-6">Join the list</h2>
          <p className="text-[#6b5a4e] mb-8 max-w-lg mx-auto">Sign up for exclusive access to new collections, sales, and styling tips.</p>
          <div className="max-w-md mx-auto flex border-b border-[#4a3b32]">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent w-full py-3 outline-none placeholder-[#8c7b70]" 
            />
            <button className="uppercase text-xs tracking-widest font-bold py-3 hover:text-[#b08d74]">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceDesign3;
