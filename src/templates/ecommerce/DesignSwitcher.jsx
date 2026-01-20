import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import EcommerceDesign1 from './EcommerceDesign1';
import EcommerceDesign2 from './EcommerceDesign2';
import EcommerceDesign3 from './EcommerceDesign3';
import EcommerceDesign4 from './EcommerceDesign4';
import EcommerceDesign5 from './EcommerceDesign5';
import EcommerceDesign6 from './EcommerceDesign6';
import EcommerceDesign7 from './EcommerceDesign7';
import EcommerceDesign8 from './EcommerceDesign8';
import EcommerceDesign9 from './EcommerceDesign9';
import EcommerceDesign10 from './EcommerceDesign10';

function DesignSwitcher() {
  const [currentDesign, setCurrentDesign] = useState('design1');
  const [isOpen, setIsOpen] = useState(false);

  const designs = [
    { id: 'design1', name: 'Modern Minimalist', component: EcommerceDesign1 },
    { id: 'design2', name: 'Dark Mode Tech', component: EcommerceDesign2 },
    { id: 'design3', name: 'Fashion Boutique', component: EcommerceDesign3 },
    { id: 'design4', name: 'Organic Green', component: EcommerceDesign4 },
    { id: 'design5', name: 'Industrial Tools', component: EcommerceDesign5 },
    { id: 'design6', name: 'Kids & Toys', component: EcommerceDesign6 },
    { id: 'design7', name: 'Luxury Jewelry', component: EcommerceDesign7 },
    { id: 'design8', name: 'Electronics Grid', component: EcommerceDesign8 },
    { id: 'design9', name: 'Artistic Handmade', component: EcommerceDesign9 },
    { id: 'design10', name: 'Grocery Fresh', component: EcommerceDesign10 },
  ];

  const ActiveComponent = designs.find(d => d.id === currentDesign)?.component || EcommerceDesign1;

  return (
    <>
      <ActiveComponent />
      
      {/* Floating Switcher */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isOpen && (
          <div className="mb-4 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-64 animate-fade-in-up">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-bold text-gray-700 text-sm uppercase tracking-wider">
              Select Design Template
            </div>
            <div className="p-2 space-y-1 max-h-80 overflow-y-auto custom-scrollbar">
              {designs.map((design) => (
                <button
                  key={design.id}
                  onClick={() => {
                    setCurrentDesign(design.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                    currentDesign === design.id
                      ? 'bg-neutral-900 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {design.name}
                  {currentDesign === design.id && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-neutral-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-white flex items-center justify-center group"
          title="Switch Design"
        >
          <Palette className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </>
  );
}

export default DesignSwitcher;
