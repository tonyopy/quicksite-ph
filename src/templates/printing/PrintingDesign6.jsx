import React, { useState } from 'react';
import { Shirt, ShoppingBag, Tag, Heart, Palette, User, Star } from 'lucide-react';

function PrintingDesign6() {
  const [selectedColor, setSelectedColor] = useState('black');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-black tracking-tight flex items-center gap-2">
               <Shirt className="w-8 h-8" />
               MERCH<span className="text-gray-400">LAB</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider text-gray-500">
               <a href="#" className="hover:text-black">Men</a>
               <a href="#" className="hover:text-black">Women</a>
               <a href="#" className="hover:text-black">Accessories</a>
               <a href="#" className="hover:text-black text-red-500">Sale</a>
            </div>
            <div className="flex gap-4">
               <ShoppingBag className="w-6 h-6 hover:text-gray-600 cursor-pointer" />
            </div>
         </div>
      </nav>

      {/* Hero / Product Focus */}
      <section className="pt-32 pb-20 px-6 bg-gray-50">
         <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative bg-white rounded-3xl p-12 shadow-sm">
               <div className="absolute top-6 left-6 bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Best Seller</div>
               <img 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80" 
                  alt="T-Shirt Mockup" 
                  className="w-full h-[500px] object-contain mix-blend-multiply"
               />
            </div>

            {/* Content Side */}
            <div>
               <h1 className="text-5xl font-black mb-4 leading-none">PREMIUM <br/> COTTON TEE</h1>
               <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-gray-900">$24.00</span>
                  <div className="flex text-yellow-400 text-sm">
                     <Star className="w-4 h-4 fill-current" />
                     <Star className="w-4 h-4 fill-current" />
                     <Star className="w-4 h-4 fill-current" />
                     <Star className="w-4 h-4 fill-current" />
                     <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-sm text-gray-400">(128 reviews)</span>
               </div>
               
               <p className="text-gray-600 mb-8 leading-relaxed">
                  Heavyweight 100% cotton. Boxy fit. Direct-to-garment printing for vibrant, long-lasting colors. Upload your art or choose from our library.
               </p>

               <div className="mb-8">
                  <span className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Select Color</span>
                  <div className="flex gap-3">
                     {['black', 'white', 'navy', 'heather'].map((color) => (
                        <button 
                           key={color}
                           onClick={() => setSelectedColor(color)}
                           className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? 'border-black scale-110' : 'border-transparent'} shadow-sm transition-all`}
                           style={{ backgroundColor: color === 'heather' ? '#9ca3af' : color }}
                        />
                     ))}
                  </div>
               </div>

               <div className="flex gap-4">
                  <button className="flex-1 bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg">
                     Customize Now
                  </button>
                  <button className="px-6 py-4 border-2 border-gray-200 rounded-xl hover:border-black transition">
                     <Heart className="w-6 h-6" />
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { title: "Hoodies", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80" },
                  { title: "Totes", img: "https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=800&q=80" },
                  { title: "Hats", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80" },
               ].map((item, i) => (
                  <div key={i} className="group relative h-96 overflow-hidden rounded-2xl cursor-pointer">
                     <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <h3 className="text-3xl font-black text-white uppercase">{item.title}</h3>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <footer className="py-12 border-t border-gray-100 text-center text-sm text-gray-400">
         <p>© 2025 MerchLab. Wear your brand.</p>
      </footer>
    </div>
  );
}

export default PrintingDesign6;
