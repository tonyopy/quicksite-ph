import React, { useState } from 'react';
import { Flower, Sun, Moon, Wind, Heart, Menu, X, ArrowRight } from 'lucide-react';

function FitnessDesign2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#5D5C61] font-sans selection:bg-[#B1A7A6] selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-24 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Flower className="h-8 w-8 text-[#B1A7A6]" />
            <span className="text-2xl font-serif tracking-widest text-[#373737]">SERENITY</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] font-light">
            <a href="#" className="hover:text-[#B1A7A6] transition-colors">Classes</a>
            <a href="#" className="hover:text-[#B1A7A6] transition-colors">Retreats</a>
            <a href="#" className="hover:text-[#B1A7A6] transition-colors">Teachers</a>
            <a href="#" className="hover:text-[#B1A7A6] transition-colors">Journal</a>
            <button className="border border-[#B1A7A6] px-6 py-2 rounded-full hover:bg-[#B1A7A6] hover:text-white transition-all">
              Book Class
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#373737]">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 min-h-screen flex items-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E8E4E1] hidden lg:block rounded-bl-[150px]"></div>
        
        <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1 rounded-full bg-[#E8E4E1] text-xs uppercase tracking-widest mb-8 text-[#8E8D8A]">
              Mind • Body • Spirit
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#373737] mb-8 leading-tight">
              Find your center <br/>
              <span className="italic text-[#B1A7A6]">in the chaos.</span>
            </h1>
            <p className="text-lg text-[#8E8D8A] mb-10 leading-relaxed max-w-md font-light">
              A sanctuary for movement and stillness. Join us for Vinyasa, Hatha, and restorative practices designed to ground you.
            </p>
            <div className="flex gap-6">
              <button className="bg-[#B1A7A6] text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-[#968C8B] transition-colors shadow-lg shadow-[#B1A7A6]/20">
                Start 7-Day Trial
              </button>
              <button className="flex items-center text-[#5D5C61] hover:text-[#B1A7A6] transition-colors text-sm uppercase tracking-widest">
                View Schedule <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#B1A7A6]/10 rounded-[100px] transform rotate-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Yoga pose" 
              className="relative rounded-[100px] shadow-2xl w-full object-cover h-[600px]"
            />
          </div>
        </div>
      </div>

      {/* Class Types */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-[#373737] mb-4">Our Practices</h2>
            <div className="w-16 h-px bg-[#B1A7A6] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sun, title: 'Morning Flow', desc: 'Energizing vinyasa sequences to wake up the body and mind.' },
              { icon: Wind, title: 'Breathwork', desc: 'Guided pranayama sessions to reduce stress and increase focus.' },
              { icon: Moon, title: 'Restorative', desc: 'Deep relaxation using props to support the body in long holds.' },
            ].map((item, index) => (
              <div key={index} className="bg-[#FDFBF7] p-10 rounded-3xl text-center hover:shadow-xl transition-shadow duration-300 border border-[#E8E4E1]">
                <item.icon className="h-8 w-8 text-[#B1A7A6] mx-auto mb-6" />
                <h3 className="text-xl font-serif text-[#373737] mb-4">{item.title}</h3>
                <p className="text-[#8E8D8A] font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-32 px-6 bg-[#B1A7A6] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <Heart className="h-12 w-12 mx-auto mb-8 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-serif italic leading-relaxed mb-8">
            "Yoga is the journey of the self, through the self, to the self."
          </h2>
          <p className="text-sm uppercase tracking-[0.2em] opacity-80">— The Bhagavad Gita</p>
        </div>
      </div>

      {/* Schedule Preview */}
      <div className="py-24 px-6 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-[#373737] mb-12 text-center">Today's Schedule</h2>
          <div className="space-y-4">
            {[
              { time: '07:00 AM', class: 'Sunrise Vinyasa', teacher: 'Sarah J.', duration: '60 min' },
              { time: '09:30 AM', class: 'Power Flow', teacher: 'Michael R.', duration: '75 min' },
              { time: '12:00 PM', class: 'Lunch Express', teacher: 'Emma W.', duration: '45 min' },
              { time: '05:30 PM', class: 'Yin & Meditation', teacher: 'David K.', duration: '90 min' },
            ].map((session, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-2xl border border-[#E8E4E1] hover:border-[#B1A7A6] transition-colors group cursor-pointer">
                <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
                  <span className="text-lg font-medium text-[#373737] w-24">{session.time}</span>
                  <div>
                    <h3 className="text-xl font-serif text-[#373737] group-hover:text-[#B1A7A6] transition-colors">{session.class}</h3>
                    <p className="text-sm text-[#8E8D8A]">with {session.teacher}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full md:w-auto gap-8">
                  <span className="text-sm uppercase tracking-wider text-[#8E8D8A] bg-[#FDFBF7] px-3 py-1 rounded-full">{session.duration}</span>
                  <button className="text-[#B1A7A6] font-medium hover:text-[#373737] transition-colors text-sm uppercase tracking-widest">
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-16 px-6 border-t border-[#E8E4E1]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Flower className="h-6 w-6 text-[#B1A7A6]" />
            <span className="text-xl font-serif tracking-widest text-[#373737]">SERENITY</span>
          </div>
          <div className="flex gap-8 text-sm uppercase tracking-widest text-[#8E8D8A]">
            <a href="#" className="hover:text-[#B1A7A6] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#B1A7A6] transition-colors">Spotify</a>
            <a href="#" className="hover:text-[#B1A7A6] transition-colors">Contact</a>
          </div>
          <p className="text-xs text-[#8E8D8A]">&copy; 2024 Serenity Yoga. Namaste.</p>
        </div>
      </footer>
    </div>
  );
}

export default FitnessDesign2;
