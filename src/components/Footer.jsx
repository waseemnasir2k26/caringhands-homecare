import React from 'react';
import { Link } from 'react-scroll';
import {
  FaHome,
  FaHeart,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import { services } from '../data/services';

const Footer = () => {
  const quickLinks = [
    { to: 'hero', label: 'Home' },
    { to: 'services', label: 'Services' },
    { to: 'about', label: 'About' },
    { to: 'testimonials', label: 'Testimonials' },
    { to: 'contact', label: 'Contact' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <FaHome className="text-2xl text-white" />
                <FaHeart className="text-xs text-teal absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold">
                CaringHands <span className="text-teal">Home Care</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Providing compassionate, professional homecare services to help your
              loved ones live with dignity and independence in the comfort of their
              own home.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-teal transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-teal transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-teal transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-teal cursor-pointer transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-teal cursor-pointer transition-colors duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaPhone className="text-teal mt-1" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-teal mt-1" />
                <span className="text-gray-400">info@caringhandshomecare.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-teal mt-1" />
                <span className="text-gray-400">
                  123 Care Street, Suite 100
                  <br />
                  Your City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} CaringHands Home Care. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-teal text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
