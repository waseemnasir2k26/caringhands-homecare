import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCheck } from 'react-icons/fa';

const WhyChooseUs = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const benefits = [
    'Certified & experienced caregivers',
    'Customized care plans for every client',
    'Transparent communication with families',
    'Flexible scheduling — hourly, daily, or live-in care'
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${
              leftInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-darkText mb-8">
              Why Families Trust{' '}
              <span className="text-teal">CaringHands</span>
            </h2>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="bg-teal/10 p-2 rounded-full mt-0.5">
                    <FaCheck className="text-teal text-sm" />
                  </span>
                  <span className="text-darkText text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-lightText text-lg leading-relaxed">
              At CaringHands, we believe everyone deserves to age with grace and
              dignity in the comfort of their own home. Our mission is to deliver
              compassionate, reliable, and professional care that families can trust.
            </p>
          </div>

          {/* Right Visual */}
          <div
            ref={rightRef}
            className={`transition-all duration-1000 ${
              rightInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Abstract SVG Blob */}
              <svg
                viewBox="0 0 500 500"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1B2A4A" />
                    <stop offset="100%" stopColor="#2A9D8F" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#blobGradient)"
                  d="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99.5,339Q40,271,62,187.5Q84,104,155.5,66Q227,28,313,41Q399,54,431,127Q463,200,440.5,320.5Z"
                  opacity="0.1"
                />
                <path
                  fill="url(#blobGradient)"
                  d="M411,314Q392,378,334,413.5Q276,449,213.5,424Q151,399,98.5,340.5Q46,282,60,207Q74,132,142,89Q210,46,281,62Q352,78,395.5,134Q439,190,411,314Z"
                  opacity="0.2"
                  transform="translate(20, 20)"
                />
                <g transform="translate(250, 250)">
                  {/* Heart Icon */}
                  <path
                    fill="#2A9D8F"
                    d="M0,-50 C25,-75 75,-50 75,-25 C75,25 0,75 0,75 C0,75 -75,25 -75,-25 C-75,-50 -25,-75 0,-50"
                    opacity="0.8"
                  />
                  {/* House Icon */}
                  <path
                    fill="#1B2A4A"
                    d="M0,-30 L-40,10 L-30,10 L-30,40 L30,40 L30,10 L40,10 Z"
                    transform="translate(0, -10)"
                    opacity="0.9"
                  />
                </g>
              </svg>

              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-gold/20 rounded-full animate-pulse" />
              <div className="absolute bottom-20 right-10 w-12 h-12 bg-teal/20 rounded-full animate-pulse delay-300" />
              <div className="absolute top-1/2 right-0 w-8 h-8 bg-navy/10 rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
