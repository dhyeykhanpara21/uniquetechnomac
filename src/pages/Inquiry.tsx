import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileCheck, Landmark, Globe, Settings, Sparkles } from 'lucide-react';

import Breadcrumbs from '../components/Breadcrumbs';
import InquiryForm from '../components/InquiryForm';

export default function Inquiry() {
  const points = [
    { title: 'Free Engineering Consultation', desc: 'Our technicians analyze soil parameters and horsepower dimensions to suggest matching gear ratios.' },
    { title: 'Direct Factory Quotation Sheet', desc: 'Acquire complete wholesale pricing, spare-parts discounts, and certified sea-cargo container schedules.' },
    { title: '24-Month Structural Warranty', desc: 'All boron steel tillage units enjoy full factory warranty security from raw casting to dispatch.' }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      
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
              Request Quotation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.15] max-w-4xl drop-shadow-2xl"
          >
            Initiate Commercial <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-blue-200">
              Quotation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-sans font-medium leading-relaxed"
          >
            Specify your machinery requirements. Our smelting engineering division will generate a comprehensive technical proposal.
          </motion.p>
        </div>
      </section>

      {/* BREADCRUMBS ROW */}
      <Breadcrumbs currentPage="Quotation Inquiry" />

      {/* Main Structural Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Hand: Explanatory Context Info (5 cols) */}
            <div className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-28">
              
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
                  Unique Service Commitment
                </span>
                <h2 className="text-3xl font-extrabold font-display text-gray-900 tracking-tight leading-tight">
                  What Happens After Submission?
                </h2>
                <div className="w-12 h-1 bg-brand-primary rounded-full mt-2" />
              </div>

              <div className="space-y-6">
                {points.map((pt, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="p-2.5 bg-blue-50 text-brand-primary border border-blue-100 rounded-xl h-fit shrink-0">
                      <ShieldCheck className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm md:text-base font-bold text-gray-900 font-display">
                        {pt.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-sans leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fast response credentials statement */}
              <div className="p-6 bg-brand-bg/50 rounded-2xl border border-blue-100/50 space-y-4">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-brand-secondary" />
                  <span className="text-xs font-bold text-gray-950 uppercase tracking-wider font-display">
                    International Logistics
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  We coordinate certified freight transport to major maritime terminals worldwide (including Hamburg, Rotterdam, Mumbai, Antwerp, Vancouver, and Shanghai). Complete customs clearance documents are formulated for secure transit.
                </p>
              </div>

            </div>

            {/* Right Hand: Quotation Form Card (7 cols) */}
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
