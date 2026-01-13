import React, { useEffect, useState, useRef } from 'react';
import { ArrowLeft, Linkedin, Facebook, Globe, Award, Code, Zap } from 'lucide-react';

function Reveal({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`${className} reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
      {children}
    </div>
  );
}

function About({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - QuickSite PH</title>
        <meta name="description" content="Learn about QuickSite PH, the agency helping Filipino businesses grow with automated websites. Meet our founder Mark Anthony Dagon." />
        <link rel="canonical" href="https://quicksiteph.com/" />
      </Helmet>
      {/* Navigation Bar for About Page */}
      <nav className="absolute top-0 w-full p-6 z-10">
        <div className="container mx-auto">
          <button 
            onClick={onBack}
            className="group flex items-center text-gray-600 hover:text-blue-600 font-bold transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              We Build Digital <span className="text-blue-400">Growth Engines</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              QuickSitePH isn't just a web design agency. We are your automation partner, helping Filipino businesses scale without the burnout.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
              {/* Left: Founder Visual */}
              <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-900 relative p-8 flex flex-col items-center justify-center text-center text-white min-h-[400px]">
                <div className="absolute inset-0 bg-grid-white/[0.1] pointer-events-none"></div>
                
                {/* Founder Avatar Placeholder */}
                <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/20 flex items-center justify-center text-5xl font-bold mb-6 shadow-xl relative overflow-hidden group">
                  <span className="group-hover:scale-110 transition-transform duration-500">MD</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-2">Mark Anthony Dagon</h2>
                <p className="text-blue-200 font-medium mb-8">Founder & Lead Developer</p>
                
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/mark-anthony-dagon-41b478213/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61574823853351" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
                    title="Facebook Page"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="mailto:info@quicksiteph.com" 
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
                    title="Email Me"
                  >
                    <Globe className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Right: Founder Story */}
              <div className="md:w-3/5 p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                  <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Our Story</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Bridging the Gap Between Tech & Business</h3>
                
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    "I started QuickSitePH with a simple goal: to stop small business owners from burning out over admin tasks."
                  </p>
                  <p>
                    With a background in software engineering, I saw how big companies used automation to scale. I wanted to bring that same power to local salons, clinics, and shops—without the enterprise price tag.
                  </p>
                  <p>
                    Today, we help businesses across the Philippines and beyond modernize their operations, saving them hundreds of hours and allowing them to focus on what truly matters: their customers.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-8">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-500">Filipino Owned</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">2025</div>
                    <div className="text-sm text-gray-500">Established</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why We Do What We Do
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Reveal className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Code className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Simplicity First</h3>
              <p className="text-gray-600">
                Technology should simplify your life, not complicate it. We build systems that anyone can use, no coding required.
              </p>
            </Reveal>

            <Reveal className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automation is Key</h3>
              <p className="text-gray-600">
                Manual work kills growth. We automate the boring stuff—bookings, emails, invoices—so you can scale faster.
              </p>
            </Reveal>

            <Reveal className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accessible Quality</h3>
              <p className="text-gray-600">
                Professional websites shouldn't cost a fortune. We offer premium design and tech at prices local businesses can afford.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
