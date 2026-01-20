import React, { useState } from 'react';
import { Search, MapPin, Phone, Menu, X, ArrowRight, Home, Key, DollarSign } from 'lucide-react';

function RealEstateDesign1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-900 font-serif text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur border-b border-white/10">
        <div className="container mx-auto px-6 h-24 flex justify-between items-center">
          <div className="text-2xl tracking-[0.2em] font-light">
            LUXE<span className="font-bold text-amber-500">ESTATE</span>
          </div>
          
          <div className="hidden md:flex space-x-12 text-sm tracking-widest uppercase font-sans">
            <a href="#" className="hover:text-amber-500 transition-colors">Properties</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Agents</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Services</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Journal</a>
          </div>

          <button className="hidden md:flex items-center space-x-2 border border-white/20 px-6 py-3 hover:bg-white hover:text-neutral-900 transition-all font-sans text-xs tracking-widest uppercase">
            <span>Contact</span>
          </button>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-3ad19d6f9805?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Luxury Mansion" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-transparent to-neutral-900"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-6 font-sans">Exclusive Properties</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
            Discover Your <br/>
            <span className="font-medium italic">Masterpiece.</span>
          </h1>
          
          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-full flex flex-col md:flex-row items-center max-w-2xl mx-auto border border-white/20">
            <div className="flex-1 px-6 py-3 w-full border-b md:border-b-0 md:border-r border-white/10">
              <label className="block text-xs text-gray-400 text-left mb-1 font-sans uppercase">Location</label>
              <input type="text" placeholder="Beverly Hills, CA" className="bg-transparent w-full outline-none text-white placeholder-gray-400 font-sans" />
            </div>
            <div className="flex-1 px-6 py-3 w-full border-b md:border-b-0 md:border-r border-white/10">
              <label className="block text-xs text-gray-400 text-left mb-1 font-sans uppercase">Property Type</label>
              <select className="bg-transparent w-full outline-none text-white font-sans bg-neutral-900">
                <option>Mansion</option>
                <option>Villa</option>
                <option>Penthouse</option>
              </select>
            </div>
            <div className="p-2 w-full md:w-auto">
              <button className="bg-amber-500 text-neutral-900 w-full md:w-12 h-12 rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Properties */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-light mb-2">Curated Collection</h2>
              <div className="h-0.5 w-20 bg-amber-500"></div>
            </div>
            <a href="#" className="hidden md:flex items-center text-amber-500 font-sans text-sm tracking-widest uppercase hover:text-white transition-colors">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1600607687939-ce8a6c25118c' : item === 2 ? '1600585154340-be6161a56a0c' : '1600047509807-c25cd6223ecf'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                    alt="Property" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-neutral-900 px-3 py-1 text-xs font-bold font-sans uppercase tracking-wider">
                    For Sale
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-light group-hover:text-amber-500 transition-colors">The Crown Penthouse</h3>
                  <span className="font-sans text-lg">$12,500,000</span>
                </div>
                <p className="text-gray-400 font-sans text-sm mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-amber-500" /> 123 Luxury Lane, Manhattan, NY
                </p>
                <div className="flex space-x-6 text-gray-500 font-sans text-xs uppercase tracking-wider border-t border-white/10 pt-4">
                  <span>5 Beds</span>
                  <span>6 Baths</span>
                  <span>4,500 Sq Ft</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/About */}
      <section className="py-24 bg-neutral-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-6 font-sans">Why Choose LuxeEstate</div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                We Redefine <br/> Luxury Living.
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed font-sans font-light">
                With over 30 years of experience in the high-end market, we provide unparalleled access to the world's most exclusive properties. Our white-glove service ensures every detail is handled with discretion and precision.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-neutral-900 p-4 rounded-full border border-white/10 text-amber-500">
                    <Key className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-medium mb-2">Off-Market Access</h4>
                    <p className="text-gray-500 font-sans text-sm">Gain exclusive entry to properties not listed on public exchanges.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-neutral-900 p-4 rounded-full border border-white/10 text-amber-500">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-medium mb-2">Global Investment</h4>
                    <p className="text-gray-500 font-sans text-sm">Strategic advice for international property portfolios and acquisitions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-full h-full border border-amber-500/30 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Interior" 
                className="w-full relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-20 border-t border-white/5 font-sans">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="text-2xl tracking-[0.2em] font-light mb-8 text-white">
                LUXE<span className="font-bold text-amber-500">ESTATE</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                The premier destination for luxury real estate worldwide. Elevating the standard of living since 1990.
              </p>
            </div>
            
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Properties</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Neighborhoods</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">New Developments</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Sold Listings</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-amber-500" /> 888 Fifth Avenue, NYC</li>
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2 text-amber-500" /> +1 (212) 555-0199</li>
                <li><a href="#" className="text-amber-500 hover:text-white transition-colors">inquiries@luxeestate.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <div>&copy; 2024 LuxeEstate International. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RealEstateDesign1;