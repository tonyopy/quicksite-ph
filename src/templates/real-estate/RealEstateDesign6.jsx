import React, { useState } from 'react';
import { Home, ClipboardCheck, Wrench, Users, CheckCircle, Phone, ArrowRight, Shield } from 'lucide-react';

function RealEstateDesign6() {
  return (
    <div className="min-h-screen bg-white font-sans text-green-900">
      {/* Navbar */}
      <nav className="border-b border-green-50 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 text-white p-2 rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none">KEYSTONE</span>
              <span className="text-xs text-green-600 font-bold uppercase tracking-widest">Management</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 font-bold text-sm text-gray-500">
            <a href="#" className="hover:text-green-600 transition-colors">Owners</a>
            <a href="#" className="hover:text-green-600 transition-colors">Tenants</a>
            <a href="#" className="hover:text-green-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-green-600 transition-colors">Resources</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block font-bold text-sm text-green-700 hover:text-green-800">Owner Login</button>
            <button className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-bold shadow-md hover:bg-green-700 transition-colors">
              Get a Free Analysis
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative bg-green-50 py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900">
                Property Management <br/>
                <span className="text-green-600">Made Simple.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Maximize your ROI while we handle the headaches. From tenant screening to 24/7 maintenance, we've got you covered.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-gray-700 font-bold">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" /> 98% Occupancy Rate
                </li>
                <li className="flex items-center text-gray-700 font-bold">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" /> &lt; 1% Eviction Rate
                </li>
                <li className="flex items-center text-gray-700 font-bold">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" /> 24/7 Maintenance Response
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-xl shadow-green-200">
                  See Pricing
                </button>
                <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-colors border border-green-100">
                  View Services
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -right-10 w-full h-full bg-green-200 rounded-full opacity-20 blur-3xl"></div>
               <img 
                 src="https://images.unsplash.com/photo-1560518883-ce09059ee971?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                 alt="Property Manager" 
                 className="rounded-3xl shadow-2xl w-full object-cover relative z-10"
               />
               <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
                 <div className="flex items-center mb-4">
                   <div className="flex -space-x-2">
                     <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                     <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                     <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                   </div>
                   <div className="ml-4 font-bold text-gray-900">500+ Happy Owners</div>
                 </div>
                 <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                   <div className="h-full w-4/5 bg-green-500 rounded-full"></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Comprehensive Care</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We treat your investment like it's our own. Full-service management for single-family homes and multi-unit complexes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <ClipboardCheck className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Tenant Screening</h3>
              <p className="text-gray-500 mb-6">Rigorous background checks, credit reports, and employment verification to ensure quality tenants.</p>
              <a href="#" className="text-green-600 font-bold flex items-center hover:underline">Learn more <ArrowRight className="w-4 h-4 ml-1" /></a>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <Wrench className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Maintenance & Repairs</h3>
              <p className="text-gray-500 mb-6">24/7 emergency support and a network of trusted vendors to keep your property in top shape.</p>
              <a href="#" className="text-green-600 font-bold flex items-center hover:underline">Learn more <ArrowRight className="w-4 h-4 ml-1" /></a>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <Users className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Rent Collection</h3>
              <p className="text-gray-500 mb-6">Online portals for easy payments and direct deposits to owners. No more chasing checks.</p>
              <a href="#" className="text-green-600 font-bold flex items-center hover:underline">Learn more <ArrowRight className="w-4 h-4 ml-1" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Guarantee */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black mb-6">Our Guarantees</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We are so confident in our services that we offer industry-leading guarantees. We don't get paid unless you do.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-600 p-2 rounded mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold">21-Day Rental Guarantee</h4>
                    <p className="text-gray-400 mt-1">We'll find a qualified tenant in 21 days or your first month of management is free.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600 p-2 rounded mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold">Eviction Protection</h4>
                    <p className="text-gray-400 mt-1">If we place a tenant who needs to be evicted, we cover the legal costs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
               <div className="bg-white text-gray-900 rounded-3xl p-10 shadow-2xl relative">
                 <div className="absolute top-0 right-0 bg-green-100 text-green-700 px-4 py-2 rounded-bl-2xl rounded-tr-2xl font-bold text-sm">Most Popular</div>
                 <h3 className="text-2xl font-black mb-2">Full Management</h3>
                 <div className="flex items-baseline mb-6">
                   <span className="text-5xl font-black text-green-600">8%</span>
                   <span className="text-gray-500 font-bold ml-2">of monthly rent</span>
                 </div>
                 <ul className="space-y-4 mb-8">
                   <li className="flex items-center font-bold text-gray-700"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> Tenant Placement</li>
                   <li className="flex items-center font-bold text-gray-700"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> Rent Collection</li>
                   <li className="flex items-center font-bold text-gray-700"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> Maintenance Coordination</li>
                   <li className="flex items-center font-bold text-gray-700"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> Financial Reporting</li>
                 </ul>
                 <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                   Get Started
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100 text-sm text-gray-500">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
             <div className="flex items-center space-x-2 mb-4 md:mb-0">
               <Shield className="w-5 h-5 text-green-600" />
               <span className="font-bold text-gray-900">KEYSTONE</span>
             </div>
             <div>© 2024 Keystone Property Management.</div>
             <div className="flex space-x-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-green-600">Privacy</a>
               <a href="#" className="hover:text-green-600">Terms</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RealEstateDesign6;