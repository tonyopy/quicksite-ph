import React, { useState } from 'react';
import { Scale, Shield, Users, BookOpen, ChevronRight, Phone, Mail, MapPin, Award, CheckCircle } from 'lucide-react';

function LawFirmDesign1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-serif font-bold tracking-wide">STERLING & WRIGHT</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">Practice Areas</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">Attorneys</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">About Firm</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">Insights</a>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-sm text-sm font-medium uppercase tracking-wider transition-colors">
                Free Consultation
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 pb-4 px-4">
            <a href="#" className="block py-2 text-slate-300 hover:text-white border-b border-slate-700">Practice Areas</a>
            <a href="#" className="block py-2 text-slate-300 hover:text-white border-b border-slate-700">Attorneys</a>
            <a href="#" className="block py-2 text-slate-300 hover:text-white border-b border-slate-700">About Firm</a>
            <a href="#" className="block py-2 text-slate-300 hover:text-white border-b border-slate-700">Insights</a>
            <button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-sm font-medium uppercase tracking-wider">
              Free Consultation
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Defending Your Rights, <br/>
              <span className="text-amber-500">Protecting Your Future.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Sterling & Wright provides exceptional legal representation for corporate clients and individuals facing complex litigation challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-sm font-medium uppercase tracking-wider flex items-center justify-center transition-colors">
                Schedule Consultation <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-sm font-medium uppercase tracking-wider transition-colors">
                View Practice Areas
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Our Practice Areas</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We specialize in high-stakes litigation and corporate advisory, delivering strategic solutions for complex legal matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Corporate Defense', desc: 'Protecting businesses from liability and regulatory challenges.' },
              { icon: Users, title: 'Mergers & Acquisitions', desc: 'Navigating complex transactions with precision and strategic insight.' },
              { icon: BookOpen, title: 'Intellectual Property', desc: 'Safeguarding your innovations and creative assets globally.' },
              { icon: Scale, title: 'Commercial Litigation', desc: 'Resolving disputes through negotiation or aggressive courtroom representation.' },
              { icon: Award, title: 'Employment Law', desc: 'Advising on compliance, contracts, and workplace dispute resolution.' },
              { icon: MapPin, title: 'Real Estate Law', desc: 'Facilitating commercial property transactions and zoning matters.' },
            ].map((area, index) => (
              <div key={index} className="group p-8 border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 bg-slate-50">
                <area.icon className="h-12 w-12 text-slate-700 group-hover:text-amber-600 mb-6 transition-colors" />
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{area.title}</h3>
                <p className="text-slate-600 mb-6">{area.desc}</p>
                <a href="#" className="text-amber-600 font-medium uppercase text-sm tracking-wider flex items-center group-hover:underline">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Unwavering Commitment to Excellence</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                At Sterling & Wright, we believe that every client deserves the highest caliber of legal representation. Our team of seasoned attorneys brings decades of combined experience to every case.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Recognized as a Top Tier Firm by Legal 500',
                  'Over $500M recovered for our clients',
                  '24/7 dedicated support for urgent matters',
                  'Global network of legal partners'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-sm font-medium uppercase tracking-wider transition-colors">
                Meet Our Team
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-amber-500 opacity-30 rounded-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Law firm meeting" 
                className="relative rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-serif font-bold mb-2">25+</div>
              <div className="text-amber-100 uppercase tracking-wider text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold mb-2">500+</div>
              <div className="text-amber-100 uppercase tracking-wider text-sm">Cases Won</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold mb-2">50</div>
              <div className="text-amber-100 uppercase tracking-wider text-sm">Attorneys</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold mb-2">98%</div>
              <div className="text-amber-100 uppercase tracking-wider text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 shadow-lg border-t-4 border-amber-500">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Request a Consultation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-slate-300 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-slate-300 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 border border-slate-300 focus:ring-amber-500 focus:border-amber-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Case Type</label>
                  <select className="w-full px-4 py-2 border border-slate-300 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white">
                    <option>Corporate Law</option>
                    <option>Litigation</option>
                    <option>Intellectual Property</option>
                    <option>Real Estate</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-slate-300 focus:ring-amber-500 focus:border-amber-500 outline-none"></textarea>
                </div>
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 font-medium uppercase tracking-wider transition-colors">
                  Submit Request
                </button>
              </form>
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Contact Us Today</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Legal matters require prompt attention. Contact our office today to schedule a confidential consultation with one of our experienced attorneys.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-slate-500">Mon-Fri 9am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600">contact@sterlingwright.com</p>
                    <p className="text-sm text-slate-500">We reply within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Office</h4>
                    <p className="text-slate-600">100 Financial District Blvd, Suite 400</p>
                    <p className="text-slate-600">New York, NY 10005</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 text-white mb-4">
                <Scale className="h-6 w-6 text-amber-500" />
                <span className="text-lg font-serif font-bold tracking-wide">STERLING & WRIGHT</span>
              </div>
              <p className="text-sm">
                Premier legal representation for complex corporate and personal matters.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Practice Areas</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Corporate Law</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Litigation</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Real Estate</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Intellectual Property</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Attorneys</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Your email" className="bg-slate-800 border-none px-4 py-2 text-sm w-full focus:ring-1 focus:ring-amber-500 outline-none" />
                <button className="bg-amber-600 px-4 py-2 hover:bg-amber-700 transition-colors">
                  <ChevronRight className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; 2024 Sterling & Wright LLP. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Attorney Advertising</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LawFirmDesign1;
