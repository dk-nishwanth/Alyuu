import React, { useEffect } from 'react';
import { initializeImageProtection, cleanupImageProtection } from '../utils/imageProtection';

const Hero: React.FC = () => {
  useEffect(() => {
    // Initialize image protection when component mounts
    initializeImageProtection();
    
    // Cleanup when component unmounts
    return () => {
      cleanupImageProtection();
    };
  }, []);
  return (
    <section className="relative min-h-screen md:min-h-[170vh] bg-[#fdfbf7] overflow-hidden">
      {/* Mobile Full-Screen Hero */}
      <div className="md:hidden w-full h-screen flex flex-col items-center justify-between px-4 py-8 relative overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-[#fdfbf7] to-emerald-50/30">
        {/* Top Accent Line */}
        <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mt-4"></div>

        {/* Center Content - Full Screen */}
        <div className="flex flex-col items-center justify-center w-full flex-1 animate-fade-up">
          {/* Creative Portfolio Label with Icon */}
          <div className="flex items-center gap-2 mb-10">
            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-emerald-800">Portfolio</span>
            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
          </div>
          
          {/* Main Title - Large and Bold with Better Spacing */}
          <h1 className="flex flex-col items-center w-full mb-12 leading-none">
            <span className="text-5xl font-bold serif leading-[0.9] text-black">
              Design
            </span>
            <div className="my-4 flex items-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
              <span className="text-4xl font-bold serif text-emerald-700">
                &
              </span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
            </div>
            <span className="text-6xl font-bold serif italic leading-[0.85] text-black">
              Innovation
            </span>
          </h1>
          
          {/* Subtitle with Better Typography */}
          <div className="max-w-xs mb-12">
            <p className="text-sm font-medium tracking-wide text-emerald-950/70 serif italic text-center leading-relaxed px-2">
              Crafting digital experiences through
            </p>
            <p className="text-sm font-medium tracking-wide text-emerald-950/70 serif italic text-center leading-relaxed px-2 mt-1">
              UI/UX design and full-stack development.
            </p>
          </div>

          {/* Decorative Dots */}
          <div className="flex gap-2 mb-12">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
          </div>

          {/* Side Labels - Below with Better Design */}
          <div className="flex justify-between w-full max-w-xs px-4 py-6 border-t border-emerald-200/50">
            {/* Left Label */}
            <div className="text-left">
              <p className="text-[7px] font-black uppercase tracking-[0.2em] text-emerald-700 mb-2">Portfolio</p>
              <p className="text-[9px] font-semibold leading-tight text-black/80">
                Designer &<br />
                Developer
              </p>
            </div>

            {/* Center Divider */}
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-emerald-300 to-transparent"></div>

            {/* Right Label */}
            <div className="text-right">
              <p className="text-[7px] font-black uppercase tracking-[0.2em] text-black/50 mb-2">Based in</p>
              <p className="text-[9px] font-semibold leading-tight text-black/80">
                Tamil Nadu,<br />
                India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full mb-4"></div>
      </div>

      {/* Desktop Hero */}
      <div className="hidden md:block pt-48 lg:pt-64 px-8 max-w-[1400px] mx-auto relative z-20">
        <div className="relative flex flex-col items-center">
          
          {/* Side Labels - Hidden on mobile */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block text-left w-64 border-l border-emerald-900/10 pl-6">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-800 mb-2">Portfolio</p>
            <p className="text-[13px] font-medium leading-relaxed text-black/80">
              Designer &<br />
              Developer
            </p>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block text-right w-64 border-r border-emerald-900/10 pr-6">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black/40 mb-2">Based in</p>
            <p className="text-[13px] font-medium leading-relaxed text-black/80">
              Tamil Nadu,<br />
              India
            </p>
          </div>

          {/* Main Title */}
          <div className="flex flex-col items-center text-center animate-fade-up w-full">
            <span className="text-[12px] font-black uppercase tracking-[0.7em] mb-12 text-emerald-900">Portfolio</span>
            <h1 className="flex flex-col items-center w-full">
              <span className="text-7xl lg:text-[11rem] xl:text-[13rem] serif leading-[0.9] break-words">
                Design &
              </span>
              <span className="text-8xl lg:text-[13rem] xl:text-[16rem] serif italic leading-[0.7] -mt-4 break-words">
                Innovation
              </span>
            </h1>
            <p className="mt-12 text-lg lg:text-xl font-medium tracking-wide text-emerald-950/70 max-w-2xl serif italic px-4">
              Crafting digital experiences through UI/UX design and full-stack development.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Visual Composition */}
      <div className="hidden md:block relative w-full max-w-[1200px] mx-auto h-auto md:h-[900px] mt-8 md:mt-24 px-4">
        
        {/* Desktop Layout */}
        <div className="relative w-full h-[900px]">
          {/* Left: Design & UX */}
          <div className="absolute left-[-2%] top-[10%] w-[38%] h-[650px] z-10 shadow-2xl overflow-hidden rounded-lg animate-fade-up protected-image-container" style={{ animationDelay: '0.2s' }}>
            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&fit=crop&crop=center" 
              alt="UI/UX Design" 
              className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 protected-image"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className="protected-image-watermark">ALYUSHRA</div>
          </div>

          {/* Center: Portfolio Showcase */}
          <div className="absolute left-[25%] bottom-0 w-[65%] h-[500px] z-30 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[20px] border-[#fdfbf7] overflow-hidden rounded-lg animate-fade-up protected-image-container" style={{ animationDelay: '0.4s' }}>
            <img 
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&fit=crop&crop=center" 
              alt="Web Development" 
              className="w-full h-full object-cover protected-image"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className="protected-image-watermark">ALYUSHRA</div>
          </div>

          {/* Right: Development & Innovation */}
          <div className="absolute right-[-4%] top-[25%] w-[40%] h-[580px] z-20 shadow-2xl overflow-hidden rounded-lg animate-fade-up protected-image-container" style={{ animationDelay: '0.6s' }}>
            <img 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80&fit=crop&crop=center" 
              alt="Product Design" 
              className="w-full h-full object-cover protected-image"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className="protected-image-watermark">ALYUSHRA</div>
            
            <div className="absolute bottom-24 -left-20 rotate-[-4deg] bg-emerald-950 px-10 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-40 pointer-events-none">
              <p className="text-[13px] font-black uppercase tracking-[0.3em] text-white whitespace-nowrap">Portfolio 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Images - Below text */}
      <div className="md:hidden flex flex-col gap-4 px-4 pb-8">
        <div className="w-full h-[250px] shadow-lg overflow-hidden rounded-lg animate-fade-up protected-image-container">
          <img 
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&fit=crop&crop=center" 
            alt="UI/UX Design" 
            className="w-full h-full object-cover protected-image"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
          <div className="protected-image-watermark">ALYUSHRA</div>
        </div>
        <div className="w-full h-[250px] shadow-lg overflow-hidden rounded-lg animate-fade-up protected-image-container" style={{ animationDelay: '0.2s' }}>
          <img 
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80&fit=crop&crop=center" 
            alt="Web Development" 
            className="w-full h-full object-cover protected-image"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
          <div className="protected-image-watermark">ALYUSHRA</div>
        </div>
        <div className="w-full h-[250px] shadow-lg overflow-hidden rounded-lg animate-fade-up protected-image-container" style={{ animationDelay: '0.4s' }}>
          <img 
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80&fit=crop&crop=center" 
            alt="Product Design" 
            className="w-full h-full object-cover protected-image"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
          <div className="protected-image-watermark">ALYUSHRA</div>
        </div>
      </div>
      
      {/* Decorative Marquee - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-[-5%] left-0 w-full overflow-hidden pointer-events-none opacity-5">
         <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-end gap-32 min-w-max h-full grayscale px-12">
              <span className="text-[120px] font-black tracking-tighter serif">ALYUSHRA</span>
              <span className="text-[120px] font-black tracking-tighter serif">DESIGNER</span>
              <span className="text-[120px] font-black tracking-tighter serif">DEVELOPER</span>
              <span className="text-[120px] font-black tracking-tighter serif">PORTFOLIO</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
