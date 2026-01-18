import React from 'react';

/**
 * Minimal Modern Loading Spinner 2026
 * Clean, subtle loading animation for app initialization
 */
const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Modern Loading Container */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Dual Ring Animation */}
        <div className="relative w-20 h-20 animate-fade-scale">
          <div className="absolute inset-0 border-4 border-transparent border-t-gold-400 border-r-gold-400 rounded-full animate-spin-clockwise"></div>
          <div className="absolute inset-2 border-4 border-transparent border-b-gold-400 border-l-gold-400 rounded-full animate-spin-counter-clockwise"></div>
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-brand text-gray-900 dark:text-white tracking-tight leading-tight">
            Sueño Dorado
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Subtle loading text */}
        <p className="text-sm font-body text-gray-500 dark:text-gray-400 animate-fade-in">
          Preparando tu experiencia premium...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;