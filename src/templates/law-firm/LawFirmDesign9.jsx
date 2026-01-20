import React, { useState } from 'react';
import { Leaf, Globe, Wind, Droplets, Sun, ChevronRight, Menu, X, ArrowUpRight } from 'lucide-react';

function LawFirmDesign9() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1F5F0] font-sans text-emerald-950">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#F1F5F0]/80 backdrop-blur-md border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Leaf className="h-8 w-8 text-emerald-700" />
            <span className="text-2xl font-serif font-bold tracking-tight text-emerald-900">EcoJustice</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-emerald-800/80">
            <a href="#" className="hover:text-emerald-700 transition-colors">Our Mission</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Practice Areas</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Impact</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">News</a>
            <button className="bg-emerald-800 text-[#F1F5F0] px-6 py-2 rounded-full hover:bg-emerald-900 transition-colors">
              Get Involved
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-emerald-900">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-24">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
           <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
            alt="Forest sunlight" 
            className="w-full h-full object-cover rounded-bl-[100px]"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="lg:w-1/2 pr-0 lg:pr-12">
            <div className="inline-block border border-emerald-600/30 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              Environmental Law & Advocacy
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-emerald-950 mb-8 leading-[1.1]">
              Defending nature. <br/>
              <span className="text-emerald-600">Protecting futures.</span>
            </h1>
            <p className="text-xl text-emerald-900/70 mb-12 leading-relaxed max-w-xl">
              We are a dedicated team of attorneys fighting for clean air, safe water, and a sustainable planet. We hold polluters accountable and champion regulatory change.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-emerald-800 hover:bg-emerald-900 text-[#F1F5F0] px-8 py-4 rounded-full font-medium transition-all shadow-xl shadow-emerald-900/10 flex items-center justify-center">
                Report a Violation <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="group flex items-center justify-center text-emerald-800 font-medium hover:text-emerald-600 transition-colors">
                View Recent Victories <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-emerald-900 text-[#F1F5F0] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2 text-emerald-400">50K+</div>
              <p className="text-emerald-200 text-sm uppercase tracking-wider">Acres Preserved</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2 text-emerald-400">$200M</div>
              <p className="text-emerald-200 text-sm uppercase tracking-wider">Restoration Funds Won</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2 text-emerald-400">100+</div>
              <p className="text-emerald-200 text-sm uppercase tracking-wider">Corporate Settlements</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2 text-emerald-400">30</div>
              <p className="text-emerald-200 text-sm uppercase tracking-wider">Years of Advocacy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Areas of Focus */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-emerald-950 mb-6">Our Legal Focus</h2>
            <div className="h-1 w-24 bg-emerald-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Droplets, title: 'Clean Water Act', desc: 'Litigation against industrial discharge and protection of wetlands and waterways.' },
              { icon: Wind, title: 'Clean Air Act', desc: 'Fighting toxic emissions and enforcing air quality standards in vulnerable communities.' },
              { icon: Leaf, title: 'Conservation', desc: 'Land use disputes, easement enforcement, and protecting endangered species habitats.' },
              { icon: Sun, title: 'Renewable Energy', desc: 'Regulatory guidance for solar, wind, and sustainable energy projects.' },
              { icon: Globe, title: 'Climate Litigation', desc: 'Holding fossil fuel companies accountable for climate change impacts.' },
              { icon: Leaf, title: 'Environmental Justice', desc: 'Ensuring fair treatment and involvement of all people in environmental laws.' },
            ].map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-emerald-900/5 hover:border-emerald-600/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <area.icon className="h-6 w-6 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3 font-serif">{area.title}</h3>
                <p className="text-emerald-800/70 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote/Image Section */}
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-900/10 transform rotate-3 rounded-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wind turbines" 
                className="relative rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 w-full object-cover h-[500px]"
              />
            </div>
            <div>
              <div className="text-emerald-600 mb-6">
                <Globe className="h-10 w-10" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-emerald-950 mb-8 leading-tight">
                "The Earth does not belong to us: we belong to the Earth."
              </h2>
              <p className="text-lg text-emerald-800/70 mb-8 leading-relaxed">
                We combine deep legal expertise with scientific understanding to tackle the most pressing environmental challenges of our time. Our attorneys are not just lawyers; they are passionate advocates for a greener world.
              </p>
              <button className="text-emerald-800 font-bold border-b-2 border-emerald-800 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                Read Our Sustainability Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="h-6 w-6 text-emerald-400" />
                <span className="text-xl font-serif font-bold text-white">EcoJustice</span>
              </div>
              <p className="max-w-md leading-relaxed opacity-80">
                Pioneering environmental law since 1994. We are committed to using the power of the law to fight for a sustainable future for all living things.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-4 text-sm opacity-80">
                <li>123 Green Way, Suite 400</li>
                <li>Seattle, WA 98101</li>
                <li>(555) 444-3333</li>
                <li>action@ecojustice.org</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
            <p>&copy; 2024 EcoJustice Law Group. All rights reserved.</p>
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

export default LawFirmDesign9;
