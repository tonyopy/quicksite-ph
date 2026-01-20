import React, { useState } from 'react';
import { Calendar, AlertCircle, Clock, MapPin, Phone, Activity, Stethoscope, Heart, User, Shield, CheckCircle, Star, ArrowRight } from 'lucide-react';

function ClinicDesign10() {
  const [bookingDate, setBookingDate] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Banner */}
      <div className="bg-red-600 text-white py-3 px-6 text-center font-bold text-sm tracking-wide uppercase animate-pulse">
        Wait times currently under 15 minutes
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white shadow-md border-b-4 border-red-600">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-black text-slate-900 italic">
             <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded transform -skew-x-12">
                <Activity className="w-6 h-6" />
             </div>
             RAPID<span className="text-red-600">CARE</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-bold text-slate-700 uppercase tracking-tight">
             <a href="#checkin" className="hover:text-red-600 transition">Check In</a>
             <a href="#services" className="hover:text-red-600 transition">Services</a>
             <a href="#locations" className="hover:text-red-600 transition">Locations</a>
          </div>

          <div className="flex items-center gap-6">
             <div className="hidden lg:flex items-center gap-2 font-bold text-slate-700">
                <Phone className="w-5 h-5 text-red-600" /> 911-URGENT
             </div>
             <button className="bg-slate-900 text-white px-6 py-2 rounded font-bold hover:bg-slate-800 transition">
                Check In Now
             </button>
             <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
             </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
           <div className="md:hidden bg-white border-t border-slate-200 p-4 space-y-4 font-bold uppercase tracking-tight">
              <a href="#checkin" className="block text-slate-900 hover:text-red-600">Check In</a>
              <a href="#services" className="block text-slate-900 hover:text-red-600">Services</a>
              <a href="#locations" className="block text-slate-900 hover:text-red-600">Locations</a>
              <div className="flex items-center gap-2 text-red-600 py-2">
                 <Phone className="w-5 h-5" /> 911-URGENT
              </div>
           </div>
        )}
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 bg-white">
         <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-none tracking-tight">
                  URGENT CARE <br/>
                  <span className="text-red-600">WHEN IT MATTERS</span>
               </h1>
               <p className="text-xl text-slate-600 font-medium max-w-md">
                  Walk-ins welcome. Open 7 days a week, 8am - 10pm. Professional medical care without the ER wait.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button className="bg-red-600 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-red-700 transition shadow-lg">
                     Get In Line Online
                  </button>
                  <button className="border-2 border-slate-900 text-slate-900 px-8 py-4 font-bold uppercase tracking-wider hover:bg-slate-900 hover:text-white transition">
                     View Services
                  </button>
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-slate-100 transform rotate-3 rounded-xl"></div>
               <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80" 
                  alt="Urgent Care" 
                  className="relative z-10 w-full h-[400px] object-cover rounded-xl shadow-2xl border-4 border-white"
               />
               <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-xl z-20">
                  <div className="text-xs font-bold uppercase opacity-80 mb-1">Current Wait Time</div>
                  <div className="text-4xl font-black">12 MIN</div>
               </div>
            </div>
         </div>
      </section>

      {/* Stats/Services Strip */}
      <section className="py-16 bg-slate-900 text-white">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {[
                  { icon: Clock, label: "Fast Service", val: "No Appt Needed" },
                  { icon: Shield, label: "Insurance", val: "Most Accepted" },
                  { icon: Stethoscope, label: "Expert Staff", val: "Board Certified" },
                  { icon: MapPin, label: "Locations", val: "5 Nearby" },
               ].map((item, i) => (
                  <div key={i} className="border-r border-slate-800 last:border-0">
                     <item.icon className="w-8 h-8 mx-auto mb-4 text-red-500" />
                     <div className="text-xl font-bold">{item.val}</div>
                     <div className="text-sm text-slate-400 uppercase tracking-wide mt-1">{item.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Quick Check-in */}
      <section id="checkin" className="py-24 px-6 bg-slate-100">
         <div className="container mx-auto max-w-2xl">
            <div className="bg-white p-10 shadow-2xl border-t-8 border-red-600 relative">
               <div className="absolute top-0 right-0 bg-slate-100 px-4 py-2 font-bold text-xs uppercase tracking-wide rounded-bl-lg text-slate-500">Fast Pass</div>
               <div className="flex items-center gap-4 mb-8">
                  <div className="bg-red-100 p-3 rounded-full">
                     <AlertCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                     <h2 className="text-2xl font-bold text-slate-900">Reserve Your Spot</h2>
                     <p className="text-slate-500">Secure your place in line before you arrive.</p>
                  </div>
               </div>
               
               <div className="space-y-4">
                  <div>
                     <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Reason for Visit</label>
                     <select className="w-full bg-slate-50 border border-slate-200 p-3 font-bold text-slate-700 outline-none focus:border-red-600">
                        <option>Illness (Flu, Cold, Fever)</option>
                        <option>Injury (Sprain, Cut, Burn)</option>
                        <option>Physical / Occupational Health</option>
                        <option>X-Ray / Lab Work</option>
                     </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1">First Name</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 font-bold text-slate-700 outline-none focus:border-red-600" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Phone</label>
                        <input type="tel" className="w-full bg-slate-50 border border-slate-200 p-3 font-bold text-slate-700 outline-none focus:border-red-600" />
                     </div>
                  </div>
                  <button className="w-full bg-red-600 text-white p-4 font-bold uppercase tracking-widest hover:bg-red-700 transition mt-4">
                     Confirm Check-In
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Our Services</h2>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Complete Medical Solutions</h3>
            <p className="text-slate-600 font-medium">From routine check-ups to specialized treatments, we provide a wide range of healthcare services.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Cardiology", desc: "Expert heart care including diagnostics, treatment, and preventive cardiology." },
              { icon: Activity, title: "General Medicine", desc: "Comprehensive primary care for all ages, managing acute and chronic conditions." },
              { icon: User, title: "Pediatrics", desc: "Specialized healthcare for infants, children, and adolescents." },
              { icon: Shield, title: "Immunization", desc: "Complete vaccination programs for children and adults." },
              { icon: CheckCircle, title: "Lab Services", desc: "State-of-the-art laboratory for accurate and timely diagnostic results." },
              { icon: Star, title: "Specialist Care", desc: "Access to a wide network of specialists across various medical fields." }
            ].map((service, index) => (
              <div key={index} className="p-8 bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors transform group-hover:-rotate-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations / Contact */}
      <section id="locations" className="py-24 bg-slate-900 text-white border-t border-slate-800">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
               <div>
                  <h2 className="text-3xl font-black uppercase mb-8">Our Locations</h2>
                  <div className="space-y-6">
                     {[
                        { name: "Downtown Center", addr: "100 Main St", status: "Open Now", time: "8am - 10pm" },
                        { name: "Westside Clinic", addr: "4500 Western Ave", status: "Open Now", time: "8am - 10pm" },
                        { name: "North Hills", addr: "8800 Northern Blvd", status: "Closing Soon", time: "8am - 8pm" }
                     ].map((loc, i) => (
                        <div key={i} className="flex justify-between items-center p-6 bg-slate-800 border border-slate-700 hover:border-red-600 transition group cursor-pointer">
                           <div>
                              <div className="font-bold text-lg group-hover:text-red-500 transition">{loc.name}</div>
                              <div className="text-slate-400 text-sm">{loc.addr}</div>
                           </div>
                           <div className="text-right">
                              <div className="font-bold text-green-400 text-sm uppercase">{loc.status}</div>
                              <div className="text-slate-500 text-xs">{loc.time}</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="bg-red-600 p-10 text-center flex flex-col justify-center">
                  <h3 className="text-2xl font-black uppercase mb-4">Need Help?</h3>
                  <p className="mb-8 font-medium opacity-90">Our nursing staff is available 24/7 to answer your questions.</p>
                  <div className="text-4xl font-black mb-2">911-URGENT</div>
                  <div className="text-sm uppercase tracking-widest opacity-75">Medical Hotline</div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-600 py-12 text-xs font-bold uppercase tracking-widest text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-2xl font-black text-white italic mb-8">
             RAPID<span className="text-red-600">CARE</span>
          </div>
          <p className="mb-8">Fast, Affordable, Quality Healthcare.</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Patient Rights</a>
          </div>
          <div>
            &copy; 2025 RapidCare Urgent Care. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ClinicDesign10;
