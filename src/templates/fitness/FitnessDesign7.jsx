import React, { useState } from 'react';
import { AlignCenter, Circle, Wind, ArrowRight, Menu, X, Play } from 'lucide-react';

function FitnessDesign7() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#4A4A4A] font-sans selection:bg-[#D8CFC4] selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#FDFCF8]/80 backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto px-8 h-24 flex justify-between items-center">
          <div className="text-xl font-light tracking-[0.2em] uppercase">
            Form <span className="font-bold">+</span> Flow
          </div>

          <div className="hidden md:flex items-center gap-12 text-xs font-medium uppercase tracking-[0.15em] text-[#8C8C8C]">
            <a href="#" className="hover:text-[#4A4A4A] transition-colors">Studio</a>
            <a href="#" className="hover:text-[#4A4A4A] transition-colors">Method</a>
            <a href="#" className="hover:text-[#4A4A4A] transition-colors">Instructors</a>
            <a href="#" className="hover:text-[#4A4A4A] transition-colors">Schedule</a>
            <button className="bg-[#D8CFC4] text-white px-8 py-3 rounded-full hover:bg-[#C5Bcb1] transition-colors">
              Book Class
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#4A4A4A]">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 min-h-screen flex items-center">
        <div className="absolute top-0 right-0 w-[45%] h-full bg-[#F5F2EB] hidden lg:block"></div>
        
        <div className="max-w-screen-2xl mx-auto px-8 w-full relative z-10 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 pt-12 lg:pt-0">
            <h1 className="text-6xl md:text-8xl font-light text-[#2A2A2A] mb-10 leading-[1.1]">
              Lengthen. <br/>
              Strengthen. <br/>
              <span className="font-serif italic text-[#D8CFC4]">Align.</span>
            </h1>
            <p className="text-lg text-[#666] mb-12 leading-relaxed max-w-md font-light">
              Contemporary Pilates reformer classes designed to sculpt your body and clear your mind. Precision movement for modern living.
            </p>
            <div className="flex items-center gap-8">
              <button className="border-b border-[#4A4A4A] pb-1 text-sm uppercase tracking-widest hover:text-[#D8CFC4] hover:border-[#D8CFC4] transition-colors">
                View Class Schedule
              </button>
              <button className="flex items-center gap-3 text-sm uppercase tracking-widest text-[#8C8C8C] hover:text-[#4A4A4A] transition-colors">
                <div className="w-10 h-10 rounded-full border border-[#E0E0E0] flex items-center justify-center">
                  <Play className="h-3 w-3 ml-0.5" />
                </div>
                Our Method
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-[3/4] overflow-hidden rounded-t-[200px]">
                <img 
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Pilates reformer" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
             </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-32 px-8 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col gap-6 group">
              <div className="w-12 h-12 bg-[#F5F2EB] rounded-full flex items-center justify-center group-hover:bg-[#D8CFC4] transition-colors">
                <AlignCenter className="h-5 w-5 text-[#4A4A4A] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-[#2A2A2A]">The Reformer</h3>
              <p className="text-[#8C8C8C] font-light leading-relaxed">
                State-of-the-art Allegro 2 machines that provide smooth resistance for a challenging yet low-impact workout.
              </p>
            </div>
            <div className="flex flex-col gap-6 group">
              <div className="w-12 h-12 bg-[#F5F2EB] rounded-full flex items-center justify-center group-hover:bg-[#D8CFC4] transition-colors">
                <Circle className="h-5 w-5 text-[#4A4A4A] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-[#2A2A2A]">Small Groups</h3>
              <p className="text-[#8C8C8C] font-light leading-relaxed">
                Classes capped at 8 students to ensure personalized attention and proper form correction from our expert instructors.
              </p>
            </div>
            <div className="flex flex-col gap-6 group">
              <div className="w-12 h-12 bg-[#F5F2EB] rounded-full flex items-center justify-center group-hover:bg-[#D8CFC4] transition-colors">
                <Wind className="h-5 w-5 text-[#4A4A4A] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-[#2A2A2A]">Breath & Core</h3>
              <p className="text-[#8C8C8C] font-light leading-relaxed">
                Connect deep into your powerhouse. Build long, lean muscle while improving posture and flexibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Offer */}
      <div className="py-32 px-8 bg-[#F5F2EB]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#D8CFC4] font-serif italic text-2xl mb-4 block">New Client Special</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#2A2A2A] mb-8">
            3 Classes for $75
          </h2>
          <p className="text-[#666] mb-10 max-w-lg mx-auto font-light leading-relaxed">
            Experience the full range of our offerings. From our foundational "Form" class to our high-intensity "Flow" sessions.
          </p>
          <button className="bg-[#2A2A2A] text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-[#4A4A4A] transition-colors shadow-xl shadow-[#2A2A2A]/10">
            Claim Offer
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#FDFCF8] py-20 px-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="text-lg font-light tracking-[0.2em] uppercase mb-8">
              Form <span className="font-bold">+</span> Flow
            </div>
            <div className="flex gap-4">
              <input type="email" placeholder="Email Address" className="bg-transparent border-b border-[#E0E0E0] py-2 w-64 focus:outline-none focus:border-[#D8CFC4] font-light text-sm" />
              <button className="text-xs uppercase tracking-widest text-[#8C8C8C] hover:text-[#4A4A4A]">Subscribe</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-16 text-xs font-medium uppercase tracking-[0.15em] text-[#8C8C8C]">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-[#4A4A4A] transition-colors">About</a>
              <a href="#" className="hover:text-[#4A4A4A] transition-colors">Contact</a>
              <a href="#" className="hover:text-[#4A4A4A] transition-colors">Careers</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-[#4A4A4A] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#4A4A4A] transition-colors">Facebook</a>
              <a href="#" className="hover:text-[#4A4A4A] transition-colors">Spotify</a>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto mt-20 text-[10px] uppercase tracking-widest text-[#C0C0C0]">
          &copy; 2024 Form + Flow Pilates.
        </div>
      </footer>
    </div>
  );
}

export default FitnessDesign7;
