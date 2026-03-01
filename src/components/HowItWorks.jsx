import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaPhoneAlt, FaClipboardCheck, FaHandHoldingHeart } from 'react-icons/fa';

const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      number: 1,
      icon: FaPhoneAlt,
      title: 'Get in Touch',
      description: 'Call us or fill out our contact form for a free consultation.'
    },
    {
      number: 2,
      icon: FaClipboardCheck,
      title: 'Personalized Care Plan',
      description: 'We assess needs and create a tailored care plan.'
    },
    {
      number: 3,
      icon: FaHandHoldingHeart,
      title: 'Care Begins',
      description: 'Your matched caregiver starts providing compassionate care at home.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-softWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-darkText mb-4">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto rounded-full" />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 border-t-2 border-dashed border-teal/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => {
              const delayClass = index === 0 ? '' : index === 1 ? 'md:delay-150' : 'md:delay-300';

              return (
                <div
                  key={step.number}
                  className={`relative transition-all duration-700 ${delayClass} ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: inView ? `${index * 150}ms` : '0ms' }}
                >
                  {/* Connecting Line - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute left-8 top-20 h-full w-0.5 border-l-2 border-dashed border-teal/30" />
                  )}

                  <div className="bg-white rounded-xl shadow-lg p-8 text-center relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-navy w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="bg-teal/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mt-4 mb-6">
                      <step.icon className="text-3xl text-teal" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-darkText mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lightText leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
