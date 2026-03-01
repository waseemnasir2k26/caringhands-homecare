import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaCheckCircle
} from 'react-icons/fa';
import { services } from '../data/services';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    contactTime: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[\d\s\-\(\)\+]{10,}$/;
    return regex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.contactTime) {
      newErrors.contactTime = 'Please select a preferred contact time';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: '',
      contactTime: '',
      message: ''
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    { icon: FaPhone, label: 'Phone', value: '(555) 123-4567' },
    { icon: FaEnvelope, label: 'Email', value: 'info@caringhandshomecare.com' },
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: '123 Care Street, Suite 100, Your City, State 12345'
    },
    {
      icon: FaClock,
      label: 'Hours',
      value: 'Mon–Fri 8AM–6PM, Sat 9AM–3PM\n24/7 Emergency Line'
    }
  ];

  const inputClasses =
    'w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300 outline-none';

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-darkText mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {isSubmitted && (
              <div className="mb-6 p-4 bg-teal/10 border border-teal rounded-xl flex items-center space-x-3">
                <FaCheckCircle className="text-teal text-xl" />
                <span className="text-darkText">
                  Thank you! We'll contact you soon.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-darkText font-medium mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`${inputClasses} ${
                    errors.fullName ? 'border-red-500' : ''
                  }`}
                  placeholder="John Doe"
                  aria-required="true"
                  aria-invalid={errors.fullName ? 'true' : 'false'}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Phone and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-darkText font-medium mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.phone ? 'border-red-500' : ''
                    }`}
                    placeholder="(555) 123-4567"
                    aria-required="true"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-darkText font-medium mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="john@example.com"
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Service and Contact Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="service"
                    className="block text-darkText font-medium mb-2"
                  >
                    Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.service ? 'border-red-500' : ''
                    }`}
                    aria-required="true"
                    aria-invalid={errors.service ? 'true' : 'false'}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contactTime"
                    className="block text-darkText font-medium mb-2"
                  >
                    Preferred Contact Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="contactTime"
                    name="contactTime"
                    value={formData.contactTime}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.contactTime ? 'border-red-500' : ''
                    }`}
                    aria-required="true"
                    aria-invalid={errors.contactTime ? 'true' : 'false'}
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                  </select>
                  {errors.contactTime && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contactTime}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-darkText font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={inputClasses}
                  placeholder="Tell us about your care needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gold text-navy py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Request Free Consultation
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-softWhite rounded-xl p-8 lg:p-10 h-full">
              <h3 className="text-2xl font-semibold text-darkText mb-8">
                Contact Information
              </h3>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-teal/10 p-3 rounded-full">
                      <item.icon className="text-teal text-xl" />
                    </div>
                    <div>
                      <p className="text-lightText text-sm">{item.label}</p>
                      <p className="text-darkText font-medium whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mb-10">
                <p className="text-darkText font-medium mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-navy text-white p-3 rounded-full hover:bg-teal transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-navy text-white p-3 rounded-full hover:bg-teal transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-navy text-white p-3 rounded-full hover:bg-teal transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
                <div className="text-center text-lightText">
                  <FaMapMarkerAlt className="text-4xl mx-auto mb-2" />
                  <p>Map Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
