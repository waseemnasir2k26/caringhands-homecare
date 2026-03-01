import React from 'react';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaClock, FaUserCheck, FaClipboardList } from 'react-icons/fa';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const trustBadges = [
    { icon: FaShieldAlt, text: 'Licensed & Insured' },
    { icon: FaClock, text: '24/7 Availability' },
    { icon: FaUserCheck, text: 'Background-Checked Caregivers' },
    { icon: FaClipboardList, text: 'Personalized Care Plans' }
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1B2A4A 0%, #2A9D8F 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Compassionate Care,
            <br />
            <span className="text-gold">Right at Your Doorstep</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10">
            Personalized homecare services that bring comfort, dignity, and independence
            to your loved ones — in the place they love most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="bg-gold text-navy px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-navy transition-all duration-300 cursor-pointer"
            >
              Our Services
            </Link>
          </div>

          {/* Trust Badges */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="bg-white/10 p-4 rounded-full mb-3">
                  <badge.icon className="text-2xl text-gold" />
                </div>
                <span className="text-white text-sm md:text-base font-medium">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-softWhite to-transparent" />
    </section>
  );
};

export default Hero;
