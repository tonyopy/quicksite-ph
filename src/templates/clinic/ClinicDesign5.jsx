import React, { useState } from 'react';
import { Leaf, Calendar, Phone, MapPin, Clock, Menu, X, Mail, Heart, Coffee, Sun } from 'lucide-react';

function ClinicDesign5() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f5f0] font-sans text-stone-700 selection:bg-green-100">
      
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-[#f4f5f0]/95 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl tracking-widest text-stone-800 font-serif">
            <Leaf className="w-6 h-6 text-green-700" />
            mindful<span className="font-bold">space</span>
          </div>
          
          <div className="hidden md:flex space-x-10 text-sm font-medium text-stone-500">
            <a href="#approach" className="hover:text-green-800 transition">Our Approach</a>
            <a href="#services" className="hover:text-green-800 transition">Services</a>
            <a href="#team" className="hover:text-green-800 transition">Therapists</a>
            <a href="#resources" className="hover:text-green-800 transition">Resources</a>
          </div>
          <a href="#contact" className="hidden md:block px-6 py-2.5 border border-stone-400 rounded-full text-sm hover:bg-stone-800 hover:text-white hover:border-stone-800 transition duration-300">
            Get Support
          </a>

          <button className="md:hidden text-stone-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#f4f5f0] border-t border-stone-200 py-6 px-6 space-y-6">
            <a href="#approach" className="block text-stone-600 font-medium" onClick={() => setIsMenuOpen(false)}>Our Approach</a>
            <a href="#services" className="block text-stone-600 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#team" className="block text-stone-600 font-medium" onClick={() => setIsMenuOpen(false)}>Therapists</a>
            <a href="#contact" className="block w-full text-center px-6 py-3 bg-stone-800 text-white rounded-full font-medium" onClick={() => setIsMenuOpen(false)}>
              Get Support
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl lg:text-6xl font-serif text-stone-800 mb-8 leading-tight">
                A Safe Place to <br/>
                <span className="text-green-800 italic">Heal & Grow</span>
              </h1>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-md">
                We provide compassionate, evidence-based mental health care tailored to your unique journey. You don't have to walk this path alone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-8 py-4 bg-stone-800 text-white rounded-lg font-medium hover:bg-stone-700 transition shadow-lg shadow-stone-200 text-center">
                  Book a Session
                </a>
                <a href="#approach" className="px-8 py-4 bg-white border border-stone-200 text-stone-700 rounded-lg font-medium hover:bg-stone-50 transition text-center">
                  Learn More
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-green-100 rounded-full transform translate-x-8 translate-y-8 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1544367563-12123d895e29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Peaceful Moment" 
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach / Quote */}
      <section id="approach" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <Sun className="w-10 h-10 text-orange-300 mx-auto mb-8 animate-spin-slow" />
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-12 leading-relaxed">
            "Mental health is not a destination, but a process. It's about how you drive, not where you're going."
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div>
              <h3 className="font-bold text-stone-900 mb-3">Compassionate Care</h3>
              <p className="text-stone-500 text-sm leading-relaxed">We create a non-judgmental space where you feel heard, validated, and understood.</p>
            </div>
            <div>
              <h3 className="font-bold text-stone-900 mb-3">Evidence-Based</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Our therapies are grounded in science and proven methodologies like CBT and DBT.</p>
            </div>
            <div>
              <h3 className="font-bold text-stone-900 mb-3">Holistic Wellness</h3>
              <p className="text-stone-500 text-sm leading-relaxed">We consider the whole person—mind, body, and spirit—in our treatment plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-[#e8ebe4]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-serif text-stone-800">Our Services</h2>
            <a href="#contact" className="hidden md:block text-green-800 font-medium hover:underline">View All &rarr;</a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Individual Therapy", desc: "One-on-one sessions to explore personal challenges and growth.", icon: User },
              { title: "Couples Counseling", desc: "Strengthen relationships and improve communication skills.", icon: Heart },
              { title: "Anxiety & Depression", desc: "Specialized support for managing symptoms and finding relief.", icon: Cloud },
              { title: "Trauma Recovery", desc: "Safe, paced processing of past experiences to reclaim your life.", icon: Shield },
              { title: "Child & Adolescent", desc: "Developmentally appropriate support for younger minds.", icon: Star },
              { title: "Group Workshops", desc: "Shared learning experiences in a supportive community setting.", icon: Users }
            ].map((service, index) => (
              <div key={index} className="bg-[#f4f5f0] p-8 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <Leaf className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">{service.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Calm Image */}
      <section className="py-24 bg-stone-800 text-stone-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif text-white mb-6">Meet Our Team</h2>
            <p className="text-stone-400 mb-8 leading-relaxed text-lg">
              Our therapists are licensed professionals dedicated to your well-being. We have diverse backgrounds and specializations to ensure you find the right fit.
            </p>
            <a href="#contact" className="text-green-300 hover:text-white transition font-medium">Match with a Therapist &rarr;</a>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Therapist 1" className="rounded-lg opacity-80 hover:opacity-100 transition duration-500" />
             <img src="https://images.unsplash.com/photo-1537368910025-bc008f3416ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Therapist 2" className="rounded-lg opacity-80 hover:opacity-100 transition duration-500 translate-y-8" />
          </div>
        </div>
      </section>

      {/* Contact / Booking */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-800 mb-4">Start Your Journey</h2>
            <p className="text-stone-500">Reach out today. We offer free 15-minute consultations to see if we're a good fit.</p>
          </div>

          <div className="bg-[#f4f5f0] p-8 md:p-12 rounded-2xl border border-stone-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">Name</label>
                  <input type="text" className="w-full bg-white border border-stone-200 rounded-lg p-3 outline-none focus:border-green-600 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">Email</label>
                  <input type="email" className="w-full bg-white border border-stone-200 rounded-lg p-3 outline-none focus:border-green-600 transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-600 mb-2">What brings you here?</label>
                <select className="w-full bg-white border border-stone-200 rounded-lg p-3 outline-none focus:border-green-600 transition text-stone-600">
                  <option>Anxiety / Stress</option>
                  <option>Depression</option>
                  <option>Relationship Issues</option>
                  <option>Trauma / PTSD</option>
                  <option>Personal Growth</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-600 mb-2">Message (Optional)</label>
                <textarea rows="4" className="w-full bg-white border border-stone-200 rounded-lg p-3 outline-none focus:border-green-600 transition"></textarea>
              </div>
              <button className="w-full bg-stone-800 text-white font-medium py-4 rounded-lg hover:bg-stone-700 transition shadow-md">
                Request Consultation
              </button>
            </form>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center text-sm text-stone-500">
            <div>
              <Phone className="w-5 h-5 mx-auto mb-3 text-stone-400" />
              <p>(555) 123-4567</p>
            </div>
            <div>
              <Mail className="w-5 h-5 mx-auto mb-3 text-stone-400" />
              <p>hello@mindfulspace.com</p>
            </div>
            <div>
              <MapPin className="w-5 h-5 mx-auto mb-3 text-stone-400" />
              <p>123 Serenity Lane, Wellness City</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f4f5f0] border-t border-stone-200 py-12 text-center text-stone-400 text-sm">
        <p>&copy; 2024 Mindful Space. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-stone-600">Privacy</a>
          <a href="#" className="hover:text-stone-600">Terms</a>
          <a href="#" className="hover:text-stone-600">Crisis Resources</a>
        </div>
      </footer>
    </div>
  );
}

export default ClinicDesign5;
