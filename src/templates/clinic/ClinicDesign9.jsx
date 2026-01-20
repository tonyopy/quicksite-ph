import React, { useState } from 'react';
import { Calendar, Flower, Heart, User, Sun, Moon, Star, Sparkles, Phone, Mail, MapPin, Check } from 'lucide-react';

function ClinicDesign9() {
  const [bookingDate, setBookingDate] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-purple-50 font-serif text-slate-700">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm border-b border-purple-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl italic text-purple-900">
             <Flower className="w-6 h-6 text-purple-400" />
             Bloom<span className="font-sans font-light text-slate-500">Women's Health</span>
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium text-purple-900/60 font-sans">
             <a href="#services" className="hover:text-purple-900 transition">Services</a>
             <a href="#about" className="hover:text-purple-900 transition">About</a>
             <a href="#care" className="hover:text-purple-900 transition">Our Care</a>
             <a href="#contact" className="hover:text-purple-900 transition">Contact</a>
          </div>

          <div className="flex items-center gap-4">
             <button className="hidden md:block bg-purple-100 text-purple-900 px-6 py-2 rounded-full text-sm font-sans font-medium hover:bg-purple-200 transition">
                Patient Portal
             </button>
             <button className="md:hidden text-purple-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
             </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
           <div className="md:hidden bg-white border-t border-purple-50 p-6 space-y-4 text-center font-sans">
              <a href="#services" className="block text-purple-900 hover:text-purple-600">Services</a>
              <a href="#about" className="block text-purple-900 hover:text-purple-600">About</a>
              <a href="#care" className="block text-purple-900 hover:text-purple-600">Our Care</a>
              <a href="#contact" className="block text-purple-900 hover:text-purple-600">Contact</a>
           </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
         <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <span className="text-purple-600 font-sans text-xs tracking-widest uppercase bg-purple-100 px-3 py-1 rounded-full">Compassionate Care for Every Stage</span>
               <h1 className="text-5xl md:text-6xl text-purple-950 leading-tight">
                  Empowering <br/>
                  <span className="italic text-purple-500">Your Health</span> Journey
               </h1>
               <p className="text-lg text-slate-500 font-sans leading-relaxed max-w-md">
                  From adolescence to menopause, we provide comprehensive, personalized care in a supportive and comfortable environment.
               </p>
               <div className="flex gap-4 pt-4 font-sans">
                  <button className="bg-purple-900 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition shadow-lg shadow-purple-200">
                     Book Appointment
                  </button>
                  <button className="text-purple-900 font-medium px-8 py-3 hover:bg-purple-50 rounded-full transition border border-transparent hover:border-purple-200">
                     Our Services
                  </button>
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-3xl opacity-60 transform scale-90"></div>
               <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80" 
                  alt="Women's Health" 
                  className="relative z-10 rounded-t-[10rem] rounded-b-3xl w-full h-[500px] object-cover shadow-xl grayscale-[20%] sepia-[10%]"
               />
            </div>
         </div>
      </section>

      {/* Services - Soft Cards */}
      <section id="services" className="py-20 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16 font-sans">
               <h2 className="text-3xl font-serif text-purple-950 mb-4">Holistic Women's Healthcare</h2>
               <p className="text-slate-500 max-w-2xl mx-auto">We offer a wide range of services tailored to meet your unique needs at every phase of life.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { icon: Heart, title: "Prenatal Care", desc: "Comprehensive support for you and your baby, from conception to delivery." },
                  { icon: Star, title: "Gynecology", desc: "Routine screenings, preventive care, and specialized treatments." },
                  { icon: Sparkles, title: "Menopause", desc: "Holistic management for a smooth transition and hormonal balance." },
                  { icon: Moon, title: "Fertility", desc: "Compassionate guidance and advanced reproductive technologies." },
                  { icon: Sun, title: "Wellness", desc: "Nutritional counseling, mental health support, and lifestyle medicine." },
                  { icon: Flower, title: "Minimally Invasive Surgery", desc: "Advanced techniques for faster recovery and less pain." },
               ].map((item, i) => (
                  <div key={i} className="bg-purple-50/50 p-8 rounded-[2rem] hover:bg-purple-50 transition duration-300 text-center group border border-transparent hover:border-purple-100">
                     <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-purple-400" />
                     </div>
                     <h3 className="text-xl text-purple-900 mb-3">{item.title}</h3>
                     <p className="text-slate-500 font-sans text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-purple-900 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-800 rounded-full blur-3xl opacity-50 -ml-20 -mb-20"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                     A Sanctuary for <br/> <span className="italic text-purple-300">Healing & Growth</span>
                  </h2>
                  <p className="text-purple-100 text-lg font-sans leading-relaxed">
                     Bloom Women's Health was founded on the belief that healthcare should be empowering. We've created a space where you are heard, respected, and cared for as a whole person.
                  </p>
                  <ul className="space-y-4 font-sans text-purple-100">
                     {[
                        "All-female provider team",
                        "Integrative approach to medicine",
                        "Extended appointment times",
                        "On-site ultrasound & labs"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                           <div className="w-6 h-6 rounded-full bg-purple-800 flex items-center justify-center border border-purple-600">
                              <Check className="w-3 h-3 text-purple-300" />
                           </div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="relative">
                  <img 
                     src="https://images.unsplash.com/photo-1551847623-7226c36131c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Women talking" 
                     className="rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl shadow-2xl w-full object-cover h-[500px] grayscale-[20%] opacity-90"
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section id="care" className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif text-center text-purple-950 mb-16">Stories of Care</h2>
            <div className="grid md:grid-cols-3 gap-8 font-sans">
               {[
                  { text: "Dr. Lee made me feel so comfortable during my pregnancy. I couldn't have asked for better support.", author: "Rachel G." },
                  { text: "Finally a clinic that listens to my concerns instead of dismissing them. Truly refreshing.", author: "Amanda B." },
                  { text: "The environment is so calming, it doesn't even feel like a doctor's office.", author: "Sophia L." }
               ].map((review, i) => (
                  <div key={i} className="bg-purple-50 p-8 rounded-3xl relative">
                     <div className="absolute -top-4 left-8 text-6xl text-purple-200 font-serif leading-none">"</div>
                     <p className="text-slate-600 mb-6 italic relative z-10 pt-4">"{review.text}"</p>
                     <div className="font-bold text-purple-900">— {review.author}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Booking - Gentle */}
      <section id="contact" className="py-24 px-6 bg-purple-100/30">
         <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-purple-50">
                  <h2 className="text-2xl text-purple-950 mb-6 font-serif">Request an Appointment</h2>
                  
                  <div className="space-y-4 font-sans">
                     <div>
                        <label className="block text-xs font-bold text-purple-300 uppercase mb-2">Name</label>
                        <input type="text" className="w-full bg-purple-50/50 border-none rounded-xl p-4 text-purple-900 outline-none focus:ring-2 focus:ring-purple-100" placeholder="Your Name" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-purple-300 uppercase mb-2">Email</label>
                        <input type="email" className="w-full bg-purple-50/50 border-none rounded-xl p-4 text-purple-900 outline-none focus:ring-2 focus:ring-purple-100" placeholder="email@example.com" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-purple-300 uppercase mb-2">Preferred Date</label>
                        <input 
                           type="date" 
                           className="w-full bg-purple-50/50 border-none rounded-xl p-4 text-purple-900 outline-none focus:ring-2 focus:ring-purple-100"
                           value={bookingDate}
                           onChange={(e) => setBookingDate(e.target.value)}
                        />
                     </div>
                     <button className="w-full bg-purple-400 text-white px-10 py-4 rounded-xl font-medium hover:bg-purple-500 transition shadow-md mt-4">
                        Send Request
                     </button>
                  </div>
               </div>

               <div className="space-y-8 font-sans">
                  <div>
                     <h2 className="text-3xl font-serif text-purple-950 mb-4">Visit Us</h2>
                     <p className="text-slate-500">We are located in the quiet Garden District, offering plenty of privacy and serene surroundings.</p>
                  </div>
                  
                  <div className="space-y-6">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-purple-400">
                           <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="font-bold text-purple-900">Address</div>
                           <div className="text-slate-500 text-sm">456 Lavender Lane, Suite 200</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-purple-400">
                           <Phone className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="font-bold text-purple-900">Phone</div>
                           <div className="text-slate-500 text-sm">(555) 234-5678</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-purple-400">
                           <Mail className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="font-bold text-purple-900">Email</div>
                           <div className="text-slate-500 text-sm">care@bloomhealth.com</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-purple-50 py-12 font-sans text-sm text-slate-500">
         <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl italic text-purple-900 mb-8">
               <Flower className="w-6 h-6 text-purple-400" />
               Bloom
            </div>
            <p className="mb-8">Empowering women through every season of life.</p>
            <div className="flex justify-center gap-8 mb-8">
               <a href="#" className="hover:text-purple-600 transition">Patient Resources</a>
               <a href="#" className="hover:text-purple-600 transition">Privacy Policy</a>
               <a href="#" className="hover:text-purple-600 transition">Contact Us</a>
            </div>
            <p>© 2025 Bloom Women's Health. All rights reserved.</p>
         </div>
      </footer>
    </div>
  );
}

export default ClinicDesign9;
