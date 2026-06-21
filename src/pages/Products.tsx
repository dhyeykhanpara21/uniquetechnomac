import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data/websiteData';
import { Product } from '../types';
import { Search, SlidersHorizontal, Grid3X3, ArrowRight, CornerDownRight, Settings2, Sparkles } from 'lucide-react';

import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Extract category from search query params (?category=Tillage)
  const categoryFilter = searchParams.get('category') || 'All';

  const categories = ['All', 'Tillage', 'Seeding', 'Crop Protection'];

  const handleSetCategory = (cat: string) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  // Filter items based on active parameters and text search inputs!
  const filteredProducts = PRODUCTS.filter((prod) => {
    const matchesCategory = categoryFilter === 'All' || prod.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Dynamic Header Banner */}
      <section className="relative py-20 bg-gradient-to-r from-brand-accent to-brand-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-200">
            Unique Components Showroom
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Our Certified Industrial Gearsets & Spares
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto font-sans">
            Explore our line of precision worm shafts, slow speed shafts, VMC machined steel components, and graded castings.
          </p>
        </div>
      </section>

      {/* BREADCRUMBS ROW */}
      <Breadcrumbs currentPage="Machinery Catalog" />

      {/* Main Structural Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters controls bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 bg-brand-bg/60 rounded-3xl p-6 border border-blue-50/50">
            
            {/* Category Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none whitespace-nowrap">
              <span className="text-gray-400 font-bold text-xs uppercase tracking-widest mr-2 flex items-center gap-1">
                <SlidersHorizontal className="w-4 h-4 text-brand-primary" />
                Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleSetCategory(cat)}
                  className={`px-4.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-250 cursor-pointer ${
                    categoryFilter.toLowerCase() === cat.toLowerCase()
                      ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20 scale-[1.03]'
                      : 'bg-white hover:bg-blue-50/70 border border-blue-100/40 text-gray-500 hover:text-brand-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search Field */}
            <div className="relative w-full lg:max-w-xs shrink-0 font-sans">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4" />
              <input
                type="text"
                placeholder="Search catalog models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-blue-150 rounded-2xl pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-brand-primary text-gray-800 placeholder-gray-400 shadow-sm shadow-blue-50/50"
              />
            </div>

          </div>

          {/* Active Filtering Diagnostic Label */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-xs text-gray-400 font-sans">
              Showing <strong className="text-gray-900">{filteredProducts.length}</strong> implements{' '}
              {categoryFilter !== 'All' && (
                <span>
                  in <strong className="text-brand-primary uppercase">{categoryFilter}</strong>
                </span>
              )}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[10px] text-brand-primary font-bold uppercase tracking-widest hover:underline cursor-pointer"
              >
                Clear text query
              </button>
            )}
          </div>

          {/* Core Product Grid */}
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={(prod) => setSelectedProduct(prod)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24 bg-brand-bg/30 rounded-3xl border-2 border-dashed border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-50 text-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-100">
                  <Settings2 className="w-8 h-8 animate-spin-slow" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900">
                  No Industrial Implements Found
                </h3>
                <p className="mt-2 text-xs text-gray-500 max-w-sm mx-auto font-sans leading-relaxed">
                  We currently lack matches matching "<strong className="text-gray-900">{searchQuery}</strong>" or the active filters configuration.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    handleSetCategory('All');
                  }}
                  className="mt-6 px-5 py-2.5 bg-brand-primary hover:bg-brand-accent text-white font-semibold rounded-lg text-xs tracking-wider uppercase transition-all pointer-events-auto cursor-pointer"
                >
                  Reset Showroom Parameters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* COMPACT MANUFACTURING TECH BANNER CALL TO ACTION */}
      <section className="bg-brand-bg py-16 md:py-20 border-t border-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[450px] h-[300px] bg-blue-100/50 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-blue-50 p-8 md:p-12 shadow-xl shadow-blue-900/[0.02] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-left">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-brand-secondary/10 border border-brand-secondary/20 rounded-md text-[10px] font-bold tracking-wider text-brand-secondary uppercase">
                <Sparkles className="w-3.5 h-3.5 text-brand-secondary" />
                Special Customized Projects
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold font-display text-gray-900 tracking-tight leading-tight">
                Require Custom Blade Spacing or Metallurgy Ratings?
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Our advanced R&D engineering department coordinates custom hydraulic configurations, specific boron-steel hardness levels (HRC), and custom tillage layouts designed for specific field crops.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <Link
                to="/inquiry"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-accent text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-brand-primary/10 transition-all duration-300 uppercase tracking-widest text-xs"
              >
                <span>Request Custom Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Detail specs modal popup Overlay */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

    </div>
  );
}
