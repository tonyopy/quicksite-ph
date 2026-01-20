import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, Zap, Star, Monitor, Cpu, Headphones } from 'lucide-react';

const EcommerceDesign2 = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-mono text-gray-300 selection:bg-cyan-500 selection:text-black">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800">
        <div className="container mx-auto px-6 h-16 flex justify-between items-center">
          <div className="text-xl font-bold tracking-widest text-white flex items-center gap-2">
            <Zap className="text-cyan-400 fill-current" /> CYBER<span className="text-cyan-400">SHOP</span>
          </div>
          
          <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-cyan-400 transition-colors">Hardware</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Peripherals</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Software</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Deals</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded text-cyan-400 border border-transparent hover:border-cyan-400/30 transition-all">
              <Search className="w-5 h-5" />
            </button>
            <button className="bg-cyan-500 text-black px-4 py-2 text-xs font-bold uppercase rounded hover:bg-cyan-400 transition-colors flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" /> Cart (0)
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-500/5 blur-[100px] rounded-full"></div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block px-3 py-1 bg-gray-800 border border-gray-700 rounded text-xs font-bold text-cyan-400 mb-6 uppercase tracking-wider">
              Next Gen Gaming
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-none">
              LEVEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">UP</span> <br/>
              YOUR GEAR
            </h1>
            <p className="text-gray-400 mb-8 max-w-lg">
              Experience ultra-low latency, high-fidelity audio, and precision control with our latest CyberSeries peripherals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded font-bold uppercase text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-shadow">
                Shop Collection
              </button>
              <button className="border border-gray-700 text-white px-8 py-3 rounded font-bold uppercase text-sm hover:bg-gray-800 transition-colors">
                View Specs
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" 
                alt="Gaming Headset" 
                className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-black border border-gray-700 p-4 rounded-lg flex items-center gap-4 shadow-xl">
                <div className="text-cyan-400 font-bold text-xl">$199.99</div>
                <div className="text-xs text-gray-500 uppercase">Limited Stock</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Monitor, title: "4K Ready", desc: "Crystal clear visuals for immersive gaming." },
              { icon: Cpu, title: "AI Powered", desc: "Smart processing for optimal performance." },
              { icon: Headphones, title: "3D Audio", desc: "Spatial sound awareness for competitive edge." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-800/50 border border-gray-800 p-6 rounded-xl hover:border-cyan-500/50 transition-colors group">
                <feature.icon className="w-10 h-10 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Strip */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Top Sellers</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-colors">&lt;</button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-colors">&gt;</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 group hover:border-cyan-500 transition-all duration-300">
                <div className="h-48 bg-gray-900 flex items-center justify-center p-4 relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1618366712010-f4ae9c647dcb' : item === 2 ? '1587829740731-57d815f4636d' : item === 3 ? '1593582806321-920484a9a139' : '1580237072393-8875a687849e'}?auto=format&fit=crop&w=500&q=80`} 
                    alt="Product" 
                    className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" 
                  />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded">NEW</div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm mb-1 truncate">Neon Keyboard X1</h3>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-cyan-400 font-bold">$129.99</span>
                    <button className="p-2 bg-gray-700 rounded hover:bg-cyan-500 hover:text-black transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceDesign2;
