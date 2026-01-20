import React, { useState } from 'react';
import { Truck, Settings, HardHat, Hammer, Map, Phone, ChevronRight, AlertTriangle, ShieldCheck } from 'lucide-react';

function ConstructionDesign10() {
  return (
    <div className="min-h-screen bg-neutral-900 font-sans text-white">
      {/* Top Bar */}
      <div className="bg-yellow-500 text-black py-2 px-4 font-bold text-sm tracking-wide">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2" />
            SAFETY FIRST: OSHA COMPLIANT SITE SERVICES
          </div>
          <div className="hidden md:block">SERVING THE TRI-STATE AREA SINCE 1985</div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="border-b border-white/10 bg-neutral-900/95 sticky top-0 z-50 backdrop-blur">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-white text-black p-1 rounded-sm">
              <Truck className="w-8 h-8" />
            </div>
            <div className="leading-none">
              <div className="text-2xl font-black tracking-tighter">TITAN</div>
              <div className="text-xs font-bold text-yellow-500 tracking-[0.2em]">EXCAVATION</div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 font-bold text-sm uppercase tracking-widest text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Equipment</a>
            <a href="#" className="hover:text-white transition-colors">Projects</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <a href="tel:555-555-5555" className="flex items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition-colors border border-white/10">
            <Phone className="w-4 h-4 mr-2 text-yellow-500" />
            <span className="font-bold text-sm">555-EXCAVATE</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-[80vh] flex items-center border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Excavator" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/50"></div>
          {/* Diagonal lines overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6 animate-fade-in-up">
              <div className="h-1 w-20 bg-yellow-500"></div>
              <span className="font-bold text-yellow-500 tracking-widest uppercase">Heavy Civil Construction</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter uppercase animate-fade-in-up delay-100">
              Moving <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Earth & Stone</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200">
              Premier excavation, grading, and site preparation services for commercial and industrial projects. We pave the way for progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <button className="bg-yellow-500 text-black px-8 py-4 font-black uppercase tracking-wider hover:bg-yellow-400 transition-colors skew-x-[-10deg]">
                <span className="skew-x-[10deg] inline-block">Request Bid</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 font-black uppercase tracking-wider hover:bg-white hover:text-black transition-colors skew-x-[-10deg]">
                <span className="skew-x-[10deg] inline-block">Fleet List</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-0 border-t border-l border-white/10">
            {[
              { icon: <Map className="w-10 h-10" />, title: 'Site Preparation', desc: 'Clearing, grubbing, and leveling for new construction.' },
              { icon: <Settings className="w-10 h-10" />, title: 'Utility Trenching', desc: 'Precision digging for water, sewer, and electrical lines.' },
              { icon: <Hammer className="w-10 h-10" />, title: 'Demolition', desc: 'Safe and efficient structure removal and debris hauling.' },
            ].map((service, idx) => (
              <div key={idx} className="group p-10 border-r border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer">
                <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-4">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{service.desc}</p>
                <div className="mt-8 flex items-center text-yellow-500 font-bold uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ChevronRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/About */}
      <section className="py-24 bg-neutral-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500 transform skew-x-[-20deg] translate-x-20 opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
                Built on Solid <br/> Ground.
              </h2>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                With a fleet of over 50 heavy machines and a team of certified operators, Titan Excavation tackles the toughest terrain. We deliver projects on time and under budget, with an uncompromising commitment to safety.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl font-black text-white mb-2">35+</div>
                  <div className="text-yellow-500 font-bold uppercase text-xs tracking-widest">Years in Business</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-white mb-2">2k+</div>
                  <div className="text-yellow-500 font-bold uppercase text-xs tracking-widest">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Construction Site" 
                className="w-full grayscale border-4 border-yellow-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Banner */}
      <section className="bg-yellow-500 text-black py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <ShieldCheck className="w-16 h-16" />
            <div>
              <h3 className="text-2xl font-black uppercase">Safety Certified</h3>
              <p className="font-medium max-w-md">Our operators are OSHA 30 certified and undergo regular safety training.</p>
            </div>
          </div>
          <button className="border-4 border-black px-8 py-3 font-black uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
            View Safety Record
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-12 border-t border-white/5 text-neutral-600 text-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-white font-black tracking-tighter text-lg">TITAN</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Careers</a>
          </div>
          <div className="mt-4 md:mt-0">
            &copy; 2024 Titan Excavation Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ConstructionDesign10;