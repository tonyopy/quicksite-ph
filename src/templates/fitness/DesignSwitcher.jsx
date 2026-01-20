import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import FitnessDesign1 from './FitnessDesign1';
import FitnessDesign2 from './FitnessDesign2';
import FitnessDesign3 from './FitnessDesign3';
import FitnessDesign4 from './FitnessDesign4';
import FitnessDesign5 from './FitnessDesign5';
import FitnessDesign6 from './FitnessDesign6';
import FitnessDesign7 from './FitnessDesign7';
import FitnessDesign8 from './FitnessDesign8';
import FitnessDesign9 from './FitnessDesign9';
import FitnessDesign10 from './FitnessDesign10';

function DesignSwitcher() {
  const [currentDesign, setCurrentDesign] = useState('design1');
  const [isOpen, setIsOpen] = useState(false);

  const designs = [
    { id: 'design1', name: 'CrossFit / High Intensity', component: FitnessDesign1 },
    { id: 'design2', name: 'Yoga Studio', component: FitnessDesign2 },
    { id: 'design3', name: 'Big Box Gym', component: FitnessDesign3 },
    { id: 'design4', name: 'Personal Trainer', component: FitnessDesign4 },
    { id: 'design5', name: 'Spin Class', component: FitnessDesign5 },
    { id: 'design6', name: 'Martial Arts', component: FitnessDesign6 },
    { id: 'design7', name: 'Pilates Reformer', component: FitnessDesign7 },
    { id: 'design8', name: 'Boxing Gym', component: FitnessDesign8 },
    { id: 'design9', name: 'Wellness & Recovery', component: FitnessDesign9 },
    { id: 'design10', name: 'Dance Studio', component: FitnessDesign10 },
  ];

  const ActiveComponent = designs.find(d => d.id === currentDesign)?.component || FitnessDesign1;

  return (
    <>
      <ActiveComponent />
      
      {/* Floating Switcher */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isOpen && (
          <div className="mb-4 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-64 animate-fade-in-up">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-bold text-gray-700 text-sm uppercase tracking-wider">
              Select Fitness Template
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
                      ? 'bg-black text-white shadow-md'
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
