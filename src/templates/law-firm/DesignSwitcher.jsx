import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import LawFirmDesign1 from './LawFirmDesign1';
import LawFirmDesign2 from './LawFirmDesign2';
import LawFirmDesign3 from './LawFirmDesign3';
import LawFirmDesign4 from './LawFirmDesign4';
import LawFirmDesign5 from './LawFirmDesign5';
import LawFirmDesign6 from './LawFirmDesign6';
import LawFirmDesign7 from './LawFirmDesign7';
import LawFirmDesign8 from './LawFirmDesign8';
import LawFirmDesign9 from './LawFirmDesign9';
import LawFirmDesign10 from './LawFirmDesign10';

function DesignSwitcher() {
  const [currentDesign, setCurrentDesign] = useState('design1');
  const [isOpen, setIsOpen] = useState(false);

  const designs = [
    { id: 'design1', name: 'Corporate Law', component: LawFirmDesign1 },
    { id: 'design2', name: 'Criminal Defense', component: LawFirmDesign2 },
    { id: 'design3', name: 'Family Law', component: LawFirmDesign3 },
    { id: 'design4', name: 'Personal Injury', component: LawFirmDesign4 },
    { id: 'design5', name: 'Immigration Law', component: LawFirmDesign5 },
    { id: 'design6', name: 'IP & Tech Law', component: LawFirmDesign6 },
    { id: 'design7', name: 'Real Estate Law', component: LawFirmDesign7 },
    { id: 'design8', name: 'Employment Law', component: LawFirmDesign8 },
    { id: 'design9', name: 'Environmental Law', component: LawFirmDesign9 },
    { id: 'design10', name: 'General / Boutique', component: LawFirmDesign10 },
  ];

  const ActiveComponent = designs.find(d => d.id === currentDesign)?.component || LawFirmDesign1;

  return (
    <>
      <ActiveComponent />
      
      {/* Floating Switcher */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isOpen && (
          <div className="mb-4 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-64 animate-fade-in-up">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-bold text-gray-700 text-sm uppercase tracking-wider">
              Select Law Firm Template
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
                      ? 'bg-slate-900 text-white shadow-md'
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
          className="bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-white flex items-center justify-center group"
          title="Switch Design"
        >
          <Palette className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </>
  );
}

export default DesignSwitcher;
