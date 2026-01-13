import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Layout, Printer, Stethoscope, Star, Phone, Mail, MapPin, Facebook, MessageCircle, ClipboardCheck, Rocket, Laptop, ShoppingBag, Scale, Utensils, Heart, Globe, Headphones, CreditCard, ShieldCheck, Smartphone, MousePointerClick, Calendar, Package, Share2, LifeBuoy, Scissors, GraduationCap, Home, ShoppingCart, Briefcase, Camera, Dumbbell, Video, Users, HelpCircle, ChevronDown, ChevronUp, Hammer, Wrench, Instagram, Linkedin, Youtube, Quote, Twitter } from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import About from './About';
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
  const [currency, setCurrency] = useState('PHP'); // PHP or USD
  
  // Calculator State
  const [calculatorData, setCalculatorData] = useState({
    inquiries: 5,
    scheduling: 2,
    orders: 2,
    followup: 3
  });
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'about') {
    return <About onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Helmet>
        <title>QuickSite PH - Automated Websites for Filipino Businesses</title>
        <meta name="description" content="QuickSite PH builds automated, professional websites for Filipino businesses. Increase bookings and sales with our affordable web design packages." />
        <meta name="keywords" content="web design philippines, website builder, automated booking system, small business website, condo rental website, clinic website, quicksite ph, affordable web design, ecommerce development philippines, salon booking system, tutorial center management, real estate website builder, digital automation philippines, online appointment scheduling, seo friendly websites, mobile responsive design, smes philippines" />
        <link rel="canonical" href="https://quicksiteph.com/" />
      </Helmet>
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
              
              {/* Currency Toggle Removed */}

              <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 font-bold shadow-lg shadow-blue-600/20 transition-all hover:scale-105">Get Started</a>
            </div>
            <div className="md:hidden flex items-center gap-4">
               {/* Mobile Currency Toggle Removed */}

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
              Automated Websites That <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Work 24/7 for Your Business</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
              Get a professional website + smart automation that captures leads, books appointments, and handles tasks while you sleep. <span className="text-gray-900 font-semibold">Starting at ₱20,000 / $357.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all hover:scale-105 hover:-translate-y-1">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#process" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all hover:scale-105 hover:-translate-y-1">
                See How It Works
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
             {/* Automation Workflow Visual */}
             <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-white/50 bg-slate-900 aspect-video md:aspect-[21/9] group relative flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-0"></div>
                
                {/* Workflow Container */}
                <div className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                   
                   {/* Step 1: Form */}
                   <div className="flex flex-col items-center group/step1">
                      <div className="w-20 h-20 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-sm mb-4 group-hover/step1:border-blue-500 group-hover/step1:bg-blue-500/20 transition-all duration-500 relative">
                         <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">1</div>
                         <ClipboardCheck className="w-10 h-10 text-blue-400 group-hover/step1:text-white transition-colors" />
                      </div>
                      <div className="text-center">
                         <div className="font-bold text-white mb-1">Lead Captures</div>
                         <div className="text-xs text-slate-400">Client fills form</div>
                      </div>
                   </div>

                   {/* Arrow 1 */}
                   <div className="hidden md:flex flex-1 items-center justify-center relative">
                      <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                         <div className="h-full w-1/2 bg-blue-500 animate-loading-bar"></div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-500 absolute right-0 -mt-2.5" />
                   </div>
                   <ArrowRight className="w-6 h-6 text-slate-600 md:hidden rotate-90" />

                   {/* Step 2: Auto-Email */}
                   <div className="flex flex-col items-center group/step2">
                      <div className="w-20 h-20 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-sm mb-4 group-hover/step2:border-green-500 group-hover/step2:bg-green-500/20 transition-all duration-500 delay-150 relative">
                         <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white">2</div>
                         <Mail className="w-10 h-10 text-green-400 group-hover/step2:text-white transition-colors" />
                      </div>
                      <div className="text-center">
                         <div className="font-bold text-white mb-1">Auto-Response</div>
                         <div className="text-xs text-slate-400">Instant email sent</div>
                      </div>
                   </div>

                   {/* Arrow 2 */}
                   <div className="hidden md:flex flex-1 items-center justify-center relative">
                      <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                         <div className="h-full w-1/2 bg-green-500 animate-loading-bar delay-300"></div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-500 absolute right-0 -mt-2.5" />
                   </div>
                   <ArrowRight className="w-6 h-6 text-slate-600 md:hidden rotate-90" />

                   {/* Step 3: Database */}
                   <div className="flex flex-col items-center group/step3">
                      <div className="w-20 h-20 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-sm mb-4 group-hover/step3:border-purple-500 group-hover/step3:bg-purple-500/20 transition-all duration-500 delay-300 relative">
                         <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white">3</div>
                         <div className="relative">
                            <div className="absolute inset-0 bg-purple-500 blur-lg opacity-20 animate-pulse"></div>
                            <Layout className="w-10 h-10 text-purple-400 group-hover/step3:text-white transition-colors relative z-10" />
                         </div>
                      </div>
                      <div className="text-center">
                         <div className="font-bold text-white mb-1">Database Update</div>
                         <div className="text-xs text-slate-400">Saved to Sheets/CRM</div>
                      </div>
                   </div>

                </div>

                {/* Floating Notification */}
                <div className="absolute top-8 right-8 animate-bounce-slow hidden md:block">
                   <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-xl flex items-center gap-3 max-w-[200px]">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                         <MessageCircle className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                         <div className="text-[10px] text-slate-400 font-bold uppercase">New Lead</div>
                         <div className="text-xs text-white font-medium">John D. just booked!</div>
                      </div>
                   </div>
                </div>

             </div>
          </Reveal>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">Running a Business is Hard Enough</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-500">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <p className="text-gray-600 font-medium text-lg">Answering the same questions on social media all day</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-500">
                  <ClipboardCheck className="w-8 h-8" />
                </div>
                <p className="text-gray-600 font-medium text-lg">Manually tracking orders and losing information</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-500">
                  <Star className="w-8 h-8" />
                </div>
                <p className="text-gray-600 font-medium text-lg">Missing customers because you can't reply late at night</p>
              </div>
            </div>
            <p className="text-2xl text-blue-600 font-bold">What if your website could handle all of this automatically?</p>
          </Reveal>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-extrabold text-gray-900 sm:text-5xl mb-6">
              Website + Automation = <span className="text-blue-600">Your 24/7 Digital Employee</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              We don't just build websites. We build systems that automate your repetitive tasks, save you hours every week, and never miss a customer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Real Examples Section */}
      <section id="examples" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl font-heading font-extrabold text-gray-900 sm:text-5xl mb-6">
              See Automation in Action
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed">
              Real workflows we've built for businesses like yours
            </p>
          </Reveal>

          <div className="space-y-24">
            {/* Example 1: Beauty Salon */}
            <Reveal>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                   {/* Mockup */}
                   <div className="bg-slate-100 p-4 border-b border-gray-200 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="text-xs text-gray-400 ml-2 font-mono">calendar.google.com</div>
                   </div>
                   <div className="p-6 bg-white min-h-[300px]">
                      <div className="space-y-4">
                         <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-md">
                            <div className="text-sm font-bold text-blue-700">Haircut - Sarah J.</div>
                            <div className="text-xs text-blue-500">10:00 AM - 11:00 AM</div>
                         </div>
                         <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-md">
                            <div className="text-sm font-bold text-green-700">Manicure - Mike T.</div>
                            <div className="text-xs text-green-500">11:30 AM - 12:30 PM</div>
                         </div>
                         <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded-r-md opacity-50">
                            <div className="text-sm font-bold text-purple-700">Lunch Break</div>
                            <div className="text-xs text-purple-500">1:00 PM - 2:00 PM</div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <span className="bg-pink-100 p-2 rounded-lg text-pink-600"><Heart className="w-6 h-6" /></span>
                    Beauty Salon Booking System
                  </h3>
                  <p className="text-gray-500 mb-6">No more back-and-forth messaging to find a free slot.</p>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
                    <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wide mb-4 border-b border-gray-100 pb-2">What Gets Automated:</h4>
                    <ul className="space-y-3">
                      {[
                        "Customers book appointments online anytime",
                        "Auto-send confirmation email/SMS",
                        "Auto-update Google Calendar",
                        "Send reminder 24 hours before appointment",
                        "Collect customer info for promotions",
                        "Request reviews after appointment"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                    Impact: Saves 10 hours per week
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Example 2: Online Store */}
            <Reveal>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <span className="bg-blue-100 p-2 rounded-lg text-blue-600"><ShoppingBag className="w-6 h-6" /></span>
                    Online Store Order Processing
                  </h3>
                  <p className="text-gray-500 mb-6">Sell products while you sleep without the manual admin work.</p>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
                    <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wide mb-4 border-b border-gray-100 pb-2">What Gets Automated:</h4>
                    <ul className="space-y-3">
                      {[
                        "Customer orders through website form",
                        "Auto-calculate total with discounts",
                        "Send payment instructions instantly",
                        "Update inventory in real-time",
                        "Notify owner via Viber/WhatsApp",
                        "Generate order tracking"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                    Impact: Never miss an order, even at 2 AM
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                   {/* Mockup */}
                   <div className="bg-slate-100 p-4 border-b border-gray-200 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="text-xs text-gray-400 ml-2 font-mono">mystore.com/checkout</div>
                   </div>
                   <div className="p-6 bg-gray-50 min-h-[300px] flex items-center justify-center">
                      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xs">
                         <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                            <span className="font-bold text-gray-900">Order #1024</span>
                            <span className="bg-yellow-100 text-amber-600 text-xs px-2 py-1 rounded-full font-bold">Pending Payment</span>
                         </div>
                         <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-sm">
                               <span className="text-gray-500">Premium T-Shirt x 2</span>
                               <span className="font-bold">₱1,000.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                               <span className="text-gray-500">Shipping</span>
                               <span className="font-bold">₱150.00</span>
                            </div>
                            <div className="flex justify-between text-base font-bold pt-2 border-t border-gray-100">
                               <span>Total</span>
                               <span className="text-blue-600">₱1,150.00</span>
                            </div>
                         </div>
                         <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-bold">Pay via GCash</button>
                      </div>
                   </div>
                </div>
              </div>
            </Reveal>

            {/* Example 3: Service Business */}
            <Reveal>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                   {/* Mockup */}
                   <div className="bg-slate-100 p-4 border-b border-gray-200 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="text-xs text-gray-400 ml-2 font-mono">inquiries.inbox</div>
                   </div>
                   <div className="p-6 bg-white min-h-[300px]">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Recent Inquiries</h4>
                      <div className="space-y-3">
                         <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">J</div>
                               <div>
                                  <div className="text-sm font-bold text-gray-900">John Doe</div>
                                  <div className="text-xs text-gray-500">Inquiry: "How much?"</div>
                               </div>
                            </div>
                            <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded">Auto-Replied</span>
                         </div>
                         <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">S</div>
                               <div>
                                  <div className="text-sm font-bold text-gray-900">Sarah Smith</div>
                                  <div className="text-xs text-gray-500">Inquiry: "Available dates?"</div>
                               </div>
                            </div>
                            <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded">Link Sent</span>
                         </div>
                         <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">M</div>
                               <div>
                                  <div className="text-sm font-bold text-gray-900">Mike Ross</div>
                                  <div className="text-xs text-gray-500">Booking Confirmed</div>
                               </div>
                            </div>
                            <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">Notified</span>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <span className="bg-indigo-100 p-2 rounded-lg text-indigo-600"><Briefcase className="w-6 h-6" /></span>
                    Service Business Automation
                  </h3>
                  <p className="text-gray-500 mb-6">Stop answering the same questions all day. Let your website do it.</p>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
                    <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wide mb-4 border-b border-gray-100 pb-2">What Gets Automated:</h4>
                    <ul className="space-y-3">
                      {[
                        "Reply to 'How much?' instantly",
                        "Send your portfolio/rates automatically",
                        "Filter out non-serious inquiries",
                        "Follow up with leads who don't reply",
                        "Schedule calls/appointments",
                        "Notify you only when it's important"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold">
                    Impact: Save 2-3 hours every day
                  </div>
                </div>
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
      <section id="process" className="py-24 bg-blue-50/50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 mix-blend-multiply"></div>
          <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl font-heading font-extrabold text-gray-900 sm:text-5xl mb-6">
              From Idea to Launch in 3 Simple Steps
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {/* Desktop Arrows */}
            <div className="hidden md:block absolute top-12 left-[28%] w-[14%] h-px border-t-2 border-dashed border-blue-200 z-0"></div>
            <div className="hidden md:block absolute top-12 right-[28%] w-[14%] h-px border-t-2 border-dashed border-blue-200 z-0"></div>

            {/* Step 1 */}
            <Reveal className="group relative">
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative">
                  <MessageCircle className="w-9 h-9" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center text-blue-600 font-bold shadow-sm">
                    1
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Discovery Call</h3>
                <p className="text-blue-600 font-bold text-sm mb-4">Free - 30 minutes</p>
                <p className="text-gray-600 leading-relaxed">
                  We discuss your business needs and goals via Zoom/Google Meet. No technical knowledge required.
                </p>
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal className="group relative" >
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-8 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 relative">
                  <Wrench className="w-9 h-9" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-indigo-100 flex items-center justify-center text-indigo-600 font-bold shadow-sm">
                    2
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">We Build</h3>
                <p className="text-indigo-600 font-bold text-sm mb-4">1-2 weeks</p>
                <p className="text-gray-600 leading-relaxed">
                  We create your custom website and set up automation workflows. You'll review and approve the design.
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
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Launch & Training</h3>
                <p className="text-purple-600 font-bold text-sm mb-4">Ongoing Support</p>
                <p className="text-gray-600 leading-relaxed">
                  We launch your site, train you on how to use it, and provide ongoing support.
                </p>
              </div>
            </Reveal>
          </div>
          
          <div className="text-center mt-12">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all hover:scale-105">
              Schedule Your Free Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose QuickSite PH?
            </h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Globe, color: "blue", title: "Serves Local & International Clients", desc: "Accept payments in PHP and USD. Work with clients worldwide." },
              { icon: MessageCircle, color: "green", title: "Responsive Support", desc: "Get help via email, WhatsApp, or Viber. We reply within 24 hours." },
              { icon: CreditCard, color: "purple", title: "Transparent Pricing", desc: "No hidden fees. Payment plans available. See exactly what you pay." },
              { icon: ShieldCheck, color: "indigo", title: "Full Maintenance Included", desc: "Hosting, updates, security, and backups all handled for you." },
              { icon: Smartphone, color: "pink", title: "Mobile-First Design", desc: "Most people browse on phones. We build for mobile first, desktop second." },
              { icon: MousePointerClick, color: "orange", title: "Easy to Use", desc: "We train you to manage your site. No technical skills needed." }
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow bg-gray-50 h-full">
                  <div className={`w-14 h-14 rounded-full bg-${item.color}-100 flex items-center justify-center text-${item.color}-600 mb-4`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
        {/* Decorative blur */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
              Trusted by Filipino Business Owners
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here's what happens when you automate your business.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "I used to spend 2 hours every night replying to inquiries on Messenger. Now, the website handles it. I've doubled my bookings without doing extra work.",
                author: "Sarah M.",
                role: "Salon Owner, Manila",
                rating: 5
              },
              {
                quote: "The automated billing system is a lifesaver. Customers pay via GCash, and I just get a notification. No more chasing payments!",
                author: "Ryan T.",
                role: "Tutorial Center Director, Cebu",
                rating: 5
              },
              {
                quote: "QuickSite PH didn't just build a website; they built a sales machine. The investment paid for itself in the first month.",
                author: "Miguel D.",
                role: "E-commerce Founder, Davao",
                rating: 5
              }
            ].map((item, i) => (
              <Reveal key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all hover:-translate-y-1 shadow-xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, r) => (
                    <Star key={r} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-400 opacity-30 transform -scale-x-100" />
                  <p className="text-lg text-gray-100 italic leading-relaxed relative z-10 pl-4">"{item.quote}"</p>
                </div>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center font-bold text-white text-lg shadow-lg">
                    {item.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white">{item.author}</div>
                    <div className="text-sm text-blue-200">{item.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Examples Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Popular Automation Workflows We Build
            </h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Lead Capture System", flow: "Form submission → CRM → Auto-email → Sales notification" },
              { title: "Appointment Booking", flow: "Calendar booking → Confirmation → Reminders → Follow-up" },
              { title: "Order Processing", flow: "Order form → Payment → Inventory update → Shipping notification" },
              { title: "Review Collection", flow: "Service completion → Wait 3 days → Request review → Thank you" },
              { title: "Social Media Posting", flow: "Blog post → Auto-share to Facebook/Instagram/LinkedIn" },
              { title: "Customer Support", flow: "FAQ chatbot → Ticket creation → Auto-response → Team notification" }
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 font-mono border border-slate-100">
                    {item.flow}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Built for These Industries (and More)
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Scissors, name: "Beauty Salons & Spas" },
              { icon: Utensils, name: "Restaurants & Food" },
              { icon: GraduationCap, name: "Tutorial Centers" },
              { icon: Home, name: "Real Estate Agents" },
              { icon: ShoppingBag, name: "Online Shops" },
              { icon: Briefcase, name: "Professional Services" },
              { icon: Camera, name: "Events & Photo" },
              { icon: Dumbbell, name: "Fitness Centers" }
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-center h-full group">
                  <item.icon className="w-10 h-10 text-gray-400 group-hover:text-blue-600 mb-4 transition-colors" />
                  <span className="font-medium text-gray-700 group-hover:text-blue-900">{item.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
              Calculate Your Time Savings
            </h2>
            <p className="text-blue-200">See how much time and money automation can save you.</p>
          </Reveal>

          <Reveal className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="font-bold text-xl mb-6">How many hours per week do you spend on:</h3>
                
                {[
                  { label: "Answering inquiries", key: "inquiries", max: 20 },
                  { label: "Scheduling appointments", key: "scheduling", max: 10 },
                  { label: "Processing orders", key: "orders", max: 15 },
                  { label: "Following up with customers", key: "followup", max: 10 }
                ].map((item) => (
                  <div key={item.key}>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-blue-100">{item.label}</label>
                      <span className="text-sm font-bold text-white">{calculatorData[item.key]} hrs</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max={item.max} 
                      value={calculatorData[item.key]} 
                      onChange={(e) => setCalculatorData({...calculatorData, [item.key]: parseInt(e.target.value)})}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-center items-center bg-black/20 rounded-xl p-8 border border-white/10">
                <div className="text-center space-y-6">
                  <div>
                    <div className="text-blue-300 text-sm font-bold uppercase tracking-wider mb-1">Time Saved</div>
                    <div className="text-5xl font-extrabold text-white mb-1">
                      {Object.values(calculatorData).reduce((a, b) => a + b, 0)} <span className="text-2xl text-blue-300">hrs/week</span>
                    </div>
                    <div className="text-sm text-blue-200">
                      = {Object.values(calculatorData).reduce((a, b) => a + b, 0) * 4} hours per month
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-white/10"></div>
                  
                  <div>
                    <div className="text-green-400 text-sm font-bold uppercase tracking-wider mb-1">Value Saved</div>
                    <div className="text-4xl font-extrabold text-green-400 mb-1">
                      ₱{(Object.values(calculatorData).reduce((a, b) => a + b, 0) * 4 * 500).toLocaleString()}
                    </div>
                    <div className="text-sm text-green-400/80">
                      worth of your time monthly (at ₱500/hr)
                    </div>
                  </div>

                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm inline-block animate-pulse">
                    Automation pays for itself!
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Choose Your Package
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Transparent pricing. No hidden fees. Cancel anytime.
            </p>
          </Reveal>

          <Reveal className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* TIER 1: Starter */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Starter Package</h3>
                  <p className="text-sm text-gray-500 mb-6">Essential online presence.</p>
                  
                  {currency === 'PHP' ? (
                    <div className="mb-6">
                      <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                      <span className="text-3xl font-extrabold text-gray-900">₱20,000</span>
                      <div className="mt-2">
                        <p className="text-gray-900 font-bold text-sm uppercase">Monthly</p>
                        <span className="text-xl font-bold text-gray-600">₱1,000</span><span className="text-gray-500 text-sm">/mo</span>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                      <span className="text-3xl font-extrabold text-gray-900">$357</span>
                      <div className="mt-2">
                        <p className="text-gray-900 font-bold text-sm uppercase">Monthly</p>
                        <span className="text-xl font-bold text-gray-600">$18</span><span className="text-gray-500 text-sm">/mo</span>
                      </div>
                    </div>
                  )}
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      "5-page professional website",
                      "Automated contact form with email notifications",
                      "Mobile responsive design",
                      "Free domain for 1 year",
                      "SSL certificate",
                      "Basic SEO setup"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-gray-50 mt-auto">
                  <a href="#contact" className="block w-full bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors text-center">
                    Get Started
                  </a>
                </div>
              </div>

              {/* TIER 2: Business (Highlighted) */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-600 flex flex-col relative transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Business Package</h3>
                  <p className="text-sm text-gray-500 mb-6">Automate your operations.</p>
                  
                  {currency === 'PHP' ? (
                    <div className="mb-6">
                      <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                      <span className="text-3xl font-extrabold text-gray-900">₱40,000</span>
                      <div className="mt-2">
                        <p className="text-gray-900 font-bold text-sm uppercase">Monthly</p>
                        <span className="text-xl font-bold text-gray-600">₱2,500</span><span className="text-gray-500 text-sm">/mo</span>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                      <span className="text-3xl font-extrabold text-gray-900">$714</span>
                      <div className="mt-2">
                        <p className="text-gray-900 font-bold text-sm uppercase">Monthly</p>
                        <span className="text-xl font-bold text-gray-600">$45</span><span className="text-gray-500 text-sm">/mo</span>
                      </div>
                    </div>
                  )}

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-semibold">Everything in Starter, plus:</span>
                    </li>
                    {[
                      "Automated appointment booking system",
                      "Customer database (Google Sheets/Airtable integration)",
                      "Auto-follow-up emails",
                      "Facebook Messenger integration",
                      "WhatsApp/Viber notifications",
                      "2 hours of training"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-blue-50 mt-auto">
                  <a href="#contact" className="block w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors text-center shadow-lg">
                    Get Started
                  </a>
                </div>
              </div>

              {/* TIER 3: Premium */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Package</h3>
                  <p className="text-sm text-gray-500 mb-6">Full automation & scale.</p>
                  
                  {currency === 'PHP' ? (
                    <div className="mb-6">
                      <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                      <span className="text-3xl font-extrabold text-gray-900">₱80,000</span>
                      <div className="mt-2">
                        <p className="text-gray-900 font-bold text-sm uppercase">Monthly</p>
                        <span className="text-xl font-bold text-gray-600">₱5,000</span><span className="text-gray-500 text-sm">/mo</span>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                      <span className="text-3xl font-extrabold text-gray-900">$1,428</span>
                      <div className="mt-2">
                        <p className="text-gray-900 font-bold text-sm uppercase">Monthly</p>
                        <span className="text-xl font-bold text-gray-600">$89</span><span className="text-gray-500 text-sm">/mo</span>
                      </div>
                    </div>
                  )}
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-semibold">Everything in Business, plus:</span>
                    </li>
                    {[
                      "E-commerce with payment gateway",
                      "Inventory tracking automation",
                      "SMS notifications",
                      "Social media auto-posting",
                      "Custom automation workflows",
                      "Priority support",
                      "5 hours of training"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-gray-50 mt-auto">
                  <a href="#contact" className="block w-full bg-white border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors text-center">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-12 text-sm text-gray-500">
              Payment plans available | No hidden fees | Cancel anytime
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <Reveal className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Do I need technical knowledge?", a: "Not at all! We handle all the technical work. We'll train you on the basics in 30 minutes, and it's easy enough for anyone to use." },
              { q: "What if I want changes later?", a: "Minor updates and content changes are included free with your monthly plan. Major redesigns or new features have additional fees." },
              { q: "Can I cancel anytime?", a: "Yes, there's no long-term contract. We recommend staying for at least 6 months to see the full benefits, but you can cancel with 30 days notice." },
              { q: "What about domain and hosting?", a: "Everything is included! We handle domain registration, hosting, SSL certificates, and all technical maintenance." },
              { q: "Do you offer payment plans?", a: "Yes! For the setup fee, you can pay 50% upfront and 50% upon launch. Monthly fees are billed monthly." },
              { q: "What payment methods do you accept?", a: "For PHP: GCash, PayMaya, Bank Transfer, Credit/Debit Card. For USD: PayPal, Stripe, Wire Transfer, Credit/Debit Card." },
              { q: "How long does it take to build?", a: "Most websites are completed in 1-2 weeks from the discovery call. Rush service available for additional fee." },
              { q: "Do you provide training?", a: "Yes! We include training on how to update your site, manage bookings/orders, and use your automation tools." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-gray-900">{item.q}</span>
                  {openFaqIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === i ? 'max-h-48 py-4 border-t border-gray-100 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  <p className="text-gray-600">{item.a}</p>
                </div>
              </div>
            ))}
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

      {/* About Us Section - REMOVED and moved to separate page */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <LogoWhite />
              <p className="mt-4 text-gray-400 max-w-sm text-sm">
                Helping Filipino businesses grow with automated, professional websites.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61574823853351" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="https://www.linkedin.com/in/mark-anthony-dagon-41b478213/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-bold text-lg mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }} 
                    className="hover:text-white transition-colors"
                  >
                    About QuickSite PH
                  </a>
                </li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setCurrentPage('privacy'); }} 
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setCurrentPage('terms'); }} 
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
               <h4 className="font-bold text-lg mb-4">We Accept</h4>
               <div className="flex flex-wrap gap-2">
                 <div className="bg-white/10 rounded px-2 py-1"><span className="text-xs font-bold text-blue-300">GCash</span></div>
                 <div className="bg-white/10 rounded px-2 py-1"><span className="text-xs font-bold text-green-300">PayMaya</span></div>
                 <div className="bg-white/10 rounded px-2 py-1"><span className="text-xs font-bold text-blue-500">PayPal</span></div>
                 <div className="bg-white/10 rounded px-2 py-1"><span className="text-xs font-bold text-purple-400">Stripe</span></div>
                 <div className="bg-white/10 rounded px-2 py-1 flex items-center gap-1"><CreditCard className="w-3 h-3" /><span className="text-xs font-bold">Visa</span></div>
                 <div className="bg-white/10 rounded px-2 py-1 flex items-center gap-1"><CreditCard className="w-3 h-3" /><span className="text-xs font-bold">Mastercard</span></div>
               </div>
               <div className="mt-6">
                <div className="bg-blue-900/30 border border-blue-800 rounded px-3 py-1 inline-flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  <span className="text-sm font-medium text-blue-100">DTI Registered</span>
                </div>
              </div>
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
