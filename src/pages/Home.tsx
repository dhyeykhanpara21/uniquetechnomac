import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Settings2, Clock, Award,
  Sprout, Factory, HardHat, Wrench, Pickaxe, Landmark,
  ArrowRight, ShieldCheck
} from 'lucide-react';

import { FEATURES, INDUSTRIES, PRODUCTS, GALLERY } from '../data/websiteData';
import { Product } from '../types';

import HeroSlider from '../components/HeroSlider';
import CounterSection from '../components/CounterSection';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';
import { StaggerTestimonials } from '../components/StaggerTestimonials';
import cardImage from '../../images/card.jpeg';

// Static Icon Mappers
const getFeatureIcon = (name: string) => {
  switch (name) {
    case 'Settings2': return <Settings2 className="w-7 h-7 text-brand-primary shrink-0 animate-spin-slow" />;
    case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-brand-primary shrink-0" />;
    case 'Clock': return <Clock className="w-7 h-7 text-brand-primary shrink-0" />;
    case 'Wrench': return <Wrench className="w-7 h-7 text-brand-primary shrink-0" />;
    case 'Factory': return <Factory className="w-7 h-7 text-brand-primary shrink-0" />;
    case 'Award': return <Award className="w-7 h-7 text-brand-primary shrink-0" />;
    default: return <Settings2 className="w-7 h-7 text-brand-primary" />;
  }
};

const getIndustryIcon = (name: string) => {
  switch (name) {
    case 'Sprout': return <Sprout className="w-5 h-5 text-white" />;
    case 'Factory': return <Factory className="w-5 h-5 text-white" />;
    case 'HardHat': return <HardHat className="w-5 h-5 text-white" />;
    case 'Wrench': return <Wrench className="w-5 h-5 text-white" />;
    case 'Beef': return <Landmark className="w-5 h-5 text-white" />;
    case 'Pickaxe': return <Pickaxe className="w-5 h-5 text-white" />;
    default: return <Factory className="w-5 h-5 text-white" />;
  }
};

