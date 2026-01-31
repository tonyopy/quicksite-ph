import React from 'react';
import { MessageCircle, ClipboardCheck, Star, Heart, ShoppingBag, Briefcase, CheckCircle, Facebook } from 'lucide-react';
import Reveal from '../ui/Reveal';
import analyticsImg from '../../photo/analytics-graph.jpg';

function Services() {
    return (
        <>
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
                                <p className="text-gray-600 font-medium text-lg">Answering the same questions all day</p>
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
            <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
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
                                            {["Customers book appointments online anytime", "Auto-send confirmation email/SMS", "Auto-update Google Calendar", "Send reminder 24 hours before appointment", "Collect customer info for promotions", "Request reviews after appointment"].map((item, i) => (
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
                                            {["Customer orders through website form", "Auto-calculate total with discounts", "Send payment instructions instantly", "Update inventory in real-time", "Notify owner via Viber/WhatsApp", "Generate order tracking"].map((item, i) => (
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
                                    <div className="bg-slate-100 p-4 border-b border-gray-200 flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        <div className="text-xs text-gray-400 ml-2 font-mono">inquiries.inbox</div>
                                    </div>
                                    <div className="p-6 bg-white min-h-[300px]">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Recent Inquiries</h4>
                                        <div className="space-y-3">
                                            {[{ n: "John Doe", q: "How much?", s: "Auto-Replied", c: "bg-blue-100", tc: "text-blue-600" }, { n: "Sarah Smith", q: "Available dates?", s: "Link Sent", c: "bg-purple-100", tc: "text-purple-600" }, { n: "Mike Ross", q: "Booking Confirmed", s: "Notified", c: "bg-orange-100", tc: "text-orange-600" }].map((i, idx) => (
                                                <div key={idx} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-8 h-8 rounded-full ${i.c} flex items-center justify-center ${i.tc} font-bold text-xs`}>{i.n[0]}</div>
                                                        <div>
                                                            <div className="text-sm font-bold text-gray-900">{i.n}</div>
                                                            <div className="text-xs text-gray-500">{i.q}</div>
                                                        </div>
                                                    </div>
                                                    <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded">{i.s}</span>
                                                </div>
                                            ))}
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
                                            {["Reply to 'How much?' instantly", "Send your portfolio/rates automatically", "Filter out non-serious inquiries", "Follow up with leads who don't reply", "Schedule calls/appointments", "Notify you only when it's important"].map((item, i) => (
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
            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <Reveal className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Results</h2>
                        <p className="text-xl text-gray-300 mb-12">See the difference a professional automated website makes.</p>
                    </Reveal>

                    <Reveal className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
                        <div className="bg-gray-800 rounded-2xl p-8 border border-red-900">
                            <h3 className="text-2xl font-bold text-red-500 mb-6">BEFORE — Manual Chaos</h3>
                            <p className="text-2xl font-bold text-red-400 mb-6">Lost ₱150,000+ in missed bookings last year</p>
                            <ul className="text-left space-y-4 text-lg">
                                <li className="flex items-center gap-3"><span className="text-red-500 text-2xl">×</span>Answering “How much?” on FB Messenger 50× a day</li>
                                <li className="flex items-center gap-3"><span className="text-red-500 text-2xl">×</span>Double bookings and confused schedules</li>
                                <li className="flex items-center gap-3"><span className="text-red-500 text-2xl">×</span>Chasing payments and sending bank details manually</li>
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-green-500 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                                <h3 className="text-2xl font-bold text-green-500 mb-6">AFTER — QuickSite Automation</h3>
                                <p className="text-2xl font-bold text-green-400 mb-6">Now earning an extra <span className="text-4xl">₱80K–₱200K/month</span> on autopilot</p>
                                <ul className="text-left space-y-4 text-lg mb-8">
                                    <li className="flex items-center gap-3"><span className="text-green-500 text-2xl">✓</span>Instant automated quotes and booking confirmation</li>
                                    <li className="flex items-center gap-3"><span className="text-green-500 text-2xl">✓</span>Synced calendar prevents double bookings</li>
                                    <li className="flex items-center gap-3"><span className="text-green-500 text-2xl">✓</span>Automated GCash payments and receipts</li>
                                </ul>
                                <a href="#pricing" className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">I Want These Results</a>
                            </div>
                            <div className="relative">
                                <img src={analyticsImg} alt="Analytics" className="rounded-xl shadow-2xl w-full" />
                                <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-pulse">479K views · 40.6% conversion</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}

export default Services;
