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
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl text-blue-600">QuickSite PH</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">Services</a>
              <a href="#examples" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">Examples</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">Pricing</a>
              <a href="#contact" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 font-medium">Get Started</a>
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
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">Services</a>
              <a href="#examples" className="block text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">Examples</a>
              <a href="#pricing" className="block text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">Pricing</a>
              <a href="#contact" className="block bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-600 font-medium text-center">Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Get <span className="text-blue-600">20+ Inquiries</span> Per Month<br className="hidden md:block" /> or Your Money Back
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-8">
              We build high-converting, automated booking websites specifically for Philippine businesses. Stop chasing leads and start closing deals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg">
                View Plans
              </a>
              <a href="#examples" className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:text-lg">
                See Examples
              </a>
            </div>
            <div className="mt-8 flex justify-center space-x-6 text-sm text-gray-500 mb-12">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Money-back Guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>GCash Integrated</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Mobile Optimized</span>
              </div>
            </div>
          </Reveal>
          
          <Reveal className="relative mt-12 max-w-4xl mx-auto">
            <div className="rounded-xl shadow-2xl overflow-hidden border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
                alt="Business Analytics Dashboard" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="font-bold text-gray-800">20+ New Inquiries</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Specialized Solutions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We don't just build generic websites. We build automated systems for your specific industry.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Condo */}
            <Reveal className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={condoImg}
                  alt="Modern Condo Interior" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-8">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Layout className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Condo Rentals</h3>
                <p className="text-gray-600 mb-6">
                  Fully Booked 24/7 ₱7,000/mo = automated calendar, GCash/Maya payments, real-time availability, guest screening forms + we post your listings monthly                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Real-time Availability
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Guest Screening Forms
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Service 2: Printing */}
            <Reveal className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={printingImg}
                  alt="Professional Printing Service" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-8">
                <div className="bg-indigo-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Printer className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Printing Shops</h3>
                <p className="text-gray-600 mb-6">
                  Accept Orders & Payments Online ₱7,000/mo = customers upload files, get instant quotes, pay GCash/Maya, track orders — no more messy FB Messenger
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> File Upload System
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Price Calculator
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Service 3: Dental */}
            <Reveal className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={dentalImg}
                  alt="Modern Dental Clinic" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-8">
                <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Stethoscope className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dental Clinics</h3>
                <p className="text-gray-600 mb-6">
                  Zero Phone Tag  ₱7,000/mo = patients book online, get SMS reminders, fill digital forms, pay GCash — you just treat
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> SMS Reminders
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Patient History Form
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Service 4: Restaurant */}
            <Reveal className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={restaurantImg}
                  alt="Restaurant Interior" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-8">
                <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Utensils className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Restaurant / Food</h3>
                <p className="text-gray-600 mb-6">
                  More Orders, Less Chaos = Online table reservations, digital menu, and easy pickup/delivery order forms.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Digital Menu
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Table Reservations
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Service 5: E-commerce */}
            <Reveal className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={ecommerceImg}
                  alt="E-commerce" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-8">
                <div className="bg-pink-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <ShoppingBag className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce Shop</h3>
                <p className="text-gray-600 mb-6">
                  Sell While You Sleep = Beautiful product pages, easy checkout forms, and GCash payment integration.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Mobile-Ready Store
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> GCash Integration
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Service 6: Lawyer */}
            <Reveal className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={lawyersImg}
                  alt="Law Office" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-8">
                <div className="bg-slate-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Scale className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lawyers & Pros</h3>
                <p className="text-gray-600 mb-6">
                  Paid Consultations Only = Clients book and pay for slots online. Auto-send intake forms before the meeting.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Paid Appointments
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Client Intake Forms
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Service 7: Website Creation */}
            <Reveal className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80" 
                  alt="Website Creation" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-8">
                <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Laptop className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Website Creation</h3>
                <p className="text-gray-600 mb-6">
                  Build Your Brand = Fully customized, mobile-responsive websites tailored to your unique business needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Custom Design
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> SEO Optimized
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

            {/* BEFORE – Manual Chaos */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-red-900">
              <h3 className="text-2xl font-bold text-red-500 mb-6">BEFORE – Manual Chaos</h3>
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
                  AFTER – QuickSite Automation
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
                  Payment verified via GCash. Reminder sent 24h before appointment.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process / How It Works */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We handle the heavy lifting. You just handle the bookings.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-200 -z-10 transform -translate-y-1/2"></div>

            {/* Step 1 */}
            <Reveal className="bg-white p-8 rounded-xl shadow-md text-center relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 border-4 border-white shadow-lg">
                1
              </div>
              <div className="flex justify-center mb-4">
                <ClipboardCheck className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sign Up</h3>
              <p className="text-gray-600">
                Choose your plan and fill out our simple onboarding form with your business details.
              </p>
            </Reveal>

            {/* Step 2 */}
            <Reveal className="bg-white p-8 rounded-xl shadow-md text-center relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 border-4 border-white shadow-lg">
                2
              </div>
              <div className="flex justify-center mb-4">
                <Laptop className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">We Build & Setup</h3>
              <p className="text-gray-600">
                We build your website, set up the domain, and configure your automation (3-5 days).
              </p>
            </Reveal>

            {/* Step 3 */}
            <Reveal className="bg-white p-8 rounded-xl shadow-md text-center relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 border-4 border-white shadow-lg">
                3
              </div>
              <div className="flex justify-center mb-4">
                <Rocket className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Launch & Train</h3>
              <p className="text-gray-600">
                We hand over the keys, show you how to use the dashboard, and you start getting bookings.
              </p>
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

          <Reveal className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-red-100 text-red-500 px-6 py-3 text-center font-bold text-lg">
              🔥 Limited Slots: Only 5 businesses accepted this month
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">All-in-One Website + Automation Plan</h3>
              
              <div className="mb-8 text-lg text-gray-700">
                <span className="font-bold">₱7,000/mo</span> (billed annually at ₱84,000) → <span className="font-bold text-green-600">Save ₱36,000/year</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Custom Professional Website (Mobile-Responsive)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Automated Booking & Calendar System</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">GCash + Maya + Bank Transfer Payments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Free Domain + Ultra-Fast Hosting (1 year)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">4 Content Updates Every Month (we post for you)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Priority 24/7 WhatsApp/Viber Support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">FREE Setup (worth ₱25,000)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">30-Day Money-Back Guarantee</span>
                </li>
              </ul>
            <p className="text-red-600 font-bold text-xl md:text-xl my-8">
              Price increases to ₱9,900/mo in January <br />
              <span className="text-green-600">→ Current clients locked at ₱7,000 forever</span>
            </p>
              <div className="mt-8">
                <a href="#contact" className="block w-full bg-blue-600 text-white text-center font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-lg">
                  Claim My FREE Setup Before Price Increase <ArrowRight className="ml-2 h-5 w-5" />
                </a>
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Received! 🚀</h3>
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