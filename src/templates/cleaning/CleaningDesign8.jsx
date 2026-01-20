import React, { useState } from 'react';
import { Menu, X, Plus, Activity, Stethoscope } from 'lucide-react';

const CleaningDesign8 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-slate-600 bg-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b border-cyan-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-semibold text-cyan-600 flex items-center gap-2">
              <Plus className="w-8 h-8 text-red-500" />
              Medi<span className="text-slate-700">Clean</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-cyan-600">Clinics</a>
              <a href="#" className="hover:text-cyan-600">Hospitals</a>
              <a href="#" className="hover:text-cyan-600">Dental</a>
              <button className="bg-cyan-600 text-white px-5 py-2 rounded hover:bg-cyan-700 transition-colors">
                Consultation
              </button>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Clinical-Grade <br/> Sanitization Services.
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Specialized cleaning for healthcare facilities. We adhere to strict DOH and CDC guidelines to ensure a sterile environment for your patients.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600"><Activity className="w-4 h-4" /></div>
                Hospital-Grade Disinfectants
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600"><Stethoscope className="w-4 h-4" /></div>
                Trained for Biohazard Handling
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600"><Plus className="w-4 h-4" /></div>
                Surgical Suite Cleaning
              </li>
            </ul>
            <button className="bg-red-500 text-white px-8 py-3 rounded font-medium hover:bg-red-600 transition-colors shadow-lg shadow-red-100">
              Request Sanitation Quote
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-600/10 rounded-full blur-3xl transform scale-90"></div>
            <div className="relative rounded-lg shadow-xl w-full h-[400px] bg-cyan-50 flex items-center justify-center">
               <div className="text-center opacity-50">
                  <Stethoscope className="w-32 h-32 text-cyan-500 mx-auto mb-4" />
                  <span className="text-cyan-700 font-bold text-xl tracking-tight">Sterile Environment</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by Top Healthcare Providers</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {/* Placeholders for logos */}
            <div className="text-2xl font-bold text-slate-300">St. Luke's</div>
            <div className="text-2xl font-bold text-slate-300">Makati Med</div>
            <div className="text-2xl font-bold text-slate-300">Asian Hospital</div>
            <div className="text-2xl font-bold text-slate-300">Cardinal Santos</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleaningDesign8;
