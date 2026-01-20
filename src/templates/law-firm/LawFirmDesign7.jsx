import React, { useState } from 'react';
import { Building, Map, Key, FileText, ChevronRight, Phone, Menu, X, ArrowUpRight } from 'lucide-react';

function LawFirmDesign7() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-serif text-stone-800">
      {/* Top Contact Bar */}
      <div className="bg-stone-900 text-stone-300 py-3 text-xs tracking-widest uppercase">
        <div className="max-w-screen-2xl mx-auto px-8 flex justify-between items-center">
          <div className="hidden md:flex space-x-8">
            <span>New York</span>
            <span>Hamptons</span>
            <span>Miami</span>
            <span>London</span>
          </div>
          <div className="flex space-x-6 ml-auto">
            <a href="#" className="hover:text-white transition-colors">Client Login</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <span className="text-stone-500">|</span>
            <span className="text-white">+1 (212) 555-0199</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-stone-200 sticky top-0 bg-white z-50">
        <div className="max-w-screen-2xl mx-auto px-8 h-24 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Building className="h-6 w-6" />
            <span>STONE & KEY</span>
          </div>

          <div className="hidden lg:flex space-x-12 text-sm font-sans tracking-wide font-medium text-stone-600">
            <a href="#" className="hover:text-black transition-colors">Residential</a>
            <a href="#" className="hover:text-black transition-colors">Commercial</a>
            <a href="#" className="hover:text-black transition-colors">Zoning & Land Use</a>
            <a href="#" className="hover:text-black transition-colors">Financing</a>
            <a href="#" className="hover:text-black transition-colors">The Firm</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-32 px-8 lg:hidden">
          <div className="flex flex-col space-y-6 text-2xl font-light">
            <a href="#" className="border-b border-stone-100 pb-4">Residential</a>
            <a href="#" className="border-b border-stone-100 pb-4">Commercial</a>
            <a href="#" className="border-b border-stone-100 pb-4">Zoning & Land Use</a>
            <a href="#" className="border-b border-stone-100 pb-4">Financing</a>
            <a href="#" className="border-b border-stone-100 pb-4">The Firm</a>
          </div>
        </div>
      )}

      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="bg-stone-100 flex items-center justify-center p-12 lg:p-24 order-2 lg:order-1">
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-7xl font-light mb-8 leading-none">
              Closing deals.<br/>
              <span className="font-bold">Opening doors.</span>
            </h1>
            <p className="text-xl text-stone-600 mb-12 font-sans font-light leading-relaxed">
              We provide sophisticated legal counsel for high-value real estate transactions. From skyline-defining developments to private luxury estates.
            </p>
            <button className="group flex items-center text-sm font-sans font-bold tracking-widest uppercase border-b-2 border-black pb-1 hover:text-stone-600 hover:border-stone-600 transition-all">
              Explore Our Expertise <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="relative order-1 lg:order-2 min-h-[50vh]">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Skyscraper architecture" 
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-24 px-8 border-b border-stone-200">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
            {[
              { icon: Building, title: 'Commercial Acquisitions', desc: 'Navigating complex purchase and sale agreements for office, retail, and industrial assets.' },
              { icon: Map, title: 'Development & Zoning', desc: 'Securing entitlements and resolving land use issues for new construction projects.' },
              { icon: Key, title: 'Luxury Residential', desc: 'Discrete and efficient representation for high-net-worth individuals in premium markets.' },
              { icon: FileText, title: 'Leasing', desc: 'Representing landlords and tenants in high-stakes commercial lease negotiations.' },
              { icon: Building, title: 'Real Estate Finance', desc: 'Structuring debt and equity financing for borrowers and lenders.' },
              { icon: Map, title: 'Joint Ventures', desc: 'Crafting partnership agreements for investment and development opportunities.' },
            ].map((service, index) => (
              <div key={index} className="bg-white p-12 hover:bg-stone-50 transition-colors group">
                <service.icon className="h-8 w-8 text-stone-400 mb-8 group-hover:text-black transition-colors" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-stone-500 font-sans leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notable Transactions */}
      <div className="py-24 px-8 bg-stone-900 text-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-stone-800 pb-8">
            <h2 className="text-4xl font-light">Selected Transactions</h2>
            <a href="#" className="text-stone-400 hover:text-white font-sans text-sm tracking-widest uppercase mt-4 md:mt-0">View All Deals</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { amount: '$450M', type: 'Office Tower Acquisition', loc: 'Midtown Manhattan' },
              { amount: '$125M', type: 'Luxury Condo Development', loc: 'Miami Beach' },
              { amount: '$85M', type: 'Retail Portfolio Refinance', loc: 'Los Angeles' },
            ].map((deal, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="text-5xl font-light text-stone-600 group-hover:text-white transition-colors mb-4">{deal.amount}</div>
                <h4 className="text-xl font-bold mb-2">{deal.type}</h4>
                <p className="text-stone-500 font-sans text-sm tracking-wide uppercase">{deal.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-16 px-8 text-stone-900">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold tracking-tight flex items-center gap-2 mb-6">
                <Building className="h-6 w-6" />
                <span>STONE & KEY</span>
              </div>
              <p className="font-sans text-stone-500 max-w-md leading-relaxed">
                A premier boutique law firm dedicated exclusively to the practice of real estate law. We build lasting relationships on a foundation of trust and results.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 font-sans text-xs tracking-widest uppercase">Offices</h4>
              <ul className="space-y-4 font-sans text-stone-500 text-sm">
                <li>100 Park Avenue, NY</li>
                <li>50 Main Street, East Hampton</li>
                <li>1200 Brickell Bay Dr, Miami</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 font-sans text-xs tracking-widest uppercase">Connect</h4>
              <ul className="space-y-4 font-sans text-stone-500 text-sm">
                <li><a href="#" className="hover:text-black">LinkedIn</a></li>
                <li><a href="#" className="hover:text-black">Instagram</a></li>
                <li><a href="#" className="hover:text-black">Email Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-200 pt-8 flex justify-between items-center font-sans text-xs text-stone-400">
            <p>&copy; 2024 Stone & Key LLP. Attorney Advertising.</p>
            <p>Designed for Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LawFirmDesign7;
