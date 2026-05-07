import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { Rocket, Globe, ShieldCheck, Headphones } from 'lucide-react';

function Pricing() {
    const [currency, setCurrency] = useState('PHP');

    return (
        <section id="pricing" className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        No hidden fees. Payment plans available. Cancel anytime.
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

                <Reveal className="max-w-6xl mx-auto">
                    {/* 3-Tier Pricing Grid */}
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* TIER 1: Starter */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300">
                            <div className="p-8 flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                                <p className="text-sm text-gray-500 mb-6">Perfect for businesses that need a professional online presence.</p>

                                {currency === 'PHP' ? (
                                    <div className="mb-8 bg-slate-50 rounded-xl p-5">
                                        <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">One-time Setup</p>
                                        <span className="text-4xl font-extrabold text-gray-900">₱5,999</span>
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <p className="text-blue-600 font-bold text-xs uppercase tracking-wider">Business Autopilot</p>
                                            <span className="text-2xl font-bold text-gray-900">₱1,000</span><span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-8 bg-slate-50 rounded-xl p-5">
                                        <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">One-time Setup</p>
                                        <span className="text-4xl font-extrabold text-gray-900">$107</span>
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <p className="text-blue-600 font-bold text-xs uppercase tracking-wider">Business Autopilot</p>
                                            <span className="text-2xl font-bold text-gray-900">$18</span><span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                    </div>
                                )}

                                <ul className="space-y-4 mb-8">
                                    {[
                                        "1-3 Page Business Website",
                                        "FREE 1 Year Domain Name",
                                        "FREE 1 Year Hosting with SSL",
                                        "Mobile responsive design",
                                        "Basic email automation",
                                        "Contact form with notifications"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6 bg-gray-50 mt-auto">
                                <a href="#contact" className="block w-full bg-white border-2 border-gray-300 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-100 hover:border-gray-400 transition-all text-center">
                                    Get Started
                                </a>
                            </div>
                        </div>

                        {/* TIER 2: Business — MOST POPULAR */}
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-600 flex flex-col relative transform md:-translate-y-4 hover:shadow-3xl transition-all duration-300">
                            <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center text-xs font-bold py-2 uppercase tracking-wider">
                                ⭐ Most Popular
                            </div>
                            <div className="p-8 pt-14 flex-1">
                                <h3 className="text-2xl font-bold text-blue-600 mb-2">Business</h3>
                                <p className="text-sm text-gray-500 mb-6">For businesses that want automation to save hours every week.</p>

                                {currency === 'PHP' ? (
                                    <div className="mb-8 bg-blue-50/50 rounded-xl p-5 border border-blue-100">
                                        <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">One-time Setup</p>
                                        <span className="text-4xl font-extrabold text-gray-900">₱14,999</span>
                                        <div className="mt-3 pt-3 border-t border-blue-100">
                                            <p className="text-blue-600 font-bold text-xs uppercase tracking-wider">Business Autopilot</p>
                                            <span className="text-2xl font-bold text-gray-900">₱1,000</span><span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-8 bg-blue-50/50 rounded-xl p-5 border border-blue-100">
                                        <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">One-time Setup</p>
                                        <span className="text-4xl font-extrabold text-gray-900">$267</span>
                                        <div className="mt-3 pt-3 border-t border-blue-100">
                                            <p className="text-blue-600 font-bold text-xs uppercase tracking-wider">Business Autopilot</p>
                                            <span className="text-2xl font-bold text-gray-900">$18</span><span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                    </div>
                                )}

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm font-semibold">Everything in Starter, plus:</span>
                                    </li>
                                    {[
                                        "4-5 Website Pages",
                                        "Automated appointment booking system",
                                        "Customer database integration",
                                        "Auto-follow-up emails",
                                        "Facebook Messenger integration",
                                        "WhatsApp/Viber notifications",
                                        "Basic SEO setup",
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
                                <a href="#contact" className="block w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all text-center shadow-lg shadow-blue-600/20 hover:shadow-xl">
                                    Get Started — Most Value
                                    <ArrowRight className="inline ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        {/* TIER 3: Premium */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300">
                            <div className="p-8 flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                                <p className="text-sm text-gray-500 mb-6">Full automation, e-commerce, and custom workflows for scaling.</p>

                                {currency === 'PHP' ? (
                                    <div className="mb-8 bg-slate-50 rounded-xl p-5">
                                        <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">One-time Setup</p>
                                        <span className="text-4xl font-extrabold text-gray-900">₱40,000</span>
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <p className="text-blue-600 font-bold text-xs uppercase tracking-wider">Business Autopilot</p>
                                            <span className="text-2xl font-bold text-gray-900">₱2,500</span><span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-8 bg-slate-50 rounded-xl p-5">
                                        <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">One-time Setup</p>
                                        <span className="text-4xl font-extrabold text-gray-900">$714</span>
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <p className="text-blue-600 font-bold text-xs uppercase tracking-wider">Business Autopilot</p>
                                            <span className="text-2xl font-bold text-gray-900">$45</span><span className="text-gray-500 text-sm">/mo</span>
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
                                <a href="#contact" className="block w-full bg-white border-2 border-gray-300 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-100 hover:border-gray-400 transition-all text-center">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Need something custom? */}
                    <div className="text-center mt-10">
                        <p className="text-gray-500 text-sm mb-2">Need something bigger? Custom enterprise solutions available.</p>
                        <a href="#contact" className="text-blue-600 font-bold text-sm hover:underline">Contact us for custom pricing →</a>
                    </div>

                    <div className="text-center mt-6 text-sm text-gray-400">
                        50/50 payment plans available · All plans powered by the Automation Engine · Cancel anytime
                    </div>

                    {/* Why ₱1,000? Breakdown */}
                    <div className="mt-20 max-w-4xl mx-auto bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Does the Monthly Fee Cover?</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Think of it like your business internet plan — it's what keeps your automation running 24/7. Without it, the system stops.
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
