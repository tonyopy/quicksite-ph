import React from 'react';
import { Scissors, Utensils, GraduationCap, Home, ShoppingBag, Briefcase, Camera, Dumbbell } from 'lucide-react';
import Reveal from '../ui/Reveal';

function Industries() {
    const industries = [
        { icon: Scissors, name: "Beauty Salons & Spas" },
        { icon: Utensils, name: "Restaurants & Food" },
        { icon: GraduationCap, name: "Tutorial Centers" },
        { icon: Home, name: "Real Estate Agents" },
        { icon: ShoppingBag, name: "Online Shops" },
        { icon: Briefcase, name: "Professional Services" },
        { icon: Camera, name: "Events & Photo" },
        { icon: Dumbbell, name: "Fitness Centers" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Built for These Industries (and More)
                    </h2>
                </Reveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {industries.map((item, i) => (
                        <Reveal key={i}>
                            <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-center h-full group">
                                <item.icon className="w-10 h-10 text-gray-400 group-hover:text-blue-600 mb-4 transition-colors" />
                                <span className="font-medium text-gray-700 group-hover:text-blue-900">{item.name}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Industries;
