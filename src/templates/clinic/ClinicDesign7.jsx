import React, { useState } from 'react';
import { Calendar, Activity, Zap, Shield, User, Move, ArrowUp, Check, Star, Phone, Mail, MapPin, Clock } from 'lucide-react';

function ClinicDesign7() {
  const [bookingDate, setBookingDate] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-900 text-white border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-widest uppercase flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-500" />
            Align<span className="text-blue-500">Spine</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
             <a href="#services" className="hover:text-blue-500 transition">Services</a>
             <a href="#about" className="hover:text-blue-500 transition">About</a>
             <a href="#results" className="hover:text-blue-500 transition">Results</a>
             <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>

          <div className="flex items-center gap-4">
             <button className="hidden md:block border border-white px-6 py-2 text-sm font-bold uppercase hover:bg-white hover:text-slate-900 transition duration-300">
               New Patient Offer
             </button>
             <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
             </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
           <div className="md:hidden bg-slate-800 p-6 space-y-4 text-center">
              <a href="#services" className="block text-sm font-bold uppercase tracking-wider hover:text-blue-500">Services</a>
              <a href="#about" className="block text-sm font-bold uppercase tracking-wider hover:text-blue-500">About</a>
              <a href="#results" className="block text-sm font-bold uppercase tracking-wider hover:text-blue-500">Results</a>
              <a href="#contact" className="block text-sm font-bold uppercase tracking-wider hover:text-blue-500">Contact</a>
           </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-slate-200">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black uppercase leading-none text-slate-800">
              Restore <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Function</span> <br/>
              Live Pain Free
            </h1>
            <p className="text-lg text-slate-600 font-medium max-w-md">
              Corrective chiropractic care specializing in spinal alignment, injury recovery, and performance optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <button className="bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-blue-700 transition shadow-xl">
                  Start Recovery
               </button>
               <button className="border-2 border-slate-900 text-slate-900 px-8 py-4 font-bold uppercase tracking-wider hover:bg-slate-900 hover:text-white transition">
                  Learn More
               </button>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 border-4 border-slate-900 translate-x-4 translate-y-4"></div>
             <img 
               src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80" 
               alt="Spine Adjustment" 
               className="relative z-10 w-full h-[500px] object-cover grayscale contrast-125"
             />
          </div>
        </div>
      </section>

      {/* Services - Structural Grid */}
      <section id="services" className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
               <h2 className="text-3xl font-black uppercase text-slate-900 mb-4">Our Methodology</h2>
               <p className="text-slate-500 font-medium">We don't just treat symptoms. We correct the structural cause of your pain to ensure long-term relief and stability.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { icon: Move, title: "Spinal Adjustment", desc: "Precision realignment techniques to restore joint mobility and reduce nerve interference." },
                  { icon: Zap, title: "Massage Therapy", desc: "Deep tissue and myofascial release to break down scar tissue and improve circulation." },
                  { icon: Activity, title: "Rehab Exercise", desc: "Customized strengthening protocols to stabilize the spine and prevent future injury." },
                  { icon: Shield, title: "Decompression", desc: "Non-surgical therapy for herniated discs, sciatica, and degenerative disc disease." },
                  { icon: User, title: "Performance Care", desc: "Optimizing biomechanics for athletes to enhance power, flexibility, and recovery." },
                  { icon: ArrowUp, title: "Posture Correction", desc: "Structural remodeling to fix forward head posture and spinal curvature." },
               ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6 py-4 hover:bg-slate-50 transition duration-300 group">
                     <item.icon className="w-8 h-8 text-slate-400 mb-4 group-hover:text-blue-600 transition-colors" />
                     <h3 className="text-xl font-black uppercase text-slate-800 mb-2">{item.title}</h3>
                     <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900 text-white">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 transform -rotate-3"></div>
                  <img 
                     src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Chiropractor" 
                     className="relative z-10 w-full h-[500px] object-cover grayscale contrast-125"
                  />
               </div>
               <div className="space-y-8">
                  <h2 className="text-4xl font-black uppercase">Built on Science. <br/>Driven by Results.</h2>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium">
                     At AlignSpine, we take a structural approach to healthcare. Unlike traditional medicine which often relies on drugs to mask pain, we focus on the relationship between the spine and the nervous system.
                  </p>
                  <ul className="space-y-4">
                     {[
                        "Digital X-Ray Analysis",
                        "Comprehensive Neurological Exam",
                        "Customized Care Plans",
                        "Objective Progress Tracking"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-lg font-bold">
                           <div className="w-8 h-8 bg-blue-600 flex items-center justify-center">
                              <Check className="w-5 h-5 text-white" />
                           </div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section id="results" className="py-24 bg-slate-100">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black uppercase text-center mb-16">Patient Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { text: "I suffered from migraines for 10 years. After 3 months of care, they are completely gone.", author: "James D." },
                  { text: "I can finally lift my grandkids without lower back pain. AlignSpine gave me my life back.", author: "Margaret S." },
                  { text: "As a runner, regular adjustments have improved my times and kept me injury-free.", author: "Tom W." }
               ].map((review, i) => (
                  <div key={i} className="bg-white p-8 border border-slate-200 shadow-sm relative">
                     <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                     <div className="flex gap-1 mb-6 text-blue-600">
                        {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                     </div>
                     <p className="text-slate-700 font-medium mb-6">"{review.text}"</p>
                     <div className="font-bold text-slate-900 uppercase tracking-wide text-sm">- {review.author}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Booking - Bold */}
      <section id="contact" className="py-24 bg-slate-900 text-white border-t border-slate-800">
         <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
               <div>
                  <h2 className="text-4xl font-black uppercase mb-6">Visit Our Clinic</h2>
                  <p className="text-slate-400 mb-8 font-medium">
                     Stop living with pain. Schedule your consultation today and take the first step towards better health.
                  </p>
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                        <div>
                           <div className="font-bold uppercase tracking-wider">Location</div>
                           <div className="text-slate-400">888 Spine Blvd, Suite A<br/>Metro City, ST 12345</div>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-blue-500 mt-1" />
                        <div>
                           <div className="font-bold uppercase tracking-wider">Phone</div>
                           <div className="text-slate-400">(555) 987-6543</div>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-blue-500 mt-1" />
                        <div>
                           <div className="font-bold uppercase tracking-wider">Hours</div>
                           <div className="text-slate-400">
                              Mon-Thu: 8am - 6pm<br/>
                              Fri: 8am - 12pm
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="bg-slate-800 p-8 border border-slate-700">
                  <h3 className="text-2xl font-black uppercase mb-6">Request Appointment</h3>
                  <div className="space-y-4">
                     <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Full Name</label>
                        <input type="text" className="w-full bg-slate-900 border border-slate-600 p-4 text-white font-bold outline-none focus:border-blue-500 transition" placeholder="ENTER NAME" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Phone</label>
                        <input type="tel" className="w-full bg-slate-900 border border-slate-600 p-4 text-white font-bold outline-none focus:border-blue-500 transition" placeholder="(555) 000-0000" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Preferred Date</label>
                        <input 
                           type="date" 
                           className="w-full bg-slate-900 border border-slate-600 p-4 text-white font-bold outline-none focus:border-blue-500 transition"
                           value={bookingDate}
                           onChange={(e) => setBookingDate(e.target.value)}
                        />
                     </div>
                     <button className="w-full bg-blue-600 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-blue-500 transition mt-4">
                        Confirm Request
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <footer className="py-12 text-center bg-slate-950 text-slate-600 text-xs font-bold uppercase tracking-widest border-t border-slate-900">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
               <p>© 2025 AlignSpine. Strength in Structure.</p>
               <div className="flex gap-6">
                  <a href="#" className="hover:text-blue-500 transition">Privacy</a>
                  <a href="#" className="hover:text-blue-500 transition">Terms</a>
                  <a href="#" className="hover:text-blue-500 transition">Sitemap</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default ClinicDesign7;
