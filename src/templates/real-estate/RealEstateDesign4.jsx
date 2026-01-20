import React, { useState } from 'react';
import { Building2, BarChart3, Globe, Briefcase, ArrowUpRight, ChevronRight, PieChart } from 'lucide-react';

function RealEstateDesign4() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-400 py-2 px-6 text-xs font-semibold tracking-wider uppercase border-b border-slate-800">
        <div className="container mx-auto flex justify-between items-center">
          <div>Global Commercial Real Estate Services</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Investor Relations</a>
            <a href="#" className="hover:text-white">News & Insights</a>
            <a href="#" className="hover:text-white">Client Portal</a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-700 text-white p-1.5 rounded-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">STRATA<span className="text-blue-700">COMMERCIAL</span></span>
          </div>
          
          <div className="hidden md:flex space-x-10 font-bold text-sm text-slate-600">
            <a href="#" className="hover:text-blue-700 transition-colors">Properties</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Services</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Research</a>
            <a href="#" className="hover:text-blue-700 transition-colors">People</a>
          </div>

          <button className="border-2 border-slate-900 text-slate-900 px-6 py-2 font-bold hover:bg-slate-900 hover:text-white transition-colors text-sm">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-[600px] flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Skyscrapers" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Strategic Assets. <br/>
              <span className="text-blue-500">Global Reach.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              We provide comprehensive commercial real estate solutions for investors, occupiers, and developers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-700 text-white px-8 py-4 font-bold hover:bg-blue-600 transition-colors flex items-center justify-center">
                Find Properties <ArrowUpRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white text-slate-900 px-8 py-4 font-bold hover:bg-slate-100 transition-colors">
                Market Reports
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Market Data Strip */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="pl-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Office Vacancy (NYC)</div>
              <div className="text-2xl font-bold text-slate-800">14.2% <span className="text-red-500 text-sm font-normal">↑ 0.5%</span></div>
            </div>
            <div className="pl-8">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Industrial Rent</div>
              <div className="text-2xl font-bold text-slate-800">$12.50 <span className="text-green-500 text-sm font-normal">↑ 2.1%</span></div>
            </div>
            <div className="pl-8">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Retail Absorption</div>
              <div className="text-2xl font-bold text-slate-800">450k sf <span className="text-green-500 text-sm font-normal">Positive</span></div>
            </div>
            <div className="pl-8">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Cap Rates (Avg)</div>
              <div className="text-2xl font-bold text-slate-800">5.75% <span className="text-slate-400 text-sm font-normal">Stable</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Expertise</h2>
              <div className="w-16 h-1 bg-blue-700"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 shadow-sm border-t-4 border-blue-700 hover:shadow-xl transition-shadow group">
              <Briefcase className="w-10 h-10 text-slate-700 mb-6 group-hover:text-blue-700 transition-colors" />
              <h3 className="text-xl font-bold mb-4 text-slate-900">Capital Markets</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Investment sales, debt & equity placement, and structured finance solutions for institutional clients.
              </p>
              <a href="#" className="text-blue-700 font-bold text-sm flex items-center hover:underline">Learn more <ChevronRight className="w-4 h-4 ml-1" /></a>
            </div>

            <div className="bg-white p-10 shadow-sm border-t-4 border-slate-300 hover:border-blue-700 hover:shadow-xl transition-all group">
              <Globe className="w-10 h-10 text-slate-700 mb-6 group-hover:text-blue-700 transition-colors" />
              <h3 className="text-xl font-bold mb-4 text-slate-900">Tenant Representation</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Strategic occupancy planning, lease negotiation, and site selection for global corporations.
              </p>
              <a href="#" className="text-blue-700 font-bold text-sm flex items-center hover:underline">Learn more <ChevronRight className="w-4 h-4 ml-1" /></a>
            </div>

            <div className="bg-white p-10 shadow-sm border-t-4 border-slate-300 hover:border-blue-700 hover:shadow-xl transition-all group">
              <BarChart3 className="w-10 h-10 text-slate-700 mb-6 group-hover:text-blue-700 transition-colors" />
              <h3 className="text-xl font-bold mb-4 text-slate-900">Valuation & Advisory</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Accurate asset valuation, feasibility studies, and market analysis to drive informed decisions.
              </p>
              <a href="#" className="text-blue-700 font-bold text-sm flex items-center hover:underline">Learn more <ChevronRight className="w-4 h-4 ml-1" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Featured Opportunities</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 h-80">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Office Building" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 bg-blue-700 text-white px-4 py-2 font-bold text-sm uppercase tracking-wide">
                  Class A Office
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">Skyline Tower, Chicago</h3>
              <p className="text-slate-500 mb-4">500,000 SF • CBD Location • LEED Gold</p>
              <div className="flex space-x-4 text-sm font-bold text-slate-700">
                <span>$450M Guide</span>
                <span>•</span>
                <span>95% Leased</span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 h-80">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Warehouse" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 bg-slate-900 text-white px-4 py-2 font-bold text-sm uppercase tracking-wide">
                  Industrial / Logistics
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">Port Logistics Park, NJ</h3>
              <p className="text-slate-500 mb-4">1.2M SF • 40' Clear Height • Rail Access</p>
              <div className="flex space-x-4 text-sm font-bold text-slate-700">
                <span>Call for Pricing</span>
                <span>•</span>
                <span>Build-to-Suit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Unlock Your Portfolio's Potential</h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Contact our advisory team for a confidential consultation regarding your commercial real estate strategy.
          </p>
          <button className="bg-white text-blue-900 px-10 py-4 font-bold hover:bg-blue-50 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 text-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-white font-bold text-lg mb-6 flex items-center">
                <Building2 className="w-5 h-5 mr-2" /> STRATA
              </div>
              <p className="leading-relaxed">Leading the industry in commercial real estate services, investment management, and development.</p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-6">Sectors</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white">Office</a></li>
                <li><a href="#" className="hover:text-white">Industrial</a></li>
                <li><a href="#" className="hover:text-white">Retail</a></li>
                <li><a href="#" className="hover:text-white">Multifamily</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Leadership</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Locations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-6">Subscribe</h4>
              <p className="mb-4">Get the latest market insights delivered to your inbox.</p>
              <div className="flex">
                <input type="email" placeholder="Email Address" className="bg-slate-900 border-none w-full p-3 text-white focus:ring-1 focus:ring-blue-700" />
                <button className="bg-blue-700 text-white px-4 font-bold hover:bg-blue-600">GO</button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-8 flex justify-between items-center">
            <div>&copy; 2024 Strata Commercial.</div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RealEstateDesign4;