import React, { useState } from 'react';
import { Menu, X, Star } from 'lucide-react';

const CleaningDesign9 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-serif text-amber-900 bg-[#FFFBF0] min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#FFFBF0] border-b-4 border-amber-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <div className="text-3xl font-bold tracking-tight flex flex-col items-center leading-none">
              <span className="text-sm uppercase tracking-widest text-amber-600">Est. 1995</span>
              <span>Mrs. Higgins</span>
            </div>
            <div className="hidden md:flex gap-8 font-bold text-amber-800 uppercase tracking-widest text-sm">
              <a href="#" className="hover:underline decoration-2 underline-offset-4">Our Story</a>
              <a href="#" className="hover:underline decoration-2 underline-offset-4">Services</a>
              <a href="#" className="bg-amber-800 text-[#FFFBF0] px-6 py-2 rounded-sm hover:bg-amber-900 transition-colors">
                Book Visit
              </a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-amber-500 fill-current" />
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-amber-900">
            Old-Fashioned Cleaning, <br/> <span className="italic font-normal text-amber-700">Modern Reliability.</span>
          </h1>
          <p className="text-xl text-amber-800/80 mb-12 leading-relaxed font-sans max-w-2xl mx-auto">
            We clean homes the way they used to be cleaned—with elbow grease, care, and attention to every little detail.
          </p>
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-amber-800 translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <button className="relative bg-[#FFFBF0] border-2 border-amber-800 text-amber-900 px-10 py-4 text-lg font-bold uppercase tracking-widest hover:-translate-y-1 hover:-translate-x-1 transition-transform">
              Schedule Service
            </button>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="relative h-80 border-4 border-white shadow-xl rotate-1 bg-amber-100 flex items-center justify-center overflow-hidden">
             <div className="text-center opacity-40">
                <Star className="w-24 h-24 text-amber-700 mx-auto mb-2" />
                <span className="text-amber-800 font-serif text-lg italic">Trusted Since 1995</span>
             </div>
          </div>
          <div className="relative h-80 border-4 border-white shadow-xl -rotate-1 top-8 md:top-12 bg-amber-100 flex items-center justify-center overflow-hidden">
             <div className="text-center opacity-40">
                <Star className="w-24 h-24 text-amber-700 mx-auto mb-2" />
                <span className="text-amber-800 font-serif text-lg italic">Family Values</span>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 bg-amber-100 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-amber-900 leading-relaxed mb-8">
            "They simply don't make cleaning services like this anymore. Mrs. Higgins team treats my home with such respect and care. It smells like fresh lemons and nostalgia."
          </p>
          <div className="font-bold text-amber-800 uppercase tracking-widest text-sm">— Maria C., Quezon City</div>
        </div>
      </section>
    </div>
  );
};

export default CleaningDesign9;
