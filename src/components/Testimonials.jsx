import React from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { testimonials } from '../data/testimonials';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="px-4 py-2">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mx-auto max-w-2xl">
        {/* Quote Icon */}
        <div className="text-teal/30 mb-6">
          <FaQuoteLeft className="text-5xl" />
        </div>

        {/* Quote Text */}
        <p className="text-darkText text-lg md:text-xl leading-relaxed mb-8 italic">
          "{testimonial.quote}"
        </p>

        {/* Stars */}
        <div className="flex justify-center mb-6">
          {[...Array(testimonial.rating)].map((_, index) => (
            <FaStar key={index} className="text-gold text-xl mx-0.5" />
          ))}
        </div>

        {/* Reviewer Info */}
        <div className="text-center">
          <p className="font-semibold text-darkText text-lg">{testimonial.name}</p>
          <p className="text-lightText">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-softWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-darkText mb-4">
            What Families Say About Us
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto rounded-full" />
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
