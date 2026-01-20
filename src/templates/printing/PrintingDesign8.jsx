import React, { useState } from 'react';
import { Maximize, Layout, PenTool, Truck, ArrowUpRight, Grid } from 'lucide-react';

function PrintingDesign8() {
  return (
    <div className="min-h-screen bg-yellow-400 font-sans text-black">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-yellow-400 border-b-4 border-black">
         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-4xl font-black tracking-tighter uppercase">
               BIG<span className="text-white text-stroke-black">PRINT</span>
            </div>
            <button className="bg-black text-white px-8 py-3 font-bold uppercase hover:bg-white hover:text-black transition border-4 border-black">
               Get Quote
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-yellow-400 border-b-4 border-black">
         <div className="container mx-auto">
            <div className="max-w-4xl">
               <h1 className="text-7xl md:text-9xl font-black leading-none mb-8 uppercase">
                  Go Big <br/> Or Go <span className="text-white text-stroke-black">Home</span>
               </h1>
               <p className="text-2xl font-bold mb-12 max-w-xl border-l-8 border-black pl-6">
                  Large format printing specialists. Billboards, vehicle wraps, and trade show displays that demand attention.
               </p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Vinyl Banners', 'Mesh Fencing', 'Floor Decals', 'Wall Murals'].map((item) => (
                     <div key={item} className="bg-black text-white p-4 font-bold text-center uppercase text-sm hover:bg-white hover:text-black border-4 border-black cursor-pointer transition">
                        {item}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Grid Showcase */}
      <section className="bg-white">
         <div className="grid md:grid-cols-2">
            <div className="border-r-4 border-b-4 border-black p-16 flex flex-col justify-center bg-blue-500 text-white">
               <Maximize className="w-20 h-20 mb-8" />
               <h2 className="text-6xl font-black uppercase mb-4">Scale Up</h2>
               <p className="text-xl font-bold">No size limit. We print up to 5 meters wide seamlessly.</p>
            </div>
            <div className="border-b-4 border-black h-[500px]">
               <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80" 
                  alt="Billboard" 
                  className="w-full h-full object-cover grayscale contrast-125"
               />
            </div>
            <div className="border-r-4 border-b-4 border-black h-[500px]">
               <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80" 
                  alt="Signage" 
                  className="w-full h-full object-cover grayscale contrast-125"
               />
            </div>
            <div className="border-b-4 border-black p-16 flex flex-col justify-center bg-red-500 text-white">
               <Truck className="w-20 h-20 mb-8" />
               <h2 className="text-6xl font-black uppercase mb-4">Install</h2>
               <p className="text-xl font-bold">Nationwide installation network. We put it up for you.</p>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-yellow-400 text-center px-6">
         <h2 className="text-5xl md:text-7xl font-black uppercase mb-12">Ready to dominate the skyline?</h2>
         <button className="bg-yellow-400 text-black px-12 py-6 text-2xl font-black uppercase hover:bg-white transition border-4 border-yellow-400">
            Start Project
         </button>
      </section>

      <footer className="bg-white py-8 text-center font-bold border-t-4 border-black">
         <p>BIGPRINT © 2025. SIZE MATTERS.</p>
      </footer>
    </div>
  );
}

export default PrintingDesign8;
