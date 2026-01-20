import React, { useState } from 'react';
import { Box, Package, Truck, Ruler, Layers, ShoppingCart, ArrowRight } from 'lucide-react';

function PrintingDesign10() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-slate-800">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-white border-b border-slate-200">
         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold flex items-center gap-2 text-orange-600">
               <Package className="w-8 h-8 fill-orange-600 text-white" />
               PACK<span className="text-slate-800">PRO</span>
            </div>
            <div className="hidden md:flex gap-8 font-medium text-slate-600">
               <a href="#" className="hover:text-orange-600">Custom Boxes</a>
               <a href="#" className="hover:text-orange-600">Labels</a>
               <a href="#" className="hover:text-orange-600">Mailers</a>
            </div>
            <div className="flex gap-4">
               <button className="text-slate-600 font-medium hover:text-orange-600">Login</button>
               <button className="bg-orange-600 text-white px-6 py-2 rounded font-bold hover:bg-orange-700 transition">
                  Start Design
               </button>
            </div>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-white">
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
               <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                  Custom Packaging <br/> That <span className="text-orange-600">Sells</span>
               </h1>
               <p className="text-lg text-slate-500 leading-relaxed max-w-md">
                  Design and order custom boxes, poly mailers, and labels in minutes. Low minimums, fast turnaround, and instant quotes.
               </p>
               <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 max-w-md">
                  <div className="flex gap-4 mb-4">
                     <div className="flex-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Length</label>
                        <input type="text" placeholder='10"' className="w-full p-2 border border-slate-300 rounded mt-1" />
                     </div>
                     <div className="flex-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Width</label>
                        <input type="text" placeholder='8"' className="w-full p-2 border border-slate-300 rounded mt-1" />
                     </div>
                     <div className="flex-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Depth</label>
                        <input type="text" placeholder='4"' className="w-full p-2 border border-slate-300 rounded mt-1" />
                     </div>
                  </div>
                  <button className="w-full bg-slate-900 text-white py-3 rounded font-bold hover:bg-slate-800 transition">
                     Get Quote
                  </button>
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-50 transform scale-75"></div>
               <img 
                  src="https://images.unsplash.com/photo-1606166325683-e6deb697d301?auto=format&fit=crop&w=1000&q=80" 
                  alt="Packaging Boxes" 
                  className="relative z-10 w-full object-cover"
               />
            </div>
         </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-[#F5F5F5]">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900">Packaging for Every Business</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { icon: Box, title: "Mailer Boxes", desc: "Perfect for e-commerce subscription boxes." },
                  { icon: Layers, title: "Product Boxes", desc: "Retail-ready packaging for shelves." },
                  { icon: Truck, title: "Shipping Boxes", desc: "Heavy-duty protection for transit." },
               ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100">
                     <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                        <item.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                     <p className="text-slate-500 mb-6 text-sm leading-relaxed">{item.desc}</p>
                     <a href="#" className="text-orange-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Configure <ArrowRight className="w-4 h-4" />
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3D Preview Teaser */}
      <section className="py-20 bg-slate-900 text-white text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">See it before you print it.</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
               Our 3D design studio lets you visualize your packaging from every angle. Add logos, colors, and patterns instantly.
            </p>
            <button className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-900/50">
               Try 3D Studio
            </button>
         </div>
      </section>

      <footer className="bg-white py-12 border-t border-slate-200 text-center text-slate-400 text-sm">
         <p>© 2025 PackPro. Unbox your potential.</p>
      </footer>
    </div>
  );
}

export default PrintingDesign10;
