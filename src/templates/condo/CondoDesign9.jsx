import React, { useState } from 'react';
import { Calendar, Feather, Sun, Moon, Cloud, Heart, Music, Camera, Coffee, MapPin } from 'lucide-react';

function CondoDesign9() {
  const [bookingDate, setBookingDate] = useState('');

  return (
    <div className="min-h-screen bg-[#FDF6E3] font-sans text-stone-800">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#FDF6E3]/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif italic text-amber-800 flex items-center gap-2">
            <Feather className="w-6 h-6" />
            Boho<span className="font-sans font-light text-stone-600">Soul</span>
          </div>
          <button className="border-2 border-amber-800 text-amber-900 px-6 py-2 rounded-full font-medium hover:bg-amber-800 hover:text-white transition-colors duration-300">
            Book Your Stay
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="bg-[#E6D5B8] rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            {/* Organic Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4C5A9] rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9B390] rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <span className="text-amber-700 font-serif italic text-xl">Wild & Free</span>
                <h1 className="text-5xl md:text-7xl font-serif text-stone-800 leading-tight">
                  Where Spirit <br/> Meets <span className="text-amber-700">Comfort</span>
                </h1>
                <p className="text-lg text-stone-600 leading-relaxed max-w-md">
                  Earthy tones, rattan textures, and macrame details. A soulful retreat for the wandering heart.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Sun className="w-6 h-6 text-amber-500" />
                  </div>
                  <span className="text-stone-500 text-sm">Sun-drenched balcony</span>
                </div>
              </div>
              
              <div className="relative">
                 <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1522444195799-478538b28823?auto=format&fit=crop&w=1000&q=80" 
                      alt="Boho Interior" 
                      className="w-full h-full object-cover"
                    />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vibes Grid */}
      <section className="py-20 bg-[#FDF6E3]">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                  { icon: Coffee, label: "Slow Coffee", color: "bg-orange-100 text-orange-700" },
                  { icon: Music, label: "Vintage Vinyl", color: "bg-rose-100 text-rose-700" },
                  { icon: Cloud, label: "Soft Linens", color: "bg-blue-100 text-blue-700" },
                  { icon: Heart, label: "Good Vibes", color: "bg-red-100 text-red-700" },
               ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition text-center border border-[#E6D5B8]">
                     <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <item.icon className="w-6 h-6" />
                     </div>
                     <h3 className="font-serif text-xl text-stone-800">{item.label}</h3>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Booking Area */}
      <section className="py-24 px-6 bg-stone-100">
         <div className="container mx-auto max-w-lg text-center">
            <div className="bg-white p-10 rounded-[2rem] shadow-xl border-2 border-dashed border-stone-300 relative">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-6 py-2 rounded-full font-serif italic shadow-lg">
                  Stay With Us
               </div>
               
               <h2 className="text-3xl font-serif text-stone-800 mb-8 mt-4">Plan Your Escape</h2>
               
               <div className="space-y-6 text-left">
                  <div>
                     <label className="block text-stone-500 text-sm mb-2 font-medium">When are you arriving?</label>
                     <input 
                        type="date" 
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 outline-none focus:border-amber-400"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                     />
                  </div>
                  
                  <div className="pt-4 border-t border-stone-100 flex justify-between items-center">
                     <div>
                        <div className="text-2xl font-serif text-stone-800">₱2,900</div>
                        <div className="text-xs text-stone-400">per night</div>
                     </div>
                     <button className="bg-stone-800 text-white px-8 py-3 rounded-xl hover:bg-stone-700 transition shadow-lg">
                        Book Now
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <footer className="py-12 text-center bg-[#E6D5B8] text-stone-600">
         <div className="font-serif italic text-xl mb-2">BohoSoul</div>
         <p className="text-sm">Made with earth & heart.</p>
      </footer>
    </div>
  );
}

export default CondoDesign9;
