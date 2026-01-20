import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import ResortDesign1 from './ResortDesign1';

function DesignSwitcher() {
  const [currentDesign, setCurrentDesign] = useState('design1');
  const [isOpen, setIsOpen] = useState(false);

  const designs = [
    { id: 'design1', name: 'Tropical Resort', component: ResortDesign1 },
    // Add more designs here later
  ];

  const ActiveComponent = designs.find(d => d.id === currentDesign)?.component || ResortDesign1;

  return (
    <>
      <ActiveComponent />
      
      {/* Floating Switcher - Hidden for now if only 1 design, or kept for future */}
      {designs.length > 1 && (
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
      )}
    </>
  );
}

export default DesignSwitcher;