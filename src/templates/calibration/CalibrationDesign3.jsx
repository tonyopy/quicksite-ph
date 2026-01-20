import React from 'react';
import { Hammer, Triangle, Settings, Truck, PenTool, Ruler, HardHat, AlertTriangle } from 'lucide-react';

function CalibrationDesign3() {
  return (
    <div className="min-h-screen bg-stone-100 font-sans text-stone-900">
      {/* Warning Strip */}
      <div className="bg-yellow-400 py-2 px-4 text-center font-black uppercase tracking-widest text-xs border-b-4 border-black">
        <span className="flex items-center justify-center gap-2">
           <AlertTriangle className="w-4 h-4" /> Safety First: Zero Incident Goal Achieved for 2024
        </span>
      </div>

      {/* Navbar */}
      <nav className="bg-stone-900 text-white py-6 border-b-8 border-yellow-500">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-500 p-2 border-2 border-white">
               <Hammer className="w-8 h-8 text-black" />
            </div>
            <div className="text-2xl font-black uppercase tracking-tighter leading-none">
              IRON<br/><span className="text-yellow-500">GAUGE</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 font-bold uppercase tracking-wide text-sm text-stone-400">
            <a href="#" className="hover:text-yellow-500 transition">Services</a>
            <a href="#" className="hover:text-yellow-500 transition">Field Work</a>
            <a href="#" className="hover:text-yellow-500 transition">Certifications</a>
            <a href="#" className="bg-yellow-500 text-black px-6 py-2 hover:bg-white transition">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-24 bg-stone-200 overflow-hidden">
         {/* Diagonal background pattern */}
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }}></div>
         
         <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="order-2 lg:order-1">
               <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8 text-stone-900">
                  Heavy <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-600 drop-shadow-md">Duty</span> <br/>
                  Accuracy
               </h1>
               <p className="text-xl font-bold text-stone-600 mb-10 max-w-md border-l-8 border-yellow-500 pl-6">
                  Industrial calibration for construction, mining, and manufacturing. We keep your heavy machinery precise and compliant.
               </p>
               <button className="bg-black text-white px-10 py-5 text-lg font-black uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition shadow-[8px_8px_0px_#d97706]">
                  Schedule Service
               </button>
            </div>
            <div className="order-1 lg:order-2 relative">
               <div className="border-8 border-black p-4 bg-white rotate-2 shadow-[15px_15px_0px_#d97706]">
                  <div className="w-full h-[500px] bg-stone-300 flex items-center justify-center overflow-hidden">
                     <div className="text-center opacity-40">
                        <Hammer className="w-32 h-32 text-stone-600 mx-auto mb-4" />
                        <span className="text-stone-700 font-black text-2xl uppercase tracking-widest">Industrial Zone</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Service Boxes */}
      <section className="py-24 bg-stone-900 text-white">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { icon: Ruler, title: "Dimensional Metrology", desc: "Micrometers, Calipers, Height Gauges." },
                  { icon: Truck, title: "Mobile Lab Fleet", desc: "We come to your job site anywhere in the state." },
                  { icon: HardHat, title: "Safety Equipment", desc: "Gas detectors, fall protection, and harnesses." },
                  { icon: Settings, title: "Torque Calibration", desc: "Hydraulic wrenches up to 20,000 ft-lbs." },
                  { icon: PenTool, title: "Pressure Testing", desc: "Digital and analog gauges, relief valves." },
                  { icon: Triangle, title: "Scale Calibration", desc: "Truck scales, floor scales, and lab balances." },
               ].map((item, i) => (
                  <div key={i} className="bg-stone-800 p-8 border-l-4 border-yellow-500 hover:bg-stone-700 transition group cursor-pointer">
                     <item.icon className="w-12 h-12 text-stone-500 mb-6 group-hover:text-yellow-500 transition" />
                     <h3 className="text-2xl font-black uppercase mb-4">{item.title}</h3>
                     <p className="text-stone-400 font-medium">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Accreditation Banner */}
      <section className="bg-yellow-500 py-16">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-black mb-8">Certified Tough. Certified Accurate.</h2>
            <div className="flex flex-wrap justify-center gap-8 font-bold text-black/70">
               <div className="border-4 border-black/20 px-8 py-4 uppercase tracking-widest">ISO 17025</div>
               <div className="border-4 border-black/20 px-8 py-4 uppercase tracking-widest">ANSI/NCSL Z540</div>
               <div className="border-4 border-black/20 px-8 py-4 uppercase tracking-widest">NIST Traceable</div>
            </div>
         </div>
      </section>

      <footer className="bg-black text-stone-500 py-12 text-center text-sm font-bold uppercase tracking-widest">
         <p>&copy; 2025 IronGauge Industrial Calibration. Built to Last.</p>
      </footer>
    </div>
  );
}

export default CalibrationDesign3;
