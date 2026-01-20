import React, { useState } from 'react';
import { Menu, X, Wifi, Coffee, MapPin, Tv, Zap, Shield, Smartphone, ArrowRight } from 'lucide-react';

const TransientDesign2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-mono text-zinc-300 bg-zinc-950 min-h-screen selection:bg-yellow-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-black tracking-tighter text-white">
              URBAN<span className="text-yellow-500">LOFT</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase">
              <a href="#space" className="hover:text-yellow-500 transition-colors">The Space</a>
              <a href="#specs" className="hover:text-yellow-500 transition-colors">Specs</a>
              <a href="#loc" className="hover:text-yellow-500 transition-colors">Location</a>
              <button className="bg-yellow-500 text-black px-6 py-2 hover:bg-white transition-colors">
                Book Now
              </button>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Industrial Loft" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
            Concrete <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">Jungle</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 font-light">
            Industrial aesthetics meets modern comfort in the heart of BGC.
          </p>
          <button className="bg-white text-black px-8 py-4 text-lg font-bold tracking-widest uppercase hover:bg-yellow-500 transition-all transform hover:-translate-y-1">
            Reserve Your Dates
          </button>
        </div>
      </section>

      {/* Specs/Amenities Grid */}
      <section id="specs" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800">
            {[
              { icon: Wifi, label: "1GBPS FIBER", sub: "Dedicated Line" },
              { icon: Tv, label: "SMART ENT", sub: "65\" OLED + PS5" },
              { icon: Coffee, label: "BREW LAB", sub: "Espresso Machine" },
              { icon: Zap, label: "WORKSPACE", sub: "Ergo Setup" },
              { icon: Shield, label: "SECURE", sub: "24/7 RFID" },
              { icon: Smartphone, label: "SMART HOME", sub: "Voice Control" },
              { icon: MapPin, label: "PRIME SPOT", sub: "Walk to High St." },
              { icon: Menu, label: "CONCIERGE", sub: "App Based" },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-950 p-8 hover:bg-zinc-900 transition-colors group">
                <item.icon className="w-8 h-8 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold tracking-wider mb-1">{item.label}</h3>
                <p className="text-zinc-500 text-xs uppercase">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Space */}
      <section id="space" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-yellow-500 font-bold tracking-widest mb-4">THE DESIGN</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase leading-tight">
              Raw Materials.<br/>Refined Living.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Exposed pipes, polished concrete floors, and floor-to-ceiling windows. We've stripped back the unnecessary to reveal the essential.
            </p>
            <ul className="space-y-4 mb-8">
              {['Double Height Ceilings', 'Soundproof Walls', 'Blackout Curtains'].map(feat => (
                <li key={feat} className="flex items-center gap-4 text-white">
                  <div className="w-2 h-2 bg-yellow-500" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            <img src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 translate-y-8" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-yellow-500 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">Ready to move in?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-black text-white px-8 py-4 text-lg font-bold uppercase hover:bg-zinc-800 transition-colors">
              Check Availability
            </button>
            <button className="border-2 border-black px-8 py-4 text-lg font-bold uppercase hover:bg-black hover:text-white transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransientDesign2;
