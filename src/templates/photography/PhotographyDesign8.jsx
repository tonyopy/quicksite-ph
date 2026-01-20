import React from 'react';
import { Heart, Calendar, Mail } from 'lucide-react';

const PhotographyDesign8 = () => {
  return (
    <div className="bg-rose-50/30 min-h-screen font-serif text-gray-800">
      {/* Centered Logo */}
      <header className="py-16 text-center">
        <div className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Est. 2018</div>
        <h1 className="text-5xl md:text-7xl italic font-medium text-gray-900 mb-2">
          Forever <span className="text-rose-400">&</span> Always
        </h1>
        <p className="text-sm font-sans uppercase tracking-widest text-gray-500 mt-4">Wedding Photography</p>
      </header>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-[50%]">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Wedding Couple" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full font-sans uppercase tracking-widest text-xs hover:bg-rose-500 hover:text-white transition-colors shadow-lg">
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Intro Text */}
      <div className="max-w-2xl mx-auto text-center px-6 mb-24">
        <Heart className="w-8 h-8 text-rose-300 mx-auto mb-8" />
        <p className="text-2xl leading-relaxed italic text-gray-600">
          "We capture the unspoken words, the stolen glances, and the overwhelming joy of your special day. Timeless elegance for the modern couple."
        </p>
      </div>

      {/* Featured Weddings */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { names: "Emma & Liam", location: "Chateau de Villette", img: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
             { names: "Olivia & Noah", location: "Santorini, Greece", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
             { names: "Sophia & Lucas", location: "New York City", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
           ].map((item, i) => (
             <div key={i} className="group cursor-pointer">
               <div className="overflow-hidden rounded-lg mb-6">
                 <img src={item.img} alt={item.names} className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
               </div>
               <div className="text-center">
                 <h3 className="text-2xl font-medium italic mb-2">{item.names}</h3>
                 <p className="font-sans text-xs uppercase tracking-widest text-gray-400">{item.location}</p>
               </div>
             </div>
           ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-medium italic mb-12">Let's create magic together</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 border border-gray-100 rounded-2xl hover:border-rose-200 transition-colors">
              <Calendar className="w-8 h-8 text-rose-300 mx-auto mb-4" />
              <h3 className="font-sans font-bold uppercase tracking-widest text-sm mb-2">Availability</h3>
              <p className="text-gray-500">Currently booking for 2025/2026 seasons.</p>
            </div>
             <div className="p-8 border border-gray-100 rounded-2xl hover:border-rose-200 transition-colors">
              <Mail className="w-8 h-8 text-rose-300 mx-auto mb-4" />
              <h3 className="font-sans font-bold uppercase tracking-widest text-sm mb-2">Inquiries</h3>
              <p className="text-gray-500">hello@foreveralways.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyDesign8;
