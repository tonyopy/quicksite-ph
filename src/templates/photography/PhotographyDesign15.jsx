import React from 'react';
import { Camera, Mail, Instagram, Twitter } from 'lucide-react';

const PhotographyDesign15 = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white font-sans">
      
      {/* Left Side (Fixed) */}
      <div className="md:w-1/2 md:h-screen md:fixed top-0 left-0 p-12 lg:p-24 flex flex-col justify-between bg-gray-50 border-r border-gray-100 z-10">
        <div>
          <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-8">
            <Camera className="w-8 h-8" />
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-none mb-8">
            Visual<br/>Diaries.
          </h1>
          <p className="text-xl text-gray-500 max-w-md leading-relaxed">
            I am a multidisciplinary photographer based in London. I focus on light, texture, and the human condition.
          </p>
        </div>

        <div className="mt-12 md:mt-0">
          <div className="flex gap-6 mb-8">
            <a href="#" className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors hover:scale-110 transform duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors hover:scale-110 transform duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors hover:scale-110 transform duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            Available for freelance<br/>commission 2024
          </p>
        </div>
      </div>

      {/* Right Side (Scrollable) */}
      <div className="md:w-1/2 md:ml-[50%] bg-white">
        <div className="p-4 md:p-12 space-y-12 md:space-y-24">
          
          {[
            { title: 'The Architect', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { title: 'Silent Hills', img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { title: 'Urban Flow', img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { title: 'Portrait Study', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
             { title: 'Night Life', img: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
          ].map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline border-b border-gray-100 pb-4">
                <h2 className="text-3xl font-light">{project.title}</h2>
                <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project
                </span>
              </div>
            </div>
          ))}

          <footer className="py-12 text-center md:text-left text-gray-400 text-sm">
            © 2024 Visual Diaries. All rights reserved.
          </footer>

        </div>
      </div>
    </div>
  );
};

export default PhotographyDesign15;
