import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import ConstructionDesign1 from './ConstructionDesign1';
import ConstructionDesign2 from './ConstructionDesign2';
import ConstructionDesign3 from './ConstructionDesign3';
import ConstructionDesign4 from './ConstructionDesign4';
import ConstructionDesign5 from './ConstructionDesign5';
import ConstructionDesign6 from './ConstructionDesign6';
import ConstructionDesign7 from './ConstructionDesign7';
import ConstructionDesign8 from './ConstructionDesign8';
import ConstructionDesign9 from './ConstructionDesign9';
import ConstructionDesign10 from './ConstructionDesign10';

function DesignSwitcher() {
  const [currentDesign, setCurrentDesign] = useState('design1');
  const [isOpen, setIsOpen] = useState(false);

  const designs = [
    { id: 'design1', name: 'General Contractor', component: ConstructionDesign1 },
    { id: 'design2', name: 'Home Renovation', component: ConstructionDesign2 },
    { id: 'design3', name: 'Roofing Specialist', component: ConstructionDesign3 },
    { id: 'design4', name: 'Plumbing & HVAC', component: ConstructionDesign4 },
    { id: 'design5', name: 'Electrician', component: ConstructionDesign5 },
    { id: 'design6', name: 'Landscaping', component: ConstructionDesign6 },
    { id: 'design7', name: 'Painting & Decorating', component: ConstructionDesign7 },
    { id: 'design8', name: 'Flooring & Tiling', component: ConstructionDesign8 },
    { id: 'design9', name: 'Windows & Doors', component: ConstructionDesign9 },
    { id: 'design10', name: 'Heavy Machinery', component: ConstructionDesign10 },
  ];

  const ActiveComponent = designs.find(d => d.id === currentDesign)?.component || ConstructionDesign1;

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
                      ? 'bg-slate-800 text-white shadow-md'
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
          className="bg-yellow-500 text-slate-900 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-slate-900 flex items-center justify-center group"
          title="Switch Design"
        >
          <Palette className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </>
  );
}

export default DesignSwitcher;