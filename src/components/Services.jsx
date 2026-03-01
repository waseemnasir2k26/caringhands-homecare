import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaHandsHelping,
  FaHeart,
  FaPills,
  FaCar,
  FaUtensils,
  FaBriefcaseMedical
} from 'react-icons/fa';
import { services } from '../data/services';

const iconMap = {
  FaHandsHelping,
  FaHeart,
  FaPills,
  FaCar,
  FaUtensils,
  FaBriefcaseMedical
};

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const Icon = iconMap[service.icon];
  const delayClass = `animate-delay-${(index + 1) * 100}`;

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 ${
        inView ? `animate-fade-in-up ${delayClass}` : 'opacity-0'
      }`}
    >
      <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        {Icon && <Icon className="text-3xl text-teal" />}
      </div>
      <h3 className="text-xl font-semibold text-darkText mb-3">{service.title}</h3>
      <p className="text-lightText leading-relaxed">{service.description}</p>
    </div>
  );
};

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 md:py-28 bg-softWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-darkText mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
