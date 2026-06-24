import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageCircle, FileText } from 'lucide-react';
import indiamartLogo from '../../images/indiamart.png';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3.5 z-30">
      
      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            onClick={scrollToTop}
            className="p-3 bg-brand-accent hover:bg-brand-primary text-white rounded-full shadow-lg hover:shadow-brand-accent/40 shadow-blue-900/10 hover:scale-110 transition-all border border-white/20 flex items-center justify-center cursor-pointer pointer-events-auto"
            title="Scroll To Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Sticky Enquiry Prompt */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          to="/inquiry"
          className="p-3 bg-brand-primary hover:bg-brand-accent text-white rounded-full shadow-lg hover:shadow-brand-primary/45 shadow-blue-900/10 hover:scale-110 transition-all border border-white/20 flex items-center justify-center cursor-pointer pointer-events-auto relative group"
          title="Instant Quotation Inquiry"
        >
          <FileText className="w-5 h-5 font-bold" />
          <span className="absolute right-[115%] bg-brand-accent text-white py-1 px-3.5 text-xs font-semibold rounded-lg shadow-md border border-white/10 hidden md:block whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Get Instant Quote
          </span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-secondary"></span>
          </span>
        </Link>
      </motion.div>

      {/* Sticky IndiaMART Link */}
      <motion.a
        href="https://www.indiamart.com/unique-techno-mech-rajkot/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="p-2.5 bg-slate-100 hover:bg-slate-200 text-gray-700 rounded-full shadow-lg hover:shadow-slate-300/40 hover:scale-110 transition-all border border-slate-300 flex items-center justify-center cursor-pointer pointer-events-auto relative group"
        title="View IndiaMART Profile"
      >
        <img
          src={indiamartLogo}
          alt="IndiaMART Logo"
          className="w-9 h-9 object-contain"
        />
        <span className="absolute right-[115%] bg-teal-800 text-white py-1 px-3.5 text-xs font-semibold rounded-lg shadow-md border border-white/10 hidden md:block whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          IndiaMART Store
        </span>
      </motion.a>

      {/* Sticky WhatsApp Chat Link */}
      <motion.a
        href="https://wa.me/9173159016?text=Hello%20Unique%20Techno%20Mech!%20I%20am%20interested%20in%20your%20automotive%20gears%20and%20machined%20components."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-green-500/40 hover:scale-110 transition-all border border-white/20 flex items-center justify-center cursor-pointer pointer-events-auto relative group"
        title="Direct WhatsApp Helpline"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="absolute right-[115%] bg-green-600 text-white py-1 px-3.5 text-xs font-semibold rounded-lg shadow-md border border-white/10 hidden md:block whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp Helpline
        </span>
      </motion.a>
    </div>
  );
}
