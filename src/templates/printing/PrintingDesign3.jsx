import React, { useState } from 'react';
import { Briefcase, FileText, Globe, Truck, Shield, Users, Building, ArrowRight } from 'lucide-react';

function PrintingDesign3() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-6 text-xs flex justify-between">
         <div className="flex gap-4">
            <span>Corporate Solutions</span>
            <span>Bulk Pricing Available</span>
         </div>
         <div className="flex gap-4">
            <span>Support: +1 (800) 555-0123</span>
            <span>Login</span>
         </div>
      </div>

      {/* Nav */}
      <nav className="border-b border-slate-200">
         <div className="container mx-auto px-6 py-5 flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-900 flex items-center gap-2">
               <Building className="w-8 h-8 text-blue-800" />
               PRO<span className="text-blue-800">PRINT</span><span className="text-slate-400 font-light">CORP</span>
            </div>
            <div className="hidden md:flex gap-8 font-medium text-slate-600">
               <a href="#" className="hover:text-blue-800">Products</a>
               <a href="#" className="hover:text-blue-800">Industries</a>
               <a href="#" className="hover:text-blue-800">Enterprise</a>
            </div>
            <button className="bg-blue-800 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-900 transition">
               Request Quote
            </button>
         </div>
      </nav>

      {/* Hero */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200">
         <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
               Enterprise Printing Solutions <br/> for Growing Businesses
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
               Streamline your corporate ordering. High-volume printing, dedicated account management, and nationwide logistics.
            </p>
            <div className="flex justify-center gap-4">
               <button className="bg-blue-800 text-white px-8 py-4 rounded-md font-bold hover:bg-blue-900 transition shadow-lg">
                  Explore Enterprise Plans
               </button>
               <button className="bg-white border border-slate-300 text-slate-700 px-8 py-4 rounded-md font-bold hover:bg-slate-50 transition">
                  Order Samples
               </button>
            </div>
         </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-slate-200">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               <div>
                  <div className="text-3xl font-bold text-blue-800 mb-1">50M+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wide">Prints Delivered</div>
               </div>
               <div>
                  <div className="text-3xl font-bold text-blue-800 mb-1">10k+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wide">Corporate Clients</div>
               </div>
               <div>
                  <div className="text-3xl font-bold text-blue-800 mb-1">24h</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wide">Production Time</div>
               </div>
               <div>
                  <div className="text-3xl font-bold text-blue-800 mb-1">99.9%</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wide">Quality Rate</div>
               </div>
            </div>
         </div>
      </section>

      {/* B2B Solutions */}
      <section className="py-24">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
               {[
                  { icon: Briefcase, title: "Marketing Collateral", desc: "Brochures, flyers, and sales sheets consistent with your brand guidelines." },
                  { icon: FileText, title: "Operational Print", desc: "Forms, invoices, letterheads, and envelopes for daily business." },
                  { icon: Globe, title: "Global Logistics", desc: "Print locally, deliver globally. Reduce shipping costs and carbon footprint." },
               ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                     <div className="bg-blue-50 p-3 rounded-lg text-blue-800">
                        <item.icon className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        <a href="#" className="text-blue-700 font-semibold mt-3 inline-flex items-center text-sm hover:underline">
                           Learn more <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-slate-900 py-16 px-6">
         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white">
               <h2 className="text-3xl font-bold mb-2">Ready to optimize your print supply chain?</h2>
               <p className="text-slate-400">Speak with an enterprise specialist today.</p>
            </div>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-md font-bold hover:bg-slate-100 transition">
               Contact Sales
            </button>
         </div>
      </section>

      <footer className="bg-slate-100 py-12 text-center text-slate-500 text-sm">
         <p>© 2025 ProPrint Corp. The Corporate Print Partner.</p>
      </footer>
    </div>
  );
}

export default PrintingDesign3;
