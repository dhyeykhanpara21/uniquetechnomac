import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, Settings2, Cpu, Globe2, Clock, Award, 
  Sprout, Factory, HardHat, Wrench, Pickaxe, Landmark,
  ArrowRight, Quote, Heart, Star, ChevronLeft, ChevronRight, FileCheck 
} from 'lucide-react';

import { FEATURES, INDUSTRIES, PRODUCTS, TESTIMONIALS, GALLERY } from '../data/websiteData';
import { Product } from '../types';

import HeroSlider from '../components/HeroSlider';
import CounterSection from '../components/CounterSection';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';

// Static Icon Mappers
const getFeatureIcon = (name: string) => {
  switch (name) {
    case 'ShieldAlert': return <ShieldAlert className="w-7 h-7 text-brand-primary shrink-0" />;
    case 'Settings2': return <Settings2 className="w-7 h-7 text-brand-primary shrink-0 animate-spin-slow" />;
    case 'Cpu': return <Cpu className="w-7 h-7 text-brand-primary shrink-0" />;
    case 'Globe2': return <Globe2 className="w-7 h-7 text-brand-primary shrink-0" />;
    case 'Clock': return <Clock className="w-7 h-7 text-brand-primary shrink-0" />;
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
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Take the first 3 products for featured listing
  const featuredProducts = PRODUCTS.slice(0, 3);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

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
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial Forge Assembly"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Float Experience block */}
              <div className="absolute bottom-6 left-6 bg-brand-primary/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-white/20 select-none max-w-[280px]">
                <span className="text-4xl md:text-5xl font-extrabold font-display leading-none">25+</span>
                <div className="text-xs font-semibold uppercase tracking-widest font-sans leading-relaxed text-blue-100">
                  Years of Heavy Metallurgical Craft
                </div>
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
                  Pioneering Heavy Duty Soil-Tilling & Seeding Implements Globally
                </h2>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                At Apex Industrial Solutions, our metallurgical forge and advanced engineering divisions manufacture high-performance tools aimed at bolstering farm yields and mining resilience. Using certified heat-treated boron steel, we formulate components capable of working under absolute peak stress scenarios.
              </p>
              
              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                By fusing precision computer-aided modeling with automated robotic assembly grids, we ensure every rotary tiller, power harrow, and pneumatic seeder passes structural stress tests. 
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
              Why Heavy Ag Cooperatives Choose Apex
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
            <p className="text-xs text-gray-400 font-sans pt-1">
              Engineered with extreme steel toughness, high transmission control, and full international safety standards, our machinery yields long-term cost benefits.
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
                Hot Industry Implements
              </h2>
              <p className="text-xs text-gray-400 font-sans">
                Our most sought-after agricultural rotary systems and precision seeders, packed with certified boron steel components and patented gearbox assemblies.
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
              Apex supplies heavy components, soil levelers, compact cutters, and gear systems designed for varying industrial parameters.
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

      {/* 7. CLIENT TESTIMONIALS (Slider structure) */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-3xl font-extrabold font-display text-gray-900 tracking-tight">
              Testimonials From Real Operators
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
          </div>

          <div className="relative bg-brand-bg border border-blue-50 rounded-3xl p-8 md:p-12 shadow-md shadow-blue-900/[0.02]">
            <Quote className="absolute top-6 left-6 text-blue-200/50 w-24 h-24 stroke-1 shrink-0 select-none pointer-events-none" />
            
            {/* Slide active cards */}
            <div className="relative z-10 min-h-[180px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="text-sm md:text-md font-sans text-gray-600 italic leading-relaxed text-center font-medium md:px-6">
                    "{TESTIMONIALS[activeTestimonial].comment}"
                  </p>
                  
                  {/* Profile section */}
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={TESTIMONIALS[activeTestimonial].avatar}
                      alt={TESTIMONIALS[activeTestimonial].name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-full border-2 border-brand-primary object-cover mb-3 shadow-md"
                    />
                    <h4 className="text-base font-bold text-gray-900 font-display">
                      {TESTIMONIALS[activeTestimonial].name}
                    </h4>
                    <span className="text-xs text-gray-400 font-sans">
                      {TESTIMONIALS[activeTestimonial].role} • <strong className="text-brand-primary">{TESTIMONIALS[activeTestimonial].company}</strong>
                    </span>
                    <div className="flex items-center gap-1.5 mt-2">
                      {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide triggers buttons */}
            <div className="absolute right-6 bottom-6 flex items-center gap-2 z-20">
              <button
                onClick={prevTestimonial}
                className="p-1.5 rounded-lg border border-blue-100 hover:border-brand-primary hover:bg-brand-primary hover:text-white transition-all text-gray-500 hover:scale-105 cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-1.5 rounded-lg border border-blue-100 hover:border-brand-primary hover:bg-brand-primary hover:text-white transition-all text-gray-500 hover:scale-105 cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LATEST GALLERY (Masonry Grid with hover effects) */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              Production Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 tracking-tight">
              Snapshots of Industrial Precision
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
            <p className="text-xs text-gray-400 font-sans pt-1">
              Deep look across our advanced forge casting blocks, heavy vertical milling lines, robotic welding grids, and final crop testing grounds.
            </p>
          </div>

          {/* Grid Layout masonry-like style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY.map((gal) => (
              <motion.div
                key={gal.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
                className="zoom-hover-parent relative rounded-2xl overflow-hidden shadow-md group h-[220px] sm:h-[260px] border border-blue-50/50 cursor-pointer"
              >
                <img
                  src={gal.image}
                  alt={gal.title}
                  referrerPolicy="no-referrer"
                  className="zoom-hover-img w-full h-full object-cover"
                />
                
                {/* Information Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white select-none">
                  <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest font-sans">
                    {gal.category}
                  </span>
                  <h4 className="text-sm md:text-base font-bold font-display text-white mt-1">
                    {gal.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. CALL TO ACTION CONTAINER */}
      <section className="relative overflow-hidden bg-brand-primary py-20 text-white border-t border-blue-600/30">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
        {/* Dynamic Abstract Ring Background */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-secondary/20 rounded-full blur-[100px] -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 text-blue-100 text-xs font-bold tracking-widest uppercase rounded-full">
            Commercial Orders & Exports
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight tracking-tight text-white max-w-3xl mx-auto">
            Ready to Bolster Your Machine Operational Efficiency?
          </h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto font-sans leading-relaxed">
            Get coordinate blueprints, gear ratio consultation, price schedules, and secure sea-freight timelines curated explicitly for your enterprise setup.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/inquiry"
              className="inline-flex items-center gap-2 bg-white text-brand-primary hover:bg-blue-50 hover:shadow-xl font-bold px-8 py-4 rounded-xl transition-all duration-300 uppercase tracking-widest text-xs shadow-md"
            >
              <FileCheck className="w-4 h-4" />
              <span>Get Quotation Sheet</span>
            </Link>
            <Link
              to="/contact-us"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white font-semibold px-8 py-3.5 rounded-xl transition-colors uppercase tracking-widest text-xs font-sans"
            >
              Consulting Service
            </Link>
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
