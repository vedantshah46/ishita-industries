import Navbar from "../../components/Navbar/NavbarRouter";
import Footer from "../../components/Footer/Footer";
import GlobalLogisticHeroSection from "./GlobalLogisticHeroSection";
import DeliveryResponsibilitySection from "./DeliveryResponsibilitySection";
import CompleteDeliverySection from "./CompleteDeliverySection";
import KeyBenefitsSection from "./KeyBenefitsSection";

function GlobalLogisticPage() {
  return (
    <>
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
