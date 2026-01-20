import React, { useState } from 'react';
import { Droplets, Thermometer, Wrench, Phone, Clock, UserCheck, Snowflake, Flame, Check, ArrowRight } from 'lucide-react';

function ConstructionDesign4() {
  return (
    <div className="min-h-screen bg-cyan-50 font-sans text-slate-800">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-sm font-medium">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 24/7 Emergency Service</span>
            <span className="hidden md:flex items-center"><UserCheck className="w-4 h-4 mr-2" /> Licensed & Insured Master Plumbers</span>
          </div>
          <a href="tel:555-123-4567" className="font-bold flex items-center hover:text-blue-100">
            <Phone className="w-4 h-4 mr-2" /> (555) 123-4567
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white py-4 px-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <Droplets className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-slate-800">Flow<span className="text-blue-600">Masters</span></span>
          </div>
          <div className="hidden md:flex space-x-8 font-semibold text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Plumbing</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Heating</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Cooling</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Drain Cleaning</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors shadow-lg shadow-blue-200">
            Book Online
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-full text-sm mb-6">
                Same Day Service Guarantee
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Your Comfort is <br/><span className="text-blue-600">Our Priority.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg">
                Expert plumbing, heating, and air conditioning services. We fix it right the first time, guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-blue-200 flex items-center justify-center">
                  Schedule Service <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                  View Coupons
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="bg-blue-600 absolute inset-0 rounded-3xl transform rotate-6 opacity-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                 alt="HVAC Technician" 
                 className="rounded-3xl shadow-2xl relative z-10 w-full"
               />
               <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl z-20 flex items-center space-x-4 max-w-xs">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">100% Satisfaction</div>
                    <div className="text-sm text-slate-500">Money-back guarantee</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From leaky faucets to full HVAC system installations, our certified technicians handle it all.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-blue-50 group">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Droplets className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Plumbing</h3>
              <p className="text-slate-500 mb-6">Leak detection, pipe repair, water heaters, and fixture installation.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-blue-500 mr-2" /> Water Heater Repair</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-blue-500 mr-2" /> Drain Cleaning</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-blue-500 mr-2" /> Leak Detection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-blue-50 group">
              <div className="bg-orange-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <Flame className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Heating</h3>
              <p className="text-slate-500 mb-6">Furnace repair, boiler maintenance, and heat pump installation.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-2" /> Furnace Repair</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-2" /> Boiler Services</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-2" /> Annual Tune-ups</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-blue-50 group">
              <div className="bg-cyan-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors">
                <Snowflake className="w-7 h-7 text-cyan-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cooling</h3>
              <p className="text-slate-500 mb-6">AC repair, installation, and maintenance to keep you cool.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-cyan-500 mr-2" /> AC Repair</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-cyan-500 mr-2" /> Ductless Mini-Splits</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-cyan-500 mr-2" /> Thermostats</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-slate-900 py-16 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">Plumbing Emergency?</h2>
            <p className="text-slate-400">We are available 24 hours a day, 7 days a week.</p>
          </div>
          <div className="flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-2xl shadow-lg">
            <Phone className="w-6 h-6 mr-3 text-red-600 animate-pulse" />
            (555) 123-4567
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="w-6 h-6 text-blue-600" />
                <span className="text-xl font-bold text-slate-800">Flow<span className="text-blue-600">Masters</span></span>
              </div>
              <p className="text-sm text-slate-500">Your trusted local plumbing and HVAC experts since 2005.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-600">Plumbing</a></li>
                <li><a href="#" className="hover:text-blue-600">Heating</a></li>
                <li><a href="#" className="hover:text-blue-600">Cooling</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {/* Social Icons Placeholder */}
                <div className="w-8 h-8 bg-slate-100 rounded-full hover:bg-blue-100 cursor-pointer"></div>
                <div className="w-8 h-8 bg-slate-100 rounded-full hover:bg-blue-100 cursor-pointer"></div>
                <div className="w-8 h-8 bg-slate-100 rounded-full hover:bg-blue-100 cursor-pointer"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-100 mt-12 pt-8 text-center text-xs text-slate-400">
            © 2024 FlowMasters Plumbing & HVAC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ConstructionDesign4;