import React, { useState, useEffect, Suspense } from 'react';
import { 
  ArrowLeft, ExternalLink, Loader, Layout, Printer, Stethoscope, 
  ShoppingBag, Scale, Utensils, Home, Camera, Dumbbell, Hammer, 
  Building, Sun, Sparkles, Briefcase, Zap, Coffee, BedDouble
} from 'lucide-react';

const categoryIcons = {
  calibration: Scale,
  cleaning: Sparkles,
  clinic: Stethoscope,
  condo: Building,
  construction: Hammer,
  ecommerce: ShoppingBag,
  fitness: Dumbbell,
  'law-firm': Briefcase,
  photography: Camera,
  printing: Printer,
  'real-estate': Home,
  resort: Sun,
  restaurant: Utensils,
  solar: Zap,
  transient: BedDouble,
  default: Layout
};

const categoryColors = {
  calibration: 'bg-blue-50 text-blue-600',
  cleaning: 'bg-cyan-50 text-cyan-600',
  clinic: 'bg-emerald-50 text-emerald-600',
  condo: 'bg-indigo-50 text-indigo-600',
  construction: 'bg-orange-50 text-orange-600',
  ecommerce: 'bg-purple-50 text-purple-600',
  fitness: 'bg-rose-50 text-rose-600',
  'law-firm': 'bg-slate-50 text-slate-600',
  photography: 'bg-pink-50 text-pink-600',
  printing: 'bg-yellow-50 text-yellow-600',
  'real-estate': 'bg-sky-50 text-sky-600',
  resort: 'bg-amber-50 text-amber-600',
  restaurant: 'bg-red-50 text-red-600',
  solar: 'bg-lime-50 text-lime-600',
  transient: 'bg-violet-50 text-violet-600',
  default: 'bg-gray-50 text-gray-600'
};

