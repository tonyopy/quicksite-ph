import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import ClinicDesign1 from './ClinicDesign1';
import ClinicDesign2 from './ClinicDesign2';
import ClinicDesign3 from './ClinicDesign3';
import ClinicDesign4 from './ClinicDesign4';
import ClinicDesign5 from './ClinicDesign5';
import ClinicDesign6 from './ClinicDesign6';
import ClinicDesign7 from './ClinicDesign7';
import ClinicDesign8 from './ClinicDesign8';
import ClinicDesign9 from './ClinicDesign9';
import ClinicDesign10 from './ClinicDesign10';
import ClinicDesign11 from './ClinicDesign11';

function DesignSwitcher() {
  const [currentDesign, setCurrentDesign] = useState('design11');
  const [isOpen, setIsOpen] = useState(false);

  const designs = [
    { id: 'design11', name: 'DentaGem Clinic', component: ClinicDesign11 },
    { id: 'design1', name: 'Clean Professional', component: ClinicDesign1 },
    { id: 'design2', name: 'Pediatric Care', component: ClinicDesign2 },
    { id: 'design3', name: 'Dental Studio', component: ClinicDesign3 },
    { id: 'design4', name: 'Aesthetic Clinic', component: ClinicDesign4 },
    { id: 'design5', name: 'Mental Health', component: ClinicDesign5 },
    { id: 'design6', name: 'Eye Care', component: ClinicDesign6 },
    { id: 'design7', name: 'Chiropractic', component: ClinicDesign7 },
    { id: 'design8', name: 'Vet Clinic', component: ClinicDesign8 },
    { id: 'design9', name: 'Women\'s Health', component: ClinicDesign9 },
    { id: 'design10', name: 'Urgent Care', component: ClinicDesign10 },
  ];

  const ActiveComponent = designs.find(d => d.id === currentDesign)?.component || ClinicDesign11;

  return (
    <>
      <ActiveComponent />
      
      {/* Floating Switcher */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        {/* QuickSitePH Branding Label */}
        {!isOpen && (
          <div className="mb-2 mr-2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
            Preview Templates
          </div>
        )}

        {isOpen && (
          <div className="mb-4 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-72 animate-fade-in-up">
            <div className="bg-slate-900 px-4 py-4 border-b border-slate-800">
               <div className="font-black text-white text-lg tracking-tight">QuickSitePH</div>
               <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Live Template Gallery</div>
            </div>
            <div className="p-2 space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar">
              {designs.map((design) => (
                <button
                  key={design.id}
                  onClick={() => {
                    setCurrentDesign(design.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                    currentDesign === design.id
                      ? 'bg-blue-600 text-white shadow-md transform scale-[1.02]'
                      : 'text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-100'
                  }`}
                >
                  {design.name}
                  {currentDesign === design.id && (
                    <span className="w-2 h-2 bg-white rounded-full shadow-sm"></span>
                  )}
                </button>
              ))}
              <div className="px-4 py-3 text-xs text-center border-t border-slate-100 mt-2 bg-slate-50">
                <p className="text-slate-500 font-medium">Want a custom design?</p>
                <a href="#" className="text-blue-600 font-bold hover:underline">Contact QuickSitePH Team</a>
              </div>
            </div>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 hover:scale-110 transition-all duration-300 border-4 border-white flex items-center justify-center group"
          title="Browse Templates"
        >
          <Palette className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </>
  );
}

export default DesignSwitcher;
