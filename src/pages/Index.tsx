import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CaseStudies from "@/components/CaseStudies";
import ResumeSection from "@/components/ResumeSection";
import ContactFooter from "@/components/ContactFooter";
import { useScrollToElement } from "@/hooks/use-scroll-to-element";

const Index = () => {
  useScrollToElement();

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CaseStudies />
      <ResumeSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
