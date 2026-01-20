import React, { useState } from 'react';
import { Bike, Zap, Music, Heart, Menu, X, ArrowRight } from 'lucide-react';

function FitnessDesign5() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-black italic tracking-tighter text-white">
            RPM<span className="text-[#ccff00]">STUDIOS</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-[#ccff00] transition-colors">Instructors</a>
            <a href="#" className="hover:text-[#ccff00] transition-colors">The Ride</a>
            <a href="#" className="hover:text-[#ccff00] transition-colors">Schedule</a>
            <a href="#" className="hover:text-[#ccff00] transition-colors">Pricing</a>
            <button className="bg-[#ccff00] text-black px-6 py-2 rounded-sm hover:bg-white transition-colors">
              Book Your Bike
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Spin class" 
            className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent"></div>
          {/* Neon Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ccff00] rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ffff] rounded-full filter blur-[150px] opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-6">
          <h1 className="text-7xl md:text-9xl font-black italic leading-[0.85] mb-8 tracking-tighter">
            RIDE TO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-[#00ffff]">THE RHYTHM</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-300 mb-12 max-w-2xl mx-auto">
            45 minutes. Dark room. Loud music. High energy. The ultimate cardio party on a bike.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#ccff00] text-black px-12 py-5 text-xl font-black italic uppercase tracking-tighter hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(204,255,0,0.4)]">
              Book First Ride
            </button>
            <button className="border-2 border-white text-white px-12 py-5 text-xl font-black italic uppercase tracking-tighter hover:bg-white hover:text-black transition-colors">
              View Playlist
            </button>
          </div>
        </div>
      </div>

      {/* The Experience */}
      <div className="py-24 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-[#0A0A0A] p-10 border border-white/5 hover:border-[#ccff00]/50 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ccff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Zap className="h-12 w-12 text-[#ccff00] mb-6" />
            <h3 className="text-3xl font-black italic mb-4">High Intensity</h3>
            <p className="text-gray-400">Full-body workout incorporating resistance bands and choreography to sculpt and tone.</p>
          </div>
          <div className="bg-[#0A0A0A] p-10 border border-white/5 hover:border-[#00ffff]/50 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Music className="h-12 w-12 text-[#00ffff] mb-6" />
            <h3 className="text-3xl font-black italic mb-4">Killer Playlists</h3>
            <p className="text-gray-400">Curated beats that drop exactly when you need that extra push. EDM, Hip-Hop, Pop remixes.</p>
          </div>
          <div className="bg-[#0A0A0A] p-10 border border-white/5 hover:border-[#ff00ff]/50 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff00ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Users className="h-12 w-12 text-[#ff00ff] mb-6" />
            <h3 className="text-3xl font-black italic mb-4">The Pack</h3>
            <p className="text-gray-400">We ride together. We sweat together. A community that pushes you to be your best self.</p>
          </div>
        </div>
      </div>

      {/* Instructors */}
      <div className="py-24 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter">MEET THE <br/><span className="text-[#ccff00]">ROCKSTARS</span></h2>
          <button className="hidden md:flex items-center text-[#ccff00] font-bold uppercase tracking-widest hover:text-white transition-colors">
            View All <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        
        <div className="flex gap-8 overflow-x-auto pb-8 px-6 snap-x">
          {[
            { name: "JAX", style: "EDM / Heavy Climbs", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
            { name: "MIA", style: "Hip-Hop / Sprints", img: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
            { name: "LEO", style: "Pop / Choreography", img: "https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
            { name: "SKY", style: "Rock / Endurance", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
          ].map((instructor, i) => (
            <div key={i} className="min-w-[300px] snap-center group relative cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-gray-900">
                <img src={instructor.img} alt={instructor.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-4xl font-black italic text-white mb-1">{instructor.name}</h3>
                <p className="text-[#ccff00] font-bold uppercase text-xs tracking-widest">{instructor.style}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing/CTA */}
      <div className="py-32 px-6 text-center relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#ccff00] to-[#00ffff] rounded-full filter blur-[200px] opacity-10 pointer-events-none"></div>
        <h2 className="text-5xl md:text-8xl font-black italic mb-8 relative z-10">READY TO <br/>CLIP IN?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto relative z-10">
          <div className="flex-1 bg-[#121212] p-8 border border-white/10 hover:border-[#ccff00] transition-all group">
            <h3 className="text-2xl font-black italic text-white mb-2">NEW RIDER</h3>
            <div className="text-4xl font-bold text-[#ccff00] mb-4">$25</div>
            <p className="text-gray-400 mb-8">1 Class Credit<br/>Shoe Rental Included</p>
            <button className="w-full bg-white text-black font-black uppercase py-4 hover:bg-[#ccff00] transition-colors">Buy Now</button>
          </div>
          <div className="flex-1 bg-[#121212] p-8 border border-white/10 hover:border-[#00ffff] transition-all group transform md:-translate-y-4 shadow-2xl">
            <div className="text-[#00ffff] font-bold uppercase text-xs tracking-widest mb-2">Most Popular</div>
            <h3 className="text-2xl font-black italic text-white mb-2">5 PACK</h3>
            <div className="text-4xl font-bold text-[#00ffff] mb-4">$115</div>
            <p className="text-gray-400 mb-8">Expires in 30 Days<br/>Shoe Rental Included</p>
            <button className="w-full bg-[#00ffff] text-black font-black uppercase py-4 hover:bg-white transition-colors">Buy Now</button>
          </div>
          <div className="flex-1 bg-[#121212] p-8 border border-white/10 hover:border-[#ff00ff] transition-all group">
            <h3 className="text-2xl font-black italic text-white mb-2">MONTHLY</h3>
            <div className="text-4xl font-bold text-[#ff00ff] mb-4">$250</div>
            <p className="text-gray-400 mb-8">Unlimited Rides<br/>Priority Booking</p>
            <button className="w-full bg-white text-black font-black uppercase py-4 hover:bg-[#ff00ff] transition-colors">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#020202] py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black italic tracking-tighter text-white">
            RPM<span className="text-[#ccff00]">STUDIOS</span>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-[#ccff00] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#ccff00] transition-colors">Spotify</a>
            <a href="#" className="hover:text-[#ccff00] transition-colors">TikTok</a>
            <a href="#" className="hover:text-[#ccff00] transition-colors">FAQ</a>
          </div>
          <div className="text-xs text-gray-700">
            &copy; 2024 RPM Studios. Let's Ride.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Icons
const Users = (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;

export default FitnessDesign5;
