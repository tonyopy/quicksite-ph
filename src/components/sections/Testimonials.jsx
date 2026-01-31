import React from 'react';
import { Star, Quote } from 'lucide-react';
import Reveal from '../ui/Reveal';

function Testimonials() {
    const testimonialsData = [
        {
            quote: "Dati ang dami kong nami-miss na inquiries kasi busy ako sa clinic. Ngayon, automatic na lahat. Yung basic package lang kinuha ko pero smooth na ang appointment system!",
            author: "Dr. Elena R.",
            role: "Dental Clinic Owner, Quezon City",
            rating: 5
        },
        {
            quote: "Sobrang laking tulong ng automation. Kahit tulog ako, may pumapasok na orders. Sulit na sulit yung investment ko dito.",
            author: "Mark J.",
            role: "Clothing Brand Owner, Manila",
            rating: 5
        },
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
        },
        {
            quote: "Akala ko mahirap gamitin, pero sobrang user-friendly! Yung basic website ko, professional tignan at ang bilis mag-load. Highly recommended!",
            author: "Jessica L.",
            role: "Freelance Consultant, Makati",
            rating: 5
        }
    ];

    return (
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
                    {testimonialsData.map((item, i) => (
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
    );
}

export default Testimonials;
