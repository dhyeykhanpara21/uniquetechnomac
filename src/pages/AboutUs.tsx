import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TIMELINE, TEAM } from '../data/websiteData';
import { 
  Target, Eye, Heart, Award, ShieldCheck, Factory, Lightbulb, 
  ArrowRight, Users, CheckCircle, Flame, Sparkles 
} from 'lucide-react';

import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutUs() {
  const values = [
    {
      id: 'val-1',
      title: 'Structural Toughness',
      desc: 'We enforce raw materials testing, selecting certified high-heat carbon and boron steels for every agricultural blade.',
      icon: <Flame className="w-6 h-6 text-brand-primary" />
    },
    {
      id: 'val-2',
      title: 'Precision Cultured',
      desc: 'Our CNC machining units and robotic assembly drills adhere to precise structural limits, eliminating alignment defects.',
      icon: <Lightbulb className="w-6 h-6 text-brand-primary" />
    },
    {
      id: 'val-3',
      title: 'Co-Operative Trust',
      desc: 'Our clients are food producers, heavy-industrial cooperatives, and distributors. We align are prices to support them.',
      icon: <Award className="w-6 h-6 text-brand-primary" />
    }
  ];

  const certificates = [
    { title: 'ISO 9001:2015', agency: 'International Quality Register', year: '25-Year Compliance', code: 'IRQC-M77892' },
    { title: 'CE EU Certificate', agency: 'European Safety Commission', year: 'Standard Machinery Compliant', code: 'EEC-E11409' },
    { title: 'ISO 14001:2015', agency: 'Environmental Systems Bureau', year: 'Eco-Process Certified', code: 'ESB-94411' }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Dynamic Header Banner */}
      <section className="relative py-20 bg-gradient-to-r from-brand-accent to-brand-primary text-white overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-200">
            About Apex Industrial
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Our Mission, Values & Metallurgical Heritage
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto font-sans">
            Learn about how a precision German-Indo blacksmithing core grew into a global heavy-implements export conglomerate.
          </p>
        </div>
      </section>

      {/* BREADCRUMBS ROW */}
      <Breadcrumbs currentPage="About Company" />

      {/* 1. OUR STORY & HISTORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Story contents left */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="space-y-6 text-left"
            >
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
                  Our Corporate Story
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 tracking-tight leading-tight">
                  Over Two Decades of Mechanical Excellence
                </h2>
              </div>
              
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Founded in 2001, Apex Industrial Solutions began with a singular focus: engineer agricultural tillage components that don't shatter under dry clay pressure. Over twenty-five years, we scaled our smelting arrays, implemented advanced hydraulic testing benches, and designed fully integrated assemblies.
              </p>
              
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Today, our components are forged using advanced high-wear boron alloy matrices and heat-treatment cycles. We operate automated welding chains and ISO stress-validation tracks to certify every unit shipped to European, American, and global distributors.
              </p>

              <div className="p-5.5 bg-blue-50/70 border-l-4 border-brand-primary rounded-r-2xl font-sans mt-4">
                <p className="text-xs text-gray-600 font-medium leading-relaxed italic">
                  "We don't simply assemble machinery. We analyze soil friction coefficient structures to build components that increase tractor fuel efficiency and reduce replacement cycles."
                </p>
                <span className="text-[10px] uppercase font-bold text-brand-accent tracking-wider block mt-2.5">
                  — Vikramjit Singh, Chairman
                </span>
              </div>
            </motion.div>

            {/* Picture side right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-blue-50/50 aspect-video max-h-[380px]">
                <img
                  src="https://images.unsplash.com/photo-1592417817098-8f3d6eb18865?auto=format&fit=crop&w=800&q=80"
                  alt="Apex Forge Smelting Station"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION SPLIT (Side-by-side design cards) */}
      <section className="py-20 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg shadow-blue-900/[0.015] border border-blue-50/55 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center">
                  <Target className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display text-gray-900 tracking-tight">
                  Our Corporate Mission
                </h3>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  Provide global farmers and heavy developers with high-durability, energy-efficient soil preparation and seeding equipment. We dedicate 15% of our operating margins to metallurgy R&D, designing carbon-neutral manufacturing models.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-xs font-semibold text-gray-600 font-sans">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-secondary" /> Zero debris raw boron smelting</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-secondary" /> CNC robotic manufacturing tolerances</li>
              </ul>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg shadow-blue-900/[0.015] border border-blue-50/55 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center">
                  <Eye className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display text-gray-900 tracking-tight">
                  Our Corporate Vision
                </h3>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  Acknowledge as the absolute benchmark in smart implement metallurgy internationally by 2030, operating solar-powered steel pressing chains with carbon-recovery mechanisms, ensuring efficient agricultural outputs.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-xs font-semibold text-gray-600 font-sans">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-secondary" /> Pure carbon neutral production grids</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-secondary" /> Global ISO-BUS terminal synchrony</li>
              </ul>
            </motion.div>

          </div>

          {/* Core Values Rows */}
          <div className="mt-20">
            <h3 className="text-center text-xl md:text-2xl font-bold font-display text-gray-900 mb-10 tracking-tight">
              Our Core Philosophical Pillars
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v) => (
                <div key={v.id} className="bg-white/80 p-6 rounded-2xl border border-blue-50/40 text-left space-y-3">
                  <div className="p-3 bg-blue-50/80 rounded-xl inline-block">{v.icon}</div>
                  <h4 className="text-md sm:text-lg font-bold font-display text-gray-900">{v.title}</h4>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. VERTICAL TIMELINE SECTION */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              Growth Journey
            </span>
            <h2 className="text-3xl font-extrabold font-display text-gray-900 tracking-tight leading-tight">
              Corporate Milestones Timeline
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mt-2" />
          </div>

          <div className="relative font-sans before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-blue-100/85">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  className={`relative mb-12 flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Dot dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[7px] w-4 h-4 bg-brand-primary rounded-full border-4 border-white shadow-md z-10" />

                  {/* Horizontal Side Block content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-brand-bg/50 border border-blue-50 p-6 rounded-2xl shadow-sm text-left hover:border-blue-100 transition-colors">
                      <span className="text-2xl font-black font-display text-brand-primary block mb-1">
                        {item.year}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 font-display">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs text-gray-400 font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-none md:w-1/2" />
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. MANUFACTURING ADVANTAGES SECTIONS */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-left"
            >
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-brand-primary/10 border border-brand-primary/20 rounded-md text-[10px] font-bold tracking-wider text-brand-primary uppercase">
                  <Factory className="w-3.5 h-3.5" />
                  Smelting & Forge Operations
                </span>
                <h2 className="text-3xl font-extrabold font-display text-gray-900 tracking-tight leading-tight">
                  High-Carbon Metallurgy Processing Arrays
                </h2>
              </div>
              
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Our plant grounds are equipped with precision electrical induction heaters, hydraulic presses capable of applying up to 1,200 metric tons of force, and CNC high-speed vertical machining rigs.
              </p>

              <div className="space-y-3 font-sans text-xs sm:text-sm text-gray-600 font-semibold">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-brand-secondary rounded-full" />
                  <span>Boron Content Calibration (0.003% exact compliance ratios)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-brand-secondary rounded-full" />
                  <span>Dual Stage Quenching Oil Beds (imparts up to 52 HRC hardness levels)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-brand-secondary rounded-full" />
                  <span>Robotic MIG welding stations for perfect, void-less seam joints</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/inquiry"
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-accent text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all text-xs uppercase tracking-wider group"
                >
                  <span>Request Smelting Logs</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-blue-50/55 aspect-video max-h-[380px]"
            >
              <img
                src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=800&q=80"
                alt="Smelting furnace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. QUALITY CERTIFICATIONS SEALS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              Corporate Trust
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-gray-900 tracking-tight leading-tight">
              Industrial ISO Quality Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="bg-brand-bg/40 border border-blue-100/40 p-6 md:p-8 rounded-2xl shadow-sm text-center font-sans space-y-3 hover:bg-white hover:border-brand-primary/40 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 text-brand-primary border border-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <ShieldCheck className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="text-[17px] font-bold text-gray-950 font-display">{cert.title}</h3>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold">{cert.agency}</p>
                <div className="w-10 h-[2px] bg-brand-secondary/40 mx-auto" />
                <p className="text-xs text-gray-400 font-mono text-[10px] bg-white border border-blue-100/20 py-1.5 px-3 rounded-lg inline-block">
                  Reg ID: {cert.code}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. LEADERSHIP TEAM SECTION */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              Apex Board
            </span>
            <h2 className="text-3xl font-extrabold font-display text-gray-900 tracking-tight leading-tight">
              Our Leadership & Board of Directors
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-blue-50/50 shadow-md shadow-blue-900/[0.01] hover:shadow-lg flex flex-col group"
              >
                <div className="relative aspect-square w-full bg-brand-bg overflow-hidden border-b border-blue-50">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow text-left space-y-2">
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-900 font-display leading-tight">{member.name}</h3>
                    <span className="text-xs text-brand-primary font-bold tracking-wide block mt-1 font-sans">{member.role}</span>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed line-clamp-4 pt-1 border-t border-blue-50/60 grow">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CTA BANNER SECTION */}
      <section className="relative overflow-hidden bg-brand-primary py-20 text-white flex flex-col items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-4.5 h-4.5 text-blue-200" />
            Partner with us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight tracking-tight text-white max-w-2xl mx-auto">
            Design Your Next Bespoke Implement Array With Us
          </h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto font-sans leading-relaxed">
            Our smelting division handles customization orders with direct structural stress certifications. Request are metallurgy manuals or submit specific dimension drawings.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/inquiry"
              className="bg-white text-brand-primary hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-md uppercase tracking-wider text-xs pointer-events-auto cursor-pointer"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
