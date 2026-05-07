import React, { useState, useEffect, Suspense } from 'react';
import {
  ArrowLeft, ExternalLink, Loader, Layout, Printer, Stethoscope,
  ShoppingBag, Scale, Utensils, Home, Camera, Dumbbell, Hammer,
  Building, Sun, Sparkles, Briefcase, Zap, Coffee, BedDouble, ChevronRight
} from 'lucide-react';

// Premium Category Configuration — industry-specific descriptions
const categoryConfig = {
  calibration: { icon: Scale, color: 'bg-blue-50 text-blue-600', gradient: 'from-blue-500 to-cyan-500', img: 'https://images.unsplash.com/photo-1581093458891-9f30eec4768c?auto=format&fit=crop&w=800&q=80', desc: 'Online quote requests, service scheduling, and certificate tracking for calibration labs.' },
  cleaning: { icon: Sparkles, color: 'bg-cyan-50 text-cyan-600', gradient: 'from-cyan-400 to-blue-500', img: 'https://images.unsplash.com/photo-1581578731117-104529d18305?auto=format&fit=crop&w=800&q=80', desc: 'Automated booking, service area selection, and recurring schedule management.' },
  clinic: { icon: Stethoscope, color: 'bg-emerald-50 text-emerald-600', gradient: 'from-emerald-400 to-teal-500', img: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80', desc: 'Patient appointment booking, doctor profiles, services list, and auto-reminders.' },
  condo: { icon: Building, color: 'bg-indigo-50 text-indigo-600', gradient: 'from-indigo-400 to-blue-500', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80', desc: 'Unit listings, virtual tours, inquiry forms, and availability calendars.' },
  construction: { icon: Hammer, color: 'bg-orange-50 text-orange-600', gradient: 'from-orange-400 to-red-500', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80', desc: 'Project portfolio, quote request forms, and service area coverage maps.' },
  ecommerce: { icon: ShoppingBag, color: 'bg-purple-50 text-purple-600', gradient: 'from-purple-400 to-pink-500', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80', desc: 'Product catalog, cart, GCash/PayPal checkout, and order tracking.' },
  fitness: { icon: Dumbbell, color: 'bg-rose-50 text-rose-600', gradient: 'from-rose-400 to-red-500', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80', desc: 'Class schedules, membership sign-ups, trainer profiles, and online payments.' },
  'law-firm': { icon: Briefcase, color: 'bg-slate-50 text-slate-600', gradient: 'from-slate-600 to-zinc-600', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80', desc: 'Consultation booking, practice areas, attorney bios, and secure contact forms.' },
  photography: { icon: Camera, color: 'bg-pink-50 text-pink-600', gradient: 'from-pink-400 to-rose-500', img: 'https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&w=800&q=80', desc: 'Portfolio gallery, package pricing, event date booking, and client proofing.' },
  printing: { icon: Printer, color: 'bg-yellow-50 text-yellow-600', gradient: 'from-yellow-400 to-orange-500', img: 'https://images.unsplash.com/photo-1562564025-51dc11516a0b?auto=format&fit=crop&w=800&q=80', desc: 'Online order forms, file upload, price calculator, and order status tracking.' },
  'real-estate': { icon: Home, color: 'bg-sky-50 text-sky-600', gradient: 'from-sky-400 to-blue-500', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80', desc: 'Property listings, viewing schedules, agent profiles, and lead capture.' },
  resort: { icon: Sun, color: 'bg-amber-50 text-amber-600', gradient: 'from-amber-400 to-orange-500', img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80', desc: 'Room booking, amenities showcase, photo gallery, and GCash reservations.' },
  restaurant: { icon: Utensils, color: 'bg-red-50 text-red-600', gradient: 'from-red-400 to-orange-500', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', desc: 'Digital menu, table reservations, online ordering, and delivery integration.' },
  solar: { icon: Zap, color: 'bg-lime-50 text-lime-600', gradient: 'from-lime-400 to-green-500', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80', desc: 'Solar savings calculator, installation booking, and project gallery.' },
  transient: { icon: BedDouble, color: 'bg-violet-50 text-violet-600', gradient: 'from-violet-400 to-purple-500', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', desc: 'Room availability, instant booking, guest reviews, and payment integration.' },
  default: { icon: Layout, color: 'bg-gray-50 text-gray-600', gradient: 'from-gray-400 to-slate-500', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', desc: 'Professional website with booking, lead capture, and payment automation.' }
};

function TemplatesGallery({ onBack }) {
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [LoadedTemplate, setLoadedTemplate] = useState(null);

  const templateModules = import.meta.glob('./templates/**/*.jsx');

  useEffect(() => {
    const cats = {};
    Object.keys(templateModules).forEach(path => {
      const parts = path.split('/');
      const category = parts[2];
      const filename = parts[3].replace('.jsx', '');

      if (!cats[category]) cats[category] = [];
      cats[category].push({ name: filename, path: path, loader: templateModules[path] });
    });

    Object.keys(cats).forEach(cat => {
      const switcher = cats[cat].find(t => t.name === 'DesignSwitcher');
      if (switcher) {
        const designCount = cats[cat].filter(t => t.name !== 'DesignSwitcher').length;
        switcher.designCount = designCount > 0 ? designCount : 5;
        cats[cat] = [switcher];
      }
    });

    setCategories(cats);
  }, []);

  useEffect(() => {
    const handleHashChange = async () => {
      const hash = window.location.hash;
      const parts = hash.split('/');
      const category = parts[1];
      const templateName = parts[2];

      if (category && categories[category]) {
        setSelectedCategory(category);
        const catTemplates = categories[category];
        let template = templateName ? catTemplates.find(t => t.name === templateName) : null;

        if (!template && catTemplates.length === 1 && catTemplates[0].name === 'DesignSwitcher') {
          template = catTemplates[0];
        }

        if (template) {
          handleTemplateSelect(template);
        } else {
          setSelectedTemplate(null);
          setLoadedTemplate(null);
        }
      } else {
        setSelectedCategory(null);
        setSelectedTemplate(null);
        setLoadedTemplate(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (Object.keys(categories).length > 0) handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [categories]);

  const handleTemplateSelect = async (template) => {
    setSelectedTemplate(template);
    setLoadedTemplate(null);
    try {
      const module = await template.loader();
      setLoadedTemplate(() => module.default);
    } catch (error) {
      console.error("Failed to load template:", error);
    }
  };

  if (selectedTemplate && LoadedTemplate) {
    return (
      <div className="relative min-h-screen bg-white">
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
          <button
            onClick={() => window.location.hash = categories[selectedCategory]?.length === 1 ? '#templates' : `#templates/${selectedCategory}`}
            className="flex items-center gap-3 px-8 py-4 bg-slate-900/90 text-white rounded-full shadow-2xl hover:bg-slate-800 transition-all border border-white/20 backdrop-blur-xl group hover:scale-105 active:scale-95 ring-4 ring-black/5"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold tracking-wide">Back to Gallery</span>
          </button>
        </div>
        <Suspense fallback={<div className="flex flex-col items-center justify-center min-h-screen bg-white"><Loader className="w-12 h-12 animate-spin text-blue-600 mb-4" /><p className="text-slate-400 font-medium animate-pulse">Loading Automation Engine...</p></div>}>
          <LoadedTemplate />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-600 selection:text-white pb-32">
      {/* Premium Hero Section */}
      <div className="relative bg-[#0B1120] text-white pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 hidden md:block"></div>
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px]"></div>

        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
            <Sparkles className="w-4 h-4 text-yellow-400" /> Premium Collection
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Automation-Ready <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-sm">
              Industry Blueprints
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Choose a proven framework. We'll wire it to our <span className="text-white font-semibold">Automation Engine</span> to save you 20+ hours a week.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
        <div className="flex items-center justify-between mb-10">
          {onBack && (
            <button
              onClick={onBack}
              className="group flex items-center gap-2 text-white/90 hover:text-white transition-all bg-white/5 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </button>
          )}
        </div>

        {!selectedCategory ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Object.keys(categories).map(category => {
              const config = categoryConfig[category] || categoryConfig.default;
              const Icon = config.icon;

              return (
                <button
                  key={category}
                  onClick={() => window.location.hash = `#templates/${category}`}
                  className="relative group bg-white rounded-3xl p-1 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] text-left h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <div className="relative bg-white h-full rounded-[20px] p-8 flex flex-col z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${config.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="bg-slate-50 text-slate-400 p-2 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold capitalize mb-3 text-slate-900 group-hover:text-blue-600 transition-colors font-display">
                      {category.replace('-', ' ')}
                    </h2>

                    <div className="space-y-3 mb-6 flex-grow">
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {config.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">
                        {categories[category][0].designCount || categories[category].length} Ready Designs
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <button
              onClick={() => window.location.hash = '#templates'}
              className="mb-8 text-slate-500 hover:text-white flex items-center gap-2 font-medium transition-colors bg-white/5 backdrop-blur-md inline-flex px-4 py-2 rounded-lg hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Categories
            </button>

            <div className="bg-white rounded-3xl p-8 shadow-xl mb-12 border border-slate-100 relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${categoryConfig[selectedCategory]?.gradient || 'from-gray-100 to-gray-200'} opacity-5`}></div>
              <div className="relative z-10 flex items-center gap-6">
                <div className={`w-20 h-20 rounded-2xl ${categoryConfig[selectedCategory]?.color || 'bg-gray-100 text-gray-600'} flex items-center justify-center shadow-lg`}>
                  {React.createElement(categoryConfig[selectedCategory]?.icon || Layout, { className: "w-10 h-10" })}
                </div>
                <div>
                  <h2 className="text-4xl font-bold capitalize text-slate-900 mb-2">{selectedCategory.replace('-', ' ')} Blueprints</h2>
                  <p className="text-slate-500 text-lg">Select a layout to launch your automation engine.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
              {categories[selectedCategory].map(template => {
                const config = categoryConfig[selectedCategory] || categoryConfig.default;
                return (
                  <div key={template.name} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
                    <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                      <img
                        src={config.img}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt="Preview"
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/40 transition-colors duration-300"></div>

                      {/* Premium Badge */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <Zap className="w-3 h-3 text-yellow-500 fill-current" /> Automation Enabled
                      </div>

                      {/* View Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl text-slate-900">
                          <ExternalLink className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="font-bold text-xl mb-3 text-slate-900">{template.name.replace(/([A-Z])/g, ' $1').trim()}</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">Mobile Ready</span>
                        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">Fast Load</span>
                      </div>
                      <button
                        onClick={() => window.location.hash = `#templates/${selectedCategory}/${template.name}`}
                        className="w-full py-4 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-all font-bold tracking-wide shadow-lg group-hover:shadow-blue-500/30 flex items-center justify-center gap-2"
                      >
                        Launch Preview
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom CTA — catches clients who browsed but didn't convert */}
        {!selectedTemplate && (
          <div className="mt-16 mb-8 max-w-3xl mx-auto text-center bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Like what you see?</h3>
            <p className="text-gray-500 mb-6">We'll customize any template for your brand — colors, logo, photos, and content. All designs include our automation engine.</p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:scale-105">
              Get My Custom Website
              <ChevronRight className="w-5 h-5" />
            </a>
            <p className="mt-4 text-xs text-gray-400">Starting at ₱5,999 · Includes free mockup</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TemplatesGallery;
