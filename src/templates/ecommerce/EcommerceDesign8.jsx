import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, Zap, Monitor, Smartphone, Headphones, Watch, Filter, ChevronDown, Star } from 'lucide-react';

const EcommerceDesign8 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-blue-500">
                <Zap className="w-8 h-8 fill-current" />
                <span className="text-2xl font-bold text-white tracking-tighter">TECH<span className="text-blue-500">GRID</span></span>
              </div>
              <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
                <a href="#" className="hover:text-blue-400 transition-colors">New Arrivals</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Best Sellers</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Deals</a>
              </div>
            </div>

            <div className="flex-1 max-w-xl mx-8 hidden md:block">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for products..." 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-4 pr-10 text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-gray-300 hover:text-white">
                <span className="text-sm font-medium">Sign In</span>
              </button>
              <button className="relative bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <ShoppingCart className="w-5 h-5 text-white" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-gray-900">3</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sub-nav Categories */}
      <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-3 min-w-max">
            {[
              { icon: Monitor, label: 'Laptops' },
              { icon: Smartphone, label: 'Phones' },
              { icon: Headphones, label: 'Audio' },
              { icon: Watch, label: 'Wearables' },
              { icon: Menu, label: 'All Categories' }
            ].map((item, idx) => (
              <button key={idx} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium group">
                <item.icon className="w-4 h-4 group-hover:text-blue-400" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 h-auto md:h-[500px]">
          {/* Main Hero */}
          <div className="md:col-span-2 bg-gradient-to-br from-blue-900 to-gray-900 rounded-2xl overflow-hidden relative group border border-gray-700">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
            <div className="relative z-10 p-10 h-full flex flex-col justify-center items-start">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">PREMIUM</span>
              <h1 className="text-5xl font-bold mb-4 text-white leading-tight">Next Gen <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Virtual Reality</span></h1>
              <p className="text-gray-300 mb-8 max-w-md">Immerse yourself in new worlds with the latest VR technology. Ultra-low latency and 8K resolution.</p>
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>

          {/* Side Heroes */}
          <div className="flex flex-col gap-6">
            <div className="flex-1 bg-gray-800 rounded-2xl p-6 relative overflow-hidden group border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Pro Gaming</h3>
                <p className="text-sm text-gray-400 mb-4">Peripherals for champions</p>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-bold flex items-center gap-1">View Collection <ChevronRight size={14}/></a>
              </div>
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80" className="absolute right-0 bottom-0 w-32 md:w-40 opacity-80 group-hover:scale-110 transition-transform" alt="Gaming" />
            </div>
            <div className="flex-1 bg-gray-800 rounded-2xl p-6 relative overflow-hidden group border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Smart Home</h3>
                <p className="text-sm text-gray-400 mb-4">Automate your life</p>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-bold flex items-center gap-1">View Collection <ChevronRight size={14}/></a>
              </div>
              <img src="https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=500&q=80" className="absolute right-0 bottom-0 w-32 md:w-40 opacity-80 group-hover:scale-110 transition-transform" alt="Smart Home" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Trending Products</h2>
          <button className="flex items-center gap-2 text-gray-400 hover:text-white text-sm bg-gray-800 px-4 py-2 rounded-lg">
            <Filter size={16} /> Filter <ChevronDown size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-blue-500/50 transition-all group">
              <div className="relative bg-gray-700/50 rounded-lg p-4 mb-4 aspect-square flex items-center justify-center">
                <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded">IN STOCK</span>
                <img 
                  src={`https://images.unsplash.com/photo-${item % 4 === 0 ? '1505740420928-5e560c06d30e' : item % 4 === 1 ? '1572569028738-411a500bd43f' : item % 4 === 2 ? '1546868871-7041f2a55e12' : '1526170375885-4d8ecf77b99f'}?auto=format&fit=crop&w=400&q=80`}
                  alt="Product" 
                  className="max-h-full max-w-full object-contain mix-blend-normal group-hover:scale-110 transition-transform duration-300"
                />
                <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-700">
                  <ShoppingCart size={18} />
                </button>
              </div>
              
              <div className="space-y-2">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} className="text-yellow-500 fill-current" />)}
                  <span className="text-xs text-gray-500 ml-1">(42)</span>
                </div>
                <h3 className="font-semibold text-lg leading-tight truncate">Ultra HD Wireless Headphones Noise Cancelling</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 text-xs line-through block">$299.99</span>
                    <span className="text-xl font-bold text-white">$249.99</span>
                  </div>
                  <div className="text-xs text-blue-400 font-medium bg-blue-500/10 px-2 py-1 rounded">
                    Save $50
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Specs / Features Banner */}
      <section className="bg-blue-600 text-white py-16 mt-8">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white/20 p-3 rounded-xl mb-4"><Zap className="w-6 h-6" /></div>
            <h4 className="font-bold text-lg mb-2">Fast Delivery</h4>
            <p className="text-blue-100 text-sm">Same day dispatch on orders before 2pm</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white/20 p-3 rounded-xl mb-4"><Monitor className="w-6 h-6" /></div>
            <h4 className="font-bold text-lg mb-2">Official Dealer</h4>
            <p className="text-blue-100 text-sm">Authorized retailer for top tech brands</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white/20 p-3 rounded-xl mb-4"><Headphones className="w-6 h-6" /></div>
            <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
            <p className="text-blue-100 text-sm">Expert technical support whenever you need it</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white/20 p-3 rounded-xl mb-4"><Shield className="w-6 h-6" /></div>
            <h4 className="font-bold text-lg mb-2">Extended Warranty</h4>
            <p className="text-blue-100 text-sm">Up to 3 years protection on all devices</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Missing icon component for the banner
const Shield = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

export default EcommerceDesign8;
