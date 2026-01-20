import React, { useState } from 'react';
import { Maximize, Sun, Wind, Shield, Home, ArrowRight, Check, PlayCircle, Star } from 'lucide-react';

function ConstructionDesign9() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-2 text-sky-600">
            <Maximize className="w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight text-slate-900">VISTA<span className="text-sky-600">VIEW</span></span>
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-slate-600">
            <a href="#" className="hover:text-sky-600 transition-colors">Windows</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Doors</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Siding</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Inspiration</a>
          </div>
          <button className="bg-sky-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-sky-200 hover:bg-sky-700 transition-colors">
            Get a Quote
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                Let the <span className="text-sky-500">Light</span> In.
              </h1>
              <p className="text-xl text-slate-500 mb-8 max-w-lg leading-relaxed">
                Energy-efficient windows and doors that transform your home's appearance and comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors flex items-center justify-center">
                  Shop Windows <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="flex items-center justify-center text-slate-700 font-bold px-8 py-4 hover:text-sky-600 transition-colors">
                  <PlayCircle className="w-6 h-6 mr-2" /> Watch Video
                </button>
              </div>
              
              <div className="mt-12 flex items-center space-x-8 text-sm font-bold text-slate-400">
                <div className="flex items-center"><Star className="w-4 h-4 text-yellow-400 fill-current mr-2" /> 4.9/5 Rating</div>
                <div className="flex items-center"><Shield className="w-4 h-4 mr-2" /> Lifetime Warranty</div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-sky-100 rounded-[3rem] transform rotate-3 scale-95 -z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                 alt="Modern Window" 
                 className="rounded-[3rem] shadow-2xl w-full object-cover"
               />
            </div>
          </div>
        </div>
      </header>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Clear Advantages</h2>
            <p className="text-slate-500">Upgrade to VistaView and experience the difference in quality and performance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 text-center">
              <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6 text-sky-600">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Energy Efficiency</h3>
              <p className="text-slate-500">Reduce energy bills by up to 30% with our triple-pane Low-E glass technology.</p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 text-center">
              <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6 text-sky-600">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Noise Reduction</h3>
              <p className="text-slate-500">Enjoy peace and quiet. Our insulated frames block outside noise effectively.</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 text-center">
              <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6 text-sky-600">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Security</h3>
              <p className="text-slate-500">Multi-point locking systems and shatter-resistant glass keep your family safe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Patio Doors" 
                className="rounded-2xl shadow-2xl border-4 border-slate-700"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Seamless Indoor-Outdoor Living</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our sliding and folding patio doors create a stunning connection between your home and garden. Engineered for smooth operation and durability.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><Check className="w-5 h-5 text-sky-500 mr-3" /> Custom Sizes Available</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-sky-500 mr-3" /> 50+ Color Options</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-sky-500 mr-3" /> Professional Installation Included</li>
              </ul>
              <button className="text-sky-400 font-bold hover:text-sky-300 transition-colors flex items-center">
                View Door Collection <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sky-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Winter Sale Ends Soon!</h2>
          <p className="text-xl text-sky-100 mb-10">
            Get 20% off all window replacements + 0% financing for 24 months.
          </p>
          <button className="bg-white text-sky-600 px-10 py-4 rounded-full font-bold shadow-xl hover:bg-sky-50 transition-colors transform hover:scale-105 duration-200">
            Claim Offer Now
          </button>
          <p className="mt-4 text-sm text-sky-200 opacity-70">*Terms and conditions apply. Offer valid until end of month.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
           <div className="flex items-center space-x-2 mb-4 md:mb-0">
             <Maximize className="w-6 h-6 text-sky-600" />
             <span className="text-xl font-bold text-slate-900">VISTA<span className="text-sky-600">VIEW</span></span>
           </div>
           <div>© 2024 VistaView Windows & Doors.</div>
        </div>
      </footer>
    </div>
  );
}

export default ConstructionDesign9;