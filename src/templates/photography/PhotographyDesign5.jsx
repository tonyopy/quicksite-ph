import React from 'react';
import { ArrowUpRight, Instagram, Dribbble } from 'lucide-react';

const PhotographyDesign5 = () => {
  return (
    <div className="bg-yellow-400 min-h-screen font-sans selection:bg-black selection:text-yellow-400">
      {/* Header */}
      <nav className="flex justify-between items-center p-8 md:p-12">
        <div className="text-4xl font-black tracking-tighter hover:scale-110 transition-transform cursor-pointer">
          FLASH.
        </div>
        <div className="hidden md:flex gap-8 font-bold text-lg">
          <a href="#" className="hover:underline decoration-4 decoration-black underline-offset-4">Fashion</a>
          <a href="#" className="hover:underline decoration-4 decoration-black underline-offset-4">Commercial</a>
          <a href="#" className="hover:underline decoration-4 decoration-black underline-offset-4">Studio</a>
        </div>
        <button className="bg-black text-white px-8 py-3 font-bold hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1">
          BOOK NOW
        </button>
      </nav>

      {/* Hero */}
      <div className="px-8 md:px-12 pb-20">
        <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter mb-12 mix-blend-multiply opacity-90">
          BOLD<br/>MOVES
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Fashion Model" 
              className="relative w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-black"
            />
            <div className="absolute top-4 right-4 bg-white border-4 border-black p-2 font-black rotate-12 group-hover:rotate-0 transition-transform">
              NEW DROP
            </div>
          </div>
          
          <div className="space-y-8">
            <p className="text-2xl md:text-4xl font-bold leading-tight max-w-xl">
              We don't just take photos. We create <span className="bg-black text-white px-2">icons</span>. High energy fashion photography for the brave.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                 <Instagram className="w-8 h-8" />
               </a>
               <a href="#" className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                 <Dribbble className="w-8 h-8" />
               </a>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-black text-yellow-400 py-6 overflow-hidden border-y-4 border-black rotate-1 scale-105">
        <div className="whitespace-nowrap font-black text-4xl animate-marquee flex gap-12">
          <span>STREET STYLE</span>
          <span>•</span>
          <span>HIGH FASHION</span>
          <span>•</span>
          <span>EDITORIAL</span>
          <span>•</span>
          <span>STREET STYLE</span>
          <span>•</span>
          <span>HIGH FASHION</span>
          <span>•</span>
          <span>EDITORIAL</span>
           <span>•</span>
          <span>STREET STYLE</span>
          <span>•</span>
          <span>HIGH FASHION</span>
          <span>•</span>
          <span>EDITORIAL</span>
        </div>
      </div>

      {/* Grid */}
      <div className="px-8 md:px-12 py-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: 'NEON NIGHTS', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
             { title: 'URBAN JUNGLE', img: 'https://images.unsplash.com/photo-1529139574466-a302d27f60d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
             { title: 'STUDIO 54', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
           ].map((item, i) => (
             <div key={i} className="group cursor-pointer">
               <div className="relative mb-4 overflow-hidden border-4 border-black">
                 <div className="absolute inset-0 bg-yellow-400/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 flex items-center justify-center">
                   <ArrowUpRight className="w-24 h-24" />
                 </div>
                 <img src={item.img} alt={item.title} className="w-full aspect-[4/5] object-cover" />
               </div>
               <h3 className="text-3xl font-black uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                 {item.title}
               </h3>
             </div>
           ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PhotographyDesign5;
