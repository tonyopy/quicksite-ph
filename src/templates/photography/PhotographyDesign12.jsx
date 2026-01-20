import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Instagram, Twitter, Mail, Camera, Menu, X } from 'lucide-react';

const PhotographyDesign12 = () => {
  const scrollRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth'
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section && scrollRef.current) {
      const left = section.offsetLeft;
      scrollRef.current.scrollTo({
        left: left,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const galleryItems = [
    { title: 'Tokyo', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Kyoto', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Osaka', img: 'https://images.unsplash.com/photo-1590559899731-a38283956c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Nara', img: 'https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Hakone', img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="h-screen bg-[#1a1a1a] text-[#e0e0e0] overflow-hidden flex flex-col font-sans">
      
      {/* Header */}
      <header className="h-20 px-8 flex items-center justify-between border-b border-[#333] bg-[#1a1a1a] z-50">
        <h1 className="text-xl font-bold tracking-widest uppercase flex items-center gap-2">
          <Camera className="w-5 h-5" /> HORIZON
        </h1>
        
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-500">
          <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Start</button>
          <button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">Gallery</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button>
        </nav>

        <div className="text-sm text-gray-500 hidden md:block">SCROLL TO EXPLORE &rarr;</div>
      </header>

      {/* Horizontal Scroll Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-x-auto overflow-y-hidden flex items-center px-8 md:px-24 gap-8 md:gap-32 scrollbar-hide"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Intro Section */}
        <div id="home" className="flex-shrink-0 w-[300px] md:w-[500px] mr-24">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs mb-4 block">Photography Portfolio</span>
          <h2 className="text-5xl md:text-8xl font-bold mb-8 leading-none">
            Beyond<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">The Edge</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 text-lg max-w-sm border-l-2 border-red-500 pl-6">
            A horizontal journey through light, shadow, and the moments that define us. Keep scrolling to discover the collection.
          </p>
          <button onClick={() => scrollToSection('gallery')} className="flex items-center gap-2 text-sm uppercase tracking-widest border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-colors rounded-full">
            Begin Journey <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="flex gap-16 items-center">
          <div className="flex-shrink-0 w-64">
            <h3 className="text-4xl font-bold mb-4 transform -rotate-90 origin-bottom-left translate-x-12">Selected Works</h3>
          </div>
          
          {galleryItems.map((item, i) => (
            <div key={i} className="flex-shrink-0 group relative cursor-pointer">
              <div className="w-[300px] md:w-[500px] h-[400px] md:h-[600px] overflow-hidden bg-gray-900 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-12 left-0 text-4xl font-bold opacity-20 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500">
                {String(i + 1).padStart(2, '0')} — {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div id="services" className="flex-shrink-0 flex gap-16 ml-32">
          <div className="w-[400px]">
             <h3 className="text-6xl font-bold mb-12 text-gray-800">What I Do</h3>
          </div>
          
          <div className="w-[350px] h-[500px] bg-[#222] p-10 flex flex-col justify-between border-t-4 border-red-500 hover:bg-[#2a2a2a] transition-colors">
            <div>
              <h4 className="text-3xl font-bold mb-4">Editorial</h4>
              <p className="text-gray-400 leading-relaxed">
                High-impact visual storytelling for magazines, brands, and digital publications. 
              </p>
            </div>
            <div className="text-4xl font-thin opacity-20">01</div>
          </div>

          <div className="w-[350px] h-[500px] bg-[#222] p-10 flex flex-col justify-between border-t-4 border-blue-500 hover:bg-[#2a2a2a] transition-colors">
            <div>
              <h4 className="text-3xl font-bold mb-4">Commercial</h4>
              <p className="text-gray-400 leading-relaxed">
                Product and lifestyle photography that elevates brand identity and drives conversion.
              </p>
            </div>
            <div className="text-4xl font-thin opacity-20">02</div>
          </div>

           <div className="w-[350px] h-[500px] bg-[#222] p-10 flex flex-col justify-between border-t-4 border-green-500 hover:bg-[#2a2a2a] transition-colors">
            <div>
              <h4 className="text-3xl font-bold mb-4">Portraiture</h4>
              <p className="text-gray-400 leading-relaxed">
                Capturing the essence of personality through controlled light and composition.
              </p>
            </div>
            <div className="text-4xl font-thin opacity-20">03</div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="flex-shrink-0 flex items-center gap-16 ml-32 w-[900px]">
          <div className="w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1554048612-387768052bf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Photographer" 
              className="w-full grayscale contrast-125"
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-4xl font-bold mb-6">Behind the Lens</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              "I believe that photography is not just about capturing a moment, but about creating an emotion that lasts forever."
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Based in Tokyo, specializing in urban landscapes and cinematic street photography.
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-12 invert opacity-50" />
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="flex-shrink-0 w-[600px] ml-32 mr-24">
          <div className="bg-white text-black p-12 md:p-16 rounded-3xl">
            <h3 className="text-5xl font-bold mb-8">Let's Talk</h3>
            <p className="text-gray-500 mb-12 text-lg">
              Ready to start your project? Get in touch for rates and availability.
            </p>
            
            <form className="space-y-6">
              <input type="text" placeholder="Name" className="w-full bg-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
              <input type="email" placeholder="Email" className="w-full bg-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
              <button className="w-full bg-black text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                Send Request
              </button>
            </form>

            <div className="flex gap-6 mt-12 justify-center">
               <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-600" />
               <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-600" />
               <Mail className="w-6 h-6 cursor-pointer hover:text-gray-600" />
            </div>
          </div>
        </div>
        
        {/* End Spacer */}
        <div className="w-24 flex-shrink-0"></div>
      </div>
      
      {/* Footer Progress Bar */}
      <div className="h-1 bg-[#333] w-full relative">
         <div className="absolute top-0 left-0 h-full bg-red-500 animate-pulse w-full origin-left transform scale-x-0 transition-transform duration-100"></div>
      </div>
    </div>
  );
};

export default PhotographyDesign12;
