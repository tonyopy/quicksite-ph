import React, { useState } from 'react';
import { PenTool, Palette, Zap, MousePointer, Layers, Monitor, Image, Box } from 'lucide-react';

function PrintingDesign2() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 mix-blend-difference">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-3xl font-black tracking-tighter">
            INK<span className="text-pink-500">.</span>STUDIO
          </div>
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105">
            Start Project
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[128px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-[128px] opacity-40 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight">
            WE PRINT <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">LOUD.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
            Bold designs. Vivid colors. Unapologetic creativity. 
            We turn your digital dreams into tangible art.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
             <button className="px-10 py-5 bg-pink-600 rounded-full font-bold text-lg hover:bg-pink-500 transition shadow-[0_0_40px_rgba(219,39,119,0.5)]">
                View Work
             </button>
             <button className="px-10 py-5 border border-gray-700 rounded-full font-bold text-lg hover:border-white transition">
                Our Services
             </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-zinc-950">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { title: "Neon Posters", cat: "Large Format", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" },
                  { title: "Indie Zines", cat: "Booklets", img: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80" },
                  { title: "Brand Merch", cat: "Apparel", img: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=800&q=80" },
                  { title: "Art Prints", cat: "Fine Art", img: "https://images.unsplash.com/photo-1579783902614-a3fb39279c23?auto=format&fit=crop&w=800&q=80" },
                  { title: "Vinyl Stickers", cat: "Die-Cut", img: "https://images.unsplash.com/photo-1572375992501-59122858b29c?auto=format&fit=crop&w=800&q=80" },
                  { title: "Album Covers", cat: "Packaging", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=800&q=80" },
               ].map((item, i) => (
                  <div key={i} className="group relative aspect-square overflow-hidden cursor-pointer rounded-2xl">
                     <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-2"
                     />
                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-6 text-center">
                        <span className="text-pink-500 font-bold tracking-widest uppercase text-sm mb-2">{item.cat}</span>
                        <h3 className="text-3xl font-black">{item.title}</h3>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Services Marquee */}
      <section className="py-20 bg-pink-600 overflow-hidden">
         <div className="whitespace-nowrap animate-marquee">
            <span className="text-8xl font-black text-black mx-8">OFFSET PRINTING • DIGITAL PRINTING • FOIL STAMPING • EMBOSSING •</span>
            <span className="text-8xl font-black text-black mx-8">OFFSET PRINTING • DIGITAL PRINTING • FOIL STAMPING • EMBOSSING •</span>
         </div>
      </section>

      <footer className="py-12 bg-black text-center text-gray-500">
         <p>© 2025 INK.STUDIO. Create or Die.</p>
      </footer>
    </div>
  );
}

export default PrintingDesign2;
