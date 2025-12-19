import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, Layout, Printer, Stethoscope, Star, Phone, Mail, MapPin, Facebook, MessageCircle, ClipboardCheck, Rocket, Laptop, ShoppingBag, Scale, Utensils, Heart } from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import { Logo, LogoWhite } from './Logo';

// Import Images
import condoImg from './photo/condo.jpg';
import printingImg from './photo/printing-photo.jpg';
import dentalImg from './photo/dental-clinic.jpg';
import restaurantImg from './photo/restaurant.jpg';
import ecommerceImg from './photo/ecommerce.png';
import lawyersImg from './photo/lawyers.jpg';
import analyticsImg from './photo/analytics-graph.jpg';

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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Logo className="h-9 w-auto" />
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Services</a>
              <a href="#examples" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Examples</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Pricing</a>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 font-bold shadow-lg shadow-blue-600/20 transition-all hover:scale-105">Get Started</a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">Services</a>
              <a href="#examples" className="block text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">Examples</a>
              <a href="#pricing" className="block text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">Pricing</a>
              <a href="#contact" className="block bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 font-medium text-center">Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-blue-50/50 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium text-sm mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Accepting New Clients for 2025
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">20+ Inquiries</span><br className="hidden md:block" /> Per Month
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
              We build high-converting, automated booking websites specifically for Philippine businesses. <span className="text-gray-900 font-semibold">Stop chasing leads and start closing deals.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all hover:scale-105 hover:-translate-y-1">
                View Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#examples" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all hover:scale-105 hover:-translate-y-1">
                See Examples
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-y-4 gap-x-8 text-sm font-medium text-gray-500 mb-16">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Money-back Guarantee</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                <span>GCash Integrated</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                <span>Mobile Optimized</span>
              </div>
            </div>
          </Reveal>
          
          <Reveal className="relative mt-12 max-w-5xl mx-auto">
            <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-white/50 bg-gray-900 aspect-video group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80" 
                alt="Business Analytics Dashboard" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Floating UI Elements */}
              <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 hidden md:block animate-bounce-slow">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Status</p>
                      <p className="font-bold text-gray-900">20+ New Inquiries Today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl font-heading font-extrabold text-gray-900 sm:text-5xl mb-6">
              Specialized Solutions
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed">
              We don't just build generic websites. We build <span className="text-blue-600 font-semibold">automated systems</span> for your specific industry.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Service 1: Condo */}
            <Reveal className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={condoImg}
                  alt="Modern Condo Interior" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a href="#examples" className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    View Demo
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Layout className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Condo Rentals</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  <span className="font-semibold text-gray-900">Fully Booked 24/7.</span> Online booking requests, GCash/Maya payments, digital guest screening.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" /> Online Booking System
                  </li>
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" /> Guest Screening Forms
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Service 2: Printing */}
            <Reveal className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={printingImg}
                  alt="Professional Printing Service" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Printer className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">Printing Shops</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  <span className="font-semibold text-gray-900">Accept Orders Online.</span> Customers upload files, get instant quotes, and pay via GCash/Maya automatically.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" /> File Upload System
                  </li>
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" /> Price Calculator
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Service 3: Dental */}
            <Reveal className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-teal-100 hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={dentalImg}
                  alt="Modern Dental Clinic" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a href="#examples" className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    View Demo
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">Dental Clinics</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  <span className="font-semibold text-gray-900">Zero Phone Tag.</span> Patients book online, get SMS reminders, fill digital forms, and pay deposit.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" /> SMS Reminders
                  </li>
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" /> Patient History Form
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Service 4: Restaurant */}
            <Reveal className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-100 hover:shadow-2xl hover:shadow-orange-900/5 transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={restaurantImg}
                  alt="Restaurant Interior" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a href="#examples" className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    View Demo
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Restaurant / Food</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  <span className="font-semibold text-gray-900">More Orders, Less Chaos.</span> Online table reservations, digital menu, and easy pickup/delivery.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" /> Digital Menu
                  </li>
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" /> Table Reservations
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Service 5: E-commerce */}
            <Reveal className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-pink-100 hover:shadow-2xl hover:shadow-pink-900/5 transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={ecommerceImg}
                  alt="E-commerce" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingBag className="h-7 w-7 text-pink-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">E-commerce Shop</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  <span className="font-semibold text-gray-900">Sell While You Sleep.</span> Beautiful product pages, easy checkout forms, and GCash payment integration.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" /> Mobile-Ready Store
                  </li>
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" /> GCash Integration
                  </li>
                </ul>
                <button 
                  onClick={() => alert("Template gallery coming soon! Contact us for a demo.")}
                  className="w-full mt-2 bg-pink-50 text-pink-700 px-4 py-3 rounded-xl font-bold hover:bg-pink-100 transition-colors flex items-center justify-center gap-2 group-hover:bg-pink-600 group-hover:text-white"
                >
                  <Layout size={18} /> View Templates
                </button>
              </div>
            </Reveal>

            {/* Service 6: Lawyer */}
            <Reveal className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-slate-100 hover:shadow-2xl hover:shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={lawyersImg}
                  alt="Law Office" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Scale className="h-7 w-7 text-slate-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-slate-600 transition-colors">Lawyers & Pros</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  <span className="font-semibold text-gray-900">Paid Consultations Only.</span> Clients book and pay for slots online. Auto-send intake forms.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0" /> Paid Appointments
                  </li>
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0" /> Client Intake Forms
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Service 7: Website Creation */}
            <Reveal className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-purple-100 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-300 hover:-translate-y-1 md:col-span-3 lg:col-span-1">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80" 
                  alt="Website Creation" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a href="#examples" className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    View Demo
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Laptop className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">Custom Website</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  <span className="font-semibold text-gray-900">Build Your Brand.</span> Fully customized, mobile-responsive websites tailored to your unique business needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" /> Custom Design
                  </li>
                  <li className="flex items-center text-gray-600 text-sm font-medium">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" /> SEO Optimized
                  </li>
                </ul>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Before-After Examples */}
      <section id="examples" className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Results</h2>
            <p className="text-xl text-gray-300 mb-12">
              See the difference a professional automated website makes.
            </p>
          </Reveal>

          <Reveal className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">

            {/* BEFORE — Manual Chaos */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-red-900">
              <h3 className="text-2xl font-bold text-red-500 mb-6">BEFORE — Manual Chaos</h3>
              <p className="text-2xl font-bold text-red-400 mb-6">
                Lost ₱150,000+ in missed bookings last year
              </p>
              <ul className="text-left space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-red-500 text-2xl">×</span>
                  Answering “How much?” on FB Messenger 50× a day
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500 text-2xl">×</span>
                  Double bookings and confused schedules
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500 text-2xl">×</span>
                  Chasing payments and sending bank details manually
                </li>
              </ul>
            </div>

            {/* AFTER + Graph */}
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-2xl p-8 border-2 border-green-500 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  RECOMMENDED
                </div>
                <h3 className="text-2xl font-bold text-green-500 mb-6">
                  AFTER — QuickSite Automation
                </h3>
                <p className="text-2xl font-bold text-green-400 mb-6">
                  Now earning an extra <span className="text-4xl">₱80K–₱200K/month</span> on autopilot
                </p>
                <ul className="text-left space-y-4 text-lg mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-2xl">✓</span>
                    Instant automated quotes and booking confirmation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-2xl">✓</span>
                    Synced calendar prevents double bookings
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-2xl">✓</span>
                    Automated GCash payments and receipts
                  </li>
                </ul>
                <a href="#pricing" className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                  I Want These Results
                </a>
              </div>

              {/* Graph with badge */}
              <div className="relative">
                <img
                  src={analyticsImg}
                  alt="479K views and 40.6% conversion rate"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-pulse">
                  479K views · 40.6% conversion
                </div>
              </div>
            </div>

          </Reveal>

          {/* Automation Demos */}
          <Reveal className="mt-24">
            <h3 className="text-3xl font-bold mb-12 text-white">See Automation in Action</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Demo 1: Auto-Reply */}
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 relative">
                <div className="bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                   <Facebook className="h-6 w-6 text-blue-400 absolute top-3 left-4" />
                   <MessageCircle className="h-6 w-6 text-green-400 absolute bottom-3 right-4" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">1. Client Messages</h4>
                <p className="text-gray-400 text-sm">
                  "How much?" on FB or WhatsApp? <br/>System auto-replies with your booking link.
                </p>
              </div>
              
              {/* Demo 2: Client Books */}
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 relative">
                 {/* Arrow for desktop */}
                <div className="hidden md:block absolute top-1/2 -left-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-gray-600" />
                </div>
                <div className="bg-purple-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Layout className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">2. Client Books Online</h4>
                <p className="text-gray-400 text-sm">
                  They click the link and pick a time. Calendar is blocked automatically.
                </p>
              </div>

              {/* Demo 3: Payment & Reminder */}
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 relative">
                 {/* Arrow for desktop */}
                <div className="hidden md:block absolute top-1/2 -left-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-gray-600" />
                </div>
                <div className="bg-green-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">3. You Get Paid</h4>
                <p className="text-gray-400 text-sm">
                  Payment verified via GCash. Email confirmation sent.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process / How It Works */}
      <section className="py-24 bg-blue-50/50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 mix-blend-multiply"></div>
          <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl font-heading font-extrabold text-gray-900 sm:text-5xl mb-6">
              How It Works
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed">
              We handle the heavy lifting. <span className="text-blue-600 font-semibold">You just handle the bookings.</span>
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {/* Desktop Arrows */}
            <div className="hidden md:block absolute top-12 left-[28%] w-[14%] h-px border-t-2 border-dashed border-blue-200 z-0"></div>
            <div className="hidden md:block absolute top-12 right-[28%] w-[14%] h-px border-t-2 border-dashed border-blue-200 z-0"></div>

            {/* Step 1 */}
            <Reveal className="group relative">
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative">
                  <ClipboardCheck className="w-9 h-9" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center text-blue-600 font-bold shadow-sm">
                    1
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Sign Up</h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose your plan and fill out our simple onboarding form with your business details.
                </p>
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal className="group relative" >
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-8 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 relative">
                  <Laptop className="w-9 h-9" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-indigo-100 flex items-center justify-center text-indigo-600 font-bold shadow-sm">
                    2
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">We Build & Setup</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build your website, set up the domain, and configure your automation (3-5 days).
                </p>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal className="group relative">
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/20 mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative">
                  <Rocket className="w-9 h-9" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-purple-100 flex items-center justify-center text-purple-600 font-bold shadow-sm">
                    3
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Launch & Train</h3>
                <p className="text-gray-600 leading-relaxed">
                  We hand over the keys, walk you through your new system, and you start getting bookings.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              No hidden fees. Cancel anytime.
            </p>
          </Reveal>

          <Reveal className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* TIER 1: Starter */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Starter Automation</h3>
                  <p className="text-sm text-gray-500 mb-6">Perfect for side hustles & freelancers.</p>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">₱3,500</span>
                    <span className="text-gray-500 font-medium">/mo</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">One-Page Website</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Basic Booking Form</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Email Notifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Standard Hosting</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 bg-gray-50 mt-auto">
                  <a href="#contact" className="block w-full bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors text-center">
                    Get Started
                  </a>
                </div>
              </div>

              {/* TIER 2: Growth (Highlighted) */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-600 flex flex-col relative transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Growth Automation</h3>
                  <p className="text-sm text-gray-500 mb-6">For businesses ready to scale.</p>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">₱7,000</span>
                    <span className="text-gray-500 font-medium">/mo</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-semibold">Everything in Starter, plus:</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Multi-Page Professional Site</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Online Booking Setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">GCash/Maya Payment Integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Email Booking Notifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">4 Monthly Content Updates</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 bg-blue-50 mt-auto">
                  <a href="#contact" className="block w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors text-center shadow-lg">
                    Choose Growth
                  </a>
                </div>
              </div>

              {/* TIER 3: Scale */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scale & Dominate</h3>
                  <p className="text-sm text-gray-500 mb-6">Full-service digital partnership.</p>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">₱15,000</span>
                    <span className="text-gray-500 font-medium">/mo</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-semibold">Everything in Growth, plus:</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Priority 24/7 Support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Advanced SEO & Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Unlimited Content Updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Dedicated Account Manager</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 bg-gray-50 mt-auto">
                  <a href="#contact" className="block w-full bg-white border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors text-center">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Reveal className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Ready to Automate Your Business?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Fill out the form below to get started. We accept GCash for the initial deposit.
              </p>
            </Reveal>

            <Reveal className="overflow-hidden">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Received! ðŸš€</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Thank you for reaching out. We have received your details and will contact you shortly via WhatsApp or Viber to discuss your project.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form 
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setFormStatus('submitting');
                      
                      // 1. Collect Form Data
                      const formData = {
                        firstName: e.target.firstName.value,
                        lastName: e.target.lastName.value,
                        email: e.target.email.value,
                        phone: e.target.phone.value,
                        business: e.target.business.value,
                        message: e.target.message.value,
                        date: new Date().toISOString()
                      };

                      // 2. Send to Automation (Make.com)
                      const WEBHOOK_URL = "https://hook.eu1.make.com/ui12v2h6btgjjxca9m9c9lifbpu3qkd7"; 
                      
                      try {
                        if (WEBHOOK_URL) {
                          await fetch(WEBHOOK_URL, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(formData)
                          });
                        } else {
                          // Simulate delay if no webhook is set
                          await new Promise(resolve => setTimeout(resolve, 1500));
                        }
                        
                        setFormStatus('success');
                        e.target.reset();
                      } catch (error) {
                        console.error("Error sending form:", error);
                        alert('Something went wrong. Please try again.');
                        setFormStatus('idle');
                      }
                    }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (WhatsApp/Viber)</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          placeholder="0917 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">Business Name / Industry</label>
                      <input 
                        type="text" 
                        id="business" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="e.g. Dental Clinic, Condo Rental, Printing Shop"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help you?</label>
                      <textarea 
                        id="message" 
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                        placeholder="Tell us about your business goals..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-orange-500 text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors shadow-md text-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Submit Inquiry'}
                    </button>
                    
                    <p className="text-xs text-center text-gray-500 mt-4">
                      Your information is secure. We'll never share your data.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <LogoWhite />
              <p className="mt-4 text-gray-400 max-w-sm">
                Helping Filipino businesses grow with automated, professional websites.
              </p>
              <div className="mt-6 flex items-center space-x-2 text-gray-400">
                <div className="bg-blue-900/30 border border-blue-800 rounded px-3 py-1 flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  <span className="text-sm font-medium text-blue-100">DTI Registered</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> (+63)9915241268</li>
                <li className="flex items-center" ><Mail className="h-4 w-4 mr-2" /> info@quicksiteph.com</li>
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Manila City, Philippines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setCurrentPage('privacy'); }} 
                    className="hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setCurrentPage('terms'); }} 
                    className="hover:text-white"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} QuickSite PH. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
