import React, { useState } from 'react';
import { Ambulance, DollarSign, Clock, Phone, AlertCircle, CheckSquare, ArrowRight, Menu, X } from 'lucide-react';

function LawFirmDesign4() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Top Warning Bar */}
      <div className="bg-yellow-400 text-black py-2 font-bold text-center text-sm px-4">
        <span className="flex items-center justify-center gap-2">
          <AlertCircle className="h-4 w-4" />
          INJURED? YOU MAY BE ENTITLED TO SUBSTANTIAL COMPENSATION. ACT NOW - TIME IS LIMITED.
        </span>
      </div>

      {/* Header */}
      <header className="bg-white border-b-4 border-orange-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <span className="text-4xl font-black italic tracking-tighter text-gray-900">
                MAX<span className="text-orange-600">RESULTS</span>
              </span>
              <span className="ml-2 text-xs font-bold text-gray-500 uppercase hidden sm:block">
                Personal Injury<br/>Law Group
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="text-right hidden lg:block">
                <div className="text-xs font-bold text-gray-500 uppercase">Free Consultation 24/7</div>
                <div className="text-2xl font-black text-orange-600 tracking-tight">1-800-555-WINS</div>
              </div>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-black italic uppercase transform -skew-x-12 shadow-lg transition-transform hover:scale-105">
                <span className="block transform skew-x-12">Get Cash Now</span>
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-900">
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-100 p-4 space-y-4 border-b border-gray-200">
            <a href="#" className="block font-bold text-lg">Case Types</a>
            <a href="#" className="block font-bold text-lg">Our Results</a>
            <a href="#" className="block font-bold text-lg">About Us</a>
            <button className="w-full bg-orange-600 text-white py-3 font-black uppercase">Call 1-800-555-WINS</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1568283096533-078a23806814?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Accident scene blur" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-6">
              Don't Be a Victim <span className="text-orange-500">Twice.</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-8 text-gray-300">
              Insurance companies have lawyers fighting to pay you less. You need aggressive representation to get every penny you deserve.
            </p>
            <ul className="space-y-4 mb-10 text-lg font-bold">
              <li className="flex items-center text-orange-400"><CheckSquare className="h-6 w-6 mr-3" /> NO FEE Unless We Win</li>
              <li className="flex items-center text-orange-400"><CheckSquare className="h-6 w-6 mr-3" /> Millions Recovered</li>
              <li className="flex items-center text-orange-400"><CheckSquare className="h-6 w-6 mr-3" /> Medical Bills Paid</li>
            </ul>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-black uppercase mb-4">Free Instant Case Review</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Phone Number" className="flex-1 bg-white text-gray-900 px-4 py-3 font-bold focus:outline-none" />
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-black uppercase whitespace-nowrap">
                  Start Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Ticker */}
      <div className="bg-black text-white py-4 overflow-hidden whitespace-nowrap border-b border-gray-800">
        <div className="inline-block animate-marquee pl-full">
          <span className="mx-8 font-mono font-bold text-green-400">$2.5M Car Accident Settlement</span>
          <span className="mx-8 font-mono font-bold text-green-400">$1.2M Slip and Fall Verdict</span>
          <span className="mx-8 font-mono font-bold text-green-400">$500K Dog Bite Settlement</span>
          <span className="mx-8 font-mono font-bold text-green-400">$5M Truck Accident Verdict</span>
          <span className="mx-8 font-mono font-bold text-green-400">$850K Workplace Injury</span>
        </div>
      </div>

      {/* Practice Areas */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-16 uppercase italic">We Handle All Accidents</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Ambulance, title: 'Car Accidents' },
              { icon: AlertCircle, title: 'Truck Accidents' },
              { icon: Clock, title: 'Work Injuries' },
              { icon: DollarSign, title: 'Wrongful Death' },
              { icon: AlertCircle, title: 'Slip & Fall' },
              { icon: Ambulance, title: 'Motorcycle' },
              { icon: DollarSign, title: 'Medical Malpractice' },
              { icon: Clock, title: 'Product Liability' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 text-center shadow-lg hover:shadow-xl transition-shadow border-b-4 border-gray-200 hover:border-orange-500 group cursor-pointer">
                <item.icon className="h-12 w-12 mx-auto mb-4 text-gray-400 group-hover:text-orange-600 transition-colors" />
                <h3 className="font-black text-lg uppercase group-hover:text-orange-600 transition-colors">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black italic uppercase mb-12">The MaxResults Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="bg-black/20 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Zero Upfront Costs</h3>
              <p className="font-medium text-orange-100">We pay for all investigations, experts, and court fees. You pay nothing until we win your case.</p>
            </div>
            <div>
              <div className="bg-black/20 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Fast Settlements</h3>
              <p className="font-medium text-orange-100">We push insurance companies to pay out quickly so you can get your life back on track.</p>
            </div>
            <div>
              <div className="bg-black/20 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6">
                <Ambulance className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Top Medical Care</h3>
              <p className="font-medium text-orange-100">We help you find the best doctors and specialists, even if you don't have health insurance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
             <span className="text-3xl font-black italic tracking-tighter mb-4 md:mb-0">
                MAX<span className="text-orange-600">RESULTS</span>
              </span>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-black uppercase rounded-full">
                1-800-555-WINS
              </button>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p className="mb-2">Attorney Advertising. Past results do not guarantee future outcomes.</p>
            <p>&copy; 2024 MaxResults Personal Injury Law Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LawFirmDesign4;
