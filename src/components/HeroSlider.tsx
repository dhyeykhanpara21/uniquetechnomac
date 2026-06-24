import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, Star, ShieldAlert, Cpu, Settings2 } from 'lucide-react';
import { HERO_SLIDES } from '../data/websiteData';

// Helper to get the correct icon for floating badge
const getBadgeIcon = (iconName: string) => {
  switch (iconName) {
    case 'ShieldAlert':
      return <ShieldAlert className="w-4 h-4 text-blue-400" />;
    case 'Cpu':
      return <Cpu className="w-4 h-4 text-blue-400 animate-spin-slow" />;
    case 'Settings2':
      return <Settings2 className="w-4 h-4 text-blue-400 animate-pulse" />;
    default:
      return <Star className="w-4 h-4 text-blue-400" />;
  }
};

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigateSlide = useCallback((direction: number) => {
    setActiveIndex((prev) => (prev + direction + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Autoplay function, resets when activeIndex changes
  useEffect(() => {
    const timer = setInterval(() => {
      navigateSlide(1);
    }, 6500);
    return () => clearInterval(timer);
  }, [activeIndex, navigateSlide]);

  const currentSlide = HERO_SLIDES[activeIndex];

  return (
    <div className="relative w-full min-h-[85vh] lg:min-h-[85vh] flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-brand-accent/40 overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-8 border-b border-white/5">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e88e5_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      
      {/* Large Glowing Orbs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Decorative Diagonal Grid Line */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="100" y1="0" x2="0" y2="100" stroke="#0057B8" strokeWidth="0.5" />
          <line x1="100" y1="20" x2="20" y2="100" stroke="#1E88E5" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Main Content Layout Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center z-10 pt-8 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* LEFT COLUMN: Texts & Info */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeIndex}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Floating Tag */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-secondary/15 border border-brand-secondary/30 text-blue-300 text-xs font-bold tracking-widest rounded-full uppercase">
                  <Star className="w-3 h-3 fill-blue-400 text-blue-400 animate-pulse" />
                  {currentSlide.subtitle}
                </span>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] text-white tracking-tight">
                  {currentSlide.title}
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-md text-blue-100/80 max-w-xl leading-relaxed font-sans">
                  {currentSlide.description}
                </p>

                {/* Action Buttons */}
                <div className="pt-2 mb-6 sm:mb-8 flex flex-wrap items-center gap-4">
                  <Link
                    to={currentSlide.ctaLink}
                    className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-brand-primary text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-brand-primary/25 transition-all duration-300 uppercase text-xs tracking-wider group"
                  >
                    <span>{currentSlide.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/contact-us"
                    className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-semibold px-7 py-4 rounded-xl transition-all duration-300 uppercase text-xs tracking-wider"
                  >
                    Contact Expert
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Layered Creative Image Display */}
          <div className="lg:col-span-6 relative flex items-center justify-center h-[340px] sm:h-[420px] lg:h-[480px] w-full">
            
            {/* 1. Behind-Image Tech Circular Grid Graphic */}
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-blue-500/10 flex items-center justify-center animate-spin-slow pointer-events-none">
              <div className="w-[85%] h-[85%] rounded-full border border-dashed border-blue-400/20" />
            </div>

            {/* 2. Main Image Container */}
            <div className="relative w-[85%] h-[90%] sm:w-[80%] sm:h-[85%] z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`main-image-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.92, rotate: -1.5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.94, rotate: 1.5 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 18 }}
                  className="w-full h-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/15 bg-slate-800"
                >
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 select-none"
                  />
                  {/* Subtle dark gradient overlay to anchor images */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 3. Overlapping Detail Image (Specs Zoom) */}
            <div className="absolute bottom-[-10px] right-2 sm:right-6 w-[95px] h-[95px] sm:w-[130px] sm:h-[130px] md:w-[170px] md:h-[170px] z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`detail-image-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.8, x: 30, y: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 15, y: 15 }}
                  transition={{ type: 'spring', stiffness: 90, damping: 16, delay: 0.15 }}
                  className="w-full h-full rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] border border-white/20 bg-slate-900 group cursor-pointer"
                >
                  <img
                    src={currentSlide.detailImage}
                    alt={`${currentSlide.title} technical detail`}
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500 select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
                  
                  {/* Floating spec indicator */}
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-slate-950/80 backdrop-blur-md text-[8px] sm:text-[9px] font-bold text-blue-200 py-1 sm:py-1.5 px-1.5 rounded-lg text-center uppercase tracking-widest border border-white/10 pointer-events-none">
                    Specs Zoom
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 4. Glassmorphic Float Badge (Metric indicator) */}
            <div className="absolute top-2 left-2 sm:left-6 z-30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${activeIndex}`}
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 15, delay: 0.25 }}
                  className="bg-brand-primary/80 backdrop-blur-md text-white px-3 py-2 sm:px-4 sm:py-3 rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-2.5 border border-white/15 hover:bg-brand-primary/95 transition-colors cursor-default select-none"
                >
                  <div className="p-1 sm:p-1.5 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                    {getBadgeIcon(currentSlide.badgeIcon)}
                  </div>
                  <div className="text-left leading-tight">
                    <span className="text-[8px] sm:text-[9px] text-blue-200 font-bold uppercase tracking-wider block">Unique Custom</span>
                    <span className="text-[10px] sm:text-xs font-extrabold text-white block">{currentSlide.badgeText}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
          
        </div>
      </div>

      {/* BOTTOM FOOTER: Indicators, Progress bars & Manual Chevrons */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-white/10 mt-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
        
        {/* Indicators tabs with Progress Bars */}
        <div 
          className="grid gap-4 w-full md:w-auto md:min-w-[550px]"
          style={{ gridTemplateColumns: `repeat(${HERO_SLIDES.length}, minmax(0, 1fr))` }}
        >
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(index)}
                className="group text-left focus:outline-none transition-all duration-300 cursor-pointer"
              >
                <span className="text-[10px] font-bold tracking-widest text-slate-400 group-hover:text-blue-300 transition-colors block uppercase">
                  0{index + 1}
                </span>
                <span className={`text-[11px] sm:text-xs font-bold mt-0.5 hidden sm:block transition-colors ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'} truncate`}>
                  {slide.tabLabel}
                </span>
                
                {/* Horizontal Progress Bar */}
                <div className="relative w-full h-[3px] bg-white/10 rounded-full mt-2.5 overflow-hidden">
                  {isActive ? (
                    <motion.div
                      key={`progress-${activeIndex}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 6.5, ease: 'linear' }}
                      className="absolute top-0 left-0 h-full bg-brand-secondary"
                    />
                  ) : (
                    <div className="absolute top-0 left-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-300" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Manual Left/Right Chevrons */}
        <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
          <button
            onClick={() => navigateSlide(-1)}
            className="p-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-brand-primary hover:border-brand-primary hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-brand-primary/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigateSlide(1)}
            className="p-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-brand-primary hover:border-brand-primary hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-brand-primary/20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
