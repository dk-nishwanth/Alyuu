
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 px-4 md:px-8 py-3 md:py-8 flex items-center justify-between md:justify-center bg-transparent pointer-events-none transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Centered Logo */}
      <div className="flex flex-col items-center pointer-events-auto cursor-pointer group flex-1 md:flex-none">
        <div className="flex flex-col items-center leading-tight">
          <span className="text-base md:text-[28px] font-pacifico tracking-wide group-hover:text-emerald-600 transition-colors whitespace-nowrap" style={{ letterSpacing: '0.05em' }}>Alyushra</span>
          <span className="text-[6px] md:text-[8px] font-bold tracking-[0.15em] uppercase mt-0.5 md:mt-1 opacity-50 whitespace-nowrap">Designer & Developer</span>
        </div>
      </div>

      {/* Right side controls */}
      <div className="absolute right-4 md:right-8 flex items-center gap-4 md:gap-8 pointer-events-auto">
        <div className="hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
          <button className="hover:opacity-60 text-gray-400 transition-opacity">IN</button>
          <span className="opacity-30">/</span>
          <button className="border-b border-black hover:opacity-60 transition-opacity">EN</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
