import React, { useState } from 'react';
import { Sword, Circle, Hand, Sun, Menu, X } from 'lucide-react';

function FitnessDesign6() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-serif selection:bg-[#B22222] selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#F5F5F0]/95 border-b border-[#DCDCDC]">
        <div className="max-w-6xl mx-auto px-6 h-24 flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-black tracking-tighter text-[#B22222] flex items-center gap-2">
              <Sun className="h-8 w-8" /> <span>ZENITH</span>
            </div>
            <span className="text-[0.6rem] uppercase tracking-[0.4em] font-sans font-bold">Martial Arts</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-xs font-bold font-sans uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-[#B22222] transition-colors">Our Lineage</a>
            <a href="#" className="hover:text-[#B22222] transition-colors">Disciplines</a>
            <a href="#" className="hover:text-[#B22222] transition-colors">Instructors</a>
            <a href="#" className="hover:text-[#B22222] transition-colors">Schedule</a>
            <button className="bg-[#1A1A1A] text-white px-8 py-3 hover:bg-[#B22222] transition-colors">
              Begin Trial
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#1A1A1A]">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#F5F5F0] opacity-90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Martial arts silhouette" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        <div className="relative z-20 text-center max-w-4xl px-6">
          <div className="w-24 h-24 border-4 border-[#B22222] rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="font-sans font-bold text-3xl">道</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#1A1A1A] mb-8 leading-tight tracking-tight">
            MASTER THE <br/>
            <span className="text-[#B22222]">WAY OF WARRIOR</span>
          </h1>
          <p className="text-lg text-[#555] mb-12 max-w-xl mx-auto font-sans leading-relaxed">
            More than fighting. We cultivate discipline, respect, and unshakeable inner strength through the practice of traditional martial arts.
          </p>
          <div className="flex justify-center gap-8">
            <button className="bg-[#B22222] text-white px-10 py-4 text-sm font-sans font-bold uppercase tracking-widest hover:bg-[#8B0000] transition-colors shadow-lg">
              Start Your Path
            </button>
          </div>
        </div>

        {/* Japanese Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{backgroundImage: "radial-gradient(#1A1A1A 1px, transparent 1px)", backgroundSize: "30px 30px"}}></div>
      </div>

      {/* Disciplines */}
      <div className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 tracking-tight">OUR DISCIPLINES</h2>
            <div className="w-12 h-1 bg-[#B22222] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group cursor-pointer">
              <div className="w-full h-80 bg-[#F5F5F0] mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Karate" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-black mb-2">KARATE</h3>
              <p className="font-sans text-sm text-[#888] uppercase tracking-widest mb-4">Striking • Form • Spirit</p>
              <p className="text-[#555] leading-relaxed">Traditional Shotokan karate focusing on powerful linear strikes and deep stances.</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-full h-80 bg-[#F5F5F0] mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Jiu Jitsu" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-black mb-2">JIU-JITSU</h3>
              <p className="font-sans text-sm text-[#888] uppercase tracking-widest mb-4">Grappling • Control • Leverage</p>
              <p className="text-[#555] leading-relaxed">The gentle art. Learn to control opponents through technique rather than brute strength.</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-full h-80 bg-[#F5F5F0] mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Muay Thai" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-black mb-2">MUAY THAI</h3>
              <p className="font-sans text-sm text-[#888] uppercase tracking-widest mb-4">Clinch • Elbows • Kicks</p>
              <p className="text-[#555] leading-relaxed">The art of 8 limbs. High-intensity striking utilizing fists, elbows, knees, and shins.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="py-32 bg-[#1A1A1A] text-[#F5F5F0] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
          <Circle className="w-[800px] h-[800px] text-[#B22222]" strokeWidth={0.5} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-12">THE DOJO CODE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-[#B22222] text-6xl font-black mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">RESPECT</h3>
              <p className="font-sans text-gray-400 text-sm leading-relaxed">Bow when you enter. Bow when you leave. Respect your partners, your teachers, and yourself.</p>
            </div>
            <div>
              <div className="text-[#B22222] text-6xl font-black mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">DISCIPLINE</h3>
              <p className="font-sans text-gray-400 text-sm leading-relaxed">Motivation gets you started. Discipline keeps you going. We train when we don't want to.</p>
            </div>
            <div>
              <div className="text-[#B22222] text-6xl font-black mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">HUMILITY</h3>
              <p className="font-sans text-gray-400 text-sm leading-relaxed">Leave your ego at the door. There is always more to learn, and always someone better.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-20 px-6 border-t border-[#DCDCDC]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-black tracking-tighter text-[#1A1A1A] flex items-center gap-2">
              <Sun className="h-6 w-6 text-[#B22222]" /> <span>ZENITH</span>
            </div>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] font-sans font-bold text-[#888] mt-1">Martial Arts Academy</span>
          </div>
          
          <div className="font-sans text-xs font-bold uppercase tracking-widest text-[#555] flex flex-col md:flex-row gap-6 text-center md:text-left">
            <span>123 Warrior Way, Tokyo District</span>
            <span>+1 (555) 999-8888</span>
            <span>osu@zenithdojo.com</span>
          </div>
          
          <div className="font-sans text-xs text-[#888]">
            &copy; 2024 Zenith Dojo. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FitnessDesign6;
