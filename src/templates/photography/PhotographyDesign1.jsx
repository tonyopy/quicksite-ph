import React, { useState } from 'react';
import { Camera, Instagram, Mail, Phone, MapPin, ArrowRight, Menu, X, ChevronRight, Facebook, Twitter, Linkedin } from 'lucide-react';

const PhotographyDesign1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Nature'];

  const portfolio = [
    { id: 1, category: 'Weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Sarah & Mike' },
    { id: 2, category: 'Portraits', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Summer Session' },
    { id: 3, category: 'Nature', image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Mountain Peak' },
    { id: 4, category: 'Weddings', image: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'The Vows' },
    { id: 5, category: 'Events', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Concert Night' },
    { id: 6, category: 'Portraits', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Studio Shoot' },
  ];

  const filteredPortfolio = activeCategory === 'All' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeCategory);

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Camera className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl tracking-tight">LENS<span className="text-indigo-600">CRAFT</span></span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Home</a>
              <a href="#portfolio" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Portfolio</a>
              <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">About</a>
              <a href="#contact" className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-indigo-700 transition-all transform hover:scale-105">
                Book Now
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-indigo-600 p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#home" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#portfolio" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#services" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="block px-3 py-3 text-base font-medium text-indigo-600 font-bold bg-indigo-50 rounded-md mt-4" onClick={() => setIsMenuOpen(false)}>Book a Session</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Photographer background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Capturing Moments,<br />Creating <span className="text-indigo-400">Memories</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Professional photography services for weddings, portraits, and special events. We turn your precious moments into timeless art.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#portfolio" className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors">
              View Portfolio
            </a>
            <a href="#contact" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our latest projects and see how we capture the essence of every moment.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-[4/5]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-indigo-400 font-medium text-sm mb-1">{item.category}</span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tailored photography packages designed to meet your specific needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Wedding Photography',
                price: '$1,200',
                description: 'Full day coverage, edited high-res images, and a premium photo album.',
                features: ['8 Hours Coverage', 'Two Photographers', 'Online Gallery', 'Print Release'],
                icon: <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6"><Camera className="w-6 h-6" /></div>
              },
              {
                title: 'Portrait Session',
                price: '$300',
                description: 'Perfect for families, couples, seniors, and professional headshots.',
                features: ['1-2 Hours Session', 'Multiple Locations', '20 Retouched Photos', 'Digital Download'],
                icon: <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6"><ArrowRight className="w-6 h-6" /></div>
              },
              {
                title: 'Event Coverage',
                price: '$150/hr',
                description: 'Capture the energy and atmosphere of your corporate or private events.',
                features: ['Hourly Rates', 'Fast Turnaround', 'Highlight Reel', 'Commercial Usage'],
                icon: <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6"><Camera className="w-6 h-6" /></div>
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100">
                {service.icon}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <div className="text-3xl font-bold text-indigo-600 mb-4">{service.price}</div>
                <p className="text-gray-600 mb-8">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 border-2 border-gray-900 text-gray-900 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-colors">
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-75 blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1554048612-387768052bf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Photographer" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Behind the Lens</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Hi, I'm Alex. I believe that photography is more than just clicking a button; it's about capturing emotion, light, and the fleeting moments that make life beautiful.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                With over 10 years of experience behind the camera, I've had the privilege of documenting hundreds of love stories, family milestones, and unique personalities. My style is natural, candid, and timeless.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-indigo-400 mb-1">10+</div>
                  <div className="text-gray-400 text-sm">Years Exp</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-400 mb-1">500+</div>
                  <div className="text-gray-400 text-sm">Shoots Done</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-400 mb-1">50+</div>
                  <div className="text-gray-400 text-sm">Awards</div>
                </div>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-12 invert opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Ready to book a session or have questions? Fill out the form, and I'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@lenscraft.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Studio</h4>
                    <p className="text-gray-600">123 Creative Ave, Design District, NY</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-10">
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all">
                    <option>Wedding Photography</option>
                    <option>Portrait Session</option>
                    <option>Event Coverage</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all" placeholder="Tell me about your event..."></textarea>
                </div>

                <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Camera className="h-6 w-6 text-indigo-500" />
            <span className="font-bold text-lg text-white">LENS<span className="text-indigo-500">CRAFT</span></span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} LensCraft Photography. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhotographyDesign1;
