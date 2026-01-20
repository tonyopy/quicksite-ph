import React, { useEffect } from 'react';

const CalendlyBooking = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }, []);

  return (
    <div 
      className="calendly-inline-widget w-full h-[700px] border border-gray-100 rounded-xl shadow-sm" 
      data-url="https://calendly.com/quicksiteph/30min?hide_gdpr_banner=1" 
    ></div>
  );
};

export default CalendlyBooking;
