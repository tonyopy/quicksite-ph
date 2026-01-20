import React, { useState } from 'react';
import { Shield, Umbrella, Sun, CloudRain, CheckCircle, PhoneCall, ArrowRight, Star, Home, Calendar } from 'lucide-react';

function ConstructionDesign3() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Top Bar */}
      <div className="bg-red-700 text-white py-2 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-bold">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <span className="flex items-center"><Shield className="w-4 h-4 mr-1" /> Licensed & Insured</span>
            <span className="flex items-center"><Star className="w-4 h-4 mr-1" /> 5-Star Rated</span>
          </div>
          <div className="flex items-center">
            <span className="bg-white text-red-700 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide mr-2">Emergency Service 24/7</span>
            <span className="flex items-center"><PhoneCall className="w-4 h-4 mr-1" /> (555) ROOF-PRO</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-slate-900 text-white py-6 px-6 sticky top-0 z-50 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded">
              <Umbrella className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tighter leading-none">SUMMIT</div>
              <div className="text-xs text-red-500 font-bold tracking-widest uppercase">Roofing Systems</div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 font-bold text-sm uppercase tracking-wide">
            <a href="#" className="hover:text-red-500 transition-colors">Residential</a>
            <a href="#" className="hover:text-red-500 transition-colors">Commercial</a>
            <a href="#" className="hover:text-red-500 transition-colors">Repairs</a>
            <a href="#" className="hover:text-red-500 transition-colors">About</a>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold transition-colors uppercase text-sm tracking-wide shadow-lg shadow-red-900/50">
            Get Free Inspection
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[600px] flex items-center bg-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Roofer working" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-red-600/20 border border-red-500/50 text-red-400 px-4 py-1 rounded-full text-sm font-bold mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              #1 Rated Roofing Contractor in the Region
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Protect What <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Matters Most.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-medium">
              We provide superior roofing solutions with a 50-year warranty. Trust the experts who keep you dry when it matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-bold text-lg transition-colors flex items-center justify-center">
                Get Your Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded font-bold text-lg transition-colors">
                View Our Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos */}
             <div className="h-12 bg-gray-200 rounded flex items-center justify-center font-black text-gray-400 text-xl">GAF Master</div>
             <div className="h-12 bg-gray-200 rounded flex items-center justify-center font-black text-gray-400 text-xl">BBB A+</div>
             <div className="h-12 bg-gray-200 rounded flex items-center justify-center font-black text-gray-400 text-xl">Angi Super</div>
             <div className="h-12 bg-gray-200 rounded flex items-center justify-center font-black text-gray-400 text-xl">HomeAdvisor</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Complete Roofing Solutions</h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border-b-4 border-red-600">
              <div className="bg-red-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Residential Roofing</h3>
              <p className="text-gray-600 mb-6">
                From asphalt shingles to metal roofing, we install durable roofs that enhance your home's curb appeal and value.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm font-semibold text-gray-700"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Asphalt Shingles</li>
                <li className="flex items-center text-sm font-semibold text-gray-700"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Metal Roofing</li>
                <li className="flex items-center text-sm font-semibold text-gray-700"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Slate & Tile</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border-b-4 border-slate-900">
              <div className="bg-slate-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <CloudRain className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Storm Damage Repair</h3>
              <p className="text-gray-600 mb-6">
                Hail, wind, or storm damage? We provide emergency tarping, detailed inspections, and insurance claim assistance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm font-semibold text-gray-700"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Free Inspections</li>
                <li className="flex items-center text-sm font-semibold text-gray-700"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Insurance Claims</li>
                <li className="flex items-center text-sm font-semibold text-gray-700"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Emergency Tarping</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border-b-4 border-red-600">
              <div className="bg-red-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Commercial Roofing</h3>
              <p className="text-gray-600 mb-6">
                Flat roof experts for businesses. TPO, EPDM, and coating systems designed for longevity and energy efficiency.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm font-semibold text-gray-700"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> TPO & EPDM</li>
                <li className="flex items-center text-sm font-semibold text-gray-700"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Roof Coatings</li>
                <li className="flex items-center text-sm font-semibold text-gray-700"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Maintenance Plans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black mb-6">Why Homeowners Trust Summit</h2>
              <p className="text-gray-300 text-lg mb-8">
                Your roof is your home's first line of defense. Don't settle for less than the best. We combine premium materials with master craftsmanship.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="text-red-500 font-black text-4xl mb-2">50</div>
                  <div className="font-bold text-lg">Year Warranty</div>
                  <p className="text-sm text-gray-400">On materials and labor for complete peace of mind.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="text-red-500 font-black text-4xl mb-2">24</div>
                  <div className="font-bold text-lg">Hour Response</div>
                  <p className="text-sm text-gray-400">For emergency leaks and storm damage repairs.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute -inset-4 bg-red-600 rounded-2xl transform rotate-3 opacity-30"></div>
               <img 
                 src="https://images.unsplash.com/photo-1621255160432-83b631d87f5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                 alt="Quality Roofing" 
                 className="rounded-2xl shadow-2xl relative z-10 border-4 border-slate-800"
               />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-red-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Don't Wait Until It Leaks!</h2>
          <p className="text-red-100 text-xl max-w-2xl mx-auto mb-8">
            Schedule your free, no-obligation roof inspection today. We'll give you an honest assessment of your roof's condition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="bg-white text-red-700 px-8 py-4 rounded font-black text-lg hover:bg-gray-100 transition-colors shadow-xl">
               Schedule Inspection
             </button>
             <button className="bg-red-800 text-white px-8 py-4 rounded font-black text-lg hover:bg-red-900 transition-colors border border-red-700">
               Call (555) ROOF-PRO
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-black tracking-tighter text-white mb-2">SUMMIT</div>
              <p className="text-sm">© 2024 Summit Roofing Systems. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-sm font-bold">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ConstructionDesign3;