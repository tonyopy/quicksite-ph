import React, { useState } from 'react';
import { Menu, X, Sparkles, Heart, Smile } from 'lucide-react';

const CleaningDesign5 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-slate-700 bg-yellow-50 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white shadow-sm rounded-b-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-black tracking-tight text-blue-500 flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-yellow-400 fill-current" />
              Happy<span className="text-yellow-400">Clean</span>
            </div>
            <div className="hidden md:flex gap-8 font-bold text-slate-500">
              <a href="#" className="hover:text-blue-500">Why Us?</a>
              <a href="#" className="hover:text-blue-500">Services</a>
              <a href="#" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Book a Clean
              </a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 leading-tight">
              Don't stress <br/> the <span className="text-blue-500">mess!</span>
            </h1>
            <p className="text-xl text-slate-500 mb-8 font-medium">
              We make your home sparkle so you can focus on the fun stuff. 
              Friendly cleaners, happy homes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-2xl font-black text-lg hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-200 transform hover:-translate-y-1">
                Get Sparkly Clean
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-50"></div>
            <div className="relative rounded-[3rem] border-8 border-white shadow-2xl bg-yellow-100 w-full h-[400px] flex items-center justify-center rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="text-center opacity-60">
                  <Smile className="w-32 h-32 text-yellow-500 mx-auto mb-4" />
                  <span className="text-yellow-700 font-black text-2xl tracking-tight">Happy Home</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border-b-8 border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
              <Smile className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-4">Friendly Faces</h3>
            <p className="text-slate-500 font-medium">Our cleaners are always smiling and happy to help!</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border-b-8 border-yellow-100">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-500 mb-6">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-4">Super Shine</h3>
            <p className="text-slate-500 font-medium">We scrub, polish, and shine until everything glows.</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border-b-8 border-pink-100">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500 mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-4">Pet Lovers</h3>
            <p className="text-slate-500 font-medium">We love your furry friends just as much as you do.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleaningDesign5;
