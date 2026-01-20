import React from 'react';
import { Leaf, Wind, Droplet, Sun, Recycle, ArrowRight } from 'lucide-react';

function CalibrationDesign7() {
  return (
    <div className="min-h-screen bg-green-50/50 font-sans text-emerald-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-emerald-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-emerald-800">
             <Leaf className="w-6 h-6 text-emerald-500" />
             Enviro<span className="text-emerald-500">Cal</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-emerald-700/70">
             <a href="#" className="hover:text-emerald-600">Air Quality</a>
             <a href="#" className="hover:text-emerald-600">Water</a>
             <a href="#" className="hover:text-emerald-600">Emissions</a>
          </div>
          <button className="bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition">
             Client Access
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 lg:py-32 px-6">
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
               <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Environmental Calibration Specialists
               </div>
               <h1 className="text-5xl lg:text-6xl font-serif text-emerald-950 leading-tight">
                  Sustainable <br/>
                  <span className="text-emerald-600">Precision</span>
               </h1>
               <p className="text-lg text-emerald-800/60 leading-relaxed max-w-md">
                  Calibrating the instruments that monitor our world. Expert services for environmental compliance and monitoring equipment.
               </p>
               <div className="flex gap-4 pt-2">
                  <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200">
                     Our Services
                  </button>
                  <button className="text-emerald-700 font-semibold px-6 py-3 hover:bg-emerald-50 rounded-lg transition">
                     Learn More
                  </button>
               </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-4 bg-emerald-200/50 rounded-full blur-3xl opacity-50"></div>
               <div className="relative z-10 rounded-2xl shadow-xl w-full h-[400px] bg-emerald-100 flex items-center justify-center overflow-hidden">
                  <div className="text-center opacity-60">
                     <Leaf className="w-24 h-24 text-emerald-500 mx-auto mb-4" />
                     <span className="text-emerald-800 font-serif text-lg tracking-wide">Environmental Monitoring</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { icon: Wind, title: "Air Monitoring", desc: "Gas analyzers, flow meters, and particulate counters." },
                  { icon: Droplet, title: "Water Quality", desc: "pH meters, conductivity sensors, and turbidity meters." },
                  { icon: Sun, title: "Solar & Weather", desc: "Pyranometers, anemometers, and weather stations." },
               ].map((item, i) => (
                  <div key={i} className="group p-8 rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition duration-300 bg-emerald-50/30">
                     <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-serif text-emerald-900 mb-3">{item.title}</h3>
                     <p className="text-emerald-700/70 mb-6">{item.desc}</p>
                     <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition">
                        <ArrowRight className="w-4 h-4" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <footer className="bg-emerald-900 text-emerald-100/60 py-12 text-center text-sm">
         <div className="flex justify-center items-center gap-2 mb-4">
            <Recycle className="w-5 h-5" /> <span>Paperless Certification Available</span>
         </div>
         <p>© 2025 EnviroCal. Protecting the future through precision.</p>
      </footer>
    </div>
  );
}

export default CalibrationDesign7;
