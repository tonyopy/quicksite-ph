import React from 'react';
import { Search, ShoppingCart, Leaf, User, ArrowRight, Sprout } from 'lucide-react';

const EcommerceDesign4 = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-stone-50/90 backdrop-blur border-b border-stone-200">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-green-800">
            <Leaf className="fill-current" /> PureEarth
          </div>
          
          <div className="hidden md:flex space-x-8 font-medium text-stone-600">
            <a href="#" className="hover:text-green-700 transition-colors">Shop All</a>
            <a href="#" className="hover:text-green-700 transition-colors">Our Story</a>
            <a href="#" className="hover:text-green-700 transition-colors">Ingredients</a>
            <a href="#" className="hover:text-green-700 transition-colors">Sustainability</a>
          </div>

          <div className="flex items-center space-x-6">
            <Search className="w-5 h-5 text-stone-600 cursor-pointer hover:text-green-700 transition-colors" />
            <User className="w-5 h-5 text-stone-600 cursor-pointer hover:text-green-700 transition-colors" />
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-stone-600 hover:text-green-700 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full border-2 border-stone-50">1</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="bg-[#e7ece3] rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full blur-[80px] opacity-60 translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-green-800 text-sm font-bold shadow-sm">
                  <Sprout className="w-4 h-4" /> 100% Organic Ingredients
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight">
                  Skincare that loves <br/> <span className="text-green-700">your skin & the planet.</span>
                </h1>
                <p className="text-stone-600 text-lg max-w-md">
                  Experience the power of nature with our ethically sourced, cruelty-free, and vegan skincare line.
                </p>
                <div className="flex gap-4 pt-4">
                  <button className="bg-green-800 text-white px-8 py-4 rounded-full font-bold hover:bg-green-900 transition-colors shadow-lg shadow-green-900/20">
                    Shop Bestsellers
                  </button>
                  <button className="bg-white text-stone-800 px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition-colors flex items-center gap-2">
                    Take Quiz <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="relative flex justify-center">
                 <img 
                  src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80" 
                  alt="Organic Products" 
                  className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 max-w-xs md:max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { title: "Cruelty Free", icon: "🐰" },
              { title: "Vegan Friendly", icon: "🌱" },
              { title: "Recyclable", icon: "♻️" },
              { title: "Non-Toxic", icon: "✨" }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-stone-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Nature's Best</h2>
            <p className="text-stone-600">Hand-picked essentials for your daily routine.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-xl transition-shadow group">
                <div className="bg-[#f0f4ee] rounded-2xl h-64 mb-6 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1608248597279-f99d160bfbc8' : item === 2 ? '1598440947619-2c35fc9af908' : '1620916566398-39f1143ab7be'}?auto=format&fit=crop&w=500&q=80`}
                    alt="Product" 
                    className="h-48 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute bottom-4 right-4 bg-green-800 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
                <div className="px-2">
                  <div className="text-green-700 text-xs font-bold uppercase tracking-wider mb-1">Face Care</div>
                  <h3 className="font-bold text-xl text-stone-900 mb-2">Hydrating Serum</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-900 font-bold">$34.00</span>
                    <div className="flex gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-stone-500">4.9 (120)</span>
                    </div>
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

export default EcommerceDesign4;