function TemplatesGallery({ onBack }) {
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [LoadedTemplate, setLoadedTemplate] = useState(null);

  // Dynamically import all templates
  // using eager: false (default) for lazy loading
  const templateModules = import.meta.glob('./templates/**/*.jsx');

  useEffect(() => {
    const cats = {};
    
    Object.keys(templateModules).forEach(path => {
      // Path format: ./templates/category/filename.jsx
      const parts = path.split('/');
      const category = parts[2]; // Index 0 is ., 1 is templates, 2 is category
      const filename = parts[3].replace('.jsx', '');

      if (!cats[category]) {
        cats[category] = [];
      }
      cats[category].push({
        name: filename,
        path: path,
        loader: templateModules[path]
      });
    });

    // Post-process categories to prefer DesignSwitcher
    Object.keys(cats).forEach(cat => {
      const switcher = cats[cat].find(t => t.name === 'DesignSwitcher');
      if (switcher) {
        // If a switcher exists, only show the switcher, but keep the original count
        const originalCount = cats[cat].length - 1; // Subtract switcher itself, or just use length if it's approximate
        // Actually, we want to know how many designs there are.
        // If DesignSwitcher is present, it usually means there are multiple designs.
        // Let's store the count on the switcher object itself so we can display it.
        
        // Count templates excluding the switcher and assets
        const designCount = cats[cat].filter(t => t.name !== 'DesignSwitcher').length;
        
        switcher.designCount = designCount > 0 ? designCount : 10; // Default to 10 if only switcher found (shouldn't happen if files exist)
        
        cats[cat] = [switcher];
      }
    });

    setCategories(cats);
  }, []);

  useEffect(() => {
    const handleHashChange = async () => {
      const hash = window.location.hash; // e.g. #templates/clinic/ClinicDesign1
      const parts = hash.split('/');
      const category = parts[1]; // Index 0 is #templates
      const templateName = parts[2];

      if (category) {
        setSelectedCategory(category);
        if (categories[category]) {
          const catTemplates = categories[category];
          // Try to find specific template, OR fall back to switcher if it exists
          let template = null;
          
          if (templateName) {
            template = catTemplates.find(t => t.name === templateName);
          }
          
          // If no specific template found (or not requested), check if we have a switcher
          if (!template && catTemplates.length === 1 && catTemplates[0].name === 'DesignSwitcher') {
             template = catTemplates[0];
          }

          if (template) {
            handleTemplateSelect(template);
          } else {
             // If we asked for a specific template but it's hidden/missing, and no switcher auto-select,
             // then show list (if any) or nothing.
             setSelectedTemplate(null);
             setLoadedTemplate(null);
          }
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
    // Call it once to handle initial load (if loaded with deep link)
    if (Object.keys(categories).length > 0) {
        handleHashChange();
    }
    
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
        <div className="fixed bottom-6 left-6 z-[2147483647] pointer-events-auto">
          <button 
            onClick={() => {
              const hash = window.location.hash;
              const parts = hash.split('/');
              const category = parts[1];
              
              // If the category is a "Switcher Category" (only has DesignSwitcher), go back to main gallery
              const isSwitcherCat = categories[category]?.length === 1 && categories[category][0].name === 'DesignSwitcher';

              if (category && !isSwitcherCat) {
                window.location.hash = `#templates/${category}`;
              } else {
                window.location.hash = '#templates';
              }
            }}
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full shadow-2xl hover:bg-slate-800 transition-all border border-white/10 backdrop-blur-md group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            <span className="font-medium">Back to Gallery</span>
          </button>
        </div>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-slate-50"><Loader className="w-10 h-10 animate-spin text-blue-600" /></div>}>
          <LoadedTemplate />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3 h-3" /> Premium Collection
             </div>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Design Template <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Gallery</span>
             </h1>
             <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
               Explore our curated collection of high-converting, professionally designed templates tailored for your industry.
             </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20 relative z-20">
        <div className="flex items-center justify-between mb-8">
           {onBack && (
              <button 
                onClick={onBack}
                className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </button>
            )}
        </div>

        {!selectedCategory ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.keys(categories).map(category => {
              const Icon = categoryIcons[category] || categoryIcons.default;
              const colorClass = categoryColors[category] || categoryColors.default;
              
              return (
                <button
                  key={category}
                  onClick={() => window.location.hash = `#templates/${category}`}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left group border border-slate-100 flex flex-col h-full"
                >
                  <div className={`w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h2 className="text-xl font-bold capitalize mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">
                    {category.replace('-', ' ')}
                  </h2>
                  
                  <p className="text-slate-500 text-sm mb-4 flex-grow">
                    Professional templates for {category.replace('-', ' ')} businesses.
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {categories[category][0].designCount || categories[category].length} Layouts
                    </span>
                    <span className="text-blue-600 bg-blue-50 p-1.5 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <button 
              onClick={() => window.location.hash = '#templates'}
              className="mb-8 text-slate-500 hover:text-slate-900 flex items-center gap-2 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Categories
            </button>
            
            <div className="flex items-center gap-4 mb-8">
               <div className={`p-3 rounded-xl ${categoryColors[selectedCategory] || categoryColors.default}`}>
                 {React.createElement(categoryIcons[selectedCategory] || categoryIcons.default, { className: "w-8 h-8" })}
               </div>
               <div>
                 <h2 className="text-3xl font-bold capitalize text-slate-900">{selectedCategory.replace('-', ' ')}</h2>
                 <p className="text-slate-500">Choose a template to preview</p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories[selectedCategory].map(template => (
                <div key={template.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                    {/* Placeholder for template preview if available, otherwise icon pattern */}
                    <div className="absolute inset-0 bg-slate-50 opacity-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <Layout className="w-16 h-16 text-slate-300 group-hover:text-blue-400 transition-colors duration-300 transform group-hover:scale-110" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                       <span className="text-white font-medium text-sm">Preview Template</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">{template.name}</h3>
                    <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                      High-conversion landing page optimized for {selectedCategory.replace('-', ' ')}.
                    </p>
                    <button
                      onClick={() => window.location.hash = `#templates/${selectedCategory}/${template.name}`}
                      className="w-full py-3 bg-white text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all font-semibold flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600"
                    >
                      View Template <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TemplatesGallery;
