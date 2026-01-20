import React, { useState } from 'react';
import { Sparkles, Calendar, Phone, MapPin, Clock, Star, Menu, X, Mail, Heart, Crown, Feather } from 'lucide-react';

function ClinicDesign4() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf7f5] font-serif text-stone-800 selection:bg-rose-200">
      
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-[#faf7f5]/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl tracking-[0.2em] font-light">
            AURA<span className="font-bold">SKIN</span>
          </div>
          
          <div className="hidden md:flex space-x-12 text-xs font-bold uppercase tracking-widest text-stone-500">
            <a href="#treatments" className="hover:text-rose-400 transition">Treatments</a>
            <a href="#about" className="hover:text-rose-400 transition">Our Story</a>
            <a href="#testimonials" className="hover:text-rose-400 transition">Love Notes</a>
            <a href="#contact" className="hover:text-rose-400 transition">Contact</a>
          </div>
          <a href="#book" className="hidden md:block px-8 py-3 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-rose-400 transition">
            Book Now
          </a>

          <button className="md:hidden text-stone-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#faf7f5] border-t border-stone-200 py-6 px-6 space-y-6 text-center">
            <a href="#treatments" className="block text-stone-600 font-medium uppercase tracking-widest text-sm" onClick={() => setIsMenuOpen(false)}>Treatments</a>
            <a href="#about" className="block text-stone-600 font-medium uppercase tracking-widest text-sm" onClick={() => setIsMenuOpen(false)}>Our Story</a>
            <a href="#testimonials" className="block text-stone-600 font-medium uppercase tracking-widest text-sm" onClick={() => setIsMenuOpen(false)}>Love Notes</a>
            <a href="#contact" className="block text-stone-600 font-medium uppercase tracking-widest text-sm" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#book" className="block w-full px-6 py-3 bg-stone-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-rose-400 transition" onClick={() => setIsMenuOpen(false)}>
              Book Now
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Glowing Skin" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-white text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
            Luxury Medical Aesthetics
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-tight">
            Reveal Your <br/>
            <span className="font-serif italic">Radiance</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-lg mx-auto mb-10 leading-relaxed">
            Where science meets beauty. Bespoke skincare treatments designed to enhance your natural glow.
          </p>
          <a href="#treatments" className="inline-block px-10 py-4 bg-white/90 backdrop-blur text-stone-900 text-xs font-bold uppercase tracking-widest hover:bg-rose-100 transition duration-300">
            Discover Treatments
          </a>
        </div>
      </section>

      {/* Philosophy */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Feather className="w-8 h-8 text-rose-300 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-8 leading-relaxed">
            "We believe that beauty is personal. Our approach is subtle, refined, and tailored exclusively to <span className="italic text-rose-400">you</span>."
          </h2>
          <div className="w-24 h-px bg-rose-200 mx-auto mb-8"></div>
          <p className="text-stone-500 font-sans leading-relaxed">
            Founded by Dr. Elena Rose, Aura Skin combines advanced medical technology with the luxury of a spa. We specialize in non-invasive procedures that deliver transformative results without the downtime.
          </p>
        </div>
      </section>

      {/* Treatments Menu */}
      <section id="treatments" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-rose-400 font-bold uppercase tracking-widest text-xs mb-4 block">Our Menu</span>
            <h2 className="text-4xl font-light text-stone-900">Curated Treatments</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              { title: "The Signature Glow", desc: "Our bespoke facial tailored to your skin's daily needs. Includes deep cleansing, exfoliation, and LED therapy.", price: "From ₱3,500" },
              { title: "Laser Rejuvenation", desc: "Target pigmentation, fine lines, and texture with our advanced laser technology.", price: "From ₱8,000" },
              { title: "Injectables", desc: "Subtle enhancements using premium fillers and neuromodulators for a refreshed look.", price: "Consultation Required" },
              { title: "Microneedling", desc: "Stimulate collagen production to reduce scars and improve overall skin texture.", price: "From ₱5,000" },
              { title: "Chemical Peels", desc: "Medical-grade peels to resurface and brighten dull, tired skin.", price: "From ₱4,500" },
              { title: "Body Contouring", desc: "Non-surgical fat reduction and skin tightening for a sculpted silhouette.", price: "From ₱10,000" }
            ].map((item, i) => (
              <div key={i} className="group text-center">
                <div className="w-full h-64 overflow-hidden mb-8 bg-stone-100">
                  <img 
                    src={`https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h3 className="text-xl font-light text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-500 font-sans text-sm leading-relaxed mb-4 max-w-xs mx-auto">{item.desc}</p>
                <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured / Promo */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/marble.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Interior" 
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <Crown className="w-10 h-10 text-rose-300 mb-6 mx-auto md:mx-0" />
            <h2 className="text-4xl md:text-5xl font-light mb-6">The Royal Membership</h2>
            <p className="text-stone-400 text-lg mb-8 leading-relaxed">
              Prioritize your self-care with our exclusive monthly membership. Enjoy preferred pricing, priority booking, and a complimentary monthly facial.
            </p>
            <ul className="space-y-4 mb-10 text-stone-300 font-sans text-sm tracking-wide uppercase">
              <li className="flex items-center gap-4 justify-center md:justify-start"><span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span> 10% Off All Products</li>
              <li className="flex items-center gap-4 justify-center md:justify-start"><span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span> VIP Event Access</li>
              <li className="flex items-center gap-4 justify-center md:justify-start"><span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span> Birthday Gift</li>
            </ul>
            <a href="#contact" className="inline-block px-10 py-4 border border-rose-300 text-rose-300 text-xs font-bold uppercase tracking-widest hover:bg-rose-300 hover:text-stone-900 transition duration-300">
              Join the Club
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-[#faf7f5]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-16">Love Notes</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { text: "I've never felt more confident in my skin. The team at Aura truly understands subtle enhancement.", author: "Isabella V." },
              { text: "The most relaxing medical facial I've ever had. My skin was glowing for weeks!", author: "Camille D." },
              { text: "Professional, clean, and incredibly chic. It feels like a 5-star hotel, but with medical results.", author: "Sophia L." }
            ].map((review, i) => (
              <div key={i} className="bg-white p-10 shadow-sm border border-stone-100">
                <div className="text-rose-300 mb-6 text-2xl">★★★★★</div>
                <p className="text-stone-600 font-light italic mb-6 leading-relaxed">"{review.text}"</p>
                <p className="text-xs font-bold uppercase tracking-widest text-stone-900">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking / Contact */}
      <section id="contact" className="py-24 bg-white border-t border-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-8">Begin Your Journey</h2>
              <p className="text-stone-500 font-sans mb-10 leading-relaxed">
                Whether you're looking for a complete transformation or a quick refresh, we're here to guide you. Book a consultation today.
              </p>
              
              <div className="space-y-8 font-sans text-sm">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-rose-400" />
                  <p className="text-stone-600">Unit 204, Luxe Tower, Rockwell Center,<br/>Makati City, Philippines</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-rose-400" />
                  <p className="text-stone-600">+63 917 123 4567</p>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-rose-400" />
                  <p className="text-stone-600">concierge@auraskin.ph</p>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-rose-400" />
                  <p className="text-stone-600">Tues - Sun: 10:00 AM - 7:00 PM<br/><span className="text-stone-400 italic">Closed Mondays</span></p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full bg-[#faf7f5] border-b border-stone-200 p-4 font-sans text-sm outline-none focus:border-rose-300 transition" />
                <input type="text" placeholder="Last Name" className="w-full bg-[#faf7f5] border-b border-stone-200 p-4 font-sans text-sm outline-none focus:border-rose-300 transition" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-[#faf7f5] border-b border-stone-200 p-4 font-sans text-sm outline-none focus:border-rose-300 transition" />
              <select className="w-full bg-[#faf7f5] border-b border-stone-200 p-4 font-sans text-sm outline-none focus:border-rose-300 transition text-stone-500">
                <option>Select Treatment</option>
                <option>Facial</option>
                <option>Laser</option>
                <option>Injectables</option>
                <option>Consultation</option>
              </select>
              <textarea rows="4" placeholder="How can we help you?" className="w-full bg-[#faf7f5] border-b border-stone-200 p-4 font-sans text-sm outline-none focus:border-rose-300 transition"></textarea>
              <button className="w-full bg-stone-900 text-white font-bold uppercase tracking-widest text-xs py-5 hover:bg-rose-400 transition duration-300">
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 text-center text-xs font-sans tracking-widest uppercase">
        <div className="mb-8 text-2xl font-serif text-white tracking-widest lowercase italic">aura skin</div>
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">TikTok</a>
        </div>
        <p>&copy; 2024 Aura Skin Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ClinicDesign4;
