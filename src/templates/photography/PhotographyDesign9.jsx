import React from 'react';

const PhotographyDesign9 = () => {
  return (
    <div className="bg-gray-200 min-h-screen font-mono text-black selection:bg-black selection:text-white p-4 md:p-8">
      
      {/* Container */}
      <div className="border-4 border-black min-h-[calc(100vh-4rem)] relative bg-white">
        
        {/* Header */}
        <header className="border-b-4 border-black p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter uppercase">
              Concrete<br/>Jungle
            </h1>
            <p className="mt-4 bg-black text-white inline-block px-2 py-1 text-sm">
              /// STREET_PHOTOGRAPHY_COLLECTIVE
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs">LOC: NYC / TOKYO / LDN</p>
            <p className="text-xs">EST: 2024</p>
            <p className="text-xs">CAM: LEICA M6</p>
          </div>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
          
          {/* Col 1 */}
          <div className="p-6 md:p-8 space-y-8">
            <div className="relative">
              <div className="absolute -top-3 -left-3 bg-black text-white text-xs px-2 py-1">001</div>
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Street 1" 
                className="w-full grayscale contrast-125 hover:contrast-100 transition-all border-2 border-black"
              />
              <h3 className="text-xl font-bold mt-4 uppercase border-b-2 border-black inline-block">Subway</h3>
              <p className="text-xs mt-2 text-gray-500">ISO 3200 • f/2.8 • 1/60</p>
            </div>
            
             <div className="bg-black text-white p-6 -mx-6 md:mx-0 border-y-4 border-black md:border-y-2">
               <h2 className="text-2xl font-bold uppercase mb-4">Manifesto</h2>
               <p className="text-sm leading-relaxed">
                 We document the raw, the unfiltered, and the unseen. No posing. No permission. Just the streets as they are.
               </p>
             </div>
          </div>

          {/* Col 2 */}
          <div className="p-6 md:p-8 space-y-8 flex flex-col justify-end">
             <div className="relative">
              <div className="absolute -top-3 -left-3 bg-black text-white text-xs px-2 py-1">002</div>
              <img 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Street 2" 
                className="w-full grayscale contrast-125 hover:contrast-100 transition-all border-2 border-black"
              />
              <h3 className="text-xl font-bold mt-4 uppercase border-b-2 border-black inline-block">Crossing</h3>
              <p className="text-xs mt-2 text-gray-500">ISO 1600 • f/8 • 1/125</p>
            </div>
            
            <div className="border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors cursor-pointer">
              <span className="font-bold text-lg uppercase">>> View Full Archive</span>
            </div>
          </div>

          {/* Col 3 */}
          <div className="p-6 md:p-8 space-y-8">
             <div className="relative">
              <div className="absolute -top-3 -left-3 bg-black text-white text-xs px-2 py-1">003</div>
              <img 
                src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Street 3" 
                className="w-full grayscale contrast-125 hover:contrast-100 transition-all border-2 border-black"
              />
              <h3 className="text-xl font-bold mt-4 uppercase border-b-2 border-black inline-block">Nightcrawler</h3>
              <p className="text-xs mt-2 text-gray-500">ISO 6400 • f/1.4 • 1/30</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="border-t-4 border-black p-6 flex justify-between items-center bg-gray-100">
           <div className="text-xs">
             ALL IMAGES © 2024
           </div>
           <div className="flex gap-4">
             <a href="#" className="underline hover:bg-black hover:text-white px-1">INSTAGRAM</a>
             <a href="#" className="underline hover:bg-black hover:text-white px-1">EMAIL</a>
           </div>
        </footer>

      </div>
    </div>
  );
};

export default PhotographyDesign9;
