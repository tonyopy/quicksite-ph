import React, { useState } from 'react';
import { Music, Sparkles, Heart, Star, Menu, X, ArrowRight } from 'lucide-react';

function FitnessDesign10() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1E002E] text-white font-sans selection:bg-[#FF00FF] selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#1E002E]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-[#FF00FF]" />
            <span>KINETIC<span className="text-[#00FFFF]">ARTS</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-[#FF00FF] transition-colors">Classes</a>
            <a href="#" className="hover:text-[#FF00FF] transition-colors">Workshops</a>
            <a href="#" className="hover:text-[#FF00FF] transition-colors">Faculty</a>
            <a href="#" className="hover:text-[#FF00FF] transition-colors">Events</a>
            <button className="bg-gradient-to-r from-[#FF00FF] to-[#7B00FF] px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(255,0,255,0.5)] transition-all">
              Sign Up
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Dancer silhouette" 
            className="w-full h-full object-cover opacity-50 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E002E] via-[#1E002E]/60 to-transparent"></div>
          
          {/* Animated Blobs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF00FF] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00FFFF] rounded-full blur-[150px] opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
            MOVE WITH <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] via-[#00FFFF] to-[#7B00FF]">PASSION</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            Contemporary. Hip Hop. Ballet. Jazz. <br/>
            Express yourself through the universal language of dance.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-white text-[#1E002E] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#00FFFF] transition-colors shadow-lg">
              View Class Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Styles Grid */}
      <div className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Find Your Rhythm</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Contemporary', color: 'from-[#FF00FF] to-[#7B00FF]', img: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
              { title: 'Street / Hip Hop', color: 'from-[#00FFFF] to-[#0000FF]', img: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
              { title: 'Ballet', color: 'from-[#FFC0CB] to-[#FF69B4]', img: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
              { title: 'Jazz Funk', color: 'from-[#FFFF00] to-[#FF4500]', img: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
            ].map((style, index) => (
              <div key={index} className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer">
                <img src={style.img} alt={style.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${style.color} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold mb-2">{style.title}</h3>
                  <div className="w-0 group-hover:w-full h-1 bg-white transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Events / Workshop */}
      <div className="py-24 px-6 bg-[#2A0040]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <span className="text-[#00FFFF] font-bold uppercase tracking-widest text-sm mb-4 block">Upcoming Workshop</span>
            <h2 className="text-5xl font-bold mb-6">Masterclass Series: <br/>Commercial Choreography</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Join LA-based choreographer Mia Sanchez for an intensive weekend of camera-ready routines, industry tips, and performance coaching. Open to intermediate/advanced dancers.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#1E002E] px-4 py-2 rounded-lg border border-[#FF00FF]">
                <span className="text-[#FF00FF] font-bold block">OCT 14-15</span>
              </div>
              <div className="bg-[#1E002E] px-4 py-2 rounded-lg border border-[#00FFFF]">
                <span className="text-[#00FFFF] font-bold block">LIMITED SPOTS</span>
              </div>
            </div>
            <button className="flex items-center gap-2 text-white font-bold hover:text-[#00FFFF] transition-colors">
              Reserve Your Spot <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] rounded-full blur-[100px] opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Workshop flyer" 
              className="relative rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#150020] py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-[#FF00FF]" />
            <span className="text-xl font-bold tracking-tight">KINETIC<span className="text-[#00FFFF]">ARTS</span></span>
          </div>
          
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
          
          <div className="text-xs text-gray-600">
            &copy; 2024 Kinetic Arts Dance Complex.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FitnessDesign10;
