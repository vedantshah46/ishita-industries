import React from 'react';
import SEO from '../../components/SEO/SEO';
import NavbarRouter from '../../components/Navbar/NavbarRouter';
import Footer from '../../components/Footer/Footer';
import ContactHeroSection from './ContactHeroSection';
import ContactInfoSection from './ContactInfoSection';
import ContactFormSection from './ContactFormSection';
import ContactMapSection from './ContactMapSection';

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us - Request a Quote for Brass Components"
        description="Contact Ishita Industries for precision brass components. Request a quote (RFQ) for turned, forged, milling, stamped & extrusion brass parts. Located in Jamnagar, Gujarat, India. Phone: +91 72289 81407. Email: raj@ishitabrass.com."
        keywords="contact ishita industries, brass components quote, RFQ brass parts, brass manufacturer contact, Jamnagar brass factory, brass components inquiry, brass parts quotation India"
        path="/contact"
      />
      <NavbarRouter />
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <ContactMapSection />
      <Footer />
    </>
  );
};

export default ContactPage;
