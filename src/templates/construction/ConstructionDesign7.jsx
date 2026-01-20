import React, { useState } from 'react';
import { Palette, Brush, PaintBucket, Layers, Eye, CheckCircle, Star, Phone, Mail, ArrowRight } from 'lucide-react';

function ConstructionDesign7() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navbar */}
      <nav className="py-6 px-6 border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-2 rounded-lg text-white">
              <Brush className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">CHROMA<span className="font-light">PAINT</span></span>
          </div>
          <div className="hidden md:flex space-x-8 font-bold text-gray-500 text-sm tracking-wide">
            <a href="#" className="hover:text-purple-600 transition-colors">Residential</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Commercial</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Exterior</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Cabinetry</a>
          </div>
          <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition-colors">
            Get Free Estimate
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9]">
                Bring Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Vision to Life.</span>
              </h1>
              <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
                Professional painting services that transform your space. Flawless finishes, vibrant colors, and meticulous attention to detail.
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all transform hover:-translate-y-1">
                  Schedule Quote
                </button>
                <button className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-xl font-bold hover:border-gray-300 transition-colors">
                  See Our Work
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute top-10 left-10 w-full h-full bg-gradient-to-tr from-yellow-200 to-pink-200 rounded-3xl transform rotate-6 -z-10 opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Painting Wall" 
                className="rounded-3xl shadow-2xl w-full object-cover relative z-10"
              />
              {/* Floating Swatches */}
              <div className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 flex flex-col space-y-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-full bg-teal-400"></div>
                <div className="w-10 h-10 rounded-full bg-indigo-500"></div>
                <div className="w-10 h-10 rounded-full bg-rose-400"></div>
                <div className="w-10 h-10 rounded-full bg-amber-300"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Masterful Applications</h2>
            <p className="text-gray-500">We don't just paint walls; we create atmospheres.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500 transition-colors">
                <PaintBucket className="w-7 h-7 text-pink-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">Interior Painting</h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                Walls, ceilings, trim, and doors. We protect your furniture and floors, leaving only beautiful color behind.
              </p>
              <a href="#" className="text-pink-600 font-bold text-sm flex items-center hover:underline">Learn more <ArrowRight className="w-4 h-4 ml-1" /></a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
                <Layers className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cabinet Refinishing</h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                Update your kitchen or bathroom without the cost of replacement. Factory-finish quality spraying.
              </p>
              <a href="#" className="text-indigo-600 font-bold text-sm flex items-center hover:underline">Learn more <ArrowRight className="w-4 h-4 ml-1" /></a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                <Eye className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">Color Consultation</h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                Unsure about shades? Our color experts help you choose the perfect palette to match your style and lighting.
              </p>
              <a href="#" className="text-purple-600 font-bold text-sm flex items-center hover:underline">Learn more <ArrowRight className="w-4 h-4 ml-1" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-white relative">
             {/* Decorative */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-[80px] opacity-30"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-full blur-[80px] opacity-30"></div>

             <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
               <div className="md:w-1/2">
                 <h2 className="text-4xl font-black mb-6">The Chroma Difference</h2>
                 <p className="text-gray-400 text-lg mb-8">
                   We believe painting is an art form. Our crew consists of skilled artisans who take pride in straight lines, smooth finishes, and spotless cleanups.
                 </p>
                 <div className="space-y-4">
                   <div className="flex items-center">
                     <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                     <span className="font-bold text-lg">2-Year Warranty on All Work</span>
                   </div>
                   <div className="flex items-center">
                     <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                     <span className="font-bold text-lg">Premium Paints (Benjamin Moore / Sherwin)</span>
                   </div>
                   <div className="flex items-center">
                     <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                     <span className="font-bold text-lg">Eco-Friendly & Low VOC Options</span>
                   </div>
                 </div>
               </div>
               <div className="md:w-1/2">
                 <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white/10 backdrop-blur p-6 rounded-2xl text-center border border-white/10">
                     <div className="text-4xl font-black text-pink-500 mb-2">500+</div>
                     <div className="text-sm font-bold uppercase tracking-wide">Homes Painted</div>
                   </div>
                   <div className="bg-white/10 backdrop-blur p-6 rounded-2xl text-center border border-white/10">
                     <div className="text-4xl font-black text-purple-500 mb-2">15</div>
                     <div className="text-sm font-bold uppercase tracking-wide">Years Exp</div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-8">Ready for a Transformation?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">
               <Phone className="w-5 h-5 mr-2" /> (555) 777-8888
             </button>
             <button className="flex items-center justify-center bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:border-gray-900 transition-colors">
               <Mail className="w-5 h-5 mr-2" /> Email Us
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200 text-sm text-gray-500">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
           <div className="flex items-center space-x-2 mb-4 md:mb-0 opacity-75">
            <Brush className="w-5 h-5 text-gray-900" />
            <span className="font-bold text-gray-900">CHROMA</span>
           </div>
           <div>© 2024 Chroma Paint Co. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default ConstructionDesign7;