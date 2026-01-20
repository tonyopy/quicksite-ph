import React from 'react';
import { Search, ShoppingBag, Menu, Heart, Diamond, Star, ChevronRight } from 'lucide-react';

const EcommerceDesign7 = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-serif text-gray-800">
      {/* Top Bar */}
      <div className="bg-neutral-900 text-white text-center py-3 text-xs tracking-[0.2em] uppercase">
        Complimentary Shipping on Global Orders Over $500
      </div>

      {/* Navigation */}
      <nav className="px-8 py-6 border-b border-gray-200 bg-white sticky top-0 z-50 opacity-95">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Menu className="w-6 h-6 cursor-pointer hover:text-gray-600 transition-colors" strokeWidth={1} />
            <Search className="w-6 h-6 cursor-pointer hover:text-gray-600 transition-colors" strokeWidth={1} />
          </div>

          <div className="text-3xl tracking-[0.3em] font-light text-center absolute left-1/2 -translate-x-1/2">
            LUMIÈRE
          </div>

          <div className="flex items-center gap-8">
            <Heart className="w-6 h-6 cursor-pointer hover:text-gray-600 transition-colors" strokeWidth={1} />
            <div className="relative cursor-pointer group">
              <ShoppingBag className="w-6 h-6 group-hover:text-gray-600 transition-colors" strokeWidth={1} />
              <span className="absolute -top-2 -right-2 bg-neutral-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Jewelry" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 text-center text-white p-12 max-w-3xl">
          <h2 className="text-sm tracking-[0.4em] uppercase mb-6 opacity-90">The Eternal Collection</h2>
          <h1 className="text-6xl md:text-7xl font-light mb-10 leading-tight">
            Timeless Elegance <br/> <span className="italic font-serif">Reimagined</span>
          </h1>
          <button className="bg-white text-neutral-900 px-12 py-4 uppercase tracking-[0.2em] text-xs hover:bg-neutral-200 transition-colors duration-300">
            View Collection
          </button>
        </div>
      </header>

      {/* Categories */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {['Necklaces', 'Earrings', 'Rings'].map((cat, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[4/5] mb-6 relative">
                <img 
                  src={`https://images.unsplash.com/photo-${idx === 0 ? '1599643478518-17488fbbcd75' : idx === 1 ? '1535632066927-ab7c9ab60908' : '1605100804763-eb2fc645a45c'}?auto=format&fit=crop&w=800&q=80`}
                  alt={cat}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <h3 className="text-xl tracking-[0.2em] uppercase text-center group-hover:text-gray-600 transition-colors">{cat}</h3>
              <div className="w-0 h-[1px] bg-gray-400 mx-auto mt-4 group-hover:w-12 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Product */}
      <section className="bg-neutral-100 py-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">Exquisite Craftsmanship</h3>
            <h2 className="text-4xl font-light mb-8">The Diamond Solitaire</h2>
            <p className="text-gray-600 leading-relaxed mb-8 font-sans font-light">
              Hand-selected for exceptional clarity and brilliance, our ethically sourced diamonds are set in 18k gold by master artisans. A symbol of enduring love that transcends generations.
            </p>
            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <Diamond className="w-8 h-8 mx-auto mb-2 text-gray-400" strokeWidth={1} />
                <span className="text-xs uppercase tracking-wider">Conflict Free</span>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 mx-auto mb-2 text-gray-400" strokeWidth={1} />
                <span className="text-xs uppercase tracking-wider">Lifetime Warranty</span>
              </div>
            </div>
            <button className="border border-neutral-900 px-10 py-3 uppercase tracking-[0.2em] text-xs hover:bg-neutral-900 hover:text-white transition-all duration-300">
              Discover More
            </button>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-gray-300 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=80" 
              alt="Diamond Ring" 
              className="relative z-10 w-full shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-8 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-light mb-4">Join the Inner Circle</h2>
          <p className="text-gray-500 font-sans mb-8">Receive early access to new collections and exclusive events.</p>
          <div className="flex border-b border-gray-300 pb-2">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 bg-transparent border-none outline-none font-sans placeholder-gray-400"
            />
            <button className="text-xs uppercase tracking-[0.2em] hover:text-gray-600">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl tracking-[0.3em] font-light mb-6">LUMIÈRE</div>
            <p className="text-gray-400 text-sm font-sans leading-relaxed max-w-xs">
              Defining luxury through sustainable practices and uncompromising quality since 1985.
            </p>
          </div>
          <div>
            <h4 className="uppercase tracking-[0.2em] text-xs mb-6 text-gray-400">Client Care</h4>
            <ul className="space-y-4 text-sm font-sans text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Shipping & Returns</li>
              <li className="hover:text-white cursor-pointer transition-colors">Size Guide</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="uppercase tracking-[0.2em] text-xs mb-6 text-gray-400">Follow Us</h4>
            <ul className="space-y-4 text-sm font-sans text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pinterest</li>
              <li className="hover:text-white cursor-pointer transition-colors">Facebook</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommerceDesign7;
