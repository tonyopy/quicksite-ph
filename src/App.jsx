import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Import Pages
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import About from './About';
import TemplatesGallery from './TemplatesGallery';

// Import UI Components
import Navbar from './components/sections/Navbar';
import MessengerButton from './components/ui/MessengerButton';

// Import Sections
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Workflows from './components/sections/Workflows';
import Industries from './components/sections/Industries';
import Testimonials from './components/sections/Testimonials';
import SavingsCalculator from './components/sections/SavingsCalculator';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#templates')) {
        setCurrentPage('templates');
      } else if (hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#privacy') {
        setCurrentPage('privacy');
      } else if (hash === '#terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Render sub-pages
  if (currentPage === 'privacy') {
    return (
      <>
        <PrivacyPolicy onBack={() => window.location.hash = ''} />
        <MessengerButton />
      </>
    );
  }

  if (currentPage === 'terms') {
    return (
      <>
        <TermsOfService onBack={() => window.location.hash = ''} />
        <MessengerButton />
      </>
    );
  }

  if (currentPage === 'about') {
    return (
      <>
        <About onBack={() => window.location.hash = ''} />
        <MessengerButton />
      </>
    );
  }

  if (currentPage === 'templates') {
    return (
      <>
        <TemplatesGallery onBack={() => window.location.hash = ''} />
        <MessengerButton />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Helmet>
        <title>QuickSite PH - Automated Websites for Filipino Businesses</title>
        <meta name="description" content="QuickSite PH builds automated, professional websites for Filipino businesses. Increase bookings and sales with our affordable web design packages." />
        <meta name="keywords" content="web design philippines, website builder, automated booking system, small business website, condo rental website, clinic website, quicksite ph, affordable web design, ecommerce development philippines, salon booking system, tutorial center management, real estate website builder, digital automation philippines, online appointment scheduling, seo friendly websites, mobile responsive design, smes philippines" />
        <link rel="canonical" href="https://quicksiteph.com/" />
      </Helmet>

      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <main>
        <Hero />
        <Services />
        <Process />
        <Workflows />
        <Industries />
        <Testimonials />
        <SavingsCalculator />
        <Pricing />
        <FAQ />
        <Contact setCurrentPage={setCurrentPage} />
      </main>

      {/* Messenger floating button — visible on all pages */}
      <MessengerButton />
    </div>
  );
}

export default App;
