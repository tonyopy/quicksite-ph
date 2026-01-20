import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import CondoDesign1 from './CondoDesign1';
import CondoDesign2 from './CondoDesign2';
import CondoDesign3 from './CondoDesign3';
import CondoDesign4 from './CondoDesign4';
import CondoDesign5 from './CondoDesign5';
import CondoDesign6 from './CondoDesign6';
import CondoDesign7 from './CondoDesign7';
import CondoDesign8 from './CondoDesign8';
import CondoDesign9 from './CondoDesign9';
import CondoDesign10 from './CondoDesign10';

function DesignSwitcher() {
  const [currentDesign, setCurrentDesign] = useState('design2');
  const [isOpen, setIsOpen] = useState(false);

  const designs = [
    { id: 'design1', name: 'Pastel Sanctuary', component: CondoDesign1 },
    { id: 'design2', name: 'Urban Luxe', component: CondoDesign2 },
    { id: 'design3', name: 'Minimalist Zen', component: CondoDesign3 },
    { id: 'design4', name: 'Modern Industrial', component: CondoDesign4 },
    { id: 'design5', name: 'Tropical Villa', component: CondoDesign5 },
    { id: 'design6', name: 'Scandi Hygge', component: CondoDesign6 },
    { id: 'design7', name: 'Mid-Century Mod', component: CondoDesign7 },
    { id: 'design8', name: 'Art Deco Glam', component: CondoDesign8 },
    { id: 'design9', name: 'Boho Chic', component: CondoDesign9 },
    { id: 'design10', name: 'Futuristic Glass', component: CondoDesign10 },
  ];

  const ActiveComponent = designs.find(d => d.id === currentDesign)?.component || CondoDesign1;

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
                      ? 'bg-blue-600 text-white shadow-md'
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
          className="bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-white flex items-center justify-center group"
          title="Switch Design"
        >
          <Palette className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </>
  );
}

export default DesignSwitcher;
