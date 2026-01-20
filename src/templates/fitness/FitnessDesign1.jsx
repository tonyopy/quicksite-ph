import React, { useState } from 'react';
import { Dumbbell, Clock, MapPin, ChevronRight, Play, Users, Trophy, Flame } from 'lucide-react';

function FitnessDesign1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans uppercase tracking-tight selection:bg-red-600 selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Flame className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-black italic">FORGE<span className="text-red-600">FIT</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold italic">
            <a href="#" className="hover:text-red-500 transition-colors">Programs</a>
            <a href="#" className="hover:text-red-500 transition-colors">Coaches</a>
            <a href="#" className="hover:text-red-500 transition-colors">Schedule</a>
            <a href="#" className="hover:text-red-500 transition-colors">Pricing</a>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 skew-x-[-12deg] transition-transform hover:scale-105">
              <span className="block skew-x-[12deg]">Free Trial</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Crossfit gym" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-9xl font-black italic leading-none mb-6">
            BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">YOUR</span> <br/>
            LEGACY
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-300 mb-10 max-w-2xl mx-auto normal-case tracking-normal">
            High-intensity functional training designed to push your limits. Join the community that refuses to quit.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 text-xl font-black italic skew-x-[-12deg] transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              <span className="block skew-x-[12deg]">Start Today</span>
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-5 text-xl font-black italic skew-x-[-12deg] transition-colors">
              <span className="block skew-x-[12deg]">View Schedule</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats/Features */}
      <div className="bg-neutral-900 py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 border border-white/10 hover:border-red-600 transition-colors group">
            <Dumbbell className="h-12 w-12 text-red-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black italic mb-4">Elite Equipment</h3>
            <p className="text-gray-400 normal-case">Top-tier Rogue rigs, calibrated plates, and specialized strongman gear.</p>
          </div>
          <div className="text-center p-8 border border-white/10 hover:border-red-600 transition-colors group">
            <Users className="h-12 w-12 text-red-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black italic mb-4">Savage Community</h3>
            <p className="text-gray-400 normal-case">Train with a supportive tribe that celebrates every PR and pushes you harder.</p>
          </div>
          <div className="text-center p-8 border border-white/10 hover:border-red-600 transition-colors group">
            <Trophy className="h-12 w-12 text-red-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black italic mb-4">Proven Results</h3>
            <p className="text-gray-400 normal-case">Science-backed programming tailored to build strength, endurance, and power.</p>
          </div>
        </div>
      </div>

      {/* WOD Section */}
      <div className="py-24 px-6 bg-black relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 skew-x-[-12deg]"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-5xl font-black italic mb-8">WORKOUT OF <br/><span className="text-red-600">THE DAY</span></h2>
            <div className="bg-neutral-900 p-8 border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-4 text-red-500">"MURPH PREP"</h3>
              <div className="space-y-4 text-lg font-mono text-gray-300 normal-case">
                <p>5 Rounds For Time:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>400m Run</li>
                  <li>15 Pull-Ups</li>
                  <li>30 Push-Ups</li>
                  <li>45 Air Squats</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4 italic">Cap: 35:00</p>
              </div>
            </div>
            <button className="mt-8 flex items-center text-red-500 font-bold hover:text-white transition-colors">
              See Full Week Programming <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Athlete lifting" 
              className="w-full rounded-lg shadow-2xl shadow-red-900/20 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Membership CTA */}
      <div className="py-24 bg-red-600 text-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black italic mb-8 leading-none">NO EXCUSES.<br/>JUST RESULTS.</h2>
          <p className="text-xl font-bold mb-10 max-w-2xl mx-auto">First class is always free. Come experience the difference.</p>
          <button className="bg-black text-white hover:bg-white hover:text-black px-12 py-6 text-2xl font-black italic skew-x-[-12deg] transition-all">
            <span className="block skew-x-[12deg]">CLAIM FREE PASS</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-950 py-12 border-t border-white/10 text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-red-600" />
            <span className="text-xl font-black italic text-white">FORGE<span className="text-red-600">FIT</span></span>
          </div>
          <div className="flex gap-8 font-bold">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
          <p>&copy; 2024 ForgeFit. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default FitnessDesign1;
