import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/websiteData';
import { 
  MapPin, Phone, Mail, Clock, ChevronDown, 
  Map, Globe2, Compass, Landmark, Settings, Sparkles 
} from 'lucide-react';

import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/ContactForm';

export default function ContactUs() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const contactDetails = [
    {
      title: 'Global Export Headquarters',
      city: 'Frankfurt Export Office',
      address: 'Lyoner Strasse 15, 60528 Frankfurt am Main, Germany',
      phone: '+49 (69) 1124-001 / +49 (69) 1124-002',
      email: 'trade@uniquetechnomech.com',
      hours: 'Mon - Fri: 08:00 - 18:00 CET',
      icon: <Globe2 className="w-5 h-5 text-brand-primary" />
    },
    {
      title: 'Manufacturing & Casting Plant',
      city: 'Rajkot Plant, India',
      address: 'Plot No. 42-A, GIDC Industrial Estate, Rajkot, Gujarat 360021, India',
      phone: '+91 9173159016 / +91 281 2410-002',
      email: 'plant@uniquetechnomech.in',
      hours: 'Mon - Sat: 08:00 - 19:30 IST',
      icon: <Landmark className="w-5 h-5 text-brand-primary" />
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Dynamic Header Banner */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-brand-primary flex items-center justify-center min-h-[40vh]">
        {/* Abstract Background with animated shapes */}
        <div className="absolute inset-0 z-0 bg-brand-primary">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-brand-primary to-brand-accent opacity-80"></div>
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        </div>

        {/* Floating Industrial Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 -top-32 text-white/5 z-0 pointer-events-none"
        >
          <Settings size={400} strokeWidth={0.5} />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -left-24 -bottom-24 text-white/5 z-0 pointer-events-none"
        >
          <Settings size={300} strokeWidth={0.5} />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl mb-6"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white">
              Contact Offices
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.15] max-w-4xl drop-shadow-2xl"
          >
            Consult With Our <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-blue-200">
              Metallurgy Experts
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-sans font-medium leading-relaxed"
          >
            Ready to scale up your agricultural machinery efficiency? Reach our German trade desk or our Indian production facilities.
          </motion.p>
        </div>
      </section>

      {/* BREADCRUMBS ROW */}
      <Breadcrumbs currentPage="Contact Information" />

      {/* Core Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Details Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
                  Connect Directly
                </span>
                <h2 className="text-3xl font-extrabold font-display text-gray-900 tracking-tight leading-tight">
                  Reach Our Production Facilities
                </h2>
                <div className="w-12 h-1 bg-brand-primary rounded-full mt-2" />
              </div>

              {/* Office coordinate maps */}
              <div className="space-y-6">
                {contactDetails.map((det) => (
                  <div
                    key={det.city}
                    className="bg-brand-bg/50 border border-blue-50/50 rounded-2xl p-6.5 font-sans space-y-4 hover:border-blue-100 hover:shadow-lg transition-all shadow-sm"
                  >
                    <div className="flex items-center gap-3 border-b border-blue-50/70 pb-3">
                      <div className="p-2.5 bg-white text-brand-primary border border-blue-100/30 rounded-xl shrink-0 shadow-sm">
                        {det.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-sans">
                          {det.title}
                        </h4>
                        <h3 className="text-md sm:text-lg font-bold text-gray-900 font-display">
                          {det.city}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-2.5 text-xs text-gray-600 font-medium">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                        <span>{det.address}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Phone className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                        <span>{det.phone}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Mail className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                        <span>{det.email}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                        <span>{det.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* EMBEDDED MAP PLACEHOLDER (Modern Vector-style Visual Map) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-brand-bg border border-blue-100 overflow-hidden shadow-inner p-8 text-center h-[320px] md:h-[380px] flex flex-col justify-center items-center">
            
            {/* Grid graphic backdrop */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="15" cy="15" r="1" fill="#0057B8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>

            {/* Simulated Radar or Compass rings */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <div className="w-[150px] h-[150px] rounded-full border border-brand-primary animate-ping" />
              <div className="w-[280px] h-[280px] rounded-full border-2 border-dashed border-brand-secondary" />
              <div className="w-[450px] h-[450px] rounded-full border border-brand-accent" />
            </div>

            {/* Styled Compass pin overlay */}
            <div className="relative z-10 space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl border border-blue-100 text-brand-primary flex items-center justify-center mx-auto shadow-md hover:rotate-45 transition-transform duration-300">
                <Compass className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 tracking-tight">
                Unique Techno Mech Facilities Map
              </h3>
              <p className="text-xs text-gray-400 font-sans max-w-sm mx-auto leading-relaxed">
                Export trade desk: Lyoner Strasse 15, Frankfurt am Main.<br />
                Fabrication smelting yards & CNC bays: GIDC Estate, Rajkot, Gujarat.
              </p>
              
              <div className="flex gap-4 justify-center items-center pt-2">
                <a
                  href="https://maps.google.com/?q=Frankfurt+am+Main+Lyoner+Strasse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white hover:bg-blue-50 text-brand-primary font-bold text-[10px] uppercase tracking-wider rounded-lg border border-blue-100 shadow-sm transition-all inline-flex items-center gap-1.5 cursor-pointer pointer-events-auto"
                >
                  <Map className="w-3.5 h-3.5" />
                  Frankfurt Coordinates
                </a>
                <a
                  href="https://maps.google.com/?q=GIDC+Estate+Rajkot+Gujarat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white hover:bg-blue-50 text-brand-primary font-bold text-[10px] uppercase tracking-wider rounded-lg border border-blue-100 shadow-sm transition-all inline-flex items-center gap-1.5 cursor-pointer pointer-events-auto"
                >
                  <Map className="w-3.5 h-3.5" />
                  Rajkot Coordinates
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION WITH SMOOTH ACCORDION TRANSITIONS */}
      <section className="py-20 bg-brand-bg border-t border-blue-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              Got Questions?
            </span>
            <h2 className="text-3xl font-extrabold font-display text-gray-900 tracking-tight">
              Common Technical FAQs
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mt-2" />
          </div>

          {/* Accordion Container */}
          <div className="space-y-4 font-sans text-left">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border rounded-2xl border-blue-50/80 shadow-sm hover:border-blue-100 transition-colors overflow-hidden"
                >
                  {/* Accordion Header bar */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm md:text-base font-bold text-gray-900 tracking-tight select-none">
                      {faq.question}
                    </span>
                    <span className={`p-1.5 bg-blue-50 rounded-lg text-brand-primary transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-accent' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Accordion Content Panel with Framer Motion slide */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-6 md:px-6 text-xs md:text-sm text-gray-500 font-sans leading-relaxed border-t border-blue-50/50 pt-4 bg-brand-bg/20 select-none">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
