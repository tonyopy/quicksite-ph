import React, { useState } from 'react';
import PhotographyDesign1 from './PhotographyDesign1';
import PhotographyDesign2 from './PhotographyDesign2';
import PhotographyDesign3 from './PhotographyDesign3';
import PhotographyDesign4 from './PhotographyDesign4';
import PhotographyDesign5 from './PhotographyDesign5';
import PhotographyDesign6 from './PhotographyDesign6';
import PhotographyDesign7 from './PhotographyDesign7';
import PhotographyDesign8 from './PhotographyDesign8';
import PhotographyDesign9 from './PhotographyDesign9';
import PhotographyDesign10 from './PhotographyDesign10';
import PhotographyDesign11 from './PhotographyDesign11';
import PhotographyDesign12 from './PhotographyDesign12';
import PhotographyDesign13 from './PhotographyDesign13';
import PhotographyDesign14 from './PhotographyDesign14';
import PhotographyDesign15 from './PhotographyDesign15';

const designs = [
  { id: 'design1', name: 'LensCraft (Minimal Portfolio)', component: PhotographyDesign1 },
  { id: 'design2', name: 'DarkRoom (Cinematic Dark)', component: PhotographyDesign2 },
  { id: 'design3', name: 'Memory Keeper (Retro Polaroid)', component: PhotographyDesign3 },
  { id: 'design4', name: 'AG Gallery (Museum Minimal)', component: PhotographyDesign4 },
  { id: 'design5', name: 'FLASH (Bold Fashion)', component: PhotographyDesign5 },
  { id: 'design6', name: 'The Chronicle (Editorial)', component: PhotographyDesign6 },
  { id: 'design7', name: 'Alexandra Stone (Sidebar Nav)', component: PhotographyDesign7 },
  { id: 'design8', name: 'Forever & Always (Elegant Wedding)', component: PhotographyDesign8 },
  { id: 'design9', name: 'Concrete Jungle (Street/Gritty)', component: PhotographyDesign9 },
  { id: 'design10', name: 'ProStudio (Commercial/Corporate)', component: PhotographyDesign10 },
  { id: 'design11', name: 'VISTAS (Immersive Fullscreen)', component: PhotographyDesign11 },
  { id: 'design12', name: 'HORIZON (Horizontal Scroll)', component: PhotographyDesign12 },
  { id: 'design13', name: 'MOSAIC (Masonry Grid)', component: PhotographyDesign13 },
  { id: 'design14', name: 'CYBER.CAM (Glitch/Cyberpunk)', component: PhotographyDesign14 },
  { id: 'design15', name: 'Visual Diaries (Split Screen)', component: PhotographyDesign15 },
];

const DesignSwitcher = () => {
  const [currentDesign, setCurrentDesign] = useState('design1');
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  const ActiveComponent = designs.find(d => d.id === currentDesign)?.component || PhotographyDesign1;

  return (
    <div>
      <ActiveComponent />
      
      {/* Floating Switcher Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {isSwitcherOpen && (
          <div className="bg-white rounded-lg shadow-2xl p-2 mb-2 border border-slate-200 w-72 max-h-[70vh] overflow-y-auto">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2 pt-2">Select Template</div>
            {designs.map((design) => (
              <button
                key={design.id}
                onClick={() => {
                  setCurrentDesign(design.id);
                  setIsSwitcherOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors border-b border-slate-50 last:border-0 ${
                  currentDesign === design.id
                    ? 'bg-indigo-600 text-white'
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
          <span className="bg-slate-700 px-2 py-0.5 rounded text-xs max-w-[100px] truncate">
            {designs.find(d => d.id === currentDesign)?.name}
          </span>
        </button>
      </div>
    </div>
  );
};

export default DesignSwitcher;
