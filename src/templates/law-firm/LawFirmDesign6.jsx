import React, { useState } from 'react';
import { Cpu, Lock, Lightbulb, Globe, Code, Zap, Menu, X, ArrowRight } from 'lucide-react';

function LawFirmDesign6() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-mono">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <Cpu className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold tracking-wider text-white">NEXUS<span className="text-cyan-400">IP</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-cyan-400 transition-colors text-sm font-semibold">Patents</a>
              <a href="#" className="hover:text-cyan-400 transition-colors text-sm font-semibold">Trademarks</a>
              <a href="#" className="hover:text-cyan-400 transition-colors text-sm font-semibold">Licensing</a>
              <a href="#" className="hover:text-cyan-400 transition-colors text-sm font-semibold">Litigation</a>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 px-6 py-2 rounded-sm text-sm font-bold transition-all">
                Client Portal
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block hover:text-cyan-400 font-semibold">Patents</a>
              <a href="#" className="block hover:text-cyan-400 font-semibold">Trademarks</a>
              <a href="#" className="block hover:text-cyan-400 font-semibold">Licensing</a>
              <button className="w-full border border-cyan-400 text-cyan-400 py-3 font-bold mt-4">
                Client Portal
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-cyan-400 mb-6 animate-pulse">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-xs uppercase tracking-widest">Intellectual Property & Technology Law</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Protecting the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Code of Innovation.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              We bridge the gap between technology and law. From startups to Fortune 500s, we safeguard your digital assets in an evolving global landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-sm font-bold tracking-wide hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
                Schedule Discovery Call
              </button>
              <button className="flex items-center text-slate-300 hover:text-white px-8 py-4 font-bold transition-colors group">
                View Our Expertise <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      </div>

      {/* Stats / Clients */}
      <div className="border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">$2B+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">IP Valuation Protected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Patents Granted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Countries Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Response Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'Software & SaaS', desc: 'Licensing agreements, open source compliance, and SaaS contracts.' },
              { icon: Lightbulb, title: 'Patent Prosecution', desc: 'Strategic patent portfolio development for hardware and software.' },
              { icon: Lock, title: 'Data Privacy', desc: 'GDPR, CCPA compliance and cybersecurity incident response.' },
              { icon: Globe, title: 'Domain Disputes', desc: 'UDRP proceedings and brand protection across the digital ecosystem.' },
              { icon: Zap, title: 'Tech Transactions', desc: 'M&A due diligence, joint ventures, and technology transfers.' },
              { icon: Cpu, title: 'Emerging Tech', desc: 'Legal frameworks for AI, Blockchain, IoT and Quantum Computing.' },
            ].map((area, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 p-8 hover:border-cyan-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <area.icon className="h-10 w-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-gradient-to-r from-slate-900 to-slate-950 relative border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Scale Your IP Strategy?</h2>
          <p className="text-slate-400 mb-12 text-lg">
            Don't let legal hurdles slow down your innovation. Partner with attorneys who speak your language.
          </p>
          <form className="max-w-md mx-auto space-y-4">
            <div className="flex gap-4">
              <input type="email" placeholder="Enter your work email" className="flex-1 bg-slate-800 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:border-cyan-400 rounded-sm" />
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 font-bold rounded-sm transition-colors">
                Get Started
              </button>
            </div>
            <p className="text-xs text-slate-500">
              By clicking "Get Started", you agree to our Terms & Privacy Policy.
            </p>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800 text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Cpu className="h-6 w-6 text-cyan-400" />
            <span className="font-bold text-white">NEXUS<span className="text-cyan-400">IP</span></span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="mt-4 md:mt-0">
            &copy; 2024 NexusIP Law Group.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LawFirmDesign6;
