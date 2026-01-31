import React, { useState } from 'react';
import Reveal from '../ui/Reveal';

function SavingsCalculator() {
    const [calculatorData, setCalculatorData] = useState({
        inquiries: 5,
        scheduling: 2,
        orders: 2,
        followup: 3
    });

    return (
        <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
                        Calculate Your Time Savings
                    </h2>
                    <p className="text-blue-200">See how much time and money automation can save you.</p>
                </Reveal>

                <Reveal className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h3 className="font-bold text-xl mb-6">How many hours per week do you spend on:</h3>

                            {[
                                { label: "Answering inquiries", key: "inquiries", max: 20 },
                                { label: "Scheduling appointments", key: "scheduling", max: 10 },
                                { label: "Processing orders", key: "orders", max: 15 },
                                { label: "Following up with customers", key: "followup", max: 10 }
                            ].map((item) => (
                                <div key={item.key}>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium text-blue-100">{item.label}</label>
                                        <span className="text-sm font-bold text-white">{calculatorData[item.key]} hrs</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max={item.max}
                                        value={calculatorData[item.key]}
                                        onChange={(e) => setCalculatorData({ ...calculatorData, [item.key]: parseInt(e.target.value) })}
                                        className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col justify-center items-center bg-black/20 rounded-xl p-8 border border-white/10">
                            <div className="text-center space-y-6">
                                <div>
                                    <div className="text-blue-300 text-sm font-bold uppercase tracking-wider mb-1">Time Saved</div>
                                    <div className="text-5xl font-extrabold text-white mb-1">
                                        {Object.values(calculatorData).reduce((a, b) => a + b, 0)} <span className="text-2xl text-blue-300">hrs/week</span>
                                    </div>
                                    <div className="text-sm text-blue-200">
                                        = {Object.values(calculatorData).reduce((a, b) => a + b, 0) * 4} hours per month
                                    </div>
                                </div>

                                <div className="w-full h-px bg-white/10"></div>

                                <div>
                                    <div className="text-green-400 text-sm font-bold uppercase tracking-wider mb-1">Value Saved</div>
                                    <div className="text-4xl font-extrabold text-green-400 mb-1">
                                        ₱{(Object.values(calculatorData).reduce((a, b) => a + b, 0) * 4 * 500).toLocaleString()}
                                    </div>
                                    <div className="text-sm text-green-400/80">
                                        worth of your time monthly (at ₱500/hr)
                                    </div>
                                </div>

                                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm inline-block animate-pulse">
                                    Automation pays for itself!
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default SavingsCalculator;
