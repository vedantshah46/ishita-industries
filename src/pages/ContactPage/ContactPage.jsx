import React from 'react';
import NavbarRouter from '../../components/Navbar/NavbarRouter';
import Footer from '../../components/Footer/Footer';
import ContactHeroSection from './ContactHeroSection';
import ContactInfoSection from './ContactInfoSection';
import ContactFormSection from './ContactFormSection';
import ContactMapSection from './ContactMapSection';

const ContactPage = () => {
  return (
    <>
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
