import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Reveal from '../ui/Reveal';
import AutomationDemo from './AutomationDemo';

function Hero() {
    return (
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
                        Accepting New Clients for 2026
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
                        Automated Websites That <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Work 24/7 for Your Business</span>
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
                        Get a professional website + smart automation that captures leads, books appointments, and handles tasks while you sleep. <span className="text-gray-900 font-semibold">Starting at ₱5,999 / $107.</span>
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
                    <AutomationDemo />
                </Reveal>
            </div>
        </section>
    );
}

export default Hero;
