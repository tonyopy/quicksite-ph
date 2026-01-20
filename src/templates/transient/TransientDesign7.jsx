import React, { useState } from 'react';
import { Menu, X, Users, Smile, Gamepad2, Car } from 'lucide-react';

const TransientDesign7 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-slate-600 bg-blue-50 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-xl font-black text-blue-600 uppercase tracking-tight">
              Happy<span className="text-yellow-500">Home</span>
            </div>
            <div className="hidden md:flex gap-8 font-bold text-slate-500 text-sm">
              <a href="#" className="hover:text-blue-600">For Kids</a>
              <a href="#" className="hover:text-blue-600">For Parents</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Book Family Stay
              </button>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-white rounded-b-[4rem] shadow-sm">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Kid-Friendly • Pet-Friendly • Big Groups
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-8 leading-tight">
            Making Memories <br/> <span className="text-blue-600">One Stay at a Time.</span>
          </h1>
          <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
            The perfect place for reunions, birthdays, and family bondings. 
            Spacious, safe, and full of fun activities for everyone.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="rounded-2xl h-48 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="rounded-2xl h-48 w-full object-cover md:-translate-y-4" />
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="rounded-2xl h-48 w-full object-cover" />
          </div>

          <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-300 transition-colors shadow-xl shadow-yellow-100">
            Check Availability for Big Groups
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">Sleeps up to 15</h3>
              <p className="text-slate-500 text-sm">Multiple bedrooms and pull-out beds for the whole clan.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-6">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">Kid Safe</h3>
              <p className="text-slate-500 text-sm">Baby gates, corner guards, and sanitized toys included.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">Entertainment</h3>
              <p className="text-slate-500 text-sm">Board games, karaoke, and Netflix for movie nights.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">Free Parking</h3>
              <p className="text-slate-500 text-sm">Secure parking slots for up to 3 vehicles.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransientDesign7;
