import React from 'react';
import { Maximize2, ArrowRight } from 'lucide-react';

const PhotographyDesign4 = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Sidebar / Header */}
      <div className="fixed top-0 left-0 w-full h-20 md:w-24 md:h-full bg-white border-b md:border-b-0 md:border-r border-gray-200 z-50 flex md:flex-col justify-between items-center p-6">
        <div className="font-bold text-2xl tracking-tighter">AG.</div>
        <div className="hidden md:block -rotate-90 whitespace-nowrap text-xs uppercase tracking-[0.3em] text-gray-400">
          Art Gallery Template
        </div>
        <div className="w-8 h-8 rounded-full border border-gray-900 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
          <Maximize2 className="w-4 h-4" />
        </div>
      </div>

      {/* Content */}
      <div className="md:pl-24 pt-20 md:pt-0">
        <div className="min-h-screen flex flex-col">
          {/* Hero Text */}
          <div className="p-8 md:p-24 border-b border-gray-100">
            <h1 className="text-6xl md:text-9xl font-light tracking-tighter mb-8">
              Visual<br/>Silence.
            </h1>
            <p className="max-w-xl text-gray-500 text-lg md:text-xl font-light leading-relaxed">
              A minimalist collection of photographs exploring the geometry of urban spaces and the solitude of modern life.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-gray-100">
            {/* Item 1 */}
            <div className="group relative border-b md:border-b-0 md:border-r border-gray-100 aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Architecture" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-95"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90">
                <div className="text-center">
                  <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">01 / Structure</span>
                  <h3 className="text-2xl font-light">The High Rise</h3>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group relative border-b md:border-b-0 md:border-r border-gray-100 aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Street" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-95"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90">
                <div className="text-center">
                  <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">02 / Motion</span>
                  <h3 className="text-2xl font-light">City Walk</h3>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group relative aspect-square overflow-hidden">
              <div className="w-full h-full bg-gray-50 flex items-center justify-center p-12">
                <div className="text-left">
                  <h3 className="text-4xl font-light mb-6">Exhibitions</h3>
                  <ul className="space-y-4 text-gray-500">
                    <li className="flex items-center justify-between border-b border-gray-200 pb-2">
                      <span>Tokyo, 2023</span>
                      <ArrowRight className="w-4 h-4" />
                    </li>
                    <li className="flex items-center justify-between border-b border-gray-200 pb-2">
                      <span>Berlin, 2022</span>
                      <ArrowRight className="w-4 h-4" />
                    </li>
                    <li className="flex items-center justify-between border-b border-gray-200 pb-2">
                      <span>New York, 2021</span>
                      <ArrowRight className="w-4 h-4" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="group relative border-t border-b md:border-b-0 md:border-r border-gray-100 aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506157786151-b8491531f43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Abstract" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-95"
              />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90">
                <div className="text-center">
                  <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">03 / Texture</span>
                  <h3 className="text-2xl font-light">Sound Waves</h3>
                </div>
              </div>
            </div>

             {/* Item 5 */}
             <div className="group relative border-t border-b md:border-b-0 md:border-r border-gray-100 aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Rain" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-95"
              />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90">
                <div className="text-center">
                  <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">04 / Weather</span>
                  <h3 className="text-2xl font-light">Storm Front</h3>
                </div>
              </div>
            </div>

            {/* Item 6 (Contact) */}
            <div className="group relative border-t aspect-square overflow-hidden bg-black text-white flex flex-col justify-between p-12 hover:bg-gray-900 transition-colors">
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-500">Inquiries</span>
                <h3 className="text-3xl font-light mt-4">Available for<br/>Commissions</h3>
              </div>
              <div className="flex items-center gap-4 group-hover:translate-x-2 transition-transform">
                <span className="text-lg">Get in touch</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

          </div>
          
          <footer className="p-8 md:p-12 text-center md:text-left text-xs uppercase tracking-widest text-gray-400">
            © 2024 AG Gallery Template. Minimalist Design.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PhotographyDesign4;
