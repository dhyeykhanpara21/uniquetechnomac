import { useEffect, useRef, useState } from 'react';
import { STATS } from '../data/websiteData';
import { motion, useInView } from 'motion/react';

function SingleCounter({ target, duration = 1.8 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  
  // Use Framer Motion's built-in useInView for safe viewport detection!
  const isInView = useInView(elementRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000; // in seconds
      const progress = Math.min(elapsed / duration, 1);
      
      // East-out quadratic progress calculation
      const easeProgress = progress * (2 - progress);
      
      const currentCount = Math.floor(easeProgress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count.toLocaleString()}
    </span>
  );
}

export default function CounterSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-accent to-brand-primary py-16 md:py-24 text-white">
      {/* Abstract Background Accents */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-center items-center py-4 px-2"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight flex items-center justify-center text-white">
                {stat.prefix && <span className="mr-1">{stat.prefix}</span>}
                <SingleCounter target={stat.value} />
                {stat.suffix && <span className="text-blue-200">{stat.suffix}</span>}
              </div>
              <div className="mt-2 text-sm md:text-base font-semibold text-blue-100 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
