import React, { useState } from 'react';
import { Heart, Home, Users, Sun, Phone, Mail, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

function LawFirmDesign3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-600">
      {/* Top Bar */}
      <div className="bg-teal-700 text-white py-2 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 flex justify-between text-sm font-medium">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone className="h-3 w-3 mr-2" /> (555) 234-5678</span>
            <span className="flex items-center"><Mail className="h-3 w-3 mr-2" /> contact@harmonyfamilylaw.com</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-teal-200">Client Portal</a>
            <a href="#" className="hover:text-teal-200">Pay Bill</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-teal-50 p-2 rounded-full">
                <Heart className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-slate-800 leading-none">Harmony</h1>
                <p className="text-xs text-teal-600 font-medium tracking-widest uppercase">Family Law Group</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              {['Our Firm', 'Practice Areas', 'Resources', 'Testimonials', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-slate-600 hover:text-teal-700 font-medium transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            <button className="hidden md:block bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-md shadow-teal-200">
              Schedule Consult
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6 space-y-4">
            {['Our Firm', 'Practice Areas', 'Resources', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href="#" className="block text-slate-600 hover:text-teal-700 font-medium">
                {item}
              </a>
            ))}
            <button className="w-full bg-teal-600 text-white px-5 py-3 rounded-lg font-medium">
              Schedule Consult
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative bg-teal-50 py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-100 rounded-l-full opacity-50 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full opacity-50 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white text-teal-700 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm mb-6 border border-teal-100">
                Compassionate Legal Guidance
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6 leading-tight">
                Helping Families Find Their Way <span className="text-teal-600">Forward.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Navigating family changes can be overwhelming. We provide the legal expertise and emotional support you need to build a stable future for you and your loved ones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-lg shadow-teal-200 flex items-center justify-center">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full font-medium transition-colors shadow-sm border border-slate-200">
                  Meet Our Team
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Family holding hands" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs">
                <div className="flex items-center mb-2">
                  {[1,2,3,4,5].map(i => (
                    <Sun key={i} className="h-4 w-4 text-orange-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-800 font-serif font-bold italic">"They helped me through the hardest time of my life with grace and strength."</p>
                <p className="text-sm text-slate-500 mt-2">— Sarah J., Former Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Areas of Practice */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">How We Can Help</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Every family is unique. We tailor our approach to your specific needs, prioritizing mediation and peaceful resolution whenever possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Divorce & Separation', desc: 'Guiding you through the process with dignity and protecting your interests.' },
              { icon: Home, title: 'Child Custody', desc: 'Putting your children first and establishing sustainable parenting plans.' },
              { icon: Heart, title: 'Adoption', desc: 'Bringing families together through domestic, international, and stepparent adoptions.' },
              { icon: Sun, title: 'Mediation', desc: 'Alternative dispute resolution to save time, money, and emotional energy.' },
              { icon: Users, title: 'Paternity', desc: 'Establishing legal rights and responsibilities for fathers and children.' },
              { icon: Lock, title: 'Prenuptial Agreements', desc: 'Planning for the future with clarity and mutual respect.' },
            ].map((area, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-slate-100 hover:border-teal-100">
                <div className="bg-white p-3 rounded-xl inline-block shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <area.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 font-serif">{area.title}</h3>
                <p className="text-slate-600 mb-6">{area.desc}</p>
                <a href="#" className="text-teal-600 font-medium text-sm flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-teal-700 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-serif italic leading-relaxed opacity-90">
            "The family is one of nature's masterpieces. When it needs restoration, it requires a delicate, expert hand."
          </h2>
        </div>
      </div>

      {/* Team/Approach */}
      <div className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Attorney" className="rounded-2xl shadow-lg mt-8" />
                <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Attorney" className="rounded-2xl shadow-lg" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6">Our Gentle Approach</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We believe that aggressive litigation should be a last resort in family matters. Our firm specializes in collaborative law and mediation, helping you retain control over the outcome and preserve relationships.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Child-centered focus',
                  'Emphasis on communication',
                  'Transparent flat-fee pricing',
                  'Holistic support network'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <div className="bg-teal-100 p-1 rounded-full mr-3">
                      <Check className="h-3 w-3 text-teal-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="text-teal-600 font-bold hover:text-teal-700 flex items-center group">
                Meet Our Attorneys <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="h-6 w-6 text-teal-600" />
                <span className="text-xl font-serif font-bold text-slate-800">Harmony</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Dedicated to helping families navigate life's transitions with compassion, expertise, and integrity.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-800 mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-teal-600">Divorce</a></li>
                <li><a href="#" className="hover:text-teal-600">Child Custody</a></li>
                <li><a href="#" className="hover:text-teal-600">Adoption</a></li>
                <li><a href="#" className="hover:text-teal-600">Mediation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-800 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>123 Serenity Lane, Suite 200</li>
                <li>Portland, OR 97205</li>
                <li>(555) 234-5678</li>
                <li>hello@harmonyfamilylaw.com</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-800 mb-4">Office Hours</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex justify-between"><span>Mon-Fri</span> <span>9am - 5pm</span></li>
                <li className="flex justify-between"><span>Sat</span> <span>By Appt</span></li>
                <li className="flex justify-between"><span>Sun</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
            <p>&copy; 2024 Harmony Family Law Group. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-teal-600">Privacy Policy</a>
              <a href="#" className="hover:text-teal-600">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LawFirmDesign3;
