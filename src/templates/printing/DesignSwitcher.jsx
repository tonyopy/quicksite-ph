import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import PrintingDesign1 from './PrintingDesign1';
import PrintingDesign2 from './PrintingDesign2';
import PrintingDesign3 from './PrintingDesign3';
import PrintingDesign4 from './PrintingDesign4';
import PrintingDesign5 from './PrintingDesign5';
import PrintingDesign6 from './PrintingDesign6';
import PrintingDesign7 from './PrintingDesign7';
import PrintingDesign8 from './PrintingDesign8';
import PrintingDesign9 from './PrintingDesign9';
import PrintingDesign10 from './PrintingDesign10';

function DesignSwitcher() {
  const [currentDesign, setCurrentDesign] = useState('design1');
  const [isOpen, setIsOpen] = useState(false);

  const designs = [
    { id: 'design1', name: 'Modern Print Shop', component: PrintingDesign1 },
    { id: 'design2', name: 'Creative Studio', component: PrintingDesign2 },
    { id: 'design3', name: 'Corporate B2B', component: PrintingDesign3 },
    { id: 'design4', name: 'Eco-Friendly Print', component: PrintingDesign4 },
    { id: 'design5', name: '3D Printing Lab', component: PrintingDesign5 },
    { id: 'design6', name: 'Apparel & Merch', component: PrintingDesign6 },
    { id: 'design7', name: 'Wedding & Events', component: PrintingDesign7 },
    { id: 'design8', name: 'Signage & Large Format', component: PrintingDesign8 },
    { id: 'design9', name: 'Photo Lab', component: PrintingDesign9 },
    { id: 'design10', name: 'Packaging Pro', component: PrintingDesign10 },
  ];

  const ActiveComponent = designs.find(d => d.id === currentDesign)?.component || PrintingDesign1;

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
                      ? 'bg-cyan-600 text-white shadow-md'
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
