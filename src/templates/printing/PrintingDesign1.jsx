import React, { useState } from 'react';
import { Printer, Layers, Image, Scissors, Send, CheckCircle, Upload, ArrowRight, Star } from 'lucide-react';

function PrintingDesign1() {
  const [file, setFile] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-600 rounded flex items-center justify-center text-white">
               <Printer className="w-5 h-5" />
            </div>
            Print<span className="text-cyan-600">Master</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-cyan-600">Products</a>
            <a href="#" className="hover:text-cyan-600">Services</a>
            <a href="#" className="hover:text-cyan-600">Portfolio</a>
          </div>
          <button className="bg-cyan-600 text-white px-6 py-2 rounded font-bold hover:bg-cyan-700 transition shadow-lg shadow-cyan-200">
            Get a Quote
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold uppercase tracking-wider">
               Premium Quality Printing
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
              Bring Your <br/>
              <span className="text-cyan-600">Ideas</span> to Life
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-md">
              From business cards to large format banners. We deliver high-quality prints with fast turnaround times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition">
                  <Upload className="w-5 h-5" /> Upload Design
               </button>
               <button className="flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-lg font-bold hover:border-slate-900 hover:text-slate-900 transition">
                  Browse Catalog
               </button>
            </div>
            
            <div className="flex gap-8 pt-4">
               <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Same Day Printing
               </div>
               <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Free Delivery ₱2k
               </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-20"></div>
             <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
             
             <div className="grid grid-cols-2 gap-4 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" 
                  alt="Business Cards" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80" 
                  alt="Brochures" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-black text-slate-900 mb-4">Our Printing Services</h2>
               <p className="text-slate-500">Everything you need to market your business effectively.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
               {[
                  { icon: Layers, title: "Business Cards", desc: "Premium matte, gloss, and spot UV finishes." },
                  { icon: Image, title: "Flyers & Brochures", desc: "Vibrant colors on high-quality paper stock." },
                  { icon: Printer, title: "Large Format", desc: "Banners, posters, and signage for events." },
                  { icon: Scissors, title: "Custom Stickers", desc: "Die-cut vinyl stickers for your brand." },
               ].map((item, i) => (
                  <div key={i} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-slate-100">
                     <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 text-cyan-600 shadow-sm group-hover:bg-cyan-600 group-hover:text-white transition">
                        <item.icon className="w-7 h-7" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                     <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Upload Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
         
         <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <h2 className="text-4xl font-black mb-6">Ready to Print?</h2>
            <p className="text-slate-300 mb-10 text-lg">
               Upload your design file and get an instant quote. We support PDF, AI, PSD, and high-res JPG.
            </p>
            
            <div className="border-2 border-dashed border-slate-600 rounded-3xl p-12 bg-slate-800/50 hover:bg-slate-800 transition cursor-pointer">
               <Upload className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
               <h3 className="text-xl font-bold mb-2">Drag & Drop your files here</h3>
               <p className="text-sm text-slate-400">or click to browse from your computer</p>
            </div>
            
            <p className="mt-8 text-sm text-slate-500">Need help with design? <a href="#" className="text-cyan-400 hover:underline">Hire our design team</a></p>
         </div>
      </section>

      <footer className="bg-white py-12 border-t border-slate-200">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-bold text-slate-900">Print<span className="text-cyan-600">Master</span></div>
            <div className="text-sm text-slate-500">© 2025 PrintMaster. All rights reserved.</div>
            <div className="flex gap-4 text-slate-400">
               <a href="#" className="hover:text-cyan-600">Terms</a>
               <a href="#" className="hover:text-cyan-600">Privacy</a>
               <a href="#" className="hover:text-cyan-600">Support</a>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default PrintingDesign1;
