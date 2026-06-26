import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, User, Building2, Mail, Phone, Bookmark, MessageSquare, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "b3a8c55a-0c48-4746-842a-3ec68e98b154",
        ...formData,
        subject: `New Contact Message from ${formData.name} - Unique Techno Mech`,
        from_name: formData.name,
      })
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    })
    .catch(error => {
      setLoading(false);
      console.error("Form submission error:", error);
      alert("There was an error sending your message. Please try again.");
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/[0.04] border border-blue-50/70 p-6 md:p-8 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!success ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            <div>
              <h3 className="text-xl font-bold font-display text-gray-900 border-b pb-3 mb-5 border-blue-50 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-primary rounded-full" />
                Fill Engineering Inquiry
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="relative">
                <label htmlFor="name" className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="relative">
                <label htmlFor="company" className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Building2 className="w-4 h-4" />
                  </span>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter Organization"
                    className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="relative">
                <label htmlFor="phone" className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans"
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div className="relative">
              <label htmlFor="subject" className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
                Subject
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Bookmark className="w-4 h-4" />
                </span>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Parts replacement timeline"
                  className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <label htmlFor="message" className="text-xs font-semibold text-gray-500 uppercase tracking-widest pl-1 block mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-4 text-gray-400">
                  <MessageSquare className="w-4 h-4" />
                </span>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your equipment requirements here..."
                  className="w-full pl-10 pr-4 py-3 bg-brand-bg/50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-sans resize-y min-h-[100px]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              id="submit-contact"
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 bg-brand-primary hover:bg-brand-accent text-white font-bold rounded-lg shadow-lg shadow-brand-primary/20 transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing Package...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-6 border border-green-200"
            >
              <CheckCircle2 className="w-12 h-12" />
            </motion.div>
            
            <h3 className="text-2xl font-extrabold font-display text-gray-900 tracking-tight">
              Inquiry Dispatched Successfully!
            </h3>
            <p className="mt-3 text-sm text-gray-500 max-w-sm font-sans leading-relaxed">
              We appreciate you contacting Unique Techno Mech. An expert technician will evaluate your specifications and reply via email within 4-6 business hours.
            </p>
            
            <button
              onClick={() => setSuccess(false)}
              className="mt-8 px-6 py-2.5 bg-brand-primary hover:bg-brand-accent text-white font-semibold rounded-lg text-xs tracking-wider uppercase transition-colors pointer-events-auto cursor-pointer"
            >
              Submit Another Request
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
