import React, { useState } from 'react';
import { Heart, Calendar, Mail, Camera, Gift, Music } from 'lucide-react';

function PrintingDesign7() {
  return (
    <div className="min-h-screen bg-[#FFF0F5] font-serif text-stone-800">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm border-b border-pink-100">
         <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            <div className="text-3xl italic text-pink-400 font-medium">
               Vow & Verse
            </div>
            <div className="hidden md:flex gap-10 text-sm tracking-widest uppercase text-stone-500 font-sans">
               <a href="#" className="hover:text-pink-400">Invitations</a>
               <a href="#" className="hover:text-pink-400">Day Of</a>
               <a href="#" className="hover:text-pink-400">Thank You</a>
            </div>
            <button className="text-xs uppercase tracking-widest border border-pink-200 px-6 py-2 hover:bg-pink-50 transition">
               Consultation
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
               <span className="text-pink-400 font-sans text-xs tracking-[0.3em] uppercase">Fine Stationery Suite</span>
               <h1 className="text-6xl lg:text-7xl font-light text-stone-800 leading-tight">
                  Set the Tone for <br/>
                  <span className="italic text-pink-400">Forever</span>
               </h1>
               <p className="text-lg text-stone-500 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                  Elegant, custom-designed wedding invitations printed on luxurious cotton paper with gold foil accents.
               </p>
               <button className="bg-stone-800 text-white px-10 py-4 font-sans text-xs uppercase tracking-widest hover:bg-stone-700 transition">
                  Shop Collection
               </button>
            </div>
            
            <div className="relative p-8 bg-white shadow-2xl rotate-2 hover:rotate-0 transition duration-[2s]">
               <div className="absolute inset-0 border border-stone-100 m-4 pointer-events-none"></div>
               <img 
                  src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1000&q=80" 
                  alt="Wedding Invite" 
                  className="w-full h-[500px] object-cover"
               />
            </div>
         </div>
      </section>

      {/* Collection Grid */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-light mb-4">The Suite</h2>
               <div className="w-12 h-px bg-pink-200 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
               {[
                  { icon: Mail, title: "Save the Dates", desc: "Make the first impression count." },
                  { icon: Calendar, title: "Formal Invites", desc: "Classic layouts with modern typography." },
                  { icon: Gift, title: "Menus & Place Cards", desc: "Coordinated details for your reception." },
               ].map((item, i) => (
                  <div key={i} className="text-center group">
                     <div className="w-16 h-16 mx-auto bg-pink-50 rounded-full flex items-center justify-center mb-6 text-pink-400 group-hover:bg-pink-100 transition">
                        <item.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-light mb-3">{item.title}</h3>
                     <p className="text-stone-500 font-light text-sm">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-[#FFF0F5] text-center px-6">
         <div className="max-w-2xl mx-auto">
            <Heart className="w-8 h-8 text-pink-400 mx-auto mb-8" />
            <p className="text-2xl italic text-stone-600 mb-8 font-light leading-relaxed">
               "The quality of the paper and the foil stamping was absolutely breathtaking. Our guests couldn't stop talking about them!"
            </p>
            <div className="font-sans text-xs uppercase tracking-widest text-stone-400">
               - Emily & James, June 2024
            </div>
         </div>
      </section>

      <footer className="py-12 bg-white text-center text-stone-400 text-xs font-sans tracking-widest uppercase">
         <p>© 2025 Vow & Verse. Crafted with Love.</p>
      </footer>
    </div>
  );
}

export default PrintingDesign7;
