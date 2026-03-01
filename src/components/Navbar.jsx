import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaHeart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { to: 'services', label: 'Services' },
    { to: 'about', label: 'About Us' },
    { to: 'testimonials', label: 'Testimonials' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <FaHome className="text-2xl text-navy" />
              <FaHeart className="text-xs text-teal absolute -top-1 -right-1" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-navy">
              CaringHands <span className="text-teal">Home Care</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-darkText hover:text-teal cursor-pointer transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="bg-gold text-navy px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-navy focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-16 right-0 w-64 h-screen bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="text-darkText hover:text-teal cursor-pointer transition-colors duration-300 font-medium py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="bg-gold text-navy px-6 py-3 rounded-full font-semibold text-center hover:bg-opacity-90 transition-all duration-300 cursor-pointer mt-4"
            onClick={handleLinkClick}
          >
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[-1]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
