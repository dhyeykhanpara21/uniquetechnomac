import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Product } from '../types';
import { ChevronRight, Settings, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  key?: string;
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  // Get first 3 specifications to display as a mini technical snapshot
  const specKeys = Object.keys(product.specifications).slice(0, 3);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      onClick={() => onViewDetails(product)}
      className="zoom-hover-parent bg-white rounded-2xl overflow-hidden border border-blue-50/70 shadow-lg shadow-blue-900/[0.03] hover:shadow-xl hover:shadow-blue-900/[0.06] hover:border-blue-100 flex flex-col h-full group cursor-pointer"
    >
      {/* Product Image Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-white border-b border-gray-100">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="zoom-hover-img w-full h-full object-contain p-4"
        />
        {/* Category Label Overlay */}
        <span className="absolute top-4 left-4 bg-brand-accent/90 backdrop-blur-md text-white text-xs font-bold font-sans tracking-widest px-3 py-1 rounded-md uppercase border border-white/10 shadow-sm z-10">
          {product.category}
        </span>
      </div>

      {/* Main Structural Information */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 font-display tracking-tight hover:text-brand-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="mt-2 text-sm text-gray-500 font-sans leading-relaxed line-clamp-2">
          {product.shortDesc}
        </p>

        {/* Technical Specs Snapshot */}
        <div className="mt-4 p-3 bg-brand-bg/60 rounded-xl border border-blue-50/40 space-y-2 text-xs font-sans">
          <div className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest flex items-center gap-1">
            <Settings className="w-3.5 h-3.5 text-brand-secondary animate-spin-slow" />
            <span>Tech Snapshot</span>
          </div>
          <div className="grid grid-cols-1 gap-1.5 pt-1">
            {specKeys.map((key) => (
              <div key={key} className="flex justify-between items-start gap-4 text-gray-600">
                <span className="text-gray-400 font-medium shrink-0">{key}:</span>
                <span className="text-gray-900 font-semibold text-right break-words">{product.specifications[key]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button Actions Container */}
        <div className="mt-6 pt-4 border-t border-blue-50/70 grid grid-cols-2 gap-3 items-center">
          <button
            onClick={(e) => {
              // Action is handled by card onClick, but keep button click active
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="w-full py-2.5 px-3 border border-blue-100 hover:border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold text-xs rounded-lg transition-all duration-200 uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>Specs Sheet</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          
          <a
            href={`https://wa.me/919173159016?text=${encodeURIComponent(product.name + '\n\nI have a requirement for this product.')}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs rounded-lg shadow-sm hover:shadow-[#25D366]/20 transition-all duration-200 uppercase tracking-wider text-center flex items-center justify-center gap-1 group"
          >
            <span>WhatsApp</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
