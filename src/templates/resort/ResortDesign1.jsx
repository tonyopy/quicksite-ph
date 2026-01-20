import React, { useState } from 'react';
import { Menu, X, Facebook, Instagram, Phone, MapPin, Sun, Moon, Waves, Utensils, Music, Home, CheckCircle } from 'lucide-react';

const ResortDesign1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Waves className="h-8 w-8 text-cyan-600 mr-2" />
              <span className="font-bold text-2xl text-cyan-900 tracking-tight">PalmSprings PH</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="text-gray-600 hover:text-cyan-600 font-medium transition-colors">Home</a>
              <a href="#amenities" className="text-gray-600 hover:text-cyan-600 font-medium transition-colors">Amenities</a>
              <a href="#rates" className="text-gray-600 hover:text-cyan-600 font-medium transition-colors">Rates</a>
              <a href="#cottages" className="text-gray-600 hover:text-cyan-600 font-medium transition-colors">Cottages</a>
              <a href="#contact" className="bg-cyan-600 text-white px-6 py-2.5 rounded-full hover:bg-cyan-700 transition-all shadow-md font-medium">
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-cyan-600 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#home" onClick={toggleMenu} className="block px-3 py-3 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-md font-medium">Home</a>
              <a href="#amenities" onClick={toggleMenu} className="block px-3 py-3 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-md font-medium">Amenities</a>
              <a href="#rates" onClick={toggleMenu} className="block px-3 py-3 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-md font-medium">Rates</a>
              <a href="#cottages" onClick={toggleMenu} className="block px-3 py-3 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-md font-medium">Cottages</a>
              <a href="#contact" onClick={toggleMenu} className="block px-3 py-3 text-center mt-4 bg-cyan-600 text-white rounded-md font-bold">Book Now</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop" 
            alt="Tropical Resort Pool" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-semibold tracking-wider mb-4 border border-white/30">
            SUMMER ALL YEAR ROUND ☀️
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Your Perfect Escape <br/> <span className="text-cyan-300">Close to Nature</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the ultimate relaxation with our pristine pools, cozy cottages, and family-friendly atmosphere. Located just 30 mins from the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#rates" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center">
              <Sun className="w-5 h-5 mr-2" /> View Rates
            </a>
            <a href="#contact" className="bg-white hover:bg-gray-100 text-cyan-900 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg flex items-center justify-center">
              <Facebook className="w-5 h-5 mr-2" /> Message Us
            </a>
          </div>
        </div>
        
        {/* Floating Info Card */}
        <div className="absolute bottom-0 w-full bg-white/95 backdrop-blur md:rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] py-8 border-t border-white/50 hidden md:block">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 text-center divide-x divide-gray-200">
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wide font-semibold mb-1">Location</p>
              <p className="text-cyan-900 font-bold text-lg">San Jose del Monte, Bulacan</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wide font-semibold mb-1">Open Hours</p>
              <p className="text-cyan-900 font-bold text-lg">Daily: 8:00 AM - 10:00 PM</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wide font-semibold mb-1">Contact</p>
              <p className="text-cyan-900 font-bold text-lg">0912-345-6789</p>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Everything you need for a memorable family outing or barkada reunion.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Waves className="w-8 h-8 text-cyan-500" />, title: "Kiddie & Adult Pools", desc: "Clean, treated water with slide features for kids." },
              { icon: <Home className="w-8 h-8 text-orange-500" />, title: "Native Cottages", desc: "Comfortable bamboo cottages perfect for picnics." },
              { icon: <Music className="w-8 h-8 text-purple-500" />, title: "Videoke Rooms", desc: "Sing your heart out in our sound-proofed rooms." },
              { icon: <Utensils className="w-8 h-8 text-red-500" />, title: "Grilling Station", desc: "Free use of grilling area for all guests." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Rates Section */}
      <section id="rates" className="py-20 bg-cyan-900 text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Affordable Entrance Rates</h2>
            <p className="text-cyan-200 text-lg">Choose your preferred swimming schedule.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Day Tour */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 shadow-lg text-yellow-900">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Day Tour</h3>
                  <p className="text-cyan-200">8:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span>Adult</span>
                  <span className="text-2xl font-bold">₱150</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span>Kids (3ft - 4ft)</span>
                  <span className="text-2xl font-bold">₱100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Senior / PWD</span>
                  <span className="text-2xl font-bold">₱120</span>
                </div>
              </div>
              <p className="text-xs text-cyan-200 mt-6 italic">*Kids below 3ft are FREE</p>
            </div>

            {/* Night Swimming */}
            <div className="bg-cyan-800/50 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-cyan-800/60 transition-all">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mr-4 shadow-lg text-white">
                  <Moon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Night Swimming</h3>
                  <p className="text-cyan-200">6:00 PM - 11:00 PM</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span>Adult</span>
                  <span className="text-2xl font-bold">₱180</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span>Kids (3ft - 4ft)</span>
                  <span className="text-2xl font-bold">₱120</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Senior / PWD</span>
                  <span className="text-2xl font-bold">₱145</span>
                </div>
              </div>
              <p className="text-xs text-cyan-200 mt-6 italic">*Private pool reservation available upon request</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cottages Section */}
      <section id="cottages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cottages & Rooms</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">First come, first serve basis for small cottages. Reservation required for private rooms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Umbrella Table",
                price: "₱500",
                capacity: "4-6 Pax",
                image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
                features: ["Open Air", "Near Pool Side", "Best for small groups"]
              },
              {
                title: "Nipa Hut (Kubo)",
                price: "₱1,200",
                capacity: "10-15 Pax",
                image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop",
                features: ["Traditional Look", "Electric Fan", "Spacious Seating"]
              },
              {
                title: "AC Room",
                price: "₱2,500",
                capacity: "2-4 Pax",
                image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
                features: ["Air Conditioned", "Private Toilet", "Queen Bed"]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <span className="bg-cyan-100 text-cyan-800 text-sm font-bold px-3 py-1 rounded-full">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">Good for {item.capacity}</p>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="block w-full text-center border-2 border-cyan-500 text-cyan-600 font-bold py-2 rounded-lg hover:bg-cyan-50 transition-colors">
                    Reserve This
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 bg-cyan-900 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Us Today!</h2>
              <p className="text-cyan-200 mb-10 text-lg leading-relaxed">
                We accept walk-ins and reservations. Perfect for birthdays, reunions, and team buildings.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-cyan-800 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-300">Address</p>
                    <p className="font-semibold">Purok 5, Brgy. Paradise, San Jose del Monte, Bulacan</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-cyan-800 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-300">Call/Text</p>
                    <p className="font-semibold">0912-345-6789 / 0998-765-4321</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-cyan-800 rounded-full flex items-center justify-center mr-4">
                    <Facebook className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-300">Facebook Page</p>
                    <p className="font-semibold cursor-pointer hover:text-cyan-400">@PalmSpringsResortPH</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-10 md:p-16 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" placeholder="Juan Dela Cruz" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" placeholder="0912..." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Visit</label>
                  <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message / Inquiries</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" placeholder="How much for 20 pax?"></textarea>
                </div>
                <button type="button" className="w-full bg-cyan-600 text-white font-bold py-3 rounded-lg hover:bg-cyan-700 transition-colors shadow-lg">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Waves className="h-8 w-8 text-cyan-500 mr-2" />
            <span className="font-bold text-2xl text-white tracking-tight">PalmSprings PH</span>
          </div>
          <p className="mb-8 max-w-md mx-auto">Your affordable getaway in Bulacan. Relax, swim, and enjoy quality time with family.</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-cyan-400 transition-colors"><Facebook /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><Instagram /></a>
          </div>
          <p className="text-sm">© 2025 PalmSprings Resort PH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResortDesign1;