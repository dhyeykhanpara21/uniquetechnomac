import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { TESTIMONIALS } from '../data/websiteData';
import { Testimonial } from '../types';

const SQRT_5000 = Math.sqrt(5000);

interface TestimonialWithTempId extends Testimonial {
  tempId: number;
}

interface TestimonialCardProps {
  position: number;
  testimonial: TestimonialWithTempId;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out select-none",
        isCenter 
          ? "z-10 bg-brand-primary text-white border-brand-primary shadow-xl" 
          : "z-0 bg-white text-gray-900 border-gray-250 hover:border-brand-primary/50 shadow-sm"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.55) * position}px)
          translateY(${isCenter ? -55 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px #1E88E5" : "none"
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-brand-secondary" : "bg-gray-200"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      
      <div className="flex flex-col h-full justify-between pb-8">
        <div>
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="mb-4 h-14 w-24 bg-white p-1 object-contain object-center rounded-md"
            style={{
              boxShadow: isCenter ? "3px 3px 0px #1E88E5" : "3px 3px 0px #e5e7eb"
            }}
          />
          <h3 className={cn(
            "text-sm sm:text-base font-semibold leading-relaxed line-clamp-4",
            isCenter ? "text-white" : "text-gray-900"
          )}>
            "{testimonial.comment}"
          </h3>
        </div>
        
        <div>
          <h4 className={cn(
            "text-xs sm:text-sm font-bold uppercase tracking-wider",
            isCenter ? "text-white" : "text-brand-primary"
          )}>
            {testimonial.name}
          </h4>
          <p className={cn(
            "text-[10px] sm:text-xs font-sans leading-tight mt-0.5",
            isCenter ? "text-blue-100/90" : "text-gray-400"
          )}>
            {testimonial.role} at <span className="font-semibold">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState<TestimonialWithTempId[]>(() =>
    TESTIMONIALS.map((t, index) => ({ ...t, tempId: index }))
  );

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 285);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-brand-bg/40 border-y border-blue-50/50"
      style={{ height: 600 }}
    >
      {/* Background soft patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="none" stroke="#0057B8" strokeWidth="1.5" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="relative h-full w-full max-w-7xl mx-auto px-4">
        {testimonialsList.map((testimonial, index) => {
          // Centering the active item (always at index Math.floor(length / 2))
          const centerIndex = Math.floor(testimonialsList.length / 2);
          const position = index - centerIndex;
          
          // Render only those cards that are within visible/reasonable bounds to prevent layout overflow
          if (Math.abs(position) > 2) return null;

          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}

        {/* Floating Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4 z-20">
          <button
            onClick={() => handleMove(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-white text-gray-500 shadow-md transition-all duration-300 hover:-translate-x-0.5 hover:bg-brand-primary hover:text-white hover:border-brand-primary active:scale-95 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-white text-gray-500 shadow-md transition-all duration-300 hover:translate-x-0.5 hover:bg-brand-primary hover:text-white hover:border-brand-primary active:scale-95 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
