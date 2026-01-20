import React, { useState } from 'react';
import { Briefcase, Users, Scale, MessageSquare, CheckCircle, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

function LawFirmDesign8() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Navbar */}
      <nav className="border-b border-slate-100 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Workplace<span className="text-indigo-600">Rights</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">For Employees</a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">For Employers</a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Our Attorneys</a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Resources</a>
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
                Case Evaluation
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-lg">
            <a href="#" className="block text-slate-600 font-medium">For Employees</a>
            <a href="#" className="block text-slate-600 font-medium">For Employers</a>
            <a href="#" className="block text-slate-600 font-medium">Our Attorneys</a>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium">
              Case Evaluation
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Employment Law Specialists</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Fairness at Work <br/>
                <span className="text-indigo-600">Is Your Right.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether you've faced discrimination, harassment, or wage theft, we stand with you. We also help businesses build compliant, thriving workplaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 flex items-center justify-center">
                  I'm an Employee <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-bold transition-all shadow-sm border border-slate-200 flex items-center justify-center">
                  I'm an Employer
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional team meeting" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <ShieldCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">98%</p>
                    <p className="text-sm text-slate-500">Success Rate in Litigation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Protecting Your Livelihood</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Employment law is complex and constantly changing. Our dedicated team stays ahead of the curve to provide top-tier representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Discrimination', desc: 'Fighting against bias based on race, gender, age, disability, or religion.' },
              { title: 'Sexual Harassment', desc: 'Creating safe environments and holding perpetrators accountable.' },
              { title: 'Wage & Hour', desc: 'Recovering unpaid overtime, commissions, and minimum wage violations.' },
              { title: 'Wrongful Termination', desc: 'Challenging illegal firings and protecting whistleblower rights.' },
              { title: 'Executive Contracts', desc: 'Negotiating severance packages, non-competes, and equity agreements.' },
              { title: 'Leave Rights', desc: 'Ensuring compliance with FMLA, sick leave, and parental leave laws.' },
            ].map((area, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:bg-indigo-50 transition-colors group cursor-pointer">
                <div className="w-12 h-1 bg-indigo-600 mb-6 group-hover:w-20 transition-all"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <MessageSquare className="h-12 w-12 text-indigo-500 mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                "They didn't just win my case; they restored my dignity. I felt heard, validated, and protected every step of the way."
              </h2>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-xl">JD</div>
                <div>
                  <p className="font-bold">James D.</p>
                  <p className="text-indigo-300 text-sm">Former Tech Executive</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-2xl text-indigo-400 mb-2">$2.4M</h4>
                <p className="text-slate-400 text-sm">Class Action Settlement</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-2xl text-indigo-400 mb-2">$450K</h4>
                <p className="text-slate-400 text-sm">Harassment Verdict</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-2xl text-indigo-400 mb-2">$1.1M</h4>
                <p className="text-slate-400 text-sm">Whistleblower Award</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-2xl text-indigo-400 mb-2">100%</h4>
                <p className="text-slate-400 text-sm">Client Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get a Free Case Review</h2>
            <p className="text-slate-600">
              Tell us what happened. All conversations are strictly confidential.
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              <input type="text" placeholder="Last Name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-500">
              <option>Select Issue Type</option>
              <option>Discrimination</option>
              <option>Harassment</option>
              <option>Unpaid Wages</option>
              <option>Wrongful Termination</option>
              <option>Other</option>
            </select>
            <textarea rows="4" placeholder="Briefly describe your situation..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"></textarea>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-indigo-200">
              Submit for Review
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-indigo-600 p-1 rounded-md">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-slate-900">Workplace<span className="text-indigo-600">Rights</span></span>
            </div>
            <div className="flex space-x-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-indigo-600">Disclaimer</a>
              <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600">Attorney Advertising</a>
            </div>
          </div>
          <div className="text-center text-xs text-slate-400">
            &copy; 2024 Workplace Rights Law Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LawFirmDesign8;
