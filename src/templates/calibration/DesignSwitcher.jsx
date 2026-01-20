import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import CalibrationDesign1 from './CalibrationDesign1';
import CalibrationDesign2 from './CalibrationDesign2';
import CalibrationDesign3 from './CalibrationDesign3';
import CalibrationDesign4 from './CalibrationDesign4';
import CalibrationDesign5 from './CalibrationDesign5';
import CalibrationDesign6 from './CalibrationDesign6';
import CalibrationDesign7 from './CalibrationDesign7';
import CalibrationDesign8 from './CalibrationDesign8';
import CalibrationDesign9 from './CalibrationDesign9';
import CalibrationDesign10 from './CalibrationDesign10';

function DesignSwitcher() {
  const [currentDesign, setCurrentDesign] = useState('design1');
  const [isOpen, setIsOpen] = useState(false);

  const designs = [
    { id: 'design1', name: 'Enterprise Portal Landing', component: CalibrationDesign1 },
    { id: 'design2', name: 'High Tech Dark', component: CalibrationDesign2 },
    { id: 'design3', name: 'Industrial Heavy', component: CalibrationDesign3 },
    { id: 'design4', name: 'Client Portal Dashboard', component: CalibrationDesign4 },
    { id: 'design5', name: 'Scientific Teal', component: CalibrationDesign5 },
    { id: 'design6', name: 'Precision Engineering', component: CalibrationDesign6 },
    { id: 'design7', name: 'Eco Lab', component: CalibrationDesign7 },
    { id: 'design8', name: 'Modern SaaS', component: CalibrationDesign8 },
    { id: 'design9', name: 'Classic Trust', component: CalibrationDesign9 },
    { id: 'design10', name: 'Compact Info', component: CalibrationDesign10 },
  ];

  const ActiveComponent = designs.find(d => d.id === currentDesign)?.component || CalibrationDesign1;

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
            </div>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-slate-900 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/20 flex items-center gap-3 group backdrop-blur-md"
          title="Switch Design"
        >
          <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform text-blue-400" />
          <div className="text-left leading-tight">
             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Customize View</div>
             <div className="text-sm font-bold">Switch Design</div>
          </div>
        </button>
      </div>
    </>
  );
}

export default DesignSwitcher;
