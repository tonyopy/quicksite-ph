import React, { useState } from 'react';
import { Camera, Image, Grid, Heart, Printer, Maximize2, Share2, Download } from 'lucide-react';

function PrintingDesign9() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
         <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            <div className="text-xl font-bold tracking-widest uppercase">
               Photo<span className="text-gray-400">Lab</span>
            </div>
            <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
               <a href="#" className="hover:text-black">Prints</a>
               <a href="#" className="hover:text-black">Books</a>
               <a href="#" className="hover:text-black">Wall Art</a>
               <a href="#" className="hover:text-black">Gifts</a>
            </div>
            <div className="flex gap-4">
               <button className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition">
                  Upload Photos
               </button>
            </div>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <h1 className="text-5xl lg:text-7xl font-light leading-tight">
                  Memories <br/> Made <span className="font-serif italic">Tangible</span>
               </h1>
               <p className="text-lg text-gray-500 font-light leading-relaxed max-w-md">
                  Museum-quality photo prints, handcrafted albums, and gallery frames. Preserve your moments forever.
               </p>
               <div className="flex gap-4">
                  <button className="border-b border-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-gray-600 transition">
                     Start a Project
                  </button>
               </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <img 
                  src="https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&w=600&q=80" 
                  alt="Photo Print 1" 
                  className="w-full h-64 object-cover grayscale hover:grayscale-0 transition duration-700"
               />
               <img 
                  src="https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&w=600&q=80" 
                  alt="Photo Print 2" 
                  className="w-full h-64 object-cover grayscale hover:grayscale-0 transition duration-700 translate-y-8"
               />
            </div>
         </div>
      </section>

      {/* Product Minimal Grid */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
               {[
                  { title: "Fine Art Prints", desc: "Cotton rag paper, archival inks.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80" },
                  { title: "Layflat Albums", desc: "Seamless panoramic spreads.", img: "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&w=800&q=80" },
                  { title: "Canvas Wraps", desc: "Gallery depth, ready to hang.", img: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80" },
               ].map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                     <div className="overflow-hidden mb-6 aspect-[4/5]">
                        <img 
                           src={item.img} 
                           alt={item.title} 
                           className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                        />
                     </div>
                     <h3 className="text-xl font-light mb-2">{item.title}</h3>
                     <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Feature Strip */}
      <section className="py-20 border-t border-gray-100">
         <div className="container mx-auto px-6 flex justify-between items-center text-center text-xs font-bold uppercase tracking-widest text-gray-400">
            <div className="flex flex-col items-center gap-4">
               <Printer className="w-6 h-6 text-gray-900" />
               <span>12-Color Printing</span>
            </div>
            <div className="flex flex-col items-center gap-4">
               <Maximize2 className="w-6 h-6 text-gray-900" />
               <span>Custom Sizes</span>
            </div>
            <div className="flex flex-col items-center gap-4">
               <Share2 className="w-6 h-6 text-gray-900" />
               <span>Easy Sharing</span>
            </div>
            <div className="flex flex-col items-center gap-4">
               <Download className="w-6 h-6 text-gray-900" />
               <span>Digital Delivery</span>
            </div>
         </div>
      </section>

      <footer className="py-12 bg-white text-center text-gray-400 text-xs uppercase tracking-widest">
         <p>© 2025 PhotoLab. Focus on Quality.</p>
      </footer>
    </div>
  );
}

export default PrintingDesign9;
