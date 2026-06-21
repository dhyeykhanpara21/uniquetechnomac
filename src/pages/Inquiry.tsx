import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileCheck, Landmark, Globe } from 'lucide-react';

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
      
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-r from-brand-accent to-brand-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line strokeDasharray="5 5" x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-200">
            Request Quotation
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Initiate Commercial Quotation
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto font-sans">
            Specify your machinery requirements. Our smelting engineering division will generate a comprehensive technical proposal.
          </p>
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
