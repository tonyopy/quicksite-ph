import React, { useState } from 'react';
import { Target, Shield, Zap, Skull, Menu, X, ArrowRight } from 'lucide-react';

function FitnessDesign8() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111] text-[#EEE] font-mono selection:bg-[#FFFF00] selection:text-black">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#111]/90 backdrop-blur-md border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2">
            <Skull className="h-8 w-8 text-[#FFFF00]" />
            <span>Iron<span className="text-[#FFFF00]">Jaw</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#FFFF00] transition-colors">Trainers</a>
            <a href="#" className="hover:text-[#FFFF00] transition-colors">Classes</a>
            <a href="#" className="hover:text-[#FFFF00] transition-colors">Membership</a>
            <a href="#" className="hover:text-[#FFFF00] transition-colors">Fighters</a>
            <button className="bg-[#FFFF00] text-black px-6 py-2 font-black hover:bg-white transition-colors skew-x-[-10deg]">
              <span className="block skew-x-[10deg]">Free Session</span>
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Boxing gym" 
            className="w-full h-full object-cover opacity-20 grayscale contrast-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-[#111]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-30 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-6">
          <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] mb-6 tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,0,0.3)]">
            Fight For <br/>
            <span className="text-[#FFFF00]">It.</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-400 mb-10 max-w-xl mx-auto uppercase tracking-wider">
            Real boxing. Real trainers. Real results. Leave your ego at the door and put in the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#FFFF00] text-black px-10 py-5 text-xl font-black uppercase tracking-tighter hover:bg-white hover:scale-105 transition-all shadow-[5px_5px_0px_rgba(255,255,255,0.2)]">
              Step in the Ring
            </button>
          </div>
        </div>
      </div>

      {/* Info Bar */}
      <div className="border-y border-[#333] bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#333]">
          <div className="p-8 text-center group hover:bg-[#222] transition-colors">
            <Target className="h-10 w-10 text-[#FFFF00] mx-auto mb-4 group-hover:rotate-180 transition-transform duration-500" />
            <h3 className="text-xl font-black uppercase mb-2">Technique</h3>
            <p className="text-sm text-gray-500">Learn from pros. Footwork, head movement, and striking mechanics.</p>
          </div>
          <div className="p-8 text-center group hover:bg-[#222] transition-colors">
            <Zap className="h-10 w-10 text-[#FFFF00] mx-auto mb-4 group-hover:scale-125 transition-transform duration-200" />
            <h3 className="text-xl font-black uppercase mb-2">Conditioning</h3>
            <p className="text-sm text-gray-500">Old school calisthenics, heavy bag work, and mitt drills.</p>
          </div>
          <div className="p-8 text-center group hover:bg-[#222] transition-colors">
            <Shield className="h-10 w-10 text-[#FFFF00] mx-auto mb-4 group-hover:translate-y-[-5px] transition-transform duration-300" />
            <h3 className="text-xl font-black uppercase mb-2">Sparring</h3>
            <p className="text-sm text-gray-500">Controlled environment to test your skills. Mouthpiece required.</p>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[600px] group overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Boxing gloves" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-all duration-500 flex items-center justify-center">
            <h2 className="text-5xl font-black uppercase text-white italic transform -skew-x-12 border-4 border-[#FFFF00] p-4">
              Heavy Bag
            </h2>
          </div>
        </div>
        <div className="relative h-[600px] group overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Boxer wrapping hands" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-all duration-500 flex items-center justify-center">
            <h2 className="text-5xl font-black uppercase text-white italic transform -skew-x-12 border-4 border-[#FFFF00] p-4">
              Mitt Work
            </h2>
          </div>
        </div>
      </div>

      {/* Schedule / Location */}
      <div className="py-24 px-6 bg-[#FFFF00] text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-6xl font-black uppercase mb-8 leading-none">The <br/>Dungeon</h2>
            <p className="text-xl font-bold mb-8 max-w-md">
              Located in the basement of the old textile factory. No AC. No mirrors. Just sweat.
            </p>
            <div className="space-y-4 font-bold text-lg">
              <p>44 Industrial Ave, Brooklyn NY</p>
              <p>Open Daily: 5am - 10pm</p>
              <p>Drop-in Rate: $30</p>
            </div>
          </div>
          <div className="flex-1 bg-black p-8 text-white skew-x-[-3deg] shadow-[20px_20px_0px_rgba(0,0,0,0.2)]">
            <h3 className="text-3xl font-black uppercase text-[#FFFF00] mb-6">Today's Card</h3>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-[#333] pb-2">
                <span className="font-bold">06:00 AM</span>
                <span className="text-gray-400">Wake Up & Fight</span>
              </li>
              <li className="flex justify-between border-b border-[#333] pb-2">
                <span className="font-bold">12:00 PM</span>
                <span className="text-gray-400">Lunchtime Box</span>
              </li>
              <li className="flex justify-between border-b border-[#333] pb-2">
                <span className="font-bold">05:30 PM</span>
                <span className="text-gray-400">Technical Sparring</span>
              </li>
              <li className="flex justify-between border-b border-[#333] pb-2">
                <span className="font-bold">07:00 PM</span>
                <span className="text-gray-400">Fighter Conditioning</span>
              </li>
            </ul>
            <button className="w-full mt-8 bg-[#FFFF00] text-black font-black uppercase py-3 hover:bg-white transition-colors">
              Book Spot
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111] py-16 px-6 border-t border-[#333]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
             <Skull className="h-6 w-6 text-[#FFFF00]" />
             <span className="text-xl font-black uppercase">IronJaw</span>
          </div>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-[#FFFF00] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#FFFF00] transition-colors">YouTube</a>
            <a href="#" className="hover:text-[#FFFF00] transition-colors">Shop Gear</a>
          </div>
          <div className="text-xs text-gray-700 font-bold uppercase">
            &copy; 2024 IronJaw Boxing Club.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FitnessDesign8;
