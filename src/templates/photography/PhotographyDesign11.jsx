import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, ArrowDown, Instagram, Twitter, Mail } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'The Summit',
    subtitle: 'Himalayas, 2023'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Morning Mist',
    subtitle: 'Scottish Highlands'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Yosemite Valley',
    subtitle: 'California, USA'
  }
];

const PhotographyDesign11 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-[0.2em] uppercase z-50">VISTAS</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 text-sm tracking-widest uppercase">
            <a href="#work" className="hover:text-gray-400 transition-colors">Work</a>
            <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
            <a href="#services" className="hover:text-gray-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 text-2xl tracking-widest uppercase">
          <a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
                  index === currentSlide ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <p className={`text-sm md:text-lg uppercase tracking-[0.5em] mb-4 transform transition-all duration-1000 delay-300 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                {slide.subtitle}
              </p>
              <h1 className={`text-5xl md:text-9xl font-bold tracking-tighter mb-8 transform transition-all duration-1000 delay-500 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                {slide.title}
              </h1>
            </div>
          </div>
        ))}

        {/* Hero Footer */}
        <div className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-end">
           <div className="hidden md:flex gap-4">
             {slides.map((_, idx) => (
               <div 
                 key={idx} 
                 onClick={() => setCurrentSlide(idx)}
                 className={`h-1 w-12 cursor-pointer transition-colors ${idx === currentSlide ? 'bg-white' : 'bg-white/30'}`} 
               />
             ))}
           </div>
           
           <a href="#about" className="absolute left-1/2 transform -translate-x-1/2 bottom-8 animate-bounce">
             <ArrowDown className="w-8 h-8 opacity-70" />
           </a>

           <div className="flex gap-4 ml-auto">
            <button onClick={prevSlide} className="p-4 border border-white/20 hover:bg-white hover:text-black transition-colors rounded-full backdrop-blur-sm">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="p-4 border border-white/20 hover:bg-white hover:text-black transition-colors rounded-full backdrop-blur-sm">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-[0.5em] text-gray-400 mb-6">The Photographer</h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Chasing light in the darkest corners of the world.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              For over a decade, I've dedicated my life to capturing the raw, untamed beauty of nature. My work is an exploration of the relationship between scale, silence, and the sublime.
            </p>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" 
              alt="Signature" 
              className="h-16 invert opacity-50" 
            />
          </div>
          <div className="relative">
            <div className="absolute inset-0 border-2 border-white transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1552168324-d612d7772f13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Photographer" 
              className="relative w-full grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-24 bg-neutral-900">
        <div className="px-6 md:px-12 mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-sm uppercase tracking-[0.5em] text-gray-400 mb-4">Selected Works</h2>
            <p className="text-3xl font-bold">Recent Expeditions</p>
          </div>
          <a href="#" className="hidden md:block border-b border-white pb-1 hover:opacity-70 transition-opacity uppercase tracking-widest text-sm">View All Projects</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {[
            { img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Nordic Summer' },
            { img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'The Valley' },
            { img: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'High Altitude' },
            { img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Water & Stone' },
            { img: 'https://images.unsplash.com/photo-1501854140884-074bf86ed91c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'First Light' },
            { img: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Deep Forest' },
          ].map((item, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden cursor-pointer">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-2xl font-bold uppercase tracking-widest border-2 border-white px-6 py-3">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-sm uppercase tracking-[0.5em] text-gray-400 mb-6">Services</h2>
          <h3 className="text-4xl font-bold">Commercial & Editorial</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Brand Campaigns', desc: 'Full-scale production for outdoor and lifestyle brands looking to tell a compelling visual story.', price: 'From $5k' },
            { title: 'Licensing', desc: 'High-resolution image licensing for print, digital, and commercial use. Extensive archive available.', price: 'Custom Quote' },
            { title: 'Workshops', desc: 'Private and group photography expeditions in the Alps and Rockies. Learn field craft and post-processing.', price: 'From $1.5k' },
          ].map((service, i) => (
            <div key={i} className="border border-white/20 p-12 hover:bg-white hover:text-black transition-all duration-500 group">
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-400 group-hover:text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
              <div className="text-sm font-bold tracking-widest uppercase">{service.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm uppercase tracking-[0.5em] text-gray-500 mb-8">Get In Touch</h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">Let's Create Something Timeless.</h3>
          
          <form className="max-w-xl mx-auto space-y-6 text-left">
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2">Name</label>
              <input type="text" className="w-full border-b border-black bg-transparent py-3 focus:outline-none focus:border-gray-400 transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2">Email</label>
              <input type="email" className="w-full border-b border-black bg-transparent py-3 focus:outline-none focus:border-gray-400 transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2">Message</label>
              <textarea rows="4" className="w-full border-b border-black bg-transparent py-3 focus:outline-none focus:border-gray-400 transition-colors" placeholder="Tell me about your project..."></textarea>
            </div>
            <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Send Message
            </button>
          </form>

          <div className="mt-24 flex justify-center gap-8">
            <Instagram className="w-6 h-6 cursor-pointer hover:opacity-50" />
            <Twitter className="w-6 h-6 cursor-pointer hover:opacity-50" />
            <Mail className="w-6 h-6 cursor-pointer hover:opacity-50" />
          </div>
          <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest">© 2024 VISTAS Photography.</p>
        </div>
      </section>
    </div>
  );
};

export default PhotographyDesign11;
