import React, { useState } from 'react';
import { Menu, X, Zap, Clock, Calendar } from 'lucide-react';

const CleaningDesign10 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-white bg-indigo-600 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-indigo-600 border-b border-indigo-500">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold italic tracking-tighter flex items-center gap-1">
              <Zap className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              QuickClean
            </div>
            <div className="hidden md:flex gap-6 text-sm font-bold text-indigo-200">
              <a href="#" className="hover:text-white">How it Works</a>
              <a href="#" className="hover:text-white">Pricing</a>
              <a href="#" className="bg-white text-indigo-600 px-4 py-1.5 rounded-full hover:bg-indigo-50 transition-colors">
                Book Now
              </a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block bg-indigo-700 text-indigo-200 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
            Same Day Service Available
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Clean home in <br/> <span className="text-yellow-400">3 clicks.</span>
          </h1>
          <p className="text-lg text-indigo-200 mb-8 max-w-sm mx-auto">
            The fastest way to book a top-rated cleaner in Metro Manila. No phone calls, no hassle.
          </p>

          {/* Booking Widget Simulation */}
          <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="bg-indigo-50 rounded-xl p-6">
              <div className="space-y-4">
                <div className="bg-white p-3 rounded-lg flex items-center gap-3 text-left shadow-sm">
                  <Clock className="w-5 h-5 text-indigo-400" />
                  <div className="flex-1 text-slate-400 text-sm">Select Time</div>
                </div>
                <div className="bg-white p-3 rounded-lg flex items-center gap-3 text-left shadow-sm">
                  <Calendar className="w-5 h-5 text-indigo-400" />
                  <div className="flex-1 text-slate-400 text-sm">Select Date</div>
                </div>
                <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                  Find Cleaner
                </button>
              </div>
            </div>
          </div>
          
          <p className="mt-6 text-xs text-indigo-300 font-medium">
            100% Satisfaction Guarantee • No Hidden Fees
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 px-6 bg-indigo-700">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">1</div>
            <div className="text-sm font-medium">Book</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">2</div>
            <div className="text-sm font-medium">Pay</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">3</div>
            <div className="text-sm font-medium">Relax</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleaningDesign10;
