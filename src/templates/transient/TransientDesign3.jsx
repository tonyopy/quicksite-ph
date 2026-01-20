import React, { useState } from 'react';
import { Menu, X, Wind, Sun, BookOpen, Coffee } from 'lucide-react';

const TransientDesign3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-stone-600 bg-[#F5F5F0] min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#F5F5F0]/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <div className="text-xl tracking-widest uppercase font-light text-stone-800">
              Komorebi
            </div>
            <div className="hidden md:flex gap-12 text-sm font-medium tracking-wide text-stone-500">
              <a href="#" className="hover:text-stone-900 transition-colors">Residence</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Philosophy</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Stay</a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase mb-6 block">The Minimalist Stay</span>
              <h1 className="text-5xl font-light text-stone-800 mb-8 leading-tight">
                Simplicity is the <br/>ultimate sophistication.
              </h1>
              <p className="text-lg text-stone-500 mb-10 font-light leading-relaxed max-w-md">
                A sanctuary of calm in the chaos of the city. Natural light, organic textures, and space to breathe.
              </p>
              <button className="bg-stone-800 text-stone-50 px-10 py-4 rounded-full text-sm tracking-widest hover:bg-stone-700 transition-colors">
                Book Your Stay
              </button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-stone-200">
                <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" className="w-full h-full object-cover" alt="Minimalist Interior" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Horizontal Scroll */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 mb-12">
          <h2 className="text-2xl font-light text-stone-800">Curated Essentials</h2>
        </div>
        <div className="flex gap-8 px-6 overflow-x-auto pb-8 snap-x md:justify-center">
          {[
            { icon: Sun, title: "Natural Light", desc: "Floor to ceiling windows" },
            { icon: Wind, title: "Air Quality", desc: "HEPA filtration system" },
            { icon: BookOpen, title: "Reading Nook", desc: "Curated library" },
            { icon: Coffee, title: "Tea Bar", desc: "Matcha & Sencha" },
          ].map((item, i) => (
            <div key={i} className="min-w-[280px] bg-white p-8 rounded-3xl shadow-sm snap-center border border-stone-100">
              <item.icon className="w-6 h-6 text-stone-400 mb-6" />
              <h3 className="text-lg text-stone-800 mb-2">{item.title}</h3>
              <p className="text-stone-500 font-light text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden md:mt-16">
              <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-20 px-6 bg-[#F5F5F0]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-2xl font-light text-stone-800 mb-8 tracking-widest uppercase">Komorebi</div>
          <div className="flex justify-center gap-8 text-stone-400 text-sm tracking-wide">
            <a href="#">Instagram</a>
            <a href="#">Airbnb</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TransientDesign3;
