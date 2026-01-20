import React, { useState } from 'react';
import { Settings, Shield, Activity, FileText, CheckCircle, Search, Menu, X, ArrowRight, Phone, Mail, MapPin, Database, BarChart3, Users, Lock } from 'lucide-react';

function CalibrationDesign1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-400 py-2 px-6 text-xs font-medium hidden lg:flex justify-between items-center border-b border-slate-800">
        <div className="flex gap-8">
          <span className="flex items-center gap-2 hover:text-white transition cursor-pointer"><Phone className="w-3.5 h-3.5" /> +63 (02) 8-123-4567</span>
          <span className="flex items-center gap-2 hover:text-white transition cursor-pointer"><Mail className="w-3.5 h-3.5" /> enterprise@calibrotech.com</span>
          <span className="flex items-center gap-2 hover:text-white transition cursor-pointer"><MapPin className="w-3.5 h-3.5" /> Makati City, Philippines</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Support</a>
          <a href="#" className="hover:text-white transition">Knowledge Base</a>
          <span className="text-emerald-400 flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" /> ISO/IEC 17025:2017 Accredited</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white z-50 shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-700 p-2 rounded-lg">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div className="leading-none">
              <div className="text-xl font-bold text-slate-900 tracking-tight">CALIBRO<span className="text-blue-700">TECH</span></div>
              <div className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest">Enterprise Portal</div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 font-semibold text-slate-600 text-sm">
            <a href="#" className="hover:text-blue-700 transition">Solutions</a>
            <a href="#" className="hover:text-blue-700 transition">Industries</a>
            <a href="#" className="hover:text-blue-700 transition">Compliance</a>
            <a href="#" className="hover:text-blue-700 transition">Resources</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hidden lg:block text-slate-600 font-bold text-sm hover:text-blue-700 transition">Client Login</a>
            <button className="hidden lg:block px-6 py-2.5 bg-blue-700 text-white rounded-md font-bold text-sm hover:bg-blue-800 transition shadow-lg shadow-blue-200 hover:-translate-y-0.5 transform duration-200">
              Request Demo
            </button>
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-32 hidden lg:block"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
              <Database className="w-3.5 h-3.5" /> Enterprise Asset Management v2.0
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900 tracking-tight">
              Total Compliance. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">Zero Complexity.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              The enterprise-grade client portal for managing calibration assets, digital certificates, and audit readiness across multiple facilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group">
                Access Portal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 border border-slate-300 rounded-lg font-bold hover:border-blue-600 hover:text-blue-600 transition flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> Download Brochure
              </button>
            </div>

            <div className="pt-8 border-t border-slate-100 grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-slate-900">15k+</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Assets Managed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">99.9%</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">ISO</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">17025 Accredited</div>
              </div>
            </div>
          </div>
          
          {/* Dashboard Mockup */}
          <div className="relative group perspective-1000">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
             <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform group-hover:rotate-y-2 transition-transform duration-500 ease-out">
                {/* Fake Browser Header */}
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 bg-white border border-slate-200 rounded text-[10px] text-slate-400 px-3 py-1 flex-1 text-center font-mono">
                    portal.calibrotech.com/dashboard
                  </div>
                </div>
                {/* Fake Dashboard Content */}
                <div className="p-6 bg-slate-50 h-[400px]">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">Overview</h3>
                      <p className="text-xs text-slate-500">Welcome back, Facility Manager</p>
                    </div>
                    <div className="bg-white border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded shadow-sm">
                      Filter: All Sites
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                      <div className="text-xs text-slate-500 font-bold uppercase mb-2">Compliance Rate</div>
                      <div className="text-2xl font-bold text-emerald-600">98.2%</div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-emerald-500 w-[98.2%] h-full rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                      <div className="text-xs text-slate-500 font-bold uppercase mb-2">Pending Cal</div>
                      <div className="text-2xl font-bold text-amber-500">12</div>
                      <div className="text-[10px] text-slate-400 mt-1">Due within 7 days</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                      <div className="text-xs text-slate-500 font-bold uppercase mb-2">Active Assets</div>
                      <div className="text-2xl font-bold text-blue-600">1,248</div>
                      <div className="text-[10px] text-slate-400 mt-1">+24 this month</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center">
                       <h4 className="text-xs font-bold text-slate-700 uppercase">Recent Certificates</h4>
                       <button className="text-blue-600 text-[10px] font-bold hover:underline">View All</button>
                    </div>
                    <div className="divide-y divide-slate-50">
                      {[1,2,3].map(i => (
                        <div key={i} className="px-4 py-3 flex justify-between items-center hover:bg-slate-50">
                          <div className="flex items-center gap-3">
                            <div className="bg-red-50 p-1.5 rounded text-red-600"><FileText className="w-3 h-3" /></div>
                            <div>
                              <div className="text-xs font-bold text-slate-700">Fluke 87V Multimeter</div>
                              <div className="text-[10px] text-slate-400">ID: AS-2024-{100+i}</div>
                            </div>
                          </div>
                          <div className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded">PASS</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-10 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">Trusted by Global Enterprises</p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Logos */}
            <div className="text-xl font-black text-white flex items-center gap-2"><div className="w-6 h-6 bg-white/20 rounded"></div> PHARMA CORP</div>
            <div className="text-xl font-black text-white flex items-center gap-2"><div className="w-6 h-6 bg-white/20 rounded-full"></div> AERO DYNAMICS</div>
            <div className="text-xl font-black text-white flex items-center gap-2"><div className="w-6 h-6 bg-white/20 rotate-45"></div> TECH MANU</div>
            <div className="text-xl font-black text-white flex items-center gap-2"><div className="w-6 h-6 bg-white/20 rounded-tr-xl"></div> ENERGY SYSTEMS</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Core Capabilities</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Enterprise-Grade Calibration</h3>
            <p className="text-slate-600 text-lg">Comprehensive metrology solutions tailored for regulated industries including Pharmaceutical, Aviation, and Manufacturing.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: "Electrical & RF", desc: "High-precision calibration for oscilloscopes, spectrum analyzers, and multifunction calibrators up to 50GHz." },
              { icon: Settings, title: "Dimensional Metrology", desc: "Laser interferometry, CMM services, and standard gauge blocks with sub-micron accuracy." },
              { icon: Search, title: "Thermodynamic", desc: "Temperature and humidity chambers mapping, autoclaves, and freeze dryers validation." },
              { icon: Database, title: "Asset Management", desc: "Cloud-based portal for tracking asset lifecycle, maintenance history, and recall management." },
              { icon: Shield, title: "Compliance Audits", desc: "Full support for FDA 21 CFR Part 11, ISO 17025, and AMS2750 requirements." },
              { icon: CheckCircle, title: "On-Site Laboratory", desc: "Mobile calibration labs deployed to your facility to minimize equipment downtime." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-4 text-sm">{item.desc}</p>
                <a href="#" className="inline-flex items-center text-blue-600 font-bold text-sm hover:underline">
                  Explore Capability <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Secure Your Quality Assurance Today</h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-10">
            Join 500+ enterprise clients who trust CalibroTech for their mission-critical calibration needs.
          </p>
          <div className="flex justify-center gap-4">
             <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition shadow-xl">
                Schedule Consultation
             </button>
             <button className="bg-transparent border border-blue-400 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition">
                View Sample Certificate
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
           <div>
              <div className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                <Settings className="w-5 h-5 text-blue-600" />
                CALIBRO<span className="text-blue-600">TECH</span>
              </div>
              <p className="leading-relaxed mb-6 text-slate-500">
                Global leader in precision calibration and asset management solutions. ISO/IEC 17025:2017 Accredited Laboratory.
              </p>
           </div>
           
           <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Services</h4>
              <ul className="space-y-3">
                 <li><a href="#" className="hover:text-white transition">Instrument Calibration</a></li>
                 <li><a href="#" className="hover:text-white transition">Validation Services</a></li>
                 <li><a href="#" className="hover:text-white transition">Asset Management Software</a></li>
                 <li><a href="#" className="hover:text-white transition">Training & Consulting</a></li>
              </ul>
           </div>

           <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Legal & Compliance</h4>
              <ul className="space-y-3">
                 <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                 <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                 <li><a href="#" className="hover:text-white transition">ISO Accreditation</a></li>
                 <li><a href="#" className="hover:text-white transition">Sitemap</a></li>
              </ul>
           </div>

           <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Contact Support</h4>
              <ul className="space-y-3">
                 <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-blue-600 shrink-0" /> 1234 Precision Way, Tech Park, Manila</li>
                 <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-blue-600 shrink-0" /> +63 (02) 8-123-4567</li>
                 <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-blue-600 shrink-0" /> support@calibrotech.com</li>
              </ul>
           </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
           © 2025 CalibroTech Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default CalibrationDesign1;
