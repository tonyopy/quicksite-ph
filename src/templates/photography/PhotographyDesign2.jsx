import React, { useState } from 'react';
import { Aperture, Instagram, Twitter, Mail, Menu, X, ChevronDown } from 'lucide-react';

const PhotographyDesign2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-neutral-950 text-neutral-200 min-h-screen font-sans selection:bg-red-900 selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="text-2xl font-bold tracking-widest uppercase text-white">
              Dark<span className="text-red-600">Room</span>
            </div>
            <div className="hidden md:flex space-x-12">
              <a href="#" className="text-sm font-light tracking-widest hover:text-red-500 transition-colors uppercase">Work</a>
              <a href="#" className="text-sm font-light tracking-widest hover:text-red-500 transition-colors uppercase">Series</a>
              <a href="#" className="text-sm font-light tracking-widest hover:text-red-500 transition-colors uppercase">About</a>
              <a href="#" className="text-sm font-light tracking-widest hover:text-red-500 transition-colors uppercase">Contact</a>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Cinematic Background" 
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-red-600 tracking-[0.5em] text-sm mb-4 uppercase">Visual Storyteller</p>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
            Shadows & <br/> Light
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="text-white w-8 h-8 opacity-50" />
        </div>
      </header>

      {/* Gallery Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest border-2 border-white px-6 py-2">Portrait</h3>
              </div>
            </div>
            <div className="group relative aspect-video overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Nature" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest border-2 border-white px-6 py-2">Nature</h3>
              </div>
            </div>
          </div>
          <div className="space-y-4 pt-0 md:pt-24">
            <div className="group relative aspect-video overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Urban" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest border-2 border-white px-6 py-2">Urban</h3>
              </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Film" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest border-2 border-white px-6 py-2">Film</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-neutral-900 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Aperture className="w-16 h-16 text-red-600 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            "Photography is the story I fail to put into words."
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-12">
            Based in the shadows of the city, focusing on high-contrast, emotive imagery that speaks louder than silence. Available for worldwide commissions.
          </p>
          <a href="#" className="inline-block border-b-2 border-red-600 text-white pb-1 hover:text-red-500 transition-colors uppercase tracking-widest">
            Read My Journal
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-500 text-sm tracking-widest mb-4 md:mb-0">
            © 2024 DARKROOM. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6">
            <Instagram className="w-5 h-5 text-neutral-500 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-neutral-500 hover:text-white cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 text-neutral-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhotographyDesign2;
