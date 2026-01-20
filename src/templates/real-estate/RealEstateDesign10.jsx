import React, { useState } from 'react';
import { Map, List, Filter, Heart, MoreHorizontal, Navigation, Layers, Zap, Star } from 'lucide-react';

function RealEstateDesign10() {
  const [view, setView] = useState('map');

  return (
    <div className="h-screen bg-white font-sans text-slate-900 flex flex-col overflow-hidden">
      {/* Navbar */}
      <nav className="h-16 border-b border-slate-200 flex items-center px-4 justify-between bg-white z-20 shadow-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-indigo-600">
            <Map className="w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">FIND<span className="text-slate-900">SPOT</span></span>
          </div>
          <div className="hidden md:flex bg-slate-100 rounded-lg p-1">
            <button className="px-4 py-1.5 rounded-md text-sm font-bold bg-white shadow-sm text-slate-900">Rent</button>
            <button className="px-4 py-1.5 rounded-md text-sm font-bold text-slate-500 hover:text-slate-900">Buy</button>
            <button className="px-4 py-1.5 rounded-md text-sm font-bold text-slate-500 hover:text-slate-900">Sold</button>
          </div>
          <div className="hidden md:block relative w-96">
            <input 
              type="text" 
              placeholder="Address, Neighborhood, or Zip" 
              className="w-full bg-slate-100 border-none rounded-lg py-2 px-4 pl-10 text-sm font-medium focus:ring-2 focus:ring-indigo-500"
            />
            <SearchIcon className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-sm font-bold text-slate-600 hover:text-indigo-600">Saved</button>
          <button className="text-sm font-bold text-slate-600 hover:text-indigo-600">Alerts</button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors">
            Sign In
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar / List View */}
        <div className={`w-full md:w-[450px] flex-shrink-0 border-r border-slate-200 bg-white flex flex-col ${view === 'map' ? 'hidden md:flex' : 'flex'}`}>
          {/* Filters Bar */}
          <div className="p-4 border-b border-slate-200 flex space-x-2 overflow-x-auto no-scrollbar">
            <button className="flex items-center px-3 py-1.5 border border-slate-300 rounded-full text-xs font-bold hover:border-slate-800 whitespace-nowrap">
              Price <MoreHorizontal className="w-3 h-3 ml-1" />
            </button>
            <button className="flex items-center px-3 py-1.5 border border-slate-300 rounded-full text-xs font-bold hover:border-slate-800 whitespace-nowrap">
              Beds/Baths <MoreHorizontal className="w-3 h-3 ml-1" />
            </button>
            <button className="flex items-center px-3 py-1.5 border border-slate-300 rounded-full text-xs font-bold hover:border-slate-800 whitespace-nowrap">
              Home Type <MoreHorizontal className="w-3 h-3 ml-1" />
            </button>
            <button className="flex items-center px-3 py-1.5 border border-slate-300 rounded-full text-xs font-bold hover:border-slate-800 whitespace-nowrap">
              More <Filter className="w-3 h-3 ml-1" />
            </button>
          </div>

          <div className="p-4 bg-slate-50 text-xs font-bold text-slate-500 flex justify-between items-center">
            <span>142 Listings found</span>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-indigo-600">
              <span>Sort: Recommended</span>
              <MoreHorizontal className="w-3 h-3" />
            </div>
          </div>

          {/* Listings */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
                <div className="relative h-48">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1560448204-e02f11c3d0e2' : item === 2 ? '1484154218962-a1c002085d2f' : '1502672260266-1c1ef2d93688'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80`} 
                    alt="Apartment" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                    NEW 2 HRS AGO
                  </div>
                  <button className="absolute top-2 right-2 p-1.5 bg-black/50 rounded-full text-white hover:bg-red-500 hover:text-white transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-slate-900">$2,450<span className="text-xs font-normal text-slate-500">/mo</span></h3>
                    <div className="flex items-center text-xs font-bold text-green-600">
                      <Zap className="w-3 h-3 mr-1" /> Special Offer
                    </div>
                  </div>
                  <div className="flex space-x-3 text-xs font-bold text-slate-600 mb-2">
                    <span>1 Bed</span>
                    <span>1 Bath</span>
                    <span>750 sqft</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">The Metropolitan • 123 Downtown Ave, City Center</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map View */}
        <div className="flex-1 bg-slate-100 relative">
          {/* Simulated Map Background */}
          <div className="absolute inset-0 bg-[#E5E3DF] opacity-50" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          {/* Map Pins (Simulated) */}
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
             <div className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg hover:scale-110 transition-transform cursor-pointer">$2.4k</div>
             <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-indigo-600 mx-auto"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <div className="bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded shadow-lg hover:scale-110 transition-transform cursor-pointer">$3.1k</div>
             <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-slate-800 mx-auto"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
             <div className="bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded shadow-lg hover:scale-110 transition-transform cursor-pointer">$1.8k</div>
             <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-slate-800 mx-auto"></div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <button className="bg-white p-2 rounded-lg shadow-md hover:bg-slate-50 text-slate-600">
              <Navigation className="w-5 h-5" />
            </button>
            <button className="bg-white p-2 rounded-lg shadow-md hover:bg-slate-50 text-slate-600">
              <Layers className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <button 
              onClick={() => setView(view === 'map' ? 'list' : 'map')}
              className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center space-x-2"
            >
              {view === 'map' ? <List className="w-4 h-4" /> : <Map className="w-4 h-4" />}
              <span>{view === 'map' ? 'List View' : 'Map View'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

export default RealEstateDesign10;