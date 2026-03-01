import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CaringHands Home Care',
  description:
    'Professional homecare services providing personalized, compassionate care.',
  url: 'https://caringhandshomecare.com',
  telephone: '(555) 123-4567',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Care Street, Suite 100',
    addressLocality: 'Your City',
    addressRegion: 'State',
    postalCode: '12345'
  },
  openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-15:00',
  sameAs: []
};

function App() {
  return (
    <>
      <Helmet>
        <title>CaringHands Home Care | Compassionate In-Home Care Services</title>
        <meta
          name="description"
          content="Professional homecare services providing personalized, compassionate care for your loved ones. Licensed caregivers, flexible plans, 24/7 availability."
        />
        <meta
          name="keywords"
          content="home care, homecare, senior care, elderly care, caregiver, personal care, companion care, in-home care"
        />
        <link rel="canonical" href="https://caringhandshomecare.com" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="CaringHands Home Care | Compassionate In-Home Care Services"
        />
        <meta
          property="og:description"
          content="Professional homecare services providing personalized, compassionate care for your loved ones. Licensed caregivers, flexible plans, 24/7 availability."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://caringhandshomecare.com" />
        <meta
          property="og:image"
          content="https://caringhandshomecare.com/og-image.jpg"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CaringHands Home Care | Compassionate In-Home Care Services"
        />
        <meta
          name="twitter:description"
          content="Professional homecare services providing personalized, compassionate care for your loved ones."
        />
        <meta
          name="twitter:image"
          content="https://caringhandshomecare.com/og-image.jpg"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Skip to Content Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" role="main">
        <div id="hero">
          <Hero />
        </div>
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <Stats />
        <Contact />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}

export default App;
