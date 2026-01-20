import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const PhotographyDesign10 = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      
      {/* Navigation */}
      <nav className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">P</div>
            <span className="font-bold text-xl tracking-tight">ProStudio<span className="text-blue-600">.</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600">Services</a>
            <a href="#" className="hover:text-blue-600">Client Work</a>
            <a href="#" className="hover:text-blue-600">About Us</a>
            <a href="#" className="hover:text-blue-600">FAQ</a>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
            Get a Quote
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-4 block">Commercial Photography Agency</span>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Elevate Your Brand With <span className="text-blue-600">Professional Imagery</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We specialize in product, corporate headshots, and real estate photography for businesses that demand excellence. Fast turnaround. High ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                View Our Work <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white border border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                Download Rate Card
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 24h Turnaround</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Licensed Usage</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Office" 
              className="relative rounded-2xl shadow-xl w-full border border-slate-200"
            />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-slate-600">Tailored solutions for your business needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Product Photography', desc: 'High-end e-commerce shots on pure white or styled backgrounds.', icon: '📦' },
              { title: 'Corporate Headshots', desc: 'Professional team photos at your office or in our studio.', icon: '👔' },
              { title: 'Event Coverage', desc: 'Documenting conferences, launches, and company milestones.', icon: '🎤' },
            ].map((service, i) => (
              <div key={i} className="p-8 border border-slate-100 rounded-xl hover:shadow-lg hover:border-blue-100 transition-all group">
                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <a href="#" className="text-blue-600 font-bold text-sm hover:underline">Learn more &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            <span className="text-white text-2xl font-bold">ACME Corp</span>
            <span className="text-white text-2xl font-bold">Globex</span>
            <span className="text-white text-2xl font-bold">Soylent</span>
            <span className="text-white text-2xl font-bold">Umbrella</span>
            <span className="text-white text-2xl font-bold">Stark</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PhotographyDesign10;
