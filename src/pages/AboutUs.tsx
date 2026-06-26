import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { TIMELINE, TEAM } from '../data/websiteData';
import { 
  Target, Eye, Heart, Award, ShieldCheck, Factory, Lightbulb, 
  ArrowRight, Users, CheckCircle, Flame, Sparkles, LayoutGrid, Settings
} from 'lucide-react';

import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutUs() {
  const values = [
    {
      id: 'val-1',
      title: 'Structural Toughness',
      desc: 'We enforce raw materials testing, selecting certified high-tensile alloy steels and forgings for every machined component.',
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
      desc: 'Our clients are automobile makers, tractor companies, and industrial cooperatives. We align our prices to support them.',
      icon: <Award className="w-6 h-6 text-brand-primary" />
    }
  ];

  const certificates = [
    { 
      title: 'ISO 9001:2015', 
      agency: 'International Quality Register', 
      year: '25-Year Compliance', 
      code: 'IRQC-M77892',
      image: 'https://images.unsplash.com/photo-1623227866882-c00592fcfa63?auto=format&fit=crop&w=600&q=80'
    },
    { 
      title: 'CE EU Certificate', 
      agency: 'European Safety Commission', 
      year: 'Standard Machinery Compliant', 
      code: 'EEC-E11409',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80'
    },
    { 
      title: 'ISO 14001:2015', 
      agency: 'Environmental Systems Bureau', 
      year: 'Eco-Process Certified', 
      code: 'ESB-94411',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const factoryPhotos = [
    "https://images.unsplash.com/photo-1565439390238-d64e9a05b38a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504917595217-d4f3b26c7102?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <Helmet>
        <title>About Us | Unique Techno Mech | Precision Engineering</title>
        <meta name="description" content="Discover our journey as a leading precision engineering firm in Rajkot. Specialized in high-tensile gears, CNC machining, and VMC components for major automotive sectors." />
        <meta name="keywords" content="about unique techno mech, industrial gears, rajkot engineering, cnc machining, vmc components, automobile gears, precision engineering, ISO 9001:2015, manufacturing facility" />
        <meta property="og:title" content="About Unique Techno Mech" />
        <meta property="og:description" content="Top-tier manufacturer of industrial gearsets, shafts, and custom VMC components." />
      </Helmet>
      
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
              About Unique Techno Mech
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.15] max-w-4xl drop-shadow-2xl"
          >
            Our Mission, Values & <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-blue-200">
              Industrial Heritage
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-sans font-medium leading-relaxed"
          >
            Learn about how our precision machine shop expanded into a leading automotive gear and VMC component manufacturer.
          </motion.p>
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
                Founded in 2002, Unique Techno Mech began with a singular focus: engineer high-precision automobile and transmission gear box components in Rajkot, Gujarat. Over more than two decades, we scaled our vertical machining centers (VMC), CNC lathes, grinding machinery, and casting networks to support major automotive clients globally. Our commitment to perfection drives our continuous evolution and expansion.
              </p>
              
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Today, our components are machined from certified alloy bar steel and robust forgings. We operate multiple VMC BFW/Jyoti units, threading lines, and centreless grinders to supply gears, sleeves, brass parts, and hydraulic cylinders under strict metrology checking protocols. By investing in next-generation automated machinery, we ensure efficiency, cost-effectiveness, and unparalleled accuracy across all our production batches.
              </p>

              <div className="p-5.5 bg-blue-50/70 border-l-4 border-brand-primary rounded-r-2xl font-sans mt-4">
                <p className="text-xs text-gray-600 font-medium leading-relaxed italic">
                  "We don't simply shape metal. We ensure strict micrometric alignment and surface integrity to supply parts that support the smooth operation of engines and transmissions."
                </p>
                <span className="text-[10px] uppercase font-bold text-brand-accent tracking-wider block mt-2.5">
                  — Dhaval Vaishnani, Director
                </span>
              </div>
            </motion.div>

            {/* Picture side right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1592417817098-8f3d6eb18865?auto=format&fit=crop&w=600&q=80"
                  alt="Precision Machining"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] mt-8">
                <img
                  src="https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=600&q=80"
                  alt="Industrial Components"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* NEW: FACTORY PHOTOS GALLERY */}
      <section className="py-20 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-[10px] font-bold tracking-widest text-brand-primary uppercase">
              <LayoutGrid className="w-3.5 h-3.5" />
              Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 tracking-tight leading-tight">
              Our State-of-the-art Manufacturing Facility
            </h2>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              Explore our extensive facility equipped with the latest CNC machines, VMC centers, and quality inspection labs that allow us to deliver excellence at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {factoryPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden shadow-lg border border-blue-50/50 group relative ${index === 0 || index === 3 ? 'lg:col-span-2 aspect-video' : 'aspect-square lg:aspect-auto'}`}
              >
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={photo}
                  alt={`Factory Facility ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION SPLIT (Side-by-side design cards) */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-brand-bg p-8 md:p-10 rounded-3xl shadow-lg shadow-blue-900/[0.015] border border-blue-50/55 flex flex-col justify-between hover:border-brand-primary/30 transition-colors"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-brand-primary shadow-sm border border-blue-50 flex items-center justify-center">
                  <Target className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display text-gray-900 tracking-tight">
                  Our Corporate Mission
                </h3>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  Provide automobile, tractor, and heavy industrial clients with high-durability, precision-engineered gears, shafts, sleeves, castings, and hydraulics. We dedicate significant resources to manufacturing excellence, continuously improving our component design standards.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-xs font-semibold text-gray-600 font-sans">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-secondary" /> Zero-defect alloy bar machining</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-secondary" /> Precision CNC & VMC manufacturing tolerances</li>
              </ul>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-brand-bg p-8 md:p-10 rounded-3xl shadow-lg shadow-blue-900/[0.015] border border-blue-50/55 flex flex-col justify-between hover:border-brand-primary/30 transition-colors"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-brand-primary shadow-sm border border-blue-50 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display text-gray-900 tracking-tight">
                  Our Corporate Vision
                </h3>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  Be recognized as the leading global partner for precision automotive gears, shafts, castings, and hydraulic systems by 2030, operating state-of-the-art VMC and CNC production lines that guarantee supreme structural integrity globally.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-xs font-semibold text-gray-600 font-sans">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-secondary" /> State-of-the-art machining centers</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-secondary" /> Micrometric quality inspection controls</li>
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
                <div key={v.id} className="bg-brand-bg/50 p-6 rounded-2xl border border-blue-50/40 text-left space-y-3 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-blue-50 inline-block">{v.icon}</div>
                  <h4 className="text-md sm:text-lg font-bold font-display text-gray-900">{v.title}</h4>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. VERTICAL TIMELINE SECTION */}
      <section className="py-20 md:py-28 bg-brand-bg overflow-hidden border-t border-blue-50">
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
                    <div className="bg-white border border-blue-50 p-6 rounded-2xl shadow-sm text-left hover:border-brand-primary/30 transition-colors">
                      <span className="text-2xl font-black font-display text-brand-primary block mb-1">
                        {item.year}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 font-display">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs text-gray-500 font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. MANUFACTURING ADVANTAGES SECTIONS */}
      <section className="py-20 bg-white">
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
                  Machining & Forge Operations
                </span>
                <h2 className="text-3xl font-extrabold font-display text-gray-900 tracking-tight leading-tight">
                  High-Precision Metallurgy Processing Arrays
                </h2>
              </div>
              
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Our plant grounds are equipped with precision machining tools, high-speed vertical machining centers (VMCs), and CNC lathes capable of achieving tight tolerances on complex designs.
              </p>

              <div className="space-y-3 font-sans text-xs sm:text-sm text-gray-600 font-semibold">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-brand-secondary rounded-full" />
                  <span>Alloy steel caliber checks (exact compliance ratios)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-brand-secondary rounded-full" />
                  <span>Dual Stage Quenching Oil Beds (imparts up to 52 HRC hardness levels)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-brand-secondary rounded-full" />
                  <span>Calibrated metrology checks using Mitutoyo and Baker instruments</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/inquiry"
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-accent text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all text-xs uppercase tracking-wider group"
                >
                  <span>Request Technical Specs</span>
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
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. QUALITY CERTIFICATIONS WITH IMAGES */}
      <section className="py-20 bg-brand-bg border-t border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-secondary/10 border border-brand-secondary/20 rounded-full text-[10px] font-bold tracking-widest text-brand-secondary uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              Corporate Trust
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 tracking-tight leading-tight">
              Industrial ISO Quality Certifications
            </h2>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              We strictly adhere to international manufacturing standards, ensuring our products meet rigorous global requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-blue-50 rounded-3xl overflow-hidden shadow-md shadow-blue-900/[0.02] flex flex-col group hover:shadow-xl hover:border-brand-primary/40 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="w-full h-56 bg-blue-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-brand-primary shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-8 text-center space-y-4 flex flex-col flex-grow items-center">
                  <div className="w-12 h-12 bg-brand-bg text-brand-primary border border-blue-100 rounded-full flex items-center justify-center -mt-14 relative z-20 shadow-md">
                    <ShieldCheck className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="space-y-1 w-full">
                    <h3 className="text-[19px] font-extrabold text-gray-900 font-display">{cert.title}</h3>
                    <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">{cert.agency}</p>
                  </div>
                  <div className="w-12 h-[2px] bg-brand-secondary/40 mx-auto rounded-full" />
                  <p className="text-xs text-gray-400 font-mono text-[10px] bg-brand-bg border border-blue-100/40 py-2 px-4 rounded-lg inline-block w-full">
                    Reg ID: {cert.code}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. LEADERSHIP TEAM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              Unique Board
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
                className="bg-brand-bg rounded-2xl overflow-hidden border border-blue-50/50 shadow-sm hover:shadow-lg flex flex-col group transition-shadow"
              >
                <div className="relative aspect-square w-full bg-white overflow-hidden border-b border-blue-50">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow text-left space-y-2">
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-900 font-display leading-tight">{member.name}</h3>
                    <span className="text-xs text-brand-primary font-bold tracking-wide block mt-1 font-sans">{member.role}</span>
                  </div>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-4 pt-2 border-t border-blue-100/50 grow">
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
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-brand-primary to-brand-accent opacity-80"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
            <Sparkles className="w-4.5 h-4.5 text-blue-200" />
            Partner with us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight tracking-tight text-white max-w-2xl mx-auto drop-shadow-lg">
            Partner With Us For High-Precision Automotive Components
          </h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto font-sans leading-relaxed">
            Our manufacturing divisions handle custom machining and casting orders based on client blueprints. Request technical specifications or submit specific drawings.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/inquiry"
              className="bg-white text-brand-primary hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-xl uppercase tracking-wider text-xs pointer-events-auto cursor-pointer transition-transform hover:-translate-y-1"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
