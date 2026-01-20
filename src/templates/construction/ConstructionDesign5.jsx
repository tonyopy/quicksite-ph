import React, { useState } from 'react';
import { Zap, Lightbulb, Plug, Battery, ShieldCheck, Check, Phone, ArrowRight, Activity, Cpu } from 'lucide-react';

function ConstructionDesign5() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 py-6 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-yellow-400 fill-current" />
            <span className="text-2xl font-bold tracking-wider">VOLT<span className="text-yellow-400">AGE</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-yellow-400 transition-colors">Residential</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Commercial</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Smart Home</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Emergency</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:555-123-4567" className="hidden md:flex items-center font-bold text-white hover:text-yellow-400 transition-colors">
              <Phone className="w-4 h-4 mr-2" /> (555) 987-6543
            </a>
            <button className="bg-yellow-400 text-black px-5 py-2 rounded font-bold hover:bg-yellow-300 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-6">
              <Activity className="w-4 h-4" />
              <span>Licensed Master Electricians</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Powering Your World <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Safely & Efficiently.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              From panel upgrades to smart home automation, we provide top-tier electrical services for homes and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-4 rounded font-bold hover:bg-gray-200 transition-colors flex items-center justify-center">
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded font-bold hover:bg-white/5 transition-colors">
                Our Services
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-500/10 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-[150px] opacity-10"></div>
      </header>

      {/* Services Cards */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors group border border-white/5">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lighting Solutions</h3>
              <p className="text-gray-400 mb-6">LED upgrades, recessed lighting, and landscape illumination design.</p>
              <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-yellow-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors group border border-white/5">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Home</h3>
              <p className="text-gray-400 mb-6">Home automation, EV chargers, and smart panel installation.</p>
              <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-blue-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors group border border-white/5">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safety Inspections</h3>
              <p className="text-gray-400 mb-6">Code compliance, wiring updates, and surge protection systems.</p>
              <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-green-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-yellow-400/20 rounded-2xl transform -rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Electrician working on panel" 
                className="rounded-2xl relative z-10 shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Voltage?</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Electrical work isn't something to take chances with. Our certified professionals ensure every job is done to the highest safety standards.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 bg-yellow-400/10 p-2 rounded text-yellow-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Upfront Pricing</h4>
                    <p className="text-gray-400 text-sm">No hidden fees. You know the price before we start.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-yellow-400/10 p-2 rounded text-yellow-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Licensed & Insured</h4>
                    <p className="text-gray-400 text-sm">Fully qualified technicians you can trust.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 bg-yellow-400/10 p-2 rounded text-yellow-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Lifetime Warranty</h4>
                    <p className="text-gray-400 text-sm">We stand behind our workmanship forever.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-400 text-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Need an Electrician Now?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">
            We offer 24/7 emergency services for when you need us most.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-8 py-4 rounded font-bold hover:bg-slate-800 transition-colors shadow-lg">
              Call (555) 987-6543
            </button>
            <button className="bg-white text-black px-8 py-4 rounded font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Book Online
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="text-xl font-bold text-white tracking-wider">VOLT<span className="text-yellow-400">AGE</span></span>
          </div>
          <p>&copy; 2024 Voltage Electrical Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ConstructionDesign5;