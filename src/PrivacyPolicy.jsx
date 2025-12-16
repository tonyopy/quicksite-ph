import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

function PrivacyPolicy({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-blue max-w-none text-gray-600">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              QuickSite PH ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website QuickSitePH.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We collect several types of information from and about users of our Website, including information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number ("personal information");</li>
              <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. Contact Information</h2>
            <p className="mb-4">
              To ask questions or comment about this privacy policy and our privacy practices, contact us at: info@quicksiteph.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
