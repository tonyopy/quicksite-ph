import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, ArrowRight, Star } from 'lucide-react';

const EcommerceDesign1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">MINIMAL.</div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Shop</a>
            <a href="#" className="hover:text-black transition-colors">Collections</a>
            <a href="#" className="hover:text-black transition-colors">About</a>
            <a href="#" className="hover:text-black transition-colors">Journal</a>
          </div>

          <div className="flex items-center space-x-6">
            <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-black transition-colors" />
            <div className="relative cursor-pointer">
              <ShoppingBag className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </div>
            <Menu className="md:hidden w-6 h-6" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 block">New Collection 2024</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Simplicity is the <br/> ultimate sophistication.
            </h1>
            <p className="text-gray-600 mb-8 max-w-md text-lg">
              Discover our latest collection of essential wear designed for the modern lifestyle. Sustainable, comfortable, and timeless.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center group">
              Shop Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80" 
                alt="Minimalist Fashion" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden lg:block max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full object-cover" alt="User" />
                <div>
                  <div className="text-sm font-bold">Sarah J.</div>
                  <div className="flex text-yellow-400 text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 italic">"The quality of the fabric is incredible. Definitely my new favorite brand for basics."</p>
            </div>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold">Trending Now</h2>
            <a href="#" className="text-sm font-semibold underline decoration-2 underline-offset-4 hover:text-gray-600">View All Products</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1521572163474-6864f9cf17ab' : item === 2 ? '1503341455253-b2e72333dbdb' : item === 3 ? '1525507119028-ed3c62bfd432' : '1523381210434-271e8be1f52b'}?auto=format&fit=crop&w=600&q=80`}
                    alt="Product" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="font-semibold text-lg mb-1">Essential Cotton Tee</h3>
                <p className="text-gray-500 text-sm mb-2">Organic Cotton</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">$29.00</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-black border border-gray-200"></div>
                    <div className="w-3 h-3 rounded-full bg-white border border-gray-200"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-400 border border-gray-200"></div>
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

export default EcommerceDesign1;
