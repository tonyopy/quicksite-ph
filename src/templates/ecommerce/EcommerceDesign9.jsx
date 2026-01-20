import React from 'react';
import { Search, ShoppingBag, Menu, Heart, Leaf, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

const EcommerceDesign9 = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#4A4A4A]">
      {/* Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Sidebar / Navigation */}
      <nav className="fixed left-0 top-0 h-full w-20 md:w-24 bg-white border-r border-[#EAE5D9] hidden lg:flex flex-col justify-between items-center py-8 z-50">
        <div className="transform -rotate-90 origin-center translate-y-8 mt-12">
          <span className="font-bold text-2xl tracking-widest text-[#8B5E3C]">CRAFTED</span>
        </div>
        
        <div className="flex flex-col gap-8">
          <button className="p-3 hover:bg-[#F5F2EB] rounded-full transition-colors"><Search size={20} /></button>
          <button className="p-3 hover:bg-[#F5F2EB] rounded-full transition-colors relative">
            <Heart size={20} />
          </button>
          <button className="p-3 hover:bg-[#F5F2EB] rounded-full transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#D97757] rounded-full"></span>
          </button>
        </div>

        <div className="flex flex-col gap-6 text-[#D97757]">
          <Instagram size={20} className="cursor-pointer hover:text-[#8B5E3C] transition-colors" />
          <Facebook size={20} className="cursor-pointer hover:text-[#8B5E3C] transition-colors" />
          <Twitter size={20} className="cursor-pointer hover:text-[#8B5E3C] transition-colors" />
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="lg:hidden flex justify-between items-center p-6 border-b border-[#EAE5D9] bg-white relative z-50">
        <Menu size={24} />
        <span className="font-bold text-xl tracking-widest text-[#8B5E3C]">CRAFTED</span>
        <ShoppingBag size={24} />
      </div>

      <div className="lg:pl-24">
        {/* Hero */}
        <header className="grid md:grid-cols-2 min-h-[90vh]">
          <div className="p-12 md:p-24 flex flex-col justify-center items-start relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#F5F2EB] rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>
            
            <span className="text-[#D97757] font-medium tracking-widest mb-4 flex items-center gap-2">
              <Leaf size={16} /> 100% HANDMADE
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#2C2C2C] mb-8 leading-[1.1]">
              Artistry in <br/>
              <span className="relative inline-block">
                Every Stitch
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#D97757] fill-current opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-md leading-relaxed">
              Discover unique, handcrafted ceramics, textiles, and home decor made by independent artisans from around the world.
            </p>
            <button className="group flex items-center gap-4 bg-[#2C2C2C] text-white px-8 py-4 rounded-full hover:bg-[#D97757] transition-all duration-300">
              Shop Collection <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative h-[50vh] md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=1000&q=80" 
              alt="Handmade Ceramics" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#8B5E3C] mix-blend-multiply opacity-10"></div>
          </div>
        </header>

        {/* Featured Categories - Mosaic */}
        <section className="py-24 px-8 md:px-16">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif mb-2">Curated Finds</h2>
              <p className="text-gray-500">Explore our most popular categories</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-[#D97757] font-medium hover:gap-4 transition-all">View All Categories <ArrowRight size={16} /></a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px] md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl cursor-pointer">
              <img src="https://images.unsplash.com/photo-1596238618338-958597304190?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Ceramics" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-serif">Ceramics & Pottery</h3>
                  <p className="text-white/80 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Mugs, Vases, Plates</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
              <img src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Textiles" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-xl font-serif text-white">Textiles</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
              <img src="https://images.unsplash.com/photo-1605333555219-c0c5218d6c77?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Woodwork" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-xl font-serif text-white">Woodwork</h3>
              </div>
            </div>

            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl cursor-pointer">
              <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Beauty" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-serif">Natural Beauty</h3>
                  <p className="text-white/80 text-sm mt-1">Soaps, Oils, Scrubs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Carousel / List */}
        <section className="bg-[#F5F2EB] py-24 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-16">Fresh from the Studio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <img 
                      src={`https://images.unsplash.com/photo-${item === 1 ? '1610701596007-11502861dcfa' : item === 2 ? '1616486968818-bd2588d9c1b2' : item === 3 ? '1576426863863-13b984063831' : '1583847268964-b28dc8f51f92'}?auto=format&fit=crop&w=400&q=80`}
                      alt="Product" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="bg-white p-2 rounded-full shadow-sm hover:text-[#D97757] transition-colors"><Heart size={16} /></button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button className="w-full bg-[#2C2C2C] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#D97757] transition-colors">Add to Cart</button>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-[#8B5E3C] uppercase tracking-wider mb-1">Ceramics</p>
                    <h3 className="font-serif text-lg mb-2">Hand-thrown Clay Vase</h3>
                    <span className="font-medium text-[#D97757]">$45.00</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Artisan Story */}
        <section className="py-24 px-8 md:px-16">
          <div className="bg-[#2C2C2C] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D97757] rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
               <div>
                 <h2 className="text-4xl font-serif mb-6">Meet the Maker</h2>
                 <p className="text-gray-300 text-lg leading-relaxed mb-8">
                   "I believe that the objects we use every day should bring joy and beauty to our lives. Each piece I create is a reflection of the natural world that surrounds my studio."
                 </p>
                 <div className="flex items-center gap-4">
                   <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Artist" className="w-12 h-12 rounded-full object-cover border-2 border-[#D97757]" />
                   <div>
                     <h4 className="font-bold">Sarah Jenkins</h4>
                     <p className="text-sm text-gray-400">Ceramist, Portland OR</p>
                   </div>
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400&q=80" className="rounded-xl transform translate-y-8" alt="Studio" />
                 <img src="https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=400&q=80" className="rounded-xl" alt="Work" />
               </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EcommerceDesign9;
