import React, { useState } from 'react';
import { Sun, Battery, Shield, ArrowRight, Menu, X, Check } from 'lucide-react';

function SolarDesign1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-sky-500 p-1.5 rounded-lg">
              <Sun className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Bright<span className="text-sky-500">Path</span> Solar</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#" className="hover:text-sky-500 transition-colors">Residential</a>
            <a href="#" className="hover:text-sky-500 transition-colors">Commercial</a>
            <a href="#" className="hover:text-sky-500 transition-colors">Battery Storage</a>
            <a href="#" className="hover:text-sky-500 transition-colors">Our Work</a>
            <button className="bg-sky-500 text-white px-6 py-2.5 rounded-full hover:bg-sky-600 transition-colors font-bold shadow-md shadow-sky-200">
              Get a Quote
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-600">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-50 skew-x-[-10deg] transform translate-x-20 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold mb-6">
              <Shield className="h-4 w-4" /> Rated #1 Solar Installer in 2024
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Power Your Home with <br/>
              <span className="text-sky-500">Clean Energy.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Save money from day one with $0 down. Lock in your energy rates and protect your home from rising utility costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-sky-500 text-white px-8 py-4 rounded-full font-bold hover:bg-sky-600 transition-colors shadow-lg shadow-sky-200 flex items-center justify-center">
                Calculate Savings <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors">
                View Incentives
              </button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" /> 25-Year Warranty
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" /> 24/7 Monitoring
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Modern home with solar panels" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Sun className="h-8 w-8 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold">Annual Savings</p>
                  <p className="text-2xl font-bold text-slate-900">$1,850+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">Simple Steps to Solar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-slate-100 -z-10"></div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-4">Free Design</h3>
              <p className="text-slate-600">We analyze your roof and energy usage to create a custom solar system.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-4">Permitting</h3>
              <p className="text-slate-600">We handle all the paperwork, permits, and inspections with your city.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-4">Installation</h3>
              <p className="text-slate-600">Our certified team installs your system in one day. Flip the switch and save.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Battery Section */}
      <div className="bg-slate-900 text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute inset-0 bg-sky-500 blur-[100px] opacity-20"></div>
             <img 
              src="https://images.unsplash.com/photo-1620641933413-c2e27be43f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Battery storage system" 
              className="rounded-2xl relative z-10"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 bg-sky-900 text-sky-300 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Energy Independence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Keep the Lights On. <br/>Even When the Grid is Off.</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Pair your solar with a smart battery backup. Store excess energy during the day and use it at night or during blackouts.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <Battery className="h-6 w-6 text-sky-500" />
                <span className="font-medium">Seamless Backup Power</span>
              </li>
              <li className="flex items-center gap-3">
                <Sun className="h-6 w-6 text-sky-500" />
                <span className="font-medium">Maximize Solar Self-Consumption</span>
              </li>
              <li className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-sky-500" />
                <span className="font-medium">10-Year Battery Warranty</span>
              </li>
            </ul>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors">
              Learn About Storage
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-sky-500 p-1.5 rounded-lg">
                  <Sun className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">Bright<span className="text-sky-500">Path</span> Solar</span>
              </div>
              <p className="text-slate-500 max-w-sm">
                Empowering homeowners with clean, affordable energy solutions. We are committed to a sustainable future, one roof at a time.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Services</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-sky-500">Solar Panels</a></li>
                <li><a href="#" className="hover:text-sky-500">Battery Backup</a></li>
                <li><a href="#" className="hover:text-sky-500">EV Chargers</a></li>
                <li><a href="#" className="hover:text-sky-500">Roofing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-sky-500">Solar Calculator</a></li>
                <li><a href="#" className="hover:text-sky-500">Tax Credits</a></li>
                <li><a href="#" className="hover:text-sky-500">Support</a></li>
                <li><a href="#" className="hover:text-sky-500">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
            <p>&copy; 2024 BrightPath Solar. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-600">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SolarDesign1;
