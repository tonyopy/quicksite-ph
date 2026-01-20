import React from 'react';
import { Filter } from 'lucide-react';

const PhotographyDesign13 = () => {
  const photos = [
    { id: 1, height: 'h-64 md:h-96', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, height: 'h-48 md:h-64', img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 3, height: 'h-80 md:h-[500px]', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 4, height: 'h-56 md:h-72', img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 5, height: 'h-72 md:h-80', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 6, height: 'h-64 md:h-[450px]', img: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 7, height: 'h-48 md:h-64', img: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 8, height: 'h-80 md:h-96', img: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="bg-white min-h-screen p-4 md:p-8">
      {/* Header */}
      <header className="flex justify-between items-end mb-12 sticky top-0 bg-white/90 backdrop-blur-md z-50 py-4 border-b border-gray-100">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">MOSAIC.</h1>
          <p className="text-gray-500 text-sm mt-1">Curated chaos.</p>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Filter className="w-5 h-5" />
        </button>
      </header>

      {/* Masonry Grid (Simulated with columns) */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8 mx-auto max-w-7xl">
        {photos.map((photo) => (
          <div key={photo.id} className="break-inside-avoid group relative cursor-zoom-in">
            <div className="overflow-hidden rounded-xl">
              <img 
                src={photo.img} 
                alt="" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 text-white font-medium">
              View Shot
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-24 text-center text-gray-400 text-sm">
        &copy; 2024 Mosaic Portfolio.
      </footer>
    </div>
  );
};

export default PhotographyDesign13;
