import React from 'react';
import { Target, Crosshair, PenTool, Layers, ChevronRight, Activity } from 'lucide-react';

function CalibrationDesign6() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Banner */}
      <div className="bg-red-600 text-white py-1 px-4 text-xs font-bold uppercase tracking-widest text-center">
        Emergency Service Available: 24/7 Response
      </div>

      {/* Nav */}
      <nav className="bg-white border-b border-slate-200">
         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-2xl font-black uppercase italic tracking-tighter">
               <Crosshair className="w-8 h-8 text-red-600" />
               Axis<span className="text-red-600">Point</span>
            </div>
            <div className="hidden md:flex gap-8 font-bold text-slate-700 uppercase text-sm tracking-wide">
               <a href="#" className="hover:text-red-600">Metrology</a>
               <a href="#" className="hover:text-red-600">CMM Services</a>
               <a href="#" className="hover:text-red-600">Reverse Eng.</a>
            </div>
            <button className="border-2 border-red-600 text-red-600 px-6 py-2 font-bold uppercase hover:bg-red-600 hover:text-white transition skew-x-[-10deg]">
               <span className="skew-x-[10deg] inline-block">Contact</span>
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="py-20 lg:py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600 skew-x-[-20deg] translate-x-20 opacity-10"></div>
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
               <h1 className="text-5xl lg:text-7xl font-black uppercase italic leading-none mb-6">
                  Absolute <br/>
                  <span className="text-red-600">Zero</span> <br/>
                  Tolerance
               </h1>
               <p className="text-xl text-slate-400 font-medium mb-8 max-w-md">
                  High-precision dimensional calibration and CMM inspection services for automotive and aerospace manufacturing.
               </p>
               <div className="flex gap-4">
                  <button className="bg-red-600 text-white px-8 py-4 font-black uppercase italic tracking-wider hover:bg-red-700 transition">
                     Our Standards
                  </button>
               </div>
            </div>
            <div className="relative">
               <div className="border-4 border-slate-800 p-2">
                  <div className="w-full h-[500px] bg-slate-800 flex items-center justify-center overflow-hidden">
                     <div className="text-center">
                        <Crosshair className="w-32 h-32 text-red-600/20 mx-auto mb-4" />
                        <span className="text-red-600/40 font-black text-xl uppercase italic tracking-widest">Target Acquisition</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Services Strip */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
               {[
                  { icon: Target, title: "CMM Inspection", desc: "Coordinate Measuring Machines" },
                  { icon: Layers, title: "3D Scanning", desc: "Laser scanning & modeling" },
                  { icon: PenTool, title: "Hard Gaging", desc: "Fixed limit gauge calibration" },
                  { icon: Activity, title: "Surface Finish", desc: "Roughness & contour analysis" },
               ].map((item, i) => (
                  <div key={i} className="group border-l-4 border-slate-200 hover:border-red-600 pl-6 transition duration-300">
                     <item.icon className="w-10 h-10 text-slate-400 mb-4 group-hover:text-red-600 transition" />
                     <h3 className="text-lg font-black uppercase text-slate-900 mb-2">{item.title}</h3>
                     <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100 py-20 border-t border-slate-200">
         <div className="container mx-auto px-6 flex justify-between items-center">
            <div>
               <h2 className="text-3xl font-black uppercase italic text-slate-900">Need a quote fast?</h2>
               <p className="text-slate-500 font-bold">Upload your equipment list for a 24-hour turnaround.</p>
            </div>
            <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 font-bold uppercase hover:bg-red-600 transition">
               Upload List <ChevronRight className="w-5 h-5" />
            </button>
         </div>
      </section>

      <footer className="bg-slate-900 text-slate-600 py-12 text-center text-xs font-bold uppercase tracking-widest">
         <p>© 2025 AxisPoint Metrology. Measured to Perfection.</p>
      </footer>
    </div>
  );
}

export default CalibrationDesign6;
