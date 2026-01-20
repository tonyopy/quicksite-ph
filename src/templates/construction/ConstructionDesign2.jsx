import React, { useState } from 'react';
import { PaintBucket, Layout, Home, Check, Image, PenTool, ArrowRight, Star, Heart } from 'lucide-react';

function ConstructionDesign2() {
  const [activeTab, setActiveTab] = useState('kitchen');

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Navbar */}
      <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-stone-800 text-white p-2 rounded">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">ELEVATE<span className="font-light">REMODEL</span></span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
            <a href="#" className="hover:text-stone-900">Portfolio</a>
            <a href="#" className="hover:text-stone-900">Services</a>
            <a href="#" className="hover:text-stone-900">Process</a>
            <a href="#" className="hover:text-stone-900">Reviews</a>
          </div>
          <button className="bg-stone-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors">
            Book Consultation
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-tight mb-6 text-stone-900">
                Transform Your Living Space.
              </h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-lg">
                We specialize in high-end kitchen, bathroom, and full-home renovations that blend functionality with timeless design.
              </p>
              <div className="flex gap-4">
                <button className="bg-stone-800 text-white px-8 py-3 rounded-full font-medium hover:bg-stone-700 transition-colors flex items-center">
                  View Our Work <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="text-stone-800 px-8 py-3 rounded-full font-medium border border-stone-300 hover:bg-stone-100 transition-colors">
                  Our Process
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-stone-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <img 
                src="https://images.unsplash.com/photo-1484154218962-a1c002085d2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Beautiful Kitchen" 
                className="rounded-2xl shadow-2xl relative z-10 w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-sm font-medium text-stone-800">"They completely transformed our outdated kitchen into a modern masterpiece."</p>
                <p className="text-xs text-stone-500 mt-2">— Sarah Jenkins, Homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif mb-4">Crafting Beautiful Homes</h2>
            <p className="text-stone-600">We handle every aspect of your renovation with precision and care, from initial design to final touches.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Layout className="w-6 h-6" />, title: 'Kitchen Remodeling', desc: 'Custom cabinetry, countertops, and layouts designed for your lifestyle.' },
              { icon: <PaintBucket className="w-6 h-6" />, title: 'Bathroom Renovations', desc: 'Spa-like retreats with modern fixtures and elegant tiling.' },
              { icon: <PenTool className="w-6 h-6" />, title: 'Interior Design', desc: 'Expert color consultation, material selection, and space planning.' },
            ].map((service, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-2xl hover:bg-stone-100 transition-colors">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mb-6 text-stone-800">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif">{service.title}</h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
                <a href="#" className="text-sm font-bold text-stone-800 border-b border-stone-800 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Tabs */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif mb-2">Featured Projects</h2>
              <p className="text-stone-600">Explore our recent renovations.</p>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0 bg-white p-1 rounded-full shadow-sm">
              {['kitchen', 'bathroom', 'living'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-stone-800 text-white shadow-md' 
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
              <img 
                src={activeTab === 'kitchen' ? "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" : 
                     activeTab === 'bathroom' ? "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" :
                     "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"}
                alt="Project 1" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-stone-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">View Project</button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
              <img 
                src={activeTab === 'kitchen' ? "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" : 
                     activeTab === 'bathroom' ? "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" :
                     "https://images.unsplash.com/photo-1560185127-6a6a6c76c276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"}
                alt="Project 2" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-stone-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">View Project</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After / CTA */}
      <section className="py-20 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-800 transform skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-serif mb-6">Ready to love your home again?</h2>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed">
              Whether you're looking to update a single room or renovate your entire home, our team of experts is here to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition-colors shadow-lg shadow-stone-900/50">
                Schedule Free Consultation
              </button>
              <button className="border border-stone-600 text-white px-8 py-4 rounded-full font-bold hover:bg-stone-800 transition-colors">
                Download Lookbook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-stone-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-stone-800 text-white p-1.5 rounded">
              <Home className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-stone-800">ELEVATE</span>
          </div>
          <div className="text-stone-500 text-sm">
            © 2024 Elevate Remodeling. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-stone-400 hover:text-stone-800 transition-colors"><span className="sr-only">Instagram</span><Image className="w-5 h-5" /></a>
            <a href="#" className="text-stone-400 hover:text-stone-800 transition-colors"><span className="sr-only">Facebook</span><Heart className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ConstructionDesign2;