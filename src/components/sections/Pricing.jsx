import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { Rocket, Globe, ShieldCheck, Headphones } from 'lucide-react';

function Pricing() {
    const [currency, setCurrency] = useState('PHP');

    return (
        <section id="pricing" className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Choose Your Package
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Transparent pricing. No hidden fees. Cancel anytime.
                    </p>

                    {/* Currency Toggle */}
                    <div className="flex justify-center mt-8">
                        <div className="bg-gray-100 p-1 rounded-full inline-flex relative">
                            <button
                                onClick={() => setCurrency('PHP')}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all relative z-10 ${currency === 'PHP' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                PHP (₱)
                            </button>
                            <button
                                onClick={() => setCurrency('USD')}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all relative z-10 ${currency === 'USD' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                USD ($)
                            </button>
                            <div
                                className={`absolute top-1 bottom-1 w-[50%] bg-blue-600 rounded-full transition-all duration-300 ease-in-out ${currency === 'PHP' ? 'left-1' : 'left-[49%]'}`}
                            ></div>
                        </div>
                    </div>
                </Reveal>

                <Reveal className="max-w-7xl mx-auto">
                    {/* ROW 1: 3 Packages (Basic, Standard, Starter) */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {/* TIER 0: Basic */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col hover:scale-105 transition-transform duration-300">
                            <div className="p-6 flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Package</h3>
                                <p className="text-sm text-gray-500 mb-6">Professional Website Entry.</p>

                                {currency === 'PHP' ? (
                                    <div className="mb-6 bg-slate-50 rounded-xl p-4">
                                        <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                                        <span className="text-3xl font-extrabold text-gray-900">₱5,999</span>
                                        <div className="mt-2 pt-2 border-t border-gray-200">
                                            <p className="text-blue-600 font-bold text-sm uppercase">Business Autopilot</p>
                                            <span className="text-xl font-bold text-gray-900">₱1,000</span><span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-6 bg-slate-50 rounded-xl p-4">
                                        <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                                        <span className="text-3xl font-extrabold text-gray-900">$107</span>
                                        <div className="mt-2 pt-2 border-t border-gray-200">
                                            <p className="text-blue-600 font-bold text-sm uppercase">Business Autopilot</p>
                                            <span className="text-xl font-bold text-gray-600">$18</span><span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                    </div>
                                )}

                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Basic 1 Page Business Website",
                                        "FREE 1 Year Domain Name",
                                        "FREE 1 Year Hosting with SSL",
                                        "Simple email automation (Gmail/Booking)",
                                        "Mobile responsive design"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6 bg-gray-50 mt-auto">
                                <a href="#contact" className="block w-full bg-white border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors text-center">
                                    Get Started
                                </a>
                            </div>
                        </div>

                        {/* TIER 0.5: Standard */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col hover:scale-105 transition-transform duration-300">
                            <div className="p-6 flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Standard Package</h3>
                                <p className="text-sm text-gray-500 mb-6">More pages for your content.</p>

                                {currency === 'PHP' ? (
                                    <div className="mb-6 bg-slate-50 rounded-xl p-4">
                                        <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                                        <span className="text-3xl font-extrabold text-gray-900">₱7,999</span>
                                        <div className="mt-2 pt-2 border-t border-gray-200">
                                            <p className="text-blue-600 font-bold text-sm uppercase">Business Autopilot</p>
                                            <span className="text-xl font-bold text-gray-900">₱1,000</span><span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-6 bg-slate-50 rounded-xl p-4">
                                        <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                                        <span className="text-3xl font-extrabold text-gray-900">$142</span>
                                        <div className="mt-2 pt-2 border-t border-gray-200">
                                            <p className="text-blue-600 font-bold text-sm uppercase">Business Autopilot</p>
                                            <span className="text-xl font-bold text-gray-900">$18</span><span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                    </div>
                                )}

                                <ul className="space-y-4 mb-8">
                                    {[
                                        "2-3 Website Pages",
                                        "FREE 1 Year Domain Name",
                                        "FREE 1 Year Hosting with SSL",
                                        "Simple email automation (Gmail/Booking)",
                                        "Mobile responsive design"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6 bg-gray-50 mt-auto">
                                <a href="#contact" className="block w-full bg-white border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors text-center">
                                    Get Started
                                </a>
                            </div>
                        </div>

                        {/* TIER 1: Starter */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col hover:scale-105 transition-transform duration-300">
                            <div className="p-6 flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Starter Package</h3>
                                <p className="text-sm text-gray-500 mb-6">Essential online presence.</p>

                                {currency === 'PHP' ? (
                                    <div className="mb-6 bg-slate-50 rounded-xl p-4">
                                        <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                                        <span className="text-3xl font-extrabold text-gray-900">₱14,999</span>
                                        <div className="mt-2 pt-2 border-t border-gray-200">
                                            <p className="text-blue-600 font-bold text-sm uppercase">Business Autopilot</p>
                                            <span className="text-xl font-bold text-gray-900">₱1,000</span><span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-6 bg-slate-50 rounded-xl p-4">
                                        <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                                        <span className="text-3xl font-extrabold text-gray-900">$267</span>
                                        <div className="mt-2 pt-2 border-t border-gray-200">
                                            <p className="text-blue-600 font-bold text-sm uppercase">Business Autopilot</p>
                                            <span className="text-xl font-bold text-gray-900">$18</span><span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                    </div>
                                )}

                                <ul className="space-y-4 mb-8">
                                    {[
                                        "4-5 Website Pages",
                                        "Automated contact form with email notifications",
                                        "Mobile responsive design",
                                        "FREE 1 Year Domain Name",
                                        "FREE 1 Year Hosting with SSL",
                                        "Basic SEO setup"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6 bg-gray-50 mt-auto">
                                <a href="#contact" className="block w-full bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors text-center">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ROW 2: 2 Packages (Business, Premium) */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {/* TIER 2: Business (Highlighted) */}
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-600 flex flex-col relative transform md:-translate-y-4 hover:scale-105 transition-transform duration-300">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                                Most Popular
                            </div>
                            <div className="p-6 flex-1">
                                <h3 className="text-xl font-bold text-blue-600 mb-2">Business Package</h3>
                                <p className="text-sm text-gray-500 mb-6">Automate your operations.</p>

                                {currency === 'PHP' ? (
                                    <div className="mb-6 bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                                        <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                                        <span className="text-3xl font-extrabold text-gray-900">₱40,000</span>
                                        <div className="mt-2 pt-2 border-t border-blue-100">
                                            <p className="text-blue-600 font-bold text-sm uppercase">Business Autopilot</p>
                                            <span className="text-xl font-bold text-gray-600">₱2,500</span><span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-6 bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                                        <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                                        <span className="text-3xl font-extrabold text-gray-900">$714</span>
                                        <div className="mt-2 pt-2 border-t border-blue-100">
                                            <p className="text-blue-600 font-bold text-sm uppercase">Business Autopilot</p>
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
                            <div className="p-6 bg-blue-50 mt-auto">
                                <a href="#contact" className="block w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors text-center shadow-lg">
                                    Get Started
                                </a>
                            </div>
                        </div>

                        {/* TIER 3: Premium */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col hover:scale-105 transition-transform duration-300">
                            <div className="p-6 flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Package</h3>
                                <p className="text-sm text-gray-500 mb-6">Full automation & scale.</p>

                                {currency === 'PHP' ? (
                                    <div className="mb-6 bg-slate-50 rounded-xl p-4">
                                        <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                                        <span className="text-3xl font-extrabold text-gray-900">₱80,000</span>
                                        <div className="mt-2 pt-2 border-t border-gray-200">
                                            <p className="text-blue-600 font-bold text-sm uppercase">Business Autopilot</p>
                                            <span className="text-xl font-bold text-gray-900">₱5,000</span><span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-6 bg-slate-50 rounded-xl p-4">
                                        <p className="text-gray-900 font-bold text-sm uppercase">One-time Setup</p>
                                        <span className="text-3xl font-extrabold text-gray-900">$1,428</span>
                                        <div className="mt-2 pt-2 border-t border-gray-200">
                                            <p className="text-blue-600 font-bold text-sm uppercase">Business Autopilot</p>
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
                            <div className="p-6 bg-gray-50 mt-auto">
                                <a href="#contact" className="block w-full bg-white border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors text-center">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12 text-sm text-gray-500">
                        Payment plans available | All plans powered by the Automation Engine | Cancel anytime
                    </div>

                    {/* Why ₱1,000? Breakdown */}
                    <div className="mt-20 max-w-4xl mx-auto bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The "Fuel" for Your Digital Growth</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Think of the ₱1,000 fee like your business permit or an office internet plan—it’s the non-negotiable fuel that keeps your business running 24/7. Without it, the automation stops.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                        <Rocket className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Make.com Automation Credits</h4>
                                        <p className="text-sm text-gray-500">The "electricity" that powers the brain of your auto-replies and booking systems.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                        <Globe className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Enterprise-Grade Hosting</h4>
                                        <p className="text-sm text-gray-500">Ultra-fast servers ensure customers never leave because of a slow-loading page.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Bank-Level Security & SSL</h4>
                                        <p className="text-sm text-gray-500">Encrypted data and daily backups so your business stays safe from hackers 24/7.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                        <Headphones className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">24/7 System Monitoring</h4>
                                        <p className="text-sm text-gray-500">Our 'watchdogs' monitor your workflows to ensure your Digital Employee never misses a beat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-blue-200 text-center">
                            <p className="text-blue-700 font-bold">Total Value: ₱3,500+ / mo &nbsp; | &nbsp; Your Investment: ₱1,000 / mo</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Pricing;
