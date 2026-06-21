import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Landmark, Mail, Phone, MapPin, Youtube, Facebook, Linkedin, Twitter, ArrowRight, Loader2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    <footer className="bg-brand-accent text-white border-t border-blue-950 font-sans relative overflow-hidden pt-16 md:pt-20 pb-8">
      {/* Footer Top Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-blue-900/60 pb-16">
        
        {/* Brand Information Section */}
        <div className="space-y-5">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2.5 bg-brand-primary text-white rounded-xl">
              <Landmark className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-md md:text-lg font-extrabold font-display tracking-tight leading-none text-white">
                APEX <span className="text-brand-secondary">INDUSTRIAL</span>
              </span>
              <span className="text-[8px] uppercase tracking-widest font-sans font-bold leading-none mt-1 text-blue-200">
                Machinery & Metallurgy
              </span>
            </div>
          </Link>
          <p className="text-xs text-blue-100 max-w-sm leading-relaxed">
            Apex Industrial leads in creating boron-steel soil implements, pneumatic smart seeders, and specialized metallurgical gear solutions across forty-five countries.
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
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-secondary shrink-0" /> Frankfurt, Hesse, Germany</span>
          <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-brand-secondary shrink-0" /> +49 (69) 1124-001</span>
          <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-brand-secondary shrink-0" /> trade@apex-industrial.com</span>
        </div>

        {/* Copyright claims */}
        <div className="text-[11px] text-center md:text-right text-blue-300 font-medium tracking-wide">
          © 2026 Apex Industrial Solutions Ltd. All rights reserved. • ISO 9001:2015 Registered
        </div>

      </div>
    </footer>
  );
}
