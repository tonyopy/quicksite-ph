import React, { useState } from 'react';
import { Globe, Users, Heart, Check, PlayCircle, Menu, X, ChevronDown, Flag } from 'lucide-react';

function LawFirmDesign5() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-blue-900">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <span>Se Habla Español</span>
            <span>•</span>
            <span>Falamos Português</span>
          </div>
          <div className="font-semibold">
            Call for a Free Consultation: (555) 789-0123
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-500" />
              <div>
                <span className="text-xl font-bold tracking-wide block leading-none">GLOBAL</span>
                <span className="text-xl font-light tracking-wide block leading-none text-blue-400">HORIZONS</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-medium hover:text-blue-500 transition-colors">Services</a>
              <a href="#" className="font-medium hover:text-blue-500 transition-colors">Our Team</a>
              <a href="#" className="font-medium hover:text-blue-500 transition-colors">Success Stories</a>
              <a href="#" className="font-medium hover:text-blue-500 transition-colors">Resources</a>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-md shadow-blue-200">
                Book Appointment
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-blue-900">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-lg">
            <a href="#" className="block font-medium hover:text-blue-500">Services</a>
            <a href="#" className="block font-medium hover:text-blue-500">Our Team</a>
            <a href="#" className="block font-medium hover:text-blue-500">Success Stories</a>
            <a href="#" className="block font-medium hover:text-blue-500">Resources</a>
            <button className="w-full bg-blue-500 text-white px-5 py-3 rounded-lg font-medium">
              Book Appointment
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your American Dream <br/>
                <span className="text-blue-500">Starts Here.</span>
              </h1>
              <p className="text-lg text-blue-800/70 mb-8 leading-relaxed">
                Navigating immigration law is complex, but you don't have to do it alone. We are dedicated to uniting families, empowering businesses, and protecting your future in the United States.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-300 transition-all hover:translate-y-[-2px]">
                  Start Your Case
                </button>
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold shadow-md flex items-center justify-center transition-colors">
                  <PlayCircle className="h-5 w-5 mr-2" /> Watch Our Story
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-200 rounded-full opacity-50 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Diverse group of friends" 
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 max-w-xs">
                <div className="flex -space-x-2 mb-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">User</div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white">+2k</div>
                </div>
                <p className="font-bold text-blue-900">Over 2,000 Visas Approved</p>
                <p className="text-sm text-blue-700">Join our community of success stories.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Immigration Services</h2>
            <p className="text-blue-600/70 max-w-2xl mx-auto">
              From family petitions to employment visas and citizenship, we handle every aspect of the immigration process with care and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Family Based', desc: 'Petitions for spouses, children, parents, and siblings to reunite in the U.S.' },
              { icon: Flag, title: 'Citizenship', desc: 'Guidance through the naturalization process to become a U.S. citizen.' },
              { icon: Users, title: 'Employment Visas', desc: 'H-1B, L-1, O-1 and other work visa solutions for professionals and companies.' },
              { icon: Globe, title: 'Green Cards', desc: 'Permanent residency applications through adjustment of status or consular processing.' },
              { icon: Check, title: 'DACA & TPS', desc: 'Assistance with renewals and initial applications for protected status.' },
              { icon: Users, title: 'Deportation Defense', desc: 'Strong legal representation for removal proceedings and bond hearings.' },
            ].map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-100 bg-white">
                <div className="bg-blue-50 p-4 rounded-xl inline-block mb-6 group-hover:bg-blue-500 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Simple 3-Step Process</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We make the complex immigration system easy to understand and navigate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-blue-400/30"></div>
            
            {[
              { step: '01', title: 'Consultation', desc: 'We review your history and identify the best legal strategy for your goals.' },
              { step: '02', title: 'Preparation', desc: 'Our team gathers documents and prepares a flawless application package.' },
              { step: '03', title: 'Approval', desc: 'We monitor your case and prepare you for interviews until success.' },
            ].map((item, index) => (
              <div key={index} className="text-center relative z-10">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold border-2 border-white/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 pt-16 pb-8 text-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Globe className="h-6 w-6 text-blue-500" />
                <span className="font-bold text-blue-900 text-lg">GLOBAL HORIZONS</span>
              </div>
              <p className="max-w-md mb-6 leading-relaxed">
                Global Horizons Law Group is a full-service immigration law firm dedicated to providing high-quality legal services to individuals and businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow text-blue-600">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </button>
                <button className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow text-blue-600">
                   <span className="sr-only">Twitter</span>
                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Locations</h4>
              <ul className="space-y-3 text-sm">
                <li>New York City, NY</li>
                <li>Miami, FL</li>
                <li>Los Angeles, CA</li>
                <li>London, UK</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>info@globalhorizons.com</li>
                <li>+1 (555) 789-0123</li>
                <li>Mon-Fri: 9am - 6pm EST</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; 2024 Global Horizons Law Group. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-600">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LawFirmDesign5;
