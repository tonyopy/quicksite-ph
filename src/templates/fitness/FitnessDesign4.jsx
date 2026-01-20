import React, { useState } from 'react';
import { User, Star, Award, Instagram, PlayCircle, Menu, X, ArrowRight } from 'lucide-react';

function FitnessDesign4() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#121212]/90 backdrop-blur-sm border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-widest text-white">
            ALEX<span className="text-[#D4AF37]">STEELE</span>
          </div>

          <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#" className="hover:text-white transition-colors">Transformations</a>
            <a href="#" className="hover:text-white transition-colors">Coaching</a>
            <a href="#" className="hover:text-white transition-colors">Shop</a>
            <button className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
              Apply Now
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-[#121212] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Trainer portrait" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
        </div>
        
        <div className="relative z-20 text-center max-w-4xl px-6 mt-20">
          <p className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-6 animate-fade-in-up">Elite Performance Coaching</p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight animate-fade-in-up delay-100">
            Sculpt Your <br/> Masterpiece.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            Bespoke training and nutrition protocols for high-performers who demand excellence in every area of life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-300">
            <button className="bg-[#D4AF37] text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors">
              Start Your Journey
            </button>
            <button className="flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest gap-3">
              <PlayCircle className="h-10 w-10 font-light" /> Watch the Film
            </button>
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="py-32 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-4xl font-serif text-white mb-8">The Steele <br/><span className="text-[#D4AF37]">Standard</span></h2>
            <div className="w-20 h-1 bg-[#333] mb-8"></div>
            <p className="text-gray-400 leading-relaxed mb-8">
              We don't do cookie-cutter plans. We analyze your physiology, lifestyle, and goals to engineer a roadmap that guarantees results. This is science meets art.
            </p>
            <a href="#" className="text-[#D4AF37] text-sm uppercase tracking-widest hover:text-white transition-colors flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-[#121212] p-8 border border-[#333] hover:border-[#D4AF37] transition-colors group">
              <ActivityIcon className="h-8 w-8 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Precision Training</h3>
              <p className="text-sm text-gray-500">Hypertrophy and strength programming tailored to your biomechanics.</p>
            </div>
            <div className="bg-[#121212] p-8 border border-[#333] hover:border-[#D4AF37] transition-colors group">
              <NutrientIcon className="h-8 w-8 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Metabolic Nutrition</h3>
              <p className="text-sm text-gray-500">Flexible dieting strategies that fuel performance without restriction.</p>
            </div>
            <div className="bg-[#121212] p-8 border border-[#333] hover:border-[#D4AF37] transition-colors group">
              <MindsetIcon className="h-8 w-8 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Mindset Conditioning</h3>
              <p className="text-sm text-gray-500">Psychological tools to break plateaus and build unstoppable discipline.</p>
            </div>
            <div className="bg-[#121212] p-8 border border-[#333] hover:border-[#D4AF37] transition-colors group">
              <SupportIcon className="h-8 w-8 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">24/7 Concierge</h3>
              <p className="text-sm text-gray-500">Direct access to me and my team for adjustments and motivation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-24 bg-[#121212] border-y border-[#333]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-12 opacity-50 mb-16 grayscale">
            <div className="text-2xl font-serif font-bold">MEN'S HEALTH</div>
            <div className="text-2xl font-serif font-bold">GQ</div>
            <div className="text-2xl font-serif font-bold">ESQUIRE</div>
            <div className="text-2xl font-serif font-bold">FORBES</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Michael T.", role: "CEO", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", text: "Alex didn't just change my body; he changed how I operate in business. The discipline translates to everything." },
              { name: "Sarah L.", role: "Attorney", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", text: "I've tried every trainer in the city. Alex is the only one who understood the demands of my schedule." },
              { name: "David R.", role: "Founder", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", text: "Down 30lbs and stronger than I was in my 20s. The investment paid for itself in energy alone." }
            ].map((review, i) => (
              <div key={i} className="bg-[#1A1A1A] p-8 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full border-2 border-[#D4AF37]" />
                </div>
                <div className="flex justify-center mb-4 mt-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 text-[#D4AF37] fill-current" />)}
                </div>
                <p className="text-gray-400 text-sm italic mb-6">"{review.text}"</p>
                <div className="font-bold text-white">{review.name}</div>
                <div className="text-xs text-[#D4AF37] uppercase tracking-widest">{review.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ready to Evolve?</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          I only take on 5 new clients per month to ensure quality. Application required.
        </p>
        <button className="bg-[#D4AF37] text-black px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors">
          Apply for Coaching
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] py-16 px-6 border-t border-[#222]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-serif font-bold tracking-widest text-white">
            ALEX<span className="text-[#D4AF37]">STEELE</span>
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-xs text-gray-600">
            &copy; 2024 Alex Steele Fitness. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Icons
const ActivityIcon = (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const NutrientIcon = (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>;
const MindsetIcon = (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const SupportIcon = (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>;

export default FitnessDesign4;
