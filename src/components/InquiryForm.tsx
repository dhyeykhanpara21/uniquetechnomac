import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShoppingBag, Send, User, Building2, Mail, Phone, MapPin, Hash, MessageSquare, Loader2, X } from 'lucide-react';
import { PRODUCTS } from '../data/websiteData';

export default function InquiryForm() {
  const [searchParams] = useSearchParams();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    productId: '',
    quantity: '1',
    message: ''
  });

  // If a URL parameter specifies raw product ID, pre-fill it!
  useEffect(() => {
    const pId = searchParams.get('product');
    if (pId && PRODUCTS.some(p => p.id === pId)) {
      setFormData(prev => ({ ...prev, productId: pId }));
    } else if (PRODUCTS.length > 0) {
      setFormData(prev => ({ ...prev, productId: PRODUCTS[0].id }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.productId || !formData.company || !formData.phone || !formData.city || !formData.state || !formData.message || !formData.quantity) return;
    
    setLoading(true);

    const productName = PRODUCTS.find(p => p.id === formData.productId)?.name || formData.productId;
    const { productId, ...submitData } = formData;
    
    fetch("https://formsubmit.co/ajax/vaishnani_d@yahoo.in", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...submitData,
        productName: productName,
        _subject: `New Inquiry from ${formData.name} - Unique Techno Mech`,
        _cc: "dhyeykhanpara21@gmail.com",
        _autoresponse: `Thank you for your inquiry, ${formData.name}! Our team at Unique Techno Mech has received your message and will prepare a formal commercial offer within 12 hours.`
      })
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      setSuccess(true);
    })
    .catch(error => {
      setLoading(false);
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    });
  };

  const handleCloseSuccess = () => {
    setSuccess(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      productId: PRODUCTS[0]?.id || '',
      quantity: '1',
      message: ''
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/[0.04] border border-blue-50/70 p-6 md:p-8 relative">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold font-display text-gray-900 border-b pb-3 mb-6 border-blue-50 flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-brand-primary" />
            Industrial Equipment Quotation
          </h3>
          <p className="text-xs text-gray-400 mt-1 font-sans">
            Please fill out this form in detail. Our metallurgy and technical division will prepare a formal commercial offer within 12 hours.
          </p>
        </div>

        {/* Name and Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans"
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
              Company / Association <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Building2 className="w-4 h-4" />
              </span>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Agro Co-op India"
                className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans"
              />
            </div>
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="contact@enterprise.com"
                className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans"
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Phone className="w-4 h-4" />
              </span>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number (with Country Code)"
                className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans"
              />
            </div>
          </div>
        </div>

        {/* City and State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <MapPin className="w-4 h-4" />
              </span>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Frankfurt / Mumbai"
                className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans"
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
              State / Region <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <MapPin className="w-4 h-4" />
              </span>
              <input
                type="text"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                placeholder="e.g. Hesse / Maharashtra"
                className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans"
              />
            </div>
          </div>
        </div>

        {/* Product Dropdown and Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="relative md:col-span-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
              Selected Equipment <span className="text-red-500">*</span>
            </label>
            <div className="relative font-sans text-sm">
              <select
                name="productId"
                value={formData.productId}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all outline-none appearance-none cursor-pointer"
              >
                {PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    {prod.name} ({prod.category})
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-600">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
              Units Required <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Hash className="w-4 h-4" />
              </span>
              <input
                type="number"
                name="quantity"
                required
                min={1}
                value={formData.quantity}
                onChange={handleChange}
                placeholder="1"
                className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
            Detailed Technical Requirements <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-4 text-gray-400">
              <MessageSquare className="w-4 h-4" />
            </span>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide information on soil types, custom hydraulic couplings, delivery location constraints, or special accessories..."
              className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans resize-y min-h-[100px]"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-brand-primary hover:bg-brand-accent text-white font-bold rounded-lg shadow-lg shadow-brand-primary/20 transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-2 group pointer-events-auto cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Requirements...</span>
            </>
          ) : (
            <>
              <span>Submit Quotation Request</span>
              <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>
      </form>

      {/* Success Popup Modal */}
      <AnimatePresence>
        {success && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseSuccess}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal Content container */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative border border-blue-50 z-10"
            >
              <button
                onClick={handleCloseSuccess}
                className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center py-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 220, delay: 0.15 }}
                  className="w-16 h-16 bg-blue-50 text-brand-secondary rounded-full border border-blue-100 flex items-center justify-center mx-auto mb-5"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>

                <h3 className="text-2xl font-bold font-display text-gray-900 leading-tight">
                  Commercial Request Initiated!
                </h3>
                
                <p className="mt-3 text-sm text-gray-500 leading-relaxed font-sans max-w-sm mx-auto">
                  Your inquiry has been stored securely. Our Global Trade division is already coordinating with our technical team. A comprehensive proposal, pricing sheet, and delivery estimate sheet is on its way.
                </p>

                <div className="mt-6 p-4 bg-brand-bg rounded-xl border border-blue-50/50 text-left space-y-1 text-xs text-gray-600">
                  <div><strong className="text-gray-900">Reference:</strong> #INQ-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div><strong className="text-gray-900">Selected Product:</strong> {PRODUCTS.find(p => p.id === formData.productId)?.name}</div>
                  <div><strong className="text-gray-900">Quantity Required:</strong> {formData.quantity} units</div>
                  <div><strong className="text-gray-900">Primary Contact:</strong> {formData.email}</div>
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    onClick={handleCloseSuccess}
                    className="px-6 py-3 bg-brand-primary hover:bg-brand-accent text-white hover:shadow-lg font-semibold rounded-lg text-xs uppercase tracking-wider transition-all pointer-events-auto cursor-pointer"
                  >
                    Return and Continue
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
