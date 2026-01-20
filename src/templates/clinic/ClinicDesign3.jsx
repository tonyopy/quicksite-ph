import React, { useState } from 'react';
import { Sparkles, Calendar, Phone, MapPin, Clock, Check, Menu, X, Mail, Star, User } from 'lucide-react';

function ClinicDesign3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-teal-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-light text-teal-800 tracking-wide">
            <Sparkles className="w-6 h-6 text-teal-500" />
            PURE<span className="font-bold text-teal-600">DENTAL</span>
          </div>
          
          <div className="hidden md:flex space-x-10 text-sm font-medium text-slate-500 uppercase tracking-widest">
            <a href="#services" className="hover:text-teal-600 transition">Treatments</a>
            <a href="#technology" className="hover:text-teal-600 transition">Technology</a>
            <a href="#results" className="hover:text-teal-600 transition">Results</a>
            <a href="#contact" className="hover:text-teal-600 transition">Contact</a>
          </div>
          <a href="#book" className="hidden md:block px-8 py-3 bg-teal-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-teal-700 transition shadow-lg shadow-teal-200">
            Book Visit
          </a>

          <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-teal-50 py-4 px-6 space-y-4">
            <a href="#services" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Treatments</a>
            <a href="#technology" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Technology</a>
            <a href="#results" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Results</a>
            <a href="#contact" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#book" className="block w-full text-center px-6 py-3 bg-teal-600 text-white font-bold uppercase hover:bg-teal-700 transition" onClick={() => setIsMenuOpen(false)}>
              Book Visit
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-light leading-tight text-slate-900">
              Design Your <br />
              <span className="font-bold text-teal-600">Perfect Smile</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-light max-w-md">
              Modern dentistry meets artistry. Experience pain-free treatments in a spa-like environment tailored for your comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a href="#book" className="px-8 py-4 bg-teal-600 text-white text-sm font-bold uppercase tracking-wider text-center hover:bg-teal-700 transition shadow-xl shadow-teal-200">
                Book Consultation
              </a>
              <a href="#services" className="px-8 py-4 bg-white text-teal-800 border border-teal-100 text-sm font-bold uppercase tracking-wider text-center hover:bg-teal-50 transition">
                View Procedures
              </a>
            </div>
            
            <div className="flex items-center gap-8 pt-8 text-sm font-medium text-slate-400 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal-500" /> Invisalign Provider
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal-500" /> Laser Dentistry
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-teal-50 rounded-full transform translate-x-12 translate-y-12 -z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Bright Smile" 
               className="rounded-none shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
             />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 border-t border-teal-800 pt-12">
            <div>
              <h2 className="text-3xl font-light mb-6">Curated <br/><span className="font-bold">Treatments</span></h2>
              <p className="text-teal-200 mb-8 leading-relaxed">
                We utilize the latest technology to provide comprehensive dental care, from routine hygiene to complex cosmetic restorations.
              </p>
              <a href="#book" className="text-teal-400 font-bold uppercase tracking-widest text-sm hover:text-white transition">View Full Menu &rarr;</a>
            </div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {[
                { title: "Cosmetic Dentistry", desc: "Veneers, bonding, and smile makeovers." },
                { title: "Invisalign & Ortho", desc: "Clear aligners for a straighter smile." },
                { title: "Dental Implants", desc: "Permanent solutions for missing teeth." },
                { title: "Teeth Whitening", desc: "Professional laser whitening for instant results." },
                { title: "General Care", desc: "Comprehensive exams, cleanings, and fillings." },
                { title: "Emergency", desc: "Same-day appointments for urgent needs." }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="w-12 h-1 bg-teal-700 mb-6 group-hover:bg-teal-400 transition-colors"></div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-teal-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology / Features */}
      <section id="technology" className="py-24 bg-slate-50">
         <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-end gap-12 mb-16">
             <div className="md:w-1/2">
               <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-2 block">The Experience</span>
               <h2 className="text-4xl font-light text-slate-900">Relax. You're in <br/><span className="font-bold">Good Hands.</span></h2>
             </div>
             <div className="md:w-1/2">
               <p className="text-slate-500 leading-relaxed">
                 Gone are the days of anxious dental visits. We've reimagined the dental experience to be calming, transparent, and focused on your well-being.
               </p>
             </div>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500">
               <div className="text-teal-500 mb-6"><Sparkles className="w-8 h-8" /></div>
               <h3 className="text-xl font-bold mb-4">Advanced Tech</h3>
               <p className="text-slate-500 text-sm leading-relaxed">3D scanning, digital X-rays, and intraoral cameras for precise diagnostics.</p>
             </div>
             <div className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500 transform md:-translate-y-8">
               <div className="text-teal-500 mb-6"><Clock className="w-8 h-8" /></div>
               <h3 className="text-xl font-bold mb-4">Efficient Visits</h3>
               <p className="text-slate-500 text-sm leading-relaxed">We respect your time. Digital check-ins and zero-wait policy.</p>
             </div>
             <div className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500">
               <div className="text-teal-500 mb-6"><User className="w-8 h-8" /></div>
               <h3 className="text-xl font-bold mb-4">Comfort First</h3>
               <p className="text-slate-500 text-sm leading-relaxed">Noise-cancelling headphones, streaming services, and sedation options.</p>
             </div>
           </div>
         </div>
      </section>

      {/* Results / Before After */}
      <section id="results" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-16">Real <span className="font-bold">Results</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={`https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                  alt="Smile Transformation" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <p className="font-bold text-xl mb-2">Smile Makeover</p>
                    <p className="text-teal-200 text-sm">Veneers & Whitening</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-teal-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light mb-8">Visit Our <br/><span className="font-bold">Studio</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <MapPin className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Location</h4>
                    <p className="text-slate-600">The Dental Loft, 456 Main Ave,<br/>Bonifacio Global City, Metro Manila</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Phone className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Contact</h4>
                    <p className="text-slate-600">(02) 8555-0123<br/>hello@puredental.ph</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Clock className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Hours</h4>
                    <p className="text-slate-600">Mon - Fri: 9am - 7pm<br/>Sat: 10am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white p-10 shadow-xl border-t-4 border-teal-500">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Request Appointment</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border-none p-4 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-500" />
                <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border-none p-4 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-500" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border-none p-4 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-500" />
                <select className="w-full bg-slate-50 border-none p-4 text-slate-900 focus:ring-2 focus:ring-teal-500">
                  <option>New Patient Exam</option>
                  <option>Teeth Whitening</option>
                  <option>Emergency</option>
                  <option>Consultation</option>
                </select>
                <button className="w-full bg-teal-600 text-white font-bold uppercase tracking-widest py-4 hover:bg-teal-700 transition">
                  Confirm Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xl font-light text-teal-800">
            <Sparkles className="w-5 h-5 text-teal-500" />
            PURE<span className="font-bold">DENTAL</span>
          </div>
          <div className="text-slate-400 text-sm">
            &copy; 2024 Pure Dental Studio. All rights reserved.
          </div>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-teal-600">Instagram</a>
            <a href="#" className="hover:text-teal-600">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ClinicDesign3;
