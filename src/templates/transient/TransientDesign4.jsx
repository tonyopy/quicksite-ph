import React, { useState } from 'react';
import { Menu, X, Heart, Camera, Sun, Music } from 'lucide-react';

const TransientDesign4 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-serif text-orange-900 bg-[#FFF8F0] min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#FFF8F0]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <div className="text-3xl font-bold font-serif text-orange-800 tracking-tight">
              Boho<span className="text-orange-500">Soul</span>
            </div>
            <div className="hidden md:flex gap-8 font-medium">
              <a href="#" className="hover:text-orange-600">Vibe</a>
              <a href="#" className="hover:text-orange-600">Gallery</a>
              <a href="#" className="bg-orange-800 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">Book Now</a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#FAE5D3] rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h1 className="text-5xl md:text-7xl font-medium text-orange-950 mb-6 leading-[0.9]">
                  Stay Wild,<br/>Stay Cozy.
                </h1>
                <p className="text-xl text-orange-800/70 mb-8 max-w-md">
                  A carefully curated space for the free spirits. Macrame, plants, and good vibes only.
                </p>
                <div className="flex gap-4">
                  <button className="bg-orange-900 text-[#FFF8F0] px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform">
                    Check Availability
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="rounded-t-[10rem] rounded-b-[2rem] w-full h-64 object-cover" />
                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="rounded-t-[2rem] rounded-b-[10rem] w-full h-64 object-cover translate-y-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vibe Check */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-medium mb-4 text-orange-950">The Vibe</h2>
          <p className="text-orange-800/60">Designed for your Instagram feed</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: Camera, title: "Photo Corners", text: "Every wall is a backdrop." },
            { icon: Sun, title: "Sunset View", text: "Perfect golden hour spot." },
            { icon: Music, title: "Vinyl Player", text: "Classic records collection." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] text-center border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-900">{item.title}</h3>
              <p className="text-orange-800/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-orange-900 text-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1550995694-03e050608518?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1595878292809-d9129528659d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="md:col-span-2 rounded-3xl overflow-hidden bg-orange-800 p-8 flex items-center justify-center text-center">
              <div>
                <Heart className="w-12 h-12 mx-auto mb-4 text-orange-300" />
                <h3 className="text-2xl font-medium">"Prettiest Airbnb we've ever stayed at!"</h3>
                <p className="mt-2 opacity-70">- Sarah J.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransientDesign4;
