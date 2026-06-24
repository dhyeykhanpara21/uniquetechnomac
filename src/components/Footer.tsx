import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Youtube, Facebook, Linkedin, Twitter, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import logo from '../../images/logo.jpeg';

export const TextHoverEffect = ({
  text,
  duration,
  className,
  cursor,
  hovered,
  svgRef,
  automatic,
}: {
  text: string;
  duration?: number;
  className?: string;
  cursor: { x: number; y: number };
  hovered: boolean;
  svgRef: React.RefObject<SVGSVGElement | null>;
  automatic?: boolean;
}) => {
  const [maskPosition, setMaskPosition] = useState({ cx: "600", cy: "100" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const localX = ((cursor.x - svgRect.left) / svgRect.width) * 1200;
      const localY = ((cursor.y - svgRect.top) / svgRect.height) * 200;
      setMaskPosition({
        cx: `${localX}`,
        cy: `${localY}`,
      });
    }
  }, [cursor, svgRef]);

  const gradientAnimate = hovered
    ? maskPosition
    : automatic
    ? { cx: [0, 1200, 0], cy: 100 }
    : { cx: 600, cy: 100 };

  const gradientTransition = hovered
    ? { duration: duration ?? 0.15, ease: "easeOut" }
    : automatic
    ? { repeat: Infinity, duration: 10, ease: "easeInOut" }
    : { duration: 0.5 };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 1200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none uppercase", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="1200"
          y2="0"
        >
          {(hovered || automatic) && (
            <>
              <stop offset="0%" stopColor="#3ca2fa" />
              <stop offset="25%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="75%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#1E88E5" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="150"
          initial={{ cx: 600, cy: 100 }}
          animate={gradientAnimate}
          transition={gradientTransition}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>

        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1.2"
        fontSize="85"
        className="fill-transparent stroke-white/10 font-[Outfit] font-extrabold tracking-widest leading-none"
        style={{ opacity: (hovered || automatic) ? 0.6 : 0.25, transition: 'opacity 0.3s ease' }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1.2"
        fontSize="85"
        className="fill-transparent stroke-[#3ca2fa] font-[Outfit] font-extrabold tracking-widest leading-none opacity-45"
        initial={{ strokeDashoffset: 1200, strokeDasharray: 1200 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1200,
        }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#textGradient)"
        stroke="url(#textGradient)"
        strokeWidth="1"
        mask="url(#textMask)"
        filter="url(#glow)"
        fontSize="85"
        className="font-[Outfit] font-extrabold tracking-widest leading-none"
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #3ca2fa33 100%)",
      }}
    />
  );
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const footerRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail('');
    }, 1200);
  };

  return (
    <footer
      ref={footerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="bg-brand-accent text-white border-t border-blue-950 font-sans relative overflow-hidden pt-16 md:pt-20 pb-8"
    >
      <FooterBackgroundGradient />
      {/* Large Brand Visual Watermark in the background */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] sm:h-[220px] md:h-[300px] lg:h-[360px] z-0 overflow-hidden pointer-events-none select-none opacity-20">
        <TextHoverEffect 
          text="UNIQUE TECHNO MECH" 
          cursor={cursor}
          hovered={hovered}
          svgRef={svgRef}
          automatic={true}
        />
      </div>
      {/* Footer Top Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-blue-900/60 pb-16">
        
        {/* Brand Information Section */}
        <div className="space-y-5">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Unique Techno Mech Logo"
              className="w-10 h-10 object-contain rounded-xl bg-white p-1"
            />
            <div className="flex flex-col">
              <span className="text-md md:text-lg font-extrabold font-display tracking-tight leading-none text-white">
                UNIQUE <span className="text-brand-secondary">TECHNO MECH</span>
              </span>
              <span className="text-[8px] uppercase tracking-widest font-sans font-bold leading-none mt-1 text-blue-200">
                ALL TYPE OF CNC & CAD-CAM WORKS
              </span>
            </div>
          </Link>
          <p className="text-xs text-blue-100 max-w-sm leading-relaxed">
            Unique Techno Mech leads in creating high-strength worm gears, VMC parts, subcontractor tractor spares, and specialized metallurgical casting solutions.
          </p>
          {/* Social Icons Row */}
          <div className="flex items-center gap-3 pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-blue-900/60 text-blue-200 hover:text-white hover:bg-brand-primary hover:scale-105 transition-all cursor-pointer" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-blue-900/60 text-blue-200 hover:text-white hover:bg-brand-primary hover:scale-105 transition-all cursor-pointer" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-blue-900/60 text-blue-200 hover:text-white hover:bg-brand-primary hover:scale-105 transition-all cursor-pointer" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-blue-900/60 text-blue-200 hover:text-white hover:bg-brand-primary hover:scale-105 transition-all cursor-pointer" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-secondary">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs font-medium text-blue-100">
            <li>
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition-colors flex items-center gap-1">Our Products</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1">About Our Story</Link>
            </li>
            <li>
              <Link to="/inquiry" className="hover:text-white transition-colors flex items-center gap-1">Get Quotation</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-white transition-colors flex items-center gap-1">Contact Office</Link>
            </li>
          </ul>
        </div>

        {/* Product categories shortcuts Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-secondary">
            Machine Collections
          </h4>
          <ul className="space-y-2.5 text-xs text-blue-100">
            <li>
              <Link to="/products?category=Tillage" className="hover:text-white transition-colors">Primary & Secondary Tillage</Link>
            </li>
            <li>
              <Link to="/products?category=Seeding" className="hover:text-white transition-colors">Precision Seeding & Planting</Link>
            </li>
            <li>
              <Link to="/products?category=Crop%20Protection" className="hover:text-white transition-colors">Crop Sprayers & Protection</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition-colors">Bespoke Hydraulic Assemblies</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription input Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-secondary">
            Industry Bulletins
          </h4>
          <p className="text-xs text-blue-100 leading-relaxed">
            Subscribe to receive technical documentation updates, catalog announcements, and field trial results.
          </p>
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="sub-form"
                onSubmit={handleSubscribe}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-2 pt-1.5"
              >
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter business email"
                    className="w-full bg-blue-900/50 hover:bg-blue-900/65 border border-blue-800/80 rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-blue-300 focus:outline-none focus:border-brand-primary focus:bg-blue-950 transition-all font-sans"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-1.5 group cursor-pointer"
                >
                  {loading ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <>
                      <span>Join Network</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="sub-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-3 bg-blue-950/40 rounded-xl border border-blue-800/55 flex items-start gap-2.5"
              >
                <div className="p-1 bg-green-500/25 border border-green-500/20 text-green-300 rounded-lg shrink-0 mt-0.5">
                  <svg className="w-4 h-4 fill-current text-green-400" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-[11px] text-blue-100 font-sans">
                  <strong className="text-white block font-semibold">Subscribed Joined!</strong>
                  You will now receive our certified technical logs.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Footer Bottom Credentials and Info row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Core Address / Contact snapshot */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-[11px] text-blue-200">
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-secondary shrink-0" /> Rajkot, Gujarat, India</span>
          <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-brand-secondary shrink-0" /> +91 9173159016</span>
          <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-brand-secondary shrink-0" /> trade@uniquetechnomech.com</span>
        </div>

        {/* Copyright claims */}
        <div className="text-[11px] text-center md:text-right text-blue-300 font-medium tracking-wide">
          © 2026 Unique Techno Mech. All rights reserved. • Established 2002
        </div>

      </div>
    </footer>
  );
}
