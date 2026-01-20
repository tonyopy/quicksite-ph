import React, { useState } from 'react';
import { Menu, X, Wifi, Coffee, MapPin, Tv, Home, Phone, Star, Key, Utensils, Clock } from 'lucide-react';

const TransientDesign1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-indigo-600" />
              <div className="font-bold text-xl tracking-tight text-gray-900">
                CozyStay<span className="text-indigo-600">Tagaytay</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Home</a>
              <a href="#units" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Units</a>
              <a href="#amenities" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Amenities</a>
              <a href="#rules" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">House Rules</a>
              <a href="#location" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Location</a>
              <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-lg font-medium text-gray-800" onClick={toggleMenu}>Home</a>
              <a href="#units" className="block text-lg font-medium text-gray-800" onClick={toggleMenu}>Units</a>
              <a href="#amenities" className="block text-lg font-medium text-gray-800" onClick={toggleMenu}>Amenities</a>
              <a href="#rules" className="block text-lg font-medium text-gray-800" onClick={toggleMenu}>House Rules</a>
              <a href="#location" className="block text-lg font-medium text-gray-800" onClick={toggleMenu}>Location</a>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold mt-4">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 md:pt-32 md:pb-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-indigo-700" />
              Superhost Verified
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Home Away From Home in <span className="text-indigo-600">Tagaytay</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience the cool breeze and cozy vibes. Perfect for family staycations, barkada outings, and romantic getaways. Just 5 mins from Rotonda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 text-center">
                Check Availability
              </button>
              <button className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all text-center">
                View Gallery
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Wifi className="w-5 h-5 text-indigo-600" />
                Free Fiber WiFi
              </div>
              <div className="flex items-center gap-2">
                <Tv className="w-5 h-5 text-indigo-600" />
                Netflix Ready
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-indigo-600" />
                Free Breakfast
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="Cozy Condo Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">
                  4.9
                </div>
                <div>
                  <div className="font-bold text-gray-900">Guest Favorite</div>
                  <div className="text-sm text-gray-500">Based on 150+ reviews</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">"The place was super clean and the host was very responsive. Will definitely book again!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Units Section */}
      <section id="units" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Stay</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Clean, comfortable, and complete with everything you need.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Unit 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="Studio Unit" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-indigo-600">
                  ₱2,500 / night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Studio Deluxe</h3>
                <p className="text-gray-500 text-sm mb-4">Good for couples or small families (2-4 pax)</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">1 Queen Bed</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Balcony</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Kitchen</span>
                </div>
                <button className="w-full py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Unit 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="1 Bedroom Unit" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-indigo-600">
                  ₱3,500 / night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">1 Bedroom Suite</h3>
                <p className="text-gray-500 text-sm mb-4">More space for barkadas (4-6 pax)</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">2 Queen Beds</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Netflix 55"</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Dining Area</span>
                </div>
                <button className="w-full py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>

             {/* Unit 3 */}
             <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="Loft Unit" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-indigo-600">
                  ₱4,500 / night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Family Loft</h3>
                <p className="text-gray-500 text-sm mb-4">The ultimate family bonding space (6-10 pax)</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">3 Double Beds</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">2 Bathrooms</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Videoke</span>
                </div>
                <button className="w-full py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* House Rules & Amenities */}
      <section id="rules" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Inside?</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                  <Wifi className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">High-Speed Wifi</h4>
                  <p className="text-sm text-gray-500">100Mbps Fiber connection</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Full Kitchen</h4>
                  <p className="text-sm text-gray-500">Cook your own meals</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                  <Tv className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Smart TV</h4>
                  <p className="text-sm text-gray-500">Netflix & YouTube Premium</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Coffee Bar</h4>
                  <p className="text-sm text-gray-500">Free brewed coffee</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Key className="w-5 h-5 text-indigo-600" />
              Important House Rules
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600">
                <Clock className="w-5 h-5 text-gray-400" />
                <span>Check-in: <strong>2:00 PM</strong> | Check-out: <strong>12:00 NN</strong></span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span>Please turn off AC when leaving the unit.</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span>No smoking inside the unit (Balcony only).</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span>Clean as you go policy for kitchen use.</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span>Quiet hours start at 10:00 PM.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section id="location" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Location & Accessibility</h2>
          <p className="text-gray-400 mb-12">We are located at Cityland Prime Residences, Tagaytay City.</p>
          
          <div className="grid md:grid-cols-4 gap-6 text-left">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-indigo-400 mb-4" />
              <h4 className="font-bold text-lg mb-2">Tagaytay Rotonda</h4>
              <p className="text-gray-400 text-sm">3 Minutes Drive</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-indigo-400 mb-4" />
              <h4 className="font-bold text-lg mb-2">Sky Ranch</h4>
              <p className="text-gray-400 text-sm">10 Minutes Drive</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-indigo-400 mb-4" />
              <h4 className="font-bold text-lg mb-2">Picnic Grove</h4>
              <p className="text-gray-400 text-sm">15 Minutes Drive</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-indigo-400 mb-4" />
              <h4 className="font-bold text-lg mb-2">People's Park</h4>
              <p className="text-gray-400 text-sm">20 Minutes Drive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-indigo-600" />
            <div className="font-bold text-xl text-gray-900">
              CozyStay<span className="text-indigo-600">Tagaytay</span>
            </div>
          </div>
          <div className="text-gray-500 text-sm text-center md:text-right">
            <p className="mb-2">For bookings and inquiries:</p>
            <p className="font-bold text-gray-900 text-lg flex items-center gap-2 justify-center md:justify-end">
              <Phone className="w-5 h-5 text-indigo-600" /> 0912-345-6789
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TransientDesign1;
