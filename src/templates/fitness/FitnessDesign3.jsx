import React, { useState } from 'react';
import { Activity, Zap, Users, Clock, ChevronDown, Menu, X, CheckCircle } from 'lucide-react';

function FitnessDesign3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Promo Bar */}
      <div className="bg-orange-500 text-white text-center py-2 text-sm font-bold uppercase tracking-wide">
        Join for $1 down + First Month Free • Offer Ends Soon!
      </div>

      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg transform -skew-x-12">
                <Activity className="h-6 w-6 text-white transform skew-x-12" />
              </div>
              <span className="text-2xl font-extrabold italic text-blue-900">METRO<span className="text-orange-500">FIT</span></span>
            </div>

            <div className="hidden md:flex items-center space-x-8 font-bold text-slate-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Locations</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Amenities</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Classes</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Training</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-colors shadow-lg shadow-blue-200">
                Join Now
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-600">
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-50 border-t border-slate-200 p-4 space-y-4 font-bold text-slate-600">
            <a href="#" className="block hover:text-blue-600">Locations</a>
            <a href="#" className="block hover:text-blue-600">Amenities</a>
            <a href="#" className="block hover:text-blue-600">Classes</a>
            <button className="w-full bg-blue-600 text-white py-3 rounded-full">Join Now</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-slate-900 h-[600px] flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Gym interior" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-none italic">
              YOUR FITNESS <br/>
              <span className="text-orange-500">STARTS HERE.</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 font-medium">
              State-of-the-art equipment, unlimited classes, and 24/7 access. All for one low monthly price.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Find Your Club</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Enter Zip Code" className="flex-1 bg-slate-100 border border-slate-300 rounded-lg px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Grid */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">EVERYTHING YOU NEED TO SUCCEED</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Activity, title: 'Cardio Cinema' },
              { icon: Zap, title: 'Free Weights' },
              { icon: Users, title: 'Group Classes' },
              { icon: Clock, title: 'Open 24/7' },
              { icon: Activity, title: 'Sauna & Steam' },
              { icon: Zap, title: 'Turf Zone' },
              { icon: Users, title: 'Personal Training' },
              { icon: Clock, title: 'Kids Club' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-slate-100">
                <div className="bg-blue-50 p-4 rounded-full mb-4 text-blue-600">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Membership Plans */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-16">CHOOSE YOUR MEMBERSHIP</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-slate-600 mb-2">Basic</h3>
              <div className="text-4xl font-extrabold text-slate-900 mb-6">$10<span className="text-lg font-medium text-slate-500">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-slate-600"><CheckCircle className="h-5 w-5 text-green-500 mr-3" /> Single Club Access</li>
                <li className="flex items-center text-slate-600"><CheckCircle className="h-5 w-5 text-green-500 mr-3" /> Cardio & Weights</li>
                <li className="flex items-center text-slate-600"><CheckCircle className="h-5 w-5 text-green-500 mr-3" /> Locker Rooms</li>
              </ul>
              <button className="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-full hover:bg-blue-50 transition-colors">Select Plan</button>
            </div>

            {/* Premium Plan */}
            <div className="bg-slate-900 rounded-2xl p-8 transform md:-translate-y-4 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">Best Value</div>
              <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
              <div className="text-4xl font-extrabold text-white mb-6">$25<span className="text-lg font-medium text-slate-400">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-slate-300"><CheckCircle className="h-5 w-5 text-orange-500 mr-3" /> All Club Access</li>
                <li className="flex items-center text-slate-300"><CheckCircle className="h-5 w-5 text-orange-500 mr-3" /> Guest Privileges</li>
                <li className="flex items-center text-slate-300"><CheckCircle className="h-5 w-5 text-orange-500 mr-3" /> Massage Chairs</li>
                <li className="flex items-center text-slate-300"><CheckCircle className="h-5 w-5 text-orange-500 mr-3" /> Tanning</li>
              </ul>
              <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-full hover:bg-orange-600 transition-colors">Select Plan</button>
            </div>

            {/* Family Plan */}
            <div className="border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-slate-600 mb-2">Family</h3>
              <div className="text-4xl font-extrabold text-slate-900 mb-6">$50<span className="text-lg font-medium text-slate-500">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-slate-600"><CheckCircle className="h-5 w-5 text-green-500 mr-3" /> 2 Adults + 2 Kids</li>
                <li className="flex items-center text-slate-600"><CheckCircle className="h-5 w-5 text-green-500 mr-3" /> Kids Club Included</li>
                <li className="flex items-center text-slate-600"><CheckCircle className="h-5 w-5 text-green-500 mr-3" /> All Premium Perks</li>
              </ul>
              <button className="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-full hover:bg-blue-50 transition-colors">Select Plan</button>
            </div>
          </div>
        </div>
      </div>

      {/* App Section */}
      <div className="bg-blue-600 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-extrabold mb-6 italic">FITNESS IN YOUR POCKET</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-md">
              Track workouts, book classes, and access virtual coaching anytime, anywhere with the MetroFit App.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors">
                App Store
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors">
                Google Play
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
             <div className="w-64 h-[500px] bg-black rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-10"></div>
                <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="App Screen" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Activity className="h-16 w-16 text-white" />
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Careers</a></li>
                <li><a href="#" className="hover:text-blue-500">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
                <li><a href="#" className="hover:text-blue-500">Member Policies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms of Use</a></li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                 <span className="text-xl font-extrabold italic text-white">METRO<span className="text-orange-500">FIT</span></span>
              </div>
              <p>The gym for everyone.</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-slate-800">
            &copy; 2024 MetroFit Gyms. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FitnessDesign3;
