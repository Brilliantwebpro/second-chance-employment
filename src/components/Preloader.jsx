import { useEffect } from 'react';

const Preloader = ({ onLoadComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => onLoadComplete(), 2000);
    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="text-center p-12">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 rounded-2xl mx-auto mb-8 animate-spin-slow shadow-xl" />
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg animate-pulse">
          Second Chance
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-white/80 mb-8">
          Employment
        </p>
        <div className="flex justify-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0s'}} />
          <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
          <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;

