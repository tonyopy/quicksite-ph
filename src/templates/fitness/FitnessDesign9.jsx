import React, { useState } from 'react';
import { Droplet, Sun, Wind, Cloud, Menu, X, ArrowRight } from 'lucide-react';

function FitnessDesign9() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F4F8] text-[#2C3E50] font-sans selection:bg-[#A8D8EA] selection:text-[#2C3E50]">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#F0F4F8]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-8 h-24 flex justify-between items-center">
          <div className="text-2xl font-light tracking-widest uppercase text-[#34495E]">
            Revive
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-[#7F8C8D]">
            <a href="#" className="hover:text-[#34495E] transition-colors">Treatments</a>
            <a href="#" className="hover:text-[#34495E] transition-colors">Technology</a>
            <a href="#" className="hover:text-[#34495E] transition-colors">Membership</a>
            <a href="#" className="hover:text-[#34495E] transition-colors">Locations</a>
            <button className="bg-[#A8D8EA] text-[#2C3E50] px-6 py-2 rounded-lg hover:bg-[#95cbe0] transition-colors shadow-sm">
              Book Session
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#34495E]">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#E0F7FA] rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#E8F6F3] rounded-full blur-3xl opacity-60 animate-pulse delay-700"></div>

        <div className="relative z-10 max-w-5xl px-8 text-center">
          <span className="inline-block px-4 py-1 bg-white rounded-full text-xs font-bold uppercase tracking-widest text-[#7F8C8D] mb-8 shadow-sm">
            Science-Backed Recovery
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-[#2C3E50] mb-8 leading-tight">
            Optimize Your Body. <br/>
            <span className="font-semibold text-[#3498DB]">Reset Your Mind.</span>
          </h1>
          <p className="text-lg text-[#7F8C8D] mb-12 max-w-2xl mx-auto leading-relaxed">
            The premier destination for contrast therapy, cryotherapy, compression, and infrared sauna. Recover faster and perform better.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-[#3498DB] text-white px-10 py-4 rounded-xl font-medium hover:bg-[#2980B9] transition-all shadow-lg shadow-[#3498DB]/20 hover:shadow-xl hover:-translate-y-1">
              Explore Services
            </button>
            <button className="bg-white text-[#34495E] px-10 py-4 rounded-xl font-medium hover:bg-[#F8F9F9] transition-all shadow-sm border border-[#BDC3C7]/30">
              Membership Plans
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-32 px-8 bg-white rounded-t-[60px] shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Droplet, title: 'Cold Plunge', desc: 'Reduce inflammation and boost dopamine levels in 3 minutes.' },
              { icon: Sun, title: 'Infrared Sauna', desc: 'Deep detoxification and muscle relaxation at cellular level.' },
              { icon: Wind, title: 'Compression', desc: 'NormaTec boots to flush lymphatics and speed up leg recovery.' },
              { icon: Cloud, title: 'Cryotherapy', desc: 'Whole-body hyper-cooling for pain relief and metabolic boost.' },
            ].map((service, index) => (
              <div key={index} className="bg-[#F0F4F8] p-8 rounded-3xl hover:bg-[#EBF5FB] transition-colors group cursor-pointer">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-[#3498DB]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">{service.title}</h3>
                <p className="text-[#7F8C8D] leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Membership */}
      <div className="py-32 px-8 bg-[#F0F4F8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-center text-[#2C3E50] mb-16">Simple, Transparent Pricing</h2>
          
          <div className="bg-white rounded-3xl p-2 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="p-8 rounded-2xl hover:bg-[#FAFAFA] transition-colors">
              <h3 className="text-lg font-bold text-[#7F8C8D] mb-2">Drop-In</h3>
              <div className="text-3xl font-bold text-[#2C3E50] mb-4">$45</div>
              <p className="text-sm text-[#95A5A6] mb-6">Single session access to any modality.</p>
              <button className="w-full py-3 rounded-lg border border-[#BDC3C7] text-[#7F8C8D] hover:bg-[#2C3E50] hover:text-white hover:border-transparent transition-all">Select</button>
            </div>
            
            <div className="p-8 rounded-2xl bg-[#3498DB] text-white shadow-lg transform md:scale-105 z-10">
              <div className="text-xs font-bold uppercase tracking-widest mb-2 text-[#D6EAF8]">Most Popular</div>
              <h3 className="text-lg font-bold mb-2">Unlimited</h3>
              <div className="text-3xl font-bold mb-4">$199<span className="text-sm font-normal opacity-70">/mo</span></div>
              <p className="text-sm text-[#D6EAF8] mb-6">Daily access to all services + guest passes.</p>
              <button className="w-full py-3 rounded-lg bg-white text-[#3498DB] font-bold hover:bg-[#F0F4F8] transition-colors">Select</button>
            </div>
            
            <div className="p-8 rounded-2xl hover:bg-[#FAFAFA] transition-colors">
              <h3 className="text-lg font-bold text-[#7F8C8D] mb-2">4-Pack</h3>
              <div className="text-3xl font-bold text-[#2C3E50] mb-4">$140<span className="text-sm font-normal opacity-70">/mo</span></div>
              <p className="text-sm text-[#95A5A6] mb-6">4 sessions per month. Rollover credits.</p>
              <button className="w-full py-3 rounded-lg border border-[#BDC3C7] text-[#7F8C8D] hover:bg-[#2C3E50] hover:text-white hover:border-transparent transition-all">Select</button>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="py-32 px-8 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-4xl font-light leading-relaxed text-[#2C3E50] italic mb-8">
            "Recovery is not just the absence of activity. It is a proactive strategy to improve performance."
          </p>
          <div className="flex items-center justify-center gap-4">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Doctor" className="w-12 h-12 rounded-full object-cover" />
            <div className="text-left">
              <div className="font-bold text-[#2C3E50]">Dr. Elena Rostova</div>
              <div className="text-xs uppercase tracking-widest text-[#7F8C8D]">Sports Physiologist</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div>
            <div className="text-2xl font-light tracking-widest uppercase mb-6">
              Revive
            </div>
            <p className="text-[#BDC3C7] max-w-xs text-sm leading-relaxed">
              Bridging the gap between medical recovery and daily wellness. Built for athletes, designed for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm text-[#BDC3C7]">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Partners</a>
              <a href="#" className="hover:text-white transition-colors">Franchise</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-[#34495E] text-xs text-[#7F8C8D] text-center">
          &copy; 2024 Revive Wellness Studios.
        </div>
      </footer>
    </div>
  );
}

export default FitnessDesign9;
