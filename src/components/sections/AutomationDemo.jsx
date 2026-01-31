import React, { useState, useEffect } from 'react';
import { MessageCircle, ClipboardCheck, Mail, Layout } from 'lucide-react';

function AutomationDemo() {
    const [step, setStep] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev === 3 ? 1 : prev + 1));
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto mb-16 p-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Notification Toast */}
            <div className={`absolute top-6 right-6 flex items-center gap-3 bg-slate-800 border border-slate-700 p-3 rounded-xl shadow-xl transition-all duration-500 transform z-20 ${step >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                    <div className="text-xs text-blue-400 font-bold uppercase tracking-wider">New Lead</div>
                    <div className="text-sm font-bold text-white">John D. just booked!</div>
                </div>
            </div>

            {/* Steps Container */}
            <div className="flex flex-col md:flex-row items-center justify-between relative z-10 mt-16 md:mt-12 gap-12 md:gap-8 px-4 md:px-12">

                {/* Step 1: Lead Capture */}
                <div className="relative group text-center">
                    <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 ${step >= 1 ? 'bg-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.6)] scale-110' : 'bg-slate-800 border border-slate-700'}`}>
                        <ClipboardCheck className={`w-12 h-12 ${step >= 1 ? 'text-white' : 'text-slate-500'}`} />
                        {step >= 1 && <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm font-bold text-blue-900 animate-bounce">1</div>}
                    </div>
                    <h3 className={`font-bold text-xl mb-2 transition-colors ${step >= 1 ? 'text-white' : 'text-slate-500'}`}>Lead Captures</h3>
                    <p className="text-sm text-slate-400">Client fills form</p>
                </div>

                {/* Arrow 1 */}
                <div className="flex-1 h-1.5 bg-slate-800 mx-6 rounded-full overflow-hidden relative w-full md:w-auto min-w-[60px]">
                    <div className={`absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_100%] transition-all duration-1000 ease-out ${step >= 2 ? 'w-full animate-shimmer' : 'w-0'}`}></div>
                    <div className={`absolute left-0 top-1/2 -mt-1.5 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.9)] ${step >= 2 ? 'animate-flow opacity-100' : 'opacity-0'}`}></div>
                </div>

                {/* Step 2: Auto-Response */}
                <div className="relative group text-center">
                    <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 ${step >= 2 ? 'bg-green-600 shadow-[0_0_40px_rgba(22,163,74,0.6)] scale-110' : 'bg-slate-800 border border-slate-700'}`}>
                        <Mail className={`w-12 h-12 ${step >= 2 ? 'text-white' : 'text-slate-500'}`} />
                        {step >= 2 && <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-sm font-bold text-green-900 animate-bounce">2</div>}
                    </div>
                    <h3 className={`font-bold text-xl mb-2 transition-colors ${step >= 2 ? 'text-white' : 'text-slate-500'}`}>Auto-Response</h3>
                    <p className="text-sm text-slate-400">Instant email sent</p>
                </div>

                {/* Arrow 2 */}
                <div className="flex-1 h-1.5 bg-slate-800 mx-6 rounded-full overflow-hidden relative w-full md:w-auto min-w-[60px]">
                    <div className={`absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-[length:200%_100%] transition-all duration-1000 ease-out ${step >= 3 ? 'w-full animate-shimmer' : 'w-0'}`}></div>
                    <div className={`absolute left-0 top-1/2 -mt-1.5 w-3 h-3 rounded-full bg-emerald-300 shadow-[0_0_15px_rgba(110,231,183,0.9)] ${step >= 3 ? 'animate-flow opacity-100' : 'opacity-0'}`}></div>
                </div>

                {/* Step 3: Database Update */}
                <div className="relative group text-center">
                    <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 ${step >= 3 ? 'bg-purple-600 shadow-[0_0_40px_rgba(147,51,234,0.6)] scale-110' : 'bg-slate-800 border border-slate-700'}`}>
                        <Layout className={`w-12 h-12 ${step >= 3 ? 'text-white' : 'text-slate-500'}`} />
                        {step >= 3 && <div className="absolute -top-3 -right-3 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-sm font-bold text-purple-900 animate-bounce">3</div>}
                    </div>
                    <h3 className={`font-bold text-xl mb-2 transition-colors ${step >= 3 ? 'text-white' : 'text-slate-500'}`}>Database Update</h3>
                    <p className="text-sm text-slate-400">Saved to Sheets/CRM</p>
                </div>

            </div>
        </div>
    );
}

export default AutomationDemo;
