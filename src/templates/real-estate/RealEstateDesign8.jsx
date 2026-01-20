import React, { useState } from 'react';
import { Sparkles, Key, Map, Heart, Instagram, Facebook, Twitter, ArrowRight, Quote } from 'lucide-react';

function RealEstateDesign8() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-serif text-[#2C3E50]">
      {/* Decorative Border */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4A373] to-[#E6B89C] z-50"></div>

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-sm py-6">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="font-serif italic text-2xl font-bold tracking-tighter">
            The<span className="text-[#D4A373]">Collection</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12 font-sans text-xs font-bold tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-[#D4A373] transition-colors relative group">
              Buying
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#D4A373] transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-[#D4A373] transition-colors relative group">
              Selling
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#D4A373] transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-[#D4A373] transition-colors relative group">
              Stories
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#D4A373] transition-all group-hover:w-full"></span>
            </a>
          </div>

          <button className="font-sans text-xs font-bold uppercase tracking-widest border border-[#2C3E50] px-6 py-3 hover:bg-[#2C3E50] hover:text-[#FDFBF7] transition-all">
            Let's Chat
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-end gap-12">
            <div className="lg:w-2/5">
              <div className="font-sans text-xs font-bold text-[#D4A373] uppercase tracking-[0.2em] mb-6">Boutique Real Estate Agency</div>
              <h1 className="text-6xl md:text-8xl leading-[0.9] mb-8 font-light">
                Homes <br/> with <br/> <span className="italic font-bold text-[#D4A373]">Soul.</span>
              </h1>
              <p className="font-sans text-gray-500 leading-relaxed mb-10 max-w-sm">
                We believe a home is more than just walls. It's a feeling. We curate properties with character, history, and heart.
              </p>
              <div className="flex items-center space-x-4">
                 <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4A373] p-1">
                   <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Agent" className="w-full h-full rounded-full object-cover" />
                 </div>
                 <div className="font-sans text-xs">
                   <div className="font-bold">Sarah Jenkins</div>
                   <div className="text-gray-400">Founder & Principal</div>
                 </div>
              </div>
            </div>
            <div className="lg:w-3/5 relative">
              <div className="absolute top-10 -right-10 w-2/3 h-full border border-[#D4A373] rounded-t-full -z-10 hidden lg:block"></div>
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Bohemian Interior" 
                className="w-full h-[600px] object-cover rounded-t-full shadow-2xl"
              />
              <div className="absolute bottom-10 -left-10 bg-white p-8 shadow-xl max-w-xs hidden md:block">
                 <Quote className="w-8 h-8 text-[#D4A373] mb-4 opacity-50" />
                 <p className="font-sans text-sm italic text-gray-600 mb-4">
                   "Sarah found us a gem that wasn't even on the market. She truly understands unique spaces."
                 </p>
                 <div className="font-sans text-xs font-bold uppercase tracking-wider text-[#D4A373]">— The Millers</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Properties */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <Sparkles className="w-6 h-6 text-[#D4A373] mb-4" />
            <h2 className="text-4xl font-light mb-4">Current Curation</h2>
            <div className="w-12 h-0.5 bg-[#2C3E50]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Property" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 font-sans text-xs font-bold uppercase tracking-widest">
                  Just Listed
                </div>
              </div>
              <div className="text-center">
                <div className="font-sans text-xs font-bold text-[#D4A373] uppercase tracking-widest mb-2">Mid-Century Modern</div>
                <h3 className="text-3xl font-light mb-2 group-hover:italic transition-all">The Palm Springs Oasis</h3>
                <p className="font-sans text-gray-500 mb-4">$1,250,000</p>
                <button className="font-sans text-xs font-bold uppercase border-b border-[#2C3E50] pb-1 hover:text-[#D4A373] hover:border-[#D4A373] transition-colors">
                  View Details
                </button>
              </div>
            </div>

            <div className="group cursor-pointer md:mt-24">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Property" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="text-center">
                <div className="font-sans text-xs font-bold text-[#D4A373] uppercase tracking-widest mb-2">Historic Victorian</div>
                <h3 className="text-3xl font-light mb-2 group-hover:italic transition-all">The Painted Lady</h3>
                <p className="font-sans text-gray-500 mb-4">$985,000</p>
                <button className="font-sans text-xs font-bold uppercase border-b border-[#2C3E50] pb-1 hover:text-[#D4A373] hover:border-[#D4A373] transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[#E6B89C]/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="w-full h-64 object-cover rounded-tr-[4rem]" />
                   <img src="https://images.unsplash.com/photo-1556912173-3db9963ee790?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="w-full h-64 object-cover rounded-bl-[4rem] mt-8" />
                </div>
             </div>
             <div className="order-1 md:order-2">
               <h2 className="text-4xl font-light mb-6">Not Your Average Agency</h2>
               <p className="font-sans text-gray-600 leading-loose mb-8">
                 We steer clear of cookie-cutter. We look for the light, the lines, and the layout that makes a house a home. Whether you're a first-time buyer with a vision or a seller with a unique property, we speak your language.
               </p>
               <div className="grid grid-cols-2 gap-8 font-sans text-sm">
                  <div className="flex items-center">
                    <Key className="w-5 h-5 text-[#D4A373] mr-3" />
                    <span>Personalized Service</span>
                  </div>
                  <div className="flex items-center">
                    <Map className="w-5 h-5 text-[#D4A373] mr-3" />
                    <span>Neighborhood Experts</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-[#D4A373] mr-3" />
                    <span>Passion for Design</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#D4A373] mr-3" />
                    <span>Seamless Process</span>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed / CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Follow Along</div>
          <h2 className="text-3xl font-light mb-12 flex items-center justify-center">
            @TheCollection <Instagram className="w-6 h-6 ml-3 text-[#D4A373]" />
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <img src="https://images.unsplash.com/photo-1484154218962-a1c002085d2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" className="aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" className="aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" className="aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1513584685908-95c9e2d013e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" className="aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer" />
          </div>

          <div className="bg-[#2C3E50] text-[#FDFBF7] p-16 rounded-[3rem] relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to find your match?</h2>
               <p className="font-sans text-gray-400 mb-8 max-w-lg mx-auto">
                 Let's grab a coffee and discuss your real estate dreams. No pressure, just good conversation.
               </p>
               <button className="bg-[#D4A373] text-white px-10 py-4 font-sans font-bold uppercase tracking-widest hover:bg-[#c28e5d] transition-colors rounded-full">
                 Schedule Coffee
               </button>
             </div>
             {/* Abstract circles */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4A373]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center font-sans text-xs font-bold uppercase tracking-widest text-gray-400">
           <div className="mb-4 md:mb-0">
             © 2024 The Collection Agency.
           </div>
           <div className="flex space-x-6">
             <a href="#" className="hover:text-[#2C3E50]">Facebook</a>
             <a href="#" className="hover:text-[#2C3E50]">Pinterest</a>
             <a href="#" className="hover:text-[#2C3E50]">Email</a>
           </div>
        </div>
      </footer>
    </div>
  );
}

export default RealEstateDesign8;