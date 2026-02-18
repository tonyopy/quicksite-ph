import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

// Your Facebook Page ID — from your profile URL: facebook.com/profile.php?id=61574823853351
const FB_PAGE_ID = '61574823853351';
const MESSENGER_URL = `https://m.me/${FB_PAGE_ID}`;

function MessengerButton() {
    const [showTooltip, setShowTooltip] = useState(true);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            {/* Tooltip bubble */}
            {showTooltip && (
                <div className="relative flex items-center bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100 animate-fade-in max-w-[220px]">
                    <button
                        onClick={() => setShowTooltip(false)}
                        className="absolute -top-2 -right-2 w-5 h-5 bg-gray-400 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-3 h-3 text-white" />
                    </button>
                    <div>
                        <p className="text-sm font-semibold text-gray-800">Kumusta! 👋</p>
                        <p className="text-xs text-gray-500 mt-0.5">Message us on Messenger!</p>
                    </div>
                </div>
            )}

            {/* Messenger button */}
            <a
                href={MESSENGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on Messenger"
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95"
                style={{
                    background: 'linear-gradient(135deg, #0099FF 0%, #A033FF 60%, #FF5C87 100%)',
                }}
                onClick={() => setShowTooltip(false)}
            >
                {/* Official Messenger "M" lightning bolt icon */}
                <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                    <path
                        d="M14 2C7.373 2 2 7.06 2 13.333c0 3.444 1.607 6.52 4.133 8.627V26l3.88-2.133c1.04.287 2.14.44 3.28.44 6.627 0 12-5.06 12-11.334C25.293 7.06 20.627 2 14 2z"
                        fill="white"
                    />
                    <path
                        d="M15.12 17.067l-3.053-3.254-5.96 3.254 6.56-6.96 3.127 3.254 5.887-3.254-6.56 6.96z"
                        fill="url(#messenger_gradient)"
                    />
                    <defs>
                        <linearGradient id="messenger_gradient" x1="6.107" y1="14" x2="21.68" y2="14" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0099FF" />
                            <stop offset="0.6" stopColor="#A033FF" />
                            <stop offset="1" stopColor="#FF5C87" />
                        </linearGradient>
                    </defs>
                </svg>
            </a>
        </div>
    );
}

export default MessengerButton;
