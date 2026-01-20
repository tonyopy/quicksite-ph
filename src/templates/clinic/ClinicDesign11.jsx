import React, { useState } from 'react';
import { Phone, MapPin, Clock, Calendar, Star, CheckCircle, Menu, X, Mail, Shield, Smile, Gem, User, Sparkles, Quote, Tag, Check, Minus, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const Tooth = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 4c-2 0-4 2-4 5 0 2.5 1 4.5 3 5.5V19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h2v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4.5c2-1 3-3 3-5.5 0-3-2-5-4-5-1.5 0-2.5 1-3 2-.5-1-1.5-2-3-2z" />
  </svg>
);

function ClinicDesign11() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState('marikina');
  const [activePricingTab, setActivePricingTab] = useState('metal-braces');

  const locations = {
    marikina: {
      name: "Marikina Branch",
      address: "20 Geneva Street, Provident Villages, Marikina City",
      mapLink: "https://www.google.com/maps/search/?api=1&query=20+Geneva+Street+Provident+Villages+Marikina+City",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
    },
    sampaloc: {
      name: "Sampaloc Branch",
      address: "654 Gastambide Street, Sampaloc, Metro Manila",
      mapLink: "https://www.google.com/maps/search/?api=1&query=654+Gastambide+Street+Sampaloc+Metro+Manila",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Bar - Contact Info */}
      <div className="bg-blue-900 text-white py-2 px-6 text-sm hidden md:flex justify-between items-center">
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> (02) 735 88 493</span>
          <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0945 238 6212</span>
          <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> US Line: 1 (212) 380-1037</span>
        </div>
        <div className="flex gap-4 font-medium">
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon - Sat: 9:00 AM - 6:00 PM</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white z-50 shadow-md border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-black text-blue-600 tracking-tight">
            <Tooth className="w-8 h-8 text-blue-500" />
            Denta<span className="text-slate-900">Gem</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 font-bold text-slate-600 uppercase text-sm tracking-wide">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
            <a href="#locations" className="hover:text-blue-600 transition">Locations</a>
            <a href="#about" className="hover:text-blue-600 transition">About Us</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#book" className="hidden md:block px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Book Appointment
            </a>
            <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6 space-y-4 shadow-xl">
            <a href="#home" className="block text-slate-600 font-bold" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" className="block text-slate-600 font-bold" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#pricing" className="block text-slate-600 font-bold" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#locations" className="block text-slate-600 font-bold" onClick={() => setIsMenuOpen(false)}>Locations</a>
            <a href="#about" className="block text-slate-600 font-bold" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#book" className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-bold" onClick={() => setIsMenuOpen(false)}>
              Book Appointment
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-blue-50/50 -skew-y-3 transform origin-top-left scale-110"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
              <Star className="w-4 h-4 fill-current" /> Most Gentle Dentists in Metro Manila
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
              Your Smile is Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Precious Gem</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-lg">
              Affordable, high-quality dental care in Marikina and Sampaloc. Experience the best dental deals with our accredited professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-center hover:bg-blue-700 transition shadow-xl hover:-translate-y-1">
                Get Best Deals
              </a>
              <a href="#locations" className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-lg font-bold text-center hover:border-blue-600 hover:text-blue-600 transition">
                Find Nearest Clinic
              </a>
            </div>
            <div className="pt-6 flex items-center gap-8 text-sm font-bold text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" /> Fully Accredited
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" /> Modern Equipment
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
             <img 
               src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Happy Patient" 
               className="rounded-3xl shadow-2xl relative z-10 w-full object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white"
             />
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Our Locations</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Conveniently located in Marikina and Sampaloc to serve you better.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Location Tabs/Display */}
            <div className="bg-white p-2 rounded-2xl shadow-lg flex flex-col h-full">
               <div className="flex p-2 bg-slate-100 rounded-xl mb-6">
                 <button 
                   onClick={() => setActiveLocation('marikina')}
                   className={`flex-1 py-3 px-6 rounded-lg font-bold transition-all ${activeLocation === 'marikina' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                 >
                   Marikina
                 </button>
                 <button 
                   onClick={() => setActiveLocation('sampaloc')}
                   className={`flex-1 py-3 px-6 rounded-lg font-bold transition-all ${activeLocation === 'sampaloc' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                 >
                   Sampaloc
                 </button>
               </div>

               <div className="flex-1 px-6 pb-6 flex flex-col justify-center">
                 <h3 className="text-2xl font-bold text-slate-900 mb-2">{locations[activeLocation].name}</h3>
                 <p className="text-slate-500 mb-6 flex items-start gap-2">
                   <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                   {locations[activeLocation].address}
                 </p>
                 <div className="space-y-3 text-sm font-medium text-slate-600 mb-8">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Clock className="w-4 h-4" /></div>
                       Mon - Sat: 9:00 AM - 6:00 PM
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Phone className="w-4 h-4" /></div>
                       (02) 735 88 493
                    </div>
                 </div>
                 <a 
                   href={locations[activeLocation].mapLink} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-center hover:bg-slate-800 transition flex items-center justify-center gap-2"
                 >
                   View on Map <MapPin className="w-4 h-4" />
                 </a>
               </div>
            </div>

            {/* Map Placeholder / Image */}
            <div className="relative h-[400px] md:h-auto rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src={locations[activeLocation].image} 
                alt={locations[activeLocation].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="font-bold text-lg mb-1">Visit Us Today</div>
                  <p className="text-white/80 text-sm">Walk-ins are welcome, appointments recommended.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-black text-slate-900 mb-4">Best Dental Deals</h2>
               <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive dental services at affordable prices.</p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
               {[
                  { icon: Tooth, title: "General Dentistry", desc: "Checkups, cleaning, and fillings." },
                  { icon: Sparkles, title: "Cosmetic", desc: "Whitening, veneers, and bonding." },
                  { icon: Shield, title: "Orthodontics", desc: "Braces and aligners for all ages." },
                  { icon: Star, title: "Oral Surgery", desc: "Extractions and wisdom tooth removal." },
                  { icon: CheckCircle, title: "Root Canals", desc: "Pain-free therapy to save your teeth." },
                  { icon: Phone, title: "Emergency", desc: "Urgent care for toothaches and trauma." },
                  { icon: User, title: "Pediatric", desc: "Gentle care for children's dental health." },
                  { icon: Clock, title: "Prosthodontics", desc: "Dentures, crowns, and bridges." },
               ].map((item, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition group">
                     <item.icon className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                     <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                     <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>


      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Transparent Pricing</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Choose the best dental package for you and your family.</p>
          </div>

          {/* Pricing Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'metal-braces', label: 'Metal Braces' },
              { id: 'premium-braces', label: 'Premium Braces' },
              { id: 'dentures', label: 'Dentures' },
              { id: 'family', label: 'Family Packages' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePricingTab(tab.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  activePricingTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Pricing Content */}
          <div className="max-w-6xl mx-auto">
            {/* Metal Braces */}
            {activePricingTab === 'metal-braces' && (
              <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-slate-100">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-6 text-lg font-bold">Package</th>
                      <th className="p-6 text-lg font-bold text-center">Starter</th>
                      <th className="p-6 text-lg font-bold text-center bg-blue-600 relative">
                        Value Deal
                        <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-2 py-1 uppercase tracking-wider">Best Seller</div>
                      </th>
                      <th className="p-6 text-lg font-bold text-center">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-6 font-bold text-slate-900">Deposit</td>
                      <td className="p-6 text-center text-xl font-black text-slate-900">₱4,999</td>
                      <td className="p-6 text-center text-xl font-black text-blue-600 bg-blue-50">₱10,999</td>
                      <td className="p-6 text-center text-xl font-black text-slate-900">₱15,999</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold text-slate-900">Monthly Adjustment</td>
                      <td className="p-6 text-center text-slate-600">
                        <span className="line-through text-slate-400 text-sm block">₱2,500</span>
                        <span className="font-bold text-lg">₱1,800</span>
                      </td>
                      <td className="p-6 text-center text-slate-600 bg-blue-50">
                        <span className="line-through text-slate-400 text-sm block">₱2,500</span>
                        <span className="font-bold text-lg">₱1,700</span>
                      </td>
                      <td className="p-6 text-center text-slate-600">
                        <span className="line-through text-slate-400 text-sm block">₱2,500</span>
                        <span className="font-bold text-lg">₱1,500</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold text-slate-900">Ortho Kit (₱500 Value)</td>
                      <td className="p-6 text-center"><Check className="w-6 h-6 text-green-500 mx-auto" /></td>
                      <td className="p-6 text-center bg-blue-50"><Minus className="w-6 h-6 text-slate-300 mx-auto" /></td>
                      <td className="p-6 text-center"><Minus className="w-6 h-6 text-slate-300 mx-auto" /></td>
                    </tr>
                     <tr>
                      <td className="p-6 font-bold text-slate-900">Panoramic X-Ray</td>
                      <td className="p-6 text-center text-sm font-medium text-slate-500">₱500 OFF</td>
                      <td className="p-6 text-center bg-blue-50"><Check className="w-6 h-6 text-green-500 mx-auto" /></td>
                      <td className="p-6 text-center"><Check className="w-6 h-6 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold text-slate-900">Invisible Retainer</td>
                      <td className="p-6 text-center"><Minus className="w-6 h-6 text-slate-300 mx-auto" /></td>
                      <td className="p-6 text-center text-sm font-medium text-blue-600 bg-blue-50">50% OFF</td>
                      <td className="p-6 text-center"><Check className="w-6 h-6 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold text-slate-900">Family Treatment Package</td>
                      <td className="p-6 text-center"><Minus className="w-6 h-6 text-slate-300 mx-auto" /></td>
                      <td className="p-6 text-center text-sm font-medium text-slate-600 bg-blue-50">4 Treatments (Free)</td>
                      <td className="p-6 text-center text-sm font-medium text-slate-600">8 Treatments (Free)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-6 font-black text-slate-900 uppercase">Total Savings</td>
                      <td className="p-6 text-center font-black text-green-600 text-lg">₱1,000</td>
                      <td className="p-6 text-center font-black text-green-600 text-lg bg-blue-100">₱6,000</td>
                      <td className="p-6 text-center font-black text-green-600 text-lg">₱10,600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Premium Braces */}
            {activePricingTab === 'premium-braces' && (
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: "Ceramics", deposit: "₱29,000", savings: "₱6,000", features: ["4-Treatment Family Package", "Invisible Retainer (50% OFF)", "Panoramic X-Ray (₱500 OFF)", "Free Ortho Kit"] },
                  { name: "Sapphire", deposit: "₱31,999", savings: "₱8,100", features: ["8-Treatment Family Package", "Invisible Retainer (50% OFF)", "Free Panoramic X-Ray", "Free Ortho Kit"], highlight: true },
                  { name: "Self-Ligating", deposit: "₱43,999", savings: "₱11,100", features: ["8-Treatment Family Package", "Free Invisible Retainer", "Free Panoramic X-Ray", "Free Ortho Kit"] }
                ].map((plan, i) => (
                  <div key={i} className={`bg-white rounded-2xl p-8 border ${plan.highlight ? 'border-blue-500 shadow-2xl scale-105 relative' : 'border-slate-100 shadow-lg'}`}>
                    {plan.highlight && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">Most Popular</div>}
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">Deposit</span>
                      <div className="text-4xl font-black text-slate-900">{plan.deposit}</div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6 border-t border-slate-100 text-center">
                      <div className="text-xs font-bold text-slate-400 uppercase mb-1">Total Savings</div>
                      <div className="text-2xl font-black text-green-500">{plan.savings}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Dentures */}
            {activePricingTab === 'dentures' && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 text-center text-white">
                   <h3 className="text-3xl font-black mb-2">Trade-in Special!</h3>
                   <p className="font-medium opacity-90">Bring in your old dentures! Our dentist will Professionally Clean & Sterilize AT NO CHARGE!</p>
                </div>
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                   {[
                      { price: "₱14,999", old: "₱19,000", gift: "₱1,000 Shopping Spree", quality: "Quality Grade" },
                      { price: "₱16,999", old: "₱21,000", gift: "₱1,500 Shopping Spree", quality: "High Grade" },
                      { price: "₱18,999", old: "₱22,000", gift: "₱2,500 Shopping Spree", quality: "Premium Grade" }
                   ].map((tier, i) => (
                      <div key={i} className="p-8 text-center hover:bg-slate-50 transition">
                         <div className="text-sm font-bold text-slate-400 line-through mb-1">{tier.old}</div>
                         <div className="text-3xl font-black text-slate-900 mb-4">{tier.price}</div>
                         <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold mb-6">
                            Free {tier.gift}
                         </div>
                         <div className="space-y-3 text-sm font-medium text-slate-600">
                            <p className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-green-500" /> {tier.quality}</p>
                            <p className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-green-500" /> Wear-Resistance</p>
                            <p className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-green-500" /> Lifetime Cleanings</p>
                            <p className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-green-500" /> 1 Year Warranty</p>
                         </div>
                      </div>
                   ))}
                </div>
                <div className="bg-slate-50 p-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">
                   Uses only U.S & Germany developed materials
                </div>
              </div>
            )}

            {/* Family Packages */}
            {activePricingTab === 'family' && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 grid md:grid-cols-2">
                 <div className="p-12 bg-blue-50 flex flex-col justify-center">
                    <h3 className="text-3xl font-black text-slate-900 mb-6">Best Family Dental Package Deal!</h3>
                    <ul className="space-y-4 mb-8">
                       {["Extractions", "Fillings", "Cleanings", "Child Fluoridation"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-lg font-medium text-slate-700">
                             <CheckCircle className="w-6 h-6 text-blue-500" /> {item}
                          </li>
                       ))}
                    </ul>
                    <p className="text-slate-500 italic">Valid for 1 Year of Family-Package dental care</p>
                 </div>
                 <div className="p-12 flex flex-col justify-center space-y-8">
                    <div className="bg-white border-2 border-blue-100 p-6 rounded-xl hover:border-blue-500 transition cursor-pointer group">
                       <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-slate-600">4 Dental Treatments</span>
                          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">Save ₱600</span>
                       </div>
                       <div className="flex items-baseline gap-4">
                          <span className="text-4xl font-black text-slate-900">₱2,000</span>
                          <span className="text-xl text-slate-400 line-through">₱2,600</span>
                       </div>
                    </div>
                    <div className="bg-white border-2 border-blue-100 p-6 rounded-xl hover:border-blue-500 transition cursor-pointer group">
                       <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-slate-600">8 Dental Treatments</span>
                          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">Save ₱1,200</span>
                       </div>
                       <div className="flex items-baseline gap-4">
                          <span className="text-4xl font-black text-slate-900">₱3,600</span>
                          <span className="text-xl text-slate-400 line-through">₱4,800</span>
                       </div>
                    </div>
                 </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Patient Feedback</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Real comments from our dental patients on Facebook.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Rachel", text: "Gentle hands; asks the patient for their opinion regarding the braces adjustment. Very accommodating dental clinic and a warm ambience.", time: "2h" },
              { name: "Jade", text: "She's cool dentist and gentle with my child. The dental clinic is comfy.", time: "5h" },
              { name: "Dennis", text: "She took the time to re-explain the dental procedure. Explain the pros and cons and allowed me to decide.", time: "1d" },
              { name: "Julie Ann", text: "The dental clinic is clean. It's very relaxing; it won't make you scared with any difficult dental procedure.", time: "1d" },
              { name: "Orbeta", text: "All dentists are so friendly. Explains very well. Children will never be bored. There are coloring books, activities they could enjoy.", time: "2d" },
              { name: "Martinez", text: "She is honest to patients, gives many options on how to best treat the dental problem.", time: "3d" },
              { name: "Angelic", text: "Best dentist so far :). Accommodating, the fact that i just walked in today.", time: "1w" },
              { name: "Victor", text: "My son was not scared of the tooth extraction coz dentist was gentle.", time: "1w" },
              { name: "Ronnel", text: "Maganda talaga ang area. Mabait silang lahat.", time: "2w" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex gap-3 items-start">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                   <User className="w-6 h-6 text-slate-400" />
                </div>
                <div className="flex-1">
                   <div className="bg-slate-100 rounded-2xl px-4 py-3 inline-block">
                      <div className="font-bold text-slate-900 text-sm mb-1">{testimonial.name}</div>
                      <p className="text-slate-800 text-sm leading-relaxed">{testimonial.text}</p>
                   </div>
                   <div className="flex items-center gap-4 mt-1 ml-4 text-xs font-bold text-slate-500">
                      <button className="hover:underline">Like</button>
                      <button className="hover:underline">Reply</button>
                      <span className="font-normal text-slate-400">{testimonial.time}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking / Contact */}
      <section id="book" className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black mb-6">Schedule Your Visit</h2>
              <p className="text-blue-200 text-lg mb-8">
                Ready to achieve your perfect smile? Contact us today to book an appointment or ask about our dental packages.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                   <Phone className="w-6 h-6 text-blue-400" />
                   <div>
                      <div className="text-xs text-blue-300 uppercase font-bold tracking-wider">Main Hotline</div>
                      <div className="text-xl font-bold">(02) 735 88 493</div>
                   </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                   <Phone className="w-6 h-6 text-blue-400" />
                   <div>
                      <div className="text-xs text-blue-300 uppercase font-bold tracking-wider">Mobile / Text</div>
                      <div className="text-xl font-bold">0945 238 6212</div>
                   </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                   <Phone className="w-6 h-6 text-blue-400" />
                   <div>
                      <div className="text-xs text-blue-300 uppercase font-bold tracking-wider">International (US Line)</div>
                      <div className="text-xl font-bold">1 (212) 380-1037</div>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Online Appointment</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg outline-none focus:border-blue-500" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Phone</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg outline-none focus:border-blue-500" placeholder="09XX XXX XXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Preferred Location</label>
                  <select className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg outline-none focus:border-blue-500">
                    <option value="marikina">Marikina Branch</option>
                    <option value="sampaloc">Sampaloc Branch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Service</label>
                  <select className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg outline-none focus:border-blue-500">
                    <option>General Checkup</option>
                    <option>Cleaning / Prophylaxis</option>
                    <option>Tooth Extraction</option>
                    <option>Braces / Ortho</option>
                    <option>Other</option>
                  </select>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg mt-2">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-sm">
         <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-black text-white mb-8">
               <Tooth className="w-6 h-6 text-blue-500" /> DentaGem
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12 text-left max-w-4xl mx-auto">
               <div>
                  <h4 className="text-white font-bold mb-4 uppercase tracking-wider">About Us</h4>
                  <p>Accredited dental clinics providing gentle, affordable, and high-quality care in Metro Manila.</p>
               </div>
               <div>
                  <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Contact</h4>
                  <p>Landline: (02) 735 88 493</p>
                  <p>Mobile: 0945 238 6212</p>
                  <p>US Line: 1 (212) 380-1037</p>
               </div>
               <div>
                  <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Locations</h4>
                  <p>20 Geneva St, Marikina City</p>
                  <p>654 Gastambide St, Sampaloc</p>
               </div>
            </div>
            <div className="border-t border-slate-900 pt-8">
               <p>© 2025 DentaGem Dental Clinics. All rights reserved.</p>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default ClinicDesign11;
