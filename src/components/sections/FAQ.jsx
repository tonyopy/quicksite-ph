import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Reveal from '../ui/Reveal';

function FAQ() {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? null : index);

    const faqData = [
        { q: "What does the ₱1,000 Business Autopilot fee cover?", a: "This isn't a repair fee—it's the fuel for your system. It covers high-speed hosting, SSL security, the automation 'credits' that power your auto-replies, and 24/7 system monitoring to ensure your Digital Employee stays active and alert." },
        { q: "Do I need technical knowledge?", a: "Not at all! We handle all the technical work. We'll train you on the basics in 30 minutes, and it's easy enough for anyone to use." },
        { q: "What if I want changes later?", a: "Minor updates and content changes are included free with your monthly plan. Major redesigns or new features have additional fees." },
        { q: "Can I cancel anytime?", a: "Yes, there's no long-term contract. We recommend staying for at least 6 months to see the full benefits, but you can cancel with 30 days notice." },
        { q: "What about domain and hosting?", a: "Included! We manage the domain registration, high-speed hosting, and enterprise-grade security as part of your Growth Operations. We handle the technical side so you can focus on scale." },
        { q: "Do you offer payment plans?", a: "Yes! For the setup fee, you can pay 50% upfront and 50% upon launch. Monthly fees are billed monthly." },
        { q: "What payment methods do you accept?", a: "For PHP: GCash and Bank Transfer only. For USD: PayPal only." },
        { q: "How long does it take to build?", a: "Most websites are completed in 1-2 weeks from the discovery call. Rush service available for additional fee." },
        { q: "Do you provide training?", a: "Yes! We include training on how to update your site, manage bookings/orders, and use your automation tools." }
    ];

    return (
        <section
            id="faq"
            className="py-20 bg-gray-50"
            itemScope
            itemType="https://schema.org/FAQPage"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                </Reveal>

                <Reveal className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                        >
                            <button
                                onClick={() => toggleFaq(i)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                aria-expanded={openFaqIndex === i}
                            >
                                <span className="font-bold text-gray-900" itemProp="name">{item.q}</span>
                                {openFaqIndex === i ? (
                                    <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === i ? 'max-h-48 py-4 border-t border-gray-100 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                            >
                                <p className="text-gray-600" itemProp="text">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}

export default FAQ;
