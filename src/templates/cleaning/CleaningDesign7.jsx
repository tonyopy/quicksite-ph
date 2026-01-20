import React, { useState } from 'react';
import { Menu, X, Cpu, Smartphone, Zap } from 'lucide-react';

const CleaningDesign7 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-slate-300 bg-[#0B1120] min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-xl font-medium text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              SmartClean<span className="text-blue-500">.ai</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Technology</a>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-blue-500 hover:text-blue-400">Download App</a>
            </div>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1 text-xs font-medium text-blue-400 mb-8">
            <Zap className="w-3 h-3" />
            <span>Now Available in Metro Manila</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Cleaning, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Reinvented.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Book a vetted professional in 60 seconds. Track their arrival in real-time. 
            Pay seamlessly. The future of housekeeping is here.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50">
              Get the App
            </button>
            <button className="bg-slate-800 text-white border border-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors">
              Book Online
            </button>
          </div>
        </div>

        {/* App Preview */}
        <div className="mt-20 max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 p-8">
               <div className="text-center">
                 <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                   <Smartphone className="w-6 h-6" />
                 </div>
                 <h3 className="text-white font-bold mb-2">Instant Booking</h3>
                 <p className="text-sm text-slate-500">Schedule a clean for tomorrow, or even today, with just a few taps.</p>
               </div>
               <div className="text-center">
                 <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                   <Zap className="w-6 h-6" />
                 </div>
                 <h3 className="text-white font-bold mb-2">Real-Time Tracking</h3>
                 <p className="text-sm text-slate-500">See exactly when your cleaner arrives and when the job is done.</p>
               </div>
               <div className="text-center">
                 <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                   <Shield className="w-6 h-6" />
                 </div>
                 <h3 className="text-white font-bold mb-2">Cashless Payment</h3>
                 <p className="text-sm text-slate-500">Secure payments via Credit Card, GCash, or Maya.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper icon
const Shield = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

export default CleaningDesign7;
