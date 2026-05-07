import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink, CheckCircle } from 'lucide-react';
import Reveal from '../ui/Reveal';

const testimonialsData = [
    {
        quote: "Dati ang dami kong nami-miss na inquiries kasi busy ako sa clinic. Ngayon, automatic na lahat — pag may nag-book, auto-confirm agad. Ang gaan sa feeling!",
        author: "Dr. Elena R.",
        role: "Dental Clinic Owner",
        location: "Quezon City",
        business: "Smile Dental QC",
        rating: 5,
        initials: "ER",
        color: "from-blue-400 to-blue-600",
    },
    {
        quote: "Sobrang laking tulong ng automation. Kahit tulog ako, may pumapasok na orders. Hindi ko na kailangan mag-reply ng isa-isa sa Messenger.",
        author: "Mark J.",
        role: "Clothing Brand Owner",
        location: "Manila",
        business: "Urban Threads PH",
        rating: 5,
        initials: "MJ",
        color: "from-orange-400 to-orange-600",
    },
    {
        quote: "I used to spend 2 hours every night replying to inquiries on Messenger. Now the website handles the common questions. It's not perfect — some clients still call — but it freed up so much of my time.",
        author: "Sarah M.",
        role: "Salon Owner",
        location: "Manila",
        business: "Sarah's Beauty Lounge",
        rating: 4,
        initials: "SM",
        color: "from-pink-400 to-pink-600",
    },
    {
        quote: "Yung automated billing system, game changer talaga. Customers pay via GCash, tapos notification na lang sakin. No more chasing payments manually.",
        author: "Ryan T.",
        role: "Tutorial Center Director",
        location: "Cebu City",
        business: "BrightPath Learning Center",
        rating: 5,
        initials: "RT",
        color: "from-green-400 to-green-600",
    },
    {
        quote: "QuickSite PH built us a clean website with an order form. Our repeat customers love it — they just order from the site instead of messaging us. Setup was fast.",
        author: "Miguel D.",
        role: "Online Shop Owner",
        location: "Davao City",
        business: "Davao Fresh Goods",
        rating: 5,
        initials: "MD",
        color: "from-purple-400 to-purple-600",
    },
    {
        quote: "Akala ko mahirap gamitin, pero sobrang user-friendly! They trained me in 30 minutes. Ngayon I can update my own site. Highly recommended for small businesses!",
        author: "Jessica L.",
        role: "Freelance Consultant",
        location: "Makati",
        business: "JL Business Solutions",
        rating: 5,
        initials: "JL",
        color: "from-teal-400 to-teal-600",
    },
];

const stats = [
    { value: '15+', label: 'Businesses Automated' },
    { value: '4.9★', label: 'Client Rating' },
    { value: '80%', label: 'Less Manual Work' },
    { value: '<24h', label: 'Response Time' },
];

function Testimonials() {
    const [active, setActive] = useState(0);
    const total = testimonialsData.length;

    const prev = () => setActive((a) => (a - 1 + total) % total);
    const next = () => setActive((a) => (a + 1) % total);

    // Show 3 cards on desktop, 1 on mobile
    const visible = [
        testimonialsData[active % total],
        testimonialsData[(active + 1) % total],
        testimonialsData[(active + 2) % total],
    ];

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-blue-950 to-blue-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <Reveal className="text-center mb-16">
                    <span className="inline-block bg-blue-500/20 text-blue-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-400/30">
                        ⭐ Client Stories
                    </span>
                    <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
                        Trusted by Filipino Business Owners
                    </h2>
                    <p className="text-blue-200 max-w-2xl mx-auto text-lg">
                        Real feedback from real businesses. Here's what happens when you automate.
                    </p>
                </Reveal>

                {/* Stats bar */}
                <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-3xl mx-auto">
                    {stats.map((s, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl font-extrabold text-white mb-1">{s.value}</div>
                            <div className="text-sm text-blue-300">{s.label}</div>
                        </div>
                    ))}
                </Reveal>

                {/* Testimonial cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                    {visible.map((item, i) => (
                        <div
                            key={`${active}-${i}`}
                            className={`bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 ${i === 0 ? 'ring-2 ring-blue-400/50' : 'opacity-80'}`}
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-5">
                                {[...Array(5)].map((_, r) => (
                                    <Star key={r} className={`w-4 h-4 ${r < item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
                                ))}
                            </div>

                            {/* Quote */}
                            <div className="relative mb-6">
                                <Quote className="absolute -top-2 -left-1 w-7 h-7 text-blue-400 opacity-25 transform -scale-x-100" />
                                <p className="text-gray-100 italic leading-relaxed pl-4 text-sm">"{item.quote}"</p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center font-bold text-white text-sm shadow-lg flex-shrink-0`}>
                                    {item.initials}
                                </div>
                                <div>
                                    <div className="font-bold text-white text-sm flex items-center gap-1.5">
                                        {item.author}
                                        <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                                    </div>
                                    <div className="text-xs text-blue-300">{item.business}</div>
                                    <div className="text-xs text-blue-400/70">{item.role} · {item.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all hover:scale-110"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {testimonialsData.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`rounded-full transition-all ${i === active ? 'w-6 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'}`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all hover:scale-110"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* CTA */}
                <Reveal className="text-center mt-16">
                    <p className="text-blue-200 mb-4 text-sm">Ready to join them?</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Get Your Free Quote
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </Reveal>
            </div>
        </section>
    );
}

export default Testimonials;
