import React, { useState } from 'react';
import { Calendar, CheckCircle, MapPin, Coffee, Wifi, Tv, UserCheck, Star, ArrowRight, Shield, Heart } from 'lucide-react';

function CondoDesign1() {
  const [bookingDate, setBookingDate] = useState('');
  const [guests, setGuests] = useState('2');

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-rose-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-teal-700 tracking-tight">Azure<span className="text-rose-400">Stays</span></div>
          <div className="hidden md:flex space-x-10 font-medium text-stone-600">
            <a href="#home" className="hover:text-teal-600 transition duration-300">Home</a>
            <a href="#amenities" className="hover:text-teal-600 transition duration-300">Amenities</a>
            <a href="#reviews" className="hover:text-teal-600 transition duration-300">Reviews</a>
            <a href="#book" className="px-6 py-2.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300">Book Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-teal-50 via-rose-50 to-stone-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 bg-white border border-rose-100 text-rose-500 rounded-full text-sm font-medium shadow-sm">
              <Star className="w-4 h-4 fill-current mr-2" /> Verified Superhost • 4.98 Rating
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight text-stone-800">
              Sanctuary in the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">City Heart</span>
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
              Experience a calming retreat in Makati. Minimalist interiors, lush balcony views, and hotel-grade amenities.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#book" className="px-10 py-4 bg-teal-600 text-white rounded-full font-semibold text-lg text-center hover:bg-teal-700 transition shadow-lg hover:shadow-teal-200/50">
                Check Availability
              </a>
              <a href="#amenities" className="px-10 py-4 bg-white text-stone-600 border border-stone-200 rounded-full font-semibold text-lg text-center hover:bg-stone-50 transition shadow-sm hover:shadow-md">
                View Gallery
              </a>
            </div>
            <div className="flex items-center gap-8 pt-4 text-sm text-stone-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80" 
                alt="Minimalist Condo Interior" 
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-50 -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50 -z-0"></div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur p-5 rounded-2xl shadow-xl border border-white z-20 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-rose-500 fill-rose-500" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-stone-400 font-bold">Guest Favorite</div>
                  <div className="font-serif font-bold text-stone-800 text-lg">"Absolutely dreamy!"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section id="amenities" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-rose-400 font-bold tracking-wider text-sm uppercase">Comforts & Luxuries</span>
            <h2 className="text-4xl font-serif font-bold mt-3 mb-6 text-stone-800">Curated for Your Comfort</h2>
            <p className="text-stone-500 text-lg">Every detail has been thoughtfully selected to ensure your stay is effortless and restorative.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Wifi, label: "High-Speed WiFi", desc: "300Mbps Fiber", color: "bg-blue-50 text-blue-500" },
              { icon: Tv, label: "Entertainment", desc: "Netflix & Disney+", color: "bg-purple-50 text-purple-500" },
              { icon: Coffee, label: "Coffee Corner", desc: "Nespresso Machine", color: "bg-amber-50 text-amber-600" },
              { icon: UserCheck, label: "24/7 Concierge", desc: "Secure Building", color: "bg-slate-50 text-slate-600" },
              { icon: MapPin, label: "Prime Spot", desc: "Walk to Greenbelt", color: "bg-emerald-50 text-emerald-500" },
              { icon: Star, label: "Sky Pool", desc: "Panoramic Views", color: "bg-cyan-50 text-cyan-500" },
              { icon: Shield, label: "Sparkling Clean", desc: "Pro Sanitized", color: "bg-teal-50 text-teal-500" },
              { icon: Calendar, label: "Easy Check-in", desc: "Digital Keypad", color: "bg-rose-50 text-rose-500" }
            ].map((item, index) => (
              <div key={index} className="group p-8 bg-stone-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-stone-100">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-stone-800 mb-2">{item.label}</h3>
                <p className="text-sm text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automated Booking Section */}
      <section id="book" className="py-24 bg-teal-900 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-300 font-bold tracking-wider text-sm uppercase">Reserve Your Dates</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mt-3 mb-8">Ready for your getaway?</h2>
              <p className="text-teal-100 text-xl mb-10 leading-relaxed">
                Skip the back-and-forth. Our calendar is always up to date. Secure your reservation instantly with just a few clicks.
              </p>
              <ul className="space-y-6">
                {[
                  "No hidden booking fees",
                  "Instant confirmation email",
                  "Secure payments via GCash or Card",
                  "Digital guidebook sent upon booking"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg">
                    <div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-teal-300" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock Booking Widget */}
            <div className="bg-white rounded-[2rem] p-8 shadow-2xl text-stone-800 max-w-md mx-auto w-full">
              <div className="flex justify-between items-end mb-8 border-b border-stone-100 pb-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-stone-800">₱2,500</h3>
                  <span className="text-stone-500 text-sm">night</span>
                </div>
                <div className="flex items-center text-sm font-bold text-stone-800">
                  <Star className="w-4 h-4 text-rose-500 fill-rose-500 mr-1" /> 4.98
                  <span className="text-stone-400 font-normal ml-1">(128 reviews)</span>
                </div>
              </div>
              
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 focus-within:ring-2 focus-within:ring-teal-500 transition">
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Check-in</label>
                    <input 
                      type="date" 
                      className="w-full bg-transparent outline-none font-semibold text-stone-800"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                    />
                  </div>
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 focus-within:ring-2 focus-within:ring-teal-500 transition">
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Guests</label>
                    <select 
                      className="w-full bg-transparent outline-none font-semibold text-stone-800"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <div className="flex justify-between text-stone-600">
                    <span>₱2,500 x 1 night</span>
                    <span>₱2,500</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Cleaning Fee</span>
                    <span>₱500</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Service Fee</span>
                    <span>₱0</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl pt-4 border-t border-stone-100 mt-4">
                    <span>Total</span>
                    <span>₱3,000</span>
                  </div>
                </div>

                <button className="w-full py-5 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-2xl font-bold text-lg hover:from-rose-500 hover:to-rose-600 transition shadow-lg hover:shadow-rose-200 flex items-center justify-center gap-2 group">
                  Reserve Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <p className="text-xs text-center text-stone-400 mt-4">You won't be charged yet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 text-stone-500 py-12 border-t border-stone-200">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-serif font-bold text-teal-800 mb-4">Azure<span className="text-rose-400">Stays</span></div>
          <div className="flex justify-center space-x-6 mb-8 text-sm font-medium">
            <a href="#" className="hover:text-teal-600 transition">About Us</a>
            <a href="#" className="hover:text-teal-600 transition">House Rules</a>
            <a href="#" className="hover:text-teal-600 transition">Contact</a>
            <a href="#" className="hover:text-teal-600 transition">Privacy</a>
          </div>
          <p className="text-sm">© 2025 AzureStays. Crafted with ♥ by QuickSite PH</p>
        </div>
      </footer>
    </div>
  );
}

export default CondoDesign1;
