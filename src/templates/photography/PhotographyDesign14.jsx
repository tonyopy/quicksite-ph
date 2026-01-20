import React from 'react';
import { Zap, Terminal, Globe } from 'lucide-react';

const PhotographyDesign14 = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-[#00ff00] font-mono selection:bg-[#00ff00] selection:text-black overflow-x-hidden">
      
      {/* Glitch Overlay Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover"></div>

      {/* Nav */}
      <nav className="border-b border-[#00ff00]/30 p-4 flex justify-between items-center bg-[#050505]/90 backdrop-blur sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 animate-pulse" />
          <span className="font-bold tracking-widest">CYBER.CAM_V2.0</span>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:bg-[#00ff00] hover:text-black px-2 py-1 transition-colors">[WORK]</a>
          <a href="#" className="hover:bg-[#00ff00] hover:text-black px-2 py-1 transition-colors">[LOGS]</a>
          <a href="#" className="hover:bg-[#00ff00] hover:text-black px-2 py-1 transition-colors">[CONTACT]</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-24 px-4 md:px-12 border-b border-[#00ff00]/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter relative inline-block">
              <span className="absolute -left-1 -top-1 text-[#ff00ff] mix-blend-screen opacity-70 animate-pulse">FUTURE</span>
              <span className="absolute -right-1 -bottom-1 text-[#00ffff] mix-blend-screen opacity-70 animate-pulse">FUTURE</span>
              FUTURE<br/>VISION
            </h1>
            <p className="text-[#00ff00]/70 text-lg mb-8 max-w-md border-l-2 border-[#00ff00] pl-4">
              > INITIALIZING PORTFOLIO SEQUENCE...<br/>
              > LOADING HIGH_RES ASSETS...<br/>
              > DIGITAL PHOTOGRAPHY & ART DIRECTION.
            </p>
            <button className="bg-[#00ff00] text-black font-bold px-8 py-4 hover:bg-white hover:text-black transition-colors uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-4 h-4 fill-current" /> Execute
            </button>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Cyberpunk" 
              className="relative w-full h-auto grayscale contrast-125 border border-[#00ff00] group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute top-2 right-2 bg-black border border-[#00ff00] px-2 text-xs">
              IMG_001.RAW
            </div>
          </div>
        </div>
      </header>

      {/* Grid */}
      <section className="py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-[#00ff00]/30 pb-4">
            <h2 className="text-4xl font-bold">DATABASE</h2>
            <div className="text-xs animate-pulse">
              SYSTEM STATUS: ONLINE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'NEON_CITY', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'HARDWARE', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'GLITCH_ART', img: 'https://images.unsplash.com/photo-1534234828563-0aa3c39d5e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
            ].map((item, i) => (
              <div key={i} className="group relative border border-[#00ff00]/30 hover:border-[#00ff00] transition-colors bg-[#001100]">
                <div className="overflow-hidden h-64 relative">
                  <div className="absolute inset-0 bg-[#00ff00] mix-blend-color opacity-20 group-hover:opacity-0 transition-opacity z-10"></div>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <Globe className="w-4 h-4 opacity-50 group-hover:opacity-100 animate-spin-slow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#00ff00]/30 py-12 text-center text-[#00ff00]/50 text-xs">
        // END OF LINE_<br/>
        // © 2077 CYBER.CAM
      </footer>
    </div>
  );
};

export default PhotographyDesign14;
