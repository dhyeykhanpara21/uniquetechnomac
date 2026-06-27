import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { X, FileSpreadsheet, Send, ArrowRight, ShieldCheck, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/websiteData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export default function ProductDetailModal({ product, onClose, onSelectProduct }: ProductDetailModalProps) {
  if (!product) return null;

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Reset image index when switching products
  useEffect(() => {
    setActiveImgIndex(0);
  }, [product.id]);

  // Retrieve matching related items from the dataset
  const relatedProducts = PRODUCTS.filter((p) =>
    product.relatedProductIds.includes(p.id)
  );

  // Prepare images array
  const images = product.images || [product.image];
  const currentImage = images[activeImgIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backing Dark Glass Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer pointer-events-auto"
        />

        {/* Modal Main Content Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 30 }}
          className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto shadow-2xl relative border border-blue-50 z-10 pointer-events-auto flex flex-col"
        >
          {/* Static Top Close Bar */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-blue-55 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-brand-primary" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-sans">
                Technical Datasheet / {product.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Core Datasheet Layout scrollable content */}
          <div className="p-6 md:p-8 space-y-8 flex-grow">
            
            {/* Top Row: Picture left, Intro right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Product Close-up Frame with Slideshow Controls */}
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-white border border-blue-100 max-h-[300px] flex items-center justify-center group/nav">
                  <img
                    src={currentImage}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-4 transition-all duration-300"
                  />

                  {/* Left & Right Navigation Arrows (only if multiple images exist) */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                        }}
                        className="absolute left-3 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-brand-primary shadow-md transition-all border border-gray-100 opacity-0 group-hover/nav:opacity-100 cursor-pointer flex items-center justify-center"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                        }}
                        className="absolute right-3 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-brand-primary shadow-md transition-all border border-gray-100 opacity-0 group-hover/nav:opacity-100 cursor-pointer flex items-center justify-center"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails Row (only if multiple images exist) */}
                {images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto py-1">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImgIndex(idx)}
                        className={`relative w-16 h-12 rounded-lg overflow-hidden bg-white shrink-0 border-2 transition-all cursor-pointer p-0.5 ${
                          activeImgIndex === idx
                            ? 'border-brand-primary'
                            : 'border-gray-100 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product.name} Thumbnail ${idx + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Context */}
              <div className="space-y-4">
                <span className="inline-block px-2.5 py-1 bg-blue-50 text-brand-primary text-[10px] font-bold tracking-wider rounded-md uppercase border border-blue-100">
                  Model Series • {product.id.split('-').pop()?.toUpperCase()}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-display tracking-tight leading-tight">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  {product.longDesc}
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium font-sans">
                    <ShieldCheck className="w-4 h-4" />
                    Custom-build eligible
                  </span>
              
                </div>
              </div>
            </div>

            {/* Specifications Matrix Section */}
            <div className="space-y-4">
              <h4 className="text-md font-bold font-display text-gray-950 flex items-center gap-1.5">
                <span className="w-1 h-4 bg-brand-secondary rounded-full" />
                Engineering Specifications Matrix
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-sans">
                {Object.entries(product.specifications).map(([key, val], i) => (
                  <div
                    key={key}
                    className={`flex justify-between items-start gap-4 px-4 py-3 rounded-lg border text-sm transition-all ${
                      i % 2 === 0
                        ? 'bg-brand-bg/50 border-blue-50/55'
                        : 'bg-white border-blue-50/55'
                    }`}
                  >
                    <span className="text-gray-400 font-medium shrink-0">{key}</span>
                    <span className="text-gray-900 font-bold text-right break-words">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related/Companion Implements Horizontal List */}
            {relatedProducts.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-blue-50">
                <h4 className="text-md font-bold font-display text-gray-950 flex items-center gap-1.5">
                  <span className="w-1 h-4 bg-brand-indigo rounded-full" />
                  Companion Equipment Systems
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedProducts.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => {
                        onSelectProduct(rel);
                        const element = document.getElementById('root');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex items-center gap-4 p-3 rounded-xl border border-blue-50/40 hover:border-brand-primary/40 bg-brand-bg/30 hover:bg-white cursor-pointer transition-all duration-300 group"
                    >
                      <div className="w-16 h-12 rounded-lg overflow-hidden bg-white shrink-0 border border-gray-100">
                        <img
                          src={rel.image}
                          alt={rel.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain p-1 transition-transform group-hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h5 className="text-xs font-bold text-gray-950 truncate group-hover:text-brand-primary transition-colors font-display">
                          {rel.name}
                        </h5>
                        <p className="text-[10px] text-gray-400 font-sans tracking-wide truncate">
                          {rel.category} • View Companion
                        </p>
                      </div>
                      <Check className="w-4 h-4 text-brand-secondary stroke-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Form Actions bottom tray */}
          <div className="bg-brand-bg px-6 py-5 border-t border-blue-50 flex flex-wrap gap-4 items-center justify-between rounded-b-3xl">
            <div className="hidden sm:block text-xs font-sans text-gray-400 font-medium">
              Reference code: APX-SYS-{product.id.split('-').pop()?.toUpperCase()}
            </div>
            
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-grow sm:flex-none border border-blue-100 text-gray-600 hover:bg-gray-100 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Sheets
              </button>
              
              <a
                href={`https://wa.me/919173159016?text=${encodeURIComponent(product.name + '\n\nI have a requirement for this product.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex-grow sm:flex-none bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 group"
              >
                <span>WhatsApp</span>
                <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
