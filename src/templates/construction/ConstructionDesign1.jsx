import React, { useState } from 'react';
import { Hammer, HardHat, Ruler, Truck, Home, Phone, CheckCircle, ArrowRight, Star, Clock, Shield } from 'lucide-react';

function ConstructionDesign1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <HardHat className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold tracking-tighter">APEX<span className="text-yellow-500">BUILD</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-yellow-500 transition-colors">Services</a>
              <a href="#projects" className="hover:text-yellow-500 transition-colors">Projects</a>
              <a href="#about" className="hover:text-yellow-500 transition-colors">About</a>
              <a href="#contact" className="bg-yellow-500 text-slate-900 px-5 py-2 rounded font-bold hover:bg-yellow-400 transition-colors">Get a Quote</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 py-4 px-6 space-y-4">
            <a href="#services" className="block text-gray-300 hover:text-white">Services</a>
            <a href="#projects" className="block text-gray-300 hover:text-white">Projects</a>
            <a href="#about" className="block text-gray-300 hover:text-white">About</a>
            <a href="#contact" className="block text-yellow-500 font-bold">Get a Quote</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Construction Site" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block bg-yellow-500 text-slate-900 font-bold px-3 py-1 mb-4 text-sm tracking-wider uppercase">
              Premier General Contracting
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building Your Vision With <span className="text-yellow-500">Precision</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From residential renovations to commercial construction, we deliver quality craftsmanship that stands the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 text-slate-900 px-8 py-4 rounded font-bold hover:bg-yellow-400 transition-colors flex items-center justify-center">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-yellow-500 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-slate-900">
            <div>
              <div className="text-4xl font-bold mb-1">25+</div>
              <div className="text-sm font-semibold uppercase tracking-wide">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">500+</div>
              <div className="text-sm font-semibold uppercase tracking-wide">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-sm font-semibold uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">50</div>
              <div className="text-sm font-semibold uppercase tracking-wide">Team Members</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive construction services tailored to meet your specific needs and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow border-t-4 border-yellow-500 group">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                <Home className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Residential Construction</h3>
              <p className="text-gray-600 mb-4">
                Custom home building, additions, and structural modifications. We turn your dream home into reality.
              </p>
              <a href="#" className="text-yellow-600 font-bold hover:text-yellow-700 flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow border-t-4 border-slate-900 group">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
                <Hammer className="w-8 h-8 text-slate-900 group-hover:text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Renovations & Remodeling</h3>
              <p className="text-gray-600 mb-4">
                Kitchens, bathrooms, basements, and full home makeovers. Update your space with modern finishes.
              </p>
              <a href="#" className="text-slate-900 font-bold hover:text-yellow-600 flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow border-t-4 border-yellow-500 group">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                <Truck className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Commercial Projects</h3>
              <p className="text-gray-600 mb-4">
                Office build-outs, retail spaces, and industrial facilities. We understand the importance of timelines.
              </p>
              <a href="#" className="text-yellow-600 font-bold hover:text-yellow-700 flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Architects working" 
                className="rounded-lg shadow-2xl border-4 border-gray-700"
              />
            </div>
            <div className="md:w-1/2">
              <div className="text-yellow-500 font-bold mb-2 uppercase tracking-wide">Why Choose ApexBuild</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Excellence in Every Detail</h2>
              <p className="text-gray-300 mb-8">
                We pride ourselves on transparent communication, superior quality, and keeping your project on track. Our team brings decades of combined experience to every job site.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-2 rounded mt-1">
                    <Shield className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold">Licensed & Insured</h4>
                    <p className="text-gray-400 text-sm">Fully licensed general contractors with comprehensive liability insurance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-2 rounded mt-1">
                    <Clock className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold">On-Time Completion</h4>
                    <p className="text-gray-400 text-sm">We respect your time and stick to our project schedules strictly.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-2 rounded mt-1">
                    <Star className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold">Quality Guaranteed</h4>
                    <p className="text-gray-400 text-sm">We use only premium materials and skilled tradespeople.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recent Projects</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Modern House" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Modern Villa Build</h3>
                  <p className="text-yellow-400 text-sm">Residential Construction</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556912173-3db9963ee790?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Remodel" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Luxury Kitchen Remodel</h3>
                  <p className="text-yellow-400 text-sm">Renovation</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Office Space" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Tech Office Fitout</h3>
                  <p className="text-yellow-400 text-sm">Commercial</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded font-bold hover:bg-slate-900 hover:text-white transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="bg-yellow-500 py-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Build Your Project?</h2>
              <p className="text-gray-600">Get a free consultation and quote. We'll get back to you within 24 hours.</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none" placeholder="(555) 123-4567" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Project Details</label>
                <textarea className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none h-32" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
                Request Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <HardHat className="w-6 h-6 text-yellow-500" />
                <span className="text-xl font-bold text-white tracking-tighter">APEX<span className="text-yellow-500">BUILD</span></span>
              </div>
              <p className="text-sm">Building excellence since 1998. Your trusted partner for all construction needs.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-yellow-500">Residential</a></li>
                <li><a href="#" className="hover:text-yellow-500">Commercial</a></li>
                <li><a href="#" className="hover:text-yellow-500">Renovations</a></li>
                <li><a href="#" className="hover:text-yellow-500">Project Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-500">Our Team</a></li>
                <li><a href="#" className="hover:text-yellow-500">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> (555) 123-4567</li>
                <li className="flex items-center"><Home className="w-4 h-4 mr-2" /> 123 Builder Lane, City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            &copy; 2024 ApexBuild Construction. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ConstructionDesign1;