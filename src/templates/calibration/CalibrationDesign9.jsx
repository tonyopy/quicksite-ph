import React from 'react';
import { Award, ShieldCheck, Scale, ScrollText } from 'lucide-react';

function CalibrationDesign9() {
  return (
    <div className="min-h-screen bg-slate-50 font-serif text-slate-800">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-400 py-3 px-8 text-xs uppercase tracking-widest text-center border-b border-slate-800">
        Established 1985 • ISO/IEC 17025 Accredited
      </div>

      {/* Nav */}
      <nav className="bg-white border-b border-slate-200">
         <div className="container mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-3xl font-bold tracking-tight text-slate-900">
               HERITAGE<span className="text-amber-600">CALIBRATION</span>
            </div>
            <div className="flex gap-8 font-sans text-sm font-bold uppercase tracking-wide text-slate-500">
               <a href="#" className="hover:text-amber-600 transition">Our History</a>
               <a href="#" className="hover:text-amber-600 transition">Services</a>
               <a href="#" className="hover:text-amber-600 transition">Accreditation</a>
               <a href="#" className="hover:text-amber-600 transition">Contact</a>
            </div>
         </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-8 bg-slate-900 text-white relative">
         <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 relative z-10">
               <div className="w-16 h-1 bg-amber-600"></div>
               <h1 className="text-5xl lg:text-6xl leading-tight">
                  Decades of <br/> Unwavering <span className="italic text-amber-600">Accuracy</span>
               </h1>
               <p className="text-xl text-slate-400 font-sans font-light leading-relaxed max-w-md">
                  We provide the highest standard of calibration services, backed by over 40 years of industry experience and technical expertise.
               </p>
               <button className="border border-amber-600 text-amber-600 px-10 py-4 font-sans text-sm font-bold uppercase tracking-widest hover:bg-amber-600 hover:text-white transition duration-500">
                  Request Service
               </button>
            </div>
            
            <div className="relative z-10">
               <div className="absolute top-4 right-4 w-full h-full border border-slate-700 z-0"></div>
               <div className="w-full h-[500px] bg-slate-200 relative z-10 flex items-center justify-center overflow-hidden">
                  <div className="text-center opacity-40">
                     <Award className="w-32 h-32 text-slate-500 mx-auto mb-4" />
                     <span className="text-slate-600 font-serif italic text-2xl">Certified Precision</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-white font-sans">
         <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-12 text-center">
               {[
                  { icon: Award, title: "Certified Excellence", desc: "A2LA Accredited Laboratory (Cert #1234.01)" },
                  { icon: ShieldCheck, title: "Quality Assurance", desc: "Compliance with ANSI/NCSL Z540-1 & ISO 10012" },
                  { icon: Scale, title: "Unbiased Results", desc: "Independent verification you can rely on." },
               ].map((item, i) => (
                  <div key={i} className="px-6">
                     <item.icon className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                     <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">{item.title}</h3>
                     <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <footer className="bg-slate-100 py-16 border-t border-slate-200 font-sans">
         <div className="container mx-auto px-8 text-center text-slate-500 text-sm">
            <p className="mb-4 font-serif text-lg italic text-slate-700">"Quality is never an accident; it is always the result of high intention."</p>
            <p>© 2025 Heritage Calibration Services. All Rights Reserved.</p>
         </div>
      </footer>
    </div>
  );
}

export default CalibrationDesign9;
