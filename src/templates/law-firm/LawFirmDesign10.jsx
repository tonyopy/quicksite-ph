import React, { useState } from 'react';
import { Scale, Clock, Award, Book, Phone, Mail, ChevronRight, Menu, X } from 'lucide-react';

function LawFirmDesign10() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-serif text-[#d4af37]">
      {/* Decorative Border */}
      <div className="fixed top-4 left-4 right-4 bottom-4 border border-[#d4af37]/20 pointer-events-none z-50 hidden md:block"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#d4af37]/20">
        <div className="max-w-6xl mx-auto px-6 h-24 flex justify-between items-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold tracking-widest text-[#f5f5f5]">VANDERBILT</span>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-[#d4af37]">Attorneys at Law</span>
          </div>

          <div className="hidden md:flex items-center space-x-12 font-sans text-xs tracking-[0.2em] text-[#f5f5f5] uppercase">
            <a href="#" className="hover:text-[#d4af37] transition-colors">The Firm</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Expertise</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Legacy</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Contact</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#d4af37]">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="w-px h-24 bg-gradient-to-b from-transparent to-[#d4af37] mx-auto mb-8"></div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#f5f5f5] mb-8 leading-tight">
            A Tradition of <br/>
            <span className="font-normal italic text-[#d4af37]">Uncompromising Excellence</span>
          </h1>
          <p className="text-lg text-gray-400 font-sans font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed">
            For over a century, we have provided discreet, strategic counsel to the world's most discerning families and corporations.
          </p>
          <button className="bg-transparent border border-[#d4af37] text-[#d4af37] px-10 py-4 text-xs font-sans font-bold tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-500">
            Request Consultation
          </button>
          <div className="w-px h-24 bg-gradient-to-t from-transparent to-[#d4af37] mx-auto mt-8"></div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-32 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { icon: Scale, title: 'Integrity', desc: 'Upholding the highest ethical standards in every action we take.' },
              { icon: Clock, title: 'Dedication', desc: 'Unwavering commitment to our clients\' success, regardless of the hours required.' },
              { icon: Award, title: 'Distinction', desc: 'Recognized globally for our precedent-setting victories and legal scholarship.' },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 border border-[#d4af37]/30 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:border-[#d4af37] transition-colors duration-500">
                  <item.icon className="h-6 w-6 text-[#d4af37]" />
                </div>
                <h3 className="text-xl text-[#f5f5f5] mb-4 tracking-wide">{item.title}</h3>
                <p className="text-gray-500 font-sans font-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl text-[#f5f5f5] mb-12">Areas of Practice</h2>
              <div className="space-y-8">
                {[
                  'Corporate Governance & Strategy',
                  'High-Stakes Litigation',
                  'Trusts, Estates & Wealth Preservation',
                  'International Arbitration',
                  'White Collar Defense'
                ].map((area, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-[#d4af37]/20 pb-4 group cursor-pointer">
                    <span className="text-xl text-gray-400 group-hover:text-[#d4af37] transition-colors">{area}</span>
                    <ChevronRight className="h-5 w-5 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border border-[#d4af37]/30"></div>
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Law library" 
                className="relative w-full h-[600px] object-cover filter sepia-[.25] brightness-75 contrast-125"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#050505] py-24 px-6 border-t border-[#d4af37]/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <span className="text-3xl font-bold tracking-widest text-[#f5f5f5]">VANDERBILT</span>
            <div className="w-12 h-px bg-[#d4af37] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 font-sans font-light text-sm tracking-wide text-gray-500">
            <div>
              <h4 className="text-[#d4af37] uppercase tracking-widest mb-6 text-xs font-bold">New York</h4>
              <p>55 Hudson Yards</p>
              <p>New York, NY 10001</p>
              <p>+1 (212) 555-0100</p>
            </div>
            <div>
              <h4 className="text-[#d4af37] uppercase tracking-widest mb-6 text-xs font-bold">London</h4>
              <p>1 Canada Square</p>
              <p>Canary Wharf, London</p>
              <p>+44 20 7555 0100</p>
            </div>
            <div>
              <h4 className="text-[#d4af37] uppercase tracking-widest mb-6 text-xs font-bold">Singapore</h4>
              <p>10 Collyer Quay</p>
              <p>Singapore 049315</p>
              <p>+65 6555 0100</p>
            </div>
          </div>
          
          <div className="text-xs text-gray-700 font-sans tracking-widest uppercase">
            &copy; 2024 Vanderbilt Law. All Rights Reserved. Attorney Advertising.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LawFirmDesign10;
