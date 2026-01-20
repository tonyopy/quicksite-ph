import React, { useState } from 'react';
import { Menu, X, Shield, Star, Clock, CheckCircle, Phone, Mail, MapPin, ChevronRight, Award, Users, Building2 } from 'lucide-react';

const CleaningDesign1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-slate-600 bg-white min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2.5 px-6 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between text-xs font-medium tracking-wide uppercase">
          <div className="flex gap-8">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Phone className="w-3.5 h-3.5" /> (02) 8-123-4567</span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Mail className="w-3.5 h-3.5" /> corporate@proclean.ph</span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><MapPin className="w-3.5 h-3.5" /> BGC, Taguig City</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Client Portal</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-none tracking-tight">ProClean</span>
                <span className="text-[0.65rem] font-bold text-blue-600 uppercase tracking-widest">Corporate Solutions</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 font-semibold text-slate-600 text-sm">
              <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Process</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Reviews</a>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-all shadow-md shadow-blue-200 hover:shadow-lg hover:-translate-y-0.5 font-bold">
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-slate-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
            <a href="#" className="text-lg font-semibold text-slate-700 hover:text-blue-600">Services</a>
            <a href="#" className="text-lg font-semibold text-slate-700 hover:text-blue-600">About</a>
            <a href="#" className="text-lg font-semibold text-slate-700 hover:text-blue-600">Process</a>
            <a href="#" className="text-lg font-semibold text-slate-700 hover:text-blue-600">Reviews</a>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold w-full">
              Get a Quote
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-50 py-20 lg:py-28 px-6 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/50 skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm mb-8 uppercase tracking-wide">
              <Star className="w-3 h-3 fill-current" />
              ISO 9001:2015 Certified
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Corporate-Grade <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Cleaning Excellence.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              The preferred facility management partner for top corporations in Metro Manila. 
              We deliver consistency, compliance, and immaculate results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-md font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Schedule Consultation <ChevronRight className="w-4 h-4" />
              </button>
              <button className="bg-white text-slate-700 border border-slate-300 px-8 py-4 rounded-md font-bold hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center">
                Download Brochure
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Corporate Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">98%</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Retention Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Support Team</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1581578731117-10d52143b1e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[600px]" 
              alt="Professional Office Cleaning" 
            />
            {/* Floating Card */}
            <div className="absolute bottom-10 -left-10 z-20 bg-white p-6 rounded-xl shadow-2xl max-w-xs hidden lg:block border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Fully Insured</div>
                  <div className="text-xs text-slate-500">Up to ₱5M Liability Coverage</div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Mock Logos */}
          <div className="text-xl font-black text-slate-800 flex items-center gap-2"><div className="w-6 h-6 bg-slate-800 rounded"></div> AYALA LAND</div>
          <div className="text-xl font-black text-slate-800 flex items-center gap-2"><div className="w-6 h-6 bg-slate-800 rounded-full"></div> SM PRIME</div>
          <div className="text-xl font-black text-slate-800 flex items-center gap-2"><div className="w-6 h-6 bg-slate-800 rotate-45"></div> MEGAWORLD</div>
          <div className="text-xl font-black text-slate-800 flex items-center gap-2"><div className="w-6 h-6 bg-slate-800 rounded-tr-xl"></div> ROBINSONS</div>
          <div className="text-xl font-black text-slate-800 flex items-center gap-2"><div className="w-6 h-6 bg-slate-800 rounded-bl-xl"></div> ROCKWELL</div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive Facility Solutions</h3>
            <p className="text-slate-500 text-lg">We don't just clean; we maintain the value of your property with specialized protocols for every surface and space.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users className="w-6 h-6" />, 
                title: "Office Maintenance", 
                desc: "Daily janitorial services, pantry management, and restroom sanitation.",
                features: ["Day porters", "Night cleaning", "Supply management"]
              },
              { 
                icon: <Award className="w-6 h-6" />, 
                title: "Deep Cleaning", 
                desc: "Intensive quarterly or annual deep cleaning for carpets, upholstery, and hard floors.",
                features: ["Steam extraction", "Floor polishing", "Grout cleaning"]
              },
              { 
                icon: <Shield className="w-6 h-6" />, 
                title: "Specialized Disinfection", 
                desc: "Hospital-grade misting and high-touch surface sterilization protocols.",
                features: ["FDA-approved chemicals", "ATP testing", "Detailed reporting"]
              },
              { 
                icon: <CheckCircle className="w-6 h-6" />, 
                title: "Post-Construction", 
                desc: "Removal of heavy dust, debris, and paint marks for turnover-ready spaces.",
                features: ["Rough cleaning", "Final detailing", "Window scraping"]
              },
              { 
                icon: <Clock className="w-6 h-6" />, 
                title: "Event Support", 
                desc: "Pre-event setup cleaning and post-event waste management and restoration.",
                features: ["On-site attendants", "Waste segregation", "Rapid turnover"]
              },
              { 
                icon: <Star className="w-6 h-6" />, 
                title: "Residential Estates", 
                desc: "Premium housekeeping for condominiums and private residences.",
                features: ["Background checked", "Hotel standards", "Linen service"]
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-500 mb-6 leading-relaxed text-sm">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:4px_4px] opacity-20"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Top Brands Trust ProClean</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Rigorous Vetting Process</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Every staff member undergoes NBI clearance, drug testing, and a 4-week intensive training program before deployment.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Assurance System</h3>
                  <p className="text-slate-400 leading-relaxed">
                    We use a digital checklist app for every job. Supervisors perform random spot checks to ensure standards are met.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dedicated Account Manager</h3>
                  <p className="text-slate-400 leading-relaxed">
                    One point of contact for all your needs. Direct line access for emergencies and schedule adjustments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Request a Proposal</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-blue-500" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-blue-500" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Company Email</label>
                <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-blue-500" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Service Needed</label>
                <select className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-blue-500">
                  <option>Office Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Post-Construction</option>
                </select>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded hover:bg-blue-500 transition-colors mt-4">
                Get Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-6 text-white">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold">ProClean</span>
            </div>
            <p className="leading-relaxed mb-6">
              Setting the standard for corporate cleaning services in the Philippines. Professional, reliable, and secure.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">FB</div>
              <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">IG</div>
              <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">LI</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Office Maintenance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carpet Extraction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Window Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sanitization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Unit 1204, High Street Corporate Plaza, BGC, Taguig</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <span>(02) 8-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <span>corporate@proclean.ph</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-900 mt-16 pt-8 text-center text-xs">
          © 2024 ProClean Solutions Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CleaningDesign1;
