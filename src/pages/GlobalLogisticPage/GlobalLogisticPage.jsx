import SEO from '../../components/SEO/SEO';
import Navbar from "../../components/Navbar/NavbarRouter";
import Footer from "../../components/Footer/Footer";
import GlobalLogisticHeroSection from "./GlobalLogisticHeroSection";
import DeliveryResponsibilitySection from "./DeliveryResponsibilitySection";
import CompleteDeliverySection from "./CompleteDeliverySection";
import KeyBenefitsSection from "./KeyBenefitsSection";

function GlobalLogisticPage() {
  return (
    <>
      <SEO
        title="Global Logistics & Shipping - Worldwide Brass Components Delivery"
        description="Ishita Industries offers reliable global logistics and shipping services for brass components. EXW, FOB, CIF & DDP delivery terms. Export-grade packaging, customs documentation, and worldwide delivery to 25+ countries."
        keywords="brass components shipping, global logistics brass parts, brass exporter India, worldwide brass delivery, brass components export, international shipping brass, FOB CIF DDP brass"
        path="/global-logistic"
      />
      <Navbar />
      <GlobalLogisticHeroSection />
      <DeliveryResponsibilitySection />
      <CompleteDeliverySection />
      <KeyBenefitsSection />
      <Footer />
    </>
  );
}

export default GlobalLogisticPage;
