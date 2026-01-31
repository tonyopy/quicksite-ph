import React from 'react';
import { MessageCircle, Wrench, Rocket, ArrowRight, Globe, CreditCard, ShieldCheck, Smartphone, MousePointerClick } from 'lucide-react';
import Reveal from '../ui/Reveal';

function Process() {
    return (
        <>
            {/* Process / How It Works */}
            <section id="process" className="py-24 bg-blue-50/50 relative overflow-hidden">
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
                        <div className="hidden md:block absolute top-12 left-[28%] w-[14%] h-px border-t-2 border-dashed border-blue-200 z-0"></div>
                        <div className="hidden md:block absolute top-12 right-[28%] w-[14%] h-px border-t-2 border-dashed border-blue-200 z-0"></div>

                        <Reveal className="group relative">
                            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative">
                                    <MessageCircle className="w-9 h-9" />
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center text-blue-600 font-bold shadow-sm">1</div>
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Discovery Call</h3>
                                <p className="text-blue-600 font-bold text-sm mb-4">Free - 30 minutes</p>
                                <p className="text-gray-600 leading-relaxed">We discuss your business needs and goals via Zoom/Google Meet. No technical knowledge required.</p>
                            </div>
                        </Reveal>

                        <Reveal className="group relative">
                            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-8 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 relative">
                                    <Wrench className="w-9 h-9" />
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-indigo-100 flex items-center justify-center text-indigo-600 font-bold shadow-sm">2</div>
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">We Build</h3>
                                <p className="text-indigo-600 font-bold text-sm mb-4">1-2 weeks</p>
                                <p className="text-gray-600 leading-relaxed">We create your custom website and set up automation workflows. You'll review and approve the design.</p>
                            </div>
                        </Reveal>

                        <Reveal className="group relative">
                            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/20 mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative">
                                    <Rocket className="w-9 h-9" />
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-purple-100 flex items-center justify-center text-purple-600 font-bold shadow-sm">3</div>
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Launch & Training</h3>
                                <p className="text-purple-600 font-bold text-sm mb-4">Ongoing Support</p>
                                <p className="text-gray-600 leading-relaxed">We launch your site, train you on how to use it, and provide ongoing support.</p>
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
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose QuickSite PH?</h2>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: Globe, color: "blue", title: "Serves Local & International Clients", desc: "Accept payments in PHP and USD. Work with clients worldwide." },
                            { icon: MessageCircle, color: "green", title: "Responsive Support", desc: "Get help via email, WhatsApp, or Viber. We reply within 24 hours." },
                            { icon: CreditCard, color: "purple", title: "Transparent Pricing", desc: "No hidden fees. Payment plans available. See exactly what you pay." },
                            { icon: ShieldCheck, color: "indigo", title: "24/7 Business Autopilot", desc: "We manage the systems, hosting, and security so your digital employee never goes on leave." },
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
        </>
    );
}

export default Process;
