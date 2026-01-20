import React, { useState } from 'react';
import { Menu, X, DollarSign, Map, Users, Coffee } from 'lucide-react';

const TransientDesign10 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-yellow-400 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-black text-black uppercase tracking-tighter transform -rotate-1">
              Backpacker<span className="text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Pad</span>
            </div>
            <div className="hidden md:flex gap-8 font-bold text-black text-sm uppercase">
              <a href="#" className="hover:underline decoration-2 underline-offset-4">Rates</a>
              <a href="#" className="hover:underline decoration-2 underline-offset-4">Dorms</a>
              <a href="#" className="hover:underline decoration-2 underline-offset-4">Location</a>
              <button className="bg-black text-white px-4 py-1 hover:bg-gray-800 transition-colors">
                Book Now
              </button>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-yellow-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <h1 className="text-5xl md:text-7xl font-black text-black mb-6 leading-[0.9] uppercase">
              Cheap Stays. <br/>
              <span className="text-red-600">Good Vibes.</span>
            </h1>
            <p className="text-xl font-bold text-gray-500 mb-8">
              Starting at just <span className="text-black bg-yellow-300 px-2">₱499/night</span>. 
              The best budget hostel in the city center.
            </p>
            <button className="w-full bg-red-600 text-white py-4 font-black text-xl uppercase border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all">
              Book a Bunk
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] aspect-square" />
            <img src="https://images.unsplash.com/photo-1596276020587-8044fe049813?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] aspect-square" />
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: "Best Value", text: "Cheapest rates guaranteed." },
              { icon: Map, title: "Center City", text: "Walk to train station." },
              { icon: Users, title: "Meet People", text: "Communal lounge area." },
              { icon: Coffee, title: "Free Breakfast", text: "Toast & Coffee daily." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border-4 border-black hover:bg-yellow-100 transition-colors">
                <item.icon className="w-10 h-10 text-black mb-4" />
                <h3 className="font-black text-xl text-black uppercase mb-2">{item.title}</h3>
                <p className="font-bold text-gray-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase mb-12">Choose Your Bunk</h2>
          <div className="grid md:grid-cols-3 gap-8 text-black">
            <div className="bg-white p-8 border-4 border-white">
              <h3 className="font-black text-2xl uppercase mb-2">Mixed Dorm</h3>
              <div className="text-4xl font-black mb-6">₱499</div>
              <ul className="text-sm font-bold text-gray-500 mb-8 space-y-2">
                <li>10 Beds</li>
                <li>Shared Bath</li>
                <li>Locker Included</li>
              </ul>
              <button className="w-full py-3 border-4 border-black font-black uppercase hover:bg-black hover:text-white transition-colors">Select</button>
            </div>
            <div className="bg-yellow-400 p-8 border-4 border-yellow-400 transform scale-105">
              <div className="text-xs font-black uppercase mb-2 text-red-600">Most Popular</div>
              <h3 className="font-black text-2xl uppercase mb-2">Female Dorm</h3>
              <div className="text-4xl font-black mb-6">₱599</div>
              <ul className="text-sm font-bold text-gray-800 mb-8 space-y-2">
                <li>6 Beds</li>
                <li>Ensuite Bath</li>
                <li>Vanity Area</li>
              </ul>
              <button className="w-full py-3 bg-black text-white font-black uppercase hover:bg-gray-800 transition-colors">Select</button>
            </div>
            <div className="bg-white p-8 border-4 border-white">
              <h3 className="font-black text-2xl uppercase mb-2">Private Room</h3>
              <div className="text-4xl font-black mb-6">₱1,299</div>
              <ul className="text-sm font-bold text-gray-500 mb-8 space-y-2">
                <li>Queen Bed</li>
                <li>Private Bath</li>
                <li>Towels Included</li>
              </ul>
              <button className="w-full py-3 border-4 border-black font-black uppercase hover:bg-black hover:text-white transition-colors">Select</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransientDesign10;
