import React from 'react';
import { Grid, List, CheckSquare, Maximize, FileText, ArrowUpRight } from 'lucide-react';

function CalibrationDesign10() {
  return (
    <div className="min-h-screen bg-neutral-100 font-sans text-neutral-900 p-4 md:p-8">
      {/* Header Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
         <div className="md:col-span-8 bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-8">
               <div className="text-3xl font-bold tracking-tight flex items-center gap-2">
                  <Grid className="w-8 h-8 text-blue-600" />
                  GRID<span className="text-blue-600">CAL</span>
               </div>
               <div className="text-right">
                  <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Status</div>
                  <div className="text-green-600 font-bold flex items-center gap-1 justify-end"><div className="w-2 h-2 bg-green-600 rounded-full"></div> Operational</div>
               </div>
            </div>
            <div>
               <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  Data-Driven <br/> Calibration.
               </h1>
               <p className="text-lg text-neutral-500 max-w-lg">
                  A modular approach to instrument management. Fast, efficient, and fully transparent.
               </p>
            </div>
         </div>
         
         <div className="md:col-span-4 bg-blue-600 text-white p-8 rounded-2xl shadow-sm flex flex-col justify-between group cursor-pointer hover:bg-blue-700 transition">
            <div className="flex justify-between items-start">
               <FileText className="w-10 h-10 opacity-80" />
               <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
               <div className="text-4xl font-bold mb-1">24h</div>
               <div className="text-blue-200 font-medium">Express Turnaround</div>
            </div>
         </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
               <CheckSquare className="w-8 h-8 text-neutral-400 mb-4" />
               <h3 className="text-xl font-bold mb-2">Compliance</h3>
               <p className="text-sm text-neutral-500">ISO 17025, ANSI Z540, and FDA 21 CFR Part 11 compliant reporting.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
               <Maximize className="w-8 h-8 text-neutral-400 mb-4" />
               <h3 className="text-xl font-bold mb-2">Scope</h3>
               <p className="text-sm text-neutral-500">Broad capabilities across electrical, RF, dimensional, and physical domains.</p>
            </div>
            <div className="md:col-span-2 bg-white rounded-2xl shadow-sm overflow-hidden h-64 relative group">
               <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                  <Grid className="w-24 h-24 text-neutral-700" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold">Lab Automation</h3>
                  <p className="text-neutral-300 text-sm">Robotic calibration for high-volume batches.</p>
               </div>
            </div>
         </div>

         <div className="bg-neutral-900 text-white p-8 rounded-2xl shadow-sm flex flex-col">
            <h3 className="text-xl font-bold mb-6 text-neutral-400 uppercase tracking-widest text-xs">Service List</h3>
            <ul className="space-y-4 flex-1">
               {["Oscilloscopes", "Calipers", "Micrometers", "Power Meters", "Spectrum Analyzers", "Torque Wrenches"].map((item, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-neutral-800 pb-2 last:border-0">
                     <span>{item}</span>
                     <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                  </li>
               ))}
            </ul>
            <button className="w-full bg-white text-black py-3 rounded-xl font-bold mt-6 hover:bg-neutral-200 transition">
               View All
            </button>
         </div>
      </div>
      
      <div className="mt-8 text-center text-neutral-400 text-xs font-bold uppercase tracking-widest">
         GridCal Systems © 2025
      </div>
    </div>
  );
}

export default CalibrationDesign10;
