import React, { useState } from 'react';
import { Menu, X, Palmtree, Waves, Wind, Sun } from 'lucide-react';

const TransientDesign6 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-emerald-900 bg-emerald-50 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-emerald-50/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <Palmtree className="w-6 h-6 text-emerald-600" />
              <span>Casa<span className="text-emerald-600">Verde</span></span>
            </div>
            <div className="hidden md:flex gap-8 font-medium text-emerald-800">
              <a href="#" className="hover:text-emerald-600">Villa</a>
              <a href="#" className="hover:text-emerald-600">Pool</a>
              <a href="#" className="bg-emerald-600 text-white px-6 py-2 rounded-2xl hover:bg-emerald-700 transition-colors">Book Now</a>
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
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-bold mb-6">
              <Sun className="w-4 h-4" />
              Private Resort & Villa
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-950 mb-6 leading-tight">
              Your Private <br/> Tropical Escape.
            </h1>
            <p className="text-lg text-emerald-700/80 mb-8 leading-relaxed">
              Experience the tranquility of nature with the comfort of modern amenities. 
              Private pool, lush gardens, and wide open spaces.
            </p>
            <div className="flex gap-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-200 transition-all">
                Check Dates
              </button>
              <button className="bg-white text-emerald-700 border-2 border-emerald-100 px-8 py-4 rounded-2xl font-bold hover:border-emerald-600 transition-all">
                View Gallery
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-emerald-200 border-8 border-white">
              <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-2 mb-2 text-emerald-600 font-bold">
                <Waves className="w-5 h-5" />
                Private Pool
              </div>
              <p className="text-emerald-800 text-sm">Exclusive use for you and your family. No sharing with other guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white rounded-t-[3rem]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4">Resort Features</h2>
            <p className="text-emerald-600">Everything you need for a perfect summer.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Waves, title: "Kiddie & Adult Pool", desc: "4ft to 6ft depth" },
              { icon: Palmtree, title: "Gazebo & Grill", desc: "Free charcoal use" },
              { icon: Wind, title: "Fresh Air", desc: "Surrounded by trees" },
              { icon: Sun, title: "Sun Deck", desc: "Loungers included" },
            ].map((item, i) => (
              <div key={i} className="bg-emerald-50 p-6 rounded-3xl hover:bg-emerald-100 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-emerald-900 mb-2">{item.title}</h3>
                <p className="text-emerald-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransientDesign6;
