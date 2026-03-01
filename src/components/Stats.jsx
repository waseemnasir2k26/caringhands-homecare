import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const stats = [
    { value: 500, suffix: '+', label: 'Families Served' },
    { value: 50, suffix: '+', label: 'Certified Caregivers' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 10, suffix: '+', label: 'Years of Experience' }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-2">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    enableScrollSpy={false}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <p className="text-white text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
