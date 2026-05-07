import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { LogoWhite } from '../ui/Logo';

function Contact({ setCurrentPage }) {
    const [formStatus, setFormStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        const formData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            business: e.target.business.value,
            message: e.target.message.value,
            source: 'QuickSite PH Website'
        };

        try {
            // Call Resend API endpoint — sends client confirmation + owner notification
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setFormStatus('success');
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus('error');
        }
    };

    return (
        <>
            <section id="contact" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <Reveal className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Ready to Automate Your Business?</h2>
                            <p className="mt-4 text-lg text-gray-500">Tell us about your business and we'll send you a free mockup within 48 hours.</p>
                            {/* Social proof near form */}
                            <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>Join 15+ businesses already using QuickSite PH</span>
                            </div>
                        </Reveal>

                        <Reveal className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="md:flex">
                                <div className="p-8 md:p-12 w-full">
                                    {formStatus === 'success' ? (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle className="w-10 h-10 text-green-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                            <p className="text-gray-600 mb-2">We'll get back to you within 24 hours.</p>
                                            <p className="text-sm text-gray-500">Check your email for a confirmation message.</p>
                                            <button onClick={() => setFormStatus('idle')} className="mt-8 text-blue-600 font-bold hover:underline">Send another message</button>
                                        </div>
                                    ) : formStatus === 'error' ? (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <Mail className="w-10 h-10 text-red-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h3>
                                            <p className="text-gray-600 mb-4">Don't worry — you can reach us directly on Messenger instead.</p>
                                            <a href="https://m.me/61574823853351" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                                <Facebook className="w-4 h-4" /> Message Us on Facebook
                                            </a>
                                            <button onClick={() => setFormStatus('idle')} className="block mx-auto mt-4 text-blue-600 font-bold hover:underline text-sm">Or try the form again</button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                                    <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder="John" />
                                                </div>
                                                <div>
                                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                                    <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder="Doe" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder="john@company.com" />
                                                </div>
                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (WhatsApp/Viber)</label>
                                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder="0917 123 4567" />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">Business Name / Industry</label>
                                                <input type="text" id="business" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder="e.g. Dental Clinic, Condo Rental, Printing Shop" />
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help you?</label>
                                                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none" placeholder="Tell us about your business goals..."></textarea>
                                            </div>

                                            <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 text-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center hover:scale-[1.02]">
                                                {formStatus === 'submitting' ? 'Sending...' : (
                                                    <>
                                                        Start My Website
                                                        <ArrowRight className="ml-2 h-5 w-5" />
                                                    </>
                                                )}
                                            </button>

                                            {/* Trust signals under button */}
                                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-400 pt-2">
                                                <span className="flex items-center gap-1">🔒 Your info is safe — we never share data</span>
                                                <span className="hidden sm:block">·</span>
                                                <span className="flex items-center gap-1">⚡ We respond within 2-4 hours</span>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-1">
                            <LogoWhite />
                            <p className="mt-4 text-gray-400 max-w-sm text-sm">Helping Filipino businesses grow with automated, professional websites.</p>
                            <div className="mt-6 flex gap-4">
                                <a href="https://www.facebook.com/profile.php?id=61574823853351" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                                <a href="https://www.linkedin.com/in/mark-anthony-dagon-41b478213/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <h4 className="font-bold text-lg mb-4">Navigation</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }} className="hover:text-white transition-colors">About QuickSite PH</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#templates" className="hover:text-white transition-colors">Template Gallery</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h4 className="font-bold text-lg mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('privacy'); }} className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('terms'); }} className="hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h4 className="font-bold text-lg mb-4">We Accept</h4>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-white/10 rounded px-2 py-1"><span className="text-xs font-bold text-blue-300">GCash</span></div>
                                <div className="bg-white/10 rounded px-2 py-1"><span className="text-xs font-bold text-blue-500">PayPal</span></div>
                                <div className="bg-white/10 rounded px-2 py-1 flex items-center gap-1"><CreditCard className="w-3 h-3" /><span className="text-xs font-bold">Visa</span></div>
                                <div className="bg-white/10 rounded px-2 py-1 flex items-center gap-1"><CreditCard className="w-3 h-3" /><span className="text-xs font-bold">Mastercard</span></div>
                            </div>
                            <div className="mt-6">
                                <div className="bg-blue-900/30 border border-blue-800 rounded px-3 py-1 inline-flex items-center">
                                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                                    <span className="text-sm font-medium text-blue-100">DTI Registered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} QuickSite PH. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Contact;
