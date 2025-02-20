import React from 'react';

const BannerButton = () => {
  return (
    <button className="group relative">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-300 opacity-75 blur transition duration-300 group-hover:opacity-100" />
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-300 opacity-75 blur transition duration-300 group-hover:opacity-100 animation-delay-200" />
      <span className="relative flex items-center gap-3 rounded-3xl bg-black px-7 py-3 leading-none">
        
        <span className="inline-flex flex-col gap-1">
          <span className="text-sm font-medium text-cyan-500">Unlock The True potential Of CazzAI</span>
          
        </span>
        <span className="ml-auto transform transition-transform duration-300 group-hover:translate-x-1">
          
        </span>
        <div className="absolute -bottom-2 left-1/2 h-px w-5/6 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 blur-sm transition-all duration-300 group-hover:w-full" />
      </span>
    </button>
  );
}

export default BannerButton;
