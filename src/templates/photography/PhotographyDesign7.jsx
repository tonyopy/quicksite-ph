import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, Mail } from 'lucide-react';

const PhotographyDesign7 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans bg-white text-gray-800">
      
      {/* Sidebar Navigation (Fixed on Desktop) */}
      <aside className="w-full md:w-80 md:h-screen md:fixed md:top-0 md:left-0 bg-white border-r border-gray-100 flex flex-col justify-between z-50">
        <div className="p-8 flex justify-between items-center md:block">
          <div className="mb-0 md:mb-12">
            <h1 className="text-2xl font-bold tracking-tight">ALEXANDRA<br/>STONE</h1>
            <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">Fine Art Photography</p>
          </div>
          
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

          <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-20 left-0 w-full bg-white p-8 md:p-0 shadow-lg md:shadow-none border-b md:border-none border-gray-100`}>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><a href="#" className="text-black block">Home</a></li>
              <li><a href="#" className="hover:text-black transition-colors block">Portfolio</a></li>
              <li className="pl-4 border-l border-gray-200"><a href="#" className="hover:text-black transition-colors block">Weddings</a></li>
              <li className="pl-4 border-l border-gray-200"><a href="#" className="hover:text-black transition-colors block">Portraits</a></li>
              <li className="pl-4 border-l border-gray-200"><a href="#" className="hover:text-black transition-colors block">Travel</a></li>
              <li><a href="#" className="hover:text-black transition-colors block">About</a></li>
              <li><a href="#" className="hover:text-black transition-colors block">Journal</a></li>
              <li><a href="#" className="hover:text-black transition-colors block">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="hidden md:block p-8">
          <div className="flex gap-4 text-gray-400 mb-6">
            <Instagram className="w-5 h-5 hover:text-black cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 hover:text-black cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 hover:text-black cursor-pointer transition-colors" />
          </div>
          <p className="text-[10px] text-gray-300 uppercase tracking-widest">
            © 2024 Alexandra Stone.
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-80">
        <div className="grid grid-cols-1 gap-12 p-8 md:p-12 lg:p-16 max-w-6xl mx-auto">
          
          {/* Image 1 */}
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Wedding" 
              className="w-full h-auto"
            />
            <div className="flex justify-between items-baseline border-b border-gray-100 pb-4">
              <h2 className="text-xl font-light">Sarah & James</h2>
              <span className="text-xs text-gray-400 uppercase tracking-widest">Tuscany, Italy</span>
            </div>
          </div>

           {/* Image 2 */}
           <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Wedding 2" 
              className="w-full h-auto"
            />
            <div className="flex justify-between items-baseline border-b border-gray-100 pb-4">
              <h2 className="text-xl font-light">The Vows</h2>
              <span className="text-xs text-gray-400 uppercase tracking-widest">Paris, France</span>
            </div>
          </div>

           {/* Image 3 (Two Column) */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Detail 1" 
                className="w-full h-auto"
              />
              <div className="flex justify-between items-baseline border-b border-gray-100 pb-4">
                <h2 className="text-xl font-light">Details</h2>
              </div>
            </div>
            <div className="space-y-4 pt-0 md:pt-12">
              <img 
                src="https://images.unsplash.com/photo-1520854222934-f3c3fb267106?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Detail 2" 
                className="w-full h-auto"
              />
               <div className="flex justify-between items-baseline border-b border-gray-100 pb-4">
                <h2 className="text-xl font-light">Moments</h2>
              </div>
            </div>
           </div>

           {/* Quote */}
           <div className="py-24 text-center px-8">
             <p className="text-3xl font-light italic text-gray-400">
               "Photography is the only language that can be understood anywhere in the world."
             </p>
           </div>

        </div>
      </main>
    </div>
  );
};

export default PhotographyDesign7;
