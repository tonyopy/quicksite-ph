import React from 'react';
import { Camera, MapPin, Calendar, Heart } from 'lucide-react';

const PhotographyDesign3 = () => {
  const polaroids = [
    { id: 1, img: 'https://images.unsplash.com/photo-1520854222934-f3c3fb267106?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Summer \'23', rotate: '-2deg' },
    { id: 2, img: 'https://images.unsplash.com/photo-1522778119026-d647f0565c71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Roadtrip', rotate: '3deg' },
    { id: 3, img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Her.', rotate: '-1deg' },
    { id: 4, img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Cinque Terre', rotate: '2deg' },
  ];

  return (
    <div className="bg-stone-100 min-h-screen font-serif text-stone-800 overflow-x-hidden">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-50 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      {/* Header */}
      <header className="py-12 text-center relative z-10">
        <div className="inline-block border-4 border-stone-800 p-2 mb-4">
          <Camera className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">The Memory Keeper</h1>
        <p className="italic text-stone-600">Analog soul in a digital world.</p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Intro Note */}
        <div className="bg-white p-8 shadow-md max-w-2xl mx-auto mb-20 rotate-1 transform border border-stone-200" style={{backgroundImage: 'linear-gradient(#f1f1f1 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
          <h2 className="text-2xl font-bold mb-4 handwritten-font">Hello, Friend.</h2>
          <p className="leading-relaxed text-lg">
            I capture moments that feel like nostalgia before they've even passed. 
            My style is imperfect, raw, and real. Just like life.
          </p>
          <div className="mt-6 text-right font-bold font-handwriting text-xl text-blue-600">
            - Alex
          </div>
        </div>

        {/* Polaroid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 px-4 md:px-12">
          {polaroids.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-4 pb-12 shadow-xl transition-transform hover:scale-105 hover:z-20 duration-300 ease-out"
              style={{ transform: `rotate(${item.rotate})` }}
            >
              <div className="aspect-square bg-stone-200 overflow-hidden mb-4 filter sepia-[.3] contrast-110">
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
              </div>
              <div className="font-handwriting text-2xl text-center text-stone-700 font-bold">
                {item.caption}
              </div>
            </div>
          ))}
        </div>

        {/* Services / Tape Section */}
        <div className="mt-32 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-200/80 rotate-2 shadow-sm z-20"></div>
          <div className="bg-white p-12 shadow-lg border-2 border-stone-800 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest border-b-2 border-stone-800 inline-block pb-2">Packages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-4">
                <Heart className="w-8 h-8 mx-auto mb-4 text-red-500" />
                <h3 className="font-bold text-xl mb-2">Couples</h3>
                <p className="text-sm text-stone-600">For the wildly in love.</p>
              </div>
              <div className="p-4 border-l-0 md:border-l-2 border-r-0 md:border-r-2 border-stone-200">
                <Calendar className="w-8 h-8 mx-auto mb-4 text-blue-500" />
                <h3 className="font-bold text-xl mb-2">Events</h3>
                <p className="text-sm text-stone-600">Parties, gigs, and good times.</p>
              </div>
              <div className="p-4">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-green-500" />
                <h3 className="font-bold text-xl mb-2">Travel</h3>
                <p className="text-sm text-stone-600">Join me on an adventure.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-stone-500 relative z-10">
        <p>Est. 2024 • Shot on 35mm & Digital</p>
      </footer>
    </div>
  );
};

export default PhotographyDesign3;
