import React, { useState } from 'react';
import CleaningDesign1 from './CleaningDesign1';
import CleaningDesign2 from './CleaningDesign2';
import CleaningDesign3 from './CleaningDesign3';
import CleaningDesign4 from './CleaningDesign4';
import CleaningDesign5 from './CleaningDesign5';
import CleaningDesign6 from './CleaningDesign6';
import CleaningDesign7 from './CleaningDesign7';
import CleaningDesign8 from './CleaningDesign8';
import CleaningDesign9 from './CleaningDesign9';
import CleaningDesign10 from './CleaningDesign10';

const designs = [
  { id: 'design1', name: 'Corporate Standard', component: CleaningDesign1 },
  { id: 'design2', name: 'Eco-Friendly', component: CleaningDesign2 },
  { id: 'design3', name: 'Luxury Estate', component: CleaningDesign3 },
  { id: 'design4', name: 'Minimalist Modern', component: CleaningDesign4 },
  { id: 'design5', name: 'Playful & Friendly', component: CleaningDesign5 },
  { id: 'design6', name: 'Industrial Heavy', component: CleaningDesign6 },
  { id: 'design7', name: 'Tech Platform', component: CleaningDesign7 },
  { id: 'design8', name: 'Medical Grade', component: CleaningDesign8 },
  { id: 'design9', name: 'Retro Classic', component: CleaningDesign9 },
  { id: 'design10', name: 'Express Service', component: CleaningDesign10 },
];

const DesignSwitcher = () => {
  const [currentDesign, setCurrentDesign] = useState('design1');
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  const ActiveComponent = designs.find(d => d.id === currentDesign)?.component || CleaningDesign1;

  return (
    <div>
      <ActiveComponent />
      
      {/* Floating Switcher Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {isSwitcherOpen && (
          <div className="bg-white rounded-lg shadow-2xl p-2 mb-2 border border-slate-200 w-64 max-h-[70vh] overflow-y-auto">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2 pt-2">Select Template</div>
            {designs.map((design) => (
              <button
                key={design.id}
                onClick={() => {
                  setCurrentDesign(design.id);
                  setIsSwitcherOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  currentDesign === design.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {design.name}
              </button>
            ))}
          </div>
        )}
        
        <button
          onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}
          className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-slate-800 transition-all transform hover:scale-105 flex items-center gap-2"
        >
          <span>🎨 Switch Design</span>
          <span className="bg-slate-700 px-2 py-0.5 rounded text-xs">
            {designs.find(d => d.id === currentDesign)?.name}
          </span>
        </button>
      </div>
    </div>
  );
};

export default DesignSwitcher;
