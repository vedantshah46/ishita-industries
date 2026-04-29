import React from 'react';
import Navbar from '../../components/Navbar/NavbarRouter';
import Footer from '../../components/Footer/Footer';
import ManufacturingProcessFlow from './ManufacturingProcessFlow';
import PrecisionExpertiseSection from '../HomePage/PrecisionExpertiseSection';
import WorkWithUsSection from '../ImportExportPage/WorkWithUsSection';

const ManufacturingProcessPage = () => {
  return (
    <>
      <Navbar />
      <ManufacturingProcessFlow />
      <PrecisionExpertiseSection className="mfg-precision-expertise" />
      <WorkWithUsSection />
      <Footer />
    </>
  );
};

export default ManufacturingProcessPage;
