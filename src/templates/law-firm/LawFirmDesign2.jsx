import React, { useState } from 'react';
import { Shield, Gavel, Scale, AlertTriangle, Phone, Menu, X, Check, Lock, MapPin, Mail } from 'lucide-react';

function LawFirmDesign2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans">
      {/* Navbar */}
      <nav className="border-b border-neutral-800 bg-neutral-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-red-700 p-2 rounded-sm">
                <Gavel className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tighter uppercase">Ironclad Defense</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-neutral-300 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-widest">Practice Areas</a>
              <a href="#" className="text-neutral-300 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-widest">Case Results</a>
              <a href="#" className="text-neutral-300 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-widest">Attorneys</a>
              <a href="#" className="text-neutral-300 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-widest">Reviews</a>
              <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-widest transition-colors flex items-center">
                <Phone className="h-4 w-4 mr-2" /> 24/7 Hotline
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
                {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-800 absolute w-full z-50 border-b border-red-700">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#" className="block py-3 text-neutral-300 font-bold uppercase border-b border-neutral-700">Practice Areas</a>
              <a href="#" className="block py-3 text-neutral-300 font-bold uppercase border-b border-neutral-700">Case Results</a>
              <a href="#" className="block py-3 text-neutral-300 font-bold uppercase border-b border-neutral-700">Attorneys</a>
              <button className="w-full mt-4 bg-red-700 text-white px-5 py-4 font-bold uppercase tracking-widest">
                Call Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Courthouse columns" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-700 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
              Aggressive Criminal Defense
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tight">
              WHEN YOUR FREEDOM IS <span className="text-red-600">ON THE LINE.</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-10 leading-relaxed max-w-2xl font-light">
              We fight relentlessly for the accused. Don't face the system alone. Get a former prosecutor on your side today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-5 rounded-sm font-bold uppercase tracking-widest transition-colors shadow-lg shadow-red-900/20">
                Free Case Evaluation
              </button>
              <button className="border-2 border-neutral-700 hover:border-white text-white px-8 py-5 rounded-sm font-bold uppercase tracking-widest transition-colors">
                View Recent Victories
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-red-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center border-r border-red-600 last:border-0">
              <div className="text-3xl font-black">1000+</div>
              <div className="text-xs uppercase tracking-widest mt-1 opacity-80">Cases Dismissed</div>
            </div>
            <div className="text-center border-r border-red-600 last:border-0">
              <div className="text-3xl font-black">20+</div>
              <div className="text-xs uppercase tracking-widest mt-1 opacity-80">Years Experience</div>
            </div>
            <div className="text-center border-r border-red-600 last:border-0">
              <div className="text-3xl font-black">24/7</div>
              <div className="text-xs uppercase tracking-widest mt-1 opacity-80">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black">Top 100</div>
              <div className="text-xs uppercase tracking-widest mt-1 opacity-80">Trial Lawyers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas */}
      <div className="py-24 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">What We Defend</h2>
              <h3 className="text-4xl font-bold text-white">Areas of Practice</h3>
            </div>
            <a href="#" className="text-neutral-400 hover:text-white mt-4 md:mt-0 flex items-center group">
              View All Areas <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'DUI Defense', desc: 'Challenging evidence, protecting your license, and minimizing impact.' },
              { title: 'Drug Crimes', desc: 'From possession to trafficking, we fight illegal search and seizure.' },
              { title: 'Violent Crimes', desc: 'Assault, battery, and homicide defense with aggressive litigation.' },
              { title: 'White Collar', desc: 'Fraud, embezzlement, and cybercrime defense for professionals.' },
              { title: 'Federal Crimes', desc: 'Experienced representation in high-stakes federal court cases.' },
              { title: 'Expungements', desc: 'Clear your record and reclaim your future opportunities.' },
            ].map((area, index) => (
              <div key={index} className="bg-neutral-900 p-8 border border-neutral-700 hover:border-red-600 transition-colors group cursor-pointer">
                <Shield className="h-10 w-10 text-neutral-600 group-hover:text-red-600 mb-6 transition-colors" />
                <h4 className="text-xl font-bold text-white mb-3">{area.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Don't Talk to the Police Without a Lawyer.</h2>
          <p className="text-xl text-neutral-300 mb-10">
            Anything you say can and will be used against you. Exercise your right to remain silent and call us immediately.
          </p>
          <div className="bg-white text-neutral-900 p-8 rounded-lg max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Free Confidential Consultation</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full bg-neutral-100 border border-neutral-200 p-3 rounded focus:outline-none focus:border-red-600" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-neutral-100 border border-neutral-200 p-3 rounded focus:outline-none focus:border-red-600" />
              </div>
              <textarea placeholder="Briefly describe your situation..." rows="4" className="w-full bg-neutral-100 border border-neutral-200 p-3 rounded focus:outline-none focus:border-red-600"></textarea>
              <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 uppercase tracking-widest transition-colors">
                Get Help Now
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-4 text-center">
              Your information is 100% confidential and privileged.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-950 py-16 border-t border-neutral-800 text-sm text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Gavel className="h-5 w-5 text-red-600" />
                <span className="text-lg font-bold text-white uppercase">Ironclad Defense</span>
              </div>
              <p className="mb-6">
                Aggressive criminal defense representation serving the entire state. We are committed to protecting your rights and freedom.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons would go here */}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <span>500 Justice Blvd, Suite 100<br/>Metropolis, NY 10012</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <span>(555) 911-DEFENSE</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <span>help@ironcladdefense.com</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-500 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Practice Areas</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Case Results</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">Disclaimer</h4>
              <p className="text-xs leading-relaxed">
                The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
              </p>
            </div>
          </div>
          
          <div className="border-t border-neutral-900 mt-12 pt-8 text-center text-xs">
            &copy; 2024 Ironclad Defense Law Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LawFirmDesign2;
