import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileCheck } from 'lucide-react';
import logo from '../../images/logo.jpeg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // Toggle solid layout state when scrolled past 25px
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Guarantee mobile drawer hides on path adjustments
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Inquiry', path: '/inquiry' },
    { name: 'Contact', path: '/contact-us' }
  ];

  // Determine navbar background styling
  const navbarBg = isHomePage
    ? isScrolled 
      ? 'bg-white shadow-[0_4px_30px_rgba(30,80,180,0.06)] border-b border-blue-50/50 py-3 text-gray-900' 
      : 'bg-transparent py-5 text-white'
    : 'bg-white shadow-[0_4px_30px_rgba(30,80,180,0.06)] border-b border-blue-100/50 py-3 text-gray-900';

  const linkActiveStyle = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 font-semibold text-sm tracking-wide font-sans cursor-pointer transition-all ${
      isActive
        ? isHomePage && !isScrolled ? 'text-white' : 'text-brand-primary'
        : isHomePage && !isScrolled ? 'text-blue-100 hover:text-white' : 'text-gray-600 hover:text-brand-primary'
    }`;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${navbarBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            
            {/* Logo left */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src={logo}
                alt="Unique Techno Mech Logo"
                className="w-10 h-10 object-contain rounded-xl"
              />
              <div className="flex flex-col">
                <span className={`text-lg md:text-xl font-extrabold font-display tracking-tight leading-none ${
                  isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'
                }`}>
                  UNIQUE <span className={`${isHomePage && !isScrolled ? 'text-blue-200' : 'text-brand-primary'}`}>TECHNO MECH</span>
                </span>
                <span className={`text-[9px] uppercase tracking-widest font-sans font-bold leading-none mt-1 ${
                  isHomePage && !isScrolled ? 'text-blue-200/80' : 'text-gray-400'
                }`}>
                  Gears & CNC Machining
                </span>
              </div>
            </Link>

            {/* Desktop Center Menu */}
            <div className="hidden md:flex items-center gap-7 lg:gap-10">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={linkActiveStyle}>
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeUnderline"
                          className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                            isHomePage && !isScrolled ? 'bg-white' : 'bg-brand-primary'
                          }`}
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right side: Blue Enquiry Button (Desktop) */}
            <div className="hidden md:flex items-center">
              <Link
                to="/inquiry"
                className={`inline-flex items-center gap-2 px-5 py-2.5 border font-bold uppercase tracking-wider text-xs rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 ${
                  isHomePage && !isScrolled
                    ? 'bg-white text-brand-primary border-white hover:bg-blue-50 shadow-white/10'
                    : 'bg-brand-primary text-white border-brand-primary hover:bg-brand-accent shadow-brand-primary/10'
                }`}
              >
                <FileCheck className="w-3.5 h-3.5" />
                <span>Get Quotation</span>
              </Link>
            </div>

            {/* Mobile Hamburger menu */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg cursor-pointer transition-colors ${
                  isHomePage && !isScrolled ? 'text-white hover:bg-white/15' : 'text-gray-700 hover:bg-blue-50'
                }`}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-35 flex md:hidden">
            {/* Dark glass backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            {/* Sliding drawers contents */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-xs bg-white text-gray-900 p-6 flex flex-col justify-between shadow-2xl border-l border-blue-50"
            >
              <div className="space-y-8 pt-16">
                <div className="flex items-center gap-2 border-b border-blue-50 pb-5">
                  <img
                    src={logo}
                    alt="Unique Techno Mech Logo"
                    className="w-10 h-10 object-contain rounded-xl"
                  />
                  <div>
                    <h4 className="text-md font-bold font-display text-gray-900 leading-none">UNIQUE TECHNO MECH</h4>
                    <span className="text-[9px] uppercase tracking-widest text-gray-400 font-sans font-bold block mt-1">Global Standard Components</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 font-sans font-semibold text-lg text-gray-700">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `py-2 px-3 rounded-xl transition-all ${
                          isActive 
                            ? 'bg-blue-50 text-brand-primary' 
                            : 'hover:bg-gray-50 text-gray-600 hover:text-brand-primary'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  to="/inquiry"
                  className="w-full text-center py-3.5 bg-brand-primary hover:bg-brand-accent text-white font-bold rounded-xl shadow-lg shadow-brand-primary/10 transition-colors uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Request Quotation</span>
                </Link>
                <p className="mt-4 text-[10px] text-gray-400 text-center font-sans tracking-wide">
                  © 2026 Unique Techno Mech
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
