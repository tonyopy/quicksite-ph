import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Import Pages
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import About from './About';
import TemplatesGallery from './TemplatesGallery';

// Import UI Components
import Navbar from './components/sections/Navbar';
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
      </>
    );
  }

  if (currentPage === 'terms') {
    return (
      <>
        <TermsOfService onBack={() => window.location.hash = ''} />
      </>
    );
  }

  if (currentPage === 'about') {
    return (
      <>
        <About onBack={() => window.location.hash = ''} />
      </>
    );
  }

  if (currentPage === 'templates') {
    return (
      <>
        <TemplatesGallery onBack={() => window.location.hash = ''} />
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

      {/* AEO: Machine-readable business summary for AI search engines & crawlers */}
      {/* Visually hidden via sr-only — accessible to screen readers and crawlers */}
      <aside className="sr-only" aria-label="About QuickSite PH">
        <article>
          <h2>QuickSite PH — Automated Website Agency for Filipino Businesses</h2>
          <p>
            QuickSite PH is a Philippine-based web design and automation agency that builds professional,
            automated websites for Filipino small and medium enterprises (SMEs) across all cities in the Philippines.
            Websites start at ₱5,999 one-time setup fee plus ₱1,000 per month for hosting and automation.
          </p>
          <section>
            <h3>Services</h3>
            <ul>
              <li>Automated business websites starting at ₱5,999</li>
              <li>Online booking systems for dental clinics, salons, and service businesses</li>
              <li>E-commerce websites with GCash payment integration</li>
              <li>Condo and real estate rental websites with online booking</li>
              <li>Restaurant online ordering systems</li>
              <li>Tutorial center and school management websites</li>
            </ul>
          </section>
          <section>
            <h3>Service Coverage</h3>
            <p>
              QuickSite PH serves businesses in all cities and municipalities across the Philippines including
              Metro Manila (Makati, BGC, Quezon City, Pasig, Taguig, Mandaluyong, Paranaque, Las Pinas,
              Muntinlupa, Marikina, Caloocan, Valenzuela), Cebu City, Davao City, Iloilo City, Bacolod,
              Cagayan de Oro, Zamboanga City, Baguio City, Antipolo, Bacoor, Imus, Dasmarinas, and all
              other Philippine cities.
            </p>
          </section>
          <section>
            <h3>Pricing</h3>
            <p>Setup fee starting at ₱5,999 (one-time). Monthly operations ₱1,000/month includes hosting, SSL, automation, and 24/7 monitoring.</p>
            <p>Payment: GCash and Bank Transfer for PHP. PayPal for USD. Payment plans available (50% upfront, 50% on launch).</p>
          </section>
          <section>
            <h3>Contact</h3>
            <p>Facebook: <a href="https://www.facebook.com/profile.php?id=61574823853351">QuickSite PH on Facebook</a></p>
            <p>Website: <a href="https://quicksiteph.com">https://quicksiteph.com</a></p>
          </section>
        </article>
      </aside>

    </div>
  );
}

export default App;
