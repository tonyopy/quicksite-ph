import React, { useState } from 'react';
import { Calendar, Eye, Glasses, Sun, Search, ArrowRight, Shield, Zap, MapPin, Phone, Mail, Star, Clock, User } from 'lucide-react';

function ClinicDesign6() {
  const [bookingDate, setBookingDate] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-blue-900 flex items-center gap-2">
            <Eye className="w-8 h-8 text-blue-600" />
            VISION<span className="font-light">PLUS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#frames" className="hover:text-blue-600 transition">Frames</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#reviews" className="hover:text-blue-600 transition">Reviews</a>
          </div>

          <button className="hidden md:block bg-blue-900 text-white px-6 py-2 rounded-sm font-semibold hover:bg-blue-800 transition">
            Book Exam
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6 space-y-4">
            <a href="#services" className="block text-slate-600 hover:text-blue-600 font-medium">Services</a>
            <a href="#frames" className="block text-slate-600 hover:text-blue-600 font-medium">Frames</a>
            <a href="#about" className="block text-slate-600 hover:text-blue-600 font-medium">About</a>
            <a href="#reviews" className="block text-slate-600 hover:text-blue-600 font-medium">Reviews</a>
            <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-sm font-semibold">
              Book Exam
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-slate-50">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-blue-950">
              See the World <br/>
              <span className="text-blue-600">Clearly</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-md border-l-4 border-blue-600 pl-4">
              Advanced eye care technology combined with designer eyewear. Precision diagnostics for your perfect vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <button className="bg-blue-600 text-white px-8 py-4 font-bold hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-2">
                  Schedule Exam <Calendar className="w-5 h-5" />
               </button>
               <button className="border-2 border-slate-300 text-slate-600 px-8 py-4 font-bold hover:border-slate-800 hover:text-slate-900 transition flex items-center justify-center gap-2">
                  Shop Frames <Glasses className="w-5 h-5" />
               </button>
            </div>
            <div className="flex items-center gap-6 text-sm font-medium text-slate-500 pt-4">
               <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" /> Insurance Accepted
               </div>
               <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-600" /> 5-Star Rated
               </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl transform scale-90"></div>
             <img 
               src="https://images.unsplash.com/photo-1570222094114-28a9d88a2d64?auto=format&fit=crop&w=1000&q=80" 
               alt="Eye Exam" 
               className="relative z-10 rounded-lg shadow-2xl w-full object-cover grayscale-[20%] aspect-[4/3]"
             />
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl z-20 hidden md:block border-t-4 border-blue-600">
                <div className="text-4xl font-bold text-blue-900">20/20</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Vision Guaranteed</div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid - High Contrast */}
      <section id="services" className="py-24 bg-blue-950 text-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive Eye Care</h2>
               <p className="text-blue-200 max-w-2xl mx-auto">We use state-of-the-art technology to ensure the health of your eyes and the quality of your vision.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-blue-900 border border-blue-900">
               {[
                  { icon: Glasses, title: "Designer Frames", desc: "Curated collection of Ray-Ban, Oakley, Gucci & more." },
                  { icon: Zap, title: "LASIK Consultation", desc: "Determine if you're a candidate for vision correction." },
                  { icon: Search, title: "Comprehensive Exams", desc: "Full digital retinal imaging included with every exam." },
                  { icon: Sun, title: "Contact Lenses", desc: "Fittings for astigmatism, multifocal, and daily wear." },
                  { icon: Shield, title: "Eye Disease Management", desc: "Treatment for glaucoma, cataracts, and dry eye." },
                  { icon: User, title: "Pediatric Eye Care", desc: "Specialized testing and frames for children." },
               ].map((item, i) => (
                  <div key={i} className="bg-blue-950 p-10 hover:bg-blue-900 transition duration-300 group">
                     <item.icon className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                     <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                     <p className="text-blue-200 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* About / Doctor Section */}
      <section id="about" className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-slate-100 rounded-full z-0"></div>
                  <img 
                     src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Optometrist" 
                     className="relative z-10 w-full h-[600px] object-cover rounded-sm shadow-2xl grayscale-[10%]"
                  />
               </div>
               <div className="order-1 lg:order-2 space-y-8">
                  <h2 className="text-4xl font-bold text-blue-950">Expert Care, <br/>Personal Touch</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                     Dr. Sarah Chen founded VisionPlus with a simple mission: to provide the most thorough eye care experience possible. With over 15 years of clinical experience, she specializes in difficult-to-fit contact lenses and ocular disease management.
                  </p>
                  <div className="space-y-4">
                     <div className="flex items-center gap-4 p-4 bg-slate-50 border-l-4 border-blue-600">
                        <div className="font-bold text-blue-900">Education</div>
                        <div className="text-slate-600">Doctor of Optometry, UC Berkeley</div>
                     </div>
                     <div className="flex items-center gap-4 p-4 bg-slate-50 border-l-4 border-blue-600">
                        <div className="font-bold text-blue-900">Specialty</div>
                        <div className="text-slate-600">Glaucoma & Dry Eye Therapy</div>
                     </div>
                  </div>
                  <button className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2 group">
                     Meet the whole team <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-slate-50">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-blue-950 mb-16">Patient Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { text: "I've never had such a thorough eye exam. Dr. Chen explained everything clearly.", author: "Michael R." },
                  { text: "The selection of frames is incredible. Found the perfect pair in minutes!", author: "Jessica T." },
                  { text: "State of the art equipment and a beautiful office. Highly recommended.", author: "David L." }
               ].map((review, i) => (
                  <div key={i} className="bg-white p-8 shadow-sm border-t-4 border-blue-600">
                     <div className="flex gap-1 mb-4 text-blue-400">
                        {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                     </div>
                     <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                     <div className="font-bold text-blue-950">— {review.author}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Booking Form - Clean */}
      <section className="py-24 bg-white border-t border-slate-100">
         <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-blue-950">Book Your Visit</h2>
               <p className="text-slate-500 mt-2">Choose a time that works for you.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-end">
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
                  <input 
                     type="date" 
                     className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-800 font-medium focus:border-blue-600 outline-none transition"
                     value={bookingDate}
                     onChange={(e) => setBookingDate(e.target.value)}
                  />
               </div>
               <button className="w-full bg-blue-600 text-white p-4 font-bold hover:bg-blue-700 transition shadow-lg flex justify-center items-center gap-2">
                  Find Appointment <ArrowRight className="w-5 h-5" />
               </button>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-16">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
               <div className="col-span-1 md:col-span-2">
                  <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 mb-6">
                     <Eye className="w-8 h-8 text-blue-400" />
                     VISION<span className="font-light">PLUS</span>
                  </div>
                  <p className="text-blue-200 max-w-sm leading-relaxed">
                     Your vision is our passion. We provide comprehensive eye care services using the latest technology in a comfortable, professional environment.
                  </p>
               </div>
               <div>
                  <h4 className="font-bold text-lg mb-6">Contact</h4>
                  <ul className="space-y-4 text-blue-200">
                     <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-blue-400" /> (555) 123-4567</li>
                     <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-blue-400" /> hello@visionplus.com</li>
                     <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-blue-400" /> 123 Optical Blvd, Suite 100</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-lg mb-6">Hours</h4>
                  <ul className="space-y-4 text-blue-200">
                     <li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 - 6:00</span></li>
                     <li className="flex justify-between"><span>Saturday</span> <span>10:00 - 4:00</span></li>
                     <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                  </ul>
               </div>
            </div>
            <div className="pt-8 border-t border-blue-900 text-center text-blue-400 text-sm">
               <p>© 2025 VisionPlus. Focus on what matters.</p>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default ClinicDesign6;
