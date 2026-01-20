import React, { useState } from 'react';
import { Calendar, Heart, Shield, Award, Clock, MapPin, Bone, User, Phone, Mail, Star, CheckCircle } from 'lucide-react';

function ClinicDesign8() {
  const [bookingDate, setBookingDate] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFBF0] font-sans text-stone-800">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#FFFBF0]/95 backdrop-blur-sm border-b border-orange-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-orange-600">
             <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🐾</span>
             </div>
             Happy<span className="text-stone-700">Paws</span>
          </div>
          
          <div className="hidden md:flex space-x-8 font-medium text-stone-600">
             <a href="#services" className="hover:text-orange-600 transition">Services</a>
             <a href="#team" className="hover:text-orange-600 transition">Team</a>
             <a href="#about" className="hover:text-orange-600 transition">About</a>
             <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
          </div>

          <div className="flex items-center gap-4">
             <button className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-xl font-bold hover:bg-orange-600 transition shadow-md shadow-orange-200">
                Book Visit
             </button>
             <button className="md:hidden text-stone-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
             </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
           <div className="md:hidden bg-[#FFFBF0] border-t border-orange-100 p-4 space-y-4 shadow-xl">
              <a href="#services" className="block font-medium text-stone-600 hover:text-orange-600">Services</a>
              <a href="#team" className="block font-medium text-stone-600 hover:text-orange-600">Team</a>
              <a href="#about" className="block font-medium text-stone-600 hover:text-orange-600">About</a>
              <a href="#contact" className="block font-medium text-stone-600 hover:text-orange-600">Contact</a>
           </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
         <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative z-10">
               <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-bold">
                  Open 24/7 for Emergencies
               </div>
               <h1 className="text-5xl md:text-6xl font-black text-stone-800 leading-tight">
                  Expert Care for Your <br/>
                  <span className="text-orange-500 underline decoration-wavy decoration-orange-300">Best Friend</span>
               </h1>
               <p className="text-lg text-stone-600 leading-relaxed max-w-md">
                  From routine check-ups to surgical procedures, we treat your pets like family. Compassionate veterinary care you can trust.
               </p>
               <div className="flex gap-4 pt-4">
                  <button className="bg-stone-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-stone-700 transition shadow-xl">
                     Meet Our Vets
                  </button>
                  <button className="bg-white text-stone-800 border-2 border-stone-200 px-8 py-4 rounded-xl font-bold hover:border-orange-400 hover:text-orange-600 transition">
                     Our Services
                  </button>
               </div>
               <div className="flex items-center gap-6 text-sm font-bold text-stone-500 pt-4">
                  <div className="flex items-center gap-2">
                     <CheckCircle className="w-5 h-5 text-green-500" /> Licensed Pros
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckCircle className="w-5 h-5 text-green-500" /> Advanced Lab
                  </div>
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute top-0 right-0 w-full h-full bg-orange-100 rounded-[3rem] -rotate-3 transform scale-95 origin-bottom-right"></div>
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full blur-2xl opacity-50"></div>
               <img 
                  src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&w=1000&q=80" 
                  alt="Happy Dog" 
                  className="relative z-10 rounded-[3rem] w-full h-[500px] object-cover shadow-2xl rotate-2 hover:rotate-0 transition duration-500"
               />
               
               {/* Float Card */}
               <div className="absolute bottom-10 -left-4 bg-white p-4 rounded-2xl shadow-xl z-20 border-b-4 border-orange-400 transform -rotate-2">
                  <div className="flex items-center gap-3">
                     <div className="bg-orange-100 p-2 rounded-full">
                        <Heart className="w-6 h-6 text-orange-500 fill-current" />
                     </div>
                     <div>
                        <div className="font-bold text-stone-800">Happy Patients</div>
                        <div className="text-xs text-stone-500">10,000+ treated</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Services Cards */}
      <section id="services" className="py-20 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-black text-stone-800 mb-4">Complete Pet Care</h2>
               <p className="text-stone-500 max-w-2xl mx-auto">We provide a full range of veterinary services to keep your pets healthy and happy throughout their lives.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
               {[
                  { icon: Heart, title: "Wellness", desc: "Annual exams & prevention", color: "text-red-500 bg-red-50" },
                  { icon: Shield, title: "Vaccines", desc: "Core & lifestyle shots", color: "text-blue-500 bg-blue-50" },
                  { icon: Bone, title: "Surgery", desc: "Spay, neuter & soft tissue", color: "text-stone-500 bg-stone-100" },
                  { icon: Clock, title: "Urgent Care", desc: "Same-day appointments", color: "text-orange-500 bg-orange-50" },
               ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl border-2 border-stone-100 hover:border-orange-200 hover:shadow-xl transition cursor-pointer text-center group bg-white">
                     <div className={`w-16 h-16 mx-auto rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-0`}>
                        <item.icon className="w-8 h-8" />
                     </div>
                     <h3 className="font-bold text-xl text-stone-800 mb-2">{item.title}</h3>
                     <p className="text-stone-500 text-sm">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* About / Team */}
      <section id="team" className="py-24 bg-stone-50">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80" className="rounded-2xl shadow-lg mt-8" alt="Vet 1" />
                  <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=500&q=80" className="rounded-2xl shadow-lg" alt="Vet 2" />
               </div>
               <div className="order-1 lg:order-2 space-y-6">
                  <h2 className="text-4xl font-black text-stone-800">Passionate About Pets, <br/><span className="text-orange-500">Professional in Care</span></h2>
                  <p className="text-stone-600 text-lg leading-relaxed">
                     Our team of licensed veterinarians and certified technicians are dedicated to providing the highest standard of medical care. We understand the special bond you share with your pet.
                  </p>
                  <ul className="space-y-3">
                     {[
                        "Fear-Free Certified Practice",
                        "State-of-the-Art Diagnostic Lab",
                        "Separate Dog & Cat Waiting Areas",
                        "Comfortable Recovery Suites"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 font-bold text-stone-700">
                           <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-orange-500" />
                           </div>
                           {item}
                        </li>
                     ))}
                  </ul>
                  <button className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2 group pt-4">
                     Meet Our Entire Team <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black text-center text-stone-800 mb-16">Pawsitive Reviews</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { text: "They saved my puppy's life when he swallowed a toy. Forever grateful!", author: "Sarah J.", pet: "Owner of Max" },
                  { text: "The staff is so gentle with my anxious cat. Best vet clinic in town.", author: "Mike T.", pet: "Owner of Luna" },
                  { text: "Reasonable prices and they never rush the appointment. Highly recommend.", author: "Emily R.", pet: "Owner of Cooper" }
               ].map((review, i) => (
                  <div key={i} className="bg-[#FFFBF0] p-8 rounded-3xl relative">
                     <div className="flex gap-1 mb-4 text-orange-400">
                        {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                     </div>
                     <p className="text-stone-600 mb-6 italic font-medium">"{review.text}"</p>
                     <div>
                        <div className="font-bold text-stone-800">{review.author}</div>
                        <div className="text-xs text-orange-500 font-bold uppercase">{review.pet}</div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Booking - Warm */}
      <section id="contact" className="py-24 px-6 bg-orange-50 border-t border-orange-100">
         <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-orange-100">
                  <h2 className="text-2xl font-black text-stone-800 mb-6 text-center">Book an Appointment</h2>
                  
                  <div className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="block text-sm font-bold text-stone-500 mb-1">Pet's Name</label>
                           <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition" placeholder="Buddy" />
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-stone-500 mb-1">Your Name</label>
                           <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition" placeholder="John Doe" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-stone-500 mb-1">Contact Number</label>
                        <input type="tel" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition" placeholder="(555) 123-4567" />
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-stone-500 mb-1">Preferred Date</label>
                        <input 
                           type="date" 
                           className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                           value={bookingDate}
                           onChange={(e) => setBookingDate(e.target.value)}
                        />
                     </div>
                     <button className="w-full bg-orange-500 text-white p-4 rounded-xl font-bold hover:bg-orange-600 transition shadow-lg mt-4">
                        Schedule Visit
                     </button>
                  </div>
               </div>
               
               <div className="space-y-8">
                  <h2 className="text-4xl font-black text-stone-800">We're Here <br/>When You Need Us</h2>
                  <p className="text-stone-600 text-lg">
                     Located conveniently in the heart of the city with ample parking.
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                        <div className="bg-orange-100 p-3 rounded-full">
                           <MapPin className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                           <div className="font-bold text-stone-800 text-lg">Visit Us</div>
                           <div className="text-stone-500">123 Puppy Lane, Pet City</div>
                        </div>
                     </div>
                     
                     <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                        <div className="bg-orange-100 p-3 rounded-full">
                           <Phone className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                           <div className="font-bold text-stone-800 text-lg">Call Us</div>
                           <div className="text-stone-500">(555) PAWS-123</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-sm">
         <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-8">
               <span className="text-2xl">🐾</span> HappyPaws
            </div>
            <p className="mb-8">Dedicated to the health and happiness of your pets.</p>
            <div className="flex justify-center gap-6 mb-8">
               <a href="#" className="hover:text-white transition">Privacy Policy</a>
               <a href="#" className="hover:text-white transition">Terms of Service</a>
               <a href="#" className="hover:text-white transition">Careers</a>
            </div>
            <p>© 2025 HappyPaws Veterinary Clinic. All rights reserved.</p>
         </div>
      </footer>
    </div>
  );
}

export default ClinicDesign8;
