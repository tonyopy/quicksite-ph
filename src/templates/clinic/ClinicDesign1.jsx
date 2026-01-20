import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Star, Shield, Activity, Heart, User, CheckCircle, ArrowRight, Menu, X, Mail } from 'lucide-react';

function ClinicDesign1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 px-6 text-sm hidden md:flex justify-between items-center">
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> (02) 8888-1234</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon - Sat: 8:00 AM - 6:00 PM</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-200">Patient Portal</a>
          <a href="#" className="hover:text-blue-200">Careers</a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white z-50 shadow-sm border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-blue-900">
            <Activity className="w-8 h-8 text-blue-600" />
            Medi<span className="text-blue-600">Care</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#doctors" className="hover:text-blue-600 transition">Doctors</a>
            <a href="#about" className="hover:text-blue-600 transition">About Us</a>
            <a href="#testimonials" className="hover:text-blue-600 transition">Reviews</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
          <a href="#book" className="hidden md:block px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-md">
            Book Appointment
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6 space-y-4">
            <a href="#services" className="block text-slate-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#doctors" className="block text-slate-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Doctors</a>
            <a href="#about" className="block text-slate-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#testimonials" className="block text-slate-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="block text-slate-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#book" className="block w-full text-center px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-md" onClick={() => setIsMenuOpen(false)}>
              Book Appointment
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              <Shield className="w-4 h-4" /> Accredited & Trusted Healthcare
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Your Health is Our <br />
              <span className="text-blue-600">Top Priority</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Comprehensive medical care for you and your family. Experienced specialists, modern facilities, and compassionate service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-center hover:bg-blue-700 transition shadow-lg">
                Find a Doctor
              </a>
              <a href="#services" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold text-center hover:bg-slate-50 transition">
                Our Services
              </a>
            </div>
            <div className="pt-6 flex items-center gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> 15+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> 24/7 Emergency Support
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
             <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-30"></div>
             <img 
               src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
               alt="Doctor with Patient" 
               className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
             />
             {/* Float Card */}
             <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl z-20 hidden md:block border-l-4 border-blue-600">
                <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-full">
                      <Star className="w-6 h-6 text-green-600 fill-current" />
                   </div>
                   <div>
                      <div className="font-bold text-slate-900">4.9/5 Rating</div>
                      <div className="text-xs text-slate-500">Based on 2,000+ reviews</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Our Services</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Complete Medical Solutions</h3>
            <p className="text-slate-600">From routine check-ups to specialized treatments, we provide a wide range of healthcare services.</p>
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
              <div key={index} className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Medical Team" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-slate-900 p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-blue-600 mb-1">20+</div>
                <div className="font-bold">Years Serving</div>
                <div className="text-sm text-slate-500">The Community</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Committed to Excellence in Healthcare</h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Founded in 2003, Medicare has grown from a small clinic to a leading multi-specialty center. We believe in a patient-first approach, ensuring that every individual receives personalized care.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>State-of-the-art medical technology</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Highly qualified team of doctors and nurses</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Comfortable and hygienic environment</span>
                </li>
              </ul>
              <div className="mt-10">
                <a href="#doctors" className="inline-flex items-center gap-2 font-bold hover:text-blue-200 transition">
                  Meet Our Team <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">What Our Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "The doctors here are incredibly attentive and kind. They really took the time to explain my treatment options.", name: "Maria Santos", role: "Patient" },
              { text: "Clean facilities and very professional staff. I felt safe and well-cared for during my entire visit.", name: "John Reyes", role: "Patient" },
              { text: "Highly recommend for pediatric care. My kids actually enjoy going to the doctor now!", name: "Sarah Lee", role: "Mother of 2" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                <div>
                  <div className="font-bold text-slate-900">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Booking */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="p-12 md:w-1/2 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Schedule a Visit?</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Book an appointment online or give us a call. We look forward to seeing you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Call Us</div>
                    <div className="font-bold text-xl">(02) 8888-1234</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Email Us</div>
                    <div className="font-bold text-xl">care@medicare.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Visit Us</div>
                    <div className="font-bold text-xl">123 Medical Plaza, Makati City</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 md:w-1/2">
              <form className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Request Appointment</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="+63 900 000 0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Department</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none">
                    <option>General Medicine</option>
                    <option>Pediatrics</option>
                    <option>Cardiology</option>
                    <option>Dental</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition shadow-lg">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-8">
            <Activity className="w-8 h-8 text-blue-500" />
            Medi<span className="text-blue-500">Care</span>
          </div>
          <p className="mb-8 max-w-lg mx-auto">Providing quality healthcare with a personal touch. Your health is our mission.</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Patient Rights</a>
          </div>
          <div className="text-sm">
            &copy; 2024 Medicare Clinic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ClinicDesign1;
