import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Inquiry from './pages/Inquiry';
import ContactUs from './pages/ContactUs';

// Scroll To Top on Path Change Wrapper
function ScrollToTop() {
  const { pathname, search } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Reset Scroll position on route navigation */}
      <ScrollToTop />

      <div className="flex flex-col min-h-screen bg-white font-sans text-brand-text antialiased">
        
        {/* Navigation Header */}
        <Navbar />

        {/* Core Layout Main Section */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* Fallback to index */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Floating Action Overlay Buttons (WhatsApp, Scroll Up, Inquiry) */}
        <FloatingButtons />

        {/* Global Footer Credits and Quick links */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
