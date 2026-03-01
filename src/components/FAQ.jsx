import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaChevronDown } from 'react-icons/fa';
import { faqs } from '../data/faqs';

const FAQItem = ({ faq, isOpen, onClick, index }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 rounded"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-lg font-medium text-darkText pr-4">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <FaChevronDown className="text-teal" />
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-lightText leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-softWhite">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-darkText mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto rounded-full" />
        </div>

        {/* FAQ Accordion */}
        <div
          className={`bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
