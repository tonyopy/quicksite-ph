import React, { useState } from 'react';
import { Smile, Heart, Star, Phone, MapPin, Clock, Calendar, CheckCircle, Menu, X, Mail, Baby, Stethoscope } from 'lucide-react';

function ClinicDesign2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-yellow-50 font-sans text-slate-800">
      
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white z-50 shadow-sm border-b border-yellow-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-black text-orange-500 tracking-tight">
            <Smile className="w-8 h-8 text-yellow-400 fill-current" />
            Little<span className="text-blue-400">Smiles</span>
          </div>
          
          <div className="hidden md:flex space-x-8 font-bold text-slate-600">
            <a href="#services" className="hover:text-orange-500 transition">Services</a>
            <a href="#doctors" className="hover:text-orange-500 transition">Our Team</a>
            <a href="#parents" className="hover:text-orange-500 transition">Parents Info</a>
            <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          </div>
          <a href="#book" className="hidden md:block px-6 py-2.5 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition shadow-md transform hover:scale-105">
            Book Visit
          </a>

          <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-yellow-100 py-4 px-6 space-y-4">
            <a href="#services" className="block text-slate-600 font-bold" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#doctors" className="block text-slate-600 font-bold" onClick={() => setIsMenuOpen(false)}>Our Team</a>
            <a href="#contact" className="block text-slate-600 font-bold" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#book" className="block w-full text-center px-6 py-2.5 bg-orange-500 text-white rounded-full font-bold" onClick={() => setIsMenuOpen(false)}>
              Book Visit
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm text-sm font-bold text-orange-500 mb-2 transform -rotate-2">
              👋 Hi! Welcome to the happiest clinic in town!
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
              Caring for Your <br />
              <span className="text-blue-500">Little Superheroes</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              We make doctor visits fun! Specialized pediatric care in a warm, friendly, and ouch-free environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="px-8 py-4 bg-orange-500 text-white rounded-full font-bold text-center hover:bg-orange-600 transition shadow-lg hover:-translate-y-1">
                Schedule Checkup
              </a>
              <a href="#services" className="px-8 py-4 bg-white text-slate-700 border-2 border-orange-100 rounded-full font-bold text-center hover:bg-orange-50 transition">
                Explore Services
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-yellow-50 bg-gray-200 overflow-hidden">
                    <img src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`} alt="Parent" />
                  </div>
                ))}
              </div>
              <div className="font-bold text-slate-600">
                Trusted by 5,000+ <br/> Happy Parents
              </div>
            </div>
          </div>
          
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Happy Kid with Doctor" 
               className="rounded-3xl shadow-2xl relative z-10 w-full object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white"
             />
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border-b-8 border-blue-400">
                <div className="flex items-center gap-4">
                   <div className="bg-yellow-100 p-3 rounded-full">
                      <Smile className="w-8 h-8 text-yellow-600" />
                   </div>
                   <div>
                      <div className="font-black text-2xl text-slate-900">100%</div>
                      <div className="font-bold text-slate-500">Ouch-Free Promise</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-black text-blue-500 uppercase tracking-wider mb-2">What We Do</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-4">Healthy Kids, Happy Families</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Baby, color: "blue", title: "Newborn Care", desc: "Gentle checkups and guidance for your newest family member." },
              { icon: Stethoscope, color: "orange", title: "General Checkups", desc: "Routine wellness visits to track growth and milestones." },
              { icon: Shield, color: "green", title: "Vaccinations", desc: "Safe and quick shots to keep your child protected." },
              { icon: Heart, color: "pink", title: "Sick Visits", desc: "Same-day appointments when your little one isn't feeling well." },
              { icon: Star, color: "yellow", title: "Development", desc: "Monitoring behavioral and physical development stages." },
              { icon: Smile, color: "purple", title: "Dental Health", desc: "Basic oral hygiene checks and fluoride treatments." }
            ].map((service, index) => (
              <div key={index} className={`p-8 rounded-3xl bg-${service.color}-50 hover:shadow-xl transition-all border-2 border-transparent hover:border-${service.color}-200 group`}>
                <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 text-${service.color}-500`} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Fun Facts */}
      <section id="about" className="py-24 bg-blue-500 text-white relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-4xl lg:text-5xl font-black mb-6">Not Your Average Doctor's Office</h2>
               <p className="text-blue-100 text-lg mb-8 font-medium">
                 We believe healing starts with a smile. Our clinic is designed to be a playground for health, where kids feel safe, heard, and happy.
               </p>
               <ul className="space-y-4 font-bold text-lg">
                 <li className="flex items-center gap-3">
                   <div className="bg-white/20 p-1 rounded-full"><CheckCircle className="w-5 h-5" /></div>
                   <span>Colorful, toy-filled waiting rooms</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="bg-white/20 p-1 rounded-full"><CheckCircle className="w-5 h-5" /></div>
                   <span>Stickers and brave-badges for everyone</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="bg-white/20 p-1 rounded-full"><CheckCircle className="w-5 h-5" /></div>
                   <span>Friendly doctors who speak "kid"</span>
                 </li>
               </ul>
             </div>
             <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="rounded-2xl shadow-lg transform translate-y-8" alt="Kid Playing" />
               <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="rounded-2xl shadow-lg transform -translate-y-8" alt="Doctor Smiling" />
             </div>
           </div>
         </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-orange-50 rounded-3xl p-8 md:p-16 border-2 border-orange-100">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-black text-slate-900 mb-4">Join the Little Smiles Family</h2>
              <p className="text-slate-600 mb-8 font-medium">Ready for a checkup? Fill out the form below and we'll get back to you faster than a speeding toddler!</p>
              
              <form className="bg-white p-8 rounded-2xl shadow-lg text-left">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Parent's Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-orange-400 outline-none font-medium" placeholder="Mom or Dad" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Child's Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-orange-400 outline-none font-medium" placeholder="Future Superhero" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-orange-400 outline-none font-medium" placeholder="(555) 123-4567" />
                </div>
                <button className="w-full bg-blue-500 text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition shadow-lg transform hover:scale-[1.02]">
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-2xl font-black text-white mb-8">
            <Smile className="w-8 h-8 text-yellow-400 fill-current" />
            Little<span className="text-blue-400">Smiles</span>
          </div>
          <p className="font-medium">Making the world healthier, one giggle at a time.</p>
          <div className="mt-8 text-sm opacity-50">
            &copy; 2024 Little Smiles Pediatric Clinic.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ClinicDesign2;
