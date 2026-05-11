import React from 'react';
import SEO from '../../components/SEO/SEO';
import Navbar from '../../components/Navbar/NavbarRouter';
import Footer from '../../components/Footer/Footer';
import ManufacturingProcessFlow from './ManufacturingProcessFlow';
import PrecisionExpertiseSection from '../HomePage/PrecisionExpertiseSection';
import WorkWithUsSection from '../ImportExportPage/WorkWithUsSection';

const ManufacturingProcessPage = () => {
  return (
    <>
      <SEO
        title="Manufacturing Process - CNC, VMC & Precision Brass Machining"
        description="Explore Ishita Industries' advanced brass manufacturing process. CNC turning, VMC milling, forging, extrusion, stamping and casting capabilities. German-standard precision engineering with state-of-the-art machinery in our 22,000 sq ft Jamnagar facility."
        keywords="brass manufacturing process, CNC turning brass, VMC milling brass, brass forging process, brass extrusion process, precision machining process, brass casting, brass stamping, manufacturing capabilities India"
        path="/manufacturing-process"
      />
      <Navbar />
      <ManufacturingProcessFlow />
      <PrecisionExpertiseSection className="mfg-precision-expertise" />
      <WorkWithUsSection />
      <Footer />
    </>
  );
};

export default ManufacturingProcessPage;
