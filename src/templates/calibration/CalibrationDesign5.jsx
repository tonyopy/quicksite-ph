import React from 'react';
import { Microscope, Beaker, Atom, FileCode, ArrowRight } from 'lucide-react';

function CalibrationDesign5() {
  return (
    <div className="min-h-screen bg-teal-50/30 font-sans text-teal-900">
      {/* Nav */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
          <Atom className="w-8 h-8 text-teal-500" />
          Bio<span className="text-teal-600">Metric</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-teal-800/70">
           <a href="#" className="hover:text-teal-600">Pipettes</a>
           <a href="#" className="hover:text-teal-600">Balances</a>
           <a href="#" className="hover:text-teal-600">Validation</a>
        </div>
        <button className="bg-teal-100 text-teal-700 px-6 py-2 rounded-full font-bold hover:bg-teal-200 transition">
           Portal Login
        </button>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 lg:py-32">
         <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
               <span className="bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-bold">Life Sciences Calibration</span>
               <h1 className="text-5xl lg:text-7xl font-bold text-teal-950 leading-tight">
                  Accuracy for <br/>
                  <span className="text-teal-500 italic">Discovery</span>
               </h1>
               <p className="text-xl text-teal-800/60 leading-relaxed max-w-lg">
                  Specialized calibration services for biotech, pharmaceutical, and medical device laboratories. FDA compliance guaranteed.
               </p>
               <div className="flex gap-4 pt-4">
                  <button className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-700 transition shadow-lg shadow-teal-200">
                     Explore Services
                  </button>
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-teal-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
               <div className="relative z-10 rounded-[3rem] w-full h-[400px] shadow-2xl bg-teal-100 flex items-center justify-center overflow-hidden">
                  <div className="text-center opacity-50">
                     <Microscope className="w-24 h-24 text-teal-500 mx-auto mb-4" />
                     <span className="text-teal-800 font-bold text-lg tracking-wider uppercase">Lab Environment</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Cards */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { icon: Microscope, title: "Microscopy", desc: "Cleaning, maintenance, and calibration." },
                  { icon: Beaker, title: "Volumetric", desc: "ISO 8655 pipette calibration services." },
                  { icon: FileCode, title: "Validation", desc: "IQ/OQ/PQ protocols for lab equipment." },
               ].map((item, i) => (
                  <div key={i} className="bg-teal-50/50 p-10 rounded-3xl hover:bg-teal-50 transition duration-300">
                     <item.icon className="w-12 h-12 text-teal-500 mb-6" />
                     <h3 className="text-2xl font-bold text-teal-900 mb-4">{item.title}</h3>
                     <p className="text-teal-700/70 leading-relaxed mb-6">{item.desc}</p>
                     <a href="#" className="flex items-center gap-2 text-teal-600 font-bold hover:gap-3 transition-all">
                        Details <ArrowRight className="w-4 h-4" />
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <footer className="bg-teal-900 text-teal-100 py-12 text-center">
         <p className="opacity-60 text-sm">© 2025 BioMetric Calibration. Precision for Life.</p>
      </footer>
    </div>
  );
}

export default CalibrationDesign5;
