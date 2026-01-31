import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, CreditCard, CheckCircle } from 'lucide-react';
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
            // Replace 'https://hook.us1.make.com/...' with your new Webhook URL if you created a new scenario
            await fetch('https://hook.eu1.make.com/ui12v2h6btgjjxca9m9c9lifbpu3qkd7', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            setFormStatus('success');
        } catch (error) {
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
                            <p className="mt-4 text-lg text-gray-500">Fill out the form below to get started. We accept GCash for the initial deposit.</p>
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
                                            <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                                            <button onClick={() => setFormStatus('idle')} className="mt-8 text-blue-600 font-bold hover:underline">Send another message</button>
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
                                                    <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder="0917 123 4567" />
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

                                            <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-orange-500 text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors shadow-md text-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center">
                                                {formStatus === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                                            </button>
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
                                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                                <a href="https://www.linkedin.com/in/mark-anthony-dagon-41b478213/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
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
                                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
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
