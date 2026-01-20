import React from 'react';
import { Cloud, Zap, Lock, Smartphone, RefreshCw, BarChart2 } from 'lucide-react';

function CalibrationDesign8() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
               <Cloud className="w-6 h-6 text-indigo-600" />
               CloudCal
            </div>
            <div className="hidden md:flex gap-8 font-medium text-slate-500">
               <a href="#" className="hover:text-indigo-600 transition">Features</a>
               <a href="#" className="hover:text-indigo-600 transition">Pricing</a>
               <a href="#" className="hover:text-indigo-600 transition">Integrations</a>
            </div>
            <div className="flex gap-4">
               <button className="text-slate-600 font-medium hover:text-indigo-600">Log In</button>
               <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
                  Get Started
               </button>
            </div>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-slate-50">
         <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
               Calibration Management <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Reimagined</span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
               The first all-in-one platform for managing your equipment, scheduling calibrations, and accessing certificates instantly.
            </p>
            <div className="flex justify-center gap-4 mb-16">
               <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition shadow-xl shadow-indigo-200 hover:-translate-y-1">
                  Book Calibration
               </button>
               <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition hover:-translate-y-1">
                  View Demo
               </button>
            </div>
            
            <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
               <div className="absolute inset-0 bg-indigo-900/5 z-10 pointer-events-none"></div>
               <div className="w-full h-[500px] bg-indigo-50 flex items-center justify-center">
                  <div className="text-center opacity-40">
                     <Cloud className="w-32 h-32 text-indigo-400 mx-auto mb-4" />
                     <span className="text-indigo-600 font-bold text-2xl tracking-tight">System Dashboard</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
               {[
                  { icon: RefreshCw, title: "Auto-Scheduling", desc: "Never miss a due date. Automated reminders for all your assets." },
                  { icon: Smartphone, title: "Mobile Access", desc: "Scan QR codes on your equipment to view calibration status instantly." },
                  { icon: Lock, title: "Audit Ready", desc: "All your records, secure and organized for your next ISO audit." },
               ].map((item, i) => (
                  <div key={i} className="text-left">
                     <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                        <item.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                     <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <footer className="bg-slate-50 border-t border-slate-200 py-12">
         <div className="container mx-auto px-6 text-center text-slate-400 text-sm">
            <p>© 2025 CloudCal. The future of metrology.</p>
         </div>
      </footer>
    </div>
  );
}

export default CalibrationDesign8;
