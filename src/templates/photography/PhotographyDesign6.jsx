import React from 'react';

const PhotographyDesign6 = () => {
  return (
    <div className="bg-[#fcfbf9] min-h-screen text-gray-900 font-serif">
      {/* Top Bar */}
      <div className="border-b border-gray-200 py-4 text-center text-xs font-sans tracking-widest uppercase text-gray-500">
        Issue 24 • The Natural Light Edition • Oct 2024
      </div>

      {/* Navigation */}
      <nav className="py-12 text-center">
        <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight mb-8">
          The Chronicle
        </h1>
        <div className="flex justify-center gap-8 md:gap-16 font-sans text-sm tracking-widest uppercase border-y border-gray-200 py-4 max-w-4xl mx-auto">
          <a href="#" className="hover:text-amber-700 transition-colors">Portraits</a>
          <a href="#" className="hover:text-amber-700 transition-colors">Landscape</a>
          <a href="#" className="hover:text-amber-700 transition-colors">Documentary</a>
          <a href="#" className="hover:text-amber-700 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Main Feature */}
      <main className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Text) */}
          <div className="lg:col-span-4 lg:sticky lg:top-12">
            <span className="font-sans text-amber-700 font-bold tracking-widest text-xs uppercase mb-4 block">Featured Story</span>
            <h2 className="text-4xl md:text-5xl leading-tight mb-8 italic">
              "Capturing the silence between the chaos."
            </h2>
            <div className="prose prose-lg text-gray-600 font-serif">
              <p className="first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:font-bold">
                L
                ight has a way of revealing the truth. In my latest series, I explored the remote villages of the Alps, looking for stories etched into the faces of the locals.
              </p>
              <p>
                There is no posing here. Only waiting. Waiting for the sun to hit the ridge, waiting for a glance, waiting for the moment to present itself.
              </p>
              <p>
                This collection is a testament to patience and the timeless art of observation.
              </p>
            </div>
            <div className="mt-12 pt-12 border-t border-gray-200">
              <p className="font-sans text-xs uppercase tracking-widest text-gray-400 mb-2">Photographer</p>
              <p className="font-bold">Elena Vance</p>
            </div>
          </div>

          {/* Right Column (Images) */}
          <div className="lg:col-span-8 space-y-24">
            <figure>
              <img 
                src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Main Feature" 
                className="w-full h-auto shadow-sm"
              />
              <figcaption className="mt-4 font-sans text-xs text-gray-500 text-right uppercase tracking-widest">
                Fig 1. The Morning Mist
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 gap-8">
               <figure>
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Portrait 1" 
                  className="w-full h-auto shadow-sm"
                />
                <figcaption className="mt-4 font-sans text-xs text-gray-500 uppercase tracking-widest">
                  Fig 2. Maria
                </figcaption>
              </figure>
               <figure className="mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1554151228-14d9def656ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Portrait 2" 
                  className="w-full h-auto shadow-sm"
                />
                <figcaption className="mt-4 font-sans text-xs text-gray-500 uppercase tracking-widest">
                  Fig 3. The Hands
                </figcaption>
              </figure>
            </div>

            <figure>
              <img 
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Landscape" 
                className="w-full h-auto shadow-sm"
              />
              <figcaption className="mt-4 font-sans text-xs text-gray-500 text-right uppercase tracking-widest">
                Fig 4. The Valley
              </figcaption>
            </figure>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-24 text-center">
        <h2 className="text-3xl font-serif italic mb-8">Ready to tell your story?</h2>
        <a href="#" className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors font-sans uppercase tracking-widest text-sm">
          Get in Touch
        </a>
      </footer>
    </div>
  );
};

export default PhotographyDesign6;
