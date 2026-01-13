import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

function TermsOfService({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <Helmet>
        <title>Terms of Service - QuickSite PH</title>
        <meta name="description" content="Terms of Service for QuickSite PH. Read our terms and conditions for using our website and services." />
        <link rel="canonical" href="https://quicksiteph.com/" />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-blue max-w-none text-gray-600">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. Acceptance of the Terms of Service</h2>
            <p className="mb-4">
              These terms of service are entered into by and between You and QuickSite PH ("Company," "we," or "us"). The following terms and conditions govern your access to and use of QuickSitePH.com, including any content, functionality, and services offered on or through QuickSitePH.com.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. Accessing the Website</h2>
            <p className="mb-4">
              We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. Intellectual Property Rights</h2>
            <p className="mb-4">
              The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. Services and Payment</h2>
            <p className="mb-4">
              Prices for our services are described on the Website and are subject to change. We reserve the right to refuse service to anyone for any reason at any time.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              In no event will the Company, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website, any websites linked to it, any content on the Website or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">6. Governing Law</h2>
            <p className="mb-4">
              All matters relating to the Website and these Terms of Service, and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the internal laws of the Philippines without giving effect to any choice or conflict of law provision or rule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
