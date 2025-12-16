import React from 'react';

export const Logo = ({ className = "" }) => (
  <div className={`flex flex-col justify-center select-none ${className}`}>
    <span className="font-extrabold text-2xl tracking-tight leading-none text-gray-900 pb-1">
      Quick<span className="text-blue-600">Site</span>
    </span>
    <span className="text-[0.65rem] font-bold text-orange-500 tracking-widest uppercase leading-none ml-0.5">
      Philippines
    </span>
  </div>
);

export const LogoWhite = ({ className = "" }) => (
  <div className={`flex flex-col justify-center select-none ${className}`}>
    <span className="font-extrabold text-2xl tracking-tight leading-none text-white pb-1">
      Quick<span className="text-blue-400">Site</span>
    </span>
    <span className="text-[0.65rem] font-bold text-orange-400 tracking-widest uppercase leading-none ml-0.5">
      Philippines
    </span>
  </div>
);

export default Logo;