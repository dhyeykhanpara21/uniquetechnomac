import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, Star } from 'lucide-react';
import { HERO_SLIDES } from '../data/websiteData';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 1.05
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      opacity: { duration: 0.6 },
      scale: { duration: 0.8 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
    transition: {
      opacity: { duration: 0.4 },
      x: { duration: 0.5 }
    }
  })
};

export default function HeroSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const activeIndex = (page % HERO_SLIDES.length + HERO_SLIDES.length) % HERO_SLIDES.length;

  const navigateSlide = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  // Autoplay function
  useEffect(() => {
    const timer = setInterval(() => {
      navigateSlide(1);
    }, 6500);
    return () => clearInterval(timer);
  }, [navigateSlide]);

  const currentSlide = HERO_SLIDES[activeIndex];

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] min-h-[500px] overflow-hidden bg-brand-accent">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center select-none"
            />
            {/* Gradient Deep Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/90 via-brand-accent/60 to-transparent md:to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/40 via-transparent to-brand-accent/10" />
          </div>

          {/* Action Contents Container */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-[85%] sm:max-w-2xl md:max-w-3xl text-left select-none pr-4">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-secondary/25 border border-brand-secondary/40 text-blue-200 text-xs md:text-sm font-bold tracking-widest rounded-full uppercase mb-4 md:mb-6"
              >
                <Star className="w-3.5 h-3.5 fill-blue-300 text-blue-300 animate-pulse" />
                {currentSlide.subtitle}
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] text-white tracking-tight"
              >
                {currentSlide.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-blue-100 max-w-xl md:max-w-2xl leading-relaxed"
              >
                {currentSlide.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="mt-6 md:mt-10 flex flex-wrap items-center gap-4"
              >
                <Link
                  to={currentSlide.ctaLink}
                  className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-brand-secondary/95 text-white font-semibold px-6 md:px-8 py-3.5 md:py-4 rounded-lg shadow-lg hover:shadow-brand-secondary/30 transition-all duration-300 uppercase text-xs md:text-sm tracking-wider transform hover:-translate-y-0.5 group"
                >
                  <span>{currentSlide.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact-us"
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-lg transition-all duration-300 uppercase text-xs md:text-sm tracking-wider"
                >
                  Contact Expert
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Manual Sliding Chevron Controls */}
      <button
        onClick={() => navigateSlide(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full border border-white/20 bg-black/25 text-white hover:bg-brand-primary hover:border-brand-primary hover:scale-105 transition-all hidden md:flex items-center justify-center z-20 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => navigateSlide(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full border border-white/20 bg-black/25 text-white hover:bg-brand-primary hover:border-brand-primary hover:scale-105 transition-all hidden md:flex items-center justify-center z-20 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Pagination Index Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage([index, index > activeIndex ? 1 : -1])}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === activeIndex ? 'w-8 bg-brand-secondary' : 'w-2 bg-white/40 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
