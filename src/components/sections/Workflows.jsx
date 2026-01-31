import React from 'react';
import Reveal from '../ui/Reveal';

function Workflows() {
    const workflows = [
        { title: "Lead Capture System", flow: "Form submission → CRM → Auto-email → Sales notification" },
        { title: "Appointment Booking", flow: "Calendar booking → Confirmation → Reminders → Follow-up" },
        { title: "Order Processing", flow: "Order form → Payment → Inventory update → Shipping notification" },
        { title: "Review Collection", flow: "Service completion → Wait 3 days → Request review → Thank you" },
        { title: "Social Media Posting", flow: "Blog post → Auto-share to Facebook/Instagram/LinkedIn" },
        { title: "Customer Support", flow: "FAQ chatbot → Ticket creation → Auto-response → Team notification" }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Popular Automation Workflows We Build
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {workflows.map((item, i) => (
                        <Reveal key={i}>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 font-mono border border-slate-100">
                                    {item.flow}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Workflows;