export default function Home() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  // Take the first 3 products for featured listing
  const featuredProducts = PRODUCTS.slice(0, 3);

  // Split gallery items into two distinct rows for scrolling
  const firstRowItems = GALLERY;
  const secondRowItems = [...GALLERY.slice(4), ...GALLERY.slice(0, 4)];

  return (
    <div className="bg-white min-h-screen">

      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image side with solid border frame and soft background shadow */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-t-4 border-l-4 border-brand-primary rounded-tl-3xl -z-10 hidden sm:block" />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-b-4 border-r-4 border-brand-secondary rounded-br-3xl -z-10 hidden sm:block" />

              <div className="rounded-2xl overflow-hidden shadow-2xl border border-blue-50/50 max-h-[480px]">
                <img
                  src={cardImage}
                  alt="Industrial Forge Assembly"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Float Experience block */}
              <div className="">
                {/* <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display leading-none">25+</span> */}
                {/* <div className="text-[9px] sm:text-xs font-semibold uppercase tracking-widest font-sans leading-relaxed text-blue-100">
                  Years of Heavy Metallurgical Craft
                </div> */}
              </div>
            </motion.div>

            {/* Description Contents */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary block pr-2">
                  Company Introduction
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 leading-tight tracking-tight">
                  Precision Automobile Gears & VMC Machined Components
                </h2>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                  
              </p>

              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                Unique Techno Mech specializes in manufacturing high-precision machined components, hand pallet truck parts, and custom engineering solutions. Backed by advanced CNC & VMC technology, in-house production, and rigorous quality standards, we deliver reliable, durable, and cost-effective products for the automotive, material handling, agricultural, and industrial sectors with a commitment to precision and timely delivery.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-accent text-white font-bold px-6 py-3.5 rounded-lg shadow-md hover:shadow-brand-primary/20 transition-all duration-300 uppercase text-xs tracking-wider group"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 border border-blue-150 hover:border-brand-primary text-gray-600 hover:text-brand-primary font-bold px-6 py-3 rounded-lg text-xs tracking-wider uppercase transition-all"
                >
                  View Machinery catalog
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION (6 features) */}
      <section className="py-20 bg-brand-bg relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-4 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="none" stroke="#0057B8" strokeWidth="1" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header banner */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              Engineering Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 tracking-tight">
              Why Automobile & Tractor Clients Choose Unique
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
            <p className="text-xs text-gray-400 font-sans pt-1">
              Engineered with premium alloy steels, strict micrometric tolerances, and verified metrology checks, our gear box parts yield long-term durability.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-blue-50 hover:border-blue-150 shadow-md shadow-blue-900/[0.01] hover:shadow-lg hover:shadow-blue-950/[0.04] transition-all duration-300 flex items-start gap-4 transform hover:-translate-y-1.5 group"
              >
                <div className="p-3 bg-blue-50 group-hover:bg-brand-primary group-hover:text-white rounded-xl transition-all duration-300">
                  {getFeatureIcon(feature.iconName)}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-md sm:text-lg font-bold text-gray-900 font-display group-hover:text-brand-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FEATURED PRODUCTS HIGHLIGHT */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-blue-50 pb-6">
            <div className="space-y-3 max-w-2xl text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
                Spotlight Showroom
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 tracking-tight">
                Featured Precision Components
              </h2>
              <p className="text-xs text-gray-400 font-sans">
                Our most sought-after precision gears, CNC machined sleeves, and custom hydraulic couplers, trusted by leading automobile and tractor brands.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-accent font-bold text-sm uppercase tracking-wider group"
              >
                <span>View Full Inventory</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Featured Cards Array */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              Application Domains
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 tracking-tight">
              Sectors We Empower Geographically
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
            <p className="text-xs text-gray-400 font-sans pt-1">
              Unique Techno Mech supplies precision shafts, sleeves, gears, castings, and hydraulic actuators designed for custom industrial parameters.
            </p>
          </div>

          {/* Dynamic Bento Box Sector Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="zoom-hover-parent relative h-[250px] rounded-2xl overflow-hidden shadow-md group border border-blue-50/50 cursor-pointer"
              >
                {/* Background image component with zoom-hover effect */}
                <div className="absolute inset-0">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    referrerPolicy="no-referrer"
                    className="zoom-hover-img w-full h-full object-cover"
                  />
                  {/* Visual gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/95 via-brand-accent/50 to-transparent group-hover:via-brand-accent/70 transition-all duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white select-none">
                  {/* Soft floating round icon sphere */}
                  <div className="w-10 h-10 rounded-xl bg-brand-primary border border-white/20 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    {getIndustryIcon(ind.iconName)}
                  </div>
                  <h3 className="text-xl font-bold font-display tracking-tight text-white">
                    {ind.name}
                  </h3>
                  <p className="mt-1 text-xs text-blue-100 font-sans leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    {ind.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. STATISTICS COUNTER SECTION */}
      <CounterSection />

      {/* 7. CLIENT TESTIMONIALS (Staggered Theme) */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 tracking-tight">
              Testimonials From Real Operators
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
            <p className="text-xs text-gray-400 font-sans pt-1">
              Read how our precision gears, custom shafts, and hydraulic spare parts help tractor builders and automotive assembly lines run efficiently.
            </p>
          </div>
        </div>

        <StaggerTestimonials />
      </section>

      {/* 8. LATEST GALLERY (Infinite Scrolling Double-Row Marquee) */}
      <section className="py-20 bg-brand-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              Production Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 tracking-tight">
              Snapshots of Industrial Precision
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
            <p className="text-xs text-gray-400 font-sans pt-1">
              Deep look across our advanced machining centers, vertical milling lines, heavy cast forgings, and final metrology verification units.
            </p>
          </div>
        </div>

        {/* Marquee Wrapper with side gradient masks */}
        <div className="relative w-full marquee-container space-y-6 md:space-y-8">
          {/* Left and Right Edge Fade Gradients */}
          <div className="absolute inset-y-0 left-0 w-6 sm:w-16 md:w-48 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-6 sm:w-16 md:w-48 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none z-10" />

          {/* Row 1: Scrolling Left */}
          <div className="flex overflow-hidden w-full select-none">
            <div className="flex shrink-0 gap-6 pr-6 animate-marquee-left">
              {firstRowItems.map((gal) => (
                <div
                  key={`r1-1-${gal.id}`}
                  className="zoom-hover-parent relative rounded-2xl overflow-hidden shadow-md group w-[280px] sm:w-[340px] h-[200px] sm:h-[240px] shrink-0 border border-blue-50/50 cursor-pointer"
                >
                  <img
                    src={gal.image}
                    alt={gal.title}
                    referrerPolicy="no-referrer"
                    className="zoom-hover-img w-full h-full object-cover"
                  />
                  {/* Information Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest font-sans">
                      {gal.category}
                    </span>
                    <h4 className="text-sm md:text-base font-bold font-display text-white mt-1">
                      {gal.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex shrink-0 gap-6 pr-6 animate-marquee-left" aria-hidden="true">
              {firstRowItems.map((gal) => (
                <div
                  key={`r1-2-${gal.id}`}
                  className="zoom-hover-parent relative rounded-2xl overflow-hidden shadow-md group w-[280px] sm:w-[340px] h-[200px] sm:h-[240px] shrink-0 border border-blue-50/50 cursor-pointer"
                >
                  <img
                    src={gal.image}
                    alt={gal.title}
                    referrerPolicy="no-referrer"
                    className="zoom-hover-img w-full h-full object-cover"
                  />
                  {/* Information Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest font-sans">
                      {gal.category}
                    </span>
                    <h4 className="text-sm md:text-base font-bold font-display text-white mt-1">
                      {gal.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex overflow-hidden w-full select-none">
            <div className="flex shrink-0 gap-6 pr-6 animate-marquee-right">
              {secondRowItems.map((gal) => (
                <div
                  key={`r2-1-${gal.id}`}
                  className="zoom-hover-parent relative rounded-2xl overflow-hidden shadow-md group w-[280px] sm:w-[340px] h-[200px] sm:h-[240px] shrink-0 border border-blue-50/50 cursor-pointer"
                >
                  <img
                    src={gal.image}
                    alt={gal.title}
                    referrerPolicy="no-referrer"
                    className="zoom-hover-img w-full h-full object-cover"
                  />
                  {/* Information Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest font-sans">
                      {gal.category}
                    </span>
                    <h4 className="text-sm md:text-base font-bold font-display text-white mt-1">
                      {gal.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex shrink-0 gap-6 pr-6 animate-marquee-right" aria-hidden="true">
              {secondRowItems.map((gal) => (
                <div
                  key={`r2-2-${gal.id}`}
                  className="zoom-hover-parent relative rounded-2xl overflow-hidden shadow-md group w-[280px] sm:w-[340px] h-[200px] sm:h-[240px] shrink-0 border border-blue-50/50 cursor-pointer"
                >
                  <img
                    src={gal.image}
                    alt={gal.title}
                    referrerPolicy="no-referrer"
                    className="zoom-hover-img w-full h-full object-cover"
                  />
                  {/* Information Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest font-sans">
                      {gal.category}
                    </span>
                    <h4 className="text-sm md:text-base font-bold font-display text-white mt-1">
                      {gal.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>



      {/* Product Specification popup drawer */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

    </div>
  );
}
