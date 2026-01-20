import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, Star, Smile, Gift, Cloud } from 'lucide-react';

const EcommerceDesign6 = () => {
  return (
    <div className="min-h-screen bg-blue-50 font-sans">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white text-center py-2 font-bold text-sm">
        🎈 Free Gift with every order over $50! 🎈
      </div>

      {/* Navbar */}
      <nav className="bg-white m-4 rounded-2xl shadow-sm border border-blue-100 px-6 py-4 sticky top-4 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 p-2 rounded-xl text-white shadow-sm rotate-3">
              <Smile size={24} />
            </div>
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 tracking-tight">
              KIDDO<span className="text-pink-500">LAND</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-2">
            {['Toys', 'Clothing', 'School', 'Baby', 'Sale'].map((item, i) => (
              <a key={item} href="#" className={`px-4 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105 ${
                i % 2 === 0 ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
              }`}>
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 text-gray-600">
              <Search size={20} />
            </button>
            <button className="bg-green-400 p-3 rounded-full hover:bg-green-500 text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              <ShoppingBag size={20} />
              <span className="font-bold hidden sm:inline">$0.00</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border-4 border-dashed border-purple-200 relative overflow-hidden">
          {/* Decorative Background */}
          <Cloud className="absolute top-10 right-10 text-blue-100 w-32 h-32 fill-current" />
          <Cloud className="absolute bottom-10 left-10 text-pink-100 w-24 h-24 fill-current" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-100 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full font-bold text-sm mb-4 animate-bounce">
                New Arrivals!
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-800 mb-6 leading-tight">
                Play, Learn & <br/>
                <span className="text-purple-500">Grow Together</span>
              </h1>
              <p className="text-gray-500 text-lg mb-8 max-w-md">
                Discover safe, educational, and super fun toys for kids of all ages. Approved by parents, loved by kids!
              </p>
              <button className="bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_10px_0_rgb(29,78,216)] hover:shadow-[0_5px_0_rgb(29,78,216)] hover:translate-y-[5px] transition-all active:shadow-none active:translate-y-[10px]">
                Start Exploring 🚀
              </button>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1566576912906-25433ec38e6a?auto=format&fit=crop&w=800&q=80" 
                alt="Happy Kid with Toys" 
                className="rounded-3xl shadow-2xl border-8 border-white transform rotate-3 hover:rotate-6 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Shop by Age */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-800 mb-10 flex items-center justify-center gap-2">
            <Gift className="text-pink-500" /> Shop by Age
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['0-2 Years', '2-4 Years', '5-7 Years', '8-12 Years', 'Teens'].map((age, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer border-b-4 border-blue-200 hover:border-blue-400 group">
                <div className={`w-16 h-16 mx-auto rounded-full mb-3 flex items-center justify-center text-2xl ${
                  idx % 3 === 0 ? 'bg-yellow-100' : idx % 3 === 1 ? 'bg-green-100' : 'bg-pink-100'
                }`}>
                  {idx === 0 ? '👶' : idx === 1 ? '🛴' : idx === 2 ? '🧩' : idx === 3 ? '🎮' : '🎧'}
                </div>
                <h3 className="font-bold text-gray-700 group-hover:text-blue-500">{age}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-800 mb-8">Popular Toys</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                <div className="bg-gray-50 rounded-2xl h-48 mb-4 p-4 flex items-center justify-center relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1587654780291-39c9404d746b' : item === 2 ? '1596461404969-9ae70f2830c1' : item === 3 ? '1558877585-89d3d7564d71' : '1532330384815-c16e488d6619'}?auto=format&fit=crop&w=500&q=80`}
                    alt="Toy" 
                    className="max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-red-500">
                    <Heart size={16} />
                  </button>
                </div>
                <div className="px-2">
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} className="text-yellow-400 fill-current" />)}
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1 leading-tight">Super Fun Toy Set {item}</h3>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xl font-black text-blue-500">$24.99</span>
                    <button className="bg-pink-500 text-white p-2 rounded-xl hover:bg-pink-600 transition-colors">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceDesign6;
