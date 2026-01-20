import React, { useState } from 'react';
import { Palette, Home, Building } from 'lucide-react';
import RealEstateDesign1 from './RealEstateDesign1';
import RealEstateDesign3 from './RealEstateDesign3';
import RealEstateDesign4 from './RealEstateDesign4';
import RealEstateDesign6 from './RealEstateDesign6';
import RealEstateDesign7 from './RealEstateDesign7';
import RealEstateDesign8 from './RealEstateDesign8';
import RealEstateDesign9 from './RealEstateDesign9';
import RealEstateDesign10 from './RealEstateDesign10';

function DesignSwitcher() {
  const [currentDesign, setCurrentDesign] = useState('design1');
  const [isOpen, setIsOpen] = useState(false);

  const designs = [
    { id: 'design1', name: 'Luxury Estate', component: RealEstateDesign1 },
    { id: 'design2', name: 'Modern Urban', component: RealEstateDesign2 },
    { id: 'design3', name: 'Family Suburban', component: RealEstateDesign3 },
    { id: 'design4', name: 'Commercial Real Estate', component: RealEstateDesign4 },
    { id: 'design6', name: 'Property Management', component: RealEstateDesign6 },
    { id: 'design7', name: 'Real Estate Developer', component: RealEstateDesign7 },
    { id: 'design8', name: 'Boutique Agency', component: RealEstateDesign8 },
    { id: 'design9', name: 'Rural/Farm & Land', component: RealEstateDesign9 },
    { id: 'design10', name: 'Apartment Finder', component: RealEstateDesign10 },
  ];

  const ActiveComponent = designs.find(d => d.id === currentDesign)?.component || RealEstateDesign1;

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
              <div className="px-4 py-2 text-xs text-gray-400 italic text-center border-t border-gray-100 mt-2">
                More designs coming soon...
              </div>
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